import { z } from "zod";
import { HttpError } from "../lib/errors.js";
import type { GenerateJson } from "../rag/providers/gemini.js";
import {
  buildInput,
  GROUNDED_SCHEMA,
  GROUNDED_SYSTEM_PROMPT,
  PREVIEW_SCHEMA,
  PREVIEW_SYSTEM_PROMPT,
} from "../rag/prompts/ayurIp.prompt.js";

export type ResearchMode = "deep" | "quick";
export type Jurisdiction = "IN" | "EU" | "US" | "GLOBAL";

export type ChatRequest = {
  message: string;
  language: string;
  mode: ResearchMode;
  jurisdiction: Jurisdiction;
};

export type ChatSource = { id: string; title: string; url: string | null; score: number };

export type ChatResponse = {
  answer: string;
  sources: ChatSource[];
  /** True only when the answer is drawn from retrieved, cited documents. */
  grounded: boolean;
  insufficientEvidence?: boolean;
};

/** A retrieved chunk of a source document, as stored in rag_chunks/rag_documents. */
export type Evidence = { id: string; text: string; title: string; url: string | null; score: number };

/** Finds evidence for a question. Supplied once the pgvector document store exists. */
export type Retriever = (question: string) => Promise<Evidence[]>;

export type ChatServiceOptions = {
  generate: GenerateJson;
  /** Without a retriever, answers come from Gemini alone and are marked ungrounded. */
  retriever?: Retriever;
  /** Placeholder similarity threshold; tune it on an evaluation set. */
  minScore?: number;
};

export const ABSTAIN_ANSWER = "I do not have enough verified evidence to answer this safely.";

const groundedReply = z.object({
  answer: z.string(),
  cited_source_ids: z.array(z.string()),
  insufficient_evidence: z.boolean(),
});

const previewReply = z.object({
  answer: z.string(),
  insufficient_evidence: z.boolean(),
});

function parseReply<T>(schema: z.ZodType<T>, text: string): T {
  try {
    return schema.parse(JSON.parse(text));
  } catch {
    // Never pass malformed or blocked model output through to the user.
    console.warn("[chat] model returned an unreadable answer");
    throw new HttpError(502, "The AI service returned an unreadable answer. Please try again.");
  }
}

function abstain(grounded: boolean): ChatResponse {
  return { answer: ABSTAIN_ANSWER, sources: [], grounded, insufficientEvidence: true };
}

export function createChatService({ generate, retriever, minScore = 0.72 }: ChatServiceOptions) {
  async function answerFromEvidence(request: ChatRequest, retrieve: Retriever): Promise<ChatResponse> {
    const evidence = await retrieve(request.message);
    const best = evidence[0];
    if (!best || best.score < minScore) return abstain(true);

    // Label chunks SOURCE_1..n; only labels from this set are accepted back.
    const byLabel = new Map(evidence.map((item, i) => [`SOURCE_${i + 1}`, item]));
    const context = [...byLabel].map(([label, item]) => `[${label}] ${item.text}`).join("\n\n");
    const text = await generate({
      systemInstruction: GROUNDED_SYSTEM_PROMPT,
      input: buildInput(request.message, request.mode, request.jurisdiction, context),
      schema: GROUNDED_SCHEMA,
    });
    const reply = parseReply(groundedReply, text);
    const citationsOk = reply.cited_source_ids.length > 0 && reply.cited_source_ids.every((id) => byLabel.has(id));
    if (reply.insufficient_evidence || !citationsOk || !reply.answer.trim()) return abstain(true);

    const cited = [...new Set(reply.cited_source_ids)].map((id) => byLabel.get(id)!);
    return {
      answer: reply.answer.trim(),
      // Title and URL come from our database, never from the model.
      sources: cited.map(({ id, title, url, score }) => ({ id, title, url, score })),
      grounded: true,
    };
  }

  async function answerPreview(request: ChatRequest): Promise<ChatResponse> {
    const text = await generate({
      systemInstruction: PREVIEW_SYSTEM_PROMPT,
      input: buildInput(request.message, request.mode, request.jurisdiction),
      schema: PREVIEW_SCHEMA,
    });
    const reply = parseReply(previewReply, text);
    if (reply.insufficient_evidence || !reply.answer.trim()) return abstain(false);
    return { answer: reply.answer.trim(), sources: [], grounded: false };
  }

  return {
    ask(request: ChatRequest): Promise<ChatResponse> {
      return retriever ? answerFromEvidence(request, retriever) : answerPreview(request);
    },
  };
}

export type ChatService = ReturnType<typeof createChatService>;

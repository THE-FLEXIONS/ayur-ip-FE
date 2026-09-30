import type { LanguageCode } from "../config/app";
import type { AskRequest } from "../config/research";
import { ApiError, apiRequest, FALLBACK_MESSAGE } from "./api";

// Client for the AYUR-IP chat endpoint (POST /api/chat).

/** Longest question the API accepts. */
export const MAX_QUESTION_CHARS = 1000;

export type ChatSource = {
  id: string;
  title: string;
  url: string | null;
  score: number;
};

export type ChatResponse = {
  answer: string;
  sources: ChatSource[];
  /** False when the answer was not drawn from AYUR-IP's verified sources. */
  grounded?: boolean;
  insufficientEvidence?: boolean;
};

export { ApiError as ChatError };

function normalize(data: unknown): ChatResponse {
  const body = (data ?? {}) as Partial<ChatResponse>;
  if (typeof body.answer !== "string") throw new ApiError(FALLBACK_MESSAGE, 502);
  const sources = Array.isArray(body.sources)
    ? body.sources.filter((s): s is ChatSource => !!s && typeof s.id === "string" && typeof s.title === "string")
    : [];
  return {
    answer: body.answer,
    sources,
    grounded: body.grounded ?? sources.length > 0,
    insufficientEvidence: body.insufficientEvidence ?? false,
  };
}

/** Sends a question to the AYUR-IP assistant. Pass `signal` to cancel it. */
export async function askAssistant(request: AskRequest, language: LanguageCode, signal?: AbortSignal): Promise<ChatResponse> {
  const message = request.question.trim();
  if (!message) throw new ApiError("Please enter a question.", 400);
  if (message.length > MAX_QUESTION_CHARS) {
    throw new ApiError(`Questions can be up to ${MAX_QUESTION_CHARS} characters.`, 400);
  }
  const data = await apiRequest("/api/chat", {
    method: "POST",
    body: { message, language, mode: request.mode, jurisdiction: request.jurisdiction },
    signal,
  });
  return normalize(data);
}

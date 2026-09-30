import type { LanguageCode } from "../config/app";
import type { AskRequest } from "../config/research";

// Client for the AYUR-IP chat endpoint (POST /api/chat). Provider keys live on
// the server; the browser only ever talks to our own API.

const API_BASE = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "");
const REQUEST_TIMEOUT_MS = 45_000;

/** Longest question the API accepts. */
export const MAX_QUESTION_CHARS = 1000;

export type ChatSource = {
  id: string;
  title: string;
  url: string;
  score: number;
};

export type ChatResponse = {
  answer: string;
  sources: ChatSource[];
  /** False when the answer was not drawn from AYUR-IP's verified sources. */
  grounded?: boolean;
  insufficientEvidence?: boolean;
};

export class ChatError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ChatError";
  }
}

const STATUS_MESSAGES: Record<number, string> = {
  400: "That question could not be sent. Please check it and try again.",
  429: "Too many requests right now. Please try again in a minute.",
  503: "The research service is temporarily unavailable. Please try again shortly.",
};
const FALLBACK_MESSAGE = "Something went wrong. Please try again.";

async function errorFromResponse(res: Response): Promise<ChatError> {
  let serverMessage = "";
  try {
    const body = (await res.json()) as { error?: unknown };
    if (typeof body.error === "string") serverMessage = body.error;
  } catch {
    // Non-JSON error body; use the generic message for the status.
  }
  // Server messages are already user-safe; 5xx without one gets a generic line.
  const message = serverMessage || STATUS_MESSAGES[res.status] || (res.status >= 500 ? STATUS_MESSAGES[503] : FALLBACK_MESSAGE);
  return new ChatError(message, res.status);
}

function normalize(data: unknown): ChatResponse {
  const body = (data ?? {}) as Partial<ChatResponse>;
  if (typeof body.answer !== "string") throw new ChatError(FALLBACK_MESSAGE, 502);
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
  if (!message) throw new ChatError("Please enter a question.", 400);
  if (message.length > MAX_QUESTION_CHARS) {
    throw new ChatError(`Questions can be up to ${MAX_QUESTION_CHARS} characters.`, 400);
  }

  const timeout = AbortSignal.timeout(REQUEST_TIMEOUT_MS);
  const combined = signal ? AbortSignal.any([signal, timeout]) : timeout;

  let res: Response;
  try {
    res = await fetch(`${API_BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, language, mode: request.mode, jurisdiction: request.jurisdiction }),
      signal: combined,
    });
  } catch (err) {
    if (signal?.aborted) throw err;
    if (timeout.aborted) throw new ChatError("The answer is taking too long. Please try again.", 503);
    throw new ChatError("Can't reach the research service. Check your connection and try again.", 0);
  }

  if (!res.ok) throw await errorFromResponse(res);
  try {
    return normalize(await res.json());
  } catch (err) {
    if (err instanceof ChatError) throw err;
    throw new ChatError(FALLBACK_MESSAGE, 502);
  }
}

import { DEPLOYED_API_URL } from "../config/api";

// Shared request helper for the AYUR-IP API. Provider keys live on the server;
// the browser only ever talks to our own API.

// In development the Vite server proxies /api, so requests stay same-origin.
const API_BASE = (import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? DEPLOYED_API_URL : "")).replace(/\/+$/, "");
const DEFAULT_TIMEOUT_MS = 45_000;

/** An API failure with a message that is safe to show to the user. */
export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const FALLBACK_MESSAGE = "Something went wrong. Please try again.";

const STATUS_MESSAGES: Record<number, string> = {
  400: "That request could not be sent. Please check it and try again.",
  429: "Too many requests right now. Please try again in a minute.",
  503: "The research service is temporarily unavailable. Please try again shortly.",
};

async function errorFromResponse(res: Response): Promise<ApiError> {
  let serverMessage = "";
  try {
    const body = (await res.json()) as { error?: unknown };
    if (typeof body.error === "string") serverMessage = body.error;
  } catch {
    // Non-JSON error body; use the generic message for the status.
  }
  // Server messages are already user-safe; 5xx without one gets a generic line.
  const message = serverMessage || STATUS_MESSAGES[res.status] || (res.status >= 500 ? STATUS_MESSAGES[503] : FALLBACK_MESSAGE);
  return new ApiError(message, res.status);
}

let wakeRequested = false;

/**
 * Starts the API waking up. The free Render plan stops the server after 15 idle
 * minutes and takes about a minute to start again, so this is called once on
 * page load to begin that before the user asks anything. Failures are ignored.
 */
export function wakeApi() {
  if (wakeRequested) return;
  wakeRequested = true;
  fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(90_000) }).catch(() => {});
}

type RequestOptions = {
  method?: "GET" | "POST";
  body?: unknown;
  signal?: AbortSignal;
  timeoutMs?: number;
};

/** Calls `path` on the AYUR-IP API and returns the parsed JSON body. Aborts rethrow as-is. */
export async function apiRequest(path: string, { method = "GET", body, signal, timeoutMs = DEFAULT_TIMEOUT_MS }: RequestOptions = {}): Promise<unknown> {
  const timeout = AbortSignal.timeout(timeoutMs);
  const combined = signal ? AbortSignal.any([signal, timeout]) : timeout;

  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, {
      method,
      headers: body === undefined ? undefined : { "Content-Type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: combined,
    });
  } catch (err) {
    if (signal?.aborted) throw err;
    if (timeout.aborted) throw new ApiError("The request is taking too long. Please try again.", 503);
    throw new ApiError("Can't reach the research service. Check your connection and try again.", 0);
  }

  if (!res.ok) throw await errorFromResponse(res);
  try {
    return await res.json();
  } catch {
    throw new ApiError(FALLBACK_MESSAGE, 502);
  }
}

/** Returns `url` only if it is an http(s) URL, so API data can never become a script link. */
export function safeHttpUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.href : null;
  } catch {
    return null;
  }
}

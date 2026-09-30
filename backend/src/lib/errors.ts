/** An error whose message is safe to show to the user. */
export class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

/**
 * Converts a provider (Gemini) failure into a user-safe HttpError, following the
 * guide's mapping: quota errors become 429, everything else 503. The raw provider
 * error is never returned to the client; only its status is logged.
 */
export function providerError(provider: string, err: unknown): HttpError {
  const status = typeof (err as { status?: unknown })?.status === "number" ? (err as { status: number }).status : undefined;
  const name = err instanceof Error ? err.name : "UnknownError";
  console.warn(`[${provider}] request failed: ${name}${status ? ` (HTTP ${status})` : ""}`);
  if (status === 429) return new HttpError(429, "The AI service is busy. Please try again in a minute.");
  if (status === undefined && /timeout|abort/i.test(name)) {
    return new HttpError(503, "The AI service did not respond in time. Please try again.");
  }
  return new HttpError(503, "The AI service is temporarily unavailable. Please try again shortly.");
}

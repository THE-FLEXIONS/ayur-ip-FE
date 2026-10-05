import { request } from "./client";
import type { SuggestionKind } from "./types";

export type SuggestionInput = {
  kind: SuggestionKind;
  title: string;
  details?: string;
  sourceUrl?: string;
  email?: string;
};

export const formsApi = {
  subscribe: (email: string, source: string) =>
    request<{ subscribed: true }>("/newsletter/subscribe", { method: "POST", body: { email, source } }),
  suggest: (input: SuggestionInput) =>
    request<{ suggestion: { id: string } }>("/suggestions", { method: "POST", body: input }),
};

/** Resolves when the backend answers its health check; rejects with ApiError otherwise. */
export function checkHealth(signal?: AbortSignal) {
  return request<unknown>("/health", { signal });
}

/** Wakes the backend (Render's free plan sleeps) so the first real request is fast. */
export function warmUpServer() {
  request("/health").catch(() => undefined);
}

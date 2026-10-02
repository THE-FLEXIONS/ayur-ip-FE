import type { LanguageCode } from "../../config/app";
import type { AskRequest } from "../../config/research";
import { apiFetch } from "./client";
import type { HistoryEntry, Source } from "./types";

export type AskPayload = AskRequest & { language?: LanguageCode };

export type AskEvent =
  | { type: "start"; entry: HistoryEntry }
  | { type: "delta"; text: string }
  | { type: "sources"; sources: Source[] }
  | { type: "done"; entry: HistoryEntry | null }
  | { type: "error"; code: string; message: string };

/**
 * Asks a question and reports the streamed answer through `onEvent`.
 * Rejects with ApiError if the request is refused before streaming starts
 * (not signed in, rate limit, validation), or with AbortError when `signal`
 * is aborted.
 */
export async function askQuestion(payload: AskPayload, onEvent: (event: AskEvent) => void, signal: AbortSignal) {
  const res = await apiFetch("/ai/ask", { method: "POST", body: payload, signal });
  if (!res.body) throw new Error("Streaming isn't supported in this browser.");

  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
  let buffer = "";

  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += value;

    // Server-Sent Events are separated by a blank line.
    let boundary: number;
    while ((boundary = buffer.indexOf("\n\n")) >= 0) {
      const block = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);

      let name = "";
      let data = "";
      for (const line of block.split("\n")) {
        if (line.startsWith("event: ")) name = line.slice(7);
        else if (line.startsWith("data: ")) data += line.slice(6);
        // Lines starting with ":" are keep-alive pings.
      }
      if (name && data) onEvent({ type: name, ...JSON.parse(data) } as AskEvent);
    }
  }
}

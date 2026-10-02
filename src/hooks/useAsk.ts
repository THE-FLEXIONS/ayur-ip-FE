import { useCallback, useEffect, useRef, useState } from "react";
import type { LanguageCode } from "../config/app";
import type { AskRequest } from "../config/research";
import { askQuestion, toApiError, type HistoryEntry, type Source } from "../lib/api";

export type AnswerState = {
  status: "idle" | "streaming" | "done" | "error";
  request: AskRequest | null;
  /** History entry for this answer, once the server has created it. */
  entry: HistoryEntry | null;
  answer: string;
  sources: Source[];
  error: string | null;
};

const IDLE: AnswerState = { status: "idle", request: null, entry: null, answer: "", sources: [], error: null };

/**
 * Asks the AI and tracks the streamed answer. `onEntry` receives the history
 * entry whenever it changes (created, finished, failed, stopped), so History
 * stays in sync without reloading.
 */
export function useAsk(onEntry: (entry: HistoryEntry) => void) {
  const [state, setState] = useState<AnswerState>(IDLE);
  const controllerRef = useRef<AbortController | null>(null);
  // The answer so far, readable synchronously from event handlers and stop().
  const liveRef = useRef<{ entry: HistoryEntry | null; answer: string; sources: Source[] }>({
    entry: null,
    answer: "",
    sources: [],
  });
  const onEntryRef = useRef(onEntry);
  onEntryRef.current = onEntry;

  // Stop any answer still streaming if the app unmounts.
  useEffect(() => () => controllerRef.current?.abort(), []);

  /** Reports the live entry to History with the given final status. */
  const settleEntry = useCallback((status: HistoryEntry["status"], errorMessage: string | null = null) => {
    const { entry, answer, sources } = liveRef.current;
    if (entry) onEntryRef.current({ ...entry, answer, sources, status, errorMessage, completedAt: Date.now() });
  }, []);

  const ask = useCallback(
    async (request: AskRequest, language: LanguageCode) => {
      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;
      liveRef.current = { entry: null, answer: "", sources: [] };
      setState({ ...IDLE, status: "streaming", request });

      let finished = false;
      const fail = (message: string) => {
        finished = true;
        settleEntry("error", message);
        setState((s) => ({ ...s, status: "error", error: message }));
      };

      try {
        await askQuestion(
          { ...request, tool: request.tool ?? null, language },
          (event) => {
            const live = liveRef.current;
            switch (event.type) {
              case "start":
                live.entry = event.entry;
                onEntryRef.current(event.entry);
                setState((s) => ({ ...s, entry: event.entry }));
                break;
              case "delta":
                live.answer += event.text;
                setState((s) => ({ ...s, answer: live.answer }));
                break;
              case "sources":
                live.sources = event.sources;
                setState((s) => ({ ...s, sources: event.sources }));
                break;
              case "done":
                finished = true;
                if (event.entry) {
                  live.entry = event.entry;
                  onEntryRef.current(event.entry);
                } else {
                  settleEntry("complete");
                }
                setState((s) => ({ ...s, status: "done", entry: event.entry ?? s.entry }));
                break;
              case "error":
                fail(event.message);
                break;
            }
          },
          controller.signal,
        );
        // Stream closed without a done/error event (e.g. the connection dropped).
        if (!finished && !controller.signal.aborted) fail("The connection was interrupted. Please try again.");
      } catch (err) {
        if (controller.signal.aborted) return;
        fail(toApiError(err).message);
      } finally {
        if (controllerRef.current === controller) controllerRef.current = null;
      }
    },
    [settleEntry],
  );

  /** Stops generating; whatever arrived so far stays on screen and in History. */
  const stop = useCallback(() => {
    if (!controllerRef.current) return;
    controllerRef.current.abort();
    controllerRef.current = null;
    settleEntry("aborted");
    setState((s) => (s.status === "streaming" ? { ...s, status: "done" } : s));
  }, [settleEntry]);

  const reset = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
      settleEntry("aborted");
    }
    setState(IDLE);
  }, [settleEntry]);

  return { ...state, ask, stop, reset };
}

export type AskController = ReturnType<typeof useAsk>;

import { request } from "./client";
import type { HistoryEntry, Preferences } from "./types";

export const historyApi = {
  list: () => request<{ entries: HistoryEntry[] }>("/history").then((r) => r.entries),
  setSaved: (id: string, saved: boolean) =>
    request<{ entry: HistoryEntry }>(`/history/${id}`, { method: "PATCH", body: { saved } }).then((r) => r.entry),
  remove: (id: string) => request<void>(`/history/${id}`, { method: "DELETE" }),
  /** Deletes unsaved entries; saved ones are kept. */
  clear: () => request<{ removed: number }>("/history", { method: "DELETE" }),
};

export const preferencesApi = {
  get: () => request<{ preferences: Preferences }>("/preferences").then((r) => r.preferences),
  update: (patch: Partial<Preferences>) =>
    request<{ preferences: Preferences }>("/preferences", { method: "PATCH", body: patch }).then((r) => r.preferences),
};

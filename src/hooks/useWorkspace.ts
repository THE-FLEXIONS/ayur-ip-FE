import { useCallback, useEffect, useState } from "react";
import { historyApi, preferencesApi, toApiError, type HistoryEntry, type Preferences } from "../lib/api";
import { useAuth } from "./useAuth";

export type { HistoryEntry, Preferences };

const GUEST_PREFS_KEY = "ayurip.preferences.v1";
const DEFAULT_PREFERENCES: Preferences = { mode: "deep", jurisdiction: "IN", language: "en" };

function loadGuestPreferences(): Preferences {
  try {
    const raw = localStorage.getItem(GUEST_PREFS_KEY);
    return raw ? { ...DEFAULT_PREFERENCES, ...(JSON.parse(raw) as Partial<Preferences>) } : DEFAULT_PREFERENCES;
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

function saveGuestPreferences(prefs: Preferences) {
  try {
    localStorage.setItem(GUEST_PREFS_KEY, JSON.stringify(prefs));
  } catch {
    // Storage unavailable; the preference still applies for this visit.
  }
}

export type WorkspaceStatus = "guest" | "loading" | "ready" | "error";

/**
 * Questions the user has asked, which of them they saved, and their research
 * defaults. Signed in: kept in the user's account on the backend. Guest: no
 * history (asking needs an account), preferences kept in this browser.
 */
export function useWorkspace() {
  const auth = useAuth();
  const userId = auth.user?.id ?? null;

  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [preferences, setPreferences] = useState<Preferences>(loadGuestPreferences);
  const [status, setStatus] = useState<WorkspaceStatus>("guest");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setStatus("loading");
    setError(null);
    try {
      const [entries, prefs] = await Promise.all([historyApi.list(), preferencesApi.get()]);
      setHistory(entries);
      setPreferences(prefs);
      setStatus("ready");
    } catch (err) {
      setError(toApiError(err).message);
      setStatus("error");
    }
  }, []);

  // Load the account's workspace on sign-in; reset to guest on sign-out.
  useEffect(() => {
    if (userId) {
      void load();
    } else if (auth.status === "guest") {
      setHistory([]);
      setPreferences(loadGuestPreferences());
      setStatus("guest");
    }
  }, [userId, auth.status, load]);

  /** Adds a new entry or replaces one with the same id (used while an answer streams in). */
  const upsertEntry = useCallback((entry: HistoryEntry) => {
    setHistory((list) =>
      list.some((e) => e.id === entry.id) ? list.map((e) => (e.id === entry.id ? entry : e)) : [entry, ...list],
    );
  }, []);

  // Changes apply immediately and are rolled back if the server refuses them.
  const toggleSaved = useCallback(
    (id: string) => {
      const current = history.find((e) => e.id === id);
      if (!current) return;
      const saved = !current.saved;
      setHistory((list) => list.map((e) => (e.id === id ? { ...e, saved } : e)));
      historyApi.setSaved(id, saved).catch((err) => {
        setHistory((list) => list.map((e) => (e.id === id ? { ...e, saved: !saved } : e)));
        setError(toApiError(err).message);
      });
    },
    [history],
  );

  const removeEntry = useCallback(
    (id: string) => {
      const previous = history;
      setHistory((list) => list.filter((e) => e.id !== id));
      historyApi.remove(id).catch((err) => {
        setHistory(previous);
        setError(toApiError(err).message);
      });
    },
    [history],
  );

  const clearHistory = useCallback(() => {
    const previous = history;
    // Saved questions are kept; only the unsaved history is cleared.
    setHistory((list) => list.filter((e) => e.saved));
    historyApi.clear().catch((err) => {
      setHistory(previous);
      setError(toApiError(err).message);
    });
  }, [history]);

  const updatePreferences = useCallback(
    (patch: Partial<Preferences>) => {
      const previous = preferences;
      const next = { ...preferences, ...patch };
      setPreferences(next);
      if (!userId) {
        saveGuestPreferences(next);
        return;
      }
      preferencesApi.update(patch).catch((err) => {
        setPreferences(previous);
        setError(toApiError(err).message);
      });
    },
    [preferences, userId],
  );

  return {
    status,
    /** Last failed action's message, shown by the workspace pages. */
    error,
    dismissError: () => setError(null),
    reload: load,
    history,
    preferences,
    upsertEntry,
    toggleSaved,
    removeEntry,
    clearHistory,
    updatePreferences,
  };
}

export type Workspace = ReturnType<typeof useWorkspace>;

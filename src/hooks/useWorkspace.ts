import { useCallback, useEffect, useState } from "react";
import type { LanguageCode } from "../config/app";
import type { AskRequest, Jurisdiction, ResearchMode } from "../config/research";

export type HistoryEntry = AskRequest & {
  id: string;
  askedAt: number;
  saved: boolean;
};

export type Preferences = {
  mode: ResearchMode;
  jurisdiction: Jurisdiction;
  language: LanguageCode;
};

type WorkspaceState = {
  history: HistoryEntry[];
  preferences: Preferences;
};

const STORAGE_KEY = "ayurip.workspace.v1";
const MAX_HISTORY = 100;

const DEFAULT_STATE: WorkspaceState = {
  history: [],
  preferences: { mode: "deep", jurisdiction: "IN", language: "en" },
};

function load(): WorkspaceState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as Partial<WorkspaceState>;
    return {
      history: Array.isArray(parsed.history) ? parsed.history : [],
      preferences: { ...DEFAULT_STATE.preferences, ...parsed.preferences },
    };
  } catch {
    return DEFAULT_STATE;
  }
}

/**
 * Questions the user has asked, which of them they saved, and their research
 * defaults. Kept in this browser's localStorage until an account backend exists.
 */
export function useWorkspace() {
  const [state, setState] = useState<WorkspaceState>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage can be unavailable (private mode, quota); the session still works in memory.
    }
  }, [state]);

  const addQuestion = useCallback((request: AskRequest) => {
    const entry: HistoryEntry = {
      ...request,
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      askedAt: Date.now(),
      saved: false,
    };
    setState((s) => ({ ...s, history: [entry, ...s.history].slice(0, MAX_HISTORY) }));
    return entry.id;
  }, []);

  const toggleSaved = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      history: s.history.map((e) => (e.id === id ? { ...e, saved: !e.saved } : e)),
    }));
  }, []);

  const removeEntry = useCallback((id: string) => {
    setState((s) => ({ ...s, history: s.history.filter((e) => e.id !== id) }));
  }, []);

  const clearHistory = useCallback(() => {
    // Saved questions are kept; only the unsaved history is cleared.
    setState((s) => ({ ...s, history: s.history.filter((e) => e.saved) }));
  }, []);

  const updatePreferences = useCallback((patch: Partial<Preferences>) => {
    setState((s) => ({ ...s, preferences: { ...s.preferences, ...patch } }));
  }, []);

  return {
    history: state.history,
    preferences: state.preferences,
    addQuestion,
    toggleSaved,
    removeEntry,
    clearHistory,
    updatePreferences,
  };
}

export type Workspace = ReturnType<typeof useWorkspace>;

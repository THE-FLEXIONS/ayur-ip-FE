import { useCallback, useState, type SetStateAction } from "react";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

/**
 * useState that is also kept in this browser's localStorage, for per-device
 * conveniences (tool drafts, checklists, recent results). Falls back to plain
 * state when storage is unavailable.
 */
export function useLocalState<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => read(key, fallback));

  const update = useCallback(
    (next: SetStateAction<T>) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        try {
          localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          // Storage unavailable; the value still applies for this visit.
        }
        return resolved;
      });
    },
    [key],
  );

  return [value, update] as const;
}

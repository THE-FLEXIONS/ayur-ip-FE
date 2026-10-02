import { useEffect, useState } from "react";

/**
 * True once `busy` has lasted longer than `delayMs`. Used to explain a slow
 * first request: the free backend sleeps and takes ~30-60s to wake up.
 */
export function useSlowHint(busy: boolean, delayMs = 5000): boolean {
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    if (!busy) {
      setSlow(false);
      return;
    }
    const timer = window.setTimeout(() => setSlow(true), delayMs);
    return () => window.clearTimeout(timer);
  }, [busy, delayMs]);
  return slow;
}

export const WAKING_SERVER_MESSAGE = "Waking up the server. The first request can take up to a minute.";

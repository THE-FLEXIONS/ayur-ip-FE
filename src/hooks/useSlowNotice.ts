import { useEffect, useState } from "react";

/** True once `active` has stayed true for `delayMs`, e.g. to explain a slow request. */
export function useSlowNotice(active: boolean, delayMs = 8_000): boolean {
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    setSlow(false);
    if (!active) return;
    const timer = setTimeout(() => setSlow(true), delayMs);
    return () => clearTimeout(timer);
  }, [active, delayMs]);
  return slow;
}

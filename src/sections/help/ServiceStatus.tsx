import { useCallback, useEffect, useState } from "react";
import { APP_VERSION } from "../../config/app";
import { checkHealth } from "../../lib/api";

type State = { kind: "checking" } | { kind: "online"; ms: number } | { kind: "waking" } | { kind: "offline" };

const STYLE = {
  checking: { dot: "bg-[#a9b0a9] animate-pulse", label: "Checking…" },
  online: { dot: "bg-[#2c8a52]", label: "Operational" },
  waking: { dot: "bg-[#d29a22] animate-pulse", label: "Waking up" },
  offline: { dot: "bg-[#c8503a]", label: "Unreachable" },
} as const;

/** Live check of the AI backend, so users know whether a slow answer is on our side. */
export default function ServiceStatus() {
  const [state, setState] = useState<State>({ kind: "checking" });

  const run = useCallback(() => {
    const controller = new AbortController();
    const started = performance.now();
    setState({ kind: "checking" });
    // The free hosting plan sleeps; a slow first reply means it's starting up.
    const slow = setTimeout(() => setState({ kind: "waking" }), 2500);
    const giveUp = setTimeout(() => controller.abort(), 60000);
    checkHealth(controller.signal)
      .then(() => setState({ kind: "online", ms: Math.round(performance.now() - started) }))
      .catch(() => setState({ kind: "offline" }))
      .finally(() => {
        clearTimeout(slow);
        clearTimeout(giveUp);
      });
    return () => {
      clearTimeout(slow);
      clearTimeout(giveUp);
      controller.abort();
    };
  }, []);

  useEffect(() => run(), [run]);

  const s = STYLE[state.kind];
  const rows = [
    { name: "AI research service", status: s, detail: state.kind === "online" ? `${state.ms} ms` : state.kind === "waking" ? "First request after idle" : "" },
    { name: "Guided tools", status: STYLE.online, detail: "Run in your browser" },
    { name: "Resources directory", status: STYLE.online, detail: "Run in your browser" },
  ];

  return (
    <section aria-label="Service status" className="rounded-[24px] border border-[#ecebe3] bg-white/85 p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[16px] font-semibold text-ayur-ink">Service status</h2>
        <button
          type="button"
          onClick={run}
          disabled={state.kind === "checking" || state.kind === "waking"}
          className="rounded-full px-3 py-1 text-[12.5px] font-medium text-ayur-green hover:bg-ayur-mint/60 disabled:opacity-50"
        >
          Recheck
        </button>
      </div>
      <ul className="mt-3 space-y-2.5" aria-live="polite">
        {rows.map((row) => (
          <li key={row.name} className="flex items-center gap-3 text-[13.5px]">
            <span className={`size-2.5 shrink-0 rounded-full ${row.status.dot}`} aria-hidden="true" />
            <span className="min-w-0 flex-1 text-ayur-ink">{row.name}</span>
            <span className="text-right text-[12.5px] text-ayur-muted">
              {row.status.label}
              {row.detail && <span className="block text-[11.5px] text-[#9aa19a]">{row.detail}</span>}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-[#efeee6] pt-3 text-[12px] text-[#8a918a]">AyurIP v{APP_VERSION}</p>
    </section>
  );
}

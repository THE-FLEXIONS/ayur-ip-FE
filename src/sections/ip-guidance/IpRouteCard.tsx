import { useId, useState } from "react";
import { ChevronDownIcon } from "../../components/ui/LineIcons";
import { TonePill } from "../../components/ui/ToolKit";
import { FIT_LABEL, FIT_TONE, type IpRoute } from "../../config/ipGuidance";

/** One recommended IP route; expands to show the filing steps. */
export default function IpRouteCard({ route, defaultOpen = false }: { route: IpRoute; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const unsuitable = route.fit === "unsuitable";

  return (
    <article className={`overflow-hidden rounded-[20px] border bg-white/90 ${unsuitable ? "border-[#ecebe3] opacity-90" : "border-[#e3e7dc]"}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-3 px-4 py-4 text-left hover:bg-[#fafbf7] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ayur-green sm:px-5"
      >
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-[16px] font-semibold text-ayur-ink">{route.name}</span>
            <TonePill tone={FIT_TONE[route.fit]}>{FIT_LABEL[route.fit]}</TonePill>
          </span>
          <span className="mt-1 block text-[13.5px] leading-relaxed text-ayur-muted">{route.fitNote}</span>
        </span>
        <ChevronDownIcon size={20} strokeWidth={1.8} className={`mt-1 shrink-0 text-ayur-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div id={panelId} className="border-t border-[#efeee6] px-4 pb-5 pt-4 sm:px-5">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-[13.5px]">
            {[
              ["Protects", route.protects],
              ["Term", route.term],
              ["Official fee", route.fee],
              ["Timeline", route.timeline],
            ].map(([label, value]) => (
              <div key={label} className="min-w-0">
                <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#7a817a]">{label}</dt>
                <dd className="mt-0.5 leading-snug text-ayur-ink">{value}</dd>
              </div>
            ))}
          </dl>

          <h4 className="mt-5 text-[13.5px] font-semibold text-ayur-ink">How to file</h4>
          <ol className="mt-2 space-y-2">
            {route.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-[13.5px] leading-relaxed text-[#3d4840]">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ayur-mint text-[12px] font-semibold text-ayur-green-deep">{i + 1}</span>
                <span className="min-w-0 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>

          {route.watchOuts.length > 0 && (
            <div className="mt-4 rounded-2xl bg-[#fbf5e6] px-4 py-3">
              <h4 className="text-[13px] font-semibold text-[#7a5410]">Watch out</h4>
              <ul className="mt-1.5 space-y-1.5">
                {route.watchOuts.map((w) => (
                  <li key={w} className="text-[13px] leading-relaxed text-[#5c4a22]">
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-4 text-[12.5px] text-ayur-muted">
            {route.law} ·{" "}
            <a href={route.portal.url} target="_blank" rel="noreferrer" className="font-medium text-ayur-green underline-offset-4 hover:underline">
              {route.portal.label} ↗
            </a>
          </p>
        </div>
      )}
    </article>
  );
}

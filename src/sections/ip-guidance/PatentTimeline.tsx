import { PATENT_TIMELINE } from "../../config/ipGuidance";

/** The Indian patent journey: vertical on phones, a row of milestones on wide screens. */
export default function PatentTimeline() {
  return (
    <section aria-label="Patent timeline" className="rounded-[22px] border border-[#ecebe3] bg-white/85 p-5 sm:p-6">
      <h3 className="text-[15px] font-semibold text-ayur-ink">The patent journey in India</h3>
      <ol className="relative mt-4 space-y-4 border-l-2 border-dashed border-[#cfe0cc] pl-5 sm:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-5 sm:space-y-0 sm:border-l-0 sm:pl-0">
        {PATENT_TIMELINE.map((m, i) => (
          <li key={m.label} className="relative">
            <span className="absolute -left-[27px] top-1 flex size-3 rounded-full border-2 border-white bg-ayur-green shadow-[0_0_0_2px_#cfe0cc] sm:static sm:mb-2 sm:size-3" aria-hidden="true" />
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ayur-leaf">
              {i + 1}. {m.at}
            </p>
            <p className="mt-0.5 text-[14px] font-medium text-ayur-ink">{m.label}</p>
            <p className="text-[12.5px] text-ayur-muted">{m.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

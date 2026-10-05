import { OFFICIAL_CHANNELS } from "../../config/help";

/** Links to the government bodies users usually need next. */
export default function OfficialChannels() {
  return (
    <section aria-label="Official channels" className="rounded-[24px] border border-[#ecebe3] bg-white/85 p-5">
      <h2 className="text-[16px] font-semibold text-ayur-ink">Official channels</h2>
      <ul className="mt-3 space-y-1">
        {OFFICIAL_CHANNELS.map((c) => (
          <li key={c.name}>
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#f6f7f1] focus-visible:outline-2 focus-visible:outline-ayur-green"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium text-ayur-ink">{c.name}</span>
                <span className="block truncate text-[12.5px] text-ayur-muted">{c.note}</span>
              </span>
              <span aria-hidden="true" className="text-ayur-green">
                ↗
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

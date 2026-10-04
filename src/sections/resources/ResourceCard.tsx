import type { Resource } from "../../config/resources";
import { findAsset } from "../../lib/assets";
import { ResourceIcon } from "./shared/icons";

// ─── Resource card ───────────────────────────────────────────────────────────
// The whole card is one external link: icon, title, description, "Open ↗" and
// a chevron that nudges right on hover.

export default function ResourceCard({ resource }: { resource: Resource }) {
  const logo = findAsset("resources", resource.id);

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full min-h-[90px] items-center gap-3 rounded-[13px] border border-[#e3e6e2] bg-white py-2.5 pl-2.5 pr-1.5 shadow-[0_1px_2px_rgba(19,32,51,0.03)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-[#cfd9cf] hover:shadow-[0_10px_24px_-18px_rgba(19,52,33,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green active:translate-y-0 active:shadow-none motion-reduce:hover:translate-y-0 sm:min-h-[96px] sm:gap-5 sm:py-3 sm:pl-4 sm:pr-3 lg:rounded-[16px] lg:py-4 lg:pl-5"
    >
      <span className="flex h-14 w-[62px] shrink-0 items-center justify-center sm:w-16">
        {logo ? <img src={logo} alt="" className="max-h-full max-w-full object-contain" /> : <ResourceIcon icon={resource.icon} />}
      </span>

      <span className="min-w-0 flex-1 py-0.5">
        <span className="block text-[16px] font-semibold leading-[1.25] text-[#132033] sm:text-[16.5px]">{resource.title}</span>
        <span className="mt-0.5 block max-w-[29ch] text-[13.5px] sm:max-w-[36ch] leading-[1.3] text-[#55606f] sm:text-[14.5px] sm:leading-[1.35]">{resource.description}</span>
        <span className="mt-1 inline-flex items-center gap-1.5 text-[15px] font-semibold leading-5 text-[#1f8a4c] transition-colors group-hover:text-[#176b3b]">
          Open
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px">
            <path d="M3.5 12.5 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="sr-only"> (opens {new URL(resource.url).hostname} in a new tab)</span>
      </span>

      <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center text-[#3b4757] transition-transform duration-200 group-hover:translate-x-0.5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="m7.5 4.5 5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

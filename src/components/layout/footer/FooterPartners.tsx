import { Fragment, type ReactNode } from "react";
import { GOV_PORTALS } from "./links";

// ─── Footer partners ────────────────────────────────────────────────────────
// "An Initiative Under", "In Collaboration With" and "Follow Government Portals".
//
// Official marks are not bundled. Drop the approved files into
// src/assets/partners/ with these names (svg, png or webp) and they are used
// automatically: emblem, ip-india, digital-india, mygov, g20.
// Until then each slot shows a typeset stand-in of the same size.

const LOGO_FILES = import.meta.glob<string>("../../../assets/partners/*.{svg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function logoUrl(name: string): string | undefined {
  const key = Object.keys(LOGO_FILES).find((path) => path.split("/").pop()?.replace(/\.\w+$/, "") === name);
  return key ? LOGO_FILES[key] : undefined;
}

type Partner = { id: string; name: string; className: string; fallback: ReactNode };

const PARTNERS: Partner[] = [
  {
    id: "ip-india",
    name: "Intellectual Property India",
    className: "h-[60px] w-[150px]",
    fallback: (
      <span className="flex flex-col leading-none text-[#1d2f6b]">
        <span className="text-[11.5px] tracking-[0.02em]">INTELLECTUAL</span>
        <span className="mt-0.5 text-[11.5px] tracking-[0.02em]">
          PROPERTY <b className="font-bold">INDIA</b>
        </span>
        <span className="mt-1.5 text-[7.5px] font-semibold tracking-[0.01em]">PATENTS | DESIGNS | TRADE MARKS</span>
        <span className="mt-0.5 text-[7.5px] font-semibold tracking-[0.01em]">GEOGRAPHICAL INDICATIONS</span>
      </span>
    ),
  },
  {
    id: "digital-india",
    name: "Digital India",
    className: "h-[64px] w-[150px]",
    fallback: (
      <span className="flex flex-col leading-none">
        <span className="text-[19px] font-bold italic text-[#24409a] underline decoration-1 underline-offset-2">Digital India</span>
        <span className="mt-1 text-[10px] text-[#3c4a6b]">Power To Empower</span>
      </span>
    ),
  },
  {
    id: "mygov",
    name: "MyGov",
    className: "h-[72px] w-[100px]",
    fallback: (
      <span className="flex flex-col items-center leading-none">
        <span className="text-[30px] font-extrabold tracking-[-0.04em] text-[#2e8b57]">
          my<span className="text-[#e8790e]">Gov</span>
        </span>
        <span lang="hi" className="mt-1 font-deva text-[12px] text-[#24409a]">मेरी सरकार</span>
      </span>
    ),
  },
  {
    id: "g20",
    name: "G20 India",
    className: "h-[80px] w-[140px]",
    fallback: (
      <span className="flex flex-col items-center leading-none">
        <span className="text-[38px] font-extrabold tracking-[-0.04em] text-[#e8792b]">
          G<span className="text-[#2e8b57]">20</span>
        </span>
        <span className="mt-1 text-[10px] tracking-[0.04em] text-[#3a3a3a]">
          <span lang="hi" className="font-deva">भारत</span> 2023 INDIA
        </span>
      </span>
    ),
  },
];

function Logo({ partner }: { partner: Partner }) {
  const src = logoUrl(partner.id);
  return (
    <span className={`flex shrink-0 items-center justify-center ${partner.className}`}>
      {src ? <img src={src} alt={partner.name} className="max-h-full max-w-full object-contain" /> : (
        <span role="img" aria-label={partner.name}>{partner.fallback}</span>
      )}
    </span>
  );
}

function Label({ children }: { children: string }) {
  return <p className="text-[13px] text-[#55656c]">{children}</p>;
}

function ExternalArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px">
      <path d="M3 11L11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FooterPartners() {
  const emblem = logoUrl("emblem");
  return (
    <div className="grid grid-cols-1 gap-8 py-9 md:grid-cols-2 lg:grid-cols-[20fr_60fr_20fr] lg:gap-0 lg:pb-10 lg:pt-[36px]">
      {/* An initiative under */}
      <div className="lg:border-r lg:border-[#d3dbd3] lg:pr-4">
        <Label>An Initiative Under</Label>
        <div className="mt-5 flex items-center gap-3.5">
          <span className="flex w-[58px] shrink-0 flex-col items-center">
            {emblem ? (
              <img src={emblem} alt="State Emblem of India" className="h-[80px] w-auto object-contain" />
            ) : (
              <span className="h-[80px] w-[48px] rounded-md border border-dashed border-[#c4cec5] bg-white/40" aria-hidden="true" />
            )}
            <span lang="sa" className="mt-1 font-deva text-[10px] leading-none text-[#2a2a2a]">सत्यमेव जयते</span>
          </span>
          <span className="flex flex-col">
            <span className="whitespace-nowrap text-[18px] font-semibold leading-tight tracking-[-0.01em] text-[#14211b]">Ministry of AYUSH</span>
            <span className="mt-1 text-[15px] text-[#3c4a50]">Government of India</span>
          </span>
        </div>
      </div>

      {/* In collaboration with */}
      <div className="md:col-span-2 md:row-start-2 lg:col-span-1 lg:row-start-auto lg:border-r lg:border-[#d3dbd3] lg:px-[45px]">
        <Label>In Collaboration With</Label>
        <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-5 lg:flex-nowrap lg:justify-between lg:gap-x-4">
          {PARTNERS.map((partner, i) => (
            <Fragment key={partner.id}>
              {i > 0 && <li aria-hidden="true" className="hidden h-[58px] w-px shrink-0 bg-[#d3dbd3] lg:block" />}
              <li>
                <Logo partner={partner} />
              </li>
            </Fragment>
          ))}
        </ul>
      </div>

      {/* Government portals */}
      <div className="md:col-start-2 md:row-start-1 lg:col-start-auto lg:row-start-auto lg:pl-[44px]">
        <Label>Follow Government Portals</Label>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-[9px] leading-[19px] sm:grid-cols-1">
          {GOV_PORTALS.map((portal) => (
            <li key={portal.href}>
              <a
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-[15px] leading-[19px] text-[#2a3a40] transition-colors hover:text-[#1d6a3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d6a3f]"
              >
                {portal.label}
                <ExternalArrow />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

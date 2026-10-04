import type { ReactNode } from "react";
import type { ResourceIconKey } from "../../../config/resources";

// ─── Resource icons ──────────────────────────────────────────────────────────
// Drawn 44px marks in the reference's heavy navy line style. An official logo
// in src/assets/resources/<id>.* takes their place (see ResourceCard).

const INK = "#132033";

function Line({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-full">
      {children}
    </svg>
  );
}

const ICONS: Record<ResourceIconKey, ReactNode> = {
  // Stacked documents with a list, as in the TKDL card.
  document: (
    <Line>
      <path d="M13 8h13l6 6v4" />
      <path d="M13 8c-2 0-4 1.6-4 4v20c0 2.2 1.8 4 4 4h3" />
      <rect x="18" y="16" width="17" height="22" rx="3" />
      <path d="M22 22h4M22 27h9M22 32h9M30 21.5h1.5" />
      <path d="M13 15v4M13 23v4" />
    </Line>
  ),
  // Hexagonal seal with a branching mark.
  patent: (
    <Line>
      <path d="M22 4.5 36.5 12.5v19L22 39.5 7.5 31.5v-19z" />
      <path d="M22 11 31 16v12l-9 5-9-5V16z" />
      <path d="M22 31V19M22 23l-4-3M22 26l4-3.5M18 20v-3M26 22.5v-3" />
    </Line>
  ),
  pin: (
    <Line>
      <path d="M22 40s12-11.5 12-21.5a12 12 0 0 0-24 0C10 28.5 22 40 22 40z" />
      <circle cx="22" cy="18.5" r="4.2" />
    </Line>
  ),
  // Government building; replaced by the State Emblem when that asset is added.
  ministry: (
    <Line>
      <path d="M6 16 22 6l16 10z" />
      <path d="M9 16v1.5h26V16" />
      <path d="M12 21v12M19 21v12M25 21v12M32 21v12" />
      <path d="M7 37h30M9 33.5h26" />
    </Line>
  ),
  botanical: (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true" className="size-full">
      <path d="M22 41V16" stroke="#1d6a3f" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 25c-1-8-7-13-15-13 0 8 6 13 15 13z" fill="#1f7a43" />
      <path d="M22 25c1-8 7-13 15-13 0 8-6 13-15 13z" fill="#2e8b4f" />
      <path d="M22 17c-5-3-6-8-4-13 5 2 6 8 4 13z" fill="#1f7a43" />
      <path d="M22 17c5-3 6-8 4-13-5 2-6 8-4 13z" fill="#2e8b4f" />
      <path d="M21.5 34c-2.5-3-6.5-4.5-10.5-4 1 4 5 6 10.5 4z" fill="#1d6a3f" />
      <path d="M22.5 34c2.5-3 6.5-4.5 10.5-4-1 4-5 6-10.5 4z" fill="#2e8b4f" />
    </svg>
  ),
  // Typeset stand-in until the official FSSAI logo is added.
  fssai: (
    <span className="flex size-full items-center justify-center">
      <span className="relative font-editorial text-[25px] font-semibold italic leading-none tracking-[-0.04em] text-[#24409a]">
        fssai
        <span className="absolute -top-1.5 right-[3px] size-[6px] rounded-full bg-[#e8792b]" />
      </span>
    </span>
  ),
  globe: (
    <Line>
      <circle cx="22" cy="22" r="16" />
      <path d="M6 22h32M22 6c4.5 4.4 6.6 9.7 6.6 16S26.5 33.6 22 38c-4.5-4.4-6.6-9.7-6.6-16S17.5 10.4 22 6z" />
    </Line>
  ),
  scroll: (
    <Line>
      <path d="M12 8h21a3 3 0 0 1 3 3v3h-6" />
      <path d="M30 11v24a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-3h16v3a3 3 0 0 0 3 3" />
      <path d="M12 8a3 3 0 0 0-3 3v21M15 17h10M15 22h10M15 27h6" />
    </Line>
  ),
  handshake: (
    <Line>
      <path d="m5 18 7-7 6 3 4-2 4 2 6-3 7 7" />
      <path d="M5 18l7 9 4 4a2.5 2.5 0 0 0 3.5-3.5M39 18l-7 9-6 6a2.5 2.5 0 0 1-3.5-3.5" />
      <path d="M22 12l-5 6a2.5 2.5 0 0 0 3.5 3.5L24 19l7 7" />
      <path d="M19.5 27.5 23 31M16 31l3.5 3.5" />
    </Line>
  ),
};

export function ResourceIcon({ icon }: { icon: ResourceIconKey }) {
  return <>{ICONS[icon]}</>;
}

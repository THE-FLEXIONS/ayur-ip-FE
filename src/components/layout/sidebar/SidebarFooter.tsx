import { useId } from "react";
import { APP_VERSION } from "../../../config/app";

/** Layered green hills with mist, the heritage line and the app version. */
export default function SidebarFooter() {
  const id = useId();
  return (
    <div className="pointer-events-none relative z-20 -mt-[92px] h-[170px] shrink-0 [@media(max-height:700px)]:hidden">
      <svg
        viewBox="0 0 400 224"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={`${id}-mist`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#eef2e9" stopOpacity="0" />
            <stop offset="0.6" stopColor="#e3ebdd" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id={`${id}-front`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a6139" />
            <stop offset="0.45" stopColor="#1d4d2f" />
            <stop offset="1" stopColor="#153c24" />
          </linearGradient>
          <linearGradient id={`${id}-fog`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#f4f7f0" stopOpacity="0.45" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* haze rising off the ivory panel */}
        <path d="M0 58C40 42 78 30 120 36s70 26 112 16 84-34 124-30c18 2 32 8 44 14V224H0Z" fill={`url(#${id}-mist)`} />
        {/* far ridge */}
        <path d="M0 74c34-14 60-24 96-18 30 5 48 20 82 18 40-2 70-30 112-30 40 0 76 18 110 30V224H0Z" fill="#c3d6bd" />
        {/* mid ridge */}
        <path d="M0 92c28-4 56-18 92-18 38 0 58 20 96 20 44 0 66-26 110-24 42 2 70 16 102 26V224H0Z" fill="#8cb487" />
        {/* soft fog band between ridges */}
        <rect x="0" y="86" width="400" height="30" fill={`url(#${id}-fog)`} />
        {/* near ridge */}
        <path d="M0 110c40-14 70-10 104 0 30 9 60 12 96 2 40-11 72-20 112-12 34 7 60 14 88 22V224H0Z" fill="#4f8a58" />
        {/* front hills, continuing into the footer */}
        <path d="M0 128c30-8 64-10 100-2 38 8 70 12 110 4 44-9 82-14 120-6 26 5 50 10 70 16V224H0Z" fill={`url(#${id}-front)`} />
      </svg>

      <p className="absolute inset-x-0 bottom-8 px-5 text-center font-editorial text-[17.5px] leading-[1.28] text-[#e2c56c]">
        India&rsquo;s heritage.
        <br />
        A healthier tomorrow.
      </p>
      <p className="absolute bottom-2.5 right-4 text-[11px] tracking-wide text-white/70">v{APP_VERSION}</p>
    </div>
  );
}

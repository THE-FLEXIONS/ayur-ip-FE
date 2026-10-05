import type { FormEvent } from "react";
import { IMG_HERO_BG } from "./shared/assets";
import { Arr } from "./shared/icons";

type HeroProps = {
  query: string;
  onQueryChange: (value: string) => void;
  /** Runs a search; called on submit and when a popular search is picked. */
  onSearch: (query: string) => void;
};

const STATS = [
  {
    val: "1,200+", label: "Medicinal Plants",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 13C2 6 6 1 13 3C8 6 6 10 7 14" stroke="#2d6a4f" strokeWidth="1.4" fill="none"/><path d="M2 13C2 10 6 7 9 7" stroke="#2d6a4f" strokeWidth="1.4" strokeLinecap="round" fill="none"/></svg>
  },
  {
    val: "300+", label: "Formulations",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="4" y="3" width="6" height="2.5" rx="1.25" stroke="#2d6a4f" strokeWidth="1.2" fill="none"/><path d="M4 5.5L3 13h8L10 5.5" stroke="#2d6a4f" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>
  },
  {
    val: "Verified Sources", label: "Classical & Modern",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L2 3.5v5C2 12 4.8 14.8 8 16c3.2-1.2 6-4 6-7.5v-5L8 1z" stroke="#2d6a4f" strokeWidth="1.2" fill="none"/><path d="M5.5 8l2 2L11 6" stroke="#2d6a4f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    val: "Curated by Experts", label: "For Reliable Insights",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="2.5" stroke="#2d6a4f" strokeWidth="1.2" fill="none"/><path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#2d6a4f" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>
  },
];

// ─── SECTION 1 · Hero ─────────────────────────────────────────────────────────
export default function Hero({ query, onQueryChange, onSearch }: HeroProps) {
  const chips = ["Ashwagandha","Turmeric","Tulsi","Immunity","Diabetes","Skin health"];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(query.trim());
  }

  return (
    <section className="relative pt-4 overflow-hidden sm:pt-6 lg:pt-16" style={{ background: "#fff" }}>
      <div className="flex flex-col lg:flex-row lg:min-h-[400px]">

        {/* ── Left content panel ── */}
        <div
          className="order-2 flex w-full flex-col justify-center px-4 pt-7 pb-8 relative z-10 sm:px-8 lg:order-none lg:w-[52%] lg:px-16 lg:py-12 lg:bg-[linear-gradient(to_right,#fff_85%,rgba(255,255,255,0)_100%)]"
        >
          {/* Label */}
          <p className="text-xs font-semibold tracking-[0.2em] mb-5" style={{ color: "#2d6a4f" }}>
            HERBAL LIBRARY
          </p>

          {/* Headline */}
          <h1 className="font-black leading-[1.08] mb-4 text-[36px] sm:text-[44px] lg:text-[52px]" style={{ color: "#0d2717", fontWeight: 900 }}>
            Explore India's<br />
            <span style={{ color: "#2d6a4f" }}>Living Heritage</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm leading-relaxed mb-7" style={{ color: "#4b5563", maxWidth: 420 }}>
            Discover authentic, research-backed knowledge on medicinal plants, formulations, classical texts and traditional uses.
          </p>

          {/* Search bar */}
          <form
            role="search"
            onSubmit={handleSubmit}
            className="flex items-center gap-3 rounded-2xl mb-4"
            style={{
              background: "white",
              border: "1.5px solid #e5e7eb",
              padding: "10px 10px 10px 16px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              maxWidth: 500,
            }}
          >
            {/* Search icon */}
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="flex-shrink-0">
              <circle cx="7.5" cy="7.5" r="5" stroke="#9ca3af" strokeWidth="1.5"/>
              <path d="M12 12l3 3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>

            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              aria-label="Search the Herbal Library"
              className="flex-1 min-w-0 text-sm outline-none bg-transparent"
              placeholder="Search herbs, formulations, conditions..."
              style={{ color: "#374151" }}
            />

            {/* Arrow button */}
            <button
              type="submit"
              aria-label="Search"
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-opacity"
              style={{ background: "#0d2717" }}
            >
              <Arr size={15} color="white" />
            </button>
          </form>

          {/* Popular searches */}
          <div className="flex items-center flex-wrap gap-2">
            <span className="w-full text-xs font-medium sm:w-auto" style={{ color: "#9ca3af" }}>Popular searches:</span>
            {chips.map(c => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  onQueryChange(c);
                  onSearch(c);
                }}
                className="px-3 py-1 rounded-full text-xs border hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#e5e7eb", color: "#374151", background: "white" }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Stats: a compact grid on phones; wider screens show the card on the image */}
          <ul className="mt-6 grid grid-cols-2 gap-2 sm:hidden">
            {STATS.map(({ val, label, icon }) => (
              <li key={val} className="flex items-center gap-2.5 rounded-xl p-2.5" style={{ background: "#f6faf7" }}>
                <span className="flex size-[30px] flex-shrink-0 items-center justify-center rounded-lg bg-white">{icon}</span>
                <span className="min-w-0">
                  <span className="block font-bold leading-tight" style={{ fontSize: 13, color: "#0d2717" }}>{val}</span>
                  <span className="block leading-tight" style={{ fontSize: 10.5, color: "#6b7280" }}>{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: full-bleed background image ── */}
        <div className="relative mx-4 h-56 overflow-hidden rounded-2xl sm:mx-8 sm:h-80 lg:absolute lg:top-16 lg:bottom-0 lg:right-0 lg:left-[44%] lg:mx-0 lg:h-auto lg:rounded-none z-0">
          <img src={IMG_HERO_BG} alt="Ayurvedic herbs" className="w-full h-full object-cover" />
          {/* subtle left fade so it blends */}
          <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 25%)" }} />

          {/* Script overlay */}
          <div className="absolute bottom-5 left-5 lg:bottom-auto lg:top-[28%] lg:left-[18%]">
            <p
              style={{ fontFamily: "'Dancing Script',cursive", color: "#fff", fontSize: 24, textShadow: "0 1px 8px rgba(0,0,0,0.55)", lineHeight: 1.3 }}
            >
              Ancient Wisdom.<br />Modern Relevance.
            </p>
            <div className="mt-2 rounded-full" style={{ height: 2, width: 36, background: "rgba(255,255,255,0.75)" }} />
          </div>

          {/* Floating stats card */}
          <div
            className="absolute top-4 right-4 hidden bg-white rounded-2xl shadow-2xl sm:block lg:top-6 lg:right-6"
            style={{ minWidth: 200, padding: "16px 18px" }}
          >
            {STATS.map(({ val, label, icon }, i) => (
              <div
                key={val}
                className="flex items-center gap-3"
                style={{ paddingTop: i === 0 ? 0 : 10, paddingBottom: i === 3 ? 0 : 10, borderBottom: i < 3 ? "1px solid #f3f4f6" : "none" }}
              >
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ width: 30, height: 30, background: "#f0f7f2" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="font-bold leading-none mb-0.5" style={{ fontSize: 13, color: "#0d2717" }}>{val}</p>
                  <p style={{ fontSize: 10, color: "#9ca3af" }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

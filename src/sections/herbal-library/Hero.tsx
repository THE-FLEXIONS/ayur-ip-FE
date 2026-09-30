import { useId, type FormEvent } from "react";
import { MAX_HERB_QUERY_CHARS } from "../../services/herbs";
import { IMG_HERO_BG } from "./shared/assets";
import { Arr } from "./shared/icons";

type HeroProps = {
  query: string;
  onQueryChange: (value: string) => void;
  /** Runs a herb search for `query`. */
  onSearch: (query: string) => void;
};

// Herb names only: search matches common and botanical names, not conditions.
const POPULAR_SEARCHES = ["Ashwagandha", "Turmeric", "Tulsi", "Brahmi", "Neem", "Shatavari"];

// ─── SECTION 1 · Hero ─────────────────────────────────────────────────────────
export default function Hero({ query, onQueryChange, onSearch }: HeroProps) {
  const inputId = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <section className="relative pt-16 overflow-hidden" style={{ background: "#fff" }}>
      <div className="flex" style={{ minHeight: 400 }}>

        {/* ── Left content panel ── */}
        <div className="relative z-10 flex w-full flex-col justify-center px-5 py-10 sm:px-10 lg:w-[52%] lg:bg-[linear-gradient(to_right,#fff_85%,rgba(255,255,255,0)_100%)] lg:px-16 lg:py-12">
          {/* Label */}
          <p className="text-xs font-semibold tracking-[0.2em] mb-5" style={{ color: "#2d6a4f" }}>
            HERBAL LIBRARY
          </p>

          {/* Headline */}
          <h1 className="font-black leading-[1.08] mb-4 text-[38px] sm:text-[52px]" style={{ color: "#0d2717", fontWeight: 900 }}>
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
            className="flex items-center gap-3 rounded-2xl mb-4 focus-within:border-[#2d6a4f]!"
            style={{
              background: "white",
              border: "1.5px solid #e5e7eb",
              padding: "14px 16px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              maxWidth: 500,
            }}
          >
            {/* Search icon */}
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="flex-shrink-0" aria-hidden="true">
              <circle cx="7.5" cy="7.5" r="5" stroke="#9ca3af" strokeWidth="1.5"/>
              <path d="M12 12l3 3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>

            <label htmlFor={inputId} className="sr-only">
              Search herbs
            </label>
            <input
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              maxLength={MAX_HERB_QUERY_CHARS}
              autoComplete="off"
              enterKeyHint="search"
              className="flex-1 min-w-0 text-sm outline-none bg-transparent"
              placeholder="Search herbs by common or botanical name..."
              style={{ color: "#374151" }}
            />

            {/* Arrow button */}
            <button
              type="submit"
              aria-label="Search herbs"
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d6a4f]"
              style={{ background: "#0d2717" }}
            >
              <Arr size={15} color="white" />
            </button>
          </form>

          {/* Popular searches */}
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-xs font-medium" style={{ color: "#9ca3af" }}>Popular searches:</span>
            {POPULAR_SEARCHES.map(c => (
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
        </div>

        {/* ── Right: full-bleed background image (large screens only) ── */}
        <div className="absolute inset-y-0 right-0 z-0 hidden lg:block" style={{ left: "44%" }}>
          <img src={IMG_HERO_BG} alt="Ayurvedic herbs" className="w-full h-full object-cover" />
          {/* subtle left fade so it blends */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 25%)" }} />

          {/* Script overlay */}
          <div className="absolute" style={{ top: "28%", left: "18%" }}>
            <p
              style={{ fontFamily: "'Dancing Script',cursive", color: "#fff", fontSize: 24, textShadow: "0 1px 8px rgba(0,0,0,0.55)", lineHeight: 1.3 }}
            >
              Ancient Wisdom.<br />Modern Relevance.
            </p>
            <div className="mt-2 rounded-full" style={{ height: 2, width: 36, background: "rgba(255,255,255,0.75)" }} />
          </div>

          {/* Floating stats card */}
          <div
            className="absolute bg-white rounded-2xl shadow-2xl"
            style={{ top: 24, right: 24, minWidth: 200, padding: "16px 18px" }}
          >
            {[
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
            ].map(({ val, label, icon }, i) => (
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

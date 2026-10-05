import type React from "react";
import type { FacetCount, LibraryFacets } from "../../lib/api";
import { Arr } from "./shared/icons";
import { TAB_FACET, type BrowseTab } from "./shared/library";

type BrowseByCategoryProps = {
  active: BrowseTab;
  onSelectTab: (tab: BrowseTab) => void;
  facets: LibraryFacets | null;
  /** Value picked under Therapeutic Areas / Parts Used / Regions. */
  selectedValue: string | null;
  onSelectValue: (value: string) => void;
};

const FACET_LISTS = {
  therapeuticArea: "therapeuticAreas",
  partUsed: "partsUsed",
  region: "regions",
} as const;

// ─── SECTION 2 · Browse by Category ──────────────────────────────────────────
export default function BrowseByCategory({ active, onSelectTab, facets, selectedValue, onSelectValue }: BrowseByCategoryProps) {
  const facet = TAB_FACET[active];
  const values: FacetCount[] = facet && facets ? facets[FACET_LISTS[facet]] : [];

  const cats: { label: BrowseTab; icon: React.ReactElement }[] = [
    {
      label: "All",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 19C5 10 10 4 18 6C12 10 9 15 11 20" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M5 19C5 15 9 11 12 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/></svg>,
    },
    {
      label: "Herbs",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 20C4 11 9 4 18 6C12 10 8 16 10 21" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M4 20C4 16 8 12 11 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/></svg>,
    },
    {
      label: "Formulations",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="7" y="4" width="8" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M7 8L5 20h12L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M9 14h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      label: "Classical Texts",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 8h7M8 12h7M8 16h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      label: "Therapeutic Areas",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4C8.5 4 5 7 5 11c0 5.5 7 9 7 9s7-3.5 7-9c0-4-3.5-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M9 11h5M12 8v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      label: "Parts Used",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 19C6 10 11 4 19 6C13 10 9 15 11 20" stroke="currentColor" strokeWidth="1.6" fill="none"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>,
    },
    {
      label: "Regions",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 10v0M5 20c1.5-4 10.5-4 14 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/><path d="M12 13.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
  ];

  return (
    <section style={{ background: "#fff", paddingTop: 40, paddingBottom: 16 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 mb-5 sm:mb-6">
          <div>
            <h2 className="font-bold mb-1" style={{ fontSize: 20, color: "#0d2717" }}>Browse by Category</h2>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>Find knowledge by what interests you.</p>
          </div>
          <button
            type="button"
            onClick={() => onSelectTab("Therapeutic Areas")}
            className="flex items-center gap-1.5 whitespace-nowrap font-semibold mt-0.5"
            style={{ fontSize: 13, color: "#0d2717" }}
          >
            View all categories <Arr size={13}/>
          </button>
        </div>

        {/* Tab row */}
        <div className="-mx-4 flex items-start gap-1 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          {cats.map(({ label, icon }) => {
            const on = label === active;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={on}
                onClick={() => onSelectTab(label)}
                className="flex shrink-0 flex-col items-center gap-2 whitespace-nowrap transition-all"
                style={{
                  padding: "12px 16px",
                  borderRadius: 16,
                  background: on ? "#f0f7f2" : "transparent",
                  border: on ? "1.5px solid #c3e6cc" : "1.5px solid transparent",
                  color: on ? "#1a4028" : "#6b7280",
                  minWidth: 84,
                  cursor: "pointer",
                }}
              >
                <span style={{ color: on ? "#2d6a4f" : "#9ca3af" }}>{icon}</span>
                <span style={{ fontSize: 12, fontWeight: on ? 600 : 400 }}>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Values for Therapeutic Areas / Parts Used / Regions */}
        {facet && (
          <div className="mt-4 flex flex-wrap gap-2" aria-label={`${active} filters`}>
            {values.length === 0 && (
              <p style={{ fontSize: 12, color: "#9ca3af" }}>{facets ? "Nothing listed yet." : "Loading…"}</p>
            )}
            {values.map(({ value, count }) => {
              const on = value === selectedValue;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={on}
                  onClick={() => onSelectValue(value)}
                  className="rounded-full border px-3 py-1.5 text-xs transition-colors"
                  style={{
                    borderColor: on ? "#2d6a4f" : "#e5e7eb",
                    background: on ? "#f0f7f2" : "white",
                    color: on ? "#1a4028" : "#374151",
                    fontWeight: on ? 600 : 400,
                  }}
                >
                  {value} <span style={{ color: "#9ca3af" }}>{count}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

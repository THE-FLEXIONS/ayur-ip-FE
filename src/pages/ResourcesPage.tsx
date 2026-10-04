import { useDeferredValue, useId, useMemo, useState } from "react";
import AppHeader from "../components/layout/AppHeader";
import { RESOURCE_CATEGORIES, RESOURCES, type Resource, type ResourceCategory } from "../config/resources";
import { ResourceCard, ResourceSearch, ResourceTabs } from "../sections/resources";

type ResourcesPageProps = {
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  /** Returns to the page the user came from. */
  onBack: () => void;
};

function matches(resource: Resource, words: string[]) {
  const haystack = `${resource.title} ${resource.description} ${resource.keywords ?? ""}`.toLowerCase();
  return words.every((word) => haystack.includes(word));
}

// ─── Databases & Resources ───────────────────────────────────────────────────
// Official databases, portals and treaties, grouped by category and searchable.
// Data lives in src/config/resources.ts.

export default function ResourcesPage({ onNavigate, onOpenMenu, onBack }: ResourcesPageProps) {
  const [category, setCategory] = useState<ResourceCategory>("national");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const panelId = useId();

  const words = useMemo(() => deferredQuery.toLowerCase().split(/\s+/).filter(Boolean), [deferredQuery]);
  const visible = RESOURCES.filter((r) => r.category === category && matches(r, words));

  // When a search has no hits here but does in another tab, offer to switch.
  const elsewhere = words.length
    ? RESOURCE_CATEGORIES.filter((c) => c.id !== category)
        .map((c) => ({ ...c, count: RESOURCES.filter((r) => r.category === c.id && matches(r, words)).length }))
        .filter((c) => c.count > 0)
    : [];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#fafaf8] font-sans text-[#132033]">
      <div className="mx-auto hidden max-w-[1240px] px-10 lg:block">
        <AppHeader onNavigate={onNavigate} onOpenMenu={onOpenMenu} activePage="Resources" />
      </div>

      <main className="mx-auto max-w-[760px] px-[18px] pb-8 pt-3 sm:px-6 sm:pt-6 lg:max-w-[1040px] lg:px-10 lg:pb-24 lg:pt-12">
        <header className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onBack}
            aria-label="Go back"
            className="-ml-2.5 flex size-11 shrink-0 items-center justify-center rounded-full text-[#132033] transition-[background-color,transform] duration-200 hover:bg-[#eef1ec] active:scale-95 focus-visible:outline-2 focus-visible:outline-ayur-green"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 12H4.5M10.5 5.5 4 12l6.5 6.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="text-[20px] font-semibold leading-tight tracking-[-0.01em] min-[400px]:text-[21px] sm:text-[26px] lg:font-editorial lg:text-[38px] lg:tracking-[-0.015em]">
            Databases &amp; Resources
          </h1>
        </header>
        <p className="mt-2 hidden max-w-[60ch] text-[16px] leading-relaxed text-ayur-muted lg:block">
          Official databases, government portals and international treaties for Ayurvedic IP research.
        </p>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          <ResourceSearch value={query} onChange={setQuery} />
        </div>

        <div className="mt-4 sm:mt-5">
          <ResourceTabs active={category} onChange={setCategory} panelId={panelId} />
        </div>

        <section id={panelId} role="tabpanel" aria-labelledby={`resource-tab-${category}`} className="mt-4 sm:mt-5">
          <p className="sr-only" role="status">
            {words.length ? `${visible.length} ${visible.length === 1 ? "resource" : "resources"} found` : ""}
          </p>

          {visible.length > 0 ? (
            <ul className="grid gap-2.5 sm:gap-3 lg:grid-cols-2 lg:gap-4">
              {visible.map((resource) => (
                <li key={resource.id}>
                  <ResourceCard resource={resource} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-[16px] border border-dashed border-[#d6dcd6] bg-white px-6 py-10 text-center">
              <p className="text-[16px] font-semibold">No matches for “{query.trim()}”</p>
              <p className="mt-1 text-[14.5px] text-[#55606f]">Try a database name, a topic like “patent” or “ABS”, or another tab.</p>
              {elsewhere.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {elsewhere.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCategory(c.id)}
                      className="h-10 rounded-full border border-[#dde2dd] bg-white px-4 text-[14px] font-medium text-[#1d5bb8] transition-colors hover:bg-[#f6f9fd] focus-visible:outline-2 focus-visible:outline-ayur-green"
                    >
                      {c.count} in {c.label}
                    </button>
                  ))}
                </div>
              )}
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-4 text-[14px] font-semibold text-[#1f8a4c] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ayur-green"
              >
                Clear search
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

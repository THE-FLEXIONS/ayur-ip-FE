import { useEffect, useRef, useState } from "react";
import {
  BrowseByCategory,
  CollectionAndTexts,
  FeaturedHerbs,
  FooterBar,
  Hero,
  KnowledgeBanner,
  SearchResults,
  SuggestBar,
  type HerbSearchState,
} from "../sections/herbal-library";
import { ApiError } from "../services/api";
import { searchHerbs } from "../services/herbs";

type HerbalLibraryPageProps = {
  /** Opens the assistant with a question, for searches that are not plant names. */
  onAskAssistant?: (question: string) => void;
};

// ─── Page export ─────────────────────────────────────────────────────────────
export default function HerbalLibraryPage({ onAskAssistant }: HerbalLibraryPageProps) {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState<HerbSearchState | null>(null);
  const pending = useRef<AbortController | null>(null);

  // Cancel an in-flight search when the page unmounts.
  useEffect(() => () => pending.current?.abort(), []);

  async function runSearch(text: string) {
    const q = text.trim();
    if (!q) return;
    // A new search replaces the one still loading.
    pending.current?.abort();
    const controller = new AbortController();
    pending.current = controller;
    setSearch({ status: "loading", query: q });
    requestAnimationFrame(() => document.getElementById("herb-search-results")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    try {
      const results = await searchHerbs(q, controller.signal);
      if (!controller.signal.aborted) setSearch({ status: "success", query: q, results });
    } catch (err) {
      if (controller.signal.aborted) return;
      const message = err instanceof ApiError ? err.message : "Something went wrong. Please try again.";
      setSearch({ status: "error", query: q, message });
    } finally {
      if (pending.current === controller) pending.current = null;
    }
  }

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Hero query={query} onQueryChange={setQuery} onSearch={(q) => void runSearch(q)} />
      {search && <SearchResults state={search} onRetry={() => void runSearch(search.query)} onAskAssistant={onAskAssistant} />}
      <BrowseByCategory />
      <FeaturedHerbs />
      <CollectionAndTexts />
      <KnowledgeBanner />
      <SuggestBar />
      <FooterBar />
    </div>
  );
}

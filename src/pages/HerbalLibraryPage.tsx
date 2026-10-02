import { useEffect, useState } from "react";
import { useFeaturedHerbs, useLibraryFacets, useLibrarySearch } from "../hooks/useLibrary";
import type { LibraryFilters } from "../lib/api";
import {
  BrowseByCategory,
  CollectionAndTexts,
  FeaturedHerbs,
  FooterBar,
  Hero,
  KnowledgeBanner,
  LibraryItemDialog,
  LibraryResults,
  SuggestBar,
  SuggestDialog,
  TAB_FACET,
  TAB_KIND,
  type BrowseTab,
} from "../sections/herbal-library";

type HerbalLibraryPageProps = {
  /** Search to run on arrival (from the navbar search box). */
  initialQuery?: string;
  /** Opens the home page with a question about a library item. */
  onAskAbout: (question: string) => void;
};

function scrollToResults() {
  requestAnimationFrame(() => document.getElementById("library-results")?.scrollIntoView({ behavior: "smooth", block: "start" }));
}

// ─── Page export ─────────────────────────────────────────────────────────────
export default function HerbalLibraryPage({ initialQuery = "", onAskAbout }: HerbalLibraryPageProps) {
  const [input, setInput] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery);
  const [tab, setTab] = useState<BrowseTab>("All");
  const [facetValue, setFacetValue] = useState<string | null>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [suggesting, setSuggesting] = useState(false);

  const facets = useLibraryFacets();
  const featured = useFeaturedHerbs();

  const facetKey = TAB_FACET[tab];
  const filters: LibraryFilters = {
    q: query || undefined,
    kind: TAB_KIND[tab],
    ...(facetKey && facetValue ? { [facetKey]: facetValue } : {}),
  };
  const results = useLibrarySearch(filters);

  useEffect(() => {
    if (initialQuery) scrollToResults();
  }, [initialQuery]);

  function search(text: string) {
    setQuery(text);
    if (text) scrollToResults();
  }

  function selectTab(next: BrowseTab) {
    setTab(next);
    setFacetValue(null);
    if (TAB_KIND[next]) scrollToResults();
  }

  function selectFacet(tabName: BrowseTab, value: string) {
    setTab(tabName);
    setFacetValue(value);
    scrollToResults();
  }

  function clear() {
    setInput("");
    setQuery("");
    setTab("All");
    setFacetValue(null);
  }

  const summary = [query && `“${query}”`, TAB_KIND[tab] && tab, facetValue].filter(Boolean).join(" · ");

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Hero query={input} onQueryChange={setInput} onSearch={search} />
      <BrowseByCategory
        active={tab}
        onSelectTab={selectTab}
        facets={facets}
        selectedValue={facetValue}
        onSelectValue={(value) => selectFacet(tab, value)}
      />
      {results.active && (
        <LibraryResults
          summary={summary}
          status={results.status}
          error={results.error}
          items={results.data}
          total={results.total}
          hasMore={results.hasMore}
          onLoadMore={results.loadMore}
          onClear={clear}
          onOpen={setOpenSlug}
        />
      )}
      <FeaturedHerbs items={featured} onOpen={setOpenSlug} onViewAll={() => selectTab("Herbs")} />
      <CollectionAndTexts
        facets={facets}
        onOpenCollection={(area) => selectFacet("Therapeutic Areas", area)}
        onViewAllCollections={() => selectTab("Therapeutic Areas")}
        onOpenText={setOpenSlug}
        onViewAllTexts={() => selectTab("Classical Texts")}
      />
      <KnowledgeBanner />
      <SuggestBar onSuggest={() => setSuggesting(true)} />
      <FooterBar />

      <LibraryItemDialog
        slug={openSlug}
        onClose={() => setOpenSlug(null)}
        onAsk={(question) => {
          setOpenSlug(null);
          onAskAbout(question);
        }}
      />
      <SuggestDialog open={suggesting} onClose={() => setSuggesting(false)} />
    </div>
  );
}

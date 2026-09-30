import { BrowseByCategory, CollectionAndTexts, FeaturedHerbs, FooterBar, Hero, KnowledgeBanner, SuggestBar } from "../sections/herbal-library";

// ─── Page export ─────────────────────────────────────────────────────────────
export default function HerbalLibraryPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Hero />
      <BrowseByCategory />
      <FeaturedHerbs />
      <CollectionAndTexts />
      <KnowledgeBanner />
      <SuggestBar />
      <FooterBar />
    </div>
  );
}

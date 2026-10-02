import type { LibraryItem } from "../../lib/api";
import { Arr } from "./shared/icons";
import ItemCard from "./shared/ItemCard";

/** Shown while the library loads, or if the backend can't be reached. */
const FALLBACK_HERBS: LibraryItem[] = [
  { slug: "ashwagandha", name: "Ashwagandha", latinName: "Withania somnifera", tags: ["Adaptogen", "Stress Relief"], summary: "Helps manage stress, improves sleep quality and enhances overall vitality." },
  { slug: "turmeric", name: "Turmeric", latinName: "Curcuma longa", tags: ["Anti-inflammatory", "Antioxidant"], summary: "Widely used for its powerful anti-inflammatory and antioxidant properties." },
  { slug: "neem", name: "Neem", latinName: "Azadirachta indica", tags: ["Antimicrobial", "Skin Health"], summary: "Known for its purifying, antimicrobial and immunomodulatory effects." },
  { slug: "tulsi", name: "Tulsi", latinName: "Ocimum sanctum", tags: ["Immunity", "Respiratory"], summary: "A sacred herb known to support immunity, respiratory health and mental well-being." },
  { slug: "amla", name: "Amla", latinName: "Phyllanthus emblica", tags: ["Antioxidant", "Rejuvenation"], summary: "Rich in Vitamin C, it supports immunity, skin health and longevity." },
].map((h) => ({
  ...h,
  id: h.slug,
  kind: "herb" as const,
  sanskritName: null,
  hindiName: null,
  description: null,
  therapeuticAreas: [],
  partsUsed: [],
  regions: [],
  classicalReferences: [],
  imageUrl: null,
  isFeatured: true,
}));

type FeaturedHerbsProps = {
  /** Featured herbs from the library; null while loading or unavailable. */
  items: LibraryItem[] | null;
  onOpen: (slug: string) => void;
  onViewAll: () => void;
};

// ─── SECTION 3 · Featured Herbs ───────────────────────────────────────────────
export default function FeaturedHerbs({ items, onOpen, onViewAll }: FeaturedHerbsProps) {
  const herbs = items && items.length > 0 ? items : FALLBACK_HERBS;

  return (
    <section style={{ background: "#fff", paddingTop: 32, paddingBottom: 32 }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="font-bold mb-1" style={{ fontSize: 20, color: "#0d2717" }}>Featured Herbs</h2>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>Explore some of the most researched and widely used medicinal plants in Ayurveda.</p>
          </div>
          <button type="button" onClick={onViewAll} className="flex items-center gap-1.5 font-semibold mt-0.5" style={{ fontSize: 13, color: "#0d2717" }}>
            View all herbs <Arr size={13}/>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-5 gap-4">
          {herbs.map((herb) => (
            <ItemCard key={herb.slug} item={herb} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

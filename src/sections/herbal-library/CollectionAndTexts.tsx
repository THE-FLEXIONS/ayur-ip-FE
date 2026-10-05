import type { LibraryFacets } from "../../lib/api";
import { Arr } from "./shared/icons";

type CollectionAndTextsProps = {
  facets: LibraryFacets | null;
  /** Filters the library by a therapeutic area. */
  onOpenCollection: (area: string) => void;
  onViewAllCollections: () => void;
  onOpenText: (slug: string) => void;
  onViewAllTexts: () => void;
};

// ─── SECTION 4 · Collection + Classical Texts ─────────────────────────────────
export default function CollectionAndTexts({
  facets,
  onOpenCollection,
  onViewAllCollections,
  onOpenText,
  onViewAllTexts,
}: CollectionAndTextsProps) {
  // Live counts from the library, falling back to the design's numbers while loading.
  const countFor = (area: string, fallback: string) => {
    const found = facets?.therapeuticAreas.find((a) => a.value === area);
    return found ? `${found.count} entries` : fallback;
  };

  const collections = [
    {
      label: "Immunity Boosters", area: "Immunity", count: countFor("Immunity", "12 herbs"),
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M5 21C5 11 11 4 21 7C14 11 11 18 13 23" stroke="#2d6a4f" strokeWidth="1.7" fill="none"/>
          <path d="M5 21C5 16 10 12 13 12" stroke="#2d6a4f" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
    {
      label: "Skin & Beauty", area: "Skin & Beauty", count: countFor("Skin & Beauty", "8 herbs"),
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M4 22C4 12 10 5 20 8C14 12 10 18 12 24" stroke="#2d6a4f" strokeWidth="1.7" fill="none"/>
          <path d="M4 22C4 17 9 13 12 13" stroke="#2d6a4f" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
          <path d="M18 4C18 4 22 8 20 14" stroke="#2d6a4f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Respiratory Health", area: "Respiratory Health", count: countFor("Respiratory Health", "10 herbs"),
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M13 5v7" stroke="#2d6a4f" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M13 12C10 12 5 14 5 18s5 5 8 3" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M13 12C16 12 21 14 21 18s-5 5-8 3" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
  ];

  const books = [
    { slug: "charaka-samhita", title: "Charaka Samhita",   desc: "Foundational text on Ayurvedic medicine",           bg: "#e8e3d8", spine: "#7a6c50" },
    { slug: "sushruta-samhita", title: "Sushruta Samhita",  desc: "Surgical procedures and medicinal plants",           bg: "#dce4dc", spine: "#4a6550" },
    { slug: "ashtanga-hridaya", title: "Ashtanga Hridaya",  desc: "Comprehensive guide to Ayurvedic practice",         bg: "#e6dcd2", spine: "#7a5e48" },
  ];

  return (
    <section style={{ background: "#fff", paddingTop: 8, paddingBottom: 32 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">

          {/* ── Featured Collection ── */}
          <div className="p-4 sm:p-6" style={{ borderRadius: 20, border: "1px solid #eef0ee", background: "#fafafa" }}>
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-1">
              <p className="font-bold" style={{ fontSize: 16, color: "#0d2717" }}>Featured Collection</p>
              <button type="button" onClick={onViewAllCollections} className="flex items-center gap-1 whitespace-nowrap font-semibold" style={{ fontSize: 12, color: "#0d2717" }}>
                View all collections <Arr size={11}/>
              </button>
            </div>
            <p className="mb-6" style={{ fontSize: 12, color: "#9ca3af" }}>Curated knowledge for your wellness journey.</p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {collections.map(({ label, area, count, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => onOpenCollection(area)}
                  className="flex flex-col items-center gap-3 px-2 py-4 transition-all hover:shadow-md sm:px-3 sm:py-5"
                  style={{ background: "white", borderRadius: 16, border: "1px solid #eef0ee" }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 52, height: 52, background: "#f0f7f2" }}
                  >
                    {icon}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold leading-tight mb-1" style={{ fontSize: 12, color: "#0d2717" }}>{label}</p>
                    <p style={{ fontSize: 11, color: "#9ca3af" }}>{count}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Classical Texts ── */}
          <div className="p-4 sm:p-6" style={{ borderRadius: 20, border: "1px solid #eef0ee", background: "#fafafa" }}>
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-1">
              <p className="font-bold" style={{ fontSize: 16, color: "#0d2717" }}>Explore by Classical Texts</p>
              <button type="button" onClick={onViewAllTexts} className="flex items-center gap-1 whitespace-nowrap font-semibold" style={{ fontSize: 12, color: "#0d2717" }}>
                View all texts <Arr size={11}/>
              </button>
            </div>
            <p className="mb-6" style={{ fontSize: 12, color: "#9ca3af" }}>Dive into timeless Ayurvedic wisdom.</p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {books.map(({ slug, title, desc, bg, spine }) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => onOpenText(slug)}
                  className="flex min-w-0 flex-col items-start p-2 transition-all hover:shadow-md sm:p-3"
                  style={{ background: "white", borderRadius: 14, border: "1px solid #eef0ee" }}
                >
                  {/* Book cover */}
                  <div
                    className="w-full rounded-xl mb-3 flex items-end justify-center relative overflow-hidden"
                    style={{ height: 84, background: bg }}
                  >
                    {/* Spine crease */}
                    <div className="absolute left-3 inset-y-0 w-1 opacity-40 rounded-sm" style={{ background: spine }} />
                    {/* Decorative lines */}
                    <div className="absolute inset-x-3 top-4 flex flex-col gap-1 opacity-30">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="rounded-full" style={{ height: 1.5, background: spine }} />
                      ))}
                    </div>
                    <p
                      className="relative z-10 text-center font-bold px-2 pb-2 leading-tight"
                      style={{ fontSize: 8, color: spine, letterSpacing: "0.06em" }}
                    >
                      {title.toUpperCase()}
                    </p>
                  </div>
                  <p className="font-bold mb-0.5 text-left" style={{ fontSize: 12, color: "#0d2717" }}>{title}</p>
                  <p className="text-left" style={{ fontSize: 10, color: "#9ca3af", lineHeight: 1.4 }}>{desc}</p>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

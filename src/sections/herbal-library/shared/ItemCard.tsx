import type { LibraryItem } from "../../../lib/api";
import { Arr } from "./icons";
import { KIND_LABELS, LOCAL_IMAGES, TAG_COLORS } from "./library";

/** Photo for an item, or a leafy placeholder with its initial. */
export function ItemImage({ item, height }: { item: LibraryItem; height: number }) {
  const src = item.imageUrl ?? LOCAL_IMAGES[item.slug];
  return (
    <div style={{ height, overflow: "hidden", flexShrink: 0 }}>
      {src ? (
        <img src={src} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ background: "linear-gradient(135deg, #e8f5e9 0%, #d8f3dc 55%, #c3e6cc 100%)" }}
          aria-hidden="true"
        >
          <span className="font-editorial text-[44px] font-semibold" style={{ color: "#2d6a4f", opacity: 0.55 }}>
            {item.name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}

/** Library card: image, names, tags, summary and a details button. */
export default function ItemCard({ item, onOpen }: { item: LibraryItem; onOpen: (slug: string) => void }) {
  const tags = (item.tags.length ? item.tags : item.therapeuticAreas).slice(0, 2);
  return (
    <div className="flex flex-col overflow-hidden" style={{ borderRadius: 16, border: "1px solid #f0f0f0", background: "#fff" }}>
      <ItemImage item={item} height={148} />

      <div className="flex flex-col flex-1 p-4">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#40916c" }}>
          {KIND_LABELS[item.kind]}
        </p>
        <p className="font-bold mb-0.5" style={{ fontSize: 14, color: "#0d2717" }}>
          {item.name}
          {item.hindiName && (
            <span lang="hi" className="ml-1.5 font-normal" style={{ fontSize: 12, color: "#6b7280" }}>
              {item.hindiName}
            </span>
          )}
        </p>
        <p className="italic mb-3" style={{ fontSize: 11, color: "#9ca3af" }}>
          {item.latinName ?? item.sanskritName ?? " "}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className="rounded-full font-medium"
                style={{ fontSize: 10, padding: "3px 9px", ...TAG_COLORS[i % TAG_COLORS.length] }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="leading-relaxed flex-1" style={{ fontSize: 12, color: "#6b7280" }}>
          {item.summary}
        </p>

        <button
          type="button"
          onClick={() => onOpen(item.slug)}
          className="mt-4 flex items-center gap-1 self-start font-semibold hover:opacity-70"
          style={{ fontSize: 12, color: "#0d2717" }}
        >
          View Details <Arr size={11} />
        </button>
      </div>
    </div>
  );
}

import Modal from "../../components/ui/Modal";
import { useLibraryItem } from "../../hooks/useLibrary";
import type { LibraryItem } from "../../lib/api";
import { Arr } from "./shared/icons";
import { ItemImage } from "./shared/ItemCard";
import { KIND_LABELS, TAG_COLORS } from "./shared/library";

type LibraryItemDialogProps = {
  slug: string | null;
  onClose: () => void;
  /** Starts an AI question about this item on the home page. */
  onAsk: (question: string) => void;
};

function askPrompt(item: LibraryItem): string {
  if (item.kind === "classical_text") {
    return `How can formulations described in ${item.name} affect patentability and prior art for a new Ayurvedic product?`;
  }
  return `What IP protection and regulatory approvals apply to a product made with ${item.name}${item.latinName ? ` (${item.latinName})` : ""}?`;
}

function Row({ label, values }: { label: string; values: string[] }) {
  if (values.length === 0) return null;
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#9ca3af" }}>
        {label}
      </dt>
      <dd className="mt-1 text-sm" style={{ color: "#374151" }}>
        {values.join(", ")}
      </dd>
    </div>
  );
}

/** Details for one herb, formulation or classical text. */
export default function LibraryItemDialog({ slug, onClose, onAsk }: LibraryItemDialogProps) {
  const { status, data: item, error } = useLibraryItem(slug);

  return (
    <Modal open={slug !== null} onClose={onClose} title={item?.name ?? (status === "error" ? "Not available" : "Loading…")} widthClass="max-w-2xl">
      {status === "loading" && <div className="h-48 animate-pulse rounded-2xl" style={{ background: "#f6faf7" }} />}
      {status === "error" && <p className="text-sm" style={{ color: "#8a3325" }}>{error}</p>}

      {item && (
        <div>
          <div className="overflow-hidden rounded-2xl">
            <ItemImage item={item} height={180} />
          </div>

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#40916c" }}>
            {KIND_LABELS[item.kind]}
          </p>
          <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
            {[item.latinName && <i key="latin">{item.latinName}</i>, item.sanskritName && `Sanskrit: ${item.sanskritName}`]
              .filter(Boolean)
              .map((part, i) => (
                <span key={i}>
                  {i > 0 && " · "}
                  {part}
                </span>
              ))}
            {item.hindiName && (
              <span>
                {" · Hindi: "}
                <span lang="hi">{item.hindiName}</span>
              </span>
            )}
          </p>

          {item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag, i) => (
                <span key={tag} className="rounded-full font-medium" style={{ fontSize: 11, padding: "3px 10px", ...TAG_COLORS[i % TAG_COLORS.length] }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#1f2937" }}>
            {item.summary}
          </p>
          {item.description && (
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "#4b5563" }}>
              {item.description}
            </p>
          )}

          <dl className="mt-5 grid gap-4 rounded-2xl p-4 sm:grid-cols-2" style={{ background: "#f6faf7" }}>
            <Row label="Therapeutic areas" values={item.therapeuticAreas} />
            <Row label="Parts used" values={item.partsUsed} />
            <Row label="Regions" values={item.regions} />
            <Row label="Classical references" values={item.classicalReferences} />
          </dl>

          <p className="mt-3 text-xs" style={{ color: "#9ca3af" }}>
            Traditional use for reference only; not medical advice.
          </p>

          <button
            type="button"
            onClick={() => onAsk(askPrompt(item))}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white hover:opacity-90"
            style={{ background: "#0d2717" }}
          >
            Ask AyurIP about IP &amp; compliance <Arr size={13} color="white" />
          </button>
        </div>
      )}
    </Modal>
  );
}

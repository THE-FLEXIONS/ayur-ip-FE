import type { LibraryItem } from "../../lib/api";
import ItemCard from "./shared/ItemCard";

type LibraryResultsProps = {
  /** Describes the current search, e.g. "“ashwa”" or "Herbs · Immunity". */
  summary: string;
  status: "loading" | "ready" | "error";
  error: string | null;
  items: LibraryItem[];
  total: number;
  hasMore: boolean;
  onLoadMore: () => void;
  onClear: () => void;
  onOpen: (slug: string) => void;
};

// ─── Search results (shown while a search or filter is active) ───────────────
export default function LibraryResults({ summary, status, error, items, total, hasMore, onLoadMore, onClear, onOpen }: LibraryResultsProps) {
  const loadingFirstPage = status === "loading" && items.length === 0;

  return (
    <section id="library-results" aria-label="Search results" aria-busy={status === "loading"} style={{ background: "#fff", paddingTop: 24, paddingBottom: 16 }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b" style={{ borderColor: "#f0f0f0" }}>
          <div>
            <h2 className="font-bold" style={{ fontSize: 20, color: "#0d2717" }}>
              {loadingFirstPage ? "Searching…" : `${total} ${total === 1 ? "result" : "results"}`}
            </h2>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>{summary}</p>
          </div>
          <button
            type="button"
            onClick={onClear}
            className="rounded-full border px-4 py-2 text-xs font-semibold hover:bg-gray-50"
            style={{ borderColor: "#e5e7eb", color: "#0d2717" }}
          >
            Clear search
          </button>
        </div>

        {status === "error" && (
          <div role="alert" className="mb-4 rounded-xl border px-4 py-3 text-sm" style={{ background: "#fdf4f2", borderColor: "#f0d6d0", color: "#8a3325" }}>
            {error}
          </div>
        )}

        {loadingFirstPage ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="h-[300px] animate-pulse rounded-2xl" style={{ background: "#f6faf7" }} />
            ))}
          </div>
        ) : status === "ready" && items.length === 0 ? (
          <p className="rounded-2xl px-5 py-8 text-center text-sm" style={{ background: "#f6faf7", color: "#6b7280" }}>
            Nothing matched. Try another name (English, Latin, Sanskrit or Hindi), or suggest it below.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} onOpen={onOpen} />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={onLoadMore}
              disabled={status === "loading"}
              className="rounded-full px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
              style={{ background: "#0d2717" }}
            >
              {status === "loading" ? "Loading…" : "Load more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

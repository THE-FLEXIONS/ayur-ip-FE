import { useState } from "react";
import { useSlowNotice } from "../../hooks/useSlowNotice";
import { LeafIcon } from "../../components/ui/LineIcons";
import { safeHttpUrl } from "../../services/api";
import type { Herb } from "../../services/herbs";
import { Arr } from "./shared/icons";

export type HerbSearchState =
  | { status: "loading"; query: string }
  | { status: "success"; query: string; results: Herb[] }
  | { status: "error"; query: string; message: string };

type SearchResultsProps = {
  state: HerbSearchState;
  onRetry: () => void;
  /** Hands a question to the AYUR-IP assistant, e.g. for uses or conditions. */
  onAskAssistant?: (question: string) => void;
};

const SOURCE_LABELS: Record<string, string> = { trefle: "Trefle", seed: "AYUR-IP list" };

// ─── Herb search results (shown under the hero once a search runs) ───────────
export default function SearchResults({ state, onRetry, onAskAssistant }: SearchResultsProps) {
  const { query } = state;
  const slow = useSlowNotice(state.status === "loading");
  const hasTrefle = state.status === "success" && state.results.some((h) => h.source === "trefle");

  return (
    <section
      id="herb-search-results"
      aria-labelledby="herb-search-heading"
      aria-busy={state.status === "loading"}
      className="scroll-mt-20"
      style={{ background: "#fff", paddingTop: 32, paddingBottom: 8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 id="herb-search-heading" className="font-bold mb-1 [overflow-wrap:anywhere]" style={{ fontSize: 20, color: "#0d2717" }}>
          Results for &ldquo;{query}&rdquo;
        </h2>

        <div aria-live="polite">
          {state.status === "loading" && (
            <>
              <p style={{ fontSize: 13, color: "#9ca3af" }}>
                Searching the Herbal Library…
                {slow && " Taking longer than usual: the service may be waking up, which can take up to a minute."}
              </p>
              <div aria-hidden="true" className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse overflow-hidden" style={{ borderRadius: 16, border: "1px solid #f0f0f0" }}>
                    <div style={{ height: 148, background: "#f0f7f2" }} />
                    <div className="space-y-2 p-4">
                      <div className="h-3 w-2/3 rounded-full" style={{ background: "#f0f7f2" }} />
                      <div className="h-3 w-1/2 rounded-full" style={{ background: "#f0f7f2" }} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {state.status === "error" && (
            <div
              role="alert"
              className="mt-4 flex flex-col items-start gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between"
              style={{ background: "#fbf3ef", border: "1px solid #efd9cf" }}
            >
              <p style={{ fontSize: 14, color: "#7a3522" }}>{state.message}</p>
              <RetryButton onClick={onRetry} />
            </div>
          )}

          {state.status === "success" && state.results.length === 0 && (
            <div className="mt-4 rounded-2xl p-5" style={{ background: "#f7f6ef", border: "1px solid #ecebe3" }}>
              <p className="font-semibold" style={{ fontSize: 14, color: "#0d2717" }}>
                No herbs found.
              </p>
              <p className="mt-1 leading-relaxed" style={{ fontSize: 13, color: "#6b7280" }}>
                Search matches plant names, such as &ldquo;Tulsi&rdquo; or &ldquo;Ocimum&rdquo;. For uses, conditions or formulations, ask the
                AYUR-IP assistant.
              </p>
              {onAskAssistant && (
                <button
                  type="button"
                  onClick={() => onAskAssistant(`What is known about ${query} in Ayurveda?`)}
                  className="mt-3 flex items-center gap-1.5 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d6a4f]"
                  style={{ fontSize: 13, color: "#0d2717" }}
                >
                  Ask the assistant about &ldquo;{query}&rdquo; <Arr size={12} />
                </button>
              )}
            </div>
          )}

          {state.status === "success" && state.results.length > 0 && (
            <>
              <p style={{ fontSize: 13, color: "#9ca3af" }}>
                {state.results.length} {state.results.length === 1 ? "plant" : "plants"} found
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {state.results.map((herb) => (
                  <HerbCard key={herb.botanicalName} herb={herb} />
                ))}
              </ul>
              <p className="mt-4 leading-relaxed" style={{ fontSize: 11, color: "#9ca3af" }}>
                {hasTrefle && "Botanical names, families and images from Trefle, a general botanical database. "}
                This is botanical data only, not Ayurvedic or medical guidance.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function RetryButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 rounded-full border bg-white px-4 py-2 font-medium transition-colors hover:border-[#2d6a4f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d6a4f]"
      style={{ fontSize: 14, color: "#0d2717", borderColor: "#e5e7eb" }}
    >
      Try again
    </button>
  );
}

function HerbCard({ herb }: { herb: Herb }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageUrl = imageFailed ? null : safeHttpUrl(herb.imageUrl);
  const title = herb.commonName ?? herb.botanicalName;

  return (
    <li className="flex flex-col overflow-hidden" style={{ borderRadius: 16, border: "1px solid #f0f0f0", background: "#fff" }}>
      <div className="flex items-center justify-center" style={{ height: 148, background: "#f0f7f2", flexShrink: 0 }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <LeafIcon size={40} strokeWidth={1.2} className="text-[#2d6a4f] opacity-40" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="font-bold mb-0.5 [overflow-wrap:anywhere]" style={{ fontSize: 14, color: "#0d2717" }}>
          {title}
        </p>
        {herb.commonName && (
          <p className="italic [overflow-wrap:anywhere]" style={{ fontSize: 11, color: "#6b7280" }}>
            {herb.botanicalName}
          </p>
        )}
        <dl className="mt-3 flex flex-1 flex-col gap-1" style={{ fontSize: 12, color: "#6b7280" }}>
          <div className="flex gap-1.5">
            <dt>Family:</dt>
            <dd style={{ color: herb.family ? "#374151" : "#9ca3af" }}>{herb.family ?? "Not recorded"}</dd>
          </div>
        </dl>
        <span
          className="mt-3 self-start rounded-full font-medium"
          style={{ fontSize: 10, padding: "3px 9px", background: "#f0f7f2", color: "#166534" }}
        >
          Source: {SOURCE_LABELS[herb.source] ?? herb.source}
        </span>
      </div>
    </li>
  );
}

import { Arr } from "./shared/icons";

// ─── SECTION 6 · Suggest CTA Bar ─────────────────────────────────────────────
export default function SuggestBar({ onSuggest }: { onSuggest: () => void }) {
  return (
    <section style={{ background: "#fff", paddingBottom: 56 }}>
      <div className="max-w-7xl mx-auto px-8">
        <div
          className="flex items-center justify-between"
          style={{
            background: "#f6faf7",
            border: "1px solid #e0ede4",
            borderRadius: 18,
            padding: "20px 28px",
          }}
        >
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ width: 48, height: 48, background: "#d8f3dc" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 18C4 9 9 3 18 5C12 9 8 14 10 19" stroke="#2d6a4f" strokeWidth="1.6" fill="none"/>
                <path d="M4 18C4 14 8 10 11 10" stroke="#2d6a4f" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div>
              <p className="font-bold mb-0.5" style={{ fontSize: 15, color: "#0d2717" }}>Can't find what you're looking for?</p>
              <p style={{ fontSize: 13, color: "#6b7280" }}>
                Use natural language search or suggest a herb, formulation, or reference to help us expand the library.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onSuggest}
            className="flex items-center gap-2 rounded-full font-semibold text-white flex-shrink-0 ml-10 hover:opacity-90 transition-opacity"
            style={{ background: "#0d2717", fontSize: 13, padding: "12px 22px" }}
          >
            Suggest a Resource <Arr size={13} color="white"/>
          </button>
        </div>
      </div>
    </section>
  );
}

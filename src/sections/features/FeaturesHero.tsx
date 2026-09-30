import { HERO_IMG } from "./shared/assets";
import { ArrowRight } from "./shared/icons";

// ─── Hero ─────────────────────────────────────────────────────────────────

export default function FeaturesHero() {
  return (
    <section
      className="pt-20 pb-0 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f8faf7 0%, #ffffff 60%, #f0f7f2 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="pb-10">
            <p className="text-xs font-semibold tracking-widest mb-5" style={{ color: "#2d6a4f" }}>
              FEATURES
            </p>
            <h1 className="text-5xl font-black leading-tight mb-5" style={{ color: "#0d2717", fontWeight: 900 }}>
              Traditional Wisdom.<br />
              <span style={{ color: "#2d6a4f" }}>Modern Possibilities.</span>
            </h1>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "#4b5563" }}>
              Powerful features designed to make India's Ayurvedic knowledge more accessible, reliable and impactful — for individuals, researchers, practitioners and policymakers.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-10">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "#0d2717" }}
              >
                Explore Features <ArrowRight color="white" size={15} />
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#d1d5db", color: "#374151" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.5" stroke="#374151" strokeWidth="1.3" fill="none" />
                  <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="#374151" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-8">
              {[
                { val: "4+", label: "Core Features" },
                { val: "100%", label: "Authentic Sources" },
                { val: "Built for", label: "Real-World Impact" },
              ].map(({ val, label }, i) => (
                <div key={i} className="flex items-center gap-4">
                  {i > 0 && <div className="w-px h-8 bg-gray-200" />}
                  <div>
                    <p className="text-lg font-black" style={{ color: "#0d2717", fontWeight: 900 }}>{val}</p>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative">
            {/* Decorative circle bg */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, #d8f3dc 0%, transparent 70%)" }}
            />

            {/* Herb image */}
            <div className="relative rounded-3xl overflow-hidden" style={{ height: 380 }}>
              <img
                src={HERO_IMG}
                alt="Ayurvedic mortar and herbs"
                className="w-full h-full object-cover"
              />
              {/* Stone blocks overlay */}
              <div
                className="absolute bottom-6 right-6 flex flex-col gap-1"
              >
                {["TRADITION", "RESEARCH", "IMPACT"].map((word) => (
                  <div
                    key={word}
                    className="px-4 py-2 text-sm font-bold tracking-widest rounded"
                    style={{ background: "rgba(255,255,255,0.92)", color: "#0d2717" }}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>

            {/* Script tag */}
            <div className="absolute top-6 -right-2 text-right">
              <p
                style={{ fontFamily: "'Dancing Script', cursive", color: "#2d6a4f", fontSize: 20 }}
                className="leading-tight"
              >
                Ancient Knowledge.<br />New Possibilities.
              </p>
              <div className="mt-1 h-0.5 w-12 ml-auto rounded-full" style={{ background: "#2d6a4f" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

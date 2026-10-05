import { HERO_IMG } from "./shared/assets";
import { ArrowRight } from "./shared/icons";

// ─── Hero ─────────────────────────────────────────────────────────────────

export default function FeaturesHero() {
  return (
    <section
      className="relative overflow-hidden pb-0 pt-8 sm:pt-10"
      style={{ background: "linear-gradient(135deg, #f8faf7 0%, #ffffff 60%, #f0f7f2 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 sm:pt-8 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left */}
          <div className="pb-2 sm:pb-6 lg:pb-10">
            <p className="mb-4 text-xs font-semibold tracking-widest sm:mb-5" style={{ color: "#2d6a4f" }}>
              FEATURES
            </p>
            <h1 className="mb-4 text-3xl font-black leading-tight sm:mb-5 sm:text-4xl lg:text-5xl" style={{ color: "#0d2717", fontWeight: 900 }}>
              Traditional Wisdom.<br />
              <span style={{ color: "#2d6a4f" }}>Modern Possibilities.</span>
            </h1>
            <p className="mb-6 max-w-md text-[15px] leading-relaxed sm:mb-8 sm:text-base" style={{ color: "#4b5563" }}>
              Powerful features designed to make India's Ayurvedic knowledge more accessible, reliable and impactful — for individuals, researchers, practitioners and policymakers.
            </p>

            {/* Buttons */}
            <div className="mb-8 flex flex-wrap items-center gap-3 sm:mb-10 sm:gap-4">
              <button
                className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-6"
                style={{ background: "#0d2717" }}
              >
                Explore Features <ArrowRight color="white" size={15} />
              </button>
              <button
                className="flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors hover:bg-gray-50 sm:px-6"
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
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-8">
              {[
                { val: "4+", label: "Core Features" },
                { val: "100%", label: "Authentic Sources" },
                { val: "Built for", label: "Real-World Impact" },
              ].map(({ val, label }, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  {i > 0 && <div className="hidden h-8 w-px bg-gray-200 sm:block" />}
                  <div>
                    <p className="text-lg font-black" style={{ color: "#0d2717", fontWeight: 900 }}>{val}</p>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative mx-auto w-full max-w-[620px]">
            {/* Decorative circle bg */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, #d8f3dc 0%, transparent 70%)" }}
            />

            {/* Herb image */}
            <div className="relative h-[260px] overflow-hidden rounded-3xl sm:h-[340px] lg:h-[380px]">
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

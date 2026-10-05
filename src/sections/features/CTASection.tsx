import { ArrowRight, IconEmpower, IconGlobe, IconPreserve } from "./shared/icons";

// ─── CTA Section ──────────────────────────────────────────────────────────

export default function CTASection() {
  const pillars = [
    { icon: <IconPreserve />, label: "Preserve\nOur Roots" },
    { icon: <IconEmpower />, label: "Empower\nPeople" },
    { icon: <IconGlobe />, label: "Create\nA Healthier Tomorrow" },
  ];

  return (
    <section className="py-6 pb-12 sm:pb-16" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="relative rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12"
          style={{ background: "#0d2717", minHeight: 240 }}
        >
          {/* Decorative leaf */}
          <div className="absolute left-0 bottom-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <path d="M100 200 C100 100 20 60 30 10 C60 80 140 100 130 180" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 grid gap-8 items-center lg:grid-cols-2 lg:gap-10">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#74c99a" }}>
                READY TO EXPLORE?
              </p>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontWeight: 900 }}>
                Be a Part of the Movement
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#a7f3d0" }}>
                Join thousands of learners, practitioners, researchers and changemakers in preserving India's Ayurvedic heritage.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white hover:bg-white hover:text-green-900 transition-colors"
                >
                  Get Started <ArrowRight size={14} />
                </button>
                <button
                  className="text-sm font-medium hover:underline"
                  style={{ color: "#74c99a" }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-end">
              {/* Pillar icons */}
              <div className="grid grid-cols-3 gap-4 sm:flex sm:items-start sm:gap-8">
                {pillars.map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    {icon}
                    <p
                      className="text-xs text-center leading-tight"
                      style={{ color: "#74c99a", whiteSpace: "pre-line" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              {/* Script */}
              <p
                style={{ fontFamily: "'Dancing Script', cursive", color: "#a7f3d0", fontSize: 22 }}
                className="leading-snug sm:text-right"
              >
                Small Steps.<br />Big Change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

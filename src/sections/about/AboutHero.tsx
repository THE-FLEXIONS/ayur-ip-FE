import { HERO_IMG } from "./shared/assets";
import { IconArrowRight, IconBarChart, IconLeafSmall, IconShieldSm } from "./shared/icons";

// ─── 1. Hero ────────────────────────────────────────────────────────────────

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#f5f8f4", minHeight: 400 }}>
      {/* Background image spanning center */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Ayurveda mortar and pestle" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(245,248,244,0.96) 32%, rgba(245,248,244,0.2) 60%, rgba(245,248,244,0.85) 100%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-6 items-center" style={{ minHeight: 380 }}>
        {/* Left: Text */}
        <div className="col-span-5">
          <p className="text-xs font-bold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>ABOUT US</p>
          <h1 className="text-5xl font-black leading-tight mb-5" style={{ color: "#0d2717", fontWeight: 900 }}>
            Rooted in Heritage.<br />
            <span style={{ color: "#1a4d2e" }}>Designed for Tomorrow.</span>
          </h1>
          <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "#4b5563" }}>
            Ayur-Ip is a platform dedicated to preserving, protecting, and advancing India's rich Ayurvedic knowledge through technology, research, and collaboration.
          </p>
          <button
            className="flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#1a4d2e" }}
          >
            Our Story <IconArrowRight />
          </button>
        </div>

        {/* Center: spacer for image */}
        <div className="col-span-4" />

        {/* Right: quote + icon list */}
        <div className="col-span-3 flex flex-col items-end gap-6">
          {/* Quote */}
          <div className="text-right mb-2">
            <p
              className="text-lg leading-snug"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 20 }}
            >
              "Ancient Knowledge.<br />A Healthier<br />Tomorrow."
            </p>
            <div className="mt-2 h-0.5 w-12 ml-auto rounded-full" style={{ background: "#1a4d2e" }} />
          </div>

          {/* Three icon rows */}
          {[
            { icon: <IconLeafSmall />, title: "Preserve", sub: "Our Roots" },
            { icon: <IconShieldSm />, title: "Protect", sub: "Our Wisdom" },
            { icon: <IconBarChart />, title: "Propel", sub: "A Healthier Future" },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm" style={{ minWidth: 180 }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#f0f7f0" }}>
                {icon}
              </div>
              <div>
                <p className="text-sm font-bold leading-none" style={{ color: "#0d2717" }}>{title}</p>
                <p className="text-xs" style={{ color: "#6b7280" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:py-16" style={{ minHeight: 380 }}>
        {/* Left: Text */}
        <div className="lg:col-span-5">
          <p className="mb-4 text-xs font-bold tracking-widest" style={{ color: "#2d6a4f" }}>ABOUT US</p>
          <h1 className="mb-4 text-3xl font-black leading-tight sm:mb-5 sm:text-4xl lg:text-5xl" style={{ color: "#0d2717", fontWeight: 900 }}>
            Rooted in Heritage.<br />
            <span style={{ color: "#1a4d2e" }}>Designed for Tomorrow.</span>
          </h1>
          <p className="mb-6 max-w-md text-[15px] leading-relaxed sm:mb-8 sm:text-base" style={{ color: "#4b5563" }}>
            Ayur-Ip is a platform dedicated to preserving, protecting, and advancing India's rich Ayurvedic knowledge through technology, research, and collaboration.
          </p>
          <button
            className="flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-7"
            style={{ background: "#1a4d2e" }}
          >
            Our Story <IconArrowRight />
          </button>
        </div>

        {/* Center: spacer for image */}
        <div className="hidden lg:col-span-4 lg:block" />

        {/* Right: quote + icon list */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-3 lg:flex lg:flex-col lg:items-end lg:gap-6">
          {/* Quote */}
          <div className="mb-2 text-left sm:col-span-3 sm:text-center lg:text-right">
            <p
              className="text-lg leading-snug"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 20 }}
            >
              "Ancient Knowledge.<br />A Healthier<br />Tomorrow."
            </p>
            <div className="mt-2 h-0.5 w-12 rounded-full bg-[#1a4d2e] sm:mx-auto lg:ml-auto lg:mr-0" />
          </div>

          {/* Three icon rows */}
          {[
            { icon: <IconLeafSmall />, title: "Preserve", sub: "Our Roots" },
            { icon: <IconShieldSm />, title: "Protect", sub: "Our Wisdom" },
            { icon: <IconBarChart />, title: "Propel", sub: "A Healthier Future" },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex min-w-0 items-center gap-2 rounded-xl bg-white px-3 py-3 shadow-sm sm:px-2 lg:min-w-[180px] lg:gap-3 lg:px-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "#f0f7f0" }}>
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

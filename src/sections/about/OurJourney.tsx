import { IconArrowRight } from "./shared/icons";

// ─── 5. Our Journey ─────────────────────────────────────────────────────────

export default function OurJourney() {
  const milestones = [
    {
      year: "2023",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M22 36V18" stroke="#1a4d2e" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M22 22C22 22 13 20 10 10c7 0 13 6 12 12z" stroke="#1a4d2e" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
          <path d="M22 18C22 18 31 16 34 6c-7 0-13 6-12 12z" stroke="#1a4d2e" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        </svg>
      ),
      title: "Our Roots",
      desc: "India's rich Ayurvedic heritage inspires our foundation.",
    },
    {
      year: "2024",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="8" y="6" width="20" height="28" rx="2" stroke="#1a4d2e" strokeWidth="1.8" fill="none" />
          <rect x="16" y="10" width="16" height="24" rx="2" stroke="#1a4d2e" strokeWidth="1.8" fill="none" />
          <path d="M12 16h8M12 20h8M12 24h6" stroke="#1a4d2e" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
      title: "Building the Foundation",
      desc: "We began integrating traditional knowledge with modern technology.",
    },
    {
      year: "2025",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M22 8a10 10 0 017 17.1V28a2 2 0 01-2 2h-10a2 2 0 01-2-2v-2.9A10 10 0 0122 8z" stroke="#1a4d2e" strokeWidth="1.8" fill="none" />
          <path d="M18 34h8M19 38h6" stroke="#1a4d2e" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 6l-3 3M30 6l3 3M10 14l-3-1M34 14l3-1" stroke="#1a4d2e" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
      title: "Growing Together",
      desc: "A growing community of learners, researchers and practitioners.",
    },
    {
      year: "Beyond",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="14" stroke="#1a4d2e" strokeWidth="1.8" fill="none" />
          <ellipse cx="22" cy="22" rx="6" ry="14" stroke="#1a4d2e" strokeWidth="1.8" fill="none" />
          <path d="M8 22h28M12 12h20M12 32h20" stroke="#1a4d2e" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M26 10c4 2 6 5 6 8" stroke="#1a4d2e" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
      title: "A Healthier Tomorrow",
      desc: "Expanding access, impacting lives, preserving for generations.",
    },
  ];

  return (
    <section className="py-14 sm:py-20" style={{ background: "#f5f8f4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 items-start lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d6a4f" }}>OUR JOURNEY</p>
            <h2 className="text-[34px] sm:text-5xl font-black mb-5 leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              From Ancient Roots<br className="hidden sm:block" /> to a <span style={{ color: "#1a4d2e" }}>Brighter Future</span>
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "#4b5563" }}>
              A journey driven by the belief that India's traditional knowledge can solve modern challenges — when preserved, connected and made accessible to all.
            </p>
            <button
              className="flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 mb-8"
              style={{ background: "#1a4d2e" }}
            >
              Our Story <IconArrowRight />
            </button>
            <p
              className="text-lg"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 22 }}
            >
              Different times.<br />Same purpose.
            </p>
            <div className="mt-2 h-0.5 w-10 rounded-full" style={{ background: "#1a4d2e" }} />
          </div>

          {/* Right: Timeline */}
          <div>
            {/* Quote top right */}
            <div className="hidden text-right mb-6 sm:block">
              <p
                className="text-base leading-snug"
                style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 18 }}
              >
                "A healthier tomorrow<br />is a journey we build together."
              </p>
              <div className="mt-1 h-0.5 w-10 ml-auto rounded-full" style={{ background: "#1a4d2e" }} />
            </div>

            {/* Wavy timeline connector + icons */}
            <div className="relative">
              {/* SVG wavy line */}
              <svg
                className="absolute top-8 left-0 right-0 hidden w-full sm:block"
                height="60"
                viewBox="0 0 560 60"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M20 40 C80 10 130 50 200 30 C270 10 310 50 370 25 C430 5 500 45 545 20"
                  stroke="#c3e6cc"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Dots at each milestone */}
                {[20, 200, 370, 545].map((x, i) => (
                  <circle key={i} cx={x} cy={i === 0 ? 40 : i === 1 ? 30 : i === 2 ? 25 : 20} r="6" fill="#1a4d2e" />
                ))}
              </svg>

              {/* Milestone columns */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 sm:gap-3 sm:pt-20">
                {milestones.map(({ year, icon, title, desc }) => (
                  <div key={year} className="flex flex-col items-center text-center gap-2">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                      style={{ background: "#f0f7f0", borderColor: "#c3e6cc" }}
                    >
                      {icon}
                    </div>
                    <p className="text-sm font-bold leading-tight" style={{ color: "#0d2717" }}>{title}</p>
                    <p className="text-xs leading-snug" style={{ color: "#6b7280" }}>{desc}</p>
                    <div
                      className="mt-1 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "#e8f5ed", color: "#1a4d2e" }}
                    >
                      {year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

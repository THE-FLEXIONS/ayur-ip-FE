import { FOREST_IMG } from "./shared/assets";
import { IconEye, IconHeart, IconTarget } from "./shared/icons";

// ─── 4. Our Purpose ─────────────────────────────────────────────────────────

export default function OurPurpose() {
  const cards = [
    {
      icon: <IconTarget color="#1a4d2e" />,
      iconBg: "#e8f5ed",
      title: "Our Mission",
      desc: "To preserve and protect Ayurvedic knowledge through authentic information, modern technology, and global collaboration.",
    },
    {
      icon: <IconEye color="#1a4d2e" />,
      iconBg: "#e8f5ed",
      title: "Our Vision",
      desc: "A world where traditional knowledge empowers healthier lives, drives responsible innovation, and is valued for generations to come.",
    },
    {
      icon: <IconHeart color="#c0392b" />,
      iconBg: "#fdecea",
      title: "Our Values",
      desc: "Integrity, inclusivity, sustainability, respect for tradition, and commitment to real-world impact.",
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left forest image with quote */}
          <div className="relative lg:col-span-4 lg:self-start">
            <div className="h-64 rounded-3xl overflow-hidden sm:h-80 lg:h-[420px]">
              <img src={FOREST_IMG} alt="Misty forest" className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-3xl" style={{ background: "rgba(13,39,23,0.48)" }} />
            </div>
            {/* Quote overlay */}
            <div className="absolute bottom-8 left-6 right-6">
              <p
                className="text-lg leading-snug text-white"
                style={{ fontFamily: "'Dancing Script', cursive", fontSize: 22 }}
              >
                "A living tradition<br />for a healthier,<br />more mindful world."
              </p>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-white opacity-70" />
            </div>
          </div>

          {/* Right: heading + cards */}
          <div className="lg:col-span-8">
            {/* Top: heading + botanical illustration */}
            <div className="flex items-start justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d6a4f" }}>OUR PURPOSE</p>
                <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
                  Guided by a Bigger Vision
                </h2>
                <p className="text-base leading-relaxed max-w-lg" style={{ color: "#4b5563" }}>
                  Ayur-Ip is more than a product — it's a movement to ensure that India's Ayurvedic heritage continues to heal, inspire, and create opportunities for future generations.
                </p>
              </div>
              {/* Botanical circle decoration */}
              <div className="hidden flex-shrink-0 sm:block">
                <div
                  className="w-28 h-28 rounded-full flex flex-col items-center justify-center border-2"
                  style={{ background: "#f0f7f0", borderColor: "#c3e6cc" }}
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M10 38C10 18 18 6 38 10c-8 6-12 18-8 30" stroke="#2d6a4f" strokeWidth="2" fill="none" />
                    <path d="M10 38C10 30 18 24 24 24" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M24 10C24 22 30 30 38 32" stroke="#2d6a4f" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                  </svg>
                  <p className="text-xs font-semibold text-center mt-1 leading-tight" style={{ color: "#1a4d2e", fontSize: 9 }}>
                    PEOPLE<br />PLANTS<br />POSSIBILITIES
                  </p>
                </div>
              </div>
            </div>

            {/* Three cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {cards.map(({ icon, iconBg, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 border"
                  style={{ borderColor: "#e5e7eb", background: "#fafafa" }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: iconBg }}>
                    {icon}
                  </div>
                  <p className="text-sm font-bold mb-2" style={{ color: "#0d2717" }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

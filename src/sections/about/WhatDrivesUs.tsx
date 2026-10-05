import { IconBulb, IconGlobe, IconLeafCircle, IconUsers } from "./shared/icons";

// ─── 2. What Drives Us ──────────────────────────────────────────────────────

export default function WhatDrivesUs() {
  const values = [
    {
      bg: "#e8f5ed",
      iconBg: "#c8e6cc",
      icon: <IconLeafCircle color="#2d6a4f" />,
      title: "Authenticity",
      desc: "We value verified, traditional knowledge.",
    },
    {
      bg: "#fef9ec",
      iconBg: "#fde9a2",
      icon: <IconUsers color="#b8860b" />,
      title: "Inclusivity",
      desc: "We build for people, everywhere.",
    },
    {
      bg: "#f0eefb",
      iconBg: "#ddd8f7",
      icon: <IconBulb color="#6b5dd3" />,
      title: "Innovation",
      desc: "We use technology to create real-world impact.",
    },
    {
      bg: "#e8f3fb",
      iconBg: "#c8dff4",
      icon: <IconGlobe color="#1a6cb5" />,
      title: "Sustainability",
      desc: "We work towards a healthier planet and healthier people.",
    },
  ];

  return (
    <section className="py-14 sm:py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 items-start lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d6a4f" }}>WHAT DRIVES US</p>
            <h2 className="text-[34px] sm:text-5xl font-black mb-5 leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              More Than a <span style={{ color: "#1a4d2e" }}>Platform</span>
            </h2>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: "#4b5563" }}>
              We are a team of creators, researchers, and problem-solvers working at the intersection of tradition and technology to make Ayurvedic knowledge accessible, credible, and impactful for everyone.
            </p>
          </div>

          {/* Right: 4 value cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {values.map(({ bg, iconBg, icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center gap-3"
                style={{ background: bg }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: iconBg }}>
                  {icon}
                </div>
                <p className="text-sm font-bold" style={{ color: "#0d2717" }}>{title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

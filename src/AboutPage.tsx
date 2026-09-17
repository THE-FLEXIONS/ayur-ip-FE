// About Page – Ayur IP

const HERO_IMG =
  "https://images.unsplash.com/photo-1624629664130-55d0d461a42d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const FOREST_IMG =
  "https://images.unsplash.com/photo-1534531409543-069f6204c5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const PLANT_IMG =
  "https://images.unsplash.com/photo-1611843467160-25afb8df1074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";
const TEAM1_IMG =
  "https://images.unsplash.com/photo-1680525021501-ddea41969892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80";
const TEAM2_IMG =
  "https://images.unsplash.com/photo-1630939687530-241d630735df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80";
const TEAM3_IMG =
  "https://images.unsplash.com/photo-1626855367255-6cab7d8726d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80";

// ─── Icons ──────────────────────────────────────────────────────────────────

function IconLeafSmall() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 16C5 9 9 3 17 5c-4 3-6 8-4 13" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
      <path d="M5 16C5 13 8 10 11 10" stroke="#1a4d2e" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconShieldSm() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3 5v6c0 4 3 7 7 8 4-1 7-4 7-8V5L10 2z" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
      <path d="M7 10l2.5 2.5L13 8" stroke="#1a4d2e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBarChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="10" width="4" height="8" rx="1" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
      <rect x="8" y="6" width="4" height="12" rx="1" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
      <rect x="14" y="2" width="4" height="16" rx="1" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

function IconLeafCircle({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 22C7 12 12 5 22 7c-5 4-7 11-5 18" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M7 22C7 18 11 14 15 14" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconUsers({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="8" r="3.5" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M3 22c0-4 3-6.5 7-6.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <circle cx="19" cy="8" r="3.5" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M17 15.5c3.5 0 7 2.5 7 6.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconBulb({ color = "#6b5dd3" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4a7 7 0 015 11.9V18a1 1 0 01-1 1h-8a1 1 0 01-1-1v-2.1A7 7 0 0114 4z" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M11 21h6M12 24h4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconGlobe({ color = "#1a6cb5" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="1.6" fill="none" />
      <ellipse cx="14" cy="14" rx="4.5" ry="10" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M4 14h20M6.5 8h15M6.5 20h15" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconTarget({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="1.6" fill="none" />
      <circle cx="14" cy="14" r="6" stroke={color} strokeWidth="1.6" fill="none" />
      <circle cx="14" cy="14" r="2.5" fill={color} />
    </svg>
  );
}

function IconEye({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M2 14s4-8 12-8 12 8 12 8-4 8-12 8S2 14 2 14z" stroke={color} strokeWidth="1.6" fill="none" />
      <circle cx="14" cy="14" r="3.5" stroke={color} strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function IconHeart({ color = "#c0392b" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 23S4 16.5 4 9.5A5 5 0 0114 8a5 5 0 0110 1.5C24 16.5 14 23 14 23z" stroke={color} strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSeedling({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 30V16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 20C18 20 10 18 8 10c5 0 10 4 10 10z" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <path d="M18 16C18 16 26 14 28 6c-5 0-10 4-10 10z" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function IconBooks({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="6" width="12" height="24" rx="1.5" stroke={color} strokeWidth="1.8" fill="none" />
      <rect x="14" y="10" width="10" height="20" rx="1.5" stroke={color} strokeWidth="1.8" fill="none" />
      <path d="M8 14h4M8 18h4M8 22h3" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconBulbLg({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 5a9 9 0 016 15.4V23a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 0112 23v-2.6A9 9 0 0118 5z" stroke={color} strokeWidth="1.8" fill="none" />
      <path d="M14 27h8M15 30h6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconGlobeLg({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="13" stroke={color} strokeWidth="1.8" fill="none" />
      <ellipse cx="18" cy="18" rx="5.5" ry="13" stroke={color} strokeWidth="1.8" fill="none" />
      <path d="M5 18h26M8 10h20M8 26h20" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// ─── 1. Hero ────────────────────────────────────────────────────────────────

function AboutHero() {
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

// ─── 2. What Drives Us ──────────────────────────────────────────────────────

function WhatDrivesUs() {
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
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d6a4f" }}>WHAT DRIVES US</p>
            <h2 className="text-5xl font-black mb-5 leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              More Than a <span style={{ color: "#1a4d2e" }}>Platform</span>
            </h2>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: "#4b5563" }}>
              We are a team of creators, researchers, and problem-solvers working at the intersection of tradition and technology to make Ayurvedic knowledge accessible, credible, and impactful for everyone.
            </p>
          </div>

          {/* Right: 4 value cards */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ bg, iconBg, icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex flex-col items-center text-center gap-3"
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

// ─── 3. Impact So Far ───────────────────────────────────────────────────────

function ImpactSection() {
  const stats = [
    { value: "1,200+", label: "Medicinal Plants\nDocumented" },
    { value: "300+", label: "Classical\nFormulations" },
    { value: "10,000+", label: "Active Users\n(Researchers, Practitioners, Learners)" },
    { value: "50+", label: "Partner Institutions\n& Experts" },
  ];

  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "#f5f8f4" }}>
      {/* Decorative leaf left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
          <path d="M20 190C20 100 60 20 100 10C70 70 50 130 70 180" stroke="#2d6a4f" strokeWidth="2" fill="#2d6a4f" fillOpacity="0.25" />
          <path d="M20 190C30 160 55 140 70 150" stroke="#2d6a4f" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black mb-1" style={{ color: "#0d2717", fontWeight: 900 }}>Our Impact So Far</h2>
            <p className="text-sm" style={{ color: "#6b7280" }}>A growing community, a stronger tomorrow.</p>
          </div>
          {/* Script quote right */}
          <div className="text-right mr-4">
            <p
              className="text-xl leading-snug"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 22 }}
            >
              Small<br />Steps.<br />Big Change.
            </p>
            <div className="mt-2 h-0.5 w-10 ml-auto rounded-full" style={{ background: "#1a4d2e" }} />
          </div>
        </div>

        <div className="grid grid-cols-4 divide-x" style={{ borderColor: "#d1e8d5" }}>
          {stats.map(({ value, label }, i) => (
            <div
              key={value}
              className="px-8 first:pl-0 last:pr-0"
              style={{ borderColor: "#d1e8d5" }}
            >
              <p className="text-4xl font-black mb-1" style={{ color: "#0d2717", fontWeight: 900 }}>{value}</p>
              <p className="text-xs leading-snug" style={{ color: "#6b7280", whiteSpace: "pre-line" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Our Purpose ─────────────────────────────────────────────────────────

function OurPurpose() {
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
    <section className="relative py-20 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Left forest image with quote */}
          <div className="col-span-4 relative">
            <div className="rounded-3xl overflow-hidden" style={{ height: 420 }}>
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
          <div className="col-span-8">
            {/* Top: heading + botanical illustration */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d6a4f" }}>OUR PURPOSE</p>
                <h2 className="text-4xl font-black mb-4 leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
                  Guided by a Bigger Vision
                </h2>
                <p className="text-base leading-relaxed max-w-lg" style={{ color: "#4b5563" }}>
                  Ayur-Ip is more than a product — it's a movement to ensure that India's Ayurvedic heritage continues to heal, inspire, and create opportunities for future generations.
                </p>
              </div>
              {/* Botanical circle decoration */}
              <div className="flex-shrink-0">
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
            <div className="grid grid-cols-3 gap-4">
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

// ─── 5. Our Journey ─────────────────────────────────────────────────────────

function OurJourney() {
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
    <section className="py-20" style={{ background: "#f5f8f4" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: "#2d6a4f" }}>OUR JOURNEY</p>
            <h2 className="text-5xl font-black mb-5 leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              From Ancient Roots<br />to a <span style={{ color: "#1a4d2e" }}>Brighter Future</span>
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
            <div className="text-right mb-6">
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
                className="absolute top-8 left-0 right-0 w-full"
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
              <div className="grid grid-cols-4 gap-3 pt-20">
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

// ─── 6. Meet the Team ───────────────────────────────────────────────────────

function MeetTheTeam() {
  const team = [
    {
      img: TEAM1_IMG,
      name: "Naman Sachdev",
      role: "Product & Design",
      bio: "Passionate about creating meaningful digital experiences for traditional knowledge.",
    },
    {
      img: TEAM2_IMG,
      name: "Aditi Sharma",
      role: "Research & Content",
      bio: "Bridging ancient wisdom with modern research for greater impact.",
    },
    {
      img: TEAM3_IMG,
      name: "Rohan Verma",
      role: "Technology & Development",
      bio: "Building reliable and scalable solutions to make Ayurveda accessible to all.",
    },
  ];

  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left */}
          <div className="col-span-3">
            <p className="text-xs font-bold tracking-widest mb-3 flex items-center gap-2" style={{ color: "#2d6a4f" }}>
              MEET THE TEAM
              <span style={{ color: "#1a4d2e", fontSize: 16 }}>✦</span>
            </p>
            <h2 className="text-4xl font-black mb-5 leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              People Behind<br /><span style={{ color: "#1a4d2e" }}>Ayur-Ip</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#4b5563" }}>
              We are a diverse team of creators, researchers and problem-solvers, united by a common purpose — to preserve, protect and propel India's Ayurvedic knowledge for a healthier tomorrow.
            </p>
            <button
              className="flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 mb-8"
              style={{ background: "#1a4d2e" }}
            >
              Meet the Team <IconArrowRight />
            </button>
            <p
              className="text-lg"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 20 }}
            >
              "Different minds.<br />A shared purpose."
            </p>
            <div className="mt-2 h-0.5 w-10 rounded-full" style={{ background: "#1a4d2e" }} />
          </div>

          {/* Team cards */}
          {team.map(({ img, name, role, bio }) => (
            <div
              key={name}
              className="col-span-3 rounded-2xl border overflow-hidden"
              style={{ borderColor: "#e5e7eb" }}
            >
              {/* Photo */}
              <div className="overflow-hidden" style={{ height: 200 }}>
                <img src={img} alt={name} className="w-full h-full object-cover object-top" />
              </div>
              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#e8f5ed" }}>
                    <IconLeafCircle color="#2d6a4f" />
                  </div>
                  <p className="text-sm font-bold" style={{ color: "#0d2717" }}>{name}</p>
                </div>
                <p className="text-xs font-medium mb-3" style={{ color: "#6b7280" }}>{role}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{bio}</p>
              </div>
            </div>
          ))}

          {/* "And many more" card */}
          <div
            className="col-span-3 rounded-2xl border flex flex-col items-center justify-center text-center p-6 gap-3 cursor-pointer hover:shadow-md transition-shadow"
            style={{ borderColor: "#e5e7eb", minHeight: 320 }}
          >
            <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>And many more amazing contributors</p>
            <div
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "#1a4d2e", color: "#1a4d2e" }}
            >
              <IconArrowRight />
            </div>
          </div>
        </div>

        {/* Script quote + leaf right */}
        <div className="flex items-center justify-end mt-6 gap-4">
          <div className="text-right">
            <p
              className="text-lg leading-snug"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 20 }}
            >
              "Technology<br />meets tradition<br />because people<br />make it happen."
            </p>
            <div className="mt-2 h-0.5 w-10 ml-auto rounded-full" style={{ background: "#1a4d2e" }} />
          </div>
          {/* Decorative leaf */}
          <div className="opacity-40">
            <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
              <path d="M40 115C40 55 60 20 70 10C50 40 30 70 40 110" stroke="#2d6a4f" strokeWidth="2" fill="#2d6a4f" fillOpacity="0.3" />
              <path d="M40 90C40 75 50 65 60 68" stroke="#2d6a4f" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. CTA – Let's Create a Healthier Tomorrow ─────────────────────────────

function JoinCTA() {
  const stats = [
    { icon: <IconUsers color="#1a4d2e" />, value: "10,000+", label: "Community Members", sub: "Learners, practitioners and researchers" },
    { icon: <IconLeafCircle color="#1a4d2e" />, value: "1,200+", label: "Herbs Documented", sub: "From classical texts and modern research" },
    { icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22L14 8l8 14" stroke="#1a4d2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M9 17h10" stroke="#1a4d2e" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ), value: "50+", label: "Partner Institutions", sub: "Universities, NGOs and research centers" },
    { icon: <IconGlobe color="#1a4d2e" />, value: "1 Vision", label: "A Healthier Tomorrow", sub: "Rooted in tradition, powered by people" },
  ];

  return (
    <section className="overflow-hidden" style={{ background: "#f5f8f4" }}>
      <div className="grid grid-cols-2">
        {/* Left: dark image with overlay text */}
        <div className="relative" style={{ minHeight: 420 }}>
          <img src={PLANT_IMG} alt="Hands planting seedling" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0" style={{ background: "rgba(13,39,23,0.52)" }} />
          <div className="relative z-10 p-12 flex flex-col justify-end h-full">
            <p className="text-xs font-bold tracking-widest mb-4 text-white opacity-80">BE A PART OF OUR STORY</p>
            <h2 className="text-4xl font-black text-white leading-tight mb-5" style={{ fontWeight: 900 }}>
              Let's Create a<br />Healthier Tomorrow
            </h2>
            <p className="text-sm leading-relaxed mb-8 text-white opacity-80 max-w-sm">
              Whether you are a learner, practitioner, researcher or policymaker, there's a place for you in this journey. Together, we can protect our roots and build a healthier, brighter future.
            </p>
            <button
              className="flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold bg-white transition-opacity hover:opacity-90 self-start"
              style={{ color: "#0d2717" }}
            >
              Join the Community <IconArrowRight />
            </button>
          </div>
        </div>

        {/* Right: stats grid */}
        <div className="p-12 flex flex-col justify-between" style={{ background: "#f0f7f0" }}>
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon, value, label, sub }, i) => (
              <div
                key={value + i}
                className="flex flex-col gap-3 pb-6"
                style={{ borderBottom: i < 2 ? "1px solid #c3e6cc" : "none" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#d8f3dc" }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-2xl font-black" style={{ color: "#0d2717", fontWeight: 900 }}>{value}</p>
                    <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>{label}</p>
                  </div>
                </div>
                <p className="text-xs" style={{ color: "#6b7280" }}>{sub}</p>
              </div>
            ))}
          </div>

          {/* Script quote */}
          <div className="mt-6 text-center">
            <p
              className="text-lg"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 20 }}
            >
              "Real change begins when knowledge is shared."
            </p>
            <div className="mt-2 h-0.5 w-12 mx-auto rounded-full" style={{ background: "#1a4d2e" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About Page ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="pt-16" style={{ fontFamily: "Inter, sans-serif" }}>
      <AboutHero />
      <WhatDrivesUs />
      <ImpactSection />
      <OurPurpose />
      <OurJourney />
      <MeetTheTeam />
      <JoinCTA />
    </div>
  );
}

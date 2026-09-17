// Use Cases Page — Ayur IP

const WOMAN_NATURE =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80";
const RESEARCHER_PLANT =
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80";
const OLD_BOOKS =
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80";

const CARD_INDIVIDUAL =
  "https://images.unsplash.com/photo-1524863479829-916d8e77f114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80";
const CARD_RESEARCHER =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80";
const CARD_PRACTITIONER =
  "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80";
const CARD_GOV =
  "https://images.unsplash.com/photo-1587474260584-136574528ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80";

// ─── Icons ────────────────────────────────────────────────────────────────

function ArrowRight({ color = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowLeft({ color = "currentColor", size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M15 9H3M7 4L2 9l5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPersonSm({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="6.5" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M3.5 17c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconFlask({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M8 2v5L3.5 15a1.5 1.5 0 001.3 2.3h10.4A1.5 1.5 0 0016.5 15L12 7V2" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M7 2h6M6 12h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconLeafSm({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 17C4 8 9 3 17 4C11 8 8 13 10 18" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M4 17C4 13 8 9 12 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconBookSm({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 4.5C3 4.5 5 3.5 7 3.5C9 3.5 10 4.5 10 4.5V16C10 16 9 15 7 15C5 15 3 16 3 16V4.5Z" stroke={color} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M17 4.5C17 4.5 15 3.5 13 3.5C11 3.5 10 4.5 10 4.5V16C10 16 11 15 13 15C15 15 17 16 17 16V4.5Z" stroke={color} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function IconBulb({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2a5.5 5.5 0 00-3.3 9.9c.5.4.8 1 .8 1.6v.5h5v-.5c0-.6.3-1.2.8-1.6A5.5 5.5 0 0010 2z" stroke={color} strokeWidth="1.4" fill="none" />
      <path d="M7.5 17h5M8 15h4" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconBank({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3 6h14L10 2z" stroke={color} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M5 9v6M8.5 9v6M11.5 9v6M15 9v6M3 17h14" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ChipDot({ color }: { color: string }) {
  return <span className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ background: color }} />;
}

// ─── Hero ─────────────────────────────────────────────────────────────────

function UseCasesHero() {
  const timeline = [
    { title: "Individuals", sub: "Better Living", color: "#6b4423", top: 0 },
    { title: "Researchers", sub: "Deeper Discoveries", color: "#2d6a4f", top: 130 },
    { title: "Practitioners", sub: "Trusted Practice", color: "#a8722c", top: 250 },
    { title: "Educators", sub: "Wider Awareness", color: "#b8860b", top: 350 },
    { title: "Innovators", sub: "New Possibilities", color: "#1a4028", top: 440 },
    { title: "Governments", sub: "Stronger Policies", color: "#6b4423", top: 560 },
  ];

  return (
    <section
      className="pt-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f7f6ef 0%, #ffffff 55%, #f0f7f2 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-4">
        <div className="grid grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] mb-6" style={{ color: "#2d6a4f" }}>
              USE CASES
            </p>
            <h1 className="text-6xl font-black leading-[1.05] mb-6" style={{ color: "#0d2717", fontWeight: 900 }}>
              Different Needs.<br />
              A <span style={{ color: "#2d6a4f" }}>Healthier</span> Tomorrow.
            </h1>
            <p className="text-lg leading-relaxed mb-9 max-w-md" style={{ color: "#4b5563" }}>
              From individual wellness to global research, Ayur-Ip empowers diverse users to discover, protect and apply the wisdom of Ayurveda — in the real world.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-12">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "#1a4028" }}
              >
                Explore Use Cases <ArrowRight color="white" size={15} />
              </button>
              <button
                className="flex items-center gap-3 pl-2 pr-6 py-2 rounded-full text-sm font-semibold border transition-colors hover:bg-gray-50"
                style={{ borderColor: "#d1d5db", color: "#0d2717" }}
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: "1.5px solid #0d2717" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 3l7 4-7 4V3z" fill="#0d2717" />
                  </svg>
                </span>
                Watch Video
              </button>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-10">
              {[
                { icon: <IconLeafSm color="#2d6a4f" />, val: "6+", label: "User Groups" },
                { icon: <IconBookSm color="#2d6a4f" />, val: "Real", label: "Applications" },
                { icon: <IconBank color="#2d6a4f" />, val: "Greater", label: "Impact" },
              ].map(({ icon, val, label }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "#e8f2ea" }}>
                    {icon}
                  </span>
                  <div>
                    <p className="text-base font-bold" style={{ color: "#0d2717" }}>{val}</p>
                    <p className="text-xs" style={{ color: "#9ca3af" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-12 flex items-end gap-4">
              <p
                className="text-2xl leading-tight"
                style={{ fontFamily: "'Dancing Script', cursive", color: "#2d6a4f" }}
              >
                "Ancient Knowledge.<br />Modern Relevance.<br />Real People."
              </p>
              <div className="mb-2 h-px w-16" style={{ background: "#9ca3af" }} />
            </div>
          </div>

          {/* Right: image collage + timeline */}
          <div className="relative" style={{ minHeight: 620 }}>
            {/* Script top-right */}
            <div className="absolute top-0 right-0 text-right z-20">
              <p
                className="text-2xl leading-snug"
                style={{ fontFamily: "'Dancing Script', cursive", color: "#2d6a4f" }}
              >
                People<br />Plants<br />Progress<br />Together.
              </p>
              <div className="mt-1 h-px w-12 ml-auto" style={{ background: "#9ca3af" }} />
            </div>

            {/* Image collage */}
            <div className="absolute left-0 top-20 flex gap-3" style={{ width: 400 }}>
              {/* Arched image 1 */}
              <div className="relative">
                <div
                  className="overflow-hidden shadow-lg"
                  style={{ width: 185, height: 400, borderRadius: "92px 92px 12px 12px" }}
                >
                  <img src={WOMAN_NATURE} alt="Woman in nature" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,0.35))" }} />
                  <p className="absolute left-4 top-32 text-white italic text-lg leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    For a<br />healthier<br />you
                  </p>
                  <p className="absolute left-4 bottom-6 text-white italic text-lg leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    For<br />deeper<br />research
                  </p>
                </div>
                {/* Overlapping researcher image */}
                <div
                  className="absolute overflow-hidden shadow-lg"
                  style={{ left: 95, top: 150, width: 175, height: 250, borderRadius: "88px 88px 12px 12px", border: "3px solid #fff" }}
                >
                  <img src={RESEARCHER_PLANT} alt="Researcher with plant" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Arched image 2 (books) */}
              <div
                className="relative overflow-hidden shadow-lg mt-24"
                style={{ width: 190, height: 340, borderRadius: "12px 12px 12px 12px", alignSelf: "flex-start" }}
              >
                <img src={OLD_BOOKS} alt="Ancient books and herbs" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,0.4))" }} />
                <p className="absolute left-3 top-24 text-white italic text-base leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  For<br />preserving<br />traditions
                </p>
                <p className="absolute left-3 bottom-5 text-white italic text-base leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  For a<br />brighter<br />tomorrow
                </p>
              </div>
            </div>

            {/* "Rooted in tradition" caption */}
            <p className="absolute left-0 bottom-2 text-xs font-semibold tracking-[0.2em] leading-6" style={{ color: "#6b7280" }}>
              ROOTED IN<br />TRADITION.<br />BUILT FOR<br />WHAT'S NEXT.
            </p>

            {/* Timeline */}
            <div className="absolute right-0 top-24" style={{ width: 210, height: 620 }}>
              {timeline.map((t, i) => (
                <div key={t.title} className="absolute flex items-center gap-2" style={{ top: t.top, right: 0 }}>
                  <ChipDot color={t.color} />
                  <div>
                    <p className="text-sm font-bold leading-none mb-0.5" style={{ color: "#0d2717" }}>{t.title}</p>
                    <p className="text-xs" style={{ color: "#6b7280" }}>{t.sub}</p>
                  </div>
                </div>
              ))}
              {/* Curved connector line */}
              <svg className="absolute inset-0 pointer-events-none" width="210" height="620" fill="none" style={{ zIndex: -1 }}>
                <path
                  d="M-40 12 C40 12 40 70 -30 130 M-30 130 C60 130 70 200 -50 262 M-50 262 C60 262 90 320 -30 362 M-30 362 C70 362 100 430 -40 452 M-40 452 C60 452 110 520 -40 572"
                  stroke="#8a6d3b"
                  strokeWidth="1.5"
                  strokeDasharray="1 5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Explore Use Cases panel */}
        <ExplorePanel />
      </div>
    </section>
  );
}

// ─── Explore Panel ──────────────────────────────────────────────────────────

function ExplorePanel() {
  const cats = [
    { icon: <IconPersonSm color="#4b5563" />, bg: "#eef2f6", title: "Individuals", desc: "Personal wellness\nand everyday use" },
    { icon: <IconFlask color="#2563eb" />, bg: "#eef4ff", title: "Researchers", desc: "Scientific exploration\nand innovation" },
    { icon: <IconLeafSm color="#a8722c" />, bg: "#fbf1e3", title: "Practitioners", desc: "Clinical knowledge\nand trusted care" },
    { icon: <IconBookSm color="#2d6a4f" />, bg: "#e8f5e9", title: "Educators & Students", desc: "Learning, teaching\nand awareness" },
    { icon: <IconBulb color="#b8860b" />, bg: "#fbf6e3", title: "Innovators & Startups", desc: "Building solutions\nfor the future" },
    { icon: <IconBank color="#2d6a4f" />, bg: "#e8f2ea", title: "Government & NGOs", desc: "Policy, preservation\nand public impact" },
  ];

  return (
    <div className="mt-14 -mx-2 bg-white rounded-t-[40px] shadow-[0_-8px_40px_rgba(0,0,0,0.06)] px-10 pt-12 pb-14 relative z-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-4xl font-black mb-2" style={{ color: "#0d2717", fontWeight: 900 }}>
            Explore Use Cases
          </h2>
          <p className="text-base" style={{ color: "#6b7280" }}>
            Discover how Ayur-Ip creates value for different users and communities.
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#2d6a4f" }}>
          View all use cases <ArrowRight size={15} />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {cats.map(({ icon, bg, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border p-5 flex flex-col transition-shadow hover:shadow-md cursor-pointer"
            style={{ borderColor: "#eceef0", background: "#fcfdfc", minHeight: 190 }}
          >
            <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ background: bg }}>
              {icon}
            </div>
            <h3 className="text-sm font-bold mb-1.5" style={{ color: "#0d2717" }}>{title}</h3>
            <p className="text-xs leading-relaxed flex-1" style={{ color: "#9ca3af", whiteSpace: "pre-line" }}>{desc}</p>
            <div className="mt-3 self-start w-8 h-8 rounded-full border flex items-center justify-center" style={{ borderColor: "#e5e7eb" }}>
              <ArrowRight size={13} color="#6b7280" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Knowledge in Action ─────────────────────────────────────────────────────

function KnowledgeInAction() {
  const stories = [
    {
      img: CARD_INDIVIDUAL,
      script: "Small.\nChoices.\nHealthier\nDays.",
      icon: <IconPersonSm />,
      iconBg: "#e8f2ea",
      tag: "INDIVIDUALS",
      title: "Better Living,\nEveryday",
      desc: "Ananya uses Ayur-Ip to learn about natural remedies for stress and sleep, finding simple, safe solutions from authentic sources.",
      points: ["Personalized recommendations", "Improved sleep and well-being", "More confident health choices"],
      quote: "\"Ayur-Ip helped me take charge of my health, the natural way.\"",
      author: "— Ananya, Working Professional",
    },
    {
      img: CARD_RESEARCHER,
      script: "Ancient\nKnowledge.\nNew\nDiscoveries.",
      icon: <IconFlask />,
      iconBg: "#eef4ff",
      tag: "RESEARCHERS",
      title: "Faster, Deeper\nResearch",
      desc: "Dr. Karan uses Ayur-Ip to access verified classical texts and formulations, helping him explore lesser-known herbs for his research.",
      points: ["Access to verified sources", "Discover new research leads", "Save time with curated knowledge"],
      quote: "\"Ayur-Ip bridges ancient wisdom with modern research.\"",
      author: "— Dr. Karan, PhD Researcher",
    },
    {
      img: CARD_PRACTITIONER,
      script: "Tradition\nGuides.\nCare Heals.",
      icon: <IconLeafSm />,
      iconBg: "#e8f5e9",
      tag: "PRACTITIONERS",
      title: "Trusted Knowledge\nfor Better Care",
      desc: "Dr. Meera uses Ayur-Ip to cross-check formulations, explore herbal combinations and stay updated with safe, evidence-backed practices.",
      points: ["Reliable formulation references", "Updated traditional knowledge", "Greater patient confidence"],
      quote: "\"Ayur-Ip empowers me to practice with authenticity and confidence.\"",
      author: "— Dr. Meera, Ayurvedic Practitioner",
    },
    {
      img: CARD_GOV,
      script: "Preserve\nToday.\nFor Brighter\nTomorrows.",
      icon: <IconBank />,
      iconBg: "#e8f2ea",
      tag: "GOVERNMENT & NGOS",
      title: "Informed Policies\nfor a Healthier Nation",
      desc: "The Ministry uses Ayur-Ip to identify region-specific medicinal plants, support conservation efforts and design evidence-based public health initiatives.",
      points: ["Data-driven policy support", "Conservation of local biodiversity", "Greater public health awareness"],
      quote: "\"Ayur-Ip helps us build policies rooted in our heritage, for future generations.\"",
      author: "— Ministry of AYUSH",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f4f8f2 0%, #eef4ec 100%)" }}>
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-lg">
            <p className="text-xs font-semibold tracking-[0.25em] mb-4" style={{ color: "#2d6a4f" }}>
              REAL STORIES, REAL IMPACT
            </p>
            <h2 className="text-5xl font-black mb-4" style={{ color: "#0d2717", fontWeight: 900 }}>
              Knowledge <span style={{ color: "#2d6a4f" }}>in Action</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#4b5563" }}>
              See how different people and organizations are using Ayur-Ip to create meaningful change — in their own unique ways.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="pl-8 border-l" style={{ borderColor: "#c3d4c6" }}>
              <p className="text-xl leading-snug" style={{ fontFamily: "'Dancing Script', cursive", color: "#2d6a4f" }}>
                Different people.<br />A healthier tomorrow.
              </p>
              <div className="mt-2 h-px w-14" style={{ background: "#9ca3af" }} />
            </div>
            <div className="flex items-center gap-3">
              <button className="w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100" style={{ background: "#e5eae4" }}>
                <ArrowLeft color="#4b5563" />
              </button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90" style={{ background: "#2d6a4f" }}>
                <ArrowRight color="white" size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-6">
          {stories.map((s) => (
            <div key={s.tag} className="bg-white rounded-3xl p-4 shadow-sm flex flex-col">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-5" style={{ height: 190 }}>
                <img src={s.img} alt={s.tag} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(0,0,0,0.15),rgba(0,0,0,0.35))" }} />
                <p className="absolute top-4 right-4 text-white italic text-base leading-tight text-right" style={{ fontFamily: "'Dancing Script', cursive", whiteSpace: "pre-line" }}>
                  {s.script}
                </p>
              </div>

              {/* Tag */}
              <div className="flex items-center gap-2 mb-3 px-2">
                <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: s.iconBg }}>
                  {s.icon}
                </span>
                <span className="text-xs font-semibold tracking-widest" style={{ color: "#2d6a4f" }}>{s.tag}</span>
              </div>

              {/* Body */}
              <div className="px-2 flex flex-col flex-1">
                <h3 className="text-xl font-black mb-3 leading-tight" style={{ color: "#0d2717", fontWeight: 800, whiteSpace: "pre-line" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>{s.desc}</p>

                {/* Points */}
                <ul className="space-y-3 mb-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#e8f2ea" }}>
                        <IconLeafSm color="#2d6a4f" />
                      </span>
                      <span className="text-sm" style={{ color: "#374151" }}>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="h-px w-full mb-4" style={{ background: "#eceef0" }} />

                {/* Quote */}
                <p className="text-base italic leading-snug mb-3" style={{ fontFamily: "'Dancing Script', cursive", color: "#2d6a4f" }}>
                  {s.quote}
                </p>
                <p className="text-sm mb-5" style={{ color: "#9ca3af" }}>{s.author}</p>

                {/* Read full story */}
                <button className="flex items-center gap-3 mt-auto">
                  <span className="text-sm font-bold" style={{ color: "#0d2717" }}>Read full story</span>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#e8f2ea" }}>
                    <ArrowRight size={14} color="#2d6a4f" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────

function UseCasesFooter() {
  const product = ["Features", "Use Cases", "How it Works", "Pricing", "FAQs"];
  const resources = [
    "Knowledge Base",
    "Ayurveda References",
    "Guidelines & Policies",
    "Research Papers",
    "Case Studies",
    "Blogs & Updates",
    "API (Coming Soon)",
  ];
  const about = ["Our Mission", "Our Team", "Partners", "Media & News", "Careers", "Contact Us"];
  const help = [
    { label: "Help Center" },
    { label: "Raise a Query" },
    { label: "1800-11-AYUSH", sub: "(Toll Free, Mon–Fri 9AM–6PM)" },
    { label: "Live Support" },
  ];
  const govLinks = ["india.gov.in", "ayush.gov.in", "ipindia.gov.in", "mygov.in"];

  return (
    <footer style={{ background: "#f4f8f2" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
                <path d="M20 4C12 6 8 14 12 24C16 18 20 14 20 8" fill="#2d6a4f" />
                <path d="M20 4C28 6 32 14 28 24C24 18 20 14 20 8" fill="#40916c" />
              </svg>
              <div>
                <div className="text-lg font-black" style={{ color: "#0d2717", fontWeight: 800 }}>IP-SAKTI</div>
                <div className="text-xs" style={{ color: "#40916c" }}>AI for Ayurveda IP</div>
              </div>
            </div>
            <p className="text-base italic mb-3" style={{ fontFamily: "'Dancing Script', cursive", color: "#0d2717", fontSize: 16 }}>
              Preserving Traditional Wisdom.<br />Powering a Healthier Tomorrow.
            </p>
            <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: "#2d6a4f" }} />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
              An AI-powered platform to discover, protect and advance Ayurveda knowledge through trusted insights, patent guidance and research support.
            </p>
            <div className="flex gap-3 mb-6">
              {["X", "in", "▶", "◻"].map((icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold transition-colors hover:bg-gray-100" style={{ borderColor: "#d1d5db", color: "#374151" }}>
                  {icon}
                </button>
              ))}
            </div>
            <p className="text-sm italic" style={{ fontFamily: "'Dancing Script', cursive", color: "#6b7280" }}>
              Ancient Knowledge. Brighter Tomorrows.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Product</h4>
            <ul className="space-y-3">
              {product.map((l) => (
                <li key={l}><a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Resources</h4>
            <ul className="space-y-3">
              {resources.map((l) => (
                <li key={l}><a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>About</h4>
            <ul className="space-y-3">
              {about.map((l) => (
                <li key={l}><a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Help & Support</h4>
            <ul className="space-y-4">
              {help.map(({ label, sub }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><IconLeafSm color="#1a4028" /></span>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#0d2717" }}>{label}</p>
                    {sub && <p className="text-xs" style={{ color: "#9ca3af" }}>{sub}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="rounded-2xl p-8 flex items-center justify-between gap-8 mb-10" style={{ background: "#e8f5e9", border: "1px solid #c3e6cc" }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#d8f3dc" }}>
              <IconLeafSm color="#1a4028" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1" style={{ color: "#0d2717" }}>Stay Updated</h4>
              <p className="text-sm" style={{ color: "#4b5563" }}>Get the latest updates on Ayurveda IP, policy changes and new features.</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 min-w-80">
            <div className="flex w-full gap-2">
              <input placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "#d1d5db", background: "white" }} />
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white" style={{ background: "#0d2717" }}>
                Subscribe <ArrowRight size={16} color="white" />
              </button>
            </div>
            <p className="text-xs" style={{ color: "#6b7280" }}>We respect your privacy. No spam, ever.</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-8 items-center">
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>An Initiative Under</p>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>Ministry of AYUSH</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>Government of India</p>
              </div>
            </div>
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>In Collaboration With</p>
              <div className="flex items-center gap-3 text-xs font-bold" style={{ color: "#1a3473" }}>
                <span>IP INDIA</span>
                <span style={{ color: "#1a6fb5" }}>Digital India</span>
                <span style={{ color: "#e8790e" }}>myGov</span>
                <span style={{ color: "#0057a8" }}>G20</span>
              </div>
            </div>
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>Follow Government Portals</p>
              <div className="grid grid-cols-2 gap-1">
                {govLinks.map((l) => (
                  <a key={l} href="#" className="text-xs flex items-center gap-1 hover:underline" style={{ color: "#1a4028" }}>
                    {l}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M4 2h4v4" stroke="#1a4028" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function UseCasesPage() {
  return (
    <div>
      <UseCasesHero />
      <KnowledgeInAction />
      <UseCasesFooter />
    </div>
  );
}

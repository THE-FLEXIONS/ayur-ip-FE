// Features Page — Ayur IP

const HERO_IMG =
  "https://images.unsplash.com/photo-1492552085122-36706c238263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80";
const BOOKS_IMG =
  "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80";
const HERB_CARD_IMG =
  "https://images.unsplash.com/photo-1492552181161-62217fc3076d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&q=80";
const LOCK_IMG =
  "https://images.unsplash.com/photo-1599775017213-1e51e00c5347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80";

// ─── Icons ────────────────────────────────────────────────────────────────

function ArrowRight({ color = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLeafCircle({ bg = "#e8f5e9" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 20C6 10 12 3 20 5C14 9 10 16 12 22" stroke="#2d6a4f" strokeWidth="1.6" fill="none" />
        <path d="M6 20C6 16 10 12 14 12" stroke="#2d6a4f" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function IconDoc({ bg = "#fff8ec" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="2" width="14" height="18" rx="2" stroke="#b45309" strokeWidth="1.5" fill="none" />
        <path d="M8 7h6M8 11h6M8 15h4" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function IconSearch({ bg = "#eff6ff" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="10" cy="10" r="6" stroke="#2563eb" strokeWidth="1.5" fill="none" />
        <path d="M15 15l4 4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function IconPeople({ bg = "#f5f0ff" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke="#7c3aed" strokeWidth="1.4" fill="none" />
        <path d="M3 21c0-3.3 2.7-6 6-6" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="17" cy="7" r="3" stroke="#7c3aed" strokeWidth="1.4" fill="none" />
        <path d="M15 15c3.3 0 6 2.7 6 6" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function IconShieldCheck({ bg = "#f0fdf4" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v7c0 5 3.6 9.3 8 11 4.4-1.7 8-6 8-11V6L12 2z" stroke="#16a34a" strokeWidth="1.5" fill="none" />
        <path d="M9 12l2.5 2.5L15 9" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function IconChart({ bg = "#fff7ed" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="12" width="4" height="9" rx="1" fill="#ea580c" fillOpacity="0.5" stroke="#ea580c" strokeWidth="1.2" />
        <rect x="10" y="7" width="4" height="14" rx="1" fill="#ea580c" fillOpacity="0.5" stroke="#ea580c" strokeWidth="1.2" />
        <rect x="17" y="3" width="4" height="18" rx="1" fill="#ea580c" fillOpacity="0.5" stroke="#ea580c" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

function IconSearchStep() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#d8f3dc", border: "2px solid #b7e4c7" }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 18C5 9 10 3 18 5C12 9 8 15 10 20" stroke="#1a4028" strokeWidth="1.5" fill="none" />
        <path d="M5 18C5 14 9 10 13 10" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function IconDocStep() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#d8f3dc", border: "2px solid #b7e4c7" }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="2" width="13" height="17" rx="2" stroke="#1a4028" strokeWidth="1.4" fill="none" />
        <path d="M7 7h7M7 11h7M7 15h4" stroke="#1a4028" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function IconPersonStep() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#d8f3dc", border: "2px solid #b7e4c7" }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="3.5" stroke="#1a4028" strokeWidth="1.4" fill="none" />
        <path d="M4 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#1a4028" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function IconSparkleStep() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#d8f3dc", border: "2px solid #b7e4c7" }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l2 5.5L18 10l-5.5 2L11 18l-2-5.5L4 10l5.5-2L11 3z" stroke="#1a4028" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function IconLock() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="12" width="18" height="13" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M9 12V9a5 5 0 0110 0v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="14" cy="18" r="1.5" fill="white" />
        <path d="M14 18v3" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function IconPreserve() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16C4 8 9 3 16 5C11 8 8 13 10 18" stroke="#74c99a" strokeWidth="1.4" fill="none" />
        <path d="M4 16C4 13 8 10 11 10" stroke="#74c99a" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function IconEmpower() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="8" cy="6" r="2.5" stroke="#74c99a" strokeWidth="1.3" fill="none" />
        <path d="M3 17c0-2.8 2.2-5 5-5" stroke="#74c99a" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <circle cx="14" cy="6" r="2.5" stroke="#74c99a" strokeWidth="1.3" fill="none" />
        <path d="M12 12c2.8 0 5 2.2 5 5" stroke="#74c99a" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function IconGlobe() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#74c99a" strokeWidth="1.3" fill="none" />
        <ellipse cx="10" cy="10" rx="3.5" ry="7" stroke="#74c99a" strokeWidth="1.3" fill="none" />
        <path d="M3 10h14M5 6.5h10M5 13.5h10" stroke="#74c99a" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────

function FeaturesHero() {
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

// ─── Core Features ────────────────────────────────────────────────────────

function CoreFeatures() {
  const cards = [
    {
      icon: <IconLeafCircle bg="#e8f5e9" />,
      title: "Explore Herbal Library",
      desc: "Discover detailed information on medicinal plants, including uses, benefits, parts used, classical references and modern research.",
      cardBg: "#f6faf7",
      img: HERB_CARD_IMG,
      imgAlt: "Herbs",
    },
    {
      icon: <IconDoc bg="#fff8ec" />,
      title: "Classical Formulations",
      desc: "Access verified Ayurvedic formulations from authentic sources like Charaka Samhita, Sushruta Samhita and more.",
      cardBg: "#fffbf5",
      img: BOOKS_IMG,
      imgAlt: "Ancient texts",
      imgLabel: ["CHARAKA", "SUSHRUTA", "ASHTANGA"],
    },
    {
      icon: <IconSearch bg="#eff6ff" />,
      title: "Smart Search & Insights",
      desc: "Use natural language search to find herbs, formulations, or traditional references easily. Get AI-powered insights and related information.",
      cardBg: "#f0f6ff",
      img: HERB_CARD_IMG,
      imgAlt: "Search",
    },
    {
      icon: <IconPeople bg="#f5f0ff" />,
      title: "Personalized Guidance",
      desc: "Get tailored recommendations based on your interests — whether you are a learner, practitioner, researcher or policymaker.",
      cardBg: "#faf7ff",
      img: null,
      iconLarge: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.25">
          <circle cx="22" cy="20" r="9" stroke="#7c3aed" strokeWidth="2" fill="none" />
          <path d="M6 52c0-8.8 7.2-16 16-16" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="42" cy="20" r="9" stroke="#7c3aed" strokeWidth="2" fill="none" />
          <path d="M38 36c8.8 0 16 7.2 16 16" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    {
      icon: <IconShieldCheck bg="#f0fdf4" />,
      title: "Verified & Trusted Content",
      desc: "All information is curated from authentic classical texts and reviewed by experts to ensure accuracy and reliability.",
      cardBg: "#f0fdf6",
      img: null,
      iconLarge: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.25">
          <path d="M30 4L8 14v18c0 13 9 22.8 22 26 13-3.2 22-13 22-26V14L30 4z" stroke="#16a34a" strokeWidth="2" fill="none" />
          <path d="M22 30l6 6 12-12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      icon: <IconChart bg="#fff7ed" />,
      title: "Research & Impact Tools",
      desc: "Track research trends, discover opportunities, and contribute to a growing knowledge base for a healthier future.",
      cardBg: "#fff8f3",
      img: null,
      iconLarge: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.25">
          <rect x="6" y="30" width="12" height="24" rx="2" fill="#ea580c" />
          <rect x="24" y="18" width="12" height="36" rx="2" fill="#ea580c" />
          <rect x="42" y="6" width="12" height="48" rx="2" fill="#ea580c" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-2 gap-12 items-start mb-14">
          <div>
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>
              OUR CORE FEATURES
            </p>
            <h2 className="text-5xl font-black mb-5 leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              Everything You Need,<br />In One Place
            </h2>
            <p className="text-base leading-relaxed max-w-md" style={{ color: "#4b5563" }}>
              From exploring herbs to accessing verified formulations and research, Ayur-Ip brings together the best of traditional wisdom and modern technology.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-start gap-3 pl-8 border-l-2" style={{ borderColor: "#d1d5db" }}>
              <p
                className="text-xl italic leading-snug"
                style={{ fontFamily: "'Dancing Script', cursive", color: "#374151", fontSize: 22 }}
              >
                "Bridging centuries of knowledge<br />with the tools of tomorrow."
              </p>
            </div>
            {/* Decorative leaf */}
            <div className="flex justify-end mt-4">
              <svg width="100" height="130" viewBox="0 0 100 130" fill="none" opacity="0.18">
                <path d="M50 130 C50 60 10 30 15 5 C30 40 70 55 65 105" stroke="#2d6a4f" strokeWidth="2.5" fill="#2d6a4f" fillOpacity="0.4" />
                <path d="M50 130 C50 90 80 70 75 40" stroke="#2d6a4f" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3×2 grid of feature cards */}
        <div className="grid grid-cols-3 gap-5">
          {cards.map(({ icon, title, desc, cardBg, img, imgAlt, imgLabel, iconLarge }) => (
            <div
              key={title}
              className="rounded-3xl p-7 flex flex-col justify-between overflow-hidden relative"
              style={{ background: cardBg, minHeight: 280 }}
            >
              <div>
                {icon}
                <h3 className="text-lg font-bold mt-5 mb-2" style={{ color: "#0d2717" }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>{desc}</p>
              </div>
              <div className="flex items-end justify-between">
                <button
                  className="flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "#0d2717" }}
                >
                  Learn More <ArrowRight size={14} />
                </button>
                {/* Visual element */}
                {img && !imgLabel && (
                  <div className="w-24 h-20 rounded-xl overflow-hidden">
                    <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
                  </div>
                )}
                {img && imgLabel && (
                  <div className="relative w-28 h-20 rounded-xl overflow-hidden">
                    <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-end p-1 gap-0.5">
                      {imgLabel.map((l) => (
                        <div
                          key={l}
                          className="text-center text-xs font-bold rounded px-1"
                          style={{ background: "rgba(255,255,255,0.85)", color: "#0d2717", fontSize: 8 }}
                        >
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {!img && iconLarge && (
                  <div className="opacity-100">{iconLarge}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: "1.",
      icon: <IconSearchStep />,
      title: "Search",
      desc: "Find herbs, formulations or topics using simple keywords or questions.",
    },
    {
      num: "2.",
      icon: <IconDocStep />,
      title: "Explore",
      desc: "View detailed, verified information with classical and modern references.",
    },
    {
      num: "3.",
      icon: <IconPersonStep />,
      title: "Personalize",
      desc: "Get insights tailored to your needs and save your findings.",
    },
    {
      num: "4.",
      icon: <IconSparkleStep />,
      title: "Make an Impact",
      desc: "Use the knowledge for learning, research, practice or policy-making.",
    },
  ];

  return (
    <section className="py-20" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <div>
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>
              HOW IT WORKS
            </p>
            <h2 className="text-5xl font-black leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              Simple Steps.<br />Big Impact.
            </h2>
          </div>
          <div className="max-w-xs pt-6 text-right">
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              Get from curiosity to credible knowledge in just a few steps.
            </p>
          </div>
        </div>

        {/* Steps row */}
        <div className="grid grid-cols-4 gap-6">
          {steps.map(({ num, icon, title, desc }, i) => (
            <div key={num} className="flex items-start gap-3">
              <div className="flex flex-col items-center flex-shrink-0">
                {icon}
                {i < steps.length - 1 && (
                  <div className="flex-1 flex items-center" />
                )}
              </div>
              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="self-center mt-1 flex-shrink-0" style={{ color: "#9ca3af" }}>
                  {/* rendered after icon via absolute positioning trick */}
                </div>
              )}
              <div className="flex-1">
                <p className="text-xs font-semibold mb-0.5" style={{ color: "#9ca3af" }}>{num}</p>
                <h4 className="text-base font-bold mb-2" style={{ color: "#0d2717" }}>{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Steps row v2: connected with arrows */}
      </div>
    </section>
  );
}

// Corrected How It Works with proper arrow connectors
function HowItWorksV2() {
  const steps = [
    {
      icon: <IconSearchStep />,
      num: "1.",
      title: "Search",
      desc: "Find herbs, formulations or topics using simple keywords or questions.",
    },
    {
      icon: <IconDocStep />,
      num: "2.",
      title: "Explore",
      desc: "View detailed, verified information with classical and modern references.",
    },
    {
      icon: <IconPersonStep />,
      num: "3.",
      title: "Personalize",
      desc: "Get insights tailored to your needs and save your findings.",
    },
    {
      icon: <IconSparkleStep />,
      num: "4.",
      title: "Make an Impact",
      desc: "Use the knowledge for learning, research, practice or policy-making.",
    },
  ];

  return (
    <section className="py-20" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <div>
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>
              HOW IT WORKS
            </p>
            <h2 className="text-5xl font-black leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              Simple Steps.<br />Big Impact.
            </h2>
          </div>
          <div className="max-w-xs pt-8 text-right">
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              Get from curiosity to credible knowledge in just a few steps.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex items-start gap-2">
          {steps.map(({ icon, num, title, desc }, i) => (
            <div key={num} className="flex items-start flex-1 gap-2">
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {icon}
                  {i < steps.length - 1 && (
                    <div className="flex-1 flex items-center gap-1">
                      <div className="flex-1 border-t border-dashed" style={{ borderColor: "#b7e4c7" }} />
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 6h6M7 3l3 3-3 3" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-xs font-semibold mb-1" style={{ color: "#9ca3af" }}>{num}</p>
                <h4 className="text-base font-bold mb-2" style={{ color: "#0d2717" }}>{title}</h4>
                <p className="text-sm leading-relaxed pr-4" style={{ color: "#6b7280" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Security Banner ──────────────────────────────────────────────────────

function SecurityBanner() {
  return (
    <section className="py-6" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden grid grid-cols-2 items-center"
          style={{ minHeight: 280 }}
        >
          {/* Left */}
          <div
            className="relative z-10 p-12"
            style={{ background: "#f0f7f2" }}
          >
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>
              BUILT ON TRUST
            </p>
            <div className="flex items-start gap-4 mb-4">
              <IconLock />
              <h3 className="text-3xl font-black" style={{ color: "#0d2717", fontWeight: 900 }}>
                Your Knowledge.<br />Secure.
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: "#4b5563" }}>
              We ensure the authenticity, privacy and responsible use of traditional knowledge with robust security and ethical standards.
            </p>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-colors hover:bg-white"
              style={{ borderColor: "#0d2717", color: "#0d2717" }}
            >
              Learn About Our Security <ArrowRight size={14} />
            </button>
          </div>

          {/* Right: image */}
          <div className="relative h-full" style={{ minHeight: 280 }}>
            <img
              src={LOCK_IMG}
              alt="Security padlock"
              className="w-full h-full object-cover"
              style={{ minHeight: 280 }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(13,39,23,0.35)" }} />
            {/* Script overlay */}
            <div className="absolute top-8 right-8 text-right">
              <p
                style={{ fontFamily: "'Dancing Script', cursive", color: "white", fontSize: 22 }}
                className="leading-snug drop-shadow"
              >
                Protecting<br />our roots for<br />future generations.
              </p>
              <div className="mt-2 h-0.5 w-12 ml-auto rounded-full bg-white opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────

function CTASection() {
  const pillars = [
    { icon: <IconPreserve />, label: "Preserve\nOur Roots" },
    { icon: <IconEmpower />, label: "Empower\nPeople" },
    { icon: <IconGlobe />, label: "Create\nA Healthier Tomorrow" },
  ];

  return (
    <section className="py-6 pb-16" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden p-12"
          style={{ background: "#0d2717", minHeight: 240 }}
        >
          {/* Decorative leaf */}
          <div className="absolute left-0 bottom-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <path d="M100 200 C100 100 20 60 30 10 C60 80 140 100 130 180" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: "#74c99a" }}>
                READY TO EXPLORE?
              </p>
              <h3 className="text-4xl font-black text-white mb-4" style={{ fontWeight: 900 }}>
                Be a Part of the Movement
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#a7f3d0" }}>
                Join thousands of learners, practitioners, researchers and changemakers in preserving India's Ayurvedic heritage.
              </p>
              <div className="flex items-center gap-4">
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
            <div className="flex flex-col items-end gap-6">
              {/* Pillar icons */}
              <div className="flex items-start gap-8">
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
                className="text-right leading-snug"
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

// ─── Footer (reused) ──────────────────────────────────────────────────────

function FooterSimple() {
  return (
    <div
      className="py-6 text-center text-xs border-t"
      style={{ borderColor: "#e5e7eb", color: "#9ca3af" }}
    >
      © 2025 Ayur IP — IP-SAKTI. All rights reserved. | Ministry of AYUSH, Government of India.
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <div>
      <FeaturesHero />
      <CoreFeatures />
      <HowItWorksV2 />
      <SecurityBanner />
      <CTASection />
      <FooterSimple />
    </div>
  );
}

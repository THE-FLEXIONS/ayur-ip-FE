import { useState } from "react";
import FeaturesPage from "./FeaturesPage";
import HerbalLibraryPage from "./HerbalLibraryPage";
import UseCasesPage from "./UseCasesPage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";

const HERB_IMG =
  "https://images.unsplash.com/photo-1492552181161-62217fc3076d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const HERB_IMG2 =
  "https://images.unsplash.com/photo-1492552296703-4ec0a2fb3715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80";
const MOUNTAIN_IMG =
  "https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";

// ─── Icons ─────────────────────────────────────────────────────────────────

function LeafLogo() {
  return (
    <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
      <ellipse cx="20" cy="18" rx="18" ry="16" fill="#d8f3dc" />
      <path d="M12 28 C12 16 20 8 28 10 C22 14 18 22 20 30" stroke="#1a4028" strokeWidth="2" fill="#40916c" fillOpacity="0.5" />
      <path d="M20 10 C20 10 14 18 16 28" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M10 20 C10 20 6 12 14 8 C14 16 10 22 18 28" stroke="#2d6a4f" strokeWidth="1.5" fill="#40916c" fillOpacity="0.4" />
      <path d="M22 8 C22 8 30 12 28 22 C22 20 20 14 22 8" stroke="#1a4028" strokeWidth="1.5" fill="#40916c" fillOpacity="0.6" />
    </svg>
  );
}

function IconPriorArt() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="2" width="16" height="20" rx="2" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M7 8h8M7 12h8M7 16h5" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="21" cy="21" r="5" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M25 25l2 2" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3L4 7v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L14 3z" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M10 14l3 3 5-5" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 4h10l10 10-10 10L4 14V4z" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <circle cx="9" cy="9" r="1.5" fill="#1a4028" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M8 22 C8 12 14 4 24 6 C18 10 14 18 16 24" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M8 22 C8 18 12 14 16 14" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="#6b7280" strokeWidth="1.5" />
      <path d="M13 13l3 3" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2l1.5 4.5L15 8l-4.5 1.5L9 14l-1.5-4.5L3 8l4.5-1.5L9 2z" stroke="#1a4028" strokeWidth="1.5" fill="#d8f3dc" strokeLinejoin="round" />
    </svg>
  );
}

function IconClip() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M10.5 4.5l-6 6a3 3 0 004.2 4.3l7-7a5 5 0 00-7-7L2 7.5A7 7 0 0012 17.5" stroke="#6b7280" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrowRight({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="12" cy="10" r="4" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M4 26c0-5 4-8 8-8" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="10" r="4" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M20 18c4 0 8 3 8 8" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="4" width="18" height="24" rx="2" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M5 8h18M5 12h18M5 16h12" stroke="#1a4028" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10 28c0-6 12-6 12 0" stroke="#1a4028" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <ellipse cx="16" cy="16" rx="5" ry="11" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M5 16h22M8 10h16M8 22h16" stroke="#1a4028" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconShieldSm() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L6 8v9c0 6 5 11 10 13 5-2 10-7 10-13V8L16 4z" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M12 16l3 3 5-5" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="14" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <circle cx="22" cy="22" r="6" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M22 8v4M22 32v4M8 22h4M32 22h4" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 14l2.8 2.8M27.2 27.2L30 30M14 30l2.8-2.8M27.2 16.8L30 14" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconExplore() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M10 10h10l2 4-8 8-4-12z" stroke="#1a4028" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M14 30l8-8M28 14l6-4-4 6" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="30" cy="30" r="8" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M30 27v6M27 30h6" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconAction() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M14 6L8 22h12l-4 16 20-22H22l6-10H14z" stroke="#1a4028" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function IconQuestionCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M10 9.5a2 2 0 114 0c0 1-1 1.5-2 2.5v1" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.75" fill="#1a4028" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path d="M3 8l9 6 9-6" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6.5 3h4l2 5-2.5 1.5a11 11 0 005 5L16.5 12l5 2v4c0 1.1-.9 2-2 2C8.6 20 4 11.4 4 5.5A2 2 0 016.5 3z" stroke="#1a4028" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16v12H8l-4 4V4z" stroke="#1a4028" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M8 9h8M8 12h5" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPrivacy() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2L3 4v5c0 3 2.5 5.5 5 6.5C10.5 14.5 13 12 13 9V4L8 2z" stroke="#40916c" strokeWidth="1.2" fill="none" />
      <path d="M6 8l2 2 3-3" stroke="#40916c" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────

function Navbar({ activePage, onNav }: { activePage: string; onNav: (p: string) => void }) {
  const [active, setActive] = useState(activePage);
  const links = ["Home", "Features", "Use Cases", "Herbal Library", "About"];

  function handleNav(link: string) {
    setActive(link);
    onNav(link);
  }

  return (
    <nav
      style={{ fontFamily: "Inter, sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mr-4">
          <LeafLogo />
          <div>
            <div className="text-lg font-800 leading-none" style={{ color: "#0d2717", fontWeight: 800 }}>
              Ayur IP
            </div>
            <div className="text-xs" style={{ color: "#40916c" }}>Fast & Secure Ai for Ayurveda</div>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6 flex-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-sm font-medium transition-colors relative pb-0.5"
              style={{
                color: active === link ? "#0d2717" : "#6b7280",
                fontWeight: active === link ? 600 : 400,
              }}
            >
              {link}
              {active === link && (
                <span
                  className="absolute -bottom-4 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "#0d2717" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-2 gap-2 w-44">
          <IconSearch />
          <input
            placeholder="Search"
            className="bg-transparent text-sm outline-none text-gray-600 w-full placeholder-gray-400"
          />
        </div>

        {/* Sign In */}
        <button
          onClick={() => handleNav("Login")}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "#0d2717" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="5" r="3" stroke="white" strokeWidth="1.3" fill="none" />
            <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          </svg>
          Sign In
        </button>
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function HeroSection() {
  const suggestions = [
    "Check patent status for turmeric",
    "Classify this herbal formulation",
    "Find prior art for Ashwagandha",
    "Explain IPR for Ayurveda",
  ];

  const floatCards = ["Patents", "Prior Art", "Classification", "Guidance", "Ayurveda Knowledge"];

  return (
    <section
      className="relative min-h-screen pt-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f8faf7 0%, #ffffff 50%, #f0f7f2 100%)" }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-24 right-32 w-96 h-96 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #d8f3dc 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #b7e4c7 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 border"
              style={{ background: "#f0f7f2", borderColor: "#c3e6cc", color: "#1a4028" }}
            >
              <span className="text-lg leading-none" style={{ color: "#40916c" }}>✦</span>
              <span>AI-POWERED</span>
              <span className="text-gray-300">|</span>
              <span>TRUSTED</span>
              <span className="text-gray-300">|</span>
              <span>FOR A HEALTHIER TOMORROW</span>
            </div>

            {/* Headline */}
            <h1 className="text-6xl font-black leading-[1.05] mb-4" style={{ color: "#0d2717", fontWeight: 900 }}>
              Your AI Assistant<br />
              for{" "}
              <span style={{ color: "#2d6a4f" }}>Ayurveda</span>
              <br />
              Innovation
            </h1>

            <p className="text-2xl font-semibold mb-4" style={{ color: "#0d2717" }}>
              Protect. Preserve. Advance.
            </p>

            <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: "#4b5563" }}>
              Get instant insights on patents, prior art, classification and more for Ayurveda and traditional knowledge.
            </p>

            {/* Search box */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-700">
                  <IconSparkle />
                </div>
                <input
                  placeholder="Ask anything about Ayurveda IP..."
                  className="flex-1 text-base outline-none placeholder-gray-400 text-gray-700"
                />
                <button className="text-gray-400 hover:text-gray-600">
                  <IconClip />
                </button>
                <div
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full border text-sm font-medium"
                  style={{ borderColor: "#d1d5db", color: "#374151" }}
                >
                  Web
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5l3 3 3-3" stroke="#374151" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{ background: "#0d2717" }}
                >
                  <IconArrowRight size={18} />
                </button>
              </div>

              {/* Suggestion chips */}
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-colors hover:bg-gray-50"
                    style={{ borderColor: "#e5e7eb", color: "#374151" }}
                  >
                    {s} <IconArrow />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative">
            {/* Herb image */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ height: 420, background: "linear-gradient(180deg, #e8f5e9 0%, #c8e6c9 100%)" }}
            >
              <img
                src={HERB_IMG}
                alt="Ayurvedic herbs with mortar and pestle"
                className="w-full h-full object-cover"
              />

              {/* Floating card: Traditional Knowledge */}
              <div
                className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg"
                style={{ minWidth: 160 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "#f0f7f2" }}
                  >
                    <IconShield />
                  </div>
                </div>
                <p className="text-sm font-semibold leading-tight" style={{ color: "#0d2717" }}>
                  Traditional<br />Knowledge<br />Stronger Futures
                </p>
                <div className="mt-2 h-0.5 w-8 rounded-full" style={{ background: "#2d6a4f" }} />
              </div>
            </div>

            {/* Floating category card */}
            <div
              className="absolute top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
              style={{ minWidth: 200 }}
            >
              {floatCards.map((card, i) => (
                <div
                  key={card}
                  className={`flex items-center gap-3 py-2.5 ${i < floatCards.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "#f0f7f2" }}
                  >
                    {i === 0 ? <IconPriorArt /> : i === 1 ? <IconPriorArt /> : i === 2 ? <IconTag /> : i === 3 ? <IconShield /> : <IconLeaf />}
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#0d2717" }}>{card}</span>
                </div>
              ))}
            </div>

            {/* Ancient Wisdom text */}
            <div className="absolute -right-2 bottom-16 text-right">
              <p
                className="text-base italic leading-tight"
                style={{ fontFamily: "'Dancing Script', cursive", color: "#2d6a4f", fontSize: 18 }}
              >
                Ancient Wisdom<br />Modern Intelligence
              </p>
              <div className="mt-1 h-0.5 w-16 ml-auto rounded-full" style={{ background: "#2d6a4f" }} />
            </div>
          </div>
        </div>

        {/* Bottom feature strip */}
        <div
          className="mt-10 rounded-2xl border py-5 px-8 grid grid-cols-4 gap-6"
          style={{ borderColor: "#e5e7eb", background: "white" }}
        >
          {[
            { icon: <IconPriorArt />, title: "Prior Art Search", sub: "Find relevant existing knowledge" },
            { icon: <IconShield />, title: "Patent Guidance", sub: "Understand and protect your ideas" },
            { icon: <IconTag />, title: "Classification & IPR", sub: "Get accurate classification support" },
            { icon: <IconLeaf />, title: "Ayurveda Knowledge", sub: "Explore validated traditional wisdom" },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#f0f7f2" }}
              >
                {icon}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>{title}</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by bar */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
          <p className="text-sm" style={{ color: "#9ca3af" }}>
            Trusted by Innovators, Researchers and Institutions
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "#f0f7f2" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="4" r="2.5" stroke="#1a4028" strokeWidth="1.2" fill="none" />
                  <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" stroke="#1a4028" strokeWidth="1.2" fill="none" />
                  <path d="M11 2l3 8H8l3-8z" stroke="#1a4028" strokeWidth="0.8" fill="none" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "#0d2717" }}>Ministry of AYUSH</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>Government of India</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: "#1a3473" }}
              >
                <span className="text-white text-xs font-bold">IP</span>
              </div>
              <div>
                <p className="text-xs font-bold tracking-wide" style={{ color: "#1a3473" }}>INTELLECTUAL</p>
                <p className="text-xs font-bold tracking-wide" style={{ color: "#1a3473" }}>PROPERTY INDIA</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "#f0f7f2" }}
              >
                <IconLeaf />
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "#0d2717" }}>for a Healthier,</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>More Innovative India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ──────────────────────────────────────────────────────

function FeaturesSection() {
  const cards = [
    {
      icon: <IconPriorArt />,
      title: "Prior Art Search",
      desc: "Find existing knowledge, research and patents related to your idea across global and traditional sources.",
    },
    {
      icon: <IconShield />,
      title: "Patent Guidance",
      desc: "Get step-by-step guidance on patentability, filing process and IPR strategies for Ayurveda innovations.",
    },
    {
      icon: <IconTag />,
      title: "Classification & IPR",
      desc: "Automatically classify your invention using IPC/CPC codes with AI-powered accuracy.",
    },
    {
      icon: <IconLeaf />,
      title: "Ayurveda Knowledge",
      desc: "Access curated knowledge on herbs, formulations, classical texts and traditional practices.",
    },
  ];

  const stats = [
    { icon: <IconUsers />, value: "10K+", label: "Research Papers Indexed" },
    { icon: <IconBook />, value: "500+", label: "Classical Texts Referenced" },
    { icon: <IconGlobe />, value: "Global", label: "Patent & Non-Patent Sources" },
    { icon: <IconShieldSm />, value: "Trusted", label: "by Innovators & Institutions" },
  ];

  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: heading + image */}
        <div className="grid grid-cols-2 gap-12 items-start mb-14">
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 border"
              style={{ background: "#f0f7f2", borderColor: "#c3e6cc", color: "#2d6a4f" }}
            >
              EXPLORE POSSIBILITIES
            </div>
            <h2 className="text-5xl font-black mb-5" style={{ color: "#0d2717", fontWeight: 900 }}>
              What can IP-SAKTI<br />do for you?
            </h2>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: "#4b5563" }}>
              From traditional wisdom to modern protection, get AI-powered support at every step of your innovation journey.
            </p>
          </div>

          {/* Right: image with floating badge */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ height: 260, background: "#e8f5e9" }}
            >
              <img
                src={HERB_IMG2}
                alt="Ayurveda mortar and pestle"
                className="w-full h-full object-cover"
              />
              {/* Script overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  style={{ fontFamily: "'Dancing Script', cursive", color: "#0d2717", fontSize: 28 }}
                  className="font-semibold text-center leading-tight drop-shadow-sm"
                >
                  Traditional<br />Knowledge.<br />Stronger Futures.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-4 -right-4 bg-white rounded-2xl shadow-xl p-5 flex flex-col items-center gap-2"
              style={{ minWidth: 130 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#f0f7f2" }}
              >
                <IconLeaf />
              </div>
              <p className="text-sm font-semibold text-center" style={{ color: "#0d2717" }}>
                Tradition<br />Meets<br />Technology
              </p>
              <div className="h-0.5 w-8 rounded-full" style={{ background: "#2d6a4f" }} />
            </div>
          </div>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-4 gap-5 mb-12">
          {cards.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl p-6 border hover:shadow-md transition-shadow"
              style={{ borderColor: "#e5e7eb", background: "#ffffff" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#f0f7f2" }}
              >
                {icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: "#0d2717" }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>{desc}</p>
              <button
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#0d2717" }}
              >
                Learn more <IconArrow />
              </button>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl border py-6 px-8 grid grid-cols-4 divide-x mb-14"
          style={{ borderColor: "#e5e7eb" }}
        >
          {stats.map(({ icon, value, label }) => (
            <div key={value} className="flex items-center gap-3 px-6 first:pl-0 last:pr-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#f0f7f2" }}
              >
                {icon}
              </div>
              <div>
                <p className="text-xl font-black" style={{ color: "#0d2717", fontWeight: 900 }}>{value}</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission banner */}
        <div
          className="relative rounded-3xl overflow-hidden p-10 grid grid-cols-2 gap-8 items-center"
          style={{ minHeight: 220 }}
        >
          <img
            src={MOUNTAIN_IMG}
            alt="Indian mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,39,23,0.65)" }} />

          <div className="relative z-10">
            <p
              className="text-xs font-semibold tracking-widest mb-3"
              style={{ color: "#74c99a" }}
            >
              OUR MISSION
            </p>
            <h3 className="text-3xl font-black text-white mb-3" style={{ fontWeight: 900 }}>
              Preserving India's Traditional Wisdom
            </h3>
            <p className="text-sm text-green-100 leading-relaxed max-w-md">
              Empowering researchers, practitioners and innovators with AI to protect, preserve and advance Ayurveda for future generations.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-end gap-4">
            <p
              className="text-xl italic text-right"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#a7f3d0" }}
            >
              Ancient Knowledge<br />Brighter Tomorrows
            </p>
            <button
              className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
            >
              <div
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center"
              >
                <IconArrowRight size={16} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Learn More</p>
                <p className="text-xs opacity-70">About Our Vision</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: <IconPriorArt />,
      title: "Ask or Upload",
      desc: "Enter your question, idea or document (formulation, herb, research, etc.).",
    },
    {
      num: "02",
      icon: <IconAI />,
      title: "Get AI-Powered Insights",
      desc: "Our AI analyzes trusted sources, patents, prior art and classical texts to find relevant information.",
    },
    {
      num: "03",
      icon: <IconExplore />,
      title: "Explore Guidance",
      desc: "Receive clear insights on classification (IPC/CPC), patentability and next steps.",
    },
    {
      num: "04",
      icon: <IconAction />,
      title: "Take Action",
      desc: "Save your results, explore detailed resources or consult experts for further support.",
    },
  ];

  const stats2 = [
    { value: "10K+", label: "Research Papers\nIndexed" },
    { value: "500+", label: "Ayurveda Texts\nReferenced" },
    { value: "50+", label: "Use Cases\nAcross Domains" },
    { value: "99%", label: "Trusted\nSources" },
  ];

  return (
    <section className="py-20" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header + image */}
        <div className="grid grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p
              className="text-xs font-semibold tracking-widest mb-4"
              style={{ color: "#2d6a4f" }}
            >
              HOW IT WORKS
            </p>
            <h2 className="text-5xl font-black mb-5" style={{ color: "#0d2717", fontWeight: 900 }}>
              From your idea<br />to meaningful protection
            </h2>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: "#4b5563" }}>
              IP-SAKTI simplifies the complex world of Ayurveda IP with AI, trusted knowledge and expert guidance — in just a few steps.
            </p>
          </div>

          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ height: 280 }}
            >
              <img
                src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                alt="Ayurveda books and mortar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating script */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p
                style={{ fontFamily: "'Dancing Script', cursive", color: "#fff", fontSize: 24, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                className="text-center leading-snug"
              >
                Guiding<br />Traditional Wisdom<br />to a Safer Future
              </p>
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-4 -right-4 bg-white rounded-2xl shadow-xl p-5 flex flex-col items-center gap-2"
              style={{ minWidth: 140 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#f0f7f2" }}
              >
                <IconLeaf />
              </div>
              <p className="text-sm font-semibold text-center" style={{ color: "#0d2717" }}>
                Same<br />Wisdom.<br />Stronger<br />Protection.
              </p>
              <div className="h-0.5 w-8 rounded-full" style={{ background: "#2d6a4f" }} />
            </div>
          </div>
        </div>

        {/* Step process */}
        <div className="grid grid-cols-4 gap-4 mb-16">
          {steps.map(({ num, icon, title, desc }, i) => (
            <div key={num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-5 left-1/2 w-full h-px"
                  style={{ borderTop: "2px dashed #c3e6cc" }}
                />
              )}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center relative z-10"
                    style={{ background: "#f0f7f2", border: "2px solid #d8f3dc" }}
                  >
                    {icon}
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "#9ca3af" }}>{num}</span>
                </div>
                <h4 className="text-base font-bold mb-2" style={{ color: "#0d2717" }}>{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats + testimonial banner */}
        <div
          className="relative rounded-3xl overflow-hidden p-10 grid grid-cols-2 gap-12 items-center"
          style={{ background: "#f0f7f2" }}
        >
          {/* Decorative leaf */}
          <div className="absolute left-4 bottom-0 opacity-20">
            <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
              <path d="M60 180 C60 80 10 40 20 10 C40 60 80 80 80 140" stroke="#2d6a4f" strokeWidth="3" fill="#2d6a4f" fillOpacity="0.3" />
            </svg>
          </div>

          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>
              MAKING A REAL DIFFERENCE
            </p>
            <h3 className="text-3xl font-black mb-8" style={{ color: "#0d2717", fontWeight: 900 }}>
              Empowering a More<br />Innovative India
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {stats2.map(({ value, label }) => (
                <div
                  key={value}
                  className="flex flex-col border-r border-b last:border-b-0 pr-4 pb-4"
                  style={{ borderColor: "#c3e6cc" }}
                >
                  <span className="text-3xl font-black" style={{ color: "#0d2717", fontWeight: 900 }}>
                    {value}
                  </span>
                  <span className="text-xs" style={{ color: "#6b7280", whiteSpace: "pre-line" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div
            className="relative z-10 bg-white rounded-2xl p-8 shadow-sm"
          >
            <div className="text-4xl mb-4" style={{ color: "#2d6a4f", fontWeight: 900, lineHeight: 1 }}>"</div>
            <p
              className="text-base italic leading-relaxed mb-6"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#0d2717", fontSize: 18 }}
            >
              "IP-SAKTI bridges the timeless wisdom of Ayurveda with the power of modern AI, creating new opportunities for a healthier, more innovative India."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "#0d2717" }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>Ministry of AYUSH</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>Government of India</p>
              </div>
            </div>

            {/* Carousel dots */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: i === 0 ? 20 : 8,
                      height: 8,
                      background: i === 0 ? "#0d2717" : "#d1d5db",
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  className="w-9 h-9 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "#d1d5db" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 3L5 7l4 4" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                  style={{ background: "#0d2717" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer() {
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
  const govLinks = ["india.gov.in", "ayush.gov.in", "ipindia.gov.in", "mygov.in"];

  return (
    <footer style={{ background: "#f8faf7" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <LeafLogo />
              <div>
                <div className="text-lg font-black" style={{ color: "#0d2717", fontWeight: 800 }}>IP-SAKTI</div>
                <div className="text-xs" style={{ color: "#40916c" }}>Fast & Secure Ai for Ayurveda</div>
              </div>
            </div>
            <p
              className="text-base italic mb-3"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#0d2717", fontSize: 16 }}
            >
              Preserving Traditional Wisdom.<br />Powering a Healthier Tomorrow.
            </p>
            <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: "#2d6a4f" }} />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
              An AI-powered platform to discover, protect and advance Ayurveda knowledge through trusted insights, patent guidance and research support.
            </p>
            {/* Social */}
            <div className="flex gap-3 mb-6">
              {["X", "in", "▶", "◻"].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold transition-colors hover:bg-gray-100"
                  style={{ borderColor: "#d1d5db", color: "#374151" }}
                >
                  {icon}
                </button>
              ))}
            </div>
            <p
              className="text-sm italic"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#6b7280" }}
            >
              Ancient Knowledge. Brighter Tomorrows.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Product</h4>
            <ul className="space-y-3">
              {product.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Resources</h4>
            <ul className="space-y-3">
              {resources.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>About</h4>
            <ul className="space-y-3">
              {about.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Help & Support</h4>
            <ul className="space-y-4">
              {[
                { icon: <IconQuestionCircle />, label: "Help Center" },
                { icon: <IconMail />, label: "Raise a Query" },
                {
                  icon: <IconPhone />,
                  label: "1800-11-AYUSH",
                  sub: "(Toll Free, Mon–Fri 9AM–6PM)",
                },
                { icon: <IconChat />, label: "Live Support" },
              ].map(({ icon, label, sub }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0" style={{ color: "#1a4028" }}>{icon}</div>
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
        <div
          className="rounded-2xl p-8 flex items-center justify-between gap-8 mb-10"
          style={{ background: "#e8f5e9", border: "1px solid #c3e6cc" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#d8f3dc" }}
            >
              <IconLeaf />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1" style={{ color: "#0d2717" }}>Stay Updated</h4>
              <p className="text-sm" style={{ color: "#4b5563" }}>
                Get the latest updates on Ayurveda IP, policy changes and new features.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 min-w-80">
            <div className="flex w-full gap-2">
              <input
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border text-sm outline-none"
                style={{ borderColor: "#d1d5db", background: "white" }}
              />
              <button
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: "#0d2717" }}
              >
                Subscribe <IconArrowRight size={16} />
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              <IconPrivacy />
              <p className="text-xs" style={{ color: "#6b7280" }}>We respect your privacy. No spam, ever.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-8 items-center">
            {/* Ministry of AYUSH */}
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>An Initiative Under</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "#f0f0e0" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="6" r="3" stroke="#b8860b" strokeWidth="1.2" fill="#c8a020" fillOpacity="0.3" />
                    <path d="M5 20c0-4 3-7 7-7s7 3 7 7" stroke="#b8860b" strokeWidth="1.2" fill="none" />
                    <path d="M12 3l2 8H6l2-8" stroke="#b8860b" strokeWidth="0.8" fill="none" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>Ministry of AYUSH</p>
                  <p className="text-xs" style={{ color: "#9ca3af" }}>Government of India</p>
                  <p className="text-xs italic" style={{ color: "#9ca3af" }}>सत्यमेव जयते</p>
                </div>
              </div>
            </div>

            {/* Collaboration logos */}
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>In Collaboration With</p>
              <div className="flex items-center gap-4">
                <div
                  className="px-3 py-2 rounded-lg flex flex-col items-center"
                  style={{ background: "#1a3473" }}
                >
                  <span className="text-white text-xs font-bold">IP</span>
                  <span className="text-white text-xs" style={{ fontSize: 8 }}>INDIA</span>
                </div>
                <div
                  className="px-3 py-2 rounded-lg"
                  style={{ background: "#1a6fb5" }}
                >
                  <span className="text-white text-xs font-bold">Digital India</span>
                </div>
                <div
                  className="px-3 py-2 rounded-lg"
                  style={{ background: "#e8790e" }}
                >
                  <span className="text-white text-xs font-bold">myGov</span>
                </div>
                <div
                  className="px-3 py-2 rounded-lg"
                  style={{ background: "#0057a8" }}
                >
                  <span className="text-white text-xs font-bold">G20</span>
                </div>
              </div>
            </div>

            {/* Govt portals */}
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>Follow Government Portals</p>
              <div className="grid grid-cols-2 gap-1">
                {govLinks.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-xs flex items-center gap-1 hover:underline"
                    style={{ color: "#1a4028" }}
                  >
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

// ─── App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("Home");

  if (page === "Login") {
    return <LoginPage onBack={() => setPage("Home")} />;
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar activePage={page} onNav={setPage} />
      {page === "Features" ? (
        <FeaturesPage />
      ) : page === "Use Cases" ? (
        <UseCasesPage />
      ) : page === "Herbal Library" ? (
        <HerbalLibraryPage />
      ) : page === "About" ? (
        <AboutPage />
      ) : (
        <>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <Footer />
        </>
      )}
    </div>
  );
}

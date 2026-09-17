import { useState } from "react";
import type React from "react";

// ─── Images ───────────────────────────────────────────────────────────────────
const IMG_HERO_BG   = "https://images.unsplash.com/photo-1492552085122-36706c238263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80";
const IMG_KNOWLEDGE = "https://images.unsplash.com/photo-1652091705632-0755a239a186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80";
const IMG_ASHWAGANDHA = "https://images.unsplash.com/photo-1678348885331-f8d0af68da21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80";
const IMG_TURMERIC    = "https://images.unsplash.com/photo-1768729341078-9da4e0ea959e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80";
const IMG_NEEM        = "https://images.unsplash.com/photo-1669574753106-28167b097433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80";
const IMG_TULSI       = "https://images.unsplash.com/photo-1665479754958-1a8bdc47cc0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80";
const IMG_AMLA        = "https://images.unsplash.com/photo-1644061923948-f5b918b524c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80";

// ─── Tiny arrow ───────────────────────────────────────────────────────────────
function Arr({ size = 13, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── SECTION 1 · Hero ─────────────────────────────────────────────────────────
function Hero() {
  const chips = ["Ashwagandha","Turmeric","Tulsi","Immunity","Diabetes","Skin health"];

  return (
    <section className="relative pt-16 overflow-hidden" style={{ background: "#fff" }}>
      <div className="flex" style={{ minHeight: 400 }}>

        {/* ── Left content panel ── */}
        <div
          className="flex flex-col justify-center px-16 py-12 relative z-10"
          style={{ width: "52%", background: "linear-gradient(to right, #fff 85%, rgba(255,255,255,0) 100%)" }}
        >
          {/* Label */}
          <p className="text-xs font-semibold tracking-[0.2em] mb-5" style={{ color: "#2d6a4f" }}>
            HERBAL LIBRARY
          </p>

          {/* Headline */}
          <h1 className="font-black leading-[1.08] mb-4" style={{ fontSize: 52, color: "#0d2717", fontWeight: 900 }}>
            Explore India's<br />
            <span style={{ color: "#2d6a4f" }}>Living Heritage</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm leading-relaxed mb-7" style={{ color: "#4b5563", maxWidth: 420 }}>
            Discover authentic, research-backed knowledge on medicinal plants, formulations, classical texts and traditional uses.
          </p>

          {/* Search bar */}
          <div
            className="flex items-center gap-3 rounded-2xl mb-4"
            style={{
              background: "white",
              border: "1.5px solid #e5e7eb",
              padding: "14px 16px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              maxWidth: 500,
            }}
          >
            {/* Search icon */}
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" className="flex-shrink-0">
              <circle cx="7.5" cy="7.5" r="5" stroke="#9ca3af" strokeWidth="1.5"/>
              <path d="M12 12l3 3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>

            <input
              className="flex-1 text-sm outline-none bg-transparent"
              placeholder="Search herbs, formulations, conditions, or keywords..."
              style={{ color: "#374151" }}
            />

            {/* Arrow button */}
            <button
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-opacity"
              style={{ background: "#0d2717" }}
            >
              <Arr size={15} color="white" />
            </button>
          </div>

          {/* Popular searches */}
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-xs font-medium" style={{ color: "#9ca3af" }}>Popular searches:</span>
            {chips.map(c => (
              <button
                key={c}
                className="px-3 py-1 rounded-full text-xs border hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#e5e7eb", color: "#374151", background: "white" }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: full-bleed background image ── */}
        <div className="absolute inset-y-0 right-0 z-0" style={{ left: "44%" }}>
          <img src={IMG_HERO_BG} alt="Ayurvedic herbs" className="w-full h-full object-cover" />
          {/* subtle left fade so it blends */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 25%)" }} />

          {/* Script overlay */}
          <div className="absolute" style={{ top: "28%", left: "18%" }}>
            <p
              style={{ fontFamily: "'Dancing Script',cursive", color: "#fff", fontSize: 24, textShadow: "0 1px 8px rgba(0,0,0,0.55)", lineHeight: 1.3 }}
            >
              Ancient Wisdom.<br />Modern Relevance.
            </p>
            <div className="mt-2 rounded-full" style={{ height: 2, width: 36, background: "rgba(255,255,255,0.75)" }} />
          </div>

          {/* Floating stats card */}
          <div
            className="absolute bg-white rounded-2xl shadow-2xl"
            style={{ top: 24, right: 24, minWidth: 200, padding: "16px 18px" }}
          >
            {[
              {
                val: "1,200+", label: "Medicinal Plants",
                icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 13C2 6 6 1 13 3C8 6 6 10 7 14" stroke="#2d6a4f" strokeWidth="1.4" fill="none"/><path d="M2 13C2 10 6 7 9 7" stroke="#2d6a4f" strokeWidth="1.4" strokeLinecap="round" fill="none"/></svg>
              },
              {
                val: "300+", label: "Formulations",
                icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="4" y="3" width="6" height="2.5" rx="1.25" stroke="#2d6a4f" strokeWidth="1.2" fill="none"/><path d="M4 5.5L3 13h8L10 5.5" stroke="#2d6a4f" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>
              },
              {
                val: "Verified Sources", label: "Classical & Modern",
                icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L2 3.5v5C2 12 4.8 14.8 8 16c3.2-1.2 6-4 6-7.5v-5L8 1z" stroke="#2d6a4f" strokeWidth="1.2" fill="none"/><path d="M5.5 8l2 2L11 6" stroke="#2d6a4f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              },
              {
                val: "Curated by Experts", label: "For Reliable Insights",
                icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="2.5" stroke="#2d6a4f" strokeWidth="1.2" fill="none"/><path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#2d6a4f" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>
              },
            ].map(({ val, label, icon }, i) => (
              <div
                key={val}
                className="flex items-center gap-3"
                style={{ paddingTop: i === 0 ? 0 : 10, paddingBottom: i === 3 ? 0 : 10, borderBottom: i < 3 ? "1px solid #f3f4f6" : "none" }}
              >
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ width: 30, height: 30, background: "#f0f7f2" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="font-bold leading-none mb-0.5" style={{ fontSize: 13, color: "#0d2717" }}>{val}</p>
                  <p style={{ fontSize: 10, color: "#9ca3af" }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2 · Browse by Category ──────────────────────────────────────────
function BrowseByCategory() {
  const [active, setActive] = useState("All");

  const cats: { label: string; icon: React.ReactElement }[] = [
    {
      label: "All",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 19C5 10 10 4 18 6C12 10 9 15 11 20" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M5 19C5 15 9 11 12 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/></svg>,
    },
    {
      label: "Herbs",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 20C4 11 9 4 18 6C12 10 8 16 10 21" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M4 20C4 16 8 12 11 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/></svg>,
    },
    {
      label: "Formulations",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="7" y="4" width="8" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M7 8L5 20h12L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M9 14h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      label: "Classical Texts",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 8h7M8 12h7M8 16h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      label: "Therapeutic Areas",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4C8.5 4 5 7 5 11c0 5.5 7 9 7 9s7-3.5 7-9c0-4-3.5-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M9 11h5M12 8v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      label: "Parts Used",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 19C6 10 11 4 19 6C13 10 9 15 11 20" stroke="currentColor" strokeWidth="1.6" fill="none"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>,
    },
    {
      label: "Regions",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 10v0M5 20c1.5-4 10.5-4 14 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/><path d="M12 13.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
  ];

  return (
    <section style={{ background: "#fff", paddingTop: 40, paddingBottom: 16 }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="font-bold mb-1" style={{ fontSize: 20, color: "#0d2717" }}>Browse by Category</h2>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>Find knowledge by what interests you.</p>
          </div>
          <button className="flex items-center gap-1.5 font-semibold mt-0.5" style={{ fontSize: 13, color: "#0d2717" }}>
            View all categories <Arr size={13}/>
          </button>
        </div>

        {/* Tab row */}
        <div className="flex items-start gap-1">
          {cats.map(({ label, icon }) => {
            const on = label === active;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className="flex flex-col items-center gap-2 transition-all"
                style={{
                  padding: "14px 20px",
                  borderRadius: 16,
                  background: on ? "#f0f7f2" : "transparent",
                  border: on ? "1.5px solid #c3e6cc" : "1.5px solid transparent",
                  color: on ? "#1a4028" : "#6b7280",
                  minWidth: 90,
                  cursor: "pointer",
                }}
              >
                <span style={{ color: on ? "#2d6a4f" : "#9ca3af" }}>{icon}</span>
                <span style={{ fontSize: 12, fontWeight: on ? 600 : 400 }}>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3 · Featured Herbs ───────────────────────────────────────────────
function FeaturedHerbs() {
  const herbs = [
    {
      img: IMG_ASHWAGANDHA,
      name: "Ashwagandha",
      latin: "Withania somnifera",
      tags: [{ label:"Adaptogen", bg:"#f0fdf4", color:"#166534" }, { label:"Stress Relief", bg:"#fff7ed", color:"#c2410c" }],
      desc: "Helps manage stress, improves sleep quality and enhances overall vitality.",
    },
    {
      img: IMG_TURMERIC,
      name: "Turmeric",
      latin: "Curcuma longa",
      tags: [{ label:"Anti-inflammatory", bg:"#fff1f2", color:"#be123c" }, { label:"Antioxidant", bg:"#eff6ff", color:"#1d4ed8" }],
      desc: "Widely used for its powerful anti-inflammatory and antioxidant properties.",
    },
    {
      img: IMG_NEEM,
      name: "Neem",
      latin: "Azadirachta indica",
      tags: [{ label:"Antimicrobial", bg:"#f0f7f2", color:"#166534" }, { label:"Skin Health", bg:"#fdf4ff", color:"#86198f" }],
      desc: "Known for its purifying, antimicrobial and immunomodulatory effects.",
    },
    {
      img: IMG_TULSI,
      name: "Tulsi",
      latin: "Ocimum sanctum",
      tags: [{ label:"Immunity", bg:"#f0fdf4", color:"#166534" }, { label:"Respiratory", bg:"#eff6ff", color:"#1d4ed8" }],
      desc: "A sacred herb known to support immunity, respiratory health and mental well-being.",
    },
    {
      img: IMG_AMLA,
      name: "Amla",
      latin: "Phyllanthus emblica",
      tags: [{ label:"Antioxidant", bg:"#eff6ff", color:"#1d4ed8" }, { label:"Rejuvenation", bg:"#fff7ed", color:"#c2410c" }],
      desc: "Rich in Vitamin C, it supports immunity, skin health and longevity.",
    },
  ];

  return (
    <section style={{ background: "#fff", paddingTop: 32, paddingBottom: 32 }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="font-bold mb-1" style={{ fontSize: 20, color: "#0d2717" }}>Featured Herbs</h2>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>Explore some of the most researched and widely used medicinal plants in Ayurveda.</p>
          </div>
          <button className="flex items-center gap-1.5 font-semibold mt-0.5" style={{ fontSize: 13, color: "#0d2717" }}>
            View all herbs <Arr size={13}/>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-5 gap-4">
          {herbs.map(({ img, name, latin, tags, desc }) => (
            <div
              key={name}
              className="flex flex-col overflow-hidden"
              style={{ borderRadius: 16, border: "1px solid #f0f0f0", background: "#fff" }}
            >
              {/* Photo */}
              <div style={{ height: 148, overflow: "hidden", flexShrink: 0 }}>
                <img src={img} alt={name} className="w-full h-full object-cover" />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4">
                <p className="font-bold mb-0.5" style={{ fontSize: 14, color: "#0d2717" }}>{name}</p>
                <p className="italic mb-3" style={{ fontSize: 11, color: "#9ca3af" }}>{latin}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {tags.map(t => (
                    <span
                      key={t.label}
                      className="rounded-full font-medium"
                      style={{ fontSize: 10, padding: "3px 9px", background: t.bg, color: t.color }}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>

                <p className="leading-relaxed flex-1" style={{ fontSize: 12, color: "#6b7280" }}>{desc}</p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                  <button className="flex items-center gap-1 font-semibold" style={{ fontSize: 12, color: "#0d2717" }}>
                    View Details <Arr size={11}/>
                  </button>
                  <button className="hover:opacity-60 transition-opacity">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M3 2h9l.5.5v10.5L7.5 10.5 2.5 13V2.5L3 2z" stroke="#c4c4c4" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 4 · Collection + Classical Texts ─────────────────────────────────
function CollectionAndTexts() {
  const collections = [
    {
      label: "Immunity Boosters", count: "12 herbs",
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M5 21C5 11 11 4 21 7C14 11 11 18 13 23" stroke="#2d6a4f" strokeWidth="1.7" fill="none"/>
          <path d="M5 21C5 16 10 12 13 12" stroke="#2d6a4f" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
    {
      label: "Skin & Beauty", count: "8 herbs",
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M4 22C4 12 10 5 20 8C14 12 10 18 12 24" stroke="#2d6a4f" strokeWidth="1.7" fill="none"/>
          <path d="M4 22C4 17 9 13 12 13" stroke="#2d6a4f" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
          <path d="M18 4C18 4 22 8 20 14" stroke="#2d6a4f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Respiratory Health", count: "10 herbs",
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M13 5v7" stroke="#2d6a4f" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M13 12C10 12 5 14 5 18s5 5 8 3" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M13 12C16 12 21 14 21 18s-5 5-8 3" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
  ];

  const books = [
    { title: "Charaka Samhita",   desc: "Foundational text on Ayurvedic medicine",           bg: "#e8e3d8", spine: "#7a6c50" },
    { title: "Sushruta Samhita",  desc: "Surgical procedures and medicinal plants",           bg: "#dce4dc", spine: "#4a6550" },
    { title: "Ashtanga Hridaya",  desc: "Comprehensive guide to Ayurvedic practice",         bg: "#e6dcd2", spine: "#7a5e48" },
  ];

  return (
    <section style={{ background: "#fff", paddingTop: 8, paddingBottom: 32 }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-5">

          {/* ── Featured Collection ── */}
          <div style={{ borderRadius: 20, border: "1px solid #eef0ee", background: "#fafafa", padding: 24 }}>
            <div className="flex items-start justify-between mb-1">
              <p className="font-bold" style={{ fontSize: 16, color: "#0d2717" }}>Featured Collection</p>
              <button className="flex items-center gap-1 font-semibold" style={{ fontSize: 12, color: "#0d2717" }}>
                View all collections <Arr size={11}/>
              </button>
            </div>
            <p className="mb-6" style={{ fontSize: 12, color: "#9ca3af" }}>Curated knowledge for your wellness journey.</p>

            <div className="grid grid-cols-3 gap-4">
              {collections.map(({ label, count, icon }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-3 transition-all hover:shadow-md"
                  style={{ background: "white", borderRadius: 16, border: "1px solid #eef0ee", padding: "20px 12px" }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 52, height: 52, background: "#f0f7f2" }}
                  >
                    {icon}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold leading-tight mb-1" style={{ fontSize: 12, color: "#0d2717" }}>{label}</p>
                    <p style={{ fontSize: 11, color: "#9ca3af" }}>{count}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Classical Texts ── */}
          <div style={{ borderRadius: 20, border: "1px solid #eef0ee", background: "#fafafa", padding: 24 }}>
            <div className="flex items-start justify-between mb-1">
              <p className="font-bold" style={{ fontSize: 16, color: "#0d2717" }}>Explore by Classical Texts</p>
              <button className="flex items-center gap-1 font-semibold" style={{ fontSize: 12, color: "#0d2717" }}>
                View all texts <Arr size={11}/>
              </button>
            </div>
            <p className="mb-6" style={{ fontSize: 12, color: "#9ca3af" }}>Dive into timeless Ayurvedic wisdom.</p>

            <div className="grid grid-cols-3 gap-4">
              {books.map(({ title, desc, bg, spine }) => (
                <button
                  key={title}
                  className="flex flex-col items-start transition-all hover:shadow-md"
                  style={{ background: "white", borderRadius: 14, border: "1px solid #eef0ee", padding: 12 }}
                >
                  {/* Book cover */}
                  <div
                    className="w-full rounded-xl mb-3 flex items-end justify-center relative overflow-hidden"
                    style={{ height: 84, background: bg }}
                  >
                    {/* Spine crease */}
                    <div className="absolute left-3 inset-y-0 w-1 opacity-40 rounded-sm" style={{ background: spine }} />
                    {/* Decorative lines */}
                    <div className="absolute inset-x-3 top-4 flex flex-col gap-1 opacity-30">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="rounded-full" style={{ height: 1.5, background: spine }} />
                      ))}
                    </div>
                    <p
                      className="relative z-10 text-center font-bold px-2 pb-2 leading-tight"
                      style={{ fontSize: 8, color: spine, letterSpacing: "0.06em" }}
                    >
                      {title.toUpperCase()}
                    </p>
                  </div>
                  <p className="font-bold mb-0.5 text-left" style={{ fontSize: 12, color: "#0d2717" }}>{title}</p>
                  <p className="text-left" style={{ fontSize: 10, color: "#9ca3af", lineHeight: 1.4 }}>{desc}</p>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── SECTION 5 · Knowledge Banner ────────────────────────────────────────────
function KnowledgeBanner() {
  const stats = [
    {
      val: "1,200+", label: "Medicinal Plants",
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 14C2 7 7 2 14 4C9 7 7 12 8 15" stroke="#74c99a" strokeWidth="1.4" fill="none"/><path d="M2 14C2 11 6 8 9 8" stroke="#74c99a" strokeWidth="1.4" strokeLinecap="round" fill="none"/></svg>,
    },
    {
      val: "300+", label: "Formulations",
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="4" y="3" width="7" height="2.5" rx="1.25" stroke="#74c99a" strokeWidth="1.2" fill="none"/><path d="M4 5.5L3 14h9L11 5.5" stroke="#74c99a" strokeWidth="1.2" strokeLinecap="round" fill="none"/></svg>,
    },
    {
      val: "50+", label: "Classical References",
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="2" width="11" height="14" rx="2" stroke="#74c99a" strokeWidth="1.2" fill="none"/><path d="M6 6h6M6 9h6M6 12h4" stroke="#74c99a" strokeWidth="1.1" strokeLinecap="round"/></svg>,
    },
    {
      val: "100%", label: "Verified Sources",
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6" stroke="#74c99a" strokeWidth="1.2" fill="none"/><path d="M6 9l2.5 2.5L12 7" stroke="#74c99a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    },
  ];

  return (
    <section style={{ paddingTop: 0, paddingBottom: 32, background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: 300 }}>
          {/* BG image */}
          <img
            src={IMG_KNOWLEDGE}
            alt="Ayurveda knowledge"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.55) saturate(1.2)" }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ background: "rgba(10,28,18,0.62)" }} />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-2 items-center" style={{ minHeight: 300 }}>
            {/* Left */}
            <div style={{ padding: "48px 48px 48px 52px" }}>
              <h3 className="font-black text-white leading-tight mb-3" style={{ fontSize: 38, fontWeight: 900 }}>
                Knowledge from<br />
                <span style={{ color: "#74c99a" }}>Root to Research</span>
              </h3>
              <p className="mb-8" style={{ fontSize: 14, color: "#a7f3d0" }}>
                Bridging ancient wisdom with modern science.
              </p>
              {/* Stats 2×2 */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                {stats.map(({ val, label, icon }) => (
                  <div key={val} className="flex items-center gap-3">
                    <div
                      className="rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)" }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p className="font-black text-white leading-none mb-0.5" style={{ fontSize: 18, fontWeight: 900 }}>{val}</p>
                      <p style={{ fontSize: 11, color: "#74c99a" }}>{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: script quote */}
            <div className="flex items-center justify-end pr-14">
              <div className="text-right">
                <p
                  style={{ fontFamily: "'Dancing Script',cursive", color: "white", fontSize: 26, lineHeight: 1.35 }}
                >
                  "Preserve<br />Knowledge.<br />Enable a<br />Healthier<br />Tomorrow."
                </p>
                <div className="mt-3 ml-auto rounded-full" style={{ height: 2, width: 40, background: "#74c99a" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 6 · Suggest CTA Bar ─────────────────────────────────────────────
function SuggestBar() {
  return (
    <section style={{ background: "#fff", paddingBottom: 56 }}>
      <div className="max-w-7xl mx-auto px-8">
        <div
          className="flex items-center justify-between"
          style={{
            background: "#f6faf7",
            border: "1px solid #e0ede4",
            borderRadius: 18,
            padding: "20px 28px",
          }}
        >
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ width: 48, height: 48, background: "#d8f3dc" }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 18C4 9 9 3 18 5C12 9 8 14 10 19" stroke="#2d6a4f" strokeWidth="1.6" fill="none"/>
                <path d="M4 18C4 14 8 10 11 10" stroke="#2d6a4f" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <div>
              <p className="font-bold mb-0.5" style={{ fontSize: 15, color: "#0d2717" }}>Can't find what you're looking for?</p>
              <p style={{ fontSize: 13, color: "#6b7280" }}>
                Use natural language search or suggest a herb, formulation, or reference to help us expand the library.
              </p>
            </div>
          </div>

          <button
            className="flex items-center gap-2 rounded-full font-semibold text-white flex-shrink-0 ml-10 hover:opacity-90 transition-opacity"
            style={{ background: "#0d2717", fontSize: 13, padding: "12px 22px" }}
          >
            Suggest a Resource <Arr size={13} color="white"/>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer bar ───────────────────────────────────────────────────────────────
function FooterBar() {
  return (
    <div
      style={{ background: "#f8faf7", borderTop: "1px solid #e5e7eb", padding: "18px 0", textAlign: "center", fontSize: 12, color: "#9ca3af" }}
    >
      © 2025 Ayur IP — IP-SAKTI. All rights reserved. | Ministry of AYUSH, Government of India.
    </div>
  );
}

// ─── Page export ─────────────────────────────────────────────────────────────
export default function HerbalLibraryPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Hero />
      <BrowseByCategory />
      <FeaturedHerbs />
      <CollectionAndTexts />
      <KnowledgeBanner />
      <SuggestBar />
      <FooterBar />
    </div>
  );
}

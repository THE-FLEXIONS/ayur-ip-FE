import { BOOKS_IMG, HERB_CARD_IMG } from "./shared/assets";
import { ArrowRight, IconChart, IconDoc, IconLeafCircle, IconPeople, IconSearch, IconShieldCheck } from "./shared/icons";

// ─── Core Features ────────────────────────────────────────────────────────

export default function CoreFeatures() {
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

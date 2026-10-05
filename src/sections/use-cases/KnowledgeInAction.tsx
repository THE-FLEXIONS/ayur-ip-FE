import { CARD_GOV, CARD_INDIVIDUAL, CARD_PRACTITIONER, CARD_RESEARCHER } from "./shared/assets";
import { ArrowLeft, ArrowRight, IconBank, IconFlask, IconLeafSm, IconPersonSm } from "./shared/icons";

// ─── Knowledge in Action ─────────────────────────────────────────────────────

export default function KnowledgeInAction() {
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
    <section className="py-14 sm:py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f4f8f2 0%, #eef4ec 100%)" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-8 mb-8 sm:mb-12">
          <div className="max-w-lg">
            <p className="text-xs font-semibold tracking-[0.25em] mb-4" style={{ color: "#2d6a4f" }}>
              REAL STORIES, REAL IMPACT
            </p>
            <h2 className="text-[34px] sm:text-5xl font-black mb-4" style={{ color: "#0d2717", fontWeight: 900 }}>
              Knowledge <span style={{ color: "#2d6a4f" }}>in Action</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#4b5563" }}>
              See how different people and organizations are using Ayur-Ip to create meaningful change — in their own unique ways.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-8 md:flex">
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
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
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

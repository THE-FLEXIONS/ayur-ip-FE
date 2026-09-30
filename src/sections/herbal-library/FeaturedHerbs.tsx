import { IMG_AMLA, IMG_ASHWAGANDHA, IMG_NEEM, IMG_TULSI, IMG_TURMERIC } from "./shared/assets";
import { Arr } from "./shared/icons";

// ─── SECTION 3 · Featured Herbs ───────────────────────────────────────────────
export default function FeaturedHerbs() {
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

import ExplorePanel from "./ExplorePanel";
import { OLD_BOOKS, RESEARCHER_PLANT, WOMAN_NATURE } from "./shared/assets";
import { ArrowRight, ChipDot, IconBank, IconBookSm, IconLeafSm } from "./shared/icons";

// ─── Hero ─────────────────────────────────────────────────────────────────

export default function UseCasesHero() {
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

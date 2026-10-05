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
      className="relative overflow-hidden pt-8 sm:pt-10"
      style={{ background: "linear-gradient(135deg, #f7f6ef 0%, #ffffff 55%, #f0f7f2 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] sm:mb-6" style={{ color: "#2d6a4f" }}>
              USE CASES
            </p>
            <h1 className="mb-4 text-3xl font-black leading-[1.05] sm:mb-6 sm:text-5xl lg:text-6xl" style={{ color: "#0d2717", fontWeight: 900 }}>
              Different Needs.<br />
              A <span style={{ color: "#2d6a4f" }}>Healthier</span> Tomorrow.
            </h1>
            <p className="mb-6 max-w-md text-base leading-relaxed sm:mb-9 sm:text-lg" style={{ color: "#4b5563" }}>
              From individual wellness to global research, Ayur-Ip empowers diverse users to discover, protect and apply the wisdom of Ayurveda — in the real world.
            </p>

            {/* Buttons */}
            <div className="mb-8 flex flex-wrap items-center gap-3 sm:mb-12 sm:gap-4">
              <button
                className="flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-7"
                style={{ background: "#1a4028" }}
              >
                Explore Use Cases <ArrowRight color="white" size={15} />
              </button>
              <button
                className="flex items-center gap-2 rounded-full border py-2 pl-2 pr-4 text-sm font-semibold transition-colors hover:bg-gray-50 sm:gap-3 sm:pr-6"
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
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-8 lg:gap-10">
              {[
                { icon: <IconLeafSm color="#2d6a4f" />, val: "6+", label: "User Groups" },
                { icon: <IconBookSm color="#2d6a4f" />, val: "Real", label: "Applications" },
                { icon: <IconBank color="#2d6a4f" />, val: "Greater", label: "Impact" },
              ].map(({ icon, val, label }, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full sm:size-11" style={{ background: "#e8f2ea" }}>
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
            <div className="mt-8 flex items-end gap-4 sm:mt-12">
              <p
                className="text-xl leading-tight sm:text-2xl"
                style={{ fontFamily: "'Dancing Script', cursive", color: "#2d6a4f" }}
              >
                "Ancient Knowledge.<br />Modern Relevance.<br />Real People."
              </p>
              <div className="mb-2 h-px w-16" style={{ background: "#9ca3af" }} />
            </div>
          </div>

          {/* Right: image collage + timeline */}
          <div className="relative mx-auto mt-2 h-[440px] w-full max-w-[460px] sm:h-[560px] lg:mt-0 lg:min-h-[620px] lg:max-w-none">
            {/* Script top-right */}
            <div className="absolute right-0 top-0 z-20 text-right">
              <p
                className="text-2xl leading-snug"
                style={{ fontFamily: "'Dancing Script', cursive", color: "#2d6a4f" }}
              >
                People<br />Plants<br />Progress<br />Together.
              </p>
              <div className="mt-1 h-px w-12 ml-auto" style={{ background: "#9ca3af" }} />
            </div>

            {/* Image collage */}
            <div className="absolute left-1/2 top-16 flex w-full -translate-x-1/2 gap-2 sm:top-20 sm:gap-3 lg:left-0 lg:w-[400px] lg:translate-x-0">
              {/* Arched image 1 */}
              <div className="relative h-[280px] w-[48%] sm:h-[350px] lg:h-[400px]">
                <div
                  className="h-full w-full overflow-hidden rounded-t-[80px] rounded-b-xl shadow-lg sm:rounded-t-[92px]"
                >
                  <img src={WOMAN_NATURE} alt="Woman in nature" className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,0.35))" }} />
                  <p className="absolute left-4 top-14 sm:top-32 text-white italic text-lg leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    For a<br />healthier<br />you
                  </p>
                  <p className="absolute left-4 bottom-6 text-white italic text-lg leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    For<br />deeper<br />research
                  </p>
                </div>
                {/* Overlapping researcher image */}
                <div
                  className="absolute left-[52%] top-[38%] h-[58%] w-[94%] overflow-hidden rounded-t-[70px] rounded-b-xl border-[3px] border-white shadow-lg sm:rounded-t-[88px]"
                >
                  <img src={RESEARCHER_PLANT} alt="Researcher with plant" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Arched image 2 (books) */}
              <div
                className="relative mt-16 h-[250px] w-[46%] max-w-[190px] shrink-0 self-start overflow-hidden rounded-xl shadow-lg sm:mt-24 sm:h-[300px] lg:h-[340px]"
              >
                <img src={OLD_BOOKS} alt="Ancient books and herbs" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,0.4))" }} />
                <p className="absolute left-3 top-12 sm:top-24 text-white italic text-base leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  For<br />preserving<br />traditions
                </p>
                <p className="absolute left-3 bottom-5 text-white italic text-base leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  For a<br />brighter<br />tomorrow
                </p>
              </div>
            </div>

            {/* "Rooted in tradition" caption */}
            <p className="absolute bottom-2 left-0 hidden text-xs font-semibold leading-6 tracking-[0.2em] text-[#6b7280] lg:block">
              ROOTED IN<br />TRADITION.<br />BUILT FOR<br />WHAT'S NEXT.
            </p>

            {/* Timeline */}
            <div className="absolute right-0 top-24 hidden h-[620px] w-[210px] xl:block">
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

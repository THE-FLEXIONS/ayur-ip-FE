import { PLANT_IMG } from "./shared/assets";
import { IconArrowRight, IconGlobe, IconLeafCircle, IconUsers } from "./shared/icons";

// ─── 7. CTA – Let's Create a Healthier Tomorrow ─────────────────────────────

export default function JoinCTA() {
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

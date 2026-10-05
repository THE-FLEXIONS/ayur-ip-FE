import { IMG_KNOWLEDGE } from "./shared/assets";

// ─── SECTION 5 · Knowledge Banner ────────────────────────────────────────────
export default function KnowledgeBanner() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
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
          <div className="relative z-10 grid items-center lg:grid-cols-2 lg:min-h-[300px]">
            {/* Left */}
            <div className="p-6 sm:p-10 lg:py-12 lg:pr-12 lg:pl-[52px]">
              <h3 className="font-black text-white leading-tight mb-3 text-[28px] sm:text-[34px] lg:text-[38px]" style={{ fontWeight: 900 }}>
                Knowledge from<br />
                <span style={{ color: "#74c99a" }}>Root to Research</span>
              </h3>
              <p className="mb-8" style={{ fontSize: 14, color: "#a7f3d0" }}>
                Bridging ancient wisdom with modern science.
              </p>
              {/* Stats 2×2 */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-10">
                {stats.map(({ val, label, icon }) => (
                  <div key={val} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
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
            <div className="hidden items-center justify-end pr-14 lg:flex">
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

// ─── 3. Impact So Far ───────────────────────────────────────────────────────

export default function ImpactSection() {
  const stats = [
    { value: "1,200+", label: "Medicinal Plants\nDocumented" },
    { value: "300+", label: "Classical\nFormulations" },
    { value: "10,000+", label: "Active Users\n(Researchers, Practitioners, Learners)" },
    { value: "50+", label: "Partner Institutions\n& Experts" },
  ];

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden" style={{ background: "#f5f8f4" }}>
      {/* Decorative leaf left */}
      <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 opacity-30 pointer-events-none lg:block">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
          <path d="M20 190C20 100 60 20 100 10C70 70 50 130 70 180" stroke="#2d6a4f" strokeWidth="2" fill="#2d6a4f" fillOpacity="0.25" />
          <path d="M20 190C30 160 55 140 70 150" stroke="#2d6a4f" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-start justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <h2 className="text-[28px] sm:text-3xl font-black mb-1" style={{ color: "#0d2717", fontWeight: 900 }}>Our Impact So Far</h2>
            <p className="text-sm" style={{ color: "#6b7280" }}>A growing community, a stronger tomorrow.</p>
          </div>
          {/* Script quote right */}
          <div className="hidden text-right mr-4 sm:block">
            <p
              className="text-xl leading-snug"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 22 }}
            >
              Small<br />Steps.<br />Big Change.
            </p>
            <div className="mt-2 h-0.5 w-10 ml-auto rounded-full" style={{ background: "#1a4d2e" }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-0 lg:divide-x" style={{ borderColor: "#d1e8d5" }}>
          {stats.map(({ value, label }, i) => (
            <div
              key={value}
              className="min-w-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
              style={{ borderColor: "#d1e8d5" }}
            >
              <p className="text-3xl sm:text-4xl font-black mb-1" style={{ color: "#0d2717", fontWeight: 900 }}>{value}</p>
              <p className="text-xs leading-snug" style={{ color: "#6b7280", whiteSpace: "pre-line" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

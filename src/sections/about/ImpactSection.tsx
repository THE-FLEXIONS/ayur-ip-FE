// ─── 3. Impact So Far ───────────────────────────────────────────────────────

export default function ImpactSection() {
  const stats = [
    { value: "1,200+", label: "Medicinal Plants\nDocumented" },
    { value: "300+", label: "Classical\nFormulations" },
    { value: "10,000+", label: "Active Users\n(Researchers, Practitioners, Learners)" },
    { value: "50+", label: "Partner Institutions\n& Experts" },
  ];

  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "#f5f8f4" }}>
      {/* Decorative leaf left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
        <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
          <path d="M20 190C20 100 60 20 100 10C70 70 50 130 70 180" stroke="#2d6a4f" strokeWidth="2" fill="#2d6a4f" fillOpacity="0.25" />
          <path d="M20 190C30 160 55 140 70 150" stroke="#2d6a4f" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black mb-1" style={{ color: "#0d2717", fontWeight: 900 }}>Our Impact So Far</h2>
            <p className="text-sm" style={{ color: "#6b7280" }}>A growing community, a stronger tomorrow.</p>
          </div>
          {/* Script quote right */}
          <div className="text-right mr-4">
            <p
              className="text-xl leading-snug"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 22 }}
            >
              Small<br />Steps.<br />Big Change.
            </p>
            <div className="mt-2 h-0.5 w-10 ml-auto rounded-full" style={{ background: "#1a4d2e" }} />
          </div>
        </div>

        <div className="grid grid-cols-4 divide-x" style={{ borderColor: "#d1e8d5" }}>
          {stats.map(({ value, label }, i) => (
            <div
              key={value}
              className="px-8 first:pl-0 last:pr-0"
              style={{ borderColor: "#d1e8d5" }}
            >
              <p className="text-4xl font-black mb-1" style={{ color: "#0d2717", fontWeight: 900 }}>{value}</p>
              <p className="text-xs leading-snug" style={{ color: "#6b7280", whiteSpace: "pre-line" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

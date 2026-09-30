import { IconDocStep, IconPersonStep, IconSearchStep, IconSparkleStep } from "./shared/icons";

// ─── How It Works ─────────────────────────────────────────────────────────

export default function HowItWorks() {
  const steps = [
    {
      num: "1.",
      icon: <IconSearchStep />,
      title: "Search",
      desc: "Find herbs, formulations or topics using simple keywords or questions.",
    },
    {
      num: "2.",
      icon: <IconDocStep />,
      title: "Explore",
      desc: "View detailed, verified information with classical and modern references.",
    },
    {
      num: "3.",
      icon: <IconPersonStep />,
      title: "Personalize",
      desc: "Get insights tailored to your needs and save your findings.",
    },
    {
      num: "4.",
      icon: <IconSparkleStep />,
      title: "Make an Impact",
      desc: "Use the knowledge for learning, research, practice or policy-making.",
    },
  ];

  return (
    <section className="py-20" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <div>
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>
              HOW IT WORKS
            </p>
            <h2 className="text-5xl font-black leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              Simple Steps.<br />Big Impact.
            </h2>
          </div>
          <div className="max-w-xs pt-6 text-right">
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              Get from curiosity to credible knowledge in just a few steps.
            </p>
          </div>
        </div>

        {/* Steps row */}
        <div className="grid grid-cols-4 gap-6">
          {steps.map(({ num, icon, title, desc }, i) => (
            <div key={num} className="flex items-start gap-3">
              <div className="flex flex-col items-center flex-shrink-0">
                {icon}
                {i < steps.length - 1 && (
                  <div className="flex-1 flex items-center" />
                )}
              </div>
              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="self-center mt-1 flex-shrink-0" style={{ color: "#9ca3af" }}>
                  {/* rendered after icon via absolute positioning trick */}
                </div>
              )}
              <div className="flex-1">
                <p className="text-xs font-semibold mb-0.5" style={{ color: "#9ca3af" }}>{num}</p>
                <h4 className="text-base font-bold mb-2" style={{ color: "#0d2717" }}>{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Steps row v2: connected with arrows */}
      </div>
    </section>
  );
}

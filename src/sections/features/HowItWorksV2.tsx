import { IconDocStep, IconPersonStep, IconSearchStep, IconSparkleStep } from "./shared/icons";

// Corrected How It Works with proper arrow connectors
export default function HowItWorksV2() {
  const steps = [
    {
      icon: <IconSearchStep />,
      num: "1.",
      title: "Search",
      desc: "Find herbs, formulations or topics using simple keywords or questions.",
    },
    {
      icon: <IconDocStep />,
      num: "2.",
      title: "Explore",
      desc: "View detailed, verified information with classical and modern references.",
    },
    {
      icon: <IconPersonStep />,
      num: "3.",
      title: "Personalize",
      desc: "Get insights tailored to your needs and save your findings.",
    },
    {
      icon: <IconSparkleStep />,
      num: "4.",
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
          <div className="max-w-xs pt-8 text-right">
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              Get from curiosity to credible knowledge in just a few steps.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex items-start gap-2">
          {steps.map(({ icon, num, title, desc }, i) => (
            <div key={num} className="flex items-start flex-1 gap-2">
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {icon}
                  {i < steps.length - 1 && (
                    <div className="flex-1 flex items-center gap-1">
                      <div className="flex-1 border-t border-dashed" style={{ borderColor: "#b7e4c7" }} />
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 6h6M7 3l3 3-3 3" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-xs font-semibold mb-1" style={{ color: "#9ca3af" }}>{num}</p>
                <h4 className="text-base font-bold mb-2" style={{ color: "#0d2717" }}>{title}</h4>
                <p className="text-sm leading-relaxed pr-4" style={{ color: "#6b7280" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

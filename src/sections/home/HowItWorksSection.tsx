import { IconAI, IconAction, IconExplore, IconLeaf, IconPriorArt } from "../../components/icons";

// ─── How It Works ──────────────────────────────────────────────────────────

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: <IconPriorArt />,
      title: "Ask or Upload",
      desc: "Enter your question, idea or document (formulation, herb, research, etc.).",
    },
    {
      num: "02",
      icon: <IconAI />,
      title: "Get AI-Powered Insights",
      desc: "Our AI analyzes trusted sources, patents, prior art and classical texts to find relevant information.",
    },
    {
      num: "03",
      icon: <IconExplore />,
      title: "Explore Guidance",
      desc: "Receive clear insights on classification (IPC/CPC), patentability and next steps.",
    },
    {
      num: "04",
      icon: <IconAction />,
      title: "Take Action",
      desc: "Save your results, explore detailed resources or consult experts for further support.",
    },
  ];

  const stats2 = [
    { value: "10K+", label: "Research Papers\nIndexed" },
    { value: "500+", label: "Ayurveda Texts\nReferenced" },
    { value: "50+", label: "Use Cases\nAcross Domains" },
    { value: "99%", label: "Trusted\nSources" },
  ];

  return (
    <section className="py-14 sm:py-20" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header + image */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start mb-16">
          <div>
            <p
              className="text-xs font-semibold tracking-widest mb-4"
              style={{ color: "#2d6a4f" }}
            >
              HOW IT WORKS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5" style={{ color: "#0d2717", fontWeight: 900 }}>
              From your idea<br />to meaningful protection
            </h2>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: "#4b5563" }}>
              IP-SAKTI simplifies the complex world of Ayurveda IP with AI, trusted knowledge and expert guidance — in just a few steps.
            </p>
          </div>

          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ height: 280 }}
            >
              <img
                src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                alt="Ayurveda books and mortar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating script */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p
                style={{ fontFamily: "'Dancing Script', cursive", color: "#fff", fontSize: 24, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                className="text-center leading-snug"
              >
                Guiding<br />Traditional Wisdom<br />to a Safer Future
              </p>
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-4 right-3 lg:-right-4 bg-white rounded-2xl shadow-xl p-5 hidden sm:flex flex-col items-center gap-2"
              style={{ minWidth: 140 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#f0f7f2" }}
              >
                <IconLeaf />
              </div>
              <p className="text-sm font-semibold text-center" style={{ color: "#0d2717" }}>
                Same<br />Wisdom.<br />Stronger<br />Protection.
              </p>
              <div className="h-0.5 w-8 rounded-full" style={{ background: "#2d6a4f" }} />
            </div>
          </div>
        </div>

        {/* Step process */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 mb-16">
          {steps.map(({ num, icon, title, desc }, i) => (
            <div key={num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-5 left-1/2 hidden w-full h-px lg:block"
                  style={{ borderTop: "2px dashed #c3e6cc" }}
                />
              )}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center relative z-10"
                    style={{ background: "#f0f7f2", border: "2px solid #d8f3dc" }}
                  >
                    {icon}
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "#9ca3af" }}>{num}</span>
                </div>
                <h4 className="text-base font-bold mb-2" style={{ color: "#0d2717" }}>{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats + testimonial banner */}
        <div
          className="relative rounded-3xl overflow-hidden p-6 sm:p-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center"
          style={{ background: "#f0f7f2" }}
        >
          {/* Decorative leaf */}
          <div className="absolute left-4 bottom-0 opacity-20">
            <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
              <path d="M60 180 C60 80 10 40 20 10 C40 60 80 80 80 140" stroke="#2d6a4f" strokeWidth="3" fill="#2d6a4f" fillOpacity="0.3" />
            </svg>
          </div>

          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>
              MAKING A REAL DIFFERENCE
            </p>
            <h3 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: "#0d2717", fontWeight: 900 }}>
              Empowering a More<br />Innovative India
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {stats2.map(({ value, label }) => (
                <div
                  key={value}
                  className="flex flex-col border-r border-b last:border-b-0 pr-4 pb-4"
                  style={{ borderColor: "#c3e6cc" }}
                >
                  <span className="text-3xl font-black" style={{ color: "#0d2717", fontWeight: 900 }}>
                    {value}
                  </span>
                  <span className="text-xs" style={{ color: "#6b7280", whiteSpace: "pre-line" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div
            className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <div className="text-4xl mb-4" style={{ color: "#2d6a4f", fontWeight: 900, lineHeight: 1 }}>"</div>
            <p
              className="text-base italic leading-relaxed mb-6"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#0d2717", fontSize: 18 }}
            >
              "IP-SAKTI bridges the timeless wisdom of Ayurveda with the power of modern AI, creating new opportunities for a healthier, more innovative India."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "#0d2717" }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>Ministry of AYUSH</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>Government of India</p>
              </div>
            </div>

            {/* Carousel dots */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: i === 0 ? 20 : 8,
                      height: 8,
                      background: i === 0 ? "#0d2717" : "#d1d5db",
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  className="w-9 h-9 rounded-full border flex items-center justify-center"
                  style={{ borderColor: "#d1d5db" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 3L5 7l4 4" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                  style={{ background: "#0d2717" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

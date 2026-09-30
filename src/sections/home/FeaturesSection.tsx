import { IconArrow, IconArrowRight, IconBook, IconGlobe, IconLeaf, IconPriorArt, IconShield, IconShieldSm, IconTag, IconUsers } from "../../components/icons";
import { HERB_IMG2, MOUNTAIN_IMG } from "./shared/assets";

// ─── Features Section ──────────────────────────────────────────────────────

export default function FeaturesSection() {
  const cards = [
    {
      icon: <IconPriorArt />,
      title: "Prior Art Search",
      desc: "Find existing knowledge, research and patents related to your idea across global and traditional sources.",
    },
    {
      icon: <IconShield />,
      title: "Patent Guidance",
      desc: "Get step-by-step guidance on patentability, filing process and IPR strategies for Ayurveda innovations.",
    },
    {
      icon: <IconTag />,
      title: "Classification & IPR",
      desc: "Automatically classify your invention using IPC/CPC codes with AI-powered accuracy.",
    },
    {
      icon: <IconLeaf />,
      title: "Ayurveda Knowledge",
      desc: "Access curated knowledge on herbs, formulations, classical texts and traditional practices.",
    },
  ];

  const stats = [
    { icon: <IconUsers />, value: "10K+", label: "Research Papers Indexed" },
    { icon: <IconBook />, value: "500+", label: "Classical Texts Referenced" },
    { icon: <IconGlobe />, value: "Global", label: "Patent & Non-Patent Sources" },
    { icon: <IconShieldSm />, value: "Trusted", label: "by Innovators & Institutions" },
  ];

  return (
    <section className="py-14 sm:py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top: heading + image */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start mb-14">
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 border"
              style={{ background: "#f0f7f2", borderColor: "#c3e6cc", color: "#2d6a4f" }}
            >
              EXPLORE POSSIBILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5" style={{ color: "#0d2717", fontWeight: 900 }}>
              What can IP-SAKTI<br />do for you?
            </h2>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: "#4b5563" }}>
              From traditional wisdom to modern protection, get AI-powered support at every step of your innovation journey.
            </p>
          </div>

          {/* Right: image with floating badge */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ height: 260, background: "#e8f5e9" }}
            >
              <img
                src={HERB_IMG2}
                alt="Ayurveda mortar and pestle"
                className="w-full h-full object-cover"
              />
              {/* Script overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  style={{ fontFamily: "'Dancing Script', cursive", color: "#0d2717", fontSize: 28 }}
                  className="font-semibold text-center leading-tight drop-shadow-sm"
                >
                  Traditional<br />Knowledge.<br />Stronger Futures.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute top-4 right-3 lg:-right-4 bg-white rounded-2xl shadow-xl p-5 hidden sm:flex flex-col items-center gap-2"
              style={{ minWidth: 130 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#f0f7f2" }}
              >
                <IconLeaf />
              </div>
              <p className="text-sm font-semibold text-center" style={{ color: "#0d2717" }}>
                Tradition<br />Meets<br />Technology
              </p>
              <div className="h-0.5 w-8 rounded-full" style={{ background: "#2d6a4f" }} />
            </div>
          </div>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 mb-12">
          {cards.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl p-6 border hover:shadow-md transition-shadow"
              style={{ borderColor: "#e5e7eb", background: "#ffffff" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#f0f7f2" }}
              >
                {icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: "#0d2717" }}>{title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>{desc}</p>
              <button
                className="flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "#0d2717" }}
              >
                Learn more <IconArrow />
              </button>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl border p-5 sm:py-6 sm:px-8 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x mb-14"
          style={{ borderColor: "#e5e7eb" }}
        >
          {stats.map(({ icon, value, label }) => (
            <div key={value} className="flex items-center gap-3 lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#f0f7f2" }}
              >
                {icon}
              </div>
              <div>
                <p className="text-xl font-black" style={{ color: "#0d2717", fontWeight: 900 }}>{value}</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission banner */}
        <div
          className="relative rounded-3xl overflow-hidden p-6 sm:p-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 items-center"
          style={{ minHeight: 220 }}
        >
          <img
            src={MOUNTAIN_IMG}
            alt="Indian mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,39,23,0.65)" }} />

          <div className="relative z-10">
            <p
              className="text-xs font-semibold tracking-widest mb-3"
              style={{ color: "#74c99a" }}
            >
              OUR MISSION
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3" style={{ fontWeight: 900 }}>
              Preserving India's Traditional Wisdom
            </h3>
            <p className="text-sm text-green-100 leading-relaxed max-w-md">
              Empowering researchers, practitioners and innovators with AI to protect, preserve and advance Ayurveda for future generations.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-start gap-4 md:items-end">
            <p
              className="text-xl italic text-left md:text-right"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#a7f3d0" }}
            >
              Ancient Knowledge<br />Brighter Tomorrows
            </p>
            <button
              className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
            >
              <div
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center"
              >
                <IconArrowRight size={16} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Learn More</p>
                <p className="text-xs opacity-70">About Our Vision</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, IconBank, IconBookSm, IconBulb, IconFlask, IconLeafSm, IconPersonSm } from "./shared/icons";

// ─── Explore Panel ──────────────────────────────────────────────────────────

export default function ExplorePanel() {
  const cats = [
    { icon: <IconPersonSm color="#4b5563" />, bg: "#eef2f6", title: "Individuals", desc: "Personal wellness\nand everyday use" },
    { icon: <IconFlask color="#2563eb" />, bg: "#eef4ff", title: "Researchers", desc: "Scientific exploration\nand innovation" },
    { icon: <IconLeafSm color="#a8722c" />, bg: "#fbf1e3", title: "Practitioners", desc: "Clinical knowledge\nand trusted care" },
    { icon: <IconBookSm color="#2d6a4f" />, bg: "#e8f5e9", title: "Educators & Students", desc: "Learning, teaching\nand awareness" },
    { icon: <IconBulb color="#b8860b" />, bg: "#fbf6e3", title: "Innovators & Startups", desc: "Building solutions\nfor the future" },
    { icon: <IconBank color="#2d6a4f" />, bg: "#e8f2ea", title: "Government & NGOs", desc: "Policy, preservation\nand public impact" },
  ];

  return (
    <div className="mt-14 -mx-2 bg-white rounded-t-[40px] shadow-[0_-8px_40px_rgba(0,0,0,0.06)] px-10 pt-12 pb-14 relative z-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-4xl font-black mb-2" style={{ color: "#0d2717", fontWeight: 900 }}>
            Explore Use Cases
          </h2>
          <p className="text-base" style={{ color: "#6b7280" }}>
            Discover how Ayur-Ip creates value for different users and communities.
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#2d6a4f" }}>
          View all use cases <ArrowRight size={15} />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {cats.map(({ icon, bg, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border p-5 flex flex-col transition-shadow hover:shadow-md cursor-pointer"
            style={{ borderColor: "#eceef0", background: "#fcfdfc", minHeight: 190 }}
          >
            <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ background: bg }}>
              {icon}
            </div>
            <h3 className="text-sm font-bold mb-1.5" style={{ color: "#0d2717" }}>{title}</h3>
            <p className="text-xs leading-relaxed flex-1" style={{ color: "#9ca3af", whiteSpace: "pre-line" }}>{desc}</p>
            <div className="mt-3 self-start w-8 h-8 rounded-full border flex items-center justify-center" style={{ borderColor: "#e5e7eb" }}>
              <ArrowRight size={13} color="#6b7280" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

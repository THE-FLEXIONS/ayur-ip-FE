import { TEAM1_IMG, TEAM2_IMG, TEAM3_IMG } from "./shared/assets";
import { IconArrowRight, IconLeafCircle } from "./shared/icons";

// ─── 6. Meet the Team ───────────────────────────────────────────────────────

export default function MeetTheTeam() {
  const team = [
    {
      img: TEAM1_IMG,
      name: "Naman Sachdev",
      role: "Product & Design",
      bio: "Passionate about creating meaningful digital experiences for traditional knowledge.",
    },
    {
      img: TEAM2_IMG,
      name: "Aditi Sharma",
      role: "Research & Content",
      bio: "Bridging ancient wisdom with modern research for greater impact.",
    },
    {
      img: TEAM3_IMG,
      name: "Rohan Verma",
      role: "Technology & Development",
      bio: "Building reliable and scalable solutions to make Ayurveda accessible to all.",
    },
  ];

  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left */}
          <div className="col-span-3">
            <p className="text-xs font-bold tracking-widest mb-3 flex items-center gap-2" style={{ color: "#2d6a4f" }}>
              MEET THE TEAM
              <span style={{ color: "#1a4d2e", fontSize: 16 }}>✦</span>
            </p>
            <h2 className="text-4xl font-black mb-5 leading-tight" style={{ color: "#0d2717", fontWeight: 900 }}>
              People Behind<br /><span style={{ color: "#1a4d2e" }}>Ayur-Ip</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#4b5563" }}>
              We are a diverse team of creators, researchers and problem-solvers, united by a common purpose — to preserve, protect and propel India's Ayurvedic knowledge for a healthier tomorrow.
            </p>
            <button
              className="flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 mb-8"
              style={{ background: "#1a4d2e" }}
            >
              Meet the Team <IconArrowRight />
            </button>
            <p
              className="text-lg"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 20 }}
            >
              "Different minds.<br />A shared purpose."
            </p>
            <div className="mt-2 h-0.5 w-10 rounded-full" style={{ background: "#1a4d2e" }} />
          </div>

          {/* Team cards */}
          {team.map(({ img, name, role, bio }) => (
            <div
              key={name}
              className="col-span-3 rounded-2xl border overflow-hidden"
              style={{ borderColor: "#e5e7eb" }}
            >
              {/* Photo */}
              <div className="overflow-hidden" style={{ height: 200 }}>
                <img src={img} alt={name} className="w-full h-full object-cover object-top" />
              </div>
              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#e8f5ed" }}>
                    <IconLeafCircle color="#2d6a4f" />
                  </div>
                  <p className="text-sm font-bold" style={{ color: "#0d2717" }}>{name}</p>
                </div>
                <p className="text-xs font-medium mb-3" style={{ color: "#6b7280" }}>{role}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{bio}</p>
              </div>
            </div>
          ))}

          {/* "And many more" card */}
          <div
            className="col-span-3 rounded-2xl border flex flex-col items-center justify-center text-center p-6 gap-3 cursor-pointer hover:shadow-md transition-shadow"
            style={{ borderColor: "#e5e7eb", minHeight: 320 }}
          >
            <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>And many more amazing contributors</p>
            <div
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "#1a4d2e", color: "#1a4d2e" }}
            >
              <IconArrowRight />
            </div>
          </div>
        </div>

        {/* Script quote + leaf right */}
        <div className="flex items-center justify-end mt-6 gap-4">
          <div className="text-right">
            <p
              className="text-lg leading-snug"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#1a4d2e", fontSize: 20 }}
            >
              "Technology<br />meets tradition<br />because people<br />make it happen."
            </p>
            <div className="mt-2 h-0.5 w-10 ml-auto rounded-full" style={{ background: "#1a4d2e" }} />
          </div>
          {/* Decorative leaf */}
          <div className="opacity-40">
            <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
              <path d="M40 115C40 55 60 20 70 10C50 40 30 70 40 110" stroke="#2d6a4f" strokeWidth="2" fill="#2d6a4f" fillOpacity="0.3" />
              <path d="M40 90C40 75 50 65 60 68" stroke="#2d6a4f" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

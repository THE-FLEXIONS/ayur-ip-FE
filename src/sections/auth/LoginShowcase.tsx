import { LEFT_PANEL_IMG } from "./shared/assets";
import BrandLogo from "../../components/ui/BrandLogo";
import { IconBrainSm, IconLeafSm, IconShieldSm } from "./shared/icons";

// Left half of the auth card: brand, headline, value props over the landscape photo.
export default function LoginShowcase({ onBack }: { onBack: () => void }) {
  const features = [
    { icon: <IconLeafSm />, lines: ["Access", "Authentic", "Knowledge"] },
    { icon: <IconBrainSm />, lines: ["Turn Ideas", "into Impact"] },
    { icon: <IconShieldSm />, lines: ["Your Rights,", "Our Priority"] },
  ];

  return (
    <div className="relative w-full flex-none overflow-hidden lg:w-[56%]">
      {/* Background photo */}
      <img
        src={LEFT_PANEL_IMG}
        alt="Misty green mountains — Ayur-Ip"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — stacked (mobile/tablet): mostly light so the copy stays readable */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,250,246,0.95) 0%, rgba(248,250,246,0.88) 55%, rgba(248,250,246,0.62) 82%, rgba(13,39,23,0.55) 100%)",
        }}
      />
      {/* Gradient overlay — side-by-side (desktop) */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,250,246,0.93) 0%, rgba(248,250,246,0.72) 16%, rgba(20,54,32,0.08) 38%, rgba(13,39,23,0.55) 70%, rgba(13,39,23,0.82) 100%)",
        }}
      />

      {/* All content sits here */}
      <div className="relative flex flex-col lg:absolute lg:inset-0">
        {/* ── TOP BAR ── */}
        <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-7 sm:pt-7">
          {/* Logo */}
          <button
            onClick={onBack}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <BrandLogo size={40} className="h-10 w-auto" />
            <div className="text-left">
              <div
                className="text-base leading-none"
                style={{ color: "#0d2717", fontWeight: 800 }}
              >
                Ayur-Ip
              </div>
              <div
                className="text-xs tracking-widest mt-0.5"
                style={{ color: "#2d6a4f", fontSize: 8, fontWeight: 700, letterSpacing: "0.18em" }}
              >
                PROTECT PRESERVE PROPEL
              </div>
            </div>
          </button>

          {/* Script tagline */}
          <div className="hidden text-right pr-1 pt-0.5 min-[420px]:block">
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "#1a4028",
                fontSize: 17,
                lineHeight: 1.35,
              }}
            >
              Rooted
              <br />
              in Tradition.
              <br />
              Built for
              <br />
              Tomorrow.
            </p>
            <div
              className="mt-2 w-7 h-px ml-auto rounded-full"
              style={{ background: "#2d6a4f" }}
            />
          </div>
        </div>

        {/* ── HEADLINE + DESCRIPTION ── */}
        <div className="px-5 pt-5 pb-7 sm:px-7 sm:pt-6 lg:pb-0 flex-1">
          <h1 className="mb-3" style={{ lineHeight: 1.1 }}>
            <span
              className="block text-[28px] sm:text-4xl"
              style={{ color: "#0d2717", fontWeight: 700 }}
            >
              Join a
            </span>
            <span
              className="block text-[36px] sm:text-[46px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
                color: "#2d6a4f",
              }}
            >
              Healthier,
            </span>
            <span
              className="block text-[28px] sm:text-4xl"
              style={{ color: "#0d2717", fontWeight: 800 }}
            >
              Brighter Tomorrow
            </span>
          </h1>

          <p
            className="text-sm leading-relaxed mb-6 max-w-xs"
            style={{ color: "#374151" }}
          >
            Create your account and be part of a secure, intelligent platform for Ayurvedic knowledge, innovation, and global impact.
          </p>

          {/* Feature icon trio */}
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {features.map(({ icon, lines }, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "#1a4028",
                  }}
                >
                  {icon}
                </div>
                <div className="text-center">
                  {lines.map((line) => (
                    <p
                      key={line}
                      className="text-xs font-semibold leading-snug"
                      style={{ color: "#1a4028" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOOK STACK + QUOTE ── */}
        <div className="hidden px-7 pb-10 items-end justify-between gap-4 lg:flex">
          {/* Stacked book spines */}
          <div className="flex flex-col gap-1.5">
            {[
              { label: "TRADITION", shade: "rgba(120,76,35,0.88)" },
              { label: "INNOVATION", shade: "rgba(101,63,28,0.9)" },
              { label: "IMPACT", shade: "rgba(84,52,22,0.92)" },
            ].map(({ label, shade }) => (
              <div
                key={label}
                className="flex items-center justify-center"
                style={{
                  background: shade,
                  borderRadius: 3,
                  padding: "8px 22px",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                  minWidth: 132,
                }}
              >
                <span
                  style={{
                    color: "#e8d5b0",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-right">
            <p
              className="leading-snug"
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "white",
                fontSize: 17,
                lineHeight: 1.45,
                textShadow: "0 1px 5px rgba(0,0,0,0.55)",
              }}
            >
              &ldquo;Ancient Wisdom
              <br />
              for a Healthier,
              <br />
              More Inclusive World.&rdquo;
            </p>
            <div
              className="mt-2 w-7 h-px ml-auto rounded-full"
              style={{ background: "rgba(255,255,255,0.6)" }}
            />
          </div>
        </div>

        {/* ── FOOTER BAR ── */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5"
          style={{
            background: "rgba(13,39,23,0.7)",
            backdropFilter: "blur(6px)",
          }}
        >
          {["PEOPLE", "PLANET", "PROGRESS"].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              {i > 0 && (
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>|</span>
              )}
              <span
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

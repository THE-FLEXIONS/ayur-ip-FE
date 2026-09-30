import { LOCK_IMG } from "./shared/assets";
import { ArrowRight, IconLock } from "./shared/icons";

// ─── Security Banner ──────────────────────────────────────────────────────

export default function SecurityBanner() {
  return (
    <section className="py-6" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden grid grid-cols-2 items-center"
          style={{ minHeight: 280 }}
        >
          {/* Left */}
          <div
            className="relative z-10 p-12"
            style={{ background: "#f0f7f2" }}
          >
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>
              BUILT ON TRUST
            </p>
            <div className="flex items-start gap-4 mb-4">
              <IconLock />
              <h3 className="text-3xl font-black" style={{ color: "#0d2717", fontWeight: 900 }}>
                Your Knowledge.<br />Secure.
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: "#4b5563" }}>
              We ensure the authenticity, privacy and responsible use of traditional knowledge with robust security and ethical standards.
            </p>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-colors hover:bg-white"
              style={{ borderColor: "#0d2717", color: "#0d2717" }}
            >
              Learn About Our Security <ArrowRight size={14} />
            </button>
          </div>

          {/* Right: image */}
          <div className="relative h-full" style={{ minHeight: 280 }}>
            <img
              src={LOCK_IMG}
              alt="Security padlock"
              className="w-full h-full object-cover"
              style={{ minHeight: 280 }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(13,39,23,0.35)" }} />
            {/* Script overlay */}
            <div className="absolute top-8 right-8 text-right">
              <p
                style={{ fontFamily: "'Dancing Script', cursive", color: "white", fontSize: 22 }}
                className="leading-snug drop-shadow"
              >
                Protecting<br />our roots for<br />future generations.
              </p>
              <div className="mt-2 h-0.5 w-12 ml-auto rounded-full bg-white opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { LOCK_IMG } from "./shared/assets";
import { ArrowRight, IconLock } from "./shared/icons";

// ─── Security Banner ──────────────────────────────────────────────────────

export default function SecurityBanner() {
  return (
    <section className="py-6" style={{ background: "#f8faf7" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="relative rounded-3xl overflow-hidden grid items-stretch md:grid-cols-2 md:min-h-[280px]"
        >
          {/* Left */}
          <div
            className="relative z-10 order-2 p-6 sm:p-10 md:order-none lg:p-12"
            style={{ background: "#f0f7f2" }}
          >
            <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: "#2d6a4f" }}>
              BUILT ON TRUST
            </p>
            <div className="flex items-center gap-3 mb-4 sm:items-start sm:gap-4">
              <IconLock />
              <h3 className="text-2xl sm:text-3xl font-black" style={{ color: "#0d2717", fontWeight: 900 }}>
                Your Knowledge.<br />Secure.
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: "#4b5563" }}>
              We ensure the authenticity, privacy and responsible use of traditional knowledge with robust security and ethical standards.
            </p>
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full sm:px-6 text-sm font-semibold border transition-colors hover:bg-white"
              style={{ borderColor: "#0d2717", color: "#0d2717" }}
            >
              Learn About Our Security <ArrowRight size={14} />
            </button>
          </div>

          {/* Right: image */}
          <div className="relative h-56 sm:h-64 md:h-full md:min-h-[280px]">
            <img
              src={LOCK_IMG}
              alt="Security padlock"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "rgba(13,39,23,0.35)" }} />
            {/* Script overlay */}
            <div className="absolute top-6 right-6 text-right sm:top-8 sm:right-8">
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

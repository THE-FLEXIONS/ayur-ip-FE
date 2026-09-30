import BrandMark from "../ui/BrandMark";
import { IconArrowRight, IconChat, IconLeaf, IconMail, IconPhone, IconPrivacy, IconQuestionCircle } from "../icons";

// ─── Footer ────────────────────────────────────────────────────────────────

export default function Footer() {
  const product = ["Features", "Use Cases", "How it Works", "Pricing", "FAQs"];
  const resources = [
    "Knowledge Base",
    "Ayurveda References",
    "Guidelines & Policies",
    "Research Papers",
    "Case Studies",
    "Blogs & Updates",
    "API (Coming Soon)",
  ];
  const about = ["Our Mission", "Our Team", "Partners", "Media & News", "Careers", "Contact Us"];
  const govLinks = ["india.gov.in", "ayush.gov.in", "ipindia.gov.in", "mygov.in"];

  return (
    <footer style={{ background: "#f8faf7" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BrandMark />
              <div>
                <div className="text-lg font-black" style={{ color: "#0d2717", fontWeight: 800 }}>IP-SAKTI</div>
                <div className="text-xs" style={{ color: "#40916c" }}>Fast & Secure Ai for Ayurveda</div>
              </div>
            </div>
            <p
              className="text-base italic mb-3"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#0d2717", fontSize: 16 }}
            >
              Preserving Traditional Wisdom.<br />Powering a Healthier Tomorrow.
            </p>
            <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: "#2d6a4f" }} />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
              An AI-powered platform to discover, protect and advance Ayurveda knowledge through trusted insights, patent guidance and research support.
            </p>
            {/* Social */}
            <div className="flex gap-3 mb-6">
              {["X", "in", "▶", "◻"].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold transition-colors hover:bg-gray-100"
                  style={{ borderColor: "#d1d5db", color: "#374151" }}
                >
                  {icon}
                </button>
              ))}
            </div>
            <p
              className="text-sm italic"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#6b7280" }}
            >
              Ancient Knowledge. Brighter Tomorrows.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Product</h4>
            <ul className="space-y-3">
              {product.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Resources</h4>
            <ul className="space-y-3">
              {resources.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>About</h4>
            <ul className="space-y-3">
              {about.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 id="help-support" tabIndex={-1} className="text-base font-bold mb-5 scroll-mt-6 outline-none" style={{ color: "#0d2717" }}>Help & Support</h4>
            <ul className="space-y-4">
              {[
                { icon: <IconQuestionCircle />, label: "Help Center" },
                { icon: <IconMail />, label: "Raise a Query" },
                {
                  icon: <IconPhone />,
                  label: "1800-11-AYUSH",
                  sub: "(Toll Free, Mon–Fri 9AM–6PM)",
                },
                { icon: <IconChat />, label: "Live Support" },
              ].map(({ icon, label, sub }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0" style={{ color: "#1a4028" }}>{icon}</div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#0d2717" }}>{label}</p>
                    {sub && <p className="text-xs" style={{ color: "#9ca3af" }}>{sub}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div
          className="rounded-2xl p-5 sm:p-8 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 mb-10"
          style={{ background: "#e8f5e9", border: "1px solid #c3e6cc" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#d8f3dc" }}
            >
              <IconLeaf />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1" style={{ color: "#0d2717" }}>Stay Updated</h4>
              <p className="text-sm" style={{ color: "#4b5563" }}>
                Get the latest updates on Ayurveda IP, policy changes and new features.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 lg:items-end lg:min-w-80">
            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <input
                placeholder="Enter your email address"
                className="min-w-0 flex-1 px-4 py-3 rounded-xl border text-sm outline-none"
                style={{ borderColor: "#d1d5db", background: "white" }}
              />
              <button
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: "#0d2717" }}
              >
                Subscribe <IconArrowRight size={16} />
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              <IconPrivacy />
              <p className="text-xs" style={{ color: "#6b7280" }}>We respect your privacy. No spam, ever.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center">
            {/* Ministry of AYUSH */}
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>An Initiative Under</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "#f0f0e0" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="6" r="3" stroke="#b8860b" strokeWidth="1.2" fill="#c8a020" fillOpacity="0.3" />
                    <path d="M5 20c0-4 3-7 7-7s7 3 7 7" stroke="#b8860b" strokeWidth="1.2" fill="none" />
                    <path d="M12 3l2 8H6l2-8" stroke="#b8860b" strokeWidth="0.8" fill="none" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>Ministry of AYUSH</p>
                  <p className="text-xs" style={{ color: "#9ca3af" }}>Government of India</p>
                  <p className="text-xs italic" style={{ color: "#9ca3af" }}>सत्यमेव जयते</p>
                </div>
              </div>
            </div>

            {/* Collaboration logos */}
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>In Collaboration With</p>
              <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                <div
                  className="px-3 py-2 rounded-lg flex flex-col items-center"
                  style={{ background: "#1a3473" }}
                >
                  <span className="text-white text-xs font-bold">IP</span>
                  <span className="text-white text-xs" style={{ fontSize: 8 }}>INDIA</span>
                </div>
                <div
                  className="px-3 py-2 rounded-lg"
                  style={{ background: "#1a6fb5" }}
                >
                  <span className="text-white text-xs font-bold">Digital India</span>
                </div>
                <div
                  className="px-3 py-2 rounded-lg"
                  style={{ background: "#e8790e" }}
                >
                  <span className="text-white text-xs font-bold">myGov</span>
                </div>
                <div
                  className="px-3 py-2 rounded-lg"
                  style={{ background: "#0057a8" }}
                >
                  <span className="text-white text-xs font-bold">G20</span>
                </div>
              </div>
            </div>

            {/* Govt portals */}
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>Follow Government Portals</p>
              <div className="grid grid-cols-2 gap-1">
                {govLinks.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="text-xs flex items-center gap-1 hover:underline"
                    style={{ color: "#1a4028" }}
                  >
                    {l}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M4 2h4v4" stroke="#1a4028" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

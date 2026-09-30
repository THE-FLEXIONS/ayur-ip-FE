import { ArrowRight, IconLeafSm } from "./shared/icons";

// ─── Footer ───────────────────────────────────────────────────────────────

export default function UseCasesFooter() {
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
  const help = [
    { label: "Help Center" },
    { label: "Raise a Query" },
    { label: "1800-11-AYUSH", sub: "(Toll Free, Mon–Fri 9AM–6PM)" },
    { label: "Live Support" },
  ];
  const govLinks = ["india.gov.in", "ayush.gov.in", "ipindia.gov.in", "mygov.in"];

  return (
    <footer style={{ background: "#f4f8f2" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
                <path d="M20 4C12 6 8 14 12 24C16 18 20 14 20 8" fill="#2d6a4f" />
                <path d="M20 4C28 6 32 14 28 24C24 18 20 14 20 8" fill="#40916c" />
              </svg>
              <div>
                <div className="text-lg font-black" style={{ color: "#0d2717", fontWeight: 800 }}>IP-SAKTI</div>
                <div className="text-xs" style={{ color: "#40916c" }}>AI for Ayurveda IP</div>
              </div>
            </div>
            <p className="text-base italic mb-3" style={{ fontFamily: "'Dancing Script', cursive", color: "#0d2717", fontSize: 16 }}>
              Preserving Traditional Wisdom.<br />Powering a Healthier Tomorrow.
            </p>
            <div className="h-0.5 w-8 rounded-full mb-4" style={{ background: "#2d6a4f" }} />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
              An AI-powered platform to discover, protect and advance Ayurveda knowledge through trusted insights, patent guidance and research support.
            </p>
            <div className="flex gap-3 mb-6">
              {["X", "in", "▶", "◻"].map((icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold transition-colors hover:bg-gray-100" style={{ borderColor: "#d1d5db", color: "#374151" }}>
                  {icon}
                </button>
              ))}
            </div>
            <p className="text-sm italic" style={{ fontFamily: "'Dancing Script', cursive", color: "#6b7280" }}>
              Ancient Knowledge. Brighter Tomorrows.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Product</h4>
            <ul className="space-y-3">
              {product.map((l) => (
                <li key={l}><a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Resources</h4>
            <ul className="space-y-3">
              {resources.map((l) => (
                <li key={l}><a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>About</h4>
            <ul className="space-y-3">
              {about.map((l) => (
                <li key={l}><a href="#" className="text-sm transition-colors hover:text-green-700" style={{ color: "#6b7280" }}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-base font-bold mb-5" style={{ color: "#0d2717" }}>Help & Support</h4>
            <ul className="space-y-4">
              {help.map(({ label, sub }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><IconLeafSm color="#1a4028" /></span>
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
        <div className="rounded-2xl p-8 flex items-center justify-between gap-8 mb-10" style={{ background: "#e8f5e9", border: "1px solid #c3e6cc" }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#d8f3dc" }}>
              <IconLeafSm color="#1a4028" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1" style={{ color: "#0d2717" }}>Stay Updated</h4>
              <p className="text-sm" style={{ color: "#4b5563" }}>Get the latest updates on Ayurveda IP, policy changes and new features.</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 min-w-80">
            <div className="flex w-full gap-2">
              <input placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-xl border text-sm outline-none" style={{ borderColor: "#d1d5db", background: "white" }} />
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white" style={{ background: "#0d2717" }}>
                Subscribe <ArrowRight size={16} color="white" />
              </button>
            </div>
            <p className="text-xs" style={{ color: "#6b7280" }}>We respect your privacy. No spam, ever.</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-8 items-center">
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>An Initiative Under</p>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#0d2717" }}>Ministry of AYUSH</p>
                <p className="text-xs" style={{ color: "#9ca3af" }}>Government of India</p>
              </div>
            </div>
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>In Collaboration With</p>
              <div className="flex items-center gap-3 text-xs font-bold" style={{ color: "#1a3473" }}>
                <span>IP INDIA</span>
                <span style={{ color: "#1a6fb5" }}>Digital India</span>
                <span style={{ color: "#e8790e" }}>myGov</span>
                <span style={{ color: "#0057a8" }}>G20</span>
              </div>
            </div>
            <div>
              <p className="text-xs mb-3" style={{ color: "#9ca3af" }}>Follow Government Portals</p>
              <div className="grid grid-cols-2 gap-1">
                {govLinks.map((l) => (
                  <a key={l} href="#" className="text-xs flex items-center gap-1 hover:underline" style={{ color: "#1a4028" }}>
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

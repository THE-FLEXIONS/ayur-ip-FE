import { useState } from "react";
import BrandMark from "../ui/BrandMark";
import { IconSearch } from "../icons";
import { MenuIcon } from "../ui/LineIcons";

// ─── Navbar ────────────────────────────────────────────────────────────────

export default function Navbar({
  activePage,
  onNav,
  onOpenMenu,
}: {
  activePage: string;
  onNav: (p: string) => void;
  onOpenMenu: () => void;
}) {
  const [active, setActive] = useState(activePage);
  const links = ["Home", "Features", "Use Cases", "Herbal Library", "About"];

  function handleNav(link: string) {
    setActive(link);
    onNav(link);
  }

  return (
    <nav
      style={{ fontFamily: "Inter, sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">
        {/* Sidebar trigger */}
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open menu"
          aria-haspopup="dialog"
          className="-ml-2 -mr-5 flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-ayur-green"
          style={{ color: "#0d2717" }}
        >
          <MenuIcon size={24} strokeWidth={1.7} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2.5 mr-4">
          <BrandMark />
          <div>
            <div className="text-lg font-800 leading-none" style={{ color: "#0d2717", fontWeight: 800 }}>
              Ayur IP
            </div>
            <div className="text-xs" style={{ color: "#40916c" }}>Fast & Secure Ai for Ayurveda</div>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6 flex-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-sm font-medium transition-colors relative pb-0.5"
              style={{
                color: active === link ? "#0d2717" : "#6b7280",
                fontWeight: active === link ? 600 : 400,
              }}
            >
              {link}
              {active === link && (
                <span
                  className="absolute -bottom-4 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "#0d2717" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-2 gap-2 w-44">
          <IconSearch />
          <input
            placeholder="Search"
            className="bg-transparent text-sm outline-none text-gray-600 w-full placeholder-gray-400"
          />
        </div>

        {/* Sign In */}
        <button
          onClick={() => handleNav("Login")}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "#0d2717" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="5" r="3" stroke="white" strokeWidth="1.3" fill="none" />
            <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          </svg>
          Sign In
        </button>
      </div>
    </nav>
  );
}

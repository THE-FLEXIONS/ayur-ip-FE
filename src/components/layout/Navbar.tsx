import { useState, type FormEvent } from "react";
import { initials, useAuth } from "../../hooks/useAuth";
import BrandLogo from "../ui/BrandLogo";
import { IconSearch } from "../icons";
import { MenuIcon } from "../ui/LineIcons";

// ─── Navbar ────────────────────────────────────────────────────────────────

export default function Navbar({
  activePage,
  onNav,
  onOpenMenu,
  onSearch,
}: {
  activePage: string;
  onNav: (p: string) => void;
  onOpenMenu: () => void;
  /** Searches the Herbal Library. */
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");
  const auth = useAuth();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  }
  const links = ["Home", "Features", "Use Cases", "Herbal Library", "About"];

  function handleNav(link: string) {
    onNav(link);
  }

  return (
    <nav
      aria-label="Primary"
      style={{ fontFamily: "Inter, sans-serif" }}
      className="glass-topbar sticky top-2 z-30 mx-auto my-2 w-[calc(100%-1rem)] max-w-[1240px] rounded-[22px] px-2 py-2 sm:my-3 sm:w-[calc(100%-2rem)] sm:px-3 lg:px-4"
    >
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 sm:gap-x-3">
        {/* Sidebar trigger */}
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open menu"
          aria-haspopup="dialog"
          className="flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-ayur-green sm:size-11"
          style={{ color: "#0d2717" }}
        >
          <MenuIcon size={24} strokeWidth={1.7} />
        </button>

        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("Home")}
          aria-label="AyurIP home"
          className="flex min-w-0 items-center gap-1.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ayur-green sm:gap-2.5"
        >
          <BrandLogo size={52} className="h-9 w-auto min-[400px]:h-10 sm:h-12" />
          <span className="flex min-w-0 flex-col text-left">
            <span className="font-editorial text-[20px] font-semibold leading-none tracking-[-0.01em] text-[#12201f] min-[400px]:text-[22px] sm:text-[29px]">
              AyurIP
            </span>
            <span className="mt-1 hidden text-[10px] leading-tight text-[#3c4640] min-[400px]:block sm:text-[11px]">
              Tradition Protected
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>Innovation Empowered
            </span>
          </span>
        </button>

        {/* Nav links */}
        <div className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => handleNav(link)}
              aria-current={activePage === link ? "page" : undefined}
              className={`relative rounded-full px-3 py-2 text-sm transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-ayur-green ${
                activePage === link ? "font-semibold text-[#0d2717]" : "text-gray-600"
              }`}
            >
              {link}
              {activePage === link && <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-[#0d2717]" />}
            </button>
          ))}
        </div>

        {/* Search */}
        <form
          role="search"
          onSubmit={handleSearch}
          className="order-3 flex h-10 w-full items-center gap-2 rounded-full border border-[#e2e8e2] bg-white/75 px-3 sm:order-none sm:ml-auto sm:w-[190px] lg:w-[210px] xl:ml-0"
        >
          <IconSearch />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search herbs"
            aria-label="Search the Herbal Library"
            className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </form>

        {/* Account */}
        {auth.user ? (
          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:ml-0 sm:gap-2">
            <span
              className="flex size-9 items-center justify-center rounded-full text-xs font-semibold text-white sm:size-10 sm:text-sm"
              style={{ background: "#1a4028" }}
              title={auth.user.email}
            >
              {initials(auth.user)}
            </span>
            <button
              type="button"
              onClick={() => {
                auth.logout();
                handleNav("Home");
              }}
              className="rounded-full border border-gray-200 px-2.5 py-2 text-xs font-semibold text-[#0d2717] transition-colors hover:bg-white/80 min-[400px]:px-3 sm:px-4 sm:text-sm"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => handleNav("Login")}
            className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 min-[400px]:gap-2 min-[400px]:px-3.5 sm:ml-0 sm:px-4 sm:text-sm"
            style={{ background: "#0d2717" }}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="5" r="3" stroke="white" strokeWidth="1.3" fill="none" />
              <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            </svg>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
}

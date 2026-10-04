import { useEffect, useId, useRef, useState } from "react";
import { initials, useAuth } from "../../hooks/useAuth";
import BrandLogo from "../ui/BrandLogo";
import { BellIcon, MenuIcon } from "../ui/LineIcons";

export const NAV_LINKS = ["Home", "Features", "Use Cases", "Herbal Library", "About"] as const;

type AppHeaderProps = {
  onNavigate: (page: string) => void;
  /** Opens the app sidebar. */
  onOpenMenu: () => void;
  /** Page highlighted in the top navigation, if it is one of NAV_LINKS. */
  activePage?: string;
};

/** Brand, top navigation, notifications and account menu for the app's ivory pages. */
export default function AppHeader({ onNavigate, onOpenMenu, activePage = "Home" }: AppHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const auth = useAuth();
  const user = auth.user;

  useEffect(() => {
    if (!menuOpen) return;
    function onPointerDown(e: PointerEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  function go(page: string) {
    setMenuOpen(false);
    onNavigate(page);
  }

  return (
    <header className="relative z-20 flex items-center gap-2 pt-4 sm:gap-4 sm:pt-6 lg:pt-8">
      <button
        type="button"
        onClick={onOpenMenu}
        aria-label="Open menu"
        aria-haspopup="dialog"
        className="-ml-2 flex size-11 shrink-0 items-center justify-center rounded-full text-ayur-ink transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-ayur-green sm:-ml-1"
      >
        <MenuIcon size={26} strokeWidth={1.7} />
      </button>

      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          go("Home");
        }}
        className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ayur-green sm:gap-3"
        aria-label="AyurIP home"
      >
        <BrandLogo size={64} className="h-10 w-auto min-[400px]:h-11 sm:h-14 lg:h-16" />
        <span className="flex flex-col">
          <span className="font-editorial text-[24px] font-semibold min-[400px]:text-[26px] leading-none tracking-[-0.01em] text-ayur-ink sm:text-[32px] lg:text-[36px]">
            AyurIP
          </span>
          <span className="mt-1 text-[10.5px] leading-[1.25] text-[#3c4640] sm:text-[12.5px] lg:text-[13.5px]">
            Tradition Protected
            <br />
            Innovation Empowered
          </span>
        </span>
      </a>

      <nav aria-label="Primary" className="ml-auto hidden lg:block">
        <ul className="flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                type="button"
                onClick={() => go(link)}
                aria-current={link === activePage ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-[14.5px] transition-colors hover:bg-white/70 hover:text-ayur-ink focus-visible:outline-2 focus-visible:outline-ayur-green ${
                  link === activePage ? "font-semibold text-ayur-ink" : "text-ayur-muted"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="ml-auto flex items-center gap-3 sm:gap-5 lg:ml-4">
        <button
          type="button"
          onClick={() => setHasUnread(false)}
          aria-label={hasUnread ? "Notifications, 1 unread" : "Notifications"}
          className="relative flex size-11 items-center justify-center rounded-full text-ayur-ink transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-ayur-green"
        >
          <BellIcon size={28} strokeWidth={1.6} />
          {hasUnread && (
            <span className="absolute right-[9px] top-[8px] size-2.5 rounded-full bg-[#e5484d] ring-2 ring-ayur-ivory" aria-hidden="true" />
          )}
        </button>

        <div ref={menuRef} className="relative">
          <button
            ref={buttonRef}
            type="button"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={user ? `Account menu for ${user.firstName}` : "Account and navigation menu"}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex size-12 items-center justify-center rounded-full bg-ayur-green-deep text-[20px] font-medium text-white shadow-[0_6px_16px_-8px_rgba(21,82,49,0.8)] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green sm:size-14 sm:text-[22px] lg:size-[60px]"
          >
            {user ? initials(user) : "U"}
          </button>

          {menuOpen && (
            <div
              id={menuId}
              role="menu"
              aria-label="Account and navigation"
              className="absolute right-0 top-[calc(100%+10px)] z-40 w-56 animate-rise rounded-2xl border border-ayur-line bg-white p-1.5 shadow-[0_20px_44px_-18px_rgba(18,32,31,0.35)] [animation-duration:180ms]"
            >
              <div className="lg:hidden">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link}
                    type="button"
                    role="menuitem"
                    onClick={() => go(link)}
                    className="block w-full rounded-xl px-3 py-2.5 text-left text-[14px] text-ayur-ink hover:bg-ayur-mint/70 focus-visible:bg-ayur-mint/70 focus-visible:outline-none"
                  >
                    {link}
                  </button>
                ))}
                <div className="my-1 h-px bg-ayur-line" role="separator" />
              </div>
              {user ? (
                <>
                  <div className="px-3 pb-2 pt-1.5">
                    <p className="truncate text-[14px] font-semibold text-ayur-ink">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="truncate text-[12.5px] text-ayur-muted">{user.email}</p>
                    {user.isDemo && (
                      <span className="mt-1.5 inline-block rounded-full bg-ayur-mint px-2 py-0.5 text-[11px] font-medium text-ayur-green">
                        Demo account
                      </span>
                    )}
                  </div>
                  <div className="my-1 h-px bg-ayur-line" role="separator" />
                  {["Saved", "History", "Settings"].map((page) => (
                    <button
                      key={page}
                      type="button"
                      role="menuitem"
                      onClick={() => go(page)}
                      className="block w-full rounded-xl px-3 py-2.5 text-left text-[14px] text-ayur-ink hover:bg-ayur-mint/70 focus-visible:bg-ayur-mint/70 focus-visible:outline-none"
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      auth.logout();
                      go("Home");
                    }}
                    className="block w-full rounded-xl px-3 py-2.5 text-left text-[14px] font-medium text-[#a2402f] hover:bg-[#f3e9e7] focus-visible:bg-[#f3e9e7] focus-visible:outline-none"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => go("Login")}
                  className="block w-full rounded-xl px-3 py-2.5 text-left text-[14px] font-medium text-ayur-green hover:bg-ayur-mint/70 focus-visible:bg-ayur-mint/70 focus-visible:outline-none"
                >
                  Sign in / Create account
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

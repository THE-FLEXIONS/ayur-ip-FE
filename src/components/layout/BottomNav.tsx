import type { ReactNode } from "react";

export type BottomNavKey = "home" | "search" | "ask" | "resources" | "profile";

type BottomNavProps = {
  active: BottomNavKey | null;
  onSelect: (key: BottomNavKey) => void;
};

// ─── Bottom navigation ──────────────────────────────────────────────────────
// App-wide tab bar for phones and tablets. Desktop keeps the top navigation and
// the sidebar, so the bar is hidden from the lg breakpoint up. App.tsx maps the
// tabs to pages and pads the page so nothing hides behind the bar.

/** Height of the bar above the safe-area inset; App.tsx pads pages by this much. */
export const BOTTOM_NAV_HEIGHT = 64;

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ITEMS: { key: BottomNavKey; label: string; icon: (active: boolean) => ReactNode }[] = [
  {
    key: "home",
    label: "Home",
    icon: () => (
      <Glyph>
        <path d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5H15v-5.5a3 3 0 0 0-6 0v5.5H5.5A1.5 1.5 0 0 1 4 19z" />
      </Glyph>
    ),
  },
  {
    key: "search",
    label: "Search",
    icon: () => (
      <Glyph>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m20 20-4.6-4.6" />
      </Glyph>
    ),
  },
  {
    key: "ask",
    label: "Ask",
    icon: () => (
      <Glyph>
        <path d="M5 4h14a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 19 17h-5l-2 2.5-2-2.5H5a1.5 1.5 0 0 1-1.5-1.5v-10A1.5 1.5 0 0 1 5 4z" />
        <path d="m8.5 10.5 2.5 2.5 4.5-4.5" />
      </Glyph>
    ),
  },
  {
    key: "resources",
    label: "Resources",
    icon: (active) =>
      active ? (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4.5" width="16" height="17.5" rx="2.6" fill="currentColor" />
          <rect x="8.25" y="2.25" width="7.5" height="4.5" rx="1.3" fill="currentColor" stroke="#fff" strokeWidth="1.3" />
          <path d="M8.5 12.2h7M8.5 16H13" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ) : (
        <Glyph>
          <rect x="4.5" y="4.5" width="15" height="17" rx="2.5" />
          <path d="M9 3h6v3H9zM8.5 12h7M8.5 15.7H13" />
        </Glyph>
      ),
  },
  {
    key: "profile",
    label: "Profile",
    icon: () => (
      <Glyph>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 20.5c.6-3.9 3.7-6.5 7.5-6.5s6.9 2.6 7.5 6.5z" />
      </Glyph>
    ),
  },
];

export default function BottomNav({ active, onSelect }: BottomNavProps) {
  return (
    <nav
      aria-label="App"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e4e7e3] bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      <ul className="mx-auto grid h-16 max-w-[640px] grid-cols-5">
        {ITEMS.map((item) => {
          const isActive = item.key === active;
          return (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => onSelect(item.key)}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-full w-full flex-col items-center justify-center gap-1 text-[12.5px] leading-none transition-[color,transform] duration-200 active:scale-95 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ayur-green ${
                  isActive ? "font-medium text-[#1d6a3f]" : "text-[#4a5668] hover:text-[#132033]"
                }`}
              >
                {item.icon(isActive)}
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

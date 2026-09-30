import { useEffect, useId, useRef } from "react";
import type { LanguageCode } from "../../../config/app";
import LanguageMenu from "./LanguageMenu";
import { PRIMARY_ITEMS, UTILITY_ITEMS, type SidebarKey } from "./navItems";
import { SidebarFloweringBranch, SidebarLeafOutlines } from "./SidebarArtwork";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarNavItem from "./SidebarNavItem";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  /** Item matching the current page, highlighted as active. */
  activeKey: SidebarKey | null;
  onSelect: (key: SidebarKey) => void;
  language: LanguageCode;
  onLanguageChange: (code: LanguageCode) => void;
};

/**
 * Off-canvas app menu. Slides in from the left over the page; the page behind
 * stays in place, stops scrolling and is made inert by the caller.
 */
export default function Sidebar({ open, onClose, activeKey, onSelect, language, onLanguageChange }: SidebarProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  // Focus, Escape and scroll lock while open.
  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 60);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    const { body, documentElement } = document;
    const scrollbar = window.innerWidth - documentElement.clientWidth;
    const prev = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = prev.overflow;
      body.style.paddingRight = prev.paddingRight;
      const target = returnFocusRef.current;
      if (target?.isConnected) target.focus({ preventScroll: true });
    };
  }, [open, onClose]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-[#0b1f14]/45 transition-opacity duration-300 motion-reduce:transition-none ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!open}
        className={`fixed inset-y-0 left-0 z-[70] flex w-[88vw] max-w-[360px] flex-col overflow-hidden rounded-r-[28px] bg-[linear-gradient(165deg,#215c38_0%,#1a4d2f_38%,#143f26_100%)] shadow-[16px_0_48px_-16px_rgba(5,25,12,0.55)] transition-[transform,visibility] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:w-[380px] sm:max-w-none lg:w-[400px] 2xl:w-[420px] ${
          open ? "visible translate-x-0" : "invisible -translate-x-[105%]"
        }`}
      >
        {/* faint light from the top-left, like the reference's natural gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_30%_at_15%_0%,rgba(120,180,110,0.28),transparent_70%)]"
        />
        <SidebarLeafOutlines />

        <SidebarHeader titleId={titleId} onClose={onClose} closeRef={closeRef} />

        <nav
          aria-label="Main menu"
          className="relative z-10 mr-[14%] min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-tr-[22px] bg-[#f6f5ee] px-2 pb-[100px] pt-2.5 shadow-[4px_0_18px_-10px_rgba(0,0,0,0.35)] [scrollbar-width:thin] sm:pb-[104px] [@media(max-height:860px)]:pb-[92px]"
        >
          <ul>
            {PRIMARY_ITEMS.map((item) => (
              <li key={item.key}>
                <SidebarNavItem
                  icon={item.icon}
                  label={item.label}
                  active={activeKey === item.key}
                  onClick={() => onSelect(item.key)}
                />
              </li>
            ))}
          </ul>

          <div role="separator" className="mx-3 my-2.5 h-px bg-[#d6dfd2]" />

          <ul>
            <li>
              <LanguageMenu value={language} onChange={onLanguageChange} />
            </li>
            {UTILITY_ITEMS.map((item) => (
              <li key={item.key}>
                <SidebarNavItem
                  icon={item.icon}
                  label={item.label}
                  active={activeKey === item.key}
                  onClick={() => onSelect(item.key)}
                />
              </li>
            ))}
          </ul>
        </nav>

        <SidebarFooter />
        <SidebarFloweringBranch />
      </aside>
    </>
  );
}

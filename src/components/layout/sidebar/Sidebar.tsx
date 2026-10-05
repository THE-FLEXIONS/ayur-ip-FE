import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { LanguageCode } from "../../../config/app";
import LanguageMenu from "./LanguageMenu";
import { PRIMARY_GROUPS, PRIMARY_ITEMS, UTILITY_ITEMS, type SidebarKey } from "./navItems";
import { SidebarFloweringBranch, SidebarLeafOutlines } from "./SidebarArtwork";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarNavItem from "./SidebarNavItem";

type SidebarItemIcon = (typeof PRIMARY_ITEMS)[number]["icon"];

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  /** Item matching the current page, highlighted as active. */
  activeKey: SidebarKey | null;
  onSelect: (key: SidebarKey) => void;
  language: LanguageCode;
  onLanguageChange: (code: LanguageCode) => void;
  /**
   * Docked beside the page (app pages on desktop) instead of sliding over it:
   * always visible, not modal, no close button.
   */
  docked?: boolean;
  /** Small counts shown next to items, e.g. { saved: 3 }. */
  counts?: Partial<Record<SidebarKey, number>>;
};

/** Width of the docked sidebar; the page is padded by the same amount. */
export const DOCKED_SIDEBAR_WIDTH = 272;

// Opening glides out and settles; closing is quicker and accelerates away.
const OPEN_EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const CLOSE_EASE = "ease-[cubic-bezier(0.4,0,0.6,1)]";

/** Swipe distance (share of the panel width) or speed (px/ms) that closes it. */
const SWIPE_CLOSE_RATIO = 0.3;
const SWIPE_CLOSE_VELOCITY = 0.45;

type Drag = { x: number; y: number; t: number; dx: number; horizontal: boolean | null };

/**
 * App menu. On phones, tablets and the marketing pages it is an off-canvas
 * drawer: it slides in over the page, which stops scrolling and is made inert
 * by the caller, and on touch screens it can be swiped back to close. On the
 * app pages at desktop widths it is docked beside the content instead.
 */
export default function Sidebar({ open, onClose, activeKey, onSelect, language, onLanguageChange, docked = false, counts = {} }: SidebarProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const dragRef = useRef<Drag | null>(null);
  const [dragX, setDragX] = useState<number | null>(null);

  // Focus, Escape and scroll lock while open.
  useEffect(() => {
    if (!open || docked) return;
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
  }, [open, onClose, docked]);

  // ── Swipe to close (touch and pen only) ──
  function onPointerDown(e: PointerEvent<HTMLElement>) {
    if (!open || docked || e.pointerType === "mouse") return;
    dragRef.current = { x: e.clientX, y: e.clientY, t: e.timeStamp, dx: 0, horizontal: null };
  }

  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const drag = dragRef.current;
    if (!drag) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    if (drag.horizontal === null) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      // Decide once per gesture: sideways drags move the panel, vertical ones scroll the menu.
      drag.horizontal = Math.abs(dx) > Math.abs(dy);
      if (!drag.horizontal) return;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (!drag.horizontal) return;
    drag.dx = Math.min(0, dx);
    setDragX(drag.dx);
  }

  function endDrag(e: PointerEvent<HTMLElement>) {
    const drag = dragRef.current;
    dragRef.current = null;
    if (!drag?.horizontal) return;
    const width = panelRef.current?.offsetWidth ?? 300;
    const velocity = drag.dx / Math.max(1, e.timeStamp - drag.t);
    setDragX(null);
    if (e.type === "pointerup" && (drag.dx < -width * SWIPE_CLOSE_RATIO || velocity < -SWIPE_CLOSE_VELOCITY)) onClose();
  }

  const dragging = dragX !== null;
  const panelWidth = panelRef.current?.offsetWidth ?? 300;
  const dragProgress = dragging ? Math.max(0, 1 + dragX / panelWidth) : 1;

  const panelStyle: CSSProperties | undefined = dragging ? { translate: `${dragX}px 0`, transition: "none" } : undefined;
  const backdropStyle: CSSProperties | undefined = dragging ? { opacity: dragProgress, transition: "none" } : undefined;

  /** Fades and slides a block in after the panel starts moving; leaves at once on close. */
  function reveal(delayMs: number): CSSProperties | undefined {
    if (docked) return undefined;
    return { transitionDelay: open ? `${delayMs}ms` : "0ms" };
  }
  const revealClass = docked
    ? ""
    : `transition-[opacity,translate] motion-reduce:transition-none ${
        open ? `translate-x-0 opacity-100 duration-[420ms] ${OPEN_EASE}` : `-translate-x-3 opacity-0 duration-150 ${CLOSE_EASE}`
      }`;

  // Rows fade in one after another when the drawer opens.
  let row = 0;
  const nextDelay = () => 110 + row++ * 24;

  function navRow(key: SidebarKey, label: string, icon: SidebarItemIcon) {
    const count = counts[key];
    return (
      <li key={key} className={revealClass} style={reveal(nextDelay())}>
        <SidebarNavItem
          icon={icon}
          label={label}
          active={activeKey === key}
          onClick={() => onSelect(key)}
          trailing={
            count ? (
              <span className="min-w-6 rounded-full bg-[#e2ebdd] px-1.5 py-0.5 text-center text-[11.5px] font-semibold tabular-nums text-[#24603b]">
                {count > 99 ? "99+" : count}
                <span className="sr-only"> items</span>
              </span>
            ) : undefined
          }
        />
      </li>
    );
  }

  return (
    <>
      {!docked && (
        <div
          aria-hidden="true"
          onClick={onClose}
          style={backdropStyle}
          className={`fixed inset-0 z-[60] bg-[#0b1f14]/40 backdrop-blur-[2px] transition-opacity motion-reduce:transition-none ${
            open ? `opacity-100 duration-[380ms] ${OPEN_EASE}` : `pointer-events-none opacity-0 duration-[280ms] ${CLOSE_EASE}`
          }`}
        />
      )}

      <aside
        ref={panelRef}
        role={docked ? undefined : "dialog"}
        aria-modal={docked ? undefined : true}
        aria-labelledby={titleId}
        aria-hidden={docked ? undefined : !open}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={docked ? { width: DOCKED_SIDEBAR_WIDTH } : panelStyle}
        className={`fixed inset-y-0 left-0 flex flex-col overflow-hidden bg-[linear-gradient(165deg,#215c38_0%,#1a4d2f_38%,#143f26_100%)] print:hidden ${
          docked
            ? "z-40 shadow-[6px_0_30px_-18px_rgba(5,25,12,0.5)]"
            : `z-[70] w-[84vw] max-w-[300px] touch-pan-y rounded-r-[24px] transition-[translate,visibility,box-shadow] will-change-[translate] motion-reduce:transition-none sm:w-[300px] lg:w-[312px] ${
                open
                  ? `visible translate-x-0 shadow-[18px_0_50px_-18px_rgba(5,25,12,0.6)] duration-[460ms] ${OPEN_EASE}`
                  : `invisible -translate-x-[calc(100%+24px)] shadow-none duration-[300ms] ${CLOSE_EASE}`
              }`
        }`}
      >
        {/* faint light from the top-left, like the reference's natural gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_30%_at_15%_0%,rgba(120,180,110,0.28),transparent_70%)]"
        />
        <SidebarLeafOutlines />

        <div className={revealClass} style={reveal(60)}>
          <SidebarHeader titleId={titleId} onClose={docked ? undefined : onClose} closeRef={closeRef} />
        </div>

        <nav
          aria-label="Main menu"
          className="relative z-10 mr-[11%] min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-tr-[20px] bg-[#f6f5ee] px-1.5 pb-[88px] pt-1 shadow-[4px_0_18px_-10px_rgba(0,0,0,0.35)] [scrollbar-width:thin] [@media(max-height:700px)]:pb-3"
        >
          {PRIMARY_GROUPS.map((group) => (
            <div key={group.label} className="pt-1.5">
              <p
                className={`px-3.5 pb-1 pt-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#7b857c] ${revealClass}`}
                style={reveal(nextDelay())}
              >
                {group.label}
              </p>
              <ul>{group.items.map((it) => navRow(it.key, it.label, it.icon))}</ul>
            </div>
          ))}

          <div role="separator" className="mx-3 my-2 h-px bg-[#d6dfd2]" />

          <ul>
            <li className={revealClass} style={reveal(nextDelay())}>
              <LanguageMenu value={language} onChange={onLanguageChange} />
            </li>
            {UTILITY_ITEMS.map((it) => navRow(it.key, it.label, it.icon))}
          </ul>
        </nav>

        <SidebarFooter />
        <SidebarFloweringBranch />
      </aside>
    </>
  );
}

import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent } from "react";
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

// Opening glides out and settles; closing is quicker and accelerates away.
const OPEN_EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const CLOSE_EASE = "ease-[cubic-bezier(0.4,0,0.6,1)]";

/** Swipe distance (share of the panel width) or speed (px/ms) that closes it. */
const SWIPE_CLOSE_RATIO = 0.3;
const SWIPE_CLOSE_VELOCITY = 0.45;

type Drag = { x: number; y: number; t: number; dx: number; horizontal: boolean | null };

/**
 * Off-canvas app menu. Slides in from the left over the page; the page behind
 * stays in place, stops scrolling and is made inert by the caller. On touch
 * screens it can be swiped back to the left to close.
 */
export default function Sidebar({ open, onClose, activeKey, onSelect, language, onLanguageChange }: SidebarProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const dragRef = useRef<Drag | null>(null);
  const [dragX, setDragX] = useState<number | null>(null);

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

  // ── Swipe to close (touch and pen only) ──
  function onPointerDown(e: PointerEvent<HTMLElement>) {
    if (!open || e.pointerType === "mouse") return;
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
  function reveal(delayMs: number): CSSProperties {
    return { transitionDelay: open ? `${delayMs}ms` : "0ms" };
  }
  const revealClass = `transition-[opacity,translate] motion-reduce:transition-none ${
    open ? `translate-x-0 opacity-100 duration-[420ms] ${OPEN_EASE}` : `-translate-x-3 opacity-0 duration-150 ${CLOSE_EASE}`
  }`;

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        style={backdropStyle}
        className={`fixed inset-0 z-[60] bg-[#0b1f14]/40 backdrop-blur-[2px] transition-opacity motion-reduce:transition-none ${
          open ? `opacity-100 duration-[380ms] ${OPEN_EASE}` : `pointer-events-none opacity-0 duration-[280ms] ${CLOSE_EASE}`
        }`}
      />

      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!open}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={panelStyle}
        className={`fixed inset-y-0 left-0 z-[70] flex w-[80vw] max-w-[300px] touch-pan-y flex-col overflow-hidden rounded-r-[24px] bg-[linear-gradient(165deg,#215c38_0%,#1a4d2f_38%,#143f26_100%)] transition-[translate,visibility,box-shadow] will-change-[translate] motion-reduce:transition-none sm:w-[300px] lg:w-[312px] ${
          open
            ? `visible translate-x-0 shadow-[18px_0_50px_-18px_rgba(5,25,12,0.6)] duration-[460ms] ${OPEN_EASE}`
            : `invisible -translate-x-[calc(100%+24px)] shadow-none duration-[300ms] ${CLOSE_EASE}`
        }`}
      >
        {/* faint light from the top-left, like the reference's natural gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_30%_at_15%_0%,rgba(120,180,110,0.28),transparent_70%)]"
        />
        <SidebarLeafOutlines />

        <div className={revealClass} style={reveal(60)}>
          <SidebarHeader titleId={titleId} onClose={onClose} closeRef={closeRef} />
        </div>

        <nav
          aria-label="Main menu"
          className="relative z-10 mr-[11%] min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-tr-[20px] bg-[#f6f5ee] px-1.5 pb-[88px] pt-2 shadow-[4px_0_18px_-10px_rgba(0,0,0,0.35)] [scrollbar-width:thin] [@media(max-height:760px)]:pb-[80px]"
        >
          <ul>
            {PRIMARY_ITEMS.map((item, i) => (
              <li key={item.key} className={revealClass} style={reveal(110 + i * 28)}>
                <SidebarNavItem
                  icon={item.icon}
                  label={item.label}
                  active={activeKey === item.key}
                  onClick={() => onSelect(item.key)}
                />
              </li>
            ))}
          </ul>

          <div role="separator" className="mx-3 my-2 h-px bg-[#d6dfd2]" />

          <ul>
            <li className={revealClass} style={reveal(110 + PRIMARY_ITEMS.length * 28)}>
              <LanguageMenu value={language} onChange={onLanguageChange} />
            </li>
            {UTILITY_ITEMS.map((item, i) => (
              <li key={item.key} className={revealClass} style={reveal(110 + (PRIMARY_ITEMS.length + 1 + i) * 28)}>
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

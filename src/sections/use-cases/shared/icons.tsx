// ─── Icons ────────────────────────────────────────────────────────────────

export function ArrowRight({ color = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeft({ color = "currentColor", size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d="M15 9H3M7 4L2 9l5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPersonSm({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="6.5" r="3" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M3.5 17c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function IconFlask({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M8 2v5L3.5 15a1.5 1.5 0 001.3 2.3h10.4A1.5 1.5 0 0016.5 15L12 7V2" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M7 2h6M6 12h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconLeafSm({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 17C4 8 9 3 17 4C11 8 8 13 10 18" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M4 17C4 13 8 9 12 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function IconBookSm({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 4.5C3 4.5 5 3.5 7 3.5C9 3.5 10 4.5 10 4.5V16C10 16 9 15 7 15C5 15 3 16 3 16V4.5Z" stroke={color} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M17 4.5C17 4.5 15 3.5 13 3.5C11 3.5 10 4.5 10 4.5V16C10 16 11 15 13 15C15 15 17 16 17 16V4.5Z" stroke={color} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBulb({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2a5.5 5.5 0 00-3.3 9.9c.5.4.8 1 .8 1.6v.5h5v-.5c0-.6.3-1.2.8-1.6A5.5 5.5 0 0010 2z" stroke={color} strokeWidth="1.4" fill="none" />
      <path d="M7.5 17h5M8 15h4" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconBank({ color = "#1a4028" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3 6h14L10 2z" stroke={color} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M5 9v6M8.5 9v6M11.5 9v6M15 9v6M3 17h14" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ChipDot({ color }: { color: string }) {
  return <span className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ background: color }} />;
}

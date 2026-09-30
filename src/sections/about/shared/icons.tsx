// ─── Icons ──────────────────────────────────────────────────────────────────

export function IconLeafSmall() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 16C5 9 9 3 17 5c-4 3-6 8-4 13" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
      <path d="M5 16C5 13 8 10 11 10" stroke="#1a4d2e" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function IconShieldSm() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L3 5v6c0 4 3 7 7 8 4-1 7-4 7-8V5L10 2z" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
      <path d="M7 10l2.5 2.5L13 8" stroke="#1a4d2e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBarChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="10" width="4" height="8" rx="1" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
      <rect x="8" y="6" width="4" height="12" rx="1" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
      <rect x="14" y="2" width="4" height="16" rx="1" stroke="#1a4d2e" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

export function IconLeafCircle({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M7 22C7 12 12 5 22 7c-5 4-7 11-5 18" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M7 22C7 18 11 14 15 14" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function IconUsers({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="8" r="3.5" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M3 22c0-4 3-6.5 7-6.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <circle cx="19" cy="8" r="3.5" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M17 15.5c3.5 0 7 2.5 7 6.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function IconBulb({ color = "#6b5dd3" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4a7 7 0 015 11.9V18a1 1 0 01-1 1h-8a1 1 0 01-1-1v-2.1A7 7 0 0114 4z" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M11 21h6M12 24h4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconGlobe({ color = "#1a6cb5" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="1.6" fill="none" />
      <ellipse cx="14" cy="14" rx="4.5" ry="10" stroke={color} strokeWidth="1.6" fill="none" />
      <path d="M4 14h20M6.5 8h15M6.5 20h15" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function IconTarget({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="1.6" fill="none" />
      <circle cx="14" cy="14" r="6" stroke={color} strokeWidth="1.6" fill="none" />
      <circle cx="14" cy="14" r="2.5" fill={color} />
    </svg>
  );
}

export function IconEye({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M2 14s4-8 12-8 12 8 12 8-4 8-12 8S2 14 2 14z" stroke={color} strokeWidth="1.6" fill="none" />
      <circle cx="14" cy="14" r="3.5" stroke={color} strokeWidth="1.6" fill="none" />
    </svg>
  );
}

export function IconHeart({ color = "#c0392b" }: { color?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 23S4 16.5 4 9.5A5 5 0 0114 8a5 5 0 0110 1.5C24 16.5 14 23 14 23z" stroke={color} strokeWidth="1.6" fill="none" />
    </svg>
  );
}

export function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSeedling({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 30V16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 20C18 20 10 18 8 10c5 0 10 4 10 10z" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <path d="M18 16C18 16 26 14 28 6c-5 0-10 4-10 10z" stroke={color} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBooks({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="6" width="12" height="24" rx="1.5" stroke={color} strokeWidth="1.8" fill="none" />
      <rect x="14" y="10" width="10" height="20" rx="1.5" stroke={color} strokeWidth="1.8" fill="none" />
      <path d="M8 14h4M8 18h4M8 22h3" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconBulbLg({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 5a9 9 0 016 15.4V23a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 0112 23v-2.6A9 9 0 0118 5z" stroke={color} strokeWidth="1.8" fill="none" />
      <path d="M14 27h8M15 30h6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconGlobeLg({ color = "#2d6a4f" }: { color?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="13" stroke={color} strokeWidth="1.8" fill="none" />
      <ellipse cx="18" cy="18" rx="5.5" ry="13" stroke={color} strokeWidth="1.8" fill="none" />
      <path d="M5 18h26M8 10h20M8 26h20" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

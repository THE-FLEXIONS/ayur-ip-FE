// ─── Footer-only marks ──────────────────────────────────────────────────────
// The three-leaf brand mark, the newsletter sprout and the social glyphs.

/** Three-leaf fan used beside the IP-SAKTI wordmark. */
export function LeafFanMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 68 60" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="footer-leaf-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#58a34a" />
          <stop offset="1" stopColor="#1f5f2c" />
        </linearGradient>
        <linearGradient id="footer-leaf-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6db352" />
          <stop offset="1" stopColor="#24692f" />
        </linearGradient>
      </defs>
      <path d="M31 58 C14 54 3 41 1 22 C17 26 29 38 31 58Z" fill="url(#footer-leaf-a)" />
      <path d="M37 58 C54 54 65 41 67 22 C51 26 39 38 37 58Z" fill="url(#footer-leaf-b)" />
      <path d="M34 58 C22 46 21 22 34 2 C47 22 46 46 34 58Z" fill="#2f7a37" />
      <path d="M34 56 V12 M31 56 C24 46 15 35 6 28 M37 56 C44 46 53 35 62 28" stroke="#e8f3e3" strokeOpacity="0.7" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

/** Single leaf on a curved stem, for the "Stay Updated" card. */
export function SproutIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true" className={className}>
      <path d="M17 42 C16 32 19 23 27 15" stroke="#245c34" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22 26 C21 13 29 4 42 2 C42 16 34 25 22 26Z" fill="#2f7a37" />
      <path d="M17 31 C9 31 3 26 2 18 C10 18 16 23 17 31Z" fill="#4f9a44" />
      <path d="M23 24 C28 17 33 11 39 6" stroke="#e8f3e3" strokeOpacity="0.7" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

type GlyphProps = { className?: string };

export function XGlyph({ className = "" }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43z" />
    </svg>
  );
}

export function LinkedInGlyph({ className = "" }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.75h4V21H3V9.75zM9.5 9.75h3.83v1.54h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.92 1.3-1.92 2.65V21h-4V9.75z" />
    </svg>
  );
}

export function YouTubeGlyph({ className = "" }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M22.5 7.2a2.8 2.8 0 00-2-2C18.8 4.8 12 4.8 12 4.8s-6.8 0-8.5.4a2.8 2.8 0 00-2 2C1.1 8.9 1.1 12 1.1 12s0 3.1.4 4.8a2.8 2.8 0 002 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 002-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM9.8 15.2V8.8l5.6 3.2-5.6 3.2z" />
    </svg>
  );
}

export function InstagramGlyph({ className = "" }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

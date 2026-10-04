// ─── Brand ───────────────────────────────────────────────────────────────────
// The AyurIP logo lives on Cloudinary. The original sits on an off-white square,
// so every URL makes that background transparent and trims the empty margin
// (e_make_transparent + e_trim). PNG keeps the transparency in every browser.

const LOGO_BASE = "https://res.cloudinary.com/cyymn1yh/image/upload/e_make_transparent:12/e_trim";
const LOGO_ID = "ayurip-logo";

/** Width ÷ height of the trimmed logo. */
export const LOGO_ASPECT = 1216 / 1414;

/** Transparent logo scaled to `height` device pixels. */
export function logoUrl(height: number): string {
  return `${LOGO_BASE}/c_scale,h_${height}/f_png/${LOGO_ID}`;
}

/** Square transparent logo for the browser tab. */
export const FAVICON_URL = `${LOGO_BASE}/c_pad,w_64,h_64,b_transparent/f_png/${LOGO_ID}`;

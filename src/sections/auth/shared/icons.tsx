// ─── Brand ──────────────────────────────────────────────────────────────────

export function LeafLogo() {
  return (
    <svg width="38" height="34" viewBox="0 0 40 36" fill="none">
      <ellipse cx="20" cy="18" rx="18" ry="16" fill="#d8f3dc" />
      <path
        d="M12 28 C12 16 20 8 28 10 C22 14 18 22 20 30"
        stroke="#1a4028"
        strokeWidth="2"
        fill="#40916c"
        fillOpacity="0.5"
      />
      <path d="M20 10 C20 10 14 18 16 28" stroke="#1a4028" strokeWidth="1.5" fill="none" />
      <path
        d="M10 20 C10 20 6 12 14 8 C14 16 10 22 18 28"
        stroke="#2d6a4f"
        strokeWidth="1.5"
        fill="#40916c"
        fillOpacity="0.4"
      />
      <path
        d="M22 8 C22 8 30 12 28 22 C22 20 20 14 22 8"
        stroke="#1a4028"
        strokeWidth="1.5"
        fill="#40916c"
        fillOpacity="0.6"
      />
    </svg>
  );
}

// ─── Left panel icons ───────────────────────────────────────────────────────

export function IconLeafSm() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 17 C5 9 10 3 18 5 C13 8 10 14 12 18"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M5 17 C6 13 9 10 12 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function IconBrainSm() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 3.5C7.5 3.5 5 5.5 5 8c0 1 .4 1.8 1 2.4C5.2 11.1 4.5 12.2 4.5 13.5c0 2 1.8 3.5 4 3.5.7 0 1.4-.2 2-.5"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M10 3.5c2.5 0 5 2 5 4.5 0 1-.4 1.8-1 2.4.7.6 1.5 1.7 1.5 3 0 2-1.8 3.5-4 3.5-.7 0-1.4-.2-2-.5"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M10 3.5v10M7.5 8h5M7.5 11.5h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function IconShieldSm() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2L3 5v5.5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V5L10 2z"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
      />
      <path
        d="M7 10l2.5 2.5 3.5-4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Form icons ─────────────────────────────────────────────────────────────

export function IconUser() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5" r="3" stroke="#9ca3af" strokeWidth="1.3" fill="none" />
      <path
        d="M2 14c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"
        stroke="#9ca3af"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function IconMailSm() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#9ca3af" strokeWidth="1.3" fill="none" />
      <path d="M1.5 5.5l6.5 4 6.5-4" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function IconLockSm() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="2.5" y="7" width="11" height="7.5" rx="1.5" stroke="#9ca3af" strokeWidth="1.3" fill="none" />
      <path d="M4.5 7V5.5a3.5 3.5 0 017 0V7" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="11" r="1" fill="#9ca3af" />
    </svg>
  );
}

export function IconEyeSm({ visible }: { visible: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      {visible ? (
        <>
          <path
            d="M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z"
            stroke="#9ca3af"
            strokeWidth="1.3"
            fill="none"
          />
          <circle cx="8" cy="8" r="2" stroke="#9ca3af" strokeWidth="1.3" fill="none" />
        </>
      ) : (
        <>
          <path
            d="M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z"
            stroke="#9ca3af"
            strokeWidth="1.3"
            fill="none"
          />
          <circle cx="8" cy="8" r="2" stroke="#9ca3af" strokeWidth="1.3" fill="none" />
          <path d="M2 2l12 12" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function IconShieldCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.5L2 4.5v5c0 3.5 2.5 5.8 6 7 3.5-1.2 6-3.5 6-7v-5L8 1.5z"
        stroke="#2d6a4f"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M5.5 8.5l2 2L11 7"
        stroke="#2d6a4f"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Google / Microsoft SVGs ─────────────────────────────────────────────────

export function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function MicrosoftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
      <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
      <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
    </svg>
  );
}

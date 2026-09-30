// ─── Icons ────────────────────────────────────────────────────────────────

export function ArrowRight({ color = "currentColor", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLeafCircle({ bg = "#e8f5e9" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 20C6 10 12 3 20 5C14 9 10 16 12 22" stroke="#2d6a4f" strokeWidth="1.6" fill="none" />
        <path d="M6 20C6 16 10 12 14 12" stroke="#2d6a4f" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export function IconDoc({ bg = "#fff8ec" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="2" width="14" height="18" rx="2" stroke="#b45309" strokeWidth="1.5" fill="none" />
        <path d="M8 7h6M8 11h6M8 15h4" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function IconSearch({ bg = "#eff6ff" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="10" cy="10" r="6" stroke="#2563eb" strokeWidth="1.5" fill="none" />
        <path d="M15 15l4 4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function IconPeople({ bg = "#f5f0ff" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke="#7c3aed" strokeWidth="1.4" fill="none" />
        <path d="M3 21c0-3.3 2.7-6 6-6" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="17" cy="7" r="3" stroke="#7c3aed" strokeWidth="1.4" fill="none" />
        <path d="M15 15c3.3 0 6 2.7 6 6" stroke="#7c3aed" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export function IconShieldCheck({ bg = "#f0fdf4" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v7c0 5 3.6 9.3 8 11 4.4-1.7 8-6 8-11V6L12 2z" stroke="#16a34a" strokeWidth="1.5" fill="none" />
        <path d="M9 12l2.5 2.5L15 9" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function IconChart({ bg = "#fff7ed" }: { bg?: string }) {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="12" width="4" height="9" rx="1" fill="#ea580c" fillOpacity="0.5" stroke="#ea580c" strokeWidth="1.2" />
        <rect x="10" y="7" width="4" height="14" rx="1" fill="#ea580c" fillOpacity="0.5" stroke="#ea580c" strokeWidth="1.2" />
        <rect x="17" y="3" width="4" height="18" rx="1" fill="#ea580c" fillOpacity="0.5" stroke="#ea580c" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

export function IconSearchStep() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#d8f3dc", border: "2px solid #b7e4c7" }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 18C5 9 10 3 18 5C12 9 8 15 10 20" stroke="#1a4028" strokeWidth="1.5" fill="none" />
        <path d="M5 18C5 14 9 10 13 10" stroke="#1a4028" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export function IconDocStep() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#d8f3dc", border: "2px solid #b7e4c7" }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="2" width="13" height="17" rx="2" stroke="#1a4028" strokeWidth="1.4" fill="none" />
        <path d="M7 7h7M7 11h7M7 15h4" stroke="#1a4028" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function IconPersonStep() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#d8f3dc", border: "2px solid #b7e4c7" }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="3.5" stroke="#1a4028" strokeWidth="1.4" fill="none" />
        <path d="M4 20c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#1a4028" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export function IconSparkleStep() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#d8f3dc", border: "2px solid #b7e4c7" }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l2 5.5L18 10l-5.5 2L11 18l-2-5.5L4 10l5.5-2L11 3z" stroke="#1a4028" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function IconLock() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="12" width="18" height="13" rx="3" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M9 12V9a5 5 0 0110 0v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="14" cy="18" r="1.5" fill="white" />
        <path d="M14 18v3" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function IconPreserve() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16C4 8 9 3 16 5C11 8 8 13 10 18" stroke="#74c99a" strokeWidth="1.4" fill="none" />
        <path d="M4 16C4 13 8 10 11 10" stroke="#74c99a" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export function IconEmpower() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="8" cy="6" r="2.5" stroke="#74c99a" strokeWidth="1.3" fill="none" />
        <path d="M3 17c0-2.8 2.2-5 5-5" stroke="#74c99a" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <circle cx="14" cy="6" r="2.5" stroke="#74c99a" strokeWidth="1.3" fill="none" />
        <path d="M12 12c2.8 0 5 2.2 5 5" stroke="#74c99a" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export function IconGlobe() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#74c99a" strokeWidth="1.3" fill="none" />
        <ellipse cx="10" cy="10" rx="3.5" ry="7" stroke="#74c99a" strokeWidth="1.3" fill="none" />
        <path d="M3 10h14M5 6.5h10M5 13.5h10" stroke="#74c99a" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

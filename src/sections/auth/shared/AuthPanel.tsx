import type { ReactNode } from "react";

// Right half of the auth card: decoration, the "switch form" link and the
// footer tags shared by the sign-in and sign-up forms.

type AuthPanelProps = {
  switchPrompt: string;
  switchLabel: string;
  onSwitch: () => void;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthPanel({ switchPrompt, switchLabel, onSwitch, title, subtitle, children }: AuthPanelProps) {
  return (
    <div className="flex-1 relative overflow-hidden" style={{ background: "white", minWidth: 0 }}>
      {/* Decorative leaf illustration — bottom right */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none" style={{ width: 180, height: 240 }}>
        <svg viewBox="0 0 180 240" fill="none" className="w-full h-full" aria-hidden="true">
          <path d="M165 240 C160 155 105 105 125 55 C148 130 178 175 168 240" fill="#2d6a4f" fillOpacity="0.09" />
          <path d="M180 225 C178 140 135 95 152 45 C170 125 195 170 185 240" fill="#40916c" fillOpacity="0.07" />
          <path d="M148 240 C142 160 95 115 112 65 C138 145 162 190 155 240" fill="#1a4028" fillOpacity="0.06" />
          <path d="M148 230 C135 185 118 145 132 95" stroke="#2d6a4f" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
          <path d="M168 225 C158 182 145 148 157 105" stroke="#40916c" strokeWidth="1.2" strokeOpacity="0.18" fill="none" />
        </svg>
      </div>

      {/* Switch between sign in and sign up — top right */}
      <div className="absolute top-4 right-5 flex items-center gap-1.5 z-10 sm:top-5 sm:right-6">
        <span className="text-xs" style={{ color: "#9ca3af" }}>
          {switchPrompt}
        </span>
        <button
          type="button"
          onClick={onSwitch}
          className="flex items-center gap-1 text-xs font-semibold hover:opacity-75 transition-opacity"
          style={{ color: "#111827" }}
        >
          {switchLabel}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="relative h-full flex flex-col justify-center px-5 pb-6 pt-14 sm:px-9 sm:pb-8">
        <h2
          className="text-[26px] sm:text-3xl font-bold mb-1"
          style={{ color: "#111827", fontWeight: 700, letterSpacing: "-0.025em" }}
        >
          {title}
        </h2>
        <p className="text-sm mb-5" style={{ color: "#6b7280" }}>
          {subtitle}
        </p>

        {children}

        {/* Bottom footer tags */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-4 border-t"
          style={{ borderColor: "#f3f4f6" }}
        >
          {["TRADITION", "TECHNOLOGY", "PEOPLE", "IMPACT"].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              {i > 0 && <span style={{ color: "#e5e7eb", fontSize: 11 }}>|</span>}
              <span style={{ color: "#c0c0c0", fontSize: 9, fontWeight: 700, letterSpacing: "0.15em" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Full-width dark green submit button with a spinner while busy. */
export function SubmitButton({ busy, children }: { busy: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={busy}
      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-70 disabled:cursor-wait mb-3"
      style={{ background: "#1a4028" }}
    >
      {busy ? (
        <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
      ) : null}
      {children}
      {!busy && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

/** Form-level error or info message. */
export function FormAlert({ tone = "error", children }: { tone?: "error" | "info"; children: ReactNode }) {
  const styles =
    tone === "error"
      ? { background: "#fdf4f2", borderColor: "#f0d6d0", color: "#8a3325" }
      : { background: "#f0f7f2", borderColor: "#c3e6cc", color: "#1a4028" };
  return (
    <div role={tone === "error" ? "alert" : "status"} className="mb-4 rounded-xl border px-3.5 py-2.5 text-[13px] leading-snug" style={styles}>
      {children}
    </div>
  );
}

import { useState } from "react";

const LEFT_PANEL_IMG =
  "https://images.unsplash.com/photo-1776917983194-9d5c73b1ec16?w=1400&h=950&fit=crop&auto=format";
const PAGE_BG_IMG =
  "https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?w=1400&h=900&fit=crop&auto=format";

// ─── Brand ──────────────────────────────────────────────────────────────────

function LeafLogo() {
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

function IconLeafSm() {
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

function IconBrainSm() {
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

function IconShieldSm() {
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

function IconUser() {
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

function IconMailSm() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#9ca3af" strokeWidth="1.3" fill="none" />
      <path d="M1.5 5.5l6.5 4 6.5-4" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconLockSm() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="2.5" y="7" width="11" height="7.5" rx="1.5" stroke="#9ca3af" strokeWidth="1.3" fill="none" />
      <path d="M4.5 7V5.5a3.5 3.5 0 017 0V7" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="11" r="1" fill="#9ca3af" />
    </svg>
  );
}

function IconEyeSm({ visible }: { visible: boolean }) {
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

function IconShieldCheck() {
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

function GoogleIcon() {
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

function MicrosoftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
      <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
      <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
    </svg>
  );
}

// ─── Shared input wrapper ────────────────────────────────────────────────────

function InputField({
  icon,
  label,
  type,
  placeholder,
  value,
  onChange,
  suffix,
}: {
  icon: React.ReactNode;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-xs font-semibold mb-1.5"
        style={{ color: "#374151", letterSpacing: "0.01em" }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-2.5 border rounded-xl px-3 py-2.5 transition-shadow focus-within:shadow-[0_0_0_3px_rgba(45,106,79,0.12)]"
        style={{ borderColor: "#d1d5db", background: "white" }}
      >
        <span className="flex-shrink-0">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 text-sm outline-none bg-transparent placeholder-gray-400"
          style={{ color: "#111827" }}
        />
        {suffix}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function LoginPage({ onBack }: { onBack: () => void }) {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });

  const update = (key: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  const features = [
    { icon: <IconLeafSm />, lines: ["Access", "Authentic", "Knowledge"] },
    { icon: <IconBrainSm />, lines: ["Turn Ideas", "into Impact"] },
    { icon: <IconShieldSm />, lines: ["Your Rights,", "Our Priority"] },
  ];

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 relative overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Page blurred background */}
      <div className="absolute inset-0">
        <img
          src={PAGE_BG_IMG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ filter: "blur(18px) brightness(0.45)", transform: "scale(1.08)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,39,23,0.55)" }}
        />
      </div>

      {/* Main card */}
      <div
        className="relative z-10 w-full max-w-5xl flex overflow-hidden"
        style={{
          borderRadius: 20,
          boxShadow: "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)",
          minHeight: 660,
        }}
      >
        {/* ════════════════ LEFT PANEL ════════════════ */}
        <div className="relative flex-none overflow-hidden" style={{ width: "56%" }}>
          {/* Background photo */}
          <img
            src={LEFT_PANEL_IMG}
            alt="Misty green mountains — Ayur-Ip"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(248,250,246,0.93) 0%, rgba(248,250,246,0.72) 16%, rgba(20,54,32,0.08) 38%, rgba(13,39,23,0.55) 70%, rgba(13,39,23,0.82) 100%)",
            }}
          />

          {/* All content sits here */}
          <div className="absolute inset-0 flex flex-col">
            {/* ── TOP BAR ── */}
            <div className="flex items-start justify-between px-7 pt-7">
              {/* Logo */}
              <button
                onClick={onBack}
                className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              >
                <LeafLogo />
                <div className="text-left">
                  <div
                    className="text-base leading-none"
                    style={{ color: "#0d2717", fontWeight: 800 }}
                  >
                    Ayur-Ip
                  </div>
                  <div
                    className="text-xs tracking-widest mt-0.5"
                    style={{ color: "#2d6a4f", fontSize: 8, fontWeight: 700, letterSpacing: "0.18em" }}
                  >
                    PROTECT PRESERVE PROPEL
                  </div>
                </div>
              </button>

              {/* Script tagline */}
              <div className="text-right pr-1 pt-0.5">
                <p
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    color: "#1a4028",
                    fontSize: 17,
                    lineHeight: 1.35,
                  }}
                >
                  Rooted
                  <br />
                  in Tradition.
                  <br />
                  Built for
                  <br />
                  Tomorrow.
                </p>
                <div
                  className="mt-2 w-7 h-px ml-auto rounded-full"
                  style={{ background: "#2d6a4f" }}
                />
              </div>
            </div>

            {/* ── HEADLINE + DESCRIPTION ── */}
            <div className="px-7 pt-6 flex-1">
              <h1 className="mb-3" style={{ lineHeight: 1.1 }}>
                <span
                  className="block text-4xl"
                  style={{ color: "#0d2717", fontWeight: 700 }}
                >
                  Join a
                </span>
                <span
                  className="block"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: "#2d6a4f",
                    fontSize: 46,
                  }}
                >
                  Healthier,
                </span>
                <span
                  className="block text-4xl"
                  style={{ color: "#0d2717", fontWeight: 800 }}
                >
                  Brighter Tomorrow
                </span>
              </h1>

              <p
                className="text-sm leading-relaxed mb-6 max-w-xs"
                style={{ color: "#374151" }}
              >
                Create your account and be part of a secure, intelligent platform for Ayurvedic knowledge, innovation, and global impact.
              </p>

              {/* Feature icon trio */}
              <div className="flex gap-7">
                {features.map(({ icon, lines }, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.2)",
                        border: "1px solid rgba(255,255,255,0.35)",
                        color: "#1a4028",
                      }}
                    >
                      {icon}
                    </div>
                    <div className="text-center">
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="text-xs font-semibold leading-snug"
                          style={{ color: "#1a4028" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── BOOK STACK + QUOTE ── */}
            <div className="px-7 pb-10 flex items-end justify-between gap-4">
              {/* Stacked book spines */}
              <div className="flex flex-col gap-1.5">
                {[
                  { label: "TRADITION", shade: "rgba(120,76,35,0.88)" },
                  { label: "INNOVATION", shade: "rgba(101,63,28,0.9)" },
                  { label: "IMPACT", shade: "rgba(84,52,22,0.92)" },
                ].map(({ label, shade }) => (
                  <div
                    key={label}
                    className="flex items-center justify-center"
                    style={{
                      background: shade,
                      borderRadius: 3,
                      padding: "8px 22px",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                      minWidth: 132,
                    }}
                  >
                    <span
                      style={{
                        color: "#e8d5b0",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.22em",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="text-right">
                <p
                  className="leading-snug"
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    color: "white",
                    fontSize: 17,
                    lineHeight: 1.45,
                    textShadow: "0 1px 5px rgba(0,0,0,0.55)",
                  }}
                >
                  &ldquo;Ancient Wisdom
                  <br />
                  for a Healthier,
                  <br />
                  More Inclusive World.&rdquo;
                </p>
                <div
                  className="mt-2 w-7 h-px ml-auto rounded-full"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                />
              </div>
            </div>

            {/* ── FOOTER BAR ── */}
            <div
              className="flex items-center justify-center gap-3 py-2.5"
              style={{
                background: "rgba(13,39,23,0.7)",
                backdropFilter: "blur(6px)",
              }}
            >
              {["PEOPLE", "PLANET", "PROGRESS"].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  {i > 0 && (
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>|</span>
                  )}
                  <span
                    style={{
                      color: "rgba(255,255,255,0.78)",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════ RIGHT PANEL ════════════════ */}
        <div
          className="flex-1 relative overflow-hidden"
          style={{ background: "white", minWidth: 0 }}
        >
          {/* Decorative leaf illustration — bottom right */}
          <div
            className="absolute bottom-0 right-0 pointer-events-none select-none"
            style={{ width: 180, height: 240 }}
          >
            <svg viewBox="0 0 180 240" fill="none" className="w-full h-full">
              <path
                d="M165 240 C160 155 105 105 125 55 C148 130 178 175 168 240"
                fill="#2d6a4f"
                fillOpacity="0.09"
              />
              <path
                d="M180 225 C178 140 135 95 152 45 C170 125 195 170 185 240"
                fill="#40916c"
                fillOpacity="0.07"
              />
              <path
                d="M148 240 C142 160 95 115 112 65 C138 145 162 190 155 240"
                fill="#1a4028"
                fillOpacity="0.06"
              />
              <path
                d="M148 230 C135 185 118 145 132 95"
                stroke="#2d6a4f"
                strokeWidth="1.5"
                strokeOpacity="0.2"
                fill="none"
              />
              <path
                d="M168 225 C158 182 145 148 157 105"
                stroke="#40916c"
                strokeWidth="1.2"
                strokeOpacity="0.18"
                fill="none"
              />
            </svg>
          </div>

          {/* Already have account — top right */}
          <div
            className="absolute top-5 right-6 flex items-center gap-1.5 z-10"
          >
            <span className="text-xs" style={{ color: "#9ca3af" }}>
              Already have an account?
            </span>
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-xs font-semibold hover:opacity-75 transition-opacity"
              style={{ color: "#111827" }}
            >
              Sign in
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6h7M6.5 3l3 3-3 3"
                  stroke="#111827"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Form area */}
          <div className="h-full flex flex-col justify-center px-9 py-8 pt-14">
            {/* Heading */}
            <h2
              className="text-3xl font-bold mb-1"
              style={{ color: "#111827", fontWeight: 700, letterSpacing: "-0.025em" }}
            >
              Create Your Account
            </h2>
            <p className="text-sm mb-5" style={{ color: "#6b7280" }}>
              Start your journey with Ayur-Ip today.
            </p>

            {/* Social login buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button
                className="flex items-center justify-center gap-2.5 py-2.5 rounded-xl border text-sm font-medium transition-colors hover:bg-gray-50"
                style={{ borderColor: "#e5e7eb", color: "#374151" }}
              >
                <GoogleIcon />
                Continue with Google
              </button>
              <button
                className="flex items-center justify-center gap-2.5 py-2.5 rounded-xl border text-sm font-medium transition-colors hover:bg-gray-50"
                style={{ borderColor: "#e5e7eb", color: "#374151" }}
              >
                <MicrosoftIcon />
                Continue with Microsoft
              </button>
            </div>

            {/* OR divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px" style={{ background: "#f0f0f0" }} />
              <span className="text-xs font-medium" style={{ color: "#9ca3af" }}>OR</span>
              <div className="flex-1 h-px" style={{ background: "#f0f0f0" }} />
            </div>

            {/* Name row */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <InputField
                icon={<IconUser />}
                label="First Name"
                type="text"
                placeholder="Your first name"
                value={form.firstName}
                onChange={update("firstName")}
              />
              <InputField
                icon={<IconUser />}
                label="Last Name"
                type="text"
                placeholder="Your last name"
                value={form.lastName}
                onChange={update("lastName")}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <InputField
                icon={<IconMailSm />}
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={update("email")}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <InputField
                icon={<IconLockSm />}
                label="Password"
                type={showPwd ? "text" : "password"}
                placeholder="Create a strong password"
                value={form.password}
                onChange={update("password")}
                suffix={
                  <button
                    type="button"
                    onClick={() => setShowPwd((v) => !v)}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <IconEyeSm visible={showPwd} />
                  </button>
                }
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <InputField
                icon={<IconLockSm />}
                label="Confirm Password"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                value={form.confirm}
                onChange={update("confirm")}
                suffix={
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <IconEyeSm visible={showConfirm} />
                  </button>
                }
              />
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2.5 mb-4">
              <button
                type="button"
                onClick={() => setAgreed((a) => !a)}
                className="w-4 h-4 mt-0.5 rounded border flex-shrink-0 flex items-center justify-center transition-colors"
                style={{
                  borderColor: agreed ? "#1a4028" : "#d1d5db",
                  background: agreed ? "#1a4028" : "white",
                }}
                aria-checked={agreed}
                role="checkbox"
              >
                {agreed && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5l2.5 2.5L8 2.5"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                I agree to the{" "}
                <a href="#" className="font-semibold underline underline-offset-2" style={{ color: "#111827" }}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="font-semibold underline underline-offset-2" style={{ color: "#111827" }}>
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* CTA button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90 mb-3"
              style={{ background: "#1a4028" }}
            >
              Create Account
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Security note */}
            <div className="flex items-center gap-2 mb-5">
              <IconShieldCheck />
              <p className="text-xs" style={{ color: "#9ca3af" }}>
                Your data is secure, private, and encrypted.{" "}
                <a href="#" className="font-medium underline underline-offset-2" style={{ color: "#6b7280" }}>
                  Learn more
                </a>
              </p>
            </div>

            {/* Bottom footer tags */}
            <div
              className="flex items-center justify-center gap-3 pt-4 border-t"
              style={{ borderColor: "#f3f4f6" }}
            >
              {["TRADITION", "TECHNOLOGY", "PEOPLE", "IMPACT"].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  {i > 0 && (
                    <span style={{ color: "#e5e7eb", fontSize: 11 }}>|</span>
                  )}
                  <span
                    style={{
                      color: "#c0c0c0",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

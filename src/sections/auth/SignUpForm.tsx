import { useState } from "react";
import InputField from "./shared/InputField";
import { GoogleIcon, IconEyeSm, IconLockSm, IconMailSm, IconShieldCheck, IconUser, MicrosoftIcon } from "./shared/icons";

// Right half of the auth card: the create-account form and its state.
export default function SignUpForm({ onBack }: { onBack: () => void }) {
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

  return (
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
        className="absolute top-4 right-5 flex items-center gap-1.5 z-10 sm:top-5 sm:right-6"
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
      <div className="h-full flex flex-col justify-center px-5 pb-6 pt-14 sm:px-9 sm:pb-8">
        {/* Heading */}
        <h2
          className="text-[26px] sm:text-3xl font-bold mb-1"
          style={{ color: "#111827", fontWeight: 700, letterSpacing: "-0.025em" }}
        >
          Create Your Account
        </h2>
        <p className="text-sm mb-5" style={{ color: "#6b7280" }}>
          Start your journey with Ayur-Ip today.
        </p>

        {/* Social login buttons */}
        <div className="grid grid-cols-1 gap-3 mb-4 min-[480px]:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <button
            className="flex min-w-0 items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-[13.5px] font-medium whitespace-nowrap transition-colors hover:bg-gray-50"
            style={{ borderColor: "#e5e7eb", color: "#374151" }}
          >
            <GoogleIcon />
            Continue with Google
          </button>
          <button
            className="flex min-w-0 items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-[13.5px] font-medium whitespace-nowrap transition-colors hover:bg-gray-50"
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
        <div className="grid grid-cols-1 gap-3 mb-3 min-[420px]:grid-cols-2">
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
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-4 border-t"
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
  );
}

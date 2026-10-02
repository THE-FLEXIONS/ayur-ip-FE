import { useState } from "react";
import { LoginShowcase, SignInForm, SignUpForm } from "../../sections/auth";
import { PAGE_BG_IMG } from "../../sections/auth/shared/assets";

export type AuthMode = "signin" | "signup";

type LoginPageProps = {
  onBack: () => void;
  /** Called after a successful sign-in or sign-up. */
  onSuccess: () => void;
  initialMode?: AuthMode;
  /** Why the user was sent here, shown above the sign-in form. */
  notice?: string | null;
};

export default function LoginPage({ onBack, onSuccess, initialMode = "signin", notice }: LoginPageProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);

  return (
    <div
      className="min-h-screen w-full flex items-start justify-center p-3 sm:p-6 lg:items-center lg:p-8 relative overflow-hidden"
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
        className="relative z-10 w-full max-w-xl flex flex-col overflow-hidden lg:max-w-5xl lg:flex-row lg:min-h-[660px]"
        style={{
          borderRadius: 20,
          boxShadow: "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        <LoginShowcase onBack={onBack} />

        {mode === "signin" ? (
          <SignInForm onSwitchToSignUp={() => setMode("signup")} onSuccess={onSuccess} notice={notice} />
        ) : (
          <SignUpForm onSwitchToSignIn={() => setMode("signin")} onSuccess={onSuccess} />
        )}
      </div>
    </div>
  );
}

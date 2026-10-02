import { useState, type FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useSlowHint, WAKING_SERVER_MESSAGE } from "../../hooks/useSlowHint";
import { toApiError } from "../../lib/api";
import DemoAccessCard from "./DemoAccessCard";
import AuthPanel, { FormAlert, SubmitButton } from "./shared/AuthPanel";
import InputField from "./shared/InputField";
import { IconEyeSm, IconLockSm, IconMailSm } from "./shared/icons";

type SignInFormProps = {
  onSwitchToSignUp: () => void;
  onSuccess: () => void;
  /** Why the user was sent here, e.g. "Sign in to ask your question." */
  notice?: string | null;
};

export default function SignInForm({ onSwitchToSignUp, onSuccess, notice }: SignInFormProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const slow = useSlowHint(busy);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError("Enter your email and password.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await login(email.trim(), password);
      onSuccess();
    } catch (err) {
      setError(toApiError(err).message);
      setBusy(false);
    }
  }

  return (
    <AuthPanel
      switchPrompt="New to Ayur-Ip?"
      switchLabel="Create account"
      onSwitch={onSwitchToSignUp}
      title="Welcome Back"
      subtitle="Sign in to ask questions and keep your research."
    >
      {notice && <FormAlert tone="info">{notice}</FormAlert>}

      <DemoAccessCard
        onUse={(demoEmail, demoPassword) => {
          setEmail(demoEmail);
          setPassword(demoPassword);
          setError(null);
        }}
      />

      <form onSubmit={handleSubmit} noValidate>
        {error && <FormAlert>{error}</FormAlert>}

        <div className="mb-3">
          <InputField
            icon={<IconMailSm />}
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={setEmail}
          />
        </div>

        <div className="mb-5">
          <InputField
            icon={<IconLockSm />}
            label="Password"
            type={showPwd ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            placeholder="Your password"
            value={password}
            onChange={setPassword}
            suffix={
              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                aria-label={showPwd ? "Hide password" : "Show password"}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IconEyeSm visible={showPwd} />
              </button>
            }
          />
        </div>

        <SubmitButton busy={busy}>{busy ? "Signing in…" : "Sign In"}</SubmitButton>
        {slow && (
          <p className="mb-4 text-center text-xs" style={{ color: "#6b7280" }} role="status">
            {WAKING_SERVER_MESSAGE}
          </p>
        )}
      </form>
    </AuthPanel>
  );
}

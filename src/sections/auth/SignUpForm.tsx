import { useState, type FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useSlowHint, WAKING_SERVER_MESSAGE } from "../../hooks/useSlowHint";
import { toApiError } from "../../lib/api";
import AuthPanel, { FormAlert, SubmitButton } from "./shared/AuthPanel";
import InputField from "./shared/InputField";
import { IconEyeSm, IconLockSm, IconMailSm, IconShieldCheck, IconUser } from "./shared/icons";

type SignUpFormProps = {
  onSwitchToSignIn: () => void;
  onSuccess: () => void;
};

type Form = { firstName: string; lastName: string; email: string; password: string; confirm: string };
type FieldErrors = Partial<Record<keyof Form | "agreed", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: Form, agreed: boolean): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.firstName.trim()) errors.firstName = "First name is required.";
  if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = "Enter a valid email address.";
  if (form.password.length < 8) errors.password = "Use at least 8 characters.";
  else if (form.password.length > 72) errors.password = "Use at most 72 characters.";
  if (form.confirm !== form.password) errors.confirm = "Passwords don't match.";
  if (!agreed) errors.agreed = "Please accept the terms to continue.";
  return errors;
}

// Right half of the auth card: the create-account form and its state.
export default function SignUpForm({ onSwitchToSignIn, onSuccess }: SignUpFormProps) {
  const { signup } = useAuth();
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState<Form>({ firstName: "", lastName: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const slow = useSlowHint(busy);

  const update = (key: keyof Form) => (v: string) => {
    setForm((f) => ({ ...f, [key]: v }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(form, agreed);
    setErrors(found);
    setFormError(null);
    if (Object.keys(found).length > 0) return;

    setBusy(true);
    try {
      await signup({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        password: form.password,
        acceptTerms: true,
      });
      onSuccess();
    } catch (err) {
      const apiError = toApiError(err);
      setErrors({
        firstName: apiError.field("firstName"),
        lastName: apiError.field("lastName"),
        email: apiError.field("email"),
        password: apiError.field("password"),
      });
      setFormError(apiError.message);
      setBusy(false);
    }
  }

  return (
    <AuthPanel
      switchPrompt="Already have an account?"
      switchLabel="Sign in"
      onSwitch={onSwitchToSignIn}
      title="Create Your Account"
      subtitle="Start your journey with Ayur-Ip today."
    >
      <form onSubmit={handleSubmit} noValidate>
        {formError && <FormAlert>{formError}</FormAlert>}

        {/* Name row */}
        <div className="grid grid-cols-1 gap-3 mb-3 min-[420px]:grid-cols-2">
          <InputField
            icon={<IconUser />}
            label="First Name"
            type="text"
            name="given-name"
            autoComplete="given-name"
            placeholder="Your first name"
            value={form.firstName}
            onChange={update("firstName")}
            error={errors.firstName}
          />
          <InputField
            icon={<IconUser />}
            label="Last Name"
            type="text"
            name="family-name"
            autoComplete="family-name"
            placeholder="Your last name"
            value={form.lastName}
            onChange={update("lastName")}
            error={errors.lastName}
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <InputField
            icon={<IconMailSm />}
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={update("email")}
            error={errors.email}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <InputField
            icon={<IconLockSm />}
            label="Password"
            type={showPwd ? "text" : "password"}
            name="new-password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={form.password}
            onChange={update("password")}
            error={errors.password}
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

        {/* Confirm Password */}
        <div className="mb-4">
          <InputField
            icon={<IconLockSm />}
            label="Confirm Password"
            type={showConfirm ? "text" : "password"}
            name="confirm-password"
            autoComplete="new-password"
            placeholder="Re-enter your password"
            value={form.confirm}
            onChange={update("confirm")}
            error={errors.confirm}
            suffix={
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IconEyeSm visible={showConfirm} />
              </button>
            }
          />
        </div>

        {/* Terms checkbox */}
        <div className="mb-4">
          <div className="flex items-start gap-2.5">
            <button
              type="button"
              onClick={() => {
                setAgreed((a) => !a);
                setErrors((e) => ({ ...e, agreed: undefined }));
              }}
              className="w-4 h-4 mt-0.5 rounded border flex-shrink-0 flex items-center justify-center transition-colors"
              style={{
                borderColor: agreed ? "#1a4028" : errors.agreed ? "#e2a397" : "#d1d5db",
                background: agreed ? "#1a4028" : "white",
              }}
              aria-checked={agreed}
              aria-label="I agree to the Terms of Service and Privacy Policy"
              role="checkbox"
            >
              {agreed && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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
          {errors.agreed && (
            <p className="mt-1 text-xs" style={{ color: "#b3412f" }}>
              {errors.agreed}
            </p>
          )}
        </div>

        <SubmitButton busy={busy}>{busy ? "Creating account…" : "Create Account"}</SubmitButton>
        {slow && (
          <p className="mb-3 text-center text-xs" style={{ color: "#6b7280" }} role="status">
            {WAKING_SERVER_MESSAGE}
          </p>
        )}

        {/* Security note */}
        <div className="flex items-center gap-2 mb-5">
          <IconShieldCheck />
          <p className="text-xs" style={{ color: "#9ca3af" }}>
            Your data is secure, private, and encrypted.
          </p>
        </div>
      </form>
    </AuthPanel>
  );
}

import { useId, useState, type FormEvent } from "react";
import { formsApi, toApiError } from "../../lib/api";

type NewsletterFormProps = {
  /** Where the form is, stored with the subscriber (e.g. "footer"). */
  source: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** "Stay Updated" pill: email field with the Subscribe button tucked into its right end. */
export default function NewsletterForm({ source }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<{ status: "idle" | "busy" | "done" | "error"; message?: string }>({ status: "idle" });
  const messageId = useId();
  const invalid = state.status === "error";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setState({ status: "error", message: "Enter a valid email address." });
      return;
    }
    setState({ status: "busy" });
    try {
      await formsApi.subscribe(email.trim(), source);
      setEmail("");
      setState({ status: "done", message: "You're subscribed. Thank you!" });
    } catch (err) {
      setState({ status: "error", message: toApiError(err).message });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div
        className={`flex h-[48px] items-center rounded-full bg-white shadow-[0_1px_2px_rgba(20,50,30,0.06)] ring-1 transition-shadow focus-within:ring-2 sm:h-[46px] ${
          invalid ? "ring-[#e2a397] focus-within:ring-[#c9614e]" : "ring-[#e1e8e0] focus-within:ring-[#1d6a3f]/50"
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state.status !== "busy") setState({ status: "idle" });
          }}
          autoComplete="email"
          aria-label="Email address"
          aria-invalid={invalid}
          aria-describedby={state.message ? messageId : undefined}
          placeholder="Enter your email address"
          className="h-full min-w-0 flex-1 rounded-l-full bg-transparent pl-5 pr-3 text-[15px] text-[#14211b] outline-none placeholder:text-[#7d8a90] sm:pl-[22px]"
        />
        <button
          type="submit"
          disabled={state.status === "busy"}
          className="group flex h-full shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#0f3b25] px-4 text-[15px] font-medium text-white min-[400px]:px-5 transition-colors hover:bg-[#164d31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f3b25] disabled:opacity-70 sm:w-[140px] sm:px-0"
        >
          {state.status === "busy" ? "Subscribing…" : "Subscribe"}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            <path d="M2.5 8h11M9 3.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {state.message && (
        <p
          id={messageId}
          role={invalid ? "alert" : "status"}
          className="mt-2 pl-5 text-[12.5px]"
          style={{ color: invalid ? "#b3412f" : "#1a4028" }}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

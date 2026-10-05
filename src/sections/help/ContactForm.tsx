import { useId, useState, type FormEvent } from "react";
import { CheckIcon } from "../../components/ui/LineIcons";
import { FieldLabel, inputClass } from "../../components/ui/ToolKit";
import { useAuth } from "../../hooks/useAuth";
import { useLocalState } from "../../hooks/useLocalState";
import { formsApi, toApiError } from "../../lib/api";

const TOPICS = ["Question about an answer", "Report a problem", "Tool feedback", "Account and data", "Partnership or data request", "Something else"] as const;

type Ticket = { ref: string; topic: string; subject: string; at: number };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Support request form. Requests go to the team through the backend's suggestions inbox. */
export default function ContactForm() {
  const auth = useAuth();
  const [email, setEmail] = useState(auth.user?.email ?? "");
  const [topic, setTopic] = useState<string>(TOPICS[0]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [tickets, setTickets] = useLocalState<Ticket[]>("ayurip.support.requests.v1", []);
  const id = useId();

  function validate() {
    const next: Record<string, string> = {};
    if (!EMAIL_RE.test(email.trim())) next.email = "Enter a valid email so we can reply.";
    if (subject.trim().length < 4) next.subject = "Add a short subject (at least 4 characters).";
    if (message.trim().length < 15) next.message = "Tell us a little more (at least 15 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setServerError(null);
    try {
      const res = await formsApi.suggest({ kind: "other", title: `[Support · ${topic}] ${subject.trim()}`, details: message.trim(), email: email.trim() });
      const ticket: Ticket = { ref: `AYR-${res.suggestion.id.slice(0, 6).toUpperCase()}`, topic, subject: subject.trim(), at: Date.now() };
      setTickets((list) => [ticket, ...list].slice(0, 10));
      setSubject("");
      setMessage("");
      setStatus("sent");
    } catch (err) {
      setServerError(toApiError(err).message);
      setStatus("error");
    }
  }

  const fieldError = (name: string) =>
    errors[name] ? (
      <p id={`${id}-${name}-error`} className="mt-1.5 text-[12.5px] text-[#a1402d]">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section aria-labelledby={`${id}-title`} className="rounded-[24px] border border-[#ecebe3] bg-white/85 p-5 sm:p-6">
      <h2 id={`${id}-title`} className="text-[18px] font-semibold text-ayur-ink">
        Contact the team
      </h2>
      <p className="mt-1 text-[14px] text-ayur-muted">We usually reply within two working days.</p>

      {status === "sent" && tickets[0] && (
        <div role="status" className="mt-4 flex items-start gap-3 rounded-2xl border border-[#cfe3d2] bg-[#eef6ef] px-4 py-3 text-[14px] text-[#1d5a36]">
          <CheckIcon size={18} strokeWidth={2.4} className="mt-0.5 shrink-0" />
          <p>
            Request sent. Your reference is <strong>{tickets[0].ref}</strong>.
          </p>
        </div>
      )}

      <form noValidate onSubmit={(e) => void submit(e)} className="mt-4 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor={`${id}-email`}>Your email</FieldLabel>
            <input
              id={`${id}-email`}
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${id}-email-error` : undefined}
              className={inputClass}
              placeholder="you@example.com"
            />
            {fieldError("email")}
          </div>
          <div>
            <FieldLabel htmlFor={`${id}-topic`}>Topic</FieldLabel>
            <select id={`${id}-topic`} value={topic} onChange={(e) => setTopic(e.target.value)} className={`${inputClass} appearance-none`}>
              {TOPICS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <FieldLabel htmlFor={`${id}-subject`}>Subject</FieldLabel>
          <input
            id={`${id}-subject`}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? `${id}-subject-error` : undefined}
            className={inputClass}
            placeholder="e.g. Classifier result for a capsule product"
          />
          {fieldError("subject")}
        </div>
        <div>
          <FieldLabel htmlFor={`${id}-message`}>Message</FieldLabel>
          <textarea
            id={`${id}-message`}
            rows={5}
            maxLength={2000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${id}-message-error` : undefined}
            className={`${inputClass} h-auto resize-y py-3 leading-relaxed`}
            placeholder="What happened, and what did you expect?"
          />
          <div className="flex justify-between">
            {fieldError("message") ?? <span />}
            <span className="mt-1.5 text-[12px] text-[#8a918a]">{message.length} / 2000</span>
          </div>
        </div>

        {status === "error" && serverError && (
          <p role="alert" className="rounded-2xl border border-[#f0d6d0] bg-[#fdf4f2] px-4 py-3 text-[13.5px] text-[#8a3325]">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 items-center rounded-full bg-ayur-green px-6 text-[14.5px] font-medium text-white transition-colors hover:bg-ayur-green-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
      </form>

      {tickets.length > 0 && (
        <div className="mt-6 border-t border-[#efeee6] pt-4">
          <h3 className="text-[14px] font-semibold text-ayur-ink">Your requests</h3>
          <ul className="mt-2 space-y-2">
            {tickets.map((t) => (
              <li key={t.ref} className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl bg-[#f7f7f1] px-3 py-2.5 text-[13.5px]">
                <span className="font-mono text-[12.5px] font-semibold text-ayur-green-deep">{t.ref}</span>
                <span className="min-w-0 flex-1 truncate text-ayur-ink">{t.subject}</span>
                <span className="rounded-full bg-[#e6f1e6] px-2 py-0.5 text-[11.5px] font-medium text-[#24603b]">Received</span>
                <span className="text-[12px] text-[#8a918a]">{new Date(t.at).toLocaleDateString(undefined, { day: "numeric", month: "short" })}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

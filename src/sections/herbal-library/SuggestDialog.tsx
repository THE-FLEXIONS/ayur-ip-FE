import { useState, type FormEvent } from "react";
import Modal from "../../components/ui/Modal";
import { formsApi, toApiError, type ApiError, type SuggestionKind } from "../../lib/api";

const KINDS: { value: SuggestionKind; label: string }[] = [
  { value: "herb", label: "Herb" },
  { value: "formulation", label: "Formulation" },
  { value: "classical_text", label: "Classical text" },
  { value: "reference", label: "Reference / article" },
  { value: "other", label: "Other" },
];

const fieldClass = "mt-1 w-full rounded-xl border px-3 py-2.5 text-sm outline-none focus:shadow-[0_0_0_3px_rgba(45,106,79,0.12)]";

/** "Suggest a Resource" form; submissions are stored for the team to review. */
export default function SuggestDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [kind, setKind] = useState<SuggestionKind>("herb");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [sent, setSent] = useState(false);

  function close() {
    onClose();
    // Reset after the dialog has closed so the success message doesn't flash.
    window.setTimeout(() => {
      setSent(false);
      setError(null);
      setTitle("");
      setDetails("");
      setSourceUrl("");
    }, 200);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await formsApi.suggest({
        kind,
        title: title.trim(),
        details: details.trim() || undefined,
        sourceUrl: sourceUrl.trim() || undefined,
        email: email.trim() || undefined,
      });
      setSent(true);
    } catch (err) {
      setError(toApiError(err));
    } finally {
      setBusy(false);
    }
  }

  const fieldError = (name: string) =>
    error?.field(name) ? (
      <span className="mt-1 block text-xs" style={{ color: "#b3412f" }}>
        {error.field(name)}
      </span>
    ) : null;

  return (
    <Modal open={open} onClose={close} title="Suggest a Resource">
      {sent ? (
        <div role="status">
          <p className="text-[15px]" style={{ color: "#1f2937" }}>
            Thank you! Your suggestion was sent to the AyurIP team for review.
          </p>
          <button type="button" onClick={close} className="mt-5 rounded-xl px-5 py-2.5 text-sm font-semibold text-white" style={{ background: "#0d2717" }}>
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <p className="text-sm" style={{ color: "#6b7280" }}>
            Tell us about a herb, formulation or reference we should add to the library.
          </p>
          {error && !Object.keys(error.fields).length && (
            <p role="alert" className="rounded-xl border px-3 py-2 text-sm" style={{ background: "#fdf4f2", borderColor: "#f0d6d0", color: "#8a3325" }}>
              {error.message}
            </p>
          )}

          <label className="block text-xs font-semibold" style={{ color: "#374151" }}>
            Type
            <select value={kind} onChange={(e) => setKind(e.target.value as SuggestionKind)} className={fieldClass} style={{ borderColor: "#d1d5db" }}>
              {KINDS.map((k) => (
                <option key={k.value} value={k.value}>
                  {k.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-xs font-semibold" style={{ color: "#374151" }}>
            Name or title *
            <input value={title} onChange={(e) => setTitle(e.target.value)} required maxLength={200} placeholder="e.g. Moringa (Moringa oleifera)" className={fieldClass} style={{ borderColor: "#d1d5db" }} />
            {fieldError("title")}
          </label>

          <label className="block text-xs font-semibold" style={{ color: "#374151" }}>
            Details
            <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={3} maxLength={2000} placeholder="Why it's useful, traditional uses, classical references…" className={fieldClass} style={{ borderColor: "#d1d5db" }} />
            {fieldError("details")}
          </label>

          <label className="block text-xs font-semibold" style={{ color: "#374151" }}>
            Source link
            <input type="url" value={sourceUrl} onChange={(e) => setSourceUrl(e.target.value)} placeholder="https://" className={fieldClass} style={{ borderColor: "#d1d5db" }} />
            {fieldError("sourceUrl")}
          </label>

          <label className="block text-xs font-semibold" style={{ color: "#374151" }}>
            Your email (optional, if you'd like a reply)
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className={fieldClass} style={{ borderColor: "#d1d5db" }} />
            {fieldError("email")}
          </label>

          <button
            type="submit"
            disabled={busy || title.trim().length < 2}
            className="w-full rounded-xl py-3 text-sm font-semibold text-white disabled:opacity-60"
            style={{ background: "#0d2717" }}
          >
            {busy ? "Sending…" : "Send suggestion"}
          </button>
        </form>
      )}
    </Modal>
  );
}

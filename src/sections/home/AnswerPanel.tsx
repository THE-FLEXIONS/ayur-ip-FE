import { useState } from "react";
import Markdown from "../../components/ui/Markdown";
import { BookmarkIcon, CheckIcon, CloseIcon, DocumentIcon, GlobeIcon } from "../../components/ui/LineIcons";
import { JURISDICTION_LABELS, MODE_LABELS } from "../../config/research";
import type { AnswerState } from "../../hooks/useAsk";
import { useSlowHint, WAKING_SERVER_MESSAGE } from "../../hooks/useSlowHint";

type AnswerPanelProps = {
  answer: AnswerState;
  /** Whether the answer's history entry is saved. */
  saved: boolean;
  onToggleSaved: () => void;
  onStop: () => void;
  onDismiss: () => void;
  onRetry: () => void;
};

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** The streamed AI answer under the ask box: progress, answer, sources and actions. */
export default function AnswerPanel({ answer, saved, onToggleSaved, onStop, onDismiss, onRetry }: AnswerPanelProps) {
  const [copied, setCopied] = useState(false);
  const { status, request, entry, sources, error } = answer;
  const streaming = status === "streaming";
  const waiting = streaming && !answer.answer;
  const slow = useSlowHint(waiting, 8000);
  if (!request) return null;

  const language = entry?.language ?? "en";

  async function copy() {
    try {
      await navigator.clipboard.writeText(answer.answer);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked; nothing else to do.
    }
  }

  return (
    <section
      aria-label="Answer"
      aria-busy={streaming}
      className="mt-4 animate-rise rounded-[24px] border border-[#e4e8df] bg-white/95 p-4 shadow-[0_20px_50px_-34px_rgba(30,60,40,0.45)] [animation-duration:300ms] sm:mt-5 sm:rounded-[28px] sm:p-6 lg:p-7"
    >
      <header className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#646b63]">
            {MODE_LABELS[request.mode]} · {JURISDICTION_LABELS[request.jurisdiction]}
            {language === "hi" && " · हिन्दी"}
          </p>
          <h2 className="mt-1.5 text-[17px] font-semibold leading-snug text-ayur-ink sm:text-[19px]">{request.question}</h2>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close answer"
          className="-mr-1 -mt-1 flex size-10 shrink-0 items-center justify-center rounded-full text-ayur-muted transition-colors hover:bg-ayur-mint/70 hover:text-ayur-ink focus-visible:outline-2 focus-visible:outline-ayur-green"
        >
          <CloseIcon size={20} strokeWidth={1.8} />
        </button>
      </header>

      <div className="mt-4 border-t border-ayur-line pt-4 sm:mt-5 sm:pt-5" aria-live="polite">
        {waiting && (
          <div className="flex items-center gap-3 text-[14.5px] text-ayur-muted">
            <span className="flex gap-1" aria-hidden="true">
              {[0, 150, 300].map((delay) => (
                <span key={delay} className="size-2 animate-pulse rounded-full bg-ayur-leaf" style={{ animationDelay: `${delay}ms` }} />
              ))}
            </span>
            <span>
              {slow
                ? WAKING_SERVER_MESSAGE
                : request.mode === "deep"
                  ? "Searching sources and writing a cited answer…"
                  : "Writing a quick answer…"}
            </span>
          </div>
        )}

        {answer.answer && (
          <div lang={language}>
            <Markdown text={answer.answer} />
          </div>
        )}

        {status === "error" && (
          <div role="alert" className="mt-3 rounded-2xl border border-[#f0d6d0] bg-[#fdf4f2] px-4 py-3 text-[14px] text-[#8a3325]">
            {error}
          </div>
        )}
      </div>

      {sources.length > 0 && (
        <div className="mt-5 rounded-2xl bg-ayur-ivory/80 p-4">
          <h3 className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#4a544d]">
            <GlobeIcon size={16} strokeWidth={1.8} />
            Sources
          </h3>
          <ol className="mt-2.5 space-y-1.5">
            {sources.map((source, i) => (
              <li key={source.url} className="flex gap-2 text-[14px]">
                <span className="text-ayur-muted">{i + 1}.</span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 truncate font-medium text-ayur-green underline-offset-2 hover:underline"
                >
                  {source.title || hostname(source.url)}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {streaming ? (
          <button
            type="button"
            onClick={onStop}
            className="h-10 rounded-full border border-ayur-line bg-white px-4 text-[13.5px] font-medium text-ayur-ink transition-colors hover:border-[#cfd8cc] focus-visible:outline-2 focus-visible:outline-ayur-green"
          >
            Stop generating
          </button>
        ) : (
          <>
            {entry && answer.answer && (
              <button
                type="button"
                onClick={onToggleSaved}
                aria-pressed={saved}
                className="flex h-10 items-center gap-1.5 rounded-full border border-ayur-line bg-white px-4 text-[13.5px] font-medium text-ayur-ink transition-colors hover:border-[#cfd8cc] hover:text-ayur-green focus-visible:outline-2 focus-visible:outline-ayur-green"
              >
                <BookmarkIcon filled={saved} size={17} strokeWidth={1.8} className="text-ayur-leaf" />
                {saved ? "Saved" : "Save"}
              </button>
            )}
            {answer.answer && (
              <button
                type="button"
                onClick={copy}
                className="flex h-10 items-center gap-1.5 rounded-full border border-ayur-line bg-white px-4 text-[13.5px] font-medium text-ayur-ink transition-colors hover:border-[#cfd8cc] hover:text-ayur-green focus-visible:outline-2 focus-visible:outline-ayur-green"
              >
                {copied ? <CheckIcon size={17} strokeWidth={2} /> : <DocumentIcon size={17} strokeWidth={1.8} />}
                {copied ? "Copied" : "Copy"}
              </button>
            )}
            {status === "error" && (
              <button
                type="button"
                onClick={onRetry}
                className="h-10 rounded-full bg-ayur-green px-4 text-[13.5px] font-medium text-white transition-colors hover:bg-ayur-green-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green"
              >
                Try again
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

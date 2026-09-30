import { DocumentIcon, ShieldCheckIcon } from "../../components/ui/LineIcons";
import { useSlowNotice } from "../../hooks/useSlowNotice";
import { JURISDICTION_LABELS, MODE_LABELS, type AskRequest } from "../../config/research";
import { safeHttpUrl } from "../../services/api";
import type { ChatResponse } from "../../services/chat";

export type AnswerState =
  | { status: "loading"; request: AskRequest }
  | { status: "success"; request: AskRequest; response: ChatResponse }
  | { status: "error"; request: AskRequest; message: string };

type AnswerPanelProps = {
  state: AnswerState;
  onRetry: () => void;
};

export default function AnswerPanel({ state, onRetry }: AnswerPanelProps) {
  const { request } = state;
  const slow = useSlowNotice(state.status === "loading");

  return (
    <section
      aria-label="Answer"
      aria-busy={state.status === "loading"}
      className="mt-4 rounded-[22px] border border-[#ecebe3] bg-white/90 p-4 shadow-[0_12px_32px_-28px_rgba(40,50,30,0.45)] animate-rise sm:mt-5 sm:rounded-[26px] sm:p-6 lg:p-8"
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-ayur-muted sm:text-[13px]">
        {MODE_LABELS[request.mode]} · {JURISDICTION_LABELS[request.jurisdiction]}
      </p>
      <h2 className="mt-1.5 text-[17px] font-semibold leading-snug tracking-[-0.01em] text-ayur-ink [overflow-wrap:anywhere] sm:text-[20px]">
        {request.question}
      </h2>

      <div aria-live="polite" className="mt-4 sm:mt-5">
        {state.status === "loading" && (
          <div>
            <p className="text-[14px] text-ayur-muted sm:text-[15px]">Researching your question…</p>
            {slow && (
              <p className="mt-1 text-[13px] text-ayur-muted sm:text-[14px]">
                Taking longer than usual: the research service may be waking up, which can take up to a minute.
              </p>
            )}
            <div aria-hidden="true" className="mt-3 space-y-2.5">
              <div className="h-3 w-full animate-pulse rounded-full bg-ayur-mint" />
              <div className="h-3 w-[92%] animate-pulse rounded-full bg-ayur-mint" />
              <div className="h-3 w-[68%] animate-pulse rounded-full bg-ayur-mint" />
            </div>
          </div>
        )}

        {state.status === "error" && (
          <div role="alert" className="flex flex-col items-start gap-3 rounded-2xl border border-[#efd9cf] bg-[#fbf3ef] p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] text-[#7a3522] sm:text-[15px]">{state.message}</p>
            <button
              type="button"
              onClick={onRetry}
              className="shrink-0 rounded-full border border-ayur-line bg-white px-4 py-2 text-[14px] font-medium text-ayur-ink transition-colors hover:border-ayur-green hover:text-ayur-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green"
            >
              Try again
            </button>
          </div>
        )}

        {state.status === "success" && <AnswerBody response={state.response} />}
      </div>
    </section>
  );
}

function AnswerBody({ response }: { response: ChatResponse }) {
  const { answer, sources, grounded, insufficientEvidence } = response;

  return (
    <>
      <p className="whitespace-pre-line text-[15px] leading-[1.65] text-ayur-ink [overflow-wrap:anywhere] sm:text-[16px]">{answer}</p>

      {!grounded && !insufficientEvidence && (
        <p className="mt-4 flex gap-2.5 rounded-2xl bg-[#f6f1e3] p-3.5 text-[13px] leading-relaxed text-[#5b4a22] sm:text-[14px]">
          <ShieldCheckIcon size={18} strokeWidth={1.7} className="mt-0.5 shrink-0" />
          <span>
            Preview answer from Gemini, not yet checked against AYUR-IP&rsquo;s verified sources. Confirm with the relevant authority
            or a qualified professional before relying on it.
          </span>
        </p>
      )}

      {sources.length > 0 && (
        <div className="mt-5 border-t border-ayur-line pt-4">
          <h3 className="text-[14px] font-semibold text-ayur-ink sm:text-[15px]">Sources</h3>
          <ol className="mt-2.5 space-y-2">
            {sources.map((source, i) => {
              const href = safeHttpUrl(source.url);
              return (
                <li key={source.id} className="flex items-start gap-2.5 text-[14px] text-ayur-ink sm:text-[15px]">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ayur-mint text-[12px] font-semibold text-ayur-green">
                    {i + 1}
                  </span>
                  <DocumentIcon size={18} strokeWidth={1.7} className="mt-0.5 shrink-0 text-ayur-leaf" />
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ayur-green underline decoration-ayur-green/30 underline-offset-2 [overflow-wrap:anywhere] hover:decoration-ayur-green"
                    >
                      {source.title}
                    </a>
                  ) : (
                    <span className="[overflow-wrap:anywhere]">{source.title}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
}

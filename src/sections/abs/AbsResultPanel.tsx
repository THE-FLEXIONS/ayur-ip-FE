import { CheckIcon, LeafIcon } from "../../components/ui/LineIcons";
import { ActionBar, Disclaimer, ResultList, ResultPlaceholder, TONES, TonePill, Verdict } from "../../components/ui/ToolKit";
import { LEVEL_LABEL, LEVEL_TONE, absReport, type AbsAnswers, type AbsResult } from "../../config/abs";
import { useLocalState } from "../../hooks/useLocalState";

type AbsResultPanelProps = {
  answers: AbsAnswers;
  result: AbsResult | null;
  onAsk: () => void;
};

/** Right column of the ABS checker: verdict, obligations and a document checklist. */
export default function AbsResultPanel({ answers, result, onAsk }: AbsResultPanelProps) {
  const [checked, setChecked] = useLocalState<string[]>("ayurip.abs.checklist.v1", []);

  if (!result) {
    const answered = [answers.who, answers.role, answers.resource, answers.purposes.length > 0, answers.knowledge].filter(Boolean).length;
    return (
      <div className="space-y-3">
        <ResultPlaceholder
          icon={<LeafIcon size={28} strokeWidth={1.6} />}
          title="Your compliance check appears here"
          body="Answer the five questions to see whether you need NBA approval, an SBB intimation, or nothing at all."
        />
        <div className="rounded-full bg-[#ecebe3]" role="progressbar" aria-valuemin={0} aria-valuemax={5} aria-valuenow={answered} aria-label="Questions answered">
          <div className="h-2 rounded-full bg-ayur-green transition-[width] duration-300" style={{ width: `${(answered / 5) * 100}%` }} />
        </div>
        <p className="text-center text-[12.5px] text-ayur-muted">{answered} of 5 answered</p>
      </div>
    );
  }

  const done = result.documents.filter((d) => checked.includes(d)).length;

  return (
    <div className="space-y-4" aria-live="polite">
      <Verdict tone={LEVEL_TONE[result.level]} eyebrow="Biological Diversity Act, 2002" title={result.headline} aside={<TonePill tone={LEVEL_TONE[result.level]}>{LEVEL_LABEL[result.level]}</TonePill>}>
        {result.summary}
      </Verdict>

      <ul className="space-y-3">
        {result.obligations.map((o) => {
          const t = TONES[LEVEL_TONE[o.level]];
          return (
            <li key={o.id} className="rounded-[20px] border border-[#e3e7dc] bg-white/90 p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`size-2 rounded-full ${t.dot}`} aria-hidden="true" />
                <h3 className="text-[15px] font-semibold text-ayur-ink">{o.title}</h3>
                <TonePill tone={LEVEL_TONE[o.level]}>{LEVEL_LABEL[o.level]}</TonePill>
                <span className="ml-auto text-[12px] font-medium text-[#7a817a]">{o.section}</span>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#3d4840]">{o.why}</p>
              {o.level !== "none" && (
                <dl className="mt-3 grid gap-2 text-[13px] sm:grid-cols-2">
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#7a817a]">Authority</dt>
                    <dd className="mt-0.5 text-ayur-ink">{o.authority}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#7a817a]">When</dt>
                    <dd className="mt-0.5 text-ayur-ink">{o.when}</dd>
                  </div>
                </dl>
              )}
            </li>
          );
        })}
      </ul>

      <div className="rounded-[20px] border border-[#ecebe3] bg-white/85 p-4 sm:p-5">
        <h3 className="text-[14px] font-semibold text-ayur-ink">Benefit sharing</h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#3d4840]">{result.benefitSharing}</p>
      </div>

      {result.documents.length > 0 && (
        <div className="rounded-[20px] border border-[#ecebe3] bg-white/85 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[14px] font-semibold text-ayur-ink">Documents to prepare</h3>
            <span className="text-[12.5px] font-medium text-ayur-muted">
              {done} / {result.documents.length} ready
            </span>
          </div>
          <ul className="mt-3 space-y-1.5">
            {result.documents.map((doc) => {
              const on = checked.includes(doc);
              return (
                <li key={doc}>
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={on}
                    onClick={() => setChecked((list) => (on ? list.filter((d) => d !== doc) : [...list, doc]))}
                    className="flex w-full items-start gap-3 rounded-xl px-2 py-1.5 text-left text-[13.5px] leading-snug hover:bg-[#f7f8f3] focus-visible:outline-2 focus-visible:outline-ayur-green"
                  >
                    <span className={`mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-[6px] border ${on ? "border-ayur-green bg-ayur-green text-white" : "border-[#c9ccc2] bg-white"}`}>
                      {on && <CheckIcon size={12} strokeWidth={3} />}
                    </span>
                    <span className={on ? "text-ayur-muted line-through" : "text-[#3d4840]"}>{doc}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <ResultList title="Tips" items={result.tips} />

      <ActionBar report={absReport(answers, result)} filename="ayurip-abs-compliance.txt" askLabel="Ask AI to walk me through it" onAsk={onAsk} />
      <Disclaimer>
        Based on the Biological Diversity Act, 2002 as amended in 2023. Rules and benefit-sharing regulations are updated from time to time; confirm the current
        process with the National Biodiversity Authority or your State Biodiversity Board. Not legal advice.
      </Disclaimer>
    </div>
  );
}

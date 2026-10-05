import { CheckIcon, ShieldCheckIcon } from "../../components/ui/LineIcons";
import { ActionBar, Disclaimer, FactGrid, ResultList, ResultPlaceholder, TonePill, Verdict } from "../../components/ui/ToolKit";
import { formulationReport, type Classification, type FormulationInput } from "../../config/formulation";

export type RecentClassification = { id: string; input: FormulationInput; category: string; tone: Classification["tone"]; at: number };

type ClassificationResultProps = {
  input: FormulationInput;
  result: Classification | null;
  recent: RecentClassification[];
  onOpenRecent: (entry: RecentClassification) => void;
  onAsk: () => void;
};

const STEPS: { label: string; done: (i: FormulationInput) => boolean }[] = [
  { label: "Dosage form", done: (i) => Boolean(i.dosageForm) },
  { label: "Ingredients", done: (i) => i.ingredients.length > 0 },
  { label: "Source of the formula", done: (i) => Boolean(i.basis) },
  { label: "Intended use", done: (i) => Boolean(i.use) },
];

/** Right column: live classification, or what's still missing. */
export default function ClassificationResult({ input, result, recent, onOpenRecent, onAsk }: ClassificationResultProps) {
  return (
    <div className="space-y-4">
      {result ? (
        <div className="space-y-4" aria-live="polite">
          <Verdict tone={result.tone} eyebrow="Regulatory category" title={result.category} aside={<TonePill tone={result.tone}>{result.confidence} confidence</TonePill>}>
            {result.summary}
          </Verdict>

          <FactGrid
            facts={[
              { label: "Regulator", value: result.regulator },
              { label: "Approval route", value: result.route },
              { label: "Governing law", value: result.law },
              { label: "Product", value: input.productName || "Untitled product" },
            ]}
          />

          {result.flags.length > 0 && (
            <div className="rounded-[20px] border border-[#eedcae] bg-[#fbf5e6] p-4 sm:p-5">
              <ResultList title="Needs attention" items={result.flags} />
            </div>
          )}

          <div className="space-y-5 rounded-[22px] border border-[#ecebe3] bg-white/85 p-5 sm:p-6">
            <ResultList title="What you need to do" items={result.requirements} />
            <ResultList title="The label must include" items={result.labelling} />
            <ResultList title="IP outlook" items={result.ipOutlook} />
          </div>

          <ActionBar
            report={formulationReport(input, result)}
            filename={`${(input.productName || "formulation").replace(/[^\w-]+/g, "-").toLowerCase()}-classification.txt`}
            askLabel="Get a cited AI review"
            onAsk={onAsk}
          />
          <Disclaimer>
            Indicative guidance from the Drugs and Cosmetics Act, 1940, the Drugs Rules, 1945, the Cosmetics Rules, 2020 and FSSAI regulations. It is not legal or
            regulatory advice; confirm with your State Licensing Authority or FSSAI before filing.
          </Disclaimer>
        </div>
      ) : (
        <>
          <ResultPlaceholder
            icon={<ShieldCheckIcon size={28} strokeWidth={1.6} />}
            title="Your classification appears here"
            body="Answer the four steps and the category, licence route, label requirements and IP outlook update as you go."
          />
          <ol className="grid grid-cols-2 gap-2">
            {STEPS.map((step) => {
              const done = step.done(input);
              return (
                <li
                  key={step.label}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-[13px] ${done ? "border-[#cfe3d2] bg-[#eef6ef] text-[#1d5a36]" : "border-[#ecebe3] bg-white/70 text-ayur-muted"}`}
                >
                  <span className={`flex size-5 items-center justify-center rounded-full ${done ? "bg-ayur-green text-white" : "border border-[#cfd2c8]"}`}>
                    {done && <CheckIcon size={12} strokeWidth={3} />}
                  </span>
                  {step.label}
                </li>
              );
            })}
          </ol>
        </>
      )}

      {recent.length > 0 && (
        <div className="rounded-[22px] border border-[#ecebe3] bg-white/70 p-4 sm:p-5 print:hidden">
          <h3 className="text-[14px] font-semibold text-ayur-ink">Recent on this device</h3>
          <ul className="mt-2 divide-y divide-[#efeee6]">
            {recent.map((r) => (
              <li key={r.id}>
                <button
                  type="button"
                  onClick={() => onOpenRecent(r)}
                  className="flex w-full items-center gap-3 rounded-lg py-2.5 text-left hover:bg-[#f7f8f3] focus-visible:outline-2 focus-visible:outline-ayur-green"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14px] font-medium text-ayur-ink">{r.input.productName || "Untitled product"}</span>
                    <span className="block truncate text-[12.5px] text-ayur-muted">{r.category}</span>
                  </span>
                  <span className="shrink-0 text-[12px] text-[#8a918a]">{new Date(r.at).toLocaleDateString(undefined, { day: "numeric", month: "short" })}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

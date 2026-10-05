import { ChoiceGroup, MultiChoice, ToolCard } from "../../components/ui/ToolKit";
import { APPLICANT_OPTIONS, ASSET_OPTIONS, type ClassicalBasis, type Disclosure, type IpAnswers, type Market } from "../../config/ipGuidance";

type IpQuestionsProps = {
  value: IpAnswers;
  onChange: (patch: Partial<IpAnswers>) => void;
  onLoadScenario: (answers: IpAnswers) => void;
  onReset: () => void;
};

const SCENARIOS: { label: string; answers: IpAnswers }[] = [
  {
    label: "Startup with a new herbal extract",
    answers: { assets: ["formulation", "process", "brand"], disclosed: "no", classical: "partly", applicant: "startup", market: "global" },
  },
  {
    label: "Producer group with a regional product",
    answers: { assets: ["origin", "brand"], disclosed: "yes", classical: "yes", applicant: "group", market: "india" },
  },
  {
    label: "Launching a classical medicine brand",
    answers: { assets: ["brand", "design"], disclosed: "no", classical: "yes", applicant: "small", market: "india" },
  },
];

const DISCLOSED: { value: Disclosure; label: string; hint: string }[] = [
  { value: "no", label: "No, it's confidential", hint: "Not sold, published or presented" },
  { value: "yes", label: "Yes, it's public", hint: "Sold, published, shown at an event or online" },
  { value: "unsure", label: "Not sure", hint: "Shared with a few people or partners" },
];

const CLASSICAL: { value: ClassicalBasis; label: string; hint: string }[] = [
  { value: "no", label: "No, it's new", hint: "Not described in classical texts" },
  { value: "partly", label: "Partly", hint: "Builds on a classical formula or known use" },
  { value: "yes", label: "Yes", hint: "Described in classical texts or TKDL" },
];

const MARKETS: { value: Market; label: string; hint: string }[] = [
  { value: "india", label: "India only", hint: "Domestic market" },
  { value: "global", label: "India and abroad", hint: "Exports or foreign partners" },
];

/** Left column of IP Guidance: the five questions. */
export default function IpQuestions({ value, onChange, onLoadScenario, onReset }: IpQuestionsProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-[22px] border border-[#dfe8db] bg-[#f3f7f1] p-4 sm:p-5">
        <p className="text-[13px] font-medium text-[#3d4840]">Try a scenario</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {SCENARIOS.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => onLoadScenario(s.answers)}
              className="rounded-full border border-[#d6e2d3] bg-white px-3.5 py-1.5 text-[13px] font-medium text-ayur-green-deep transition-colors hover:border-ayur-green hover:bg-[#f8fbf6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green"
            >
              {s.label}
            </button>
          ))}
          <button type="button" onClick={onReset} className="rounded-full px-3 py-1.5 text-[13px] font-medium text-ayur-muted underline-offset-4 hover:underline">
            Clear
          </button>
        </div>
      </div>

      <ToolCard step={1} title="What do you want to protect?" description="Choose everything that applies.">
        <MultiChoice label="What do you want to protect?" options={ASSET_OPTIONS} value={value.assets} onChange={(assets) => onChange({ assets })} />
      </ToolCard>

      <ToolCard step={2} title="Has it been made public?" description="Patents and designs must be new on the day you file.">
        <ChoiceGroup label="Has it been made public?" options={DISCLOSED} value={value.disclosed} onChange={(disclosed) => onChange({ disclosed })} columns={1} />
      </ToolCard>

      <ToolCard step={3} title="Is it described in classical texts?" description="Traditional knowledge can't be patented in India.">
        <ChoiceGroup label="Is it described in classical texts?" options={CLASSICAL} value={value.classical} onChange={(classical) => onChange({ classical })} columns={1} />
      </ToolCard>

      <ToolCard step={4} title="Who will file?" description="Official fees depend on the applicant.">
        <ChoiceGroup label="Who will file?" options={APPLICANT_OPTIONS} value={value.applicant} onChange={(applicant) => onChange({ applicant })} />
      </ToolCard>

      <ToolCard step={5} title="Where will you sell?">
        <ChoiceGroup label="Where will you sell?" options={MARKETS} value={value.market} onChange={(market) => onChange({ market })} />
      </ToolCard>
    </div>
  );
}

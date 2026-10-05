import { ChoiceGroup, MultiChoice, ToolCard } from "../../components/ui/ToolKit";
import type { AbsAnswers, Knowledge, Purpose, Resource, Role, Who } from "../../config/abs";

type AbsQuestionsProps = {
  value: AbsAnswers;
  onChange: (patch: Partial<AbsAnswers>) => void;
  onLoadScenario: (answers: AbsAnswers) => void;
  onReset: () => void;
};

const SCENARIOS: { label: string; answers: AbsAnswers }[] = [
  { label: "Indian brand, wild-collected herbs", answers: { who: "indian", role: "business", resource: "wild", purposes: ["commercial"], knowledge: "codified" } },
  { label: "Foreign company patenting an extract", answers: { who: "foreign", role: "business", resource: "market", purposes: ["research", "ipr"], knowledge: "none" } },
  { label: "Vaidya using farm-grown plants", answers: { who: "indian", role: "practitioner", resource: "cultivated", purposes: ["commercial"], knowledge: "codified" } },
];

const WHO: { value: Who; label: string; hint: string }[] = [
  { value: "indian", label: "Indian citizen or Indian entity", hint: "Registered in India, Indian-controlled" },
  { value: "foreign-controlled", label: "Indian company with foreign control", hint: "Foreign shareholding or management control" },
  { value: "foreign", label: "Foreign national, NRI or foreign company", hint: "Includes non-resident Indians" },
];

const ROLE: { value: Role; label: string; hint: string }[] = [
  { value: "business", label: "Manufacturer, trader or researcher", hint: "Company, startup, lab or institution" },
  { value: "practitioner", label: "Vaidya, hakim or AYUSH practitioner", hint: "Registered practitioner of indigenous medicine" },
  { value: "community", label: "Local community, grower or cultivator", hint: "Farmers, collectors, community groups" },
];

const RESOURCE: { value: Resource; label: string; hint: string }[] = [
  { value: "wild", label: "Collected from the wild", hint: "Forests, common land, wild harvest" },
  { value: "cultivated", label: "Cultivated medicinal plants", hint: "Grown on farms, with records" },
  { value: "market", label: "Bought from traders", hint: "Origin not documented" },
  { value: "none", label: "No biological material", hint: "Only literature or data" },
];

const PURPOSES: { value: Purpose; label: string; hint: string }[] = [
  { value: "research", label: "Research", hint: "Lab studies, trials, analysis" },
  { value: "commercial", label: "Commercial products", hint: "Making or selling products" },
  { value: "ipr", label: "Filing a patent or other IPR", hint: "Based on the resource or knowledge" },
  { value: "transfer", label: "Sharing results or samples abroad", hint: "With a foreign person or company" },
  { value: "biosurvey", label: "Bio-survey or bio-utilisation", hint: "Surveying or screening resources" },
];

const KNOWLEDGE: { value: Knowledge; label: string; hint: string }[] = [
  { value: "none", label: "No traditional knowledge", hint: "Only the biological material" },
  { value: "codified", label: "Codified, from classical texts", hint: "Charaka, Sushruta and others" },
  { value: "community", label: "From a local community", hint: "Oral or undocumented knowledge" },
];

/** Left column of the ABS checker. */
export default function AbsQuestions({ value, onChange, onLoadScenario, onReset }: AbsQuestionsProps) {
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

      <ToolCard step={1} title="Who is accessing the resource?">
        <ChoiceGroup label="Who is accessing the resource?" options={WHO} value={value.who} onChange={(who) => onChange({ who })} columns={1} />
      </ToolCard>
      <ToolCard step={2} title="What is your role?">
        <ChoiceGroup label="What is your role?" options={ROLE} value={value.role} onChange={(role) => onChange({ role })} columns={1} />
      </ToolCard>
      <ToolCard step={3} title="Where does the plant material come from?">
        <ChoiceGroup label="Where does the plant material come from?" options={RESOURCE} value={value.resource} onChange={(resource) => onChange({ resource })} />
      </ToolCard>
      <ToolCard step={4} title="What will you do with it?" description="Choose everything that applies.">
        <MultiChoice label="What will you do with it?" options={PURPOSES} value={value.purposes} onChange={(purposes) => onChange({ purposes })} />
      </ToolCard>
      <ToolCard step={5} title="Does it use traditional knowledge?">
        <ChoiceGroup label="Does it use traditional knowledge?" options={KNOWLEDGE} value={value.knowledge} onChange={(knowledge) => onChange({ knowledge })} columns={1} />
      </ToolCard>
    </div>
  );
}

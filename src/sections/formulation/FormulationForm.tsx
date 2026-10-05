import { useId } from "react";
import { ChoiceGroup, FieldLabel, ToolCard, inputClass } from "../../components/ui/ToolKit";
import {
  AUTHORITATIVE_BOOKS,
  DOSAGE_FORMS,
  FORMULATION_EXAMPLES,
  type FormulationInput,
  type IntendedUse,
  type SourceBasis,
} from "../../config/formulation";
import IngredientPicker from "./IngredientPicker";

type FormulationFormProps = {
  value: FormulationInput;
  onChange: (patch: Partial<FormulationInput>) => void;
  onLoadExample: (input: FormulationInput) => void;
  onReset: () => void;
};

const BASIS_OPTIONS: { value: SourceBasis; label: string; hint: string }[] = [
  { value: "exact", label: "Exactly as in a classical text", hint: "Same ingredients, ratios and method" },
  { value: "modified", label: "Adapted from classical texts", hint: "Changed ratios, added or removed herbs" },
  { value: "none", label: "A new combination", hint: "Not based on a specific classical formula" },
];

const USE_OPTIONS: { value: IntendedUse; label: string; hint: string }[] = [
  { value: "therapeutic", label: "Treat or manage a condition", hint: "Medicinal claims, e.g. 'for joint pain'" },
  { value: "supplement", label: "General well-being", hint: "Immunity, energy, daily wellness" },
  { value: "cosmetic", label: "Skin, hair or beauty care", hint: "Cleanse, beautify, nourish" },
  { value: "food", label: "Food or beverage", hint: "Teas, bars, drink mixes" },
];

/** Left column of the classifier: everything about the product. */
export default function FormulationForm({ value, onChange, onLoadExample, onReset }: FormulationFormProps) {
  const nameId = useId();
  const bookId = useId();

  return (
    <div className="space-y-4">
      <div className="rounded-[22px] border border-[#dfe8db] bg-[#f3f7f1] p-4 sm:p-5">
        <p className="text-[13px] font-medium text-[#3d4840]">Try an example</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {FORMULATION_EXAMPLES.map((example) => (
            <button
              key={example.label}
              type="button"
              onClick={() => onLoadExample(example.input)}
              className="rounded-full border border-[#d6e2d3] bg-white px-3.5 py-1.5 text-[13px] font-medium text-ayur-green-deep transition-colors hover:border-ayur-green hover:bg-[#f8fbf6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green"
            >
              {example.label}
            </button>
          ))}
          <button type="button" onClick={onReset} className="rounded-full px-3 py-1.5 text-[13px] font-medium text-ayur-muted underline-offset-4 hover:underline">
            Clear
          </button>
        </div>
      </div>

      <ToolCard step={1} title="Product and dosage form" description="What is it called, and what form is it sold in?">
        <FieldLabel htmlFor={nameId}>Product name (optional)</FieldLabel>
        <input
          id={nameId}
          value={value.productName}
          onChange={(e) => onChange({ productName: e.target.value })}
          placeholder="e.g. Triphala Churna"
          className={inputClass}
        />
        <p className="mb-2 mt-4 text-[13px] font-medium text-[#3d4840]">Dosage form</p>
        <div role="radiogroup" aria-label="Dosage form" className="grid grid-cols-2 gap-2 min-[480px]:grid-cols-3">
          {DOSAGE_FORMS.map((form) => {
            const on = value.dosageForm === form.value;
            return (
              <button
                key={form.value}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => onChange({ dosageForm: form.value })}
                className={`rounded-xl border px-3 py-2 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green ${
                  on ? "border-ayur-green bg-[#f1f7f1] shadow-[0_0_0_1px_var(--color-ayur-green)]" : "border-[#e4e5dc] bg-white hover:bg-[#fafbf7]"
                }`}
              >
                <span className="block text-[13.5px] font-medium leading-tight text-ayur-ink">{form.label}</span>
                <span className="block text-[11.5px] text-ayur-muted">{form.hint}</span>
              </button>
            );
          })}
        </div>
      </ToolCard>

      <ToolCard step={2} title="Ingredients" description="Include excipients and additives: they can change the category.">
        <IngredientPicker value={value.ingredients} onChange={(ingredients) => onChange({ ingredients })} />
      </ToolCard>

      <ToolCard step={3} title="Source of the formula" description="Is the recipe taken from the authoritative Ayurvedic books?">
        <ChoiceGroup label="Source of the formula" options={BASIS_OPTIONS} value={value.basis} onChange={(basis) => onChange({ basis })} columns={1} />
        {value.basis && value.basis !== "none" && (
          <div className="mt-4">
            <FieldLabel htmlFor={bookId}>Which book? (First Schedule, Drugs and Cosmetics Act)</FieldLabel>
            <select id={bookId} value={value.book} onChange={(e) => onChange({ book: e.target.value })} className={`${inputClass} appearance-none`}>
              <option value="">Select a book…</option>
              {AUTHORITATIVE_BOOKS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        )}
      </ToolCard>

      <ToolCard step={4} title="Intended use and claims" description="How will you market it? Claims decide the regulator.">
        <ChoiceGroup label="Intended use" options={USE_OPTIONS} value={value.use} onChange={(use) => onChange({ use })} />
      </ToolCard>
    </div>
  );
}

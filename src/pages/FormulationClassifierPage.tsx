import { useEffect, useMemo, useRef } from "react";
import WorkspaceShell from "../components/layout/WorkspaceShell";
import { ResultJump } from "../components/ui/ToolKit";
import type { ResearchTool } from "../config/research";
import { EMPTY_FORMULATION, DOSAGE_FORMS, classify, isComplete, type FormulationInput } from "../config/formulation";
import { useLocalState } from "../hooks/useLocalState";
import { ClassificationResult, FormulationForm, type RecentClassification } from "../sections/formulation";

type FormulationClassifierPageProps = {
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  /** Opens the home page with a question for the AI. */
  onAskAI: (question: string, tool: ResearchTool) => void;
};

const newId = () => Math.random().toString(36).slice(2, 10);

export default function FormulationClassifierPage({ onNavigate, onOpenMenu, onAskAI }: FormulationClassifierPageProps) {
  const [input, setInput] = useLocalState<FormulationInput>("ayurip.formulation.draft.v1", EMPTY_FORMULATION);
  const [recent, setRecent] = useLocalState<RecentClassification[]>("ayurip.formulation.recent.v1", []);
  // One recent entry per product being worked on; a new example or Clear starts a new one.
  const entryId = useRef(newId());

  const result = useMemo(() => (isComplete(input) ? classify(input) : null), [input]);

  // Remember a classification once the user stops editing for a moment.
  useEffect(() => {
    if (!result) return;
    const timer = setTimeout(() => {
      const entry: RecentClassification = { id: entryId.current, input, category: result.category, tone: result.tone, at: Date.now() };
      setRecent((list) => [entry, ...list.filter((r) => r.id !== entry.id)].slice(0, 5));
    }, 1200);
    return () => clearTimeout(timer);
  }, [input, result, setRecent]);

  function load(next: FormulationInput, id = newId()) {
    entryId.current = id;
    setInput(next);
  }

  function askAI() {
    if (!result) return;
    const form = DOSAGE_FORMS.find((f) => f.value === input.dosageForm)?.label ?? input.dosageForm;
    const source =
      input.basis === "exact" ? `reproduced exactly from ${input.book || "a classical text"}` : input.basis === "modified" ? `adapted from ${input.book || "classical texts"}` : "a new combination";
    onAskAI(
      `Classify this Ayurvedic product under Indian law and cite the provisions: "${input.productName || "my product"}", a ${form} containing ${input.ingredients.join(", ")}; the formula is ${source}; intended use: ${input.use}. My preliminary classification is "${result.category}". Confirm the category, the licence route and the labelling requirements.`,
      "formulation",
    );
  }

  return (
    <WorkspaceShell
      eyebrow="Tools"
      title="Formulation Classifier"
      description="Find out how Indian law classifies an Ayurvedic product (classical drug, proprietary medicine, supplement, cosmetic or food) and what that means for licensing, labelling and IP."
      onNavigate={onNavigate}
      onOpenMenu={onOpenMenu}
      wide
    >
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
        <FormulationForm
          value={input}
          onChange={(patch) => setInput((prev) => ({ ...prev, ...patch }))}
          onLoadExample={(example) => load(example)}
          onReset={() => load(EMPTY_FORMULATION)}
        />
        <div id="tool-result" className="scroll-mt-24">
          <ClassificationResult input={input} result={result} recent={recent} onOpenRecent={(entry) => load(entry.input, entry.id)} onAsk={askAI} />
        </div>
      </div>
      {result && <ResultJump targetId="tool-result" label={result.category} tone={result.tone} />}
    </WorkspaceShell>
  );
}

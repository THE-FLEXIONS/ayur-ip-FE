import { useMemo } from "react";
import WorkspaceShell from "../components/layout/WorkspaceShell";
import { ResultJump } from "../components/ui/ToolKit";
import { EMPTY_ABS, LEVEL_TONE, assessAbs, isAbsComplete, type AbsAnswers } from "../config/abs";
import type { ResearchTool } from "../config/research";
import { useLocalState } from "../hooks/useLocalState";
import { AbsQuestions, AbsResultPanel } from "../sections/abs";

type AbsCompliancePageProps = {
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  /** Opens the home page with a question for the AI. */
  onAskAI: (question: string, tool: ResearchTool) => void;
};

export default function AbsCompliancePage({ onNavigate, onOpenMenu, onAskAI }: AbsCompliancePageProps) {
  const [answers, setAnswers] = useLocalState<AbsAnswers>("ayurip.abs.answers.v1", EMPTY_ABS);
  const result = useMemo(() => (isAbsComplete(answers) ? assessAbs(answers) : null), [answers]);

  function askAI() {
    if (!result) return;
    onAskAI(
      `Under India's Biological Diversity Act (as amended in 2023): I am ${answers.who === "indian" ? "an Indian entity" : answers.who === "foreign" ? "a foreign entity" : "an Indian company with foreign control"} (${answers.role}), using ${answers.resource} plant material with ${answers.knowledge} traditional knowledge for ${answers.purposes.join(", ")}. My preliminary result is "${result.headline}". Walk me through the exact NBA/SBB process, forms, timelines and benefit-sharing terms.`,
      "abs",
    );
  }

  return (
    <WorkspaceShell
      eyebrow="Tools"
      title="ABS Compliance"
      description="Check whether using a medicinal plant or traditional knowledge needs approval from the National Biodiversity Authority, an intimation to your State Biodiversity Board, or nothing at all."
      onNavigate={onNavigate}
      onOpenMenu={onOpenMenu}
      wide
    >
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
        <AbsQuestions
          value={answers}
          onChange={(patch) => setAnswers((prev) => ({ ...prev, ...patch }))}
          onLoadScenario={setAnswers}
          onReset={() => setAnswers(EMPTY_ABS)}
        />
        <div id="tool-result" className="scroll-mt-24">
          <AbsResultPanel answers={answers} result={result} onAsk={askAI} />
        </div>
      </div>
      {result && <ResultJump targetId="tool-result" label={result.headline} tone={LEVEL_TONE[result.level]} />}
    </WorkspaceShell>
  );
}

import { useMemo } from "react";
import WorkspaceShell from "../components/layout/WorkspaceShell";
import { ResultJump } from "../components/ui/ToolKit";
import { ASSET_OPTIONS, EMPTY_IP_ANSWERS, isIpComplete, recommend, type IpAnswers } from "../config/ipGuidance";
import type { ResearchTool } from "../config/research";
import { useLocalState } from "../hooks/useLocalState";
import { IpQuestions, IpResults } from "../sections/ip-guidance";

type IpGuidancePageProps = {
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  /** Opens the home page with a question for the AI. */
  onAskAI: (question: string, tool: ResearchTool) => void;
};

export default function IpGuidancePage({ onNavigate, onOpenMenu, onAskAI }: IpGuidancePageProps) {
  const [answers, setAnswers] = useLocalState<IpAnswers>("ayurip.ip.answers.v1", EMPTY_IP_ANSWERS);
  const routes = useMemo(() => (isIpComplete(answers) ? recommend(answers) : null), [answers]);

  function askAI() {
    if (!routes) return;
    const assets = answers.assets.map((a) => ASSET_OPTIONS.find((o) => o.value === a)?.label.toLowerCase()).join(", ");
    const plan = routes.filter((r) => r.fit !== "unsuitable").map((r) => r.name);
    onAskAI(
      `I want to protect ${assets} for an Ayurvedic innovation in ${answers.market === "global" ? "India and abroad" : "India"}. It is ${answers.disclosed === "yes" ? "already public" : answers.disclosed === "no" ? "still confidential" : "possibly disclosed"}, and ${answers.classical === "yes" ? "it is described in classical texts" : answers.classical === "partly" ? "it builds on classical knowledge" : "it is not in classical texts"}. Suggested routes: ${plan.join(", ") || "none"}. Give me a step-by-step filing strategy with costs, timelines and the relevant sections of Indian law.`,
      "ip-guidance",
    );
  }

  return (
    <WorkspaceShell
      eyebrow="Tools"
      title="IP Guidance"
      description="Answer five questions to see which kinds of intellectual property protect your Ayurvedic innovation, with official fees, timelines and filing steps for India."
      onNavigate={onNavigate}
      onOpenMenu={onOpenMenu}
      wide
    >
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
        <IpQuestions
          value={answers}
          onChange={(patch) => setAnswers((prev) => ({ ...prev, ...patch }))}
          onLoadScenario={setAnswers}
          onReset={() => setAnswers(EMPTY_IP_ANSWERS)}
        />
        <div id="tool-result" className="scroll-mt-24">
          <IpResults answers={answers} routes={routes} onAsk={askAI} />
        </div>
      </div>
      {routes && (
        <ResultJump
          targetId="tool-result"
          label={`${routes.filter((r) => r.fit !== "unsuitable").length} protection routes found`}
          tone={routes.some((r) => r.fit === "strong") ? "green" : "amber"}
        />
      )}
    </WorkspaceShell>
  );
}

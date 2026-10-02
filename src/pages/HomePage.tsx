import { useEffect, useRef, useState } from "react";
import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";
import type { AskRequest, Jurisdiction, ResearchMode, ResearchTool } from "../config/research";
import type { AskController } from "../hooks/useAsk";
import {
  AnswerPanel,
  AskBox,
  FeatureGrid,
  FeaturesSection,
  HeritageBanner,
  HeroBackdrop,
  HeroIntro,
  HowItWorksSection,
  TryAsking,
} from "../sections/home";

/** Something the sidebar asks the home page to do once it is shown. `id` makes repeats distinct. */
export type HomeIntent = { id: number } & (
  | { kind: "focus" }
  | { kind: "prefill"; text: string; tool?: ResearchTool | null }
  | { kind: "scroll"; targetId: string }
);

type HomePageProps = {
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  /** Receives submitted questions (the app sends guests to sign in first). */
  onAsk: (request: AskRequest) => void;
  /** The current streamed answer, if any. */
  answer: AskController;
  answerSaved: boolean;
  onToggleAnswerSaved: () => void;
  intent?: HomeIntent | null;
  defaultMode?: ResearchMode;
  defaultJurisdiction?: Jurisdiction;
};

export default function HomePage({
  onNavigate,
  onOpenMenu,
  onAsk,
  answer,
  answerSaved,
  onToggleAnswerSaved,
  intent,
  defaultMode,
  defaultJurisdiction,
}: HomePageProps) {
  const [question, setQuestion] = useState("");
  // Tool the current question came from (feature card or sidebar), sent along with it.
  const [tool, setTool] = useState<ResearchTool | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput(text: string, nextTool: ResearchTool | null = null) {
    setQuestion(text);
    setTool(nextTool);
    const input = inputRef.current;
    if (!input) return;
    input.scrollIntoView({ behavior: "smooth", block: "center" });
    input.focus({ preventScroll: true });
    // Place the caret at the end so partial prompts can be completed directly.
    requestAnimationFrame(() => input.setSelectionRange(text.length, text.length));
  }

  useEffect(() => {
    if (!intent) return;
    if (intent.kind === "focus") focusInput("");
    else if (intent.kind === "prefill") focusInput(intent.text, intent.tool ?? null);
    else {
      const target = document.getElementById(intent.targetId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      target?.focus({ preventScroll: true });
    }
    // Run once per intent; `id` changes whenever a new one is issued.
  }, [intent?.id]);

  function handleValueChange(value: string) {
    setQuestion(value);
    if (!value.trim()) setTool(null);
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <main id="top" className="relative overflow-x-clip bg-ayur-ivory font-sans text-ayur-ink">
        <HeroBackdrop />

        <div className="relative mx-auto max-w-[1240px] px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
          <AppHeader onNavigate={onNavigate} onOpenMenu={onOpenMenu} activePage="Home" />
          <HeroIntro />

          <div className="relative z-20 mt-7 animate-rise [animation-delay:340ms] sm:mt-10 lg:mx-auto lg:mt-4 lg:max-w-[1040px]">
            <AskBox
              value={question}
              onValueChange={handleValueChange}
              onAsk={(request) => onAsk({ ...request, tool })}
              inputRef={inputRef}
              defaultMode={defaultMode}
              defaultJurisdiction={defaultJurisdiction}
            />
            <AnswerPanel
              answer={answer}
              saved={answerSaved}
              onToggleSaved={onToggleAnswerSaved}
              onStop={answer.stop}
              onDismiss={answer.reset}
              onRetry={() => answer.request && onAsk(answer.request)}
            />
          </div>

          <div className="mt-6 sm:mt-10 lg:mt-12">
            <h2 className="sr-only">Tools</h2>
            <FeatureGrid onSelect={(f) => focusInput(f.prompt, f.tool)} />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <HeritageBanner />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <TryAsking onPick={(text) => focusInput(text)} />
          </div>
        </div>
      </main>
      <FeaturesSection />
      <HowItWorksSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

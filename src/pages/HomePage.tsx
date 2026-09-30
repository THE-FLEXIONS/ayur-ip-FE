import { useEffect, useRef, useState } from "react";
import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";
import type { LanguageCode } from "../config/app";
import type { AskRequest, Jurisdiction, ResearchMode } from "../config/research";
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
  type AnswerState,
} from "../sections/home";
import { askAssistant, ChatError } from "../services/chat";

/** Something the sidebar asks the home page to do once it is shown. `id` makes repeats distinct. */
export type HomeIntent = { id: number } & (
  | { kind: "focus" }
  | { kind: "prefill"; text: string }
  | { kind: "scroll"; targetId: string }
);

type HomePageProps = {
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  /** Called for every submitted question, e.g. to record it in history. */
  onAsk?: (request: AskRequest) => void;
  /** Language the answer is requested in. */
  language?: LanguageCode;
  intent?: HomeIntent | null;
  defaultMode?: ResearchMode;
  defaultJurisdiction?: Jurisdiction;
};

export default function HomePage({
  onNavigate,
  onOpenMenu,
  onAsk,
  language = "en",
  intent,
  defaultMode,
  defaultJurisdiction,
}: HomePageProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<AnswerState | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pending = useRef<AbortController | null>(null);

  // Cancel an in-flight question when the page unmounts.
  useEffect(() => () => pending.current?.abort(), []);

  function focusInput(text: string) {
    setQuestion(text);
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
    else if (intent.kind === "prefill") focusInput(intent.text);
    else {
      const target = document.getElementById(intent.targetId);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      target?.focus({ preventScroll: true });
    }
    // Run once per intent; `id` changes whenever a new one is issued.
  }, [intent?.id]);

  async function fetchAnswer(request: AskRequest) {
    // A new question replaces the one still loading.
    pending.current?.abort();
    const controller = new AbortController();
    pending.current = controller;
    setAnswer({ status: "loading", request });
    try {
      const response = await askAssistant(request, language, controller.signal);
      if (!controller.signal.aborted) setAnswer({ status: "success", request, response });
    } catch (err) {
      if (controller.signal.aborted) return;
      const message = err instanceof ChatError ? err.message : "Something went wrong. Please try again.";
      setAnswer({ status: "error", request, message });
    } finally {
      if (pending.current === controller) pending.current = null;
    }
  }

  function handleAsk(request: AskRequest) {
    onAsk?.(request);
    void fetchAnswer(request);
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
              onValueChange={setQuestion}
              onAsk={handleAsk}
              inputRef={inputRef}
              defaultMode={defaultMode}
              defaultJurisdiction={defaultJurisdiction}
            />
            {answer && <AnswerPanel state={answer} onRetry={() => void fetchAnswer(answer.request)} />}
          </div>

          <div className="mt-6 sm:mt-10 lg:mt-12">
            <h2 className="sr-only">Tools</h2>
            <FeatureGrid onSelect={(f) => focusInput(f.prompt)} />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <HeritageBanner />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <TryAsking onPick={focusInput} />
          </div>
        </div>
      </main>
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}

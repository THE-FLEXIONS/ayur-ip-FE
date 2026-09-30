import { useEffect, useRef, useState } from "react";
import AppHeader from "../components/layout/AppHeader";
import Footer from "../components/layout/Footer";
import { JURISDICTION_LABELS, MODE_LABELS, type AskRequest, type Jurisdiction, type ResearchMode } from "../config/research";
import {
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
  | { kind: "prefill"; text: string }
  | { kind: "scroll"; targetId: string }
);

type HomePageProps = {
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  /** Receives submitted questions. Wire this to the answer service. */
  onAsk?: (request: AskRequest) => void;
  intent?: HomeIntent | null;
  defaultMode?: ResearchMode;
  defaultJurisdiction?: Jurisdiction;
};

export default function HomePage({ onNavigate, onOpenMenu, onAsk, intent, defaultMode, defaultJurisdiction }: HomePageProps) {
  const [question, setQuestion] = useState("");
  const [lastAsk, setLastAsk] = useState<AskRequest | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  function handleAsk(request: AskRequest) {
    setLastAsk(request);
    onAsk?.(request);
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
            <p aria-live="polite" className="min-h-0 px-4 text-[13px] text-ayur-muted empty:hidden sm:px-6">
              {lastAsk && (
                <span className="mt-3 block">
                  Question sent: &ldquo;{lastAsk.question}&rdquo; · {MODE_LABELS[lastAsk.mode]} · {JURISDICTION_LABELS[lastAsk.jurisdiction]}
                </span>
              )}
            </p>
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

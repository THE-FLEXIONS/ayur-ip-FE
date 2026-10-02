import Footer from "../components/layout/Footer";
import { KnowledgeInAction, UseCasesHero } from "../sections/use-cases";

// ─── Page ─────────────────────────────────────────────────────────────────

export default function UseCasesPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div>
      <UseCasesHero />
      <KnowledgeInAction />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

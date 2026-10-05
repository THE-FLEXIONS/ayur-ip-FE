import WorkspaceShell from "../components/layout/WorkspaceShell";
import { ContactForm, FaqSearch, OfficialChannels, QuickGuides, ServiceStatus } from "../sections/help";

type HelpPageProps = {
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
};

export default function HelpPage({ onNavigate, onOpenMenu }: HelpPageProps) {
  return (
    <WorkspaceShell
      eyebrow="Support"
      title="Help & Support"
      description="Guides to every part of AyurIP, answers to common questions, live service status and a direct line to the team."
      onNavigate={onNavigate}
      onOpenMenu={onOpenMenu}
      wide
    >
      <div className="space-y-8">
        <QuickGuides onOpen={onNavigate} />
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <FaqSearch />
            <ContactForm />
          </div>
          <div className="space-y-6">
            <ServiceStatus />
            <OfficialChannels />
          </div>
        </div>
      </div>
    </WorkspaceShell>
  );
}

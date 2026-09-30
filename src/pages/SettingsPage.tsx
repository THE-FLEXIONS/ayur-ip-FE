import WorkspaceShell from "../components/layout/WorkspaceShell";
import type { Workspace } from "../hooks/useWorkspace";
import { HistoryControls, LanguagePreference, ResearchDefaults } from "../sections/settings";

type SettingsPageProps = {
  workspace: Workspace;
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
};

export default function SettingsPage({ workspace, onNavigate, onOpenMenu }: SettingsPageProps) {
  const { preferences, updatePreferences, history, clearHistory } = workspace;
  return (
    <WorkspaceShell
      eyebrow="Your workspace"
      title="Settings"
      description="Defaults for new questions, interface language and your stored questions."
      onNavigate={onNavigate}
      onOpenMenu={onOpenMenu}
    >
      <div className="space-y-5">
        <ResearchDefaults preferences={preferences} onChange={updatePreferences} />
        <LanguagePreference value={preferences.language} onChange={(language) => updatePreferences({ language })} />
        <HistoryControls
          historyCount={history.length}
          savedCount={history.filter((e) => e.saved).length}
          onClearHistory={clearHistory}
        />
      </div>
    </WorkspaceShell>
  );
}

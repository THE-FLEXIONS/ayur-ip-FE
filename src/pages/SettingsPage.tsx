import WorkspaceShell from "../components/layout/WorkspaceShell";
import type { Workspace } from "../hooks/useWorkspace";
import { HistoryControls, LanguagePreference, ResearchDefaults } from "../sections/settings";
import { WorkspaceGate } from "../sections/workspace";

type SettingsPageProps = {
  workspace: Workspace;
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
};

export default function SettingsPage({ workspace, onNavigate, onOpenMenu }: SettingsPageProps) {
  const { preferences, updatePreferences, history, clearHistory } = workspace;
  const signedIn = workspace.status !== "guest";
  return (
    <WorkspaceShell
      eyebrow="Your workspace"
      title="Settings"
      description="Defaults for new questions, the language answers are written in, and your stored questions."
      onNavigate={onNavigate}
      onOpenMenu={onOpenMenu}
    >
      <div className="space-y-5">
        <ResearchDefaults preferences={preferences} onChange={updatePreferences} />
        <LanguagePreference value={preferences.language} onChange={(language) => updatePreferences({ language })} />
        {signedIn ? (
          <WorkspaceGate workspace={workspace} onSignIn={() => onNavigate("Login")}>
            <HistoryControls
              historyCount={history.length}
              savedCount={history.filter((e) => e.saved).length}
              onClearHistory={clearHistory}
            />
          </WorkspaceGate>
        ) : (
          <p className="px-1 text-[13.5px] text-ayur-muted">
            These settings are kept in this browser until you sign in; then they're saved to your account.
          </p>
        )}
      </div>
    </WorkspaceShell>
  );
}

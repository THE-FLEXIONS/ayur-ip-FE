import WorkspaceShell from "../components/layout/WorkspaceShell";
import type { HistoryEntry, Workspace } from "../hooks/useWorkspace";
import { QuestionList, WorkspaceGate } from "../sections/workspace";

type SavedPageProps = {
  workspace: Workspace;
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  onAskAgain: (entry: HistoryEntry) => void;
};

export default function SavedPage({ workspace, onNavigate, onOpenMenu, onAskAgain }: SavedPageProps) {
  return (
    <WorkspaceShell
      eyebrow="Your workspace"
      title="Saved"
      description="Questions and answers you bookmarked."
      onNavigate={onNavigate}
      onOpenMenu={onOpenMenu}
    >
      <WorkspaceGate workspace={workspace} onSignIn={() => onNavigate("Login")}>
        <QuestionList
          label="Saved questions"
          entries={workspace.history.filter((e) => e.saved)}
          onAskAgain={onAskAgain}
          onToggleSaved={workspace.toggleSaved}
          empty={{
            title: "Nothing saved yet",
            body: "Use the bookmark next to any question in History, or Save under an answer, to keep it here.",
            actionLabel: "Open history",
            onAction: () => onNavigate("History"),
          }}
        />
      </WorkspaceGate>
    </WorkspaceShell>
  );
}

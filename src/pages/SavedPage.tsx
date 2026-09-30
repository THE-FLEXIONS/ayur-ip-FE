import WorkspaceShell from "../components/layout/WorkspaceShell";
import type { HistoryEntry, Workspace } from "../hooks/useWorkspace";
import { QuestionList } from "../sections/workspace";

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
      description="Questions you bookmarked from your history."
      onNavigate={onNavigate}
      onOpenMenu={onOpenMenu}
    >
      <QuestionList
        label="Saved questions"
        entries={workspace.history.filter((e) => e.saved)}
        onAskAgain={onAskAgain}
        onToggleSaved={workspace.toggleSaved}
        empty={{
          title: "Nothing saved yet",
          body: "Use the bookmark next to any question in History to keep it here.",
          actionLabel: "Open history",
          onAction: () => onNavigate("History"),
        }}
      />
    </WorkspaceShell>
  );
}

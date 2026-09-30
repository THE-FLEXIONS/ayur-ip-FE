import WorkspaceShell from "../components/layout/WorkspaceShell";
import type { HistoryEntry, Workspace } from "../hooks/useWorkspace";
import { QuestionList } from "../sections/workspace";

type HistoryPageProps = {
  workspace: Workspace;
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  onAskAgain: (entry: HistoryEntry) => void;
  onNewQuery: () => void;
};

export default function HistoryPage({ workspace, onNavigate, onOpenMenu, onAskAgain, onNewQuery }: HistoryPageProps) {
  return (
    <WorkspaceShell
      eyebrow="Your workspace"
      title="History"
      description="Questions you have asked, newest first. Save the ones you want to keep."
      onNavigate={onNavigate}
      onOpenMenu={onOpenMenu}
    >
      <QuestionList
        label="Question history"
        entries={workspace.history}
        onAskAgain={onAskAgain}
        onToggleSaved={workspace.toggleSaved}
        onRemove={workspace.removeEntry}
        empty={{
          title: "No questions yet",
          body: "Questions you ask on the home page will appear here.",
          actionLabel: "Ask a question",
          onAction: onNewQuery,
        }}
      />
    </WorkspaceShell>
  );
}

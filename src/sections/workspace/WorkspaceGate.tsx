import type { ReactNode } from "react";
import { ArrowRightIcon, BookmarkIcon, CloseIcon } from "../../components/ui/LineIcons";
import type { Workspace } from "../../hooks/useWorkspace";

type WorkspaceGateProps = {
  workspace: Workspace;
  onSignIn: () => void;
  children: ReactNode;
};

/**
 * Shows the account-backed parts of a workspace page only once they're
 * loaded: a sign-in prompt for guests, a loading state, and a retry on error.
 */
export default function WorkspaceGate({ workspace, onSignIn, children }: WorkspaceGateProps) {
  if (workspace.status === "guest") {
    return (
      <div className="flex flex-col items-center rounded-[24px] border border-dashed border-[#d9dccf] bg-white/50 px-6 py-14 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-ayur-mint text-ayur-leaf">
          <BookmarkIcon size={28} strokeWidth={1.6} />
        </span>
        <h2 className="mt-5 text-[18px] font-semibold">Sign in to see your questions</h2>
        <p className="mt-1.5 max-w-[44ch] text-[14.5px] leading-relaxed text-ayur-muted">
          Your history and saved answers are kept in your account, so they follow you to any device.
        </p>
        <button
          type="button"
          onClick={onSignIn}
          className="mt-6 flex items-center gap-2 rounded-full bg-ayur-green px-5 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-ayur-green-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green"
        >
          Sign in
          <ArrowRightIcon size={18} strokeWidth={1.9} />
        </button>
      </div>
    );
  }

  if (workspace.status === "loading") {
    return (
      <div aria-busy="true" aria-label="Loading" className="space-y-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-[84px] animate-pulse rounded-[20px] border border-[#ecebe3] bg-white/60" />
        ))}
      </div>
    );
  }

  if (workspace.status === "error") {
    return (
      <div role="alert" className="rounded-[20px] border border-[#f0d6d0] bg-[#fdf4f2] px-5 py-5 text-[14.5px] text-[#8a3325]">
        <p>{workspace.error ?? "Couldn't load your workspace."}</p>
        <button
          type="button"
          onClick={() => void workspace.reload()}
          className="mt-3 rounded-full bg-white px-4 py-2 text-[13.5px] font-medium text-ayur-ink shadow-sm hover:bg-ayur-mint/60"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <>
      {workspace.error && (
        <div role="alert" className="mb-4 flex items-center gap-3 rounded-2xl border border-[#f0d6d0] bg-[#fdf4f2] px-4 py-3 text-[14px] text-[#8a3325]">
          <p className="flex-1">{workspace.error}</p>
          <button type="button" onClick={workspace.dismissError} aria-label="Dismiss" className="rounded-full p-1 hover:bg-white/70">
            <CloseIcon size={16} strokeWidth={2} />
          </button>
        </div>
      )}
      {children}
    </>
  );
}

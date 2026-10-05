import type { ReactNode } from "react";
import AppHeader from "./AppHeader";

type WorkspaceShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  onNavigate: (page: string) => void;
  onOpenMenu: () => void;
  /** Wider content area for two-column tools. */
  wide?: boolean;
  /** Extra content beside the title, e.g. a status pill. */
  aside?: ReactNode;
  children: ReactNode;
};

/** Ivory page frame for the app's own pages (tools, History, Saved, Settings, Help). */
export default function WorkspaceShell({ eyebrow, title, description, onNavigate, onOpenMenu, wide = false, aside, children }: WorkspaceShellProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-ayur-ivory bg-[radial-gradient(ellipse_70%_320px_at_75%_0%,rgba(214,226,210,0.6),transparent_70%)] font-sans text-ayur-ink">
      <div className="mx-auto max-w-[1240px] px-4 pb-20 sm:px-6 lg:px-10">
        <AppHeader onNavigate={onNavigate} onOpenMenu={onOpenMenu} activePage={title} />
        <main className={`mx-auto mt-8 sm:mt-12 ${wide ? "max-w-[1120px]" : "max-w-[880px]"}`}>
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#646b63]">{eyebrow}</p>
              <h1 className="mt-3 font-editorial text-[32px] font-semibold leading-tight tracking-[-0.015em] sm:text-[42px]">{title}</h1>
              <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-ayur-muted sm:text-[16px]">{description}</p>
            </div>
            {aside}
          </div>
          <div className="mt-8 sm:mt-10">{children}</div>
        </main>
      </div>
    </div>
  );
}

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Navbar from "./components/layout/Navbar";
import { Sidebar, type SidebarKey } from "./components/layout/sidebar";
import type { AskRequest } from "./config/research";
import { useWorkspace, type HistoryEntry } from "./hooks/useWorkspace";
import { wakeApi } from "./services/api";
import {
  AboutPage,
  FeaturesPage,
  HerbalLibraryPage,
  HistoryPage,
  HomePage,
  LoginPage,
  SavedPage,
  SettingsPage,
  UseCasesPage,
} from "./pages";
import type { HomeIntent } from "./pages/HomePage";
import { FEATURES } from "./sections/home";

// ─── App ───────────────────────────────────────────────────────────────────
// Page switching and the app-wide sidebar. Page layouts live in src/pages,
// their sections in src/sections.

/** Sidebar items that open a home-page tool, keyed to the matching feature card. */
const TOOL_ITEMS: Partial<Record<SidebarKey, string>> = {
  formulation: "Formulation Classifier",
  "ip-guidance": "IP Guidance",
  abs: "ABS Compliance",
  resources: "Databases & Resources",
};

/** Sidebar items that are their own page. */
const PAGE_ITEMS: Partial<Record<SidebarKey, string>> = {
  saved: "Saved",
  history: "History",
  settings: "Settings",
};

let intentCounter = 0;

export default function App() {
  const [page, setPage] = useState("Home");
  const [homeKey, setHomeKey] = useState<SidebarKey>("home");
  const [homeIntent, setHomeIntent] = useState<HomeIntent | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const workspace = useWorkspace();

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  // Start the API waking up so the first question or search is not slowed by a cold start.
  useEffect(() => wakeApi(), []);

  useEffect(() => {
    document.documentElement.lang = workspace.preferences.language;
  }, [workspace.preferences.language]);

  // Plain page navigation (header links, buttons inside pages).
  const navigate = useCallback((next: string) => {
    setPage(next);
    setHomeKey("home");
    setHomeIntent(null);
    window.scrollTo({ top: 0 });
  }, []);

  function goHome(key: SidebarKey, intent: HomeIntent | null) {
    if (page !== "Home") window.scrollTo({ top: 0 });
    setPage("Home");
    setHomeKey(key);
    setHomeIntent(intent);
  }

  function handleSidebarSelect(key: SidebarKey) {
    setSidebarOpen(false);
    const pageName = PAGE_ITEMS[key];
    const toolTitle = TOOL_ITEMS[key];
    if (pageName) navigate(pageName);
    else if (toolTitle) {
      const prompt = FEATURES.find((f) => f.title === toolTitle)?.prompt ?? "";
      goHome(key, { id: ++intentCounter, kind: "prefill", text: prompt });
    } else if (key === "new-query") goHome(key, { id: ++intentCounter, kind: "focus" });
    else if (key === "help") goHome(key, { id: ++intentCounter, kind: "scroll", targetId: "help-support" });
    else goHome("home", null);
  }

  function askAgain(entry: HistoryEntry) {
    goHome("new-query", { id: ++intentCounter, kind: "prefill", text: entry.question });
  }

  function handleAsk(request: AskRequest) {
    workspace.addQuestion(request);
  }

  const activeKey: SidebarKey | null =
    page === "Home" ? homeKey : ((Object.keys(PAGE_ITEMS) as SidebarKey[]).find((k) => PAGE_ITEMS[k] === page) ?? null);

  if (page === "Login") {
    return <LoginPage onBack={() => navigate("Home")} />;
  }

  let content: ReactNode;
  if (page === "Home") {
    content = (
      <HomePage
        onNavigate={navigate}
        onOpenMenu={openSidebar}
        onAsk={handleAsk}
        language={workspace.preferences.language}
        intent={homeIntent}
        defaultMode={workspace.preferences.mode}
        defaultJurisdiction={workspace.preferences.jurisdiction}
      />
    );
  } else if (page === "History") {
    content = (
      <HistoryPage
        workspace={workspace}
        onNavigate={navigate}
        onOpenMenu={openSidebar}
        onAskAgain={askAgain}
        onNewQuery={() => goHome("new-query", { id: ++intentCounter, kind: "focus" })}
      />
    );
  } else if (page === "Saved") {
    content = <SavedPage workspace={workspace} onNavigate={navigate} onOpenMenu={openSidebar} onAskAgain={askAgain} />;
  } else if (page === "Settings") {
    content = <SettingsPage workspace={workspace} onNavigate={navigate} onOpenMenu={openSidebar} />;
  } else {
    content = (
      <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
        <Navbar activePage={page} onNav={navigate} onOpenMenu={openSidebar} />
        {page === "Features" ? (
          <FeaturesPage />
        ) : page === "Use Cases" ? (
          <UseCasesPage />
        ) : page === "Herbal Library" ? (
          <HerbalLibraryPage onAskAssistant={(question) => goHome("new-query", { id: ++intentCounter, kind: "prefill", text: question })} />
        ) : (
          <AboutPage />
        )}
      </div>
    );
  }

  return (
    <>
      {/* The page is inert while the sidebar is open, so focus and clicks stay in the menu. */}
      <div inert={sidebarOpen}>{content}</div>
      <Sidebar
        open={sidebarOpen}
        onClose={closeSidebar}
        activeKey={activeKey}
        onSelect={handleSidebarSelect}
        language={workspace.preferences.language}
        onLanguageChange={(language) => workspace.updatePreferences({ language })}
      />
    </>
  );
}

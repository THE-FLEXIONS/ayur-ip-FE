import { useCallback, useEffect, useState, type CSSProperties, type ReactNode } from "react";
import BottomNav, { BOTTOM_NAV_HEIGHT, type BottomNavKey } from "./components/layout/BottomNav";
import Navbar from "./components/layout/Navbar";
import { DOCKED_SIDEBAR_WIDTH, Sidebar, SidebarDockContext, type SidebarKey } from "./components/layout/sidebar";
import type { AskRequest, ResearchTool } from "./config/research";
import { useAsk } from "./hooks/useAsk";
import { useAuth } from "./hooks/useAuth";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { useWorkspace, type HistoryEntry } from "./hooks/useWorkspace";
import { warmUpServer } from "./lib/api";
import {
  AboutPage,
  AbsCompliancePage,
  FeaturesPage,
  FormulationClassifierPage,
  HelpPage,
  HerbalLibraryPage,
  HistoryPage,
  HomePage,
  IpGuidancePage,
  LoginPage,
  ResourcesPage,
  SavedPage,
  SettingsPage,
  UseCasesPage,
} from "./pages";
import type { HomeIntent } from "./pages/HomePage";

// ─── App ───────────────────────────────────────────────────────────────────
// Page switching, the app-wide sidebar, and the glue between sign-in, the
// user's workspace and the streamed AI answer. Page layouts live in src/pages,
// their sections in src/sections.

/** Sidebar items that are their own page. */
const PAGE_ITEMS: Partial<Record<SidebarKey, string>> = {
  formulation: "Formulation Classifier",
  "ip-guidance": "IP Guidance",
  abs: "ABS Compliance",
  resources: "Resources",
  saved: "Saved",
  history: "History",
  settings: "Settings",
  help: "Help & Support",
};

/** App pages, where the sidebar is docked on desktop. Marketing pages keep the drawer. */
const APP_PAGES = new Set(Object.values(PAGE_ITEMS));

const ASK_SIGN_IN_NOTICE = "Sign in to ask your question. Evaluators can use the demo account below.";

let intentCounter = 0;

export default function App() {
  const [page, setPage] = useState("Home");
  // Where the Resources back button returns to.
  const [previousPage, setPreviousPage] = useState("Home");
  const [homeKey, setHomeKey] = useState<SidebarKey>("home");
  const [homeIntent, setHomeIntent] = useState<HomeIntent | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginNotice, setLoginNotice] = useState<string | null>(null);
  // A question a guest tried to ask; put back in the ask box after they sign in.
  const [pendingAsk, setPendingAsk] = useState<AskRequest | null>(null);
  const [libraryQuery, setLibraryQuery] = useState<{ id: number; text: string } | null>(null);

  const auth = useAuth();
  const workspace = useWorkspace();
  const answer = useAsk(workspace.upsertEntry);

  const desktop = useMediaQuery("(min-width: 1024px)");
  const docked = desktop && APP_PAGES.has(page);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  // A drawer left open on a small screen closes once the sidebar docks.
  useEffect(() => {
    if (docked) setSidebarOpen(false);
  }, [docked]);

  // Render's free plan sleeps; start waking the backend while the visitor reads the page.
  useEffect(() => warmUpServer(), []);

  // Clear the answer on screen when the user signs out.
  const signedIn = auth.status === "signed-in";
  const resetAnswer = answer.reset;
  useEffect(() => {
    if (!signedIn) resetAnswer();
  }, [signedIn, resetAnswer]);

  // Plain page navigation (header links, buttons inside pages).
  const navigate = useCallback(
    (next: string) => {
      // "New Query" is the home page's ask box, not a page of its own.
      if (next === "New Query") {
        if (page !== "Home") window.scrollTo({ top: 0 });
        setPage("Home");
        setHomeKey("new-query");
        setHomeIntent({ id: ++intentCounter, kind: "focus" });
        return;
      }
      if (next === "Login" && signedIn) next = "Home";
      if (next !== "Login") setLoginNotice(null);
      if (next !== page) setPreviousPage(page);
      setPage(next);
      setHomeKey("home");
      setHomeIntent(null);
      window.scrollTo({ top: 0 });
    },
    [signedIn, page],
  );

  function goHome(key: SidebarKey, intent: HomeIntent | null) {
    if (page !== "Home") window.scrollTo({ top: 0 });
    setPage("Home");
    setHomeKey(key);
    setHomeIntent(intent);
  }

  function prefill(key: SidebarKey, text: string, tool: ResearchTool | null = null) {
    goHome(key, { id: ++intentCounter, kind: "prefill", text, tool });
  }

  function handleSidebarSelect(key: SidebarKey) {
    setSidebarOpen(false);
    const pageName = PAGE_ITEMS[key];
    if (pageName) navigate(pageName);
    else if (key === "new-query") goHome(key, { id: ++intentCounter, kind: "focus" });
    else goHome("home", null);
  }

  function handleBottomNav(key: BottomNavKey) {
    if (key === "home") navigate("Home");
    else if (key === "search") navigate("Herbal Library");
    else if (key === "ask") goHome("new-query", { id: ++intentCounter, kind: "focus" });
    else if (key === "resources") navigate("Resources");
    else navigate("Settings");
  }

  /** Tool pages hand a prepared question to the AI on the home page. */
  function askAI(question: string, tool: ResearchTool) {
    prefill("new-query", question, tool);
  }

  function askAgain(entry: HistoryEntry) {
    prefill("new-query", entry.question, entry.tool);
  }

  function handleAsk(request: AskRequest) {
    if (auth.status === "guest") {
      setPendingAsk(request);
      setLoginNotice(ASK_SIGN_IN_NOTICE);
      setPage("Login");
      window.scrollTo({ top: 0 });
      return;
    }
    void answer.ask(request, workspace.preferences.language);
  }

  function handleSignedIn() {
    setLoginNotice(null);
    if (pendingAsk) {
      prefill("new-query", pendingAsk.question, pendingAsk.tool ?? null);
      setPendingAsk(null);
    } else {
      navigate("Home");
    }
  }

  function searchLibrary(text: string) {
    setLibraryQuery({ id: ++intentCounter, text });
    navigate("Herbal Library");
  }

  const answerEntry = answer.entry ? workspace.history.find((e) => e.id === answer.entry!.id) : undefined;

  const activeKey: SidebarKey | null =
    page === "Home" ? homeKey : ((Object.keys(PAGE_ITEMS) as SidebarKey[]).find((k) => PAGE_ITEMS[k] === page) ?? null);

  if (page === "Login") {
    return (
      <LoginPage
        onBack={() => {
          setPendingAsk(null);
          navigate("Home");
        }}
        onSuccess={handleSignedIn}
        notice={loginNotice}
      />
    );
  }

  const bottomNavKey: BottomNavKey | null =
    page === "Home"
      ? homeKey === "new-query"
        ? "ask"
        : "home"
      : page === "Herbal Library"
        ? "search"
        : page === "Resources"
          ? "resources"
          : page === "Settings" || page === "History" || page === "Saved"
            ? "profile"
            : null;

  let content: ReactNode;
  if (page === "Home") {
    content = (
      <HomePage
        onNavigate={navigate}
        onOpenMenu={openSidebar}
        onAsk={handleAsk}
        answer={answer}
        answerSaved={answerEntry?.saved ?? false}
        onToggleAnswerSaved={() => answerEntry && workspace.toggleSaved(answerEntry.id)}
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
  } else if (page === "Resources") {
    content = (
      <ResourcesPage
        onNavigate={navigate}
        onOpenMenu={openSidebar}
        onBack={() => navigate(previousPage === "Resources" ? "Home" : previousPage)}
      />
    );
  } else if (page === "Settings") {
    content = <SettingsPage workspace={workspace} onNavigate={navigate} onOpenMenu={openSidebar} />;
  } else if (page === "Formulation Classifier") {
    content = <FormulationClassifierPage onNavigate={navigate} onOpenMenu={openSidebar} onAskAI={askAI} />;
  } else if (page === "IP Guidance") {
    content = <IpGuidancePage onNavigate={navigate} onOpenMenu={openSidebar} onAskAI={askAI} />;
  } else if (page === "ABS Compliance") {
    content = <AbsCompliancePage onNavigate={navigate} onOpenMenu={openSidebar} onAskAI={askAI} />;
  } else if (page === "Help & Support") {
    content = <HelpPage onNavigate={navigate} onOpenMenu={openSidebar} />;
  } else {
    content = (
      <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
        <Navbar activePage={page} onNav={navigate} onOpenMenu={openSidebar} onSearch={searchLibrary} />
        {page === "Features" ? (
          <FeaturesPage />
        ) : page === "Use Cases" ? (
          <UseCasesPage onNavigate={navigate} />
        ) : page === "Herbal Library" ? (
          <HerbalLibraryPage
            key={libraryQuery?.id ?? 0}
            initialQuery={libraryQuery?.text ?? ""}
            onAskAbout={(question) => prefill("new-query", question)}
          />
        ) : (
          <AboutPage />
        )}
      </div>
    );
  }
  const counts = signedIn
    ? { saved: workspace.history.filter((e) => e.saved).length, history: workspace.history.length }
    : undefined;

  return (
    <SidebarDockContext.Provider value={docked}>
      {/* The page is inert while the drawer is open, so focus and clicks stay in the menu. */}
      <div
        inert={sidebarOpen && !docked}
        className="pb-[calc(var(--bottom-nav-h)+env(safe-area-inset-bottom))] lg:pb-0"
        style={{ "--bottom-nav-h": `${BOTTOM_NAV_HEIGHT}px`, paddingLeft: docked ? DOCKED_SIDEBAR_WIDTH : undefined } as CSSProperties}
      >
        {content}
        <BottomNav active={bottomNavKey} onSelect={handleBottomNav} />
      </div>
      <Sidebar
        open={sidebarOpen}
        onClose={closeSidebar}
        activeKey={activeKey}
        onSelect={handleSidebarSelect}
        language={workspace.preferences.language}
        onLanguageChange={(language) => workspace.updatePreferences({ language })}
        docked={docked}
        counts={counts}
      />
    </SidebarDockContext.Provider>
  );
}

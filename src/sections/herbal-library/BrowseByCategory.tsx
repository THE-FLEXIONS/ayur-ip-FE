import { useState } from "react";
import type React from "react";
import { Arr } from "./shared/icons";

// ─── SECTION 2 · Browse by Category ──────────────────────────────────────────
export default function BrowseByCategory() {
  const [active, setActive] = useState("All");

  const cats: { label: string; icon: React.ReactElement }[] = [
    {
      label: "All",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 19C5 10 10 4 18 6C12 10 9 15 11 20" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M5 19C5 15 9 11 12 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/></svg>,
    },
    {
      label: "Herbs",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 20C4 11 9 4 18 6C12 10 8 16 10 21" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M4 20C4 16 8 12 11 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/></svg>,
    },
    {
      label: "Formulations",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="7" y="4" width="8" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M7 8L5 20h12L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M9 14h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      label: "Classical Texts",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 8h7M8 12h7M8 16h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      label: "Therapeutic Areas",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4C8.5 4 5 7 5 11c0 5.5 7 9 7 9s7-3.5 7-9c0-4-3.5-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M9 11h5M12 8v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
    {
      label: "Parts Used",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 19C6 10 11 4 19 6C13 10 9 15 11 20" stroke="currentColor" strokeWidth="1.6" fill="none"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none"/></svg>,
    },
    {
      label: "Regions",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M12 10v0M5 20c1.5-4 10.5-4 14 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/><path d="M12 13.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    },
  ];

  return (
    <section style={{ background: "#fff", paddingTop: 40, paddingBottom: 16 }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="font-bold mb-1" style={{ fontSize: 20, color: "#0d2717" }}>Browse by Category</h2>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>Find knowledge by what interests you.</p>
          </div>
          <button className="flex items-center gap-1.5 font-semibold mt-0.5" style={{ fontSize: 13, color: "#0d2717" }}>
            View all categories <Arr size={13}/>
          </button>
        </div>

        {/* Tab row */}
        <div className="flex items-start gap-1">
          {cats.map(({ label, icon }) => {
            const on = label === active;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className="flex flex-col items-center gap-2 transition-all"
                style={{
                  padding: "14px 20px",
                  borderRadius: 16,
                  background: on ? "#f0f7f2" : "transparent",
                  border: on ? "1.5px solid #c3e6cc" : "1.5px solid transparent",
                  color: on ? "#1a4028" : "#6b7280",
                  minWidth: 90,
                  cursor: "pointer",
                }}
              >
                <span style={{ color: on ? "#2d6a4f" : "#9ca3af" }}>{icon}</span>
                <span style={{ fontSize: 12, fontWeight: on ? 600 : 400 }}>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

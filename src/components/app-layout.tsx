"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { getStudyStats } from "@/lib/progress";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { getSectionMastery } from "@/lib/progress";

function HamburgerIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="0" y1="1" x2="18" y2="1" />
      <line x1="0" y1="7" x2="18" y2="7" />
      <line x1="0" y1="13" x2="18" y2="13" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [overallMastery, setOverallMastery] = useState(0);

  useEffect(() => {
    // Average mastery across all 6 DAT sections
    const totals = DAT_SECTIONS.map(s => getSectionMastery(s.slug));
    const avg = totals.length > 0 ? Math.round(totals.reduce((a, b) => a + b, 0) / totals.length) : 0;
    setOverallMastery(avg);
  }, []);

  return (
    <div className="flex min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.35)" }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — hidden on mobile via transform, always rendered */}
      <div
        className={`fixed md:static z-50 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main column */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Sticky top bar */}
        <header
          className="sticky top-0 z-30 flex flex-col shrink-0"
          style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
        >
          {/* Bar row */}
          <div className="flex items-center gap-3 px-4 h-14">
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setSidebarOpen(v => !v)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0"
              style={{ color: "var(--muted)" }}
              aria-label="Toggle navigation"
            >
              {sidebarOpen ? <XIcon /> : <HamburgerIcon />}
            </button>

            {/* Search */}
            <div className="flex-1 max-w-sm">
              <div
                className="flex items-center gap-2 px-3 h-9 rounded-lg text-sm"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--faint)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <span>Search sections, chapters…</span>
              </div>
            </div>

            {/* Right side */}
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>

          {/* Exam readiness bar */}
          <div
            className="px-4 pb-2 flex items-center gap-3"
            style={{ color: "var(--faint)" }}
          >
            <span className="text-[11px] font-semibold shrink-0 uppercase tracking-wider">Exam readiness</span>
            <div
              className="flex-1 h-1.5 rounded-full overflow-hidden"
              style={{ background: "var(--border)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${overallMastery}%`,
                  background: "linear-gradient(90deg, #6c5ce7 0%, #5a4cd6 100%)",
                }}
              />
            </div>
            <span className="text-[11px] font-semibold shrink-0 tabular-nums" style={{ color: "var(--accent)" }}>
              {overallMastery}%
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

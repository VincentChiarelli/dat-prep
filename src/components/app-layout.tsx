"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — hidden on mobile, shown on desktop */}
      <div className={`fixed md:static z-50 transition-transform duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Mobile hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden fixed top-3 left-3 z-30 w-10 h-10 rounded-lg bg-white border border-[var(--color-border)] flex items-center justify-center shadow-sm"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="0" y1="1" x2="18" y2="1" />
            <line x1="0" y1="7" x2="18" y2="7" />
            <line x1="0" y1="13" x2="18" y2="13" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

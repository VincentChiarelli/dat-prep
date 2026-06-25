"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { getSectionMastery, getStudyStats } from "@/lib/progress";

const NAV_ITEMS = [
  { label: "Dashboard",   href: "/dashboard",   icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  )},
  { label: "Textbook",    href: "/study",        icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )},
  { label: "Practice",    href: "/practice",     icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  )},
  { label: "Review",      href: "/review",       icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/>
    </svg>
  )},
  { label: "Flashcards",  href: "/flashcards",   icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 2H8a2 2 0 0 0-2 2v2h12V4a2 2 0 0 0-2-2z"/>
    </svg>
  )},
  { label: "Reference",   href: "/reference",    icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )},
  { label: "Glossary",    href: "/glossary",     icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  )},
  { label: "Analytics",   href: "/analytics",    icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  )},
  { label: "Planner",     href: "/planner",      icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )},
  { label: "Settings",    href: "/settings",     icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  )},
];

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const [sectionMastery, setSectionMastery] = useState<Record<string, number>>({});
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const m: Record<string, number> = {};
    for (const s of DAT_SECTIONS) {
      m[s.slug] = getSectionMastery(s.slug);
    }
    setSectionMastery(m);
    const stats = getStudyStats();
    setStreak(stats.streak);
  }, []);

  function isActive(href: string) {
    if (href === "/study") {
      return pathname === "/study" || (pathname.startsWith("/study/") && !DAT_SECTIONS.some(s => pathname.startsWith(`/study/${s.slug}`)));
    }
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <aside
      className="w-56 flex flex-col shrink-0 h-screen sticky top-0 overflow-y-auto"
      style={{ background: "var(--surface)", borderRight: "1px solid var(--border)" }}
    >
      {/* Brand row */}
      <div className="flex items-center gap-3 px-4 h-14 shrink-0" style={{ borderBottom: "1px solid var(--border)" }}>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ background: "linear-gradient(135deg, #6c5ce7 0%, #5a4cd6 100%)" }}
        >
          DAT
        </div>
        <div className="min-w-0">
          <div className="font-bold text-sm leading-none" style={{ color: "var(--ink)" }}>Prep</div>
          <div className="text-[10px] leading-none mt-0.5" style={{ color: "var(--faint)" }}>DAT Study Guide</div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="px-2 pt-3 pb-1">
        <div className="text-[10px] font-semibold uppercase tracking-widest px-2 mb-1.5" style={{ color: "var(--faint)" }}>
          Navigation
        </div>
        <ul className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    background: active ? "var(--accent-soft)" : "transparent",
                    color: active ? "var(--accent-strong)" : "var(--muted)",
                  }}
                  onMouseEnter={e => {
                    if (!active) (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface-2)";
                  }}
                  onMouseLeave={e => {
                    if (!active) (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sections group */}
      <div className="px-2 pt-3 pb-1">
        <div className="text-[10px] font-semibold uppercase tracking-widest px-2 mb-1.5" style={{ color: "var(--faint)" }}>
          Sections
        </div>
        <ul className="space-y-0.5">
          {DAT_SECTIONS.map((section) => {
            const href = `/study/${section.slug}`;
            const active = pathname === href || pathname.startsWith(href + "/");
            const mastery = sectionMastery[section.slug] ?? 0;
            return (
              <li key={section.slug}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm transition-colors"
                  style={{
                    background: active ? "var(--accent-soft)" : "transparent",
                    color: active ? "var(--accent-strong)" : "var(--muted)",
                  }}
                  onMouseEnter={e => {
                    if (!active) (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface-2)";
                  }}
                  onMouseLeave={e => {
                    if (!active) (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  <span className="text-base leading-none shrink-0">{section.icon}</span>
                  <span className="flex-1 truncate text-xs font-medium">{section.name}</span>
                  <span
                    className="text-[10px] font-semibold shrink-0 tabular-nums"
                    style={{ color: mastery > 0 ? section.color : "var(--faint)" }}
                  >
                    {mastery}%
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Streak card */}
      <div className="px-3 pb-4 pt-2">
        <div
          className="rounded-xl p-3 text-white"
          style={{ background: "linear-gradient(135deg, #6c5ce7 0%, #5a4cd6 100%)" }}
        >
          <div className="text-[10px] font-semibold uppercase tracking-widest opacity-80 mb-1">Study Streak</div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">{streak}</span>
            <span className="text-sm opacity-80">day{streak !== 1 ? "s" : ""}</span>
          </div>
          <div className="text-[11px] opacity-70 mt-0.5">
            {streak === 0 ? "Start studying to build a streak!" : streak >= 7 ? "Amazing consistency! 🔥" : "Keep it up!"}
          </div>
        </div>
      </div>
    </aside>
  );
}

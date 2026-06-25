"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { AppLayout } from "@/components/app-layout";
import { Ring } from "@/components/Ring";
import { getChaptersForSection } from "@/lib/content-map";
import {
  getStudyStats,
  getSectionMastery,
  getCompletedLessonsForSection,
  getTargetTestDate,
  setTargetTestDate,
  daysUntilTest,
  getBookmarkedQuestionIds,
  getIncorrectQuestionIds,
  getDueQuestionIds,
  getMasteredCount,
  getDailyGoal,
  setDailyGoal,
  getQuestionsAnsweredToday,
  getProgress,
  type StudyStats,
} from "@/lib/progress";

// ── helpers ──────────────────────────────────────────────────────────────────

function getTotalLessonsForSection(slug: string): number {
  const chapters = getChaptersForSection(slug);
  return chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
}

function findContinuePath(stats: StudyStats): string | null {
  if (stats.lastStudiedPath) return stats.lastStudiedPath;
  for (const section of DAT_SECTIONS) {
    const chapters = getChaptersForSection(section.slug);
    if (chapters.length === 0) continue;
    const completed = getCompletedLessonsForSection(section.slug);
    const total = getTotalLessonsForSection(section.slug);
    if (completed.length < total) {
      for (const ch of chapters) {
        if (ch.lessons.length > 0) return `/study/${section.slug}/${ch.slug}`;
      }
    }
  }
  return null;
}

/** Last 7 calendar dates (ISO YYYY-MM-DD), oldest first */
function last7Days(): string[] {
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().split("T")[0]);
  }
  return days;
}

function shortDay(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, { weekday: "short" }).slice(0, 2);
}

// ── component ─────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [stats, setStats] = useState<StudyStats | null>(null);
  const [sectionMastery, setSectionMastery] = useState<Record<string, number>>({});
  const [sectionProgress, setSectionProgress] = useState<Record<string, { done: number; total: number }>>({});
  const [overallMastery, setOverallMastery] = useState(0);
  const [testDate, setTestDate] = useState<string | null>(null);
  const [editingDate, setEditingDate] = useState(false);
  const [dateInput, setDateInput] = useState("");
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [dueCount, setDueCount] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);
  const [dailyGoalVal, setDailyGoalVal] = useState(30);
  const [answeredToday, setAnsweredToday] = useState(0);
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState("");
  const [studiedDates, setStudiedDates] = useState<Set<string>>(new Set());

  useEffect(() => {
    const s = getStudyStats();
    setStats(s);

    // Per-section mastery (quiz-score average)
    const mastery: Record<string, number> = {};
    let masterySum = 0;
    for (const section of DAT_SECTIONS) {
      const m = getSectionMastery(section.slug);
      mastery[section.slug] = m;
      masterySum += m;
    }
    setSectionMastery(mastery);
    setOverallMastery(Math.round(masterySum / DAT_SECTIONS.length));

    // Per-section lesson completion
    const prog: Record<string, { done: number; total: number }> = {};
    for (const section of DAT_SECTIONS) {
      const done = getCompletedLessonsForSection(section.slug).length;
      const total = getTotalLessonsForSection(section.slug);
      prog[section.slug] = { done, total };
    }
    setSectionProgress(prog);

    setTestDate(getTargetTestDate());
    setBookmarkCount(getBookmarkedQuestionIds().length);
    setIncorrectCount(getIncorrectQuestionIds().length);
    setDueCount(getDueQuestionIds().length);
    setMasteredCount(getMasteredCount());
    setDailyGoalVal(getDailyGoal());
    setAnsweredToday(getQuestionsAnsweredToday());

    // Build set of dates with study activity
    const p = getProgress();
    const dates = new Set<string>(p.studySessions.map(s => s.date));
    if (p.lastActiveDate) dates.add(p.lastActiveDate);
    setStudiedDates(dates);
  }, []);

  const handleSaveDate = () => {
    setTargetTestDate(dateInput || null);
    setTestDate(dateInput || null);
    setEditingDate(false);
  };
  const handleClearDate = () => {
    setTargetTestDate(null);
    setTestDate(null);
    setDateInput("");
    setEditingDate(false);
  };

  const handleSaveGoal = () => {
    const n = Math.max(0, parseInt(goalInput || "0", 10) || 0);
    setDailyGoal(n);
    setDailyGoalVal(n);
    setEditingGoal(false);
  };
  const goalProgress = dailyGoalVal > 0 ? Math.min(answeredToday / dailyGoalVal, 1) : 0;

  const days = daysUntilTest();
  const continuePath = stats ? findContinuePath(stats) : null;
  const calendarDays = last7Days();

  // 3 lowest-mastery sections for "Recommended focus"
  const sortedSections = [...DAT_SECTIONS].sort((a, b) => (sectionMastery[a.slug] ?? 0) - (sectionMastery[b.slug] ?? 0));
  const focusSections = sortedSections.slice(0, 3);

  // Summary line
  const summaryParts: string[] = [];
  if (stats) {
    summaryParts.push(`${stats.totalQuestionsAnswered} questions answered`);
    if (stats.streak > 0) summaryParts.push(`${stats.streak}-day streak`);
  }
  if (days !== null && days >= 0) summaryParts.push(`${days} days to test`);
  const summaryLine = summaryParts.join(" · ") || "Let's get studying.";

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto">

        {/* ── Welcome heading ─────────────────────────────────────────── */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--ink)" }}>
            Welcome back.
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>{summaryLine}</p>
        </div>

        {/* ── Hero row ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Continue studying card — violet gradient, spans 2 cols */}
          <div
            className="lg:col-span-2 rounded-2xl p-6 flex flex-col justify-between gap-4 min-h-[160px] relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #6c5ce7 0%, #5a4cd6 100%)" }}
          >
            {/* Decorative circles */}
            <div
              className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-10"
              style={{ background: "#fff" }}
            />
            <div
              className="absolute -right-4 bottom-4 w-24 h-24 rounded-full opacity-10"
              style={{ background: "#fff" }}
            />

            <div className="relative z-10">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-1">
                Continue studying
              </div>
              <div className="text-white font-bold text-lg leading-tight">
                {stats?.lastStudiedPath
                  ? stats.lastStudiedPath.replace(/^\/study\//, "").replace(/\//g, " › ").replace(/-/g, " ")
                  : "Pick up where you left off"}
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
              {continuePath ? (
                <Link
                  href={continuePath}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: "#fff", color: "#6c5ce7" }}
                >
                  Continue
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Link>
              ) : (
                <Link
                  href="/study"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: "#fff", color: "#6c5ce7" }}
                >
                  Start Textbook
                </Link>
              )}
              <Link
                href="/practice"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                Practice exam
              </Link>
            </div>
          </div>

          {/* Overall mastery ring */}
          <div className="card flex flex-col items-center justify-center gap-3 p-6">
            <Ring value={overallMastery} size={100} stroke={9} />
            <div className="text-center">
              <div className="text-sm font-semibold" style={{ color: "var(--ink)" }}>Overall mastery</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                Average across all sections
              </div>
            </div>
          </div>
        </div>

        {/* ── 4-up stat tiles ─────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            {
              label: "Questions answered",
              value: stats?.totalQuestionsAnswered ?? 0,
              display: String(stats?.totalQuestionsAnswered ?? 0),
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              ),
            },
            {
              label: "Predicted DAT score",
              value: stats?.predictedScore ?? null,
              display: stats?.predictedScore ? `${stats.predictedScore}/30` : "—",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              ),
            },
            {
              label: "Study streak",
              value: stats?.streak ?? 0,
              display: `${stats?.streak ?? 0} day${stats?.streak !== 1 ? "s" : ""}`,
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              ),
            },
            {
              label: "Days to test",
              value: days,
              display: days !== null ? (days >= 0 ? String(days) : "Passed") : "Not set",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              ),
            },
          ].map((tile) => (
            <div key={tile.label} className="card card-tight p-4">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center mb-3"
                style={{ background: "var(--accent-soft)" }}
              >
                {tile.icon}
              </div>
              <div className="text-xl font-bold mb-0.5" style={{ color: "var(--ink)" }}>
                {tile.display}
              </div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>{tile.label}</div>
            </div>
          ))}
        </div>

        {/* ── Test date + daily goal row ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Test-date countdown */}
          <div className="card p-4">
            {editingDate ? (
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>Target DAT date</div>
                <input
                  type="date"
                  value={dateInput || testDate || ""}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--ink)",
                  }}
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveDate}
                    className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: "var(--accent)" }}
                  >
                    Save
                  </button>
                  {testDate && (
                    <button onClick={handleClearDate} className="px-3 py-1.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors">
                      Clear
                    </button>
                  )}
                  <button
                    onClick={() => setEditingDate(false)}
                    className="px-3 py-1.5 rounded-lg text-sm transition-colors"
                    style={{ color: "var(--muted)" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : testDate ? (
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>Days until DAT</div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-3xl font-bold"
                      style={{
                        color: days !== null && days <= 14 ? "#DC2626"
                          : days !== null && days <= 30 ? "#D97706"
                          : "var(--accent)",
                      }}
                    >
                      {days !== null ? (days >= 0 ? days : "Passed") : "—"}
                    </span>
                    {days !== null && days >= 0 && (
                      <span className="text-sm" style={{ color: "var(--muted)" }}>
                        {new Date(testDate + "T00:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => { setDateInput(testDate); setEditingDate(true); }}
                  className="text-xs font-semibold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>Test date</div>
                  <div className="text-sm" style={{ color: "var(--muted)" }}>Set a date for a daily countdown.</div>
                </div>
                <button
                  onClick={() => setEditingDate(true)}
                  className="text-xs font-semibold hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Set date
                </button>
              </div>
            )}
          </div>

          {/* Daily goal */}
          <div className="card p-4 flex items-center gap-4">
            {/* Mini ring */}
            <Ring value={goalProgress * 100} size={64} stroke={6} label={`${answeredToday}`} />
            <div className="flex-1 min-w-0">
              {editingGoal ? (
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>Daily goal</div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max="500"
                      value={goalInput}
                      onChange={(e) => setGoalInput(e.target.value)}
                      placeholder={String(dailyGoalVal)}
                      className="w-16 rounded-md px-2 py-1 text-sm focus:outline-none"
                      style={{
                        background: "var(--surface-2)",
                        border: "1px solid var(--border)",
                        color: "var(--ink)",
                      }}
                    />
                    <button
                      onClick={handleSaveGoal}
                      className="text-xs font-semibold text-white px-2.5 py-1 rounded-md"
                      style={{ background: "var(--accent)" }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingGoal(false)}
                      className="text-xs"
                      style={{ color: "var(--muted)" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>Daily goal</div>
                  <div className="text-sm font-medium mb-1" style={{ color: "var(--ink)" }}>
                    {dailyGoalVal > 0 ? (
                      goalProgress >= 1 ? (
                        "Goal complete! 🎯"
                      ) : (
                        <>{Math.max(0, dailyGoalVal - answeredToday)} of {dailyGoalVal} remaining</>
                      )
                    ) : (
                      <span style={{ color: "var(--muted)" }}>No goal set</span>
                    )}
                  </div>
                  <button
                    onClick={() => { setGoalInput(String(dailyGoalVal)); setEditingGoal(true); }}
                    className="text-xs hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    {dailyGoalVal > 0 ? "Edit goal" : "Set goal"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Study calendar strip ─────────────────────────────────────── */}
        <div className="card p-4 mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
            Last 7 days
          </div>
          <div className="flex gap-2">
            {calendarDays.map((iso) => {
              const studied = studiedDates.has(iso);
              const dayLabel = shortDay(iso);
              const dateNum = parseInt(iso.split("-")[2], 10);
              return (
                <div key={iso} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full aspect-square rounded-lg flex items-center justify-center text-sm font-bold transition-colors"
                    style={{
                      background: studied ? "var(--accent)" : "var(--surface-2)",
                      color: studied ? "#fff" : "var(--faint)",
                    }}
                  >
                    {dateNum}
                  </div>
                  <div className="text-[10px]" style={{ color: "var(--faint)" }}>{dayLabel}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Recommended focus ───────────────────────────────────────── */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
            Recommended focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {focusSections.map((section) => {
              const mastery = sectionMastery[section.slug] ?? 0;
              const prog = sectionProgress[section.slug];
              return (
                <Link
                  key={section.slug}
                  href={`/study/${section.slug}`}
                  className="card card-tight p-4 flex flex-col gap-3 group transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                      style={{ background: `${section.color}18` }}
                    >
                      {section.icon}
                    </div>
                    <span
                      className="text-xs font-bold tabular-nums"
                      style={{ color: mastery > 0 ? section.color : "var(--faint)" }}
                    >
                      {mastery}%
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5 group-hover:underline" style={{ color: "var(--ink)" }}>
                      {section.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>
                      {prog && prog.total > 0
                        ? `${prog.done}/${prog.total} lessons`
                        : `${section.datQuestions} DAT questions`}
                    </div>
                  </div>
                  {/* Mastery bar */}
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${mastery}%`, background: section.color }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── Review shortcuts ─────────────────────────────────────────── */}
        {(bookmarkCount > 0 || incorrectCount > 0 || dueCount > 0) && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
              Review queue
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {dueCount > 0 && (
                <Link
                  href="/review?mode=due"
                  className="card card-tight p-4 flex items-center justify-between group transition-shadow hover:shadow-md"
                >
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                      Spaced repetition
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold" style={{ color: "var(--ink)" }}>{dueCount}</span>
                      <span className="text-xs" style={{ color: "var(--muted)" }}>due today</span>
                    </div>
                    {masteredCount > 0 && (
                      <div className="text-[11px] mt-0.5" style={{ color: "var(--faint)" }}>
                        {masteredCount} mastered
                      </div>
                    )}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform shrink-0">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Link>
              )}
              {incorrectCount > 0 && (
                <Link
                  href="/review?mode=missed"
                  className="card card-tight p-4 flex items-center justify-between group transition-shadow hover:shadow-md"
                  style={{ background: "#fff7ed", borderColor: "#fed7aa" }}
                >
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#c2410c" }}>
                      Missed questions
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold" style={{ color: "#c2410c" }}>{incorrectCount}</span>
                      <span className="text-xs" style={{ color: "#9a3412" }}>to retry</span>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform shrink-0">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Link>
              )}
              {bookmarkCount > 0 && (
                <Link
                  href="/review?mode=bookmarks"
                  className="card card-tight p-4 flex items-center justify-between group transition-shadow hover:shadow-md"
                  style={{ background: "var(--accent-soft)", borderColor: "var(--accent)" }}
                >
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--accent-strong)" }}>
                      Bookmarked
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold" style={{ color: "var(--accent-strong)" }}>{bookmarkCount}</span>
                      <span className="text-xs" style={{ color: "var(--accent)" }}>starred</span>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform shrink-0">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* ── All sections grid ────────────────────────────────────────── */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
            All sections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {DAT_SECTIONS.map((section) => {
              const prog = sectionProgress[section.slug] ?? { done: 0, total: 0 };
              const mastery = sectionMastery[section.slug] ?? 0;
              const pct = prog.total > 0 ? Math.round((prog.done / prog.total) * 100) : 0;
              return (
                <Link
                  key={section.slug}
                  href={`/study/${section.slug}`}
                  className="card card-tight p-4 group transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0"
                      style={{ background: `${section.color}18` }}
                    >
                      {section.icon}
                    </div>
                    <span className="text-xs font-mono" style={{ color: "var(--faint)" }}>
                      {prog.total > 0 ? `${prog.done}/${prog.total}` : `0/${section.chapters}`}
                    </span>
                  </div>
                  <div className="font-semibold text-sm mb-0.5 group-hover:underline" style={{ color: "var(--ink)" }}>
                    {section.name}
                  </div>
                  <div className="text-xs mb-3" style={{ color: "var(--muted)" }}>
                    {section.datQuestions} questions · {section.datMinutes} min
                  </div>
                  <div className="h-1 rounded-full overflow-hidden mb-2" style={{ background: "var(--border)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, background: section.color }}
                    />
                  </div>
                  <div className="text-[11px] font-medium" style={{ color: mastery > 0 ? section.color : "var(--faint)" }}>
                    {mastery > 0 ? `${mastery}% mastery` : pct > 0 ? `${pct}% lessons done` : "Not started"}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </AppLayout>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { AppLayout } from "@/components/app-layout";
import { getChaptersForSection } from "@/lib/content-map";
import {
  getStudyStats,
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
  type StudyStats,
} from "@/lib/progress";

function getTotalLessonsForSection(slug: string): number {
  const chapters = getChaptersForSection(slug);
  return chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
}

function findContinuePath(stats: StudyStats): string | null {
  // If we have a last-studied path, use it
  if (stats.lastStudiedPath) return stats.lastStudiedPath;

  // Otherwise find the first section with incomplete content
  for (const section of DAT_SECTIONS) {
    const chapters = getChaptersForSection(section.slug);
    if (chapters.length === 0) continue;
    const completed = getCompletedLessonsForSection(section.slug);
    const total = getTotalLessonsForSection(section.slug);
    if (completed.length < total) {
      // Find the first chapter with incomplete lessons
      for (const ch of chapters) {
        if (ch.lessons.length > 0) {
          return `/study/${section.slug}/${ch.slug}`;
        }
      }
    }
  }
  return null;
}

export default function Dashboard() {
  const [stats, setStats] = useState<StudyStats | null>(null);
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});
  const [testDate, setTestDate] = useState<string | null>(null);
  const [editingDate, setEditingDate] = useState(false);
  const [dateInput, setDateInput] = useState("");
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [dueCount, setDueCount] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);
  const [dailyGoal, setDailyGoalState] = useState(30);
  const [answeredToday, setAnsweredToday] = useState(0);
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState("");

  useEffect(() => {
    const s = getStudyStats();
    setStats(s);

    const progress: Record<string, number> = {};
    for (const section of DAT_SECTIONS) {
      const completed = getCompletedLessonsForSection(section.slug);
      progress[section.slug] = completed.length;
    }
    setSectionProgress(progress);
    setTestDate(getTargetTestDate());
    setBookmarkCount(getBookmarkedQuestionIds().length);
    setIncorrectCount(getIncorrectQuestionIds().length);
    setDueCount(getDueQuestionIds().length);
    setMasteredCount(getMasteredCount());
    setDailyGoalState(getDailyGoal());
    setAnsweredToday(getQuestionsAnsweredToday());
  }, []);

  const handleSaveGoal = () => {
    const n = Math.max(0, parseInt(goalInput || "0", 10) || 0);
    setDailyGoal(n);
    setDailyGoalState(n);
    setEditingGoal(false);
  };
  const goalProgress = dailyGoal > 0 ? Math.min(answeredToday / dailyGoal, 1) : 0;

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
  const days = daysUntilTest();

  const continuePath = stats ? findContinuePath(stats) : null;

  return (
    <AppLayout>
      <div className="h-14 border-b border-[var(--color-border)] flex items-center px-6 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <h1 className="font-semibold">Dashboard</h1>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-8 pt-16 md:pt-8">
        {/* Welcome header */}
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
            <p className="text-[var(--color-text-secondary)] text-sm">Pick up where you left off or start a new section.</p>
          </div>
          {continuePath && (
            <Link
              href={continuePath}
              className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors text-center"
            >
              Continue Studying
            </Link>
          )}
        </div>

        {/* Test-date countdown */}
        <div className="mb-6 bg-white rounded-xl border border-[var(--color-border)] p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {editingDate ? (
            <>
              <div className="flex flex-col md:flex-row md:items-center gap-3 flex-1">
                <span className="text-sm text-[var(--color-text-secondary)]">Target DAT date:</span>
                <input
                  type="date"
                  value={dateInput || testDate || ""}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="border border-[var(--color-border)] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleSaveDate} className="bg-[var(--color-primary)] text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[var(--color-primary-dark)]">Save</button>
                {testDate && (
                  <button onClick={handleClearDate} className="text-sm text-red-600 hover:text-red-700 font-medium">Clear</button>
                )}
                <button onClick={() => setEditingDate(false)} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--foreground)]">Cancel</button>
              </div>
            </>
          ) : testDate ? (
            <>
              <div>
                <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold mb-1">Days until DAT</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold" style={{ color: days !== null && days <= 14 ? "#DC2626" : days !== null && days <= 30 ? "#D97706" : "var(--color-primary)" }}>
                    {days !== null ? (days >= 0 ? days : "passed") : "—"}
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {days !== null && days >= 0 ? `· ${new Date(testDate + "T00:00:00").toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}` : ""}
                  </span>
                </div>
              </div>
              <button onClick={() => { setDateInput(testDate); setEditingDate(true); }} className="text-sm text-[var(--color-primary)] hover:underline self-start md:self-auto">
                Edit
              </button>
            </>
          ) : (
            <>
              <div className="text-sm text-[var(--color-text-secondary)]">Set a target test date for a daily countdown.</div>
              <button onClick={() => setEditingDate(true)} className="text-sm text-[var(--color-primary)] hover:underline font-medium self-start md:self-auto">
                Set test date
              </button>
            </>
          )}
        </div>

        {/* Spaced-repetition + daily-goal row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {/* Due today (SR queue) */}
          <Link
            href="/review?mode=due"
            className={`group rounded-xl border p-4 flex items-center justify-between transition-colors ${
              dueCount > 0
                ? "bg-[var(--color-primary-light)] border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]"
                : "bg-white border-[var(--color-border)] hover:border-[var(--color-text-muted)]"
            }`}
          >
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: dueCount > 0 ? "var(--color-primary-dark)" : "var(--color-text-muted)" }}>
                🔁 Spaced repetition
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold" style={{ color: dueCount > 0 ? "var(--color-primary)" : "var(--color-text-muted)" }}>
                  {dueCount}
                </span>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  due today
                </span>
              </div>
              {masteredCount > 0 && (
                <div className="text-xs text-[var(--color-text-muted)] mt-1">
                  {masteredCount} {masteredCount === 1 ? "question" : "questions"} mastered (3+ in a row)
                </div>
              )}
            </div>
            <span className="text-xl group-hover:translate-x-0.5 transition-transform" style={{ color: dueCount > 0 ? "var(--color-primary)" : "var(--color-text-muted)" }}>→</span>
          </Link>

          {/* Daily goal ring */}
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-4 flex items-center justify-between gap-4">
            {/* SVG progress ring */}
            <div className="relative shrink-0">
              <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
                <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-border)" strokeWidth="6" />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke={goalProgress >= 1 ? "#16A34A" : "var(--color-primary)"}
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 28}
                  strokeDashoffset={(1 - goalProgress) * 2 * Math.PI * 28}
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-xs font-bold leading-tight">
                <span>{answeredToday}</span>
                <span className="text-[10px] text-[var(--color-text-muted)]">/{dailyGoal || "∞"}</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              {editingGoal ? (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)]">Daily goal</div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max="500"
                      value={goalInput}
                      onChange={(e) => setGoalInput(e.target.value)}
                      placeholder={String(dailyGoal)}
                      className="w-16 border border-[var(--color-border)] rounded-md px-2 py-1 text-sm focus:outline-none focus:border-[var(--color-primary)]"
                    />
                    <button onClick={handleSaveGoal} className="text-xs font-medium bg-[var(--color-primary)] text-white px-2.5 py-1 rounded-md hover:bg-[var(--color-primary-dark)]">Save</button>
                    <button onClick={() => setEditingGoal(false)} className="text-xs text-[var(--color-text-muted)] hover:text-[var(--foreground)]">Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-muted)] mb-1">Daily goal</div>
                  <div className="text-sm">
                    {dailyGoal > 0 ? (
                      goalProgress >= 1 ? (
                        <span className="font-bold text-green-700">Goal hit. 🎯 Keep going if you&rsquo;re feeling it.</span>
                      ) : (
                        <span><span className="font-bold">{Math.max(0, dailyGoal - answeredToday)}</span> {dailyGoal - answeredToday === 1 ? "question" : "questions"} to go today</span>
                      )
                    ) : (
                      <span className="text-[var(--color-text-muted)]">No goal set</span>
                    )}
                  </div>
                  <button
                    onClick={() => { setGoalInput(String(dailyGoal)); setEditingGoal(true); }}
                    className="text-xs text-[var(--color-primary)] hover:underline mt-1"
                  >
                    {dailyGoal > 0 ? "Edit goal" : "Set goal"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            {
              label: "Study Streak",
              value: stats ? `${stats.streak} day${stats.streak !== 1 ? "s" : ""}` : "0 days",
              icon: "🔥",
              color: "#D97706",
            },
            {
              label: "Questions Answered",
              value: stats ? `${stats.totalQuestionsAnswered}` : "0",
              icon: "✅",
              color: "#4CD080",
            },
            {
              label: "Hours Studied",
              value: stats ? `${stats.totalHoursStudied}h` : "0h",
              icon: "⏱",
              color: "var(--color-primary)",
            },
            {
              label: "Predicted Score",
              value: stats?.predictedScore ? `${stats.predictedScore}/30` : "—",
              icon: "🎯",
              color: "#7C3AED",
            },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-[var(--color-border)] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">{stat.icon}</span>
                <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wide">{stat.label}</span>
              </div>
              <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Review queues — bookmarks + missed-question shortcuts */}
        {(bookmarkCount > 0 || incorrectCount > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {incorrectCount > 0 && (
              <Link
                href="/review?mode=missed"
                className="group bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between hover:border-amber-400 transition-colors"
              >
                <div>
                  <div className="text-xs text-amber-700 uppercase tracking-wider font-semibold mb-1">Missed-question review</div>
                  <div className="text-sm text-amber-900">
                    <span className="text-2xl font-bold">{incorrectCount}</span>
                    <span className="ml-2">{incorrectCount === 1 ? "question" : "questions"} to retry</span>
                  </div>
                </div>
                <span className="text-amber-700 group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            )}
            {bookmarkCount > 0 && (
              <Link
                href="/review?mode=bookmarks"
                className="group bg-[var(--color-primary-light)] border border-[var(--color-primary)]/20 rounded-xl p-4 flex items-center justify-between hover:border-[var(--color-primary)]/40 transition-colors"
              >
                <div>
                  <div className="text-xs text-[var(--color-primary-dark)] uppercase tracking-wider font-semibold mb-1">Bookmarked</div>
                  <div className="text-sm text-[var(--color-primary-dark)]">
                    <span className="text-2xl font-bold">{bookmarkCount}</span>
                    <span className="ml-2">starred {bookmarkCount === 1 ? "question" : "questions"}</span>
                  </div>
                </div>
                <span className="text-[var(--color-primary-dark)] group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            )}
          </div>
        )}

        {/* Average quiz score banner */}
        {stats && stats.averageQuizScore !== null && (
          <div className="bg-[var(--color-primary-light)] border border-[var(--color-primary)]/20 rounded-xl p-4 mb-8 flex items-center justify-between">
            <div>
              <div className="font-semibold text-[var(--color-primary-dark)]">
                Your average quiz score: {stats.averageQuizScore}% across {stats.quizzesTaken} quiz{stats.quizzesTaken !== 1 ? "zes" : ""}
              </div>
              <div className="text-sm text-[var(--color-primary-dark)]/70">
                {stats.averageQuizScore >= 80
                  ? "Great work! Keep reviewing to maintain your edge."
                  : "Keep studying and retaking quizzes to improve your score."}
              </div>
            </div>
            <Link
              href="/exams"
              className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View All Scores
            </Link>
          </div>
        )}

        {/* Section cards */}
        <h2 className="text-lg font-semibold mb-4">Your Sections</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {DAT_SECTIONS.map((section) => {
            const completedCount = sectionProgress[section.slug] || 0;
            const totalLessons = getTotalLessonsForSection(section.slug);
            const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

            return (
              <Link
                key={section.slug}
                href={`/study/${section.slug}`}
                className="group bg-white rounded-xl border border-[var(--color-border)] p-5 hover:border-[var(--color-text-muted)] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl">{section.icon}</div>
                  <span className="text-xs font-mono text-[var(--color-text-muted)]">
                    {totalLessons > 0 ? `${completedCount}/${totalLessons}` : `0/${section.chapters}`}
                  </span>
                </div>
                <div className="font-semibold mb-1 group-hover:text-[var(--color-primary)] transition-colors">{section.name}</div>
                <div className="text-xs text-[var(--color-text-muted)] mb-4">{section.datQuestions} questions &middot; {section.datMinutes} min on DAT</div>

                {/* Progress bar */}
                <div className="h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${progressPercent}%`,
                      backgroundColor: section.color,
                    }}
                  />
                </div>

                <div className="text-xs font-medium" style={{ color: completedCount > 0 ? section.color : "var(--color-text-muted)" }}>
                  {completedCount > 0
                    ? progressPercent === 100
                      ? "Complete!"
                      : `${progressPercent}% — Continue`
                    : "Start Learning"}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { BIOLOGY_CHAPTERS } from "@/lib/sample-content";
import {
  getStudyStats,
  getCompletedLessonsForSection,
  type StudyStats,
} from "@/lib/progress";

function getChaptersForSection(slug: string) {
  if (slug === "biology") return BIOLOGY_CHAPTERS;
  return [];
}

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

  useEffect(() => {
    const s = getStudyStats();
    setStats(s);

    const progress: Record<string, number> = {};
    for (const section of DAT_SECTIONS) {
      const completed = getCompletedLessonsForSection(section.slug);
      progress[section.slug] = completed.length;
    }
    setSectionProgress(progress);
  }, []);

  const continuePath = stats ? findContinuePath(stats) : null;

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-[var(--color-border)] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-sm">D</div>
            <span className="font-semibold text-lg tracking-tight">DAT Prep</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/dashboard" className="font-medium text-[var(--color-primary)]">Dashboard</Link>
            <Link href="/study" className="text-[var(--color-text-secondary)] hover:text-[var(--foreground)]">Study</Link>
            <Link href="/exams" className="text-[var(--color-text-secondary)] hover:text-[var(--foreground)]">Practice Exams</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
            <p className="text-[var(--color-text-secondary)] text-sm">Pick up where you left off or start a new section.</p>
          </div>
          {continuePath && (
            <Link
              href={continuePath}
              className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Continue Studying
            </Link>
          )}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
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
    </div>
  );
}

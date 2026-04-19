"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { BIOLOGY_CHAPTERS } from "@/lib/sample-content";
import { getCompletedLessonsForSection } from "@/lib/progress";

function getChaptersForSection(slug: string) {
  if (slug === "biology") return BIOLOGY_CHAPTERS;
  return [];
}

function getTotalLessonsForSection(slug: string): number {
  const chapters = getChaptersForSection(slug);
  return chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
}

export default function StudyPage() {
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const progress: Record<string, number> = {};
    for (const section of DAT_SECTIONS) {
      const completed = getCompletedLessonsForSection(section.slug);
      progress[section.slug] = completed.length;
    }
    setSectionProgress(progress);
  }, []);

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
            <Link href="/dashboard" className="text-[var(--color-text-secondary)] hover:text-[var(--foreground)]">Dashboard</Link>
            <Link href="/study" className="font-medium text-[var(--color-primary)]">Study</Link>
            <Link href="/exams" className="text-[var(--color-text-secondary)] hover:text-[var(--foreground)]">Practice Exams</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Study Sections</h1>
          <p className="text-[var(--color-text-secondary)] text-sm">All 6 sections of the Dental Admission Test. Choose a section to begin studying.</p>
        </div>

        <div className="space-y-4">
          {DAT_SECTIONS.map((section) => {
            const completedCount = sectionProgress[section.slug] || 0;
            const totalLessons = getTotalLessonsForSection(section.slug);
            const hasContent = totalLessons > 0;
            const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

            return (
              <Link
                key={section.slug}
                href={`/study/${section.slug}`}
                className="block bg-white rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-text-muted)] hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ backgroundColor: `${section.color}15` }}
                  >
                    {section.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h2 className="font-semibold text-lg group-hover:text-[var(--color-primary)] transition-colors">{section.name}</h2>
                      {hasContent ? (
                        <span className="text-xs font-mono text-[var(--color-text-muted)]">{completedCount}/{totalLessons} lessons</span>
                      ) : (
                        <span className="text-xs text-[var(--color-text-muted)]">Coming soon</span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] mb-3">{section.description}</p>
                    <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)] mb-3">
                      <span>{section.chapters} chapters</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-border)]"></span>
                      <span>{section.datQuestions} questions on DAT</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-border)]"></span>
                      <span>{section.datMinutes} min on test day</span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${progressPercent}%`,
                          backgroundColor: section.color,
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-xs font-medium" style={{ color: completedCount > 0 ? section.color : "var(--color-text-muted)" }}>
                        {completedCount > 0
                          ? progressPercent === 100
                            ? "Complete!"
                            : `${progressPercent}% complete`
                          : hasContent
                          ? "Not started"
                          : "Content in development"}
                      </span>
                      {hasContent && (
                        <span className="text-xs font-semibold" style={{ color: section.color }}>
                          {completedCount > 0 ? "Continue" : "Start"} &rarr;
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

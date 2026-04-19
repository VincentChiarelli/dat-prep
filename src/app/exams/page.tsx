"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getQuizResults, getBestQuizScore, type QuizResult } from "@/lib/progress";
import { BIOLOGY_CHAPTERS } from "@/lib/sample-content";

export default function ExamsPage() {
  const [scores, setScores] = useState<QuizResult[]>([]);

  useEffect(() => {
    setScores(getQuizResults());
  }, []);

  const availableQuizzes = BIOLOGY_CHAPTERS.filter((c) => c.questions.length > 0);
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((s, q) => s + q.percent, 0) / scores.length) : null;

  return (
    <div className="min-h-screen">
      <nav className="border-b border-[var(--color-border)] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-6 text-sm">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-xs">D</div>
            <span className="font-semibold tracking-tight">DAT Prep</span>
          </Link>
          <Link href="/dashboard" className="text-[var(--color-text-secondary)] hover:text-[var(--foreground)]">Dashboard</Link>
          <Link href="/study" className="text-[var(--color-text-secondary)] hover:text-[var(--foreground)]">Study</Link>
          <span className="font-medium text-[var(--color-primary)]">Practice Exams</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-2">Practice Quizzes & Exams</h1>
        <p className="text-[var(--color-text-secondary)] text-sm mb-8">Test your knowledge with chapter quizzes. Full-length practice exams coming soon.</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-4 text-center">
            <div className="text-2xl font-bold text-[var(--color-primary)]">{scores.length}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">Quizzes Taken</div>
          </div>
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-4 text-center">
            <div className="text-2xl font-bold" style={{ color: avgScore && avgScore >= 80 ? "#16A34A" : avgScore && avgScore >= 60 ? "#D97706" : "#DC2626" }}>
              {avgScore !== null ? `${avgScore}%` : "—"}
            </div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">Average Score</div>
          </div>
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-4 text-center">
            <div className="text-2xl font-bold text-[#7C3AED]">{availableQuizzes.length}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">Quizzes Available</div>
          </div>
        </div>

        {/* Available quizzes */}
        <h2 className="text-lg font-semibold mb-4">Chapter Quizzes — Biology</h2>
        <div className="space-y-3 mb-10">
          {availableQuizzes.map((chapter) => {
            const chapterScores = scores.filter((s) => s.chapterSlug === chapter.slug);
            const bestScore = chapterScores.length > 0 ? Math.max(...chapterScores.map((s) => s.percent)) : null;

            return (
              <div key={chapter.slug} className="flex items-center gap-4 bg-white rounded-xl border border-[var(--color-border)] p-4">
                <div className="w-10 h-10 rounded-lg bg-[#16A34A]/10 flex items-center justify-center text-lg">🧬</div>
                <div className="flex-1">
                  <div className="font-medium">{chapter.title}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{chapter.questions.length} questions</div>
                </div>
                {bestScore !== null && (
                  <div className="text-right mr-4">
                    <div className="text-sm font-bold" style={{ color: bestScore >= 80 ? "#16A34A" : bestScore >= 60 ? "#D97706" : "#DC2626" }}>
                      Best: {bestScore}%
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">{chapterScores.length} attempt{chapterScores.length !== 1 ? "s" : ""}</div>
                  </div>
                )}
                <Link
                  href={`/study/biology/${chapter.slug}`}
                  className="text-sm font-medium bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  {bestScore !== null ? "Retake" : "Start"}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Score history */}
        {scores.length > 0 && (
          <>
            <h2 className="text-lg font-semibold mb-4">Score History</h2>
            <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Chapter</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Score</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.slice().reverse().map((score, i) => (
                    <tr key={i} className="border-b border-[var(--color-border)] last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-[var(--color-text-muted)]">
                        {new Date(score.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 font-medium">{score.chapterSlug}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold">
                        {score.score}/{score.total}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{
                            color: score.percent >= 80 ? "#16A34A" : score.percent >= 60 ? "#D97706" : "#DC2626",
                            backgroundColor: score.percent >= 80 ? "rgba(22,163,74,.1)" : score.percent >= 60 ? "rgba(217,119,6,.1)" : "rgba(220,38,38,.1)",
                          }}
                        >
                          {score.percent}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Full exams coming soon */}
        <div className="mt-10 text-center py-12 bg-white rounded-xl border border-dashed border-[var(--color-border)]">
          <div className="text-3xl mb-3">📝</div>
          <div className="font-semibold mb-1">Full-Length Practice Exams</div>
          <div className="text-sm text-[var(--color-text-muted)]">280 questions, timed sections, scaled scoring — coming soon</div>
        </div>
      </div>
    </div>
  );
}

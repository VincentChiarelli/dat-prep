"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getQuizResults, type QuizResult } from "@/lib/progress";
import { EXAM_CONFIGS, getExamAttempts, type ExamAttempt } from "@/lib/exam-engine";
import { getQuestionStats } from "@/lib/question-bank";
import { BIOLOGY_CHAPTERS } from "@/lib/sample-content";
import { AppLayout } from "@/components/app-layout";

export default function ExamsPage() {
  const [quizScores, setQuizScores] = useState<QuizResult[]>([]);
  const [examAttempts, setExamAttempts] = useState<ExamAttempt[]>([]);
  const [questionCount, setQuestionCount] = useState(0);

  useEffect(() => {
    setQuizScores(getQuizResults());
    setExamAttempts(getExamAttempts());
    setQuestionCount(getQuestionStats().total);
  }, []);

  const allScores = [
    ...quizScores.map((q) => q.percent),
    ...examAttempts.map((e) => e.overallPercent),
  ];
  const avgScore = allScores.length > 0 ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) : null;

  const availableChapterQuizzes = BIOLOGY_CHAPTERS.filter((c) => c.questions.length > 0);

  return (
    <AppLayout>
      <div className="h-14 border-b border-[var(--color-border)] flex items-center px-6 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <h1 className="font-semibold">FINRA DAT Practice Exams</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-2">Practice Exams & Quizzes</h1>
        <p className="text-[var(--color-text-secondary)] text-sm mb-8">Timed exams with randomized questions. Take them multiple times — questions shuffle each attempt.</p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-4 text-center">
            <div className="text-2xl font-bold text-[var(--color-primary)]">{questionCount}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">Questions in Bank</div>
          </div>
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-4 text-center">
            <div className="text-2xl font-bold text-[#7C3AED]">{quizScores.length + examAttempts.length}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">Total Attempts</div>
          </div>
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-4 text-center">
            <div className="text-2xl font-bold" style={{ color: avgScore && avgScore >= 80 ? "#16A34A" : avgScore ? "#D97706" : "var(--color-text-muted)" }}>
              {avgScore !== null ? `${avgScore}%` : "—"}
            </div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">Average Score</div>
          </div>
          <div className="bg-white rounded-xl border border-[var(--color-border)] p-4 text-center">
            <div className="text-2xl font-bold text-[#0891B2]">{EXAM_CONFIGS.length}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">Exam Types</div>
          </div>
        </div>

        {/* Practice Exams */}
        <h2 className="text-lg font-semibold mb-4">Practice Exams</h2>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {EXAM_CONFIGS.map((exam) => {
            const attempts = examAttempts.filter((a) => a.examId === exam.id);
            const best = attempts.length > 0 ? Math.max(...attempts.map((a) => a.overallPercent)) : null;

            return (
              <Link
                key={exam.id}
                href={`/exams/${exam.id}`}
                className="bg-white rounded-xl border border-[var(--color-border)] p-5 hover:border-[var(--color-text-muted)] hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold group-hover:text-[var(--color-primary)] transition-colors">{exam.title}</div>
                    <div className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      {exam.totalQuestions} questions &middot; {exam.totalTimeMinutes} min &middot; Randomized
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    exam.type === "full" ? "bg-red-50 text-red-600" :
                    exam.type === "section" ? "bg-blue-50 text-blue-600" :
                    "bg-green-50 text-green-600"
                  }`}>
                    {exam.type === "full" ? "Full Exam" : exam.type === "section" ? "Section" : "Quick Quiz"}
                  </span>
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mb-2">
                  {exam.sections.map((s) => s.sectionName).join(" + ")}
                </div>
                {best !== null ? (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-muted)]">{attempts.length} attempt{attempts.length !== 1 ? "s" : ""}</span>
                    <span className="text-sm font-bold" style={{ color: best >= 80 ? "#16A34A" : best >= 60 ? "#D97706" : "#DC2626" }}>
                      Best: {best}%
                    </span>
                  </div>
                ) : (
                  <span className="text-xs font-medium text-[var(--color-primary)]">Start →</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Chapter Quizzes */}
        <h2 className="text-lg font-semibold mb-4">Chapter Quizzes — Biology</h2>
        <div className="space-y-3 mb-10">
          {availableChapterQuizzes.map((chapter) => {
            const scores = quizScores.filter((s) => s.chapterSlug === chapter.slug);
            const best = scores.length > 0 ? Math.max(...scores.map((s) => s.percent)) : null;
            return (
              <div key={chapter.slug} className="flex items-center gap-4 bg-white rounded-xl border border-[var(--color-border)] p-4">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-lg">🧬</div>
                <div className="flex-1">
                  <div className="font-medium">{chapter.title}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{chapter.questions.length} questions</div>
                </div>
                {best !== null && (
                  <div className="text-right mr-4">
                    <div className="text-sm font-bold" style={{ color: best >= 80 ? "#16A34A" : "#D97706" }}>Best: {best}%</div>
                    <div className="text-xs text-[var(--color-text-muted)]">{scores.length} attempt{scores.length !== 1 ? "s" : ""}</div>
                  </div>
                )}
                <Link href={`/study/biology/${chapter.slug}`} className="text-sm font-medium bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary-dark)]">
                  {best !== null ? "Retake" : "Start"}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Exam History */}
        {examAttempts.length > 0 && (
          <>
            <h2 className="text-lg font-semibold mb-4">Exam History</h2>
            <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Exam</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Score</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Time</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {examAttempts.slice().reverse().map((a, i) => (
                    <tr key={i} className="border-b border-[var(--color-border)] last:border-0 hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-xs text-[var(--color-text-muted)]">{new Date(a.completedAt).toLocaleDateString()}</td>
                      <td className="px-4 py-3 font-medium">{a.examTitle}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold">{a.overallScore}/{a.totalQuestions}</td>
                      <td className="px-4 py-3 text-right font-mono text-xs text-[var(--color-text-muted)]">{Math.floor(a.timeSpentSeconds / 60)}m</td>
                      <td className="px-4 py-3 text-right">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{
                          color: a.overallPercent >= 80 ? "#16A34A" : a.overallPercent >= 60 ? "#D97706" : "#DC2626",
                          backgroundColor: a.overallPercent >= 80 ? "rgba(22,163,74,.1)" : a.overallPercent >= 60 ? "rgba(217,119,6,.1)" : "rgba(220,38,38,.1)",
                        }}>
                          {a.overallPercent}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
}

"use client";

import Link from "next/link";
import { AppLayout } from "@/components/app-layout";
import { TextbookNav } from "@/components/textbook-nav";
import { DAT_SECTIONS } from "@/lib/dat-constants";

export default function StudyPage() {
  return (
    <AppLayout>
      <div className="flex flex-1 min-h-screen">
        <TextbookNav />
        <div className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="h-14 border-b border-[var(--color-border)] flex items-center px-6 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
            <span className="text-sm text-[var(--color-text-muted)]">DAT Prep</span>
          </div>

          {/* Introduction content */}
          <div className="max-w-3xl mx-auto px-8 py-10">
            <h1 className="text-3xl font-bold mb-4">Introduction</h1>
            <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-8">
              <span>3 min read</span>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Welcome to the DAT Prep course. The Dental Admission Test (DAT) is administered by the
                American Dental Association (ADA) and is required for admission to dental schools in the
                United States and Canada.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3">Exam Format</h2>
              <p>The DAT consists of <strong>280 questions</strong> across 4 main test sections, with a total testing time of <strong>4 hours and 15 minutes</strong>.</p>

              <div className="bg-[var(--color-primary-light)] border-l-4 border-[var(--color-primary)] p-4 rounded-r-lg my-6">
                <p className="text-sm text-[var(--color-primary-dark)] m-0">
                  Scores range from 1 to 30, with a national average around 19-20. Most competitive dental programs look for scores of 20+ in each section.
                </p>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3">Test Sections</h2>
              <div className="not-prose">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[var(--color-border)]">
                      <th className="text-left py-3 px-4 font-semibold">Section</th>
                      <th className="text-center py-3 px-4 font-semibold">Questions</th>
                      <th className="text-center py-3 px-4 font-semibold">Time</th>
                      <th className="text-center py-3 px-4 font-semibold">Chapters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DAT_SECTIONS.map((s) => (
                      <tr key={s.slug} className="border-b border-[var(--color-border)] hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <Link href={`/study/${s.slug}`} className="flex items-center gap-2 text-[var(--color-primary)] font-medium hover:underline">
                            <span>{s.icon}</span>
                            <span>{s.name}</span>
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-center font-mono">{s.datQuestions}</td>
                        <td className="py-3 px-4 text-center font-mono">{s.datMinutes} min</td>
                        <td className="py-3 px-4 text-center font-mono">{s.chapters}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50 font-semibold">
                      <td className="py-3 px-4">Total</td>
                      <td className="py-3 px-4 text-center font-mono">280</td>
                      <td className="py-3 px-4 text-center font-mono">255 min</td>
                      <td className="py-3 px-4 text-center font-mono">51</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3">How to Use This Course</h2>
              <ol className="space-y-2">
                <li><strong>Read the textbook</strong> — Work through each chapter in order. Key terms are highlighted and DAT-specific tips are called out.</li>
                <li><strong>Take chapter quizzes</strong> — After each chapter, test yourself with practice questions. Review the explanations for any you miss.</li>
                <li><strong>Practice exams</strong> — Once you&apos;ve covered the material, take timed practice exams that simulate the real DAT format with randomized questions.</li>
                <li><strong>Review weak areas</strong> — Use your quiz and exam scores to identify topics that need more study.</li>
              </ol>

              <div className="mt-10 flex items-center gap-4">
                <Link
                  href="/study/biology/cell-biology"
                  className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors inline-block no-underline"
                >
                  Start Chapter 1 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

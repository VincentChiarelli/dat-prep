"use client";

import { Suspense, useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AppLayout } from "@/components/app-layout";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { getAllQuestions } from "@/lib/question-bank";
import { generateExamQuestions, type ExamQuestion } from "@/lib/exam-engine";
import {
  saveQuizScore,
  recordQuestionAttempt,
  getSectionMastery,
} from "@/lib/progress";

// ── Types ─────────────────────────────────────────────────────────────────────

type DrillMode =
  | { kind: "quick" }
  | { kind: "weak" }
  | { kind: "half" }
  | { kind: "full" }
  | { kind: "section"; slug: string };

interface DrillResult {
  score: number;
  total: number;
  percent: number;
  answers: Record<string, string>;
  questions: ExamQuestion[];
}

// ── helpers ────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Build a question set from the bank given a DrillMode. */
function buildDrill(mode: DrillMode): ExamQuestion[] {
  const allQ = getAllQuestions();

  if (mode.kind === "section") {
    const pool = allQ.filter((q) => q.sectionSlug === mode.slug);
    const section = DAT_SECTIONS.find((s) => s.slug === mode.slug);
    const sectionName = section?.name ?? mode.slug;
    return generateExamQuestions(allQ, {
      id: `drill-section-${mode.slug}`,
      title: `${sectionName} Drill`,
      type: "section",
      sections: [{ sectionSlug: mode.slug, sectionName, questionCount: Math.min(15, pool.length), timeLimitMinutes: 20 }],
      totalQuestions: Math.min(15, pool.length),
      totalTimeMinutes: 20,
    });
  }

  if (mode.kind === "quick") {
    // 10 random across all sections (roughly proportional)
    const slugs = DAT_SECTIONS.map((s) => s.slug);
    const sectionDefs = slugs.map((slug) => {
      const pool = allQ.filter((q) => q.sectionSlug === slug);
      return { slug, count: pool.length };
    });
    const totalPool = sectionDefs.reduce((s, d) => s + d.count, 0);
    const sections = sectionDefs
      .filter((d) => d.count > 0)
      .map((d) => ({
        sectionSlug: d.slug,
        sectionName: DAT_SECTIONS.find((s) => s.slug === d.slug)?.name ?? d.slug,
        questionCount: Math.max(1, Math.round((d.count / totalPool) * 10)),
        timeLimitMinutes: 12,
      }));
    // Trim to exactly 10
    let total = sections.reduce((s, x) => s + x.questionCount, 0);
    while (total > 10 && sections.length > 0) {
      const max = sections.reduce((best, cur) => (cur.questionCount > best.questionCount ? cur : best), sections[0]);
      max.questionCount--;
      total--;
    }
    return generateExamQuestions(allQ, {
      id: "drill-quick",
      title: "Quick Drill",
      type: "mini",
      sections: sections.filter((s) => s.questionCount > 0),
      totalQuestions: sections.reduce((s, x) => s + x.questionCount, 0),
      totalTimeMinutes: 12,
    });
  }

  if (mode.kind === "weak") {
    // 15 Q from the 3 lowest-mastery sections
    const sorted = [...DAT_SECTIONS]
      .map((s) => ({ slug: s.slug, name: s.name, mastery: getSectionMastery(s.slug), count: allQ.filter((q) => q.sectionSlug === s.slug).length }))
      .filter((s) => s.count > 0)
      .sort((a, b) => a.mastery - b.mastery);
    const bottom3 = sorted.slice(0, 3);
    const perSection = Math.ceil(15 / bottom3.length);
    const sections = bottom3.map((s) => ({
      sectionSlug: s.slug,
      sectionName: s.name,
      questionCount: Math.min(perSection, s.count),
      timeLimitMinutes: 20,
    }));
    return generateExamQuestions(allQ, {
      id: "drill-weak",
      title: "Weak Sections Drill",
      type: "mini",
      sections,
      totalQuestions: sections.reduce((s, x) => s + x.questionCount, 0),
      totalTimeMinutes: 20,
    });
  }

  if (mode.kind === "half") {
    const slugs = DAT_SECTIONS.map((s) => s.slug);
    const totalPool = slugs.reduce((s, slug) => s + allQ.filter((q) => q.sectionSlug === slug).length, 0);
    const sections = slugs
      .map((slug) => {
        const pool = allQ.filter((q) => q.sectionSlug === slug);
        const section = DAT_SECTIONS.find((s) => s.slug === slug)!;
        return {
          sectionSlug: slug,
          sectionName: section.name,
          questionCount: Math.max(0, Math.round((pool.length / totalPool) * 50)),
          timeLimitMinutes: 45,
        };
      })
      .filter((s) => s.questionCount > 0);
    return generateExamQuestions(allQ, {
      id: "drill-half",
      title: "Half Test",
      type: "full",
      sections,
      totalQuestions: sections.reduce((s, x) => s + x.questionCount, 0),
      totalTimeMinutes: 45,
    });
  }

  // full — ~100 Q
  const slugs = DAT_SECTIONS.map((s) => s.slug);
  const totalPool = slugs.reduce((s, slug) => s + allQ.filter((q) => q.sectionSlug === slug).length, 0);
  const sections = slugs
    .map((slug) => {
      const pool = allQ.filter((q) => q.sectionSlug === slug);
      const section = DAT_SECTIONS.find((s) => s.slug === slug)!;
      return {
        sectionSlug: slug,
        sectionName: section.name,
        questionCount: Math.max(0, Math.round((pool.length / totalPool) * 100)),
        timeLimitMinutes: 90,
      };
    })
    .filter((s) => s.questionCount > 0);
  return generateExamQuestions(allQ, {
    id: "drill-full",
    title: "Full Random",
    type: "full",
    sections,
    totalQuestions: sections.reduce((s, x) => s + x.questionCount, 0),
    totalTimeMinutes: 90,
  });
}

// ── Mode label helper ──────────────────────────────────────────────────────────

function modeLabel(mode: DrillMode): string {
  if (mode.kind === "section") {
    const s = DAT_SECTIONS.find((s) => s.slug === mode.slug);
    return s ? `${s.name} Drill` : "Section Drill";
  }
  const MAP: Record<string, string> = {
    quick: "Quick Drill",
    weak: "Weak Sections",
    half: "Half Test",
    full: "Full Random",
  };
  return MAP[mode.kind] ?? mode.kind;
}

// ── Quiz runner ────────────────────────────────────────────────────────────────

function QuizRunner({ questions, onFinish, onReset, modeTitle }: {
  questions: ExamQuestion[];
  onFinish: (result: DrillResult) => void;
  onReset: () => void;
  modeTitle: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<DrillResult | null>(null);
  const startTimeRef = useRef(Date.now());

  const handleSubmit = useCallback(() => {
    let score = 0;
    for (const q of questions) {
      const selected = answers[q.id];
      const correct = q.choices.find((c) => c.isCorrect);
      const isCorrect = selected === correct?.label;
      if (isCorrect) score++;
      recordQuestionAttempt(q.id, isCorrect);
    }

    // Record quiz scores per section
    const bySection: Record<string, { correct: number; total: number }> = {};
    for (const q of questions) {
      if (!bySection[q.sectionSlug]) bySection[q.sectionSlug] = { correct: 0, total: 0 };
      bySection[q.sectionSlug].total++;
      const selected = answers[q.id];
      const correct = q.choices.find((c) => c.isCorrect);
      if (selected === correct?.label) bySection[q.sectionSlug].correct++;
    }
    for (const [sectionSlug, counts] of Object.entries(bySection)) {
      // Use the first question's chapterSlug as a proxy label for the drill
      const firstQ = questions.find((q) => q.sectionSlug === sectionSlug);
      saveQuizScore(sectionSlug, firstQ?.chapterSlug ?? "drill", counts.correct, counts.total);
    }

    const total = questions.length;
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;
    const r: DrillResult = { score, total, percent, answers, questions };
    setResult(r);
    setSubmitted(true);
    onFinish(r);
    window.scrollTo(0, 0);
  }, [answers, questions, onFinish]);

  // Results view
  if (submitted && result) {
    const { score, total, percent } = result;
    const borderColor = percent >= 70 ? "#16A34A" : percent >= 50 ? "#D97706" : "#DC2626";
    const emoji = percent >= 70 ? "🎉" : percent >= 50 ? "📖" : "💪";

    return (
      <div>
        {/* Score card */}
        <div
          className="card mb-6 p-8 text-center"
          style={{ borderColor, borderWidth: 2 }}
        >
          <div className="text-4xl mb-3">{emoji}</div>
          <div className="text-4xl font-bold mb-1" style={{ color: "var(--ink)" }}>
            {score}/{total}
          </div>
          <div className="text-2xl font-bold mb-2" style={{ color: borderColor }}>
            {percent}%
          </div>
          <div className="text-sm" style={{ color: "var(--muted)" }}>{modeTitle}</div>
        </div>

        <div className="flex gap-3 mb-8">
          <button
            onClick={onReset}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors hover:bg-[var(--surface-2)]"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            ↻ New set
          </button>
          <Link
            href="/analytics"
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-center transition-opacity hover:opacity-80"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            View analytics
          </Link>
        </div>

        {/* Per-question review */}
        <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>
          Review
        </h2>
        <div className="space-y-4">
          {result.questions.map((q, i) => {
            const selected = result.answers[q.id];
            const correct = q.choices.find((c) => c.isCorrect);
            const isCorrect = selected === correct?.label;
            return (
              <div key={q.id} className="card p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background: isCorrect ? "#dcfce7" : "#fee2e2",
                      color: isCorrect ? "#15803d" : "#b91c1c",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div className="text-sm font-medium leading-relaxed" style={{ color: "var(--ink)" }}>
                    {q.stem}
                  </div>
                </div>
                <div className="space-y-1.5 ml-10">
                  {q.choices.map((c) => {
                    let bg = "transparent";
                    let borderClr = "var(--border)";
                    let textClr = "var(--ink)";
                    if (c.isCorrect) { bg = "#dcfce7"; borderClr = "#86efac"; textClr = "#15803d"; }
                    else if (c.label === selected) { bg = "#fee2e2"; borderClr = "#fca5a5"; textClr = "#b91c1c"; }
                    return (
                      <div
                        key={c.label}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm"
                        style={{ background: bg, borderColor: borderClr, color: textClr }}
                      >
                        <span className="font-bold text-xs w-5 shrink-0">{c.label}.</span>
                        <span>{c.text}</span>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="mt-3 ml-10 p-3 rounded-lg text-sm"
                  style={{
                    background: isCorrect ? "#f0fdf4" : "#fff7ed",
                    border: `1px solid ${isCorrect ? "#bbf7d0" : "#fed7aa"}`,
                  }}
                >
                  <div
                    className="font-semibold text-xs uppercase tracking-wide mb-1"
                    style={{ color: isCorrect ? "#15803d" : "#c2410c" }}
                  >
                    {isCorrect ? "✓ Correct" : `✗ Incorrect — answer: ${correct?.label}`}
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.explanation}</ReactMarkdown>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={onReset}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors hover:bg-[var(--surface-2)]"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            ↻ New set
          </button>
        </div>
      </div>
    );
  }

  // Active quiz
  const q = questions[currentIndex];
  const answered = Object.keys(answers).length;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs mb-1.5" style={{ color: "var(--muted)" }}>
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{answered} answered</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface-2)" }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%`, background: "var(--accent)" }}
          />
        </div>
      </div>

      {/* Question stem */}
      <div className="card p-6 mb-4">
        <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>
          {DAT_SECTIONS.find((s) => s.slug === q.sectionSlug)?.name ?? q.sectionSlug}
        </div>
        <div className="text-base font-medium leading-relaxed" style={{ color: "var(--ink)" }}>
          {q.stem}
        </div>
      </div>

      {/* Choices */}
      <div className="space-y-3 mb-6">
        {q.choices.map((choice) => {
          const isSelected = answers[q.id] === choice.label;
          return (
            <button
              key={choice.label}
              onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: choice.label }))}
              className="w-full text-left flex items-center gap-4 p-4 rounded-xl border-2 transition-all"
              style={{
                background: isSelected ? "var(--accent-soft)" : "var(--surface)",
                borderColor: isSelected ? "var(--accent)" : "var(--border)",
              }}
            >
              <span
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0"
                style={{
                  borderColor: isSelected ? "var(--accent)" : "var(--border)",
                  background: isSelected ? "var(--accent)" : "transparent",
                  color: isSelected ? "#fff" : "var(--muted)",
                }}
              >
                {choice.label}
              </span>
              <span className="text-sm" style={{ color: "var(--ink)" }}>{choice.text}</span>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          className={`text-sm font-medium px-5 py-2.5 rounded-xl border transition-colors hover:bg-[var(--surface-2)] ${currentIndex === 0 ? "invisible" : ""}`}
          style={{ borderColor: "var(--border)", color: "var(--ink)" }}
        >
          ← Previous
        </button>
        {currentIndex < questions.length - 1 ? (
          <button
            onClick={() => setCurrentIndex((i) => i + 1)}
            className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="text-sm font-semibold px-6 py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ background: "#16A34A" }}
          >
            Submit ✓
          </button>
        )}
      </div>
    </div>
  );
}

// ── Mode picker card ───────────────────────────────────────────────────────────

function ModeCard({ icon, title, description, count, accent, onClick }: {
  icon: string;
  title: string;
  description: string;
  count: string;
  accent?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="card card-tight p-4 text-left w-full group transition-shadow hover:shadow-md"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl">{icon}</span>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: accent ? "var(--accent-soft)" : "var(--surface-2)",
            color: accent ? "var(--accent-strong)" : "var(--muted)",
          }}
        >
          {count}
        </span>
      </div>
      <div className="font-semibold text-sm mb-0.5 group-hover:underline" style={{ color: "var(--ink)" }}>
        {title}
      </div>
      <div className="text-xs" style={{ color: "var(--muted)" }}>{description}</div>
    </button>
  );
}

// ── Inner component that reads searchParams ────────────────────────────────────

function PracticeInner() {
  const searchParams = useSearchParams();
  const drillParam = searchParams.get("drill");

  const [activeMode, setActiveMode] = useState<DrillMode | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [drillTitle, setDrillTitle] = useState("");
  const [selectedSection, setSelectedSection] = useState<string>(DAT_SECTIONS[0].slug);
  const [hasResult, setHasResult] = useState(false);

  // Auto-start if ?drill=<slug> is present
  useEffect(() => {
    if (drillParam) {
      const valid = DAT_SECTIONS.find((s) => s.slug === drillParam);
      if (valid) {
        startMode({ kind: "section", slug: drillParam });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drillParam]);

  function startMode(mode: DrillMode) {
    const qs = buildDrill(mode);
    setQuestions(qs);
    setActiveMode(mode);
    setDrillTitle(modeLabel(mode));
    setHasResult(false);
    window.scrollTo(0, 0);
  }

  function reset() {
    if (activeMode) startMode(activeMode);
  }

  // Quiz is active
  if (activeMode && questions.length > 0) {
    return (
      <div className="mx-auto max-w-3xl">
        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold" style={{ color: "var(--ink)" }}>{drillTitle}</h1>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
              {questions.length} questions
            </p>
          </div>
          <button
            onClick={() => { setActiveMode(null); setHasResult(false); }}
            className="text-sm px-4 py-2 rounded-lg border transition-colors hover:bg-[var(--surface-2)]"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            ← Modes
          </button>
        </div>
        <QuizRunner
          key={`${activeMode.kind}-${(activeMode as { slug?: string }).slug ?? ""}-${questions[0]?.id}`}
          questions={questions}
          modeTitle={drillTitle}
          onFinish={() => setHasResult(true)}
          onReset={reset}
        />
      </div>
    );
  }

  // Picker
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--ink)" }}>Practice</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Pick a drill mode to start. Questions are randomized every time.
        </p>
      </div>

      {/* Drill mode cards */}
      <h2 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--faint)" }}>
        Drill modes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mb-6">
        <ModeCard
          icon="⚡"
          title="Quick Drill"
          description="10 random questions across all sections"
          count="10 Q"
          onClick={() => startMode({ kind: "quick" })}
        />
        <ModeCard
          icon="🎯"
          title="Weak Sections"
          description="15 questions from your 3 lowest-mastery sections"
          count="15 Q"
          accent
          onClick={() => startMode({ kind: "weak" })}
        />
        <ModeCard
          icon="📝"
          title="Half Test"
          description="~50 questions proportional across all sections"
          count="~50 Q"
          onClick={() => startMode({ kind: "half" })}
        />
        <ModeCard
          icon="🏆"
          title="Full Random"
          description="~100 questions for a full practice session"
          count="~100 Q"
          onClick={() => startMode({ kind: "full" })}
        />
      </div>

      {/* Section drill */}
      <div className="card p-5 mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--faint)" }}>
          Section drill — 15 questions
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="flex-1 rounded-xl px-3 py-2.5 text-sm border appearance-none cursor-pointer"
            style={{
              background: "var(--surface-2)",
              borderColor: "var(--border)",
              color: "var(--ink)",
            }}
          >
            {DAT_SECTIONS.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.icon} {s.name}
              </option>
            ))}
          </select>
          <button
            onClick={() => startMode({ kind: "section", slug: selectedSection })}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 shrink-0"
            style={{ background: "var(--accent)" }}
          >
            Start drill →
          </button>
        </div>
      </div>

      {/* Section quick-links */}
      <h2 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--faint)" }}>
        Jump to a section
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {DAT_SECTIONS.map((s) => {
          const mastery = getSectionMastery(s.slug);
          const isWeak = mastery > 0 && mastery < 70;
          return (
            <button
              key={s.slug}
              onClick={() => startMode({ kind: "section", slug: s.slug })}
              className="card card-tight p-3.5 text-left group transition-shadow hover:shadow-md"
              style={isWeak ? { borderColor: "#fbbf24", background: "#fffbeb" } : {}}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-lg">{s.icon}</span>
                {mastery > 0 && (
                  <span
                    className="text-[10px] font-bold tabular-nums"
                    style={{ color: mastery >= 70 ? "#16a34a" : mastery >= 50 ? "#d97706" : "#dc2626" }}
                  >
                    {mastery}%
                  </span>
                )}
              </div>
              <div className="text-xs font-semibold group-hover:underline" style={{ color: "var(--ink)" }}>
                {s.name}
              </div>
              {isWeak && (
                <div className="text-[10px] mt-0.5 font-medium" style={{ color: "#d97706" }}>
                  Needs work
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Page default export ────────────────────────────────────────────────────────

export default function PracticePage() {
  return (
    <AppLayout>
      <Suspense
        fallback={
          <div className="mx-auto max-w-3xl">
            <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--ink)" }}>Practice</h1>
            <p className="text-sm" style={{ color: "var(--muted)" }}>Loading…</p>
          </div>
        }
      >
        <PracticeInner />
      </Suspense>
    </AppLayout>
  );
}

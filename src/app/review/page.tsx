"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AppLayout } from "@/components/app-layout";
import { getAllQuestions } from "@/lib/question-bank";
import type { ExamQuestion } from "@/lib/exam-engine";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ReviewPage() {
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [mode, setMode] = useState<"all" | "biology" | "general-chemistry" | "organic-chemistry">("all");

  const loadQuestions = (filterMode: string) => {
    const all = getAllQuestions();
    const filtered = filterMode === "all" ? all : all.filter((q) => q.sectionSlug === filterMode);
    const shuffled = shuffle(filtered).slice(0, 20);
    // Shuffle choices too
    const randomized = shuffled.map((q) => ({
      ...q,
      choices: shuffle(q.choices).map((c, i) => ({ ...c, label: String.fromCharCode(65 + i) })),
    }));
    setQuestions(randomized);
    setCurrentIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore({ correct: 0, total: 0 });
  };

  useEffect(() => {
    loadQuestions(mode);
  }, [mode]);

  if (questions.length === 0) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-screen text-[var(--color-text-muted)]">Loading questions...</div>
      </AppLayout>
    );
  }

  const q = questions[currentIndex];
  const correct = q.choices.find((c) => c.isCorrect);
  const isCorrect = selected === correct?.label;
  const isLast = currentIndex >= questions.length - 1;

  const handleSelect = (label: string) => {
    if (revealed) return;
    setSelected(label);
    setRevealed(true);
    const isRight = q.choices.find((c) => c.label === label)?.isCorrect;
    setScore((prev) => ({ correct: prev.correct + (isRight ? 1 : 0), total: prev.total + 1 }));
  };

  const handleNext = () => {
    if (isLast) {
      // Reshuffle for another round
      loadQuestions(mode);
      return;
    }
    setCurrentIndex(currentIndex + 1);
    setSelected(null);
    setRevealed(false);
  };

  return (
    <AppLayout>
      <div className="h-14 border-b border-[var(--color-border)] flex items-center justify-between px-6 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <h1 className="font-semibold">Quick Review</h1>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-[var(--color-text-muted)]">{score.correct}/{score.total} correct</span>
          <span className="font-mono font-bold" style={{ color: score.total > 0 && score.correct / score.total >= 0.7 ? "#16A34A" : "#D97706" }}>
            {score.total > 0 ? Math.round((score.correct / score.total) * 100) + "%" : "—"}
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {[
            { key: "all", label: "All Sections" },
            { key: "biology", label: "Biology" },
            { key: "general-chemistry", label: "Gen Chem" },
            { key: "organic-chemistry", label: "Organic Chem" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setMode(tab.key as typeof mode)}
              className={`text-sm px-4 py-2 rounded-lg border transition-colors ${
                mode === tab.key
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-muted)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={() => loadQuestions(mode)}
            className="text-sm px-3 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--foreground)] ml-auto"
          >
            🔄 Shuffle
          </button>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-[var(--color-text-muted)] font-mono">{currentIndex + 1}/{questions.length}</span>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 shadow-sm">
          <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-4 font-semibold">
            {q.sectionSlug.replace(/-/g, " ")} &middot; {q.tags?.[0] || "General"}
          </div>

          <div className="text-lg font-medium leading-relaxed mb-8">{q.stem}</div>

          <div className="space-y-3">
            {q.choices.map((choice) => {
              let borderColor = "var(--color-border)";
              let bg = "transparent";
              let ring = "";
              if (revealed) {
                if (choice.isCorrect) { borderColor = "#16A34A"; bg = "rgba(22,163,74,.06)"; }
                else if (choice.label === selected && !choice.isCorrect) { borderColor = "#DC2626"; bg = "rgba(220,38,38,.06)"; }
              } else if (choice.label === selected) {
                borderColor = "var(--color-primary)"; bg = "var(--color-primary-light)"; ring = "ring-2 ring-[var(--color-primary)]/20";
              }

              return (
                <button
                  key={choice.label}
                  onClick={() => handleSelect(choice.label)}
                  disabled={revealed}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${ring}`}
                  style={{ borderColor, backgroundColor: bg }}
                >
                  <span
                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ borderColor, color: revealed && choice.isCorrect ? "#16A34A" : undefined }}
                  >
                    {choice.label}
                  </span>
                  <span>{choice.text}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {revealed && (
            <div className={`mt-6 p-5 rounded-xl text-sm leading-relaxed ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
              <div className="font-semibold mb-2 text-base">{isCorrect ? "✓ Correct!" : `✗ The answer is ${correct?.label}`}</div>
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.explanation}</ReactMarkdown>
              </div>
            </div>
          )}

          {/* Next button */}
          {revealed && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                {isLast ? "New Round →" : "Next Question →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

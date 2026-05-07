"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { AppLayout } from "@/components/app-layout";
import { getAllQuestions } from "@/lib/question-bank";
import {
  getBookmarkedQuestionIds,
  getIncorrectQuestionIds,
  getDueQuestionIds,
  toggleBookmark,
  isBookmarked,
  recordQuestionAttempt,
} from "@/lib/progress";
import type { ExamQuestion } from "@/lib/exam-engine";

type ReviewMode =
  | "all"
  | "due"
  | "bookmarks"
  | "missed"
  | "hard"
  | "biology"
  | "general-chemistry"
  | "organic-chemistry"
  | "perceptual-ability"
  | "reading-comprehension"
  | "quantitative-reasoning";

const MODE_LABELS: Record<ReviewMode, string> = {
  all: "All",
  due: "🔁 Due today",
  bookmarks: "★ Bookmarks",
  missed: "Missed",
  hard: "Hard (D3)",
  biology: "Biology",
  "general-chemistry": "Gen Chem",
  "organic-chemistry": "Org Chem",
  "perceptual-ability": "PAT",
  "reading-comprehension": "Reading",
  "quantitative-reasoning": "Quant",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ReviewInner() {
  const searchParams = useSearchParams();
  const initialMode = (searchParams.get("mode") as ReviewMode) || "all";

  const [mode, setMode] = useState<ReviewMode>(initialMode);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [starred, setStarred] = useState(false);
  const [poolEmpty, setPoolEmpty] = useState(false);

  // The full question bank — memoized so we don't re-extract on every render.
  const allQuestions = useMemo(() => getAllQuestions(), []);

  const loadQuestions = (filterMode: ReviewMode) => {
    let pool: ExamQuestion[];
    if (filterMode === "all") {
      pool = allQuestions;
    } else if (filterMode === "due") {
      const ids = new Set(getDueQuestionIds());
      pool = allQuestions.filter((q) => ids.has(q.id));
    } else if (filterMode === "bookmarks") {
      const ids = new Set(getBookmarkedQuestionIds());
      pool = allQuestions.filter((q) => ids.has(q.id));
    } else if (filterMode === "missed") {
      const ids = new Set(getIncorrectQuestionIds());
      pool = allQuestions.filter((q) => ids.has(q.id));
    } else if (filterMode === "hard") {
      pool = allQuestions.filter((q) => q.difficulty >= 3);
    } else {
      pool = allQuestions.filter((q) => q.sectionSlug === filterMode);
    }

    if (pool.length === 0) {
      setQuestions([]);
      setPoolEmpty(true);
      return;
    }
    setPoolEmpty(false);

    const shuffled = shuffle(pool).slice(0, 20);
    // Shuffle choices within each question too — keeps the user from
    // memorizing positions instead of content.
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // Sync the bookmark star whenever the question changes.
  useEffect(() => {
    if (questions.length > 0) {
      setStarred(isBookmarked(questions[currentIndex].id));
    }
  }, [currentIndex, questions]);

  if (poolEmpty) {
    return (
      <AppLayout>
        <div className="h-14 border-b border-[var(--color-border)] flex items-center px-4 md:px-6 sticky top-0 bg-white/80 backdrop-blur-sm z-10 pl-14 md:pl-6">
          <h1 className="font-semibold">Quick Review</h1>
        </div>
        <div className="max-w-2xl mx-auto px-4 md:px-6 py-12 text-center">
          <div className="text-4xl mb-4">
            {mode === "bookmarks" ? "☆" : mode === "missed" ? "🎯" : mode === "due" ? "✨" : "📭"}
          </div>
          <div className="font-semibold mb-2">
            {mode === "bookmarks"
              ? "No bookmarked questions yet"
              : mode === "missed"
              ? "No missed questions to review"
              : mode === "due"
              ? "Nothing due today"
              : "No questions in this filter"}
          </div>
          <div className="text-sm text-[var(--color-text-muted)] mb-6">
            {mode === "bookmarks"
              ? "Tap the ☆ next to any quiz question to bookmark it for later review."
              : mode === "missed"
              ? "When you miss a question on a chapter quiz, it will show up here."
              : mode === "due"
              ? "Spaced-repetition queue is empty. Take a chapter quiz to start scheduling reviews."
              : "Try a different filter."}
          </div>
          <ModeBar mode={mode} setMode={setMode} />
        </div>
      </AppLayout>
    );
  }

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
    setScore((prev) => ({
      correct: prev.correct + (isRight ? 1 : 0),
      total: prev.total + 1,
    }));
    // SR record — schedules next review interval and updates streak.
    // Also keeps the missed-question queue in sync (right answer removes
    // from the queue, wrong adds to it).
    recordQuestionAttempt(q.id, !!isRight);
  };

  const handleNext = () => {
    if (isLast) {
      loadQuestions(mode);
      return;
    }
    setCurrentIndex(currentIndex + 1);
    setSelected(null);
    setRevealed(false);
  };

  const handleStar = () => {
    const nowStarred = toggleBookmark(q.id);
    setStarred(nowStarred);
  };

  return (
    <AppLayout>
      <div className="h-14 border-b border-[var(--color-border)] flex items-center justify-between px-4 md:px-6 sticky top-0 bg-white/80 backdrop-blur-sm z-10 pl-14 md:pl-6 gap-2">
        <h1 className="font-semibold truncate">Quick Review</h1>
        <div className="flex items-center gap-3 text-sm shrink-0">
          <span className="text-[var(--color-text-muted)] hidden sm:inline">{score.correct}/{score.total} correct</span>
          <span className="font-mono font-bold" style={{ color: score.total > 0 && score.correct / score.total >= 0.7 ? "#16A34A" : "#D97706" }}>
            {score.total > 0 ? Math.round((score.correct / score.total) * 100) + "%" : "—"}
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <ModeBar mode={mode} setMode={setMode} onShuffle={() => loadQuestions(mode)} />

        {/* Progress */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-[var(--color-text-muted)] font-mono">{currentIndex + 1}/{questions.length}</span>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl border border-[var(--color-border)] p-5 md:p-8 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
              {q.sectionSlug.replace(/-/g, " ")} &middot; D{q.difficulty} &middot; {q.tags?.[0] || "General"}
            </div>
            <button
              onClick={handleStar}
              className="text-xl shrink-0 transition-transform hover:scale-110"
              aria-label={starred ? "Remove bookmark" : "Bookmark question"}
              title={starred ? "Bookmarked" : "Bookmark for review"}
            >
              {starred ? "★" : "☆"}
            </button>
          </div>

          <div className="text-base md:text-lg font-medium leading-relaxed mb-6 md:mb-8">{q.stem}</div>

          <div className="space-y-2 md:space-y-3">
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
                  className={`w-full text-left flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border-2 transition-all text-sm md:text-base ${ring}`}
                  style={{ borderColor, backgroundColor: bg }}
                >
                  <span
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 flex items-center justify-center text-xs md:text-sm font-bold shrink-0"
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
            <div className={`mt-6 p-4 md:p-5 rounded-xl text-sm leading-relaxed ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
              <div className="font-semibold mb-2 text-base">{isCorrect ? "✓ Correct!" : `✗ The answer is ${correct?.label}`}</div>
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{q.explanation}</ReactMarkdown>
              </div>
            </div>
          )}

          {/* Next button */}
          {revealed && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="bg-[var(--color-primary)] text-white px-5 md:px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                {isLast ? "New Round →" : "Next →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

function ModeBar({
  mode,
  setMode,
  onShuffle,
}: {
  mode: ReviewMode;
  setMode: (m: ReviewMode) => void;
  onShuffle?: () => void;
}) {
  const tabs: ReviewMode[] = [
    "due", "all", "bookmarks", "missed", "hard",
    "biology", "general-chemistry", "organic-chemistry",
    "perceptual-ability", "reading-comprehension", "quantitative-reasoning",
  ];
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setMode(tab)}
          className={`text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg border transition-colors ${
            mode === tab
              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
              : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-muted)]"
          }`}
        >
          {MODE_LABELS[tab]}
        </button>
      ))}
      {onShuffle && (
        <button
          onClick={onShuffle}
          className="text-xs md:text-sm px-3 py-1.5 md:px-3 md:py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--foreground)] ml-auto"
        >
          🔄 Shuffle
        </button>
      )}
    </div>
  );
}

export default function ReviewPage() {
  // useSearchParams() needs a Suspense boundary in Next 16 / React 19.
  return (
    <Suspense fallback={<AppLayout><div className="flex items-center justify-center min-h-screen text-[var(--color-text-muted)]">Loading…</div></AppLayout>}>
      <ReviewInner />
    </Suspense>
  );
}

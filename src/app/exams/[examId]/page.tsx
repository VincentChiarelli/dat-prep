"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  EXAM_CONFIGS,
  generateExamQuestions,
  saveExamAttempt,
  type ExamQuestion,
  type ExamConfig,
} from "@/lib/exam-engine";
import { getAllQuestions } from "@/lib/question-bank";

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const examId = params.examId as string;

  const config = EXAM_CONFIGS.find((c) => c.id === examId);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(0);
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const startTimeRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate questions on mount
  useEffect(() => {
    if (!config) return;
    const allQ = getAllQuestions();
    const generated = generateExamQuestions(allQ, config);
    setQuestions(generated);
    setTimeLeft(config.totalTimeMinutes * 60);
  }, [config]);

  // Timer
  useEffect(() => {
    if (!started || submitted) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [started, submitted]);

  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSubmitted(true);

    // Score it
    const sectionScores: Record<string, { correct: number; total: number; percent: number }> = {};
    let totalCorrect = 0;

    for (const q of questions) {
      const key = q.sectionSlug;
      if (!sectionScores[key]) sectionScores[key] = { correct: 0, total: 0, percent: 0 };
      sectionScores[key].total++;

      const selected = answers[q.id];
      const correctChoice = q.choices.find((c) => c.isCorrect);
      if (selected === correctChoice?.label) {
        sectionScores[key].correct++;
        totalCorrect++;
      }
    }

    Object.keys(sectionScores).forEach((k) => {
      sectionScores[k].percent = Math.round((sectionScores[k].correct / sectionScores[k].total) * 100);
    });

    const attempt = {
      examId: config!.id,
      examTitle: config!.title,
      startedAt: new Date(startTimeRef.current).toISOString(),
      completedAt: new Date().toISOString(),
      answers,
      sectionScores,
      overallScore: totalCorrect,
      overallPercent: Math.round((totalCorrect / questions.length) * 100),
      totalQuestions: questions.length,
      timeSpentSeconds: Math.round((Date.now() - startTimeRef.current) / 1000),
    };

    saveExamAttempt(attempt);
    window.scrollTo(0, 0);
  }, [answers, questions, config]);

  if (!config) {
    return <div className="min-h-screen flex items-center justify-center text-[var(--color-text-muted)]">Exam not found</div>;
  }

  if (questions.length === 0) {
    return <div className="min-h-screen flex items-center justify-center text-[var(--color-text-muted)]">Loading questions...</div>;
  }

  // Start screen
  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl border border-[var(--color-border)] p-10 max-w-md text-center shadow-lg">
          <div className="text-4xl mb-4">📝</div>
          <h1 className="text-2xl font-bold mb-2">{config.title}</h1>
          <div className="text-[var(--color-text-secondary)] mb-6">
            <div>{questions.length} questions &middot; {config.totalTimeMinutes} minutes</div>
            <div className="text-xs mt-1">Questions are randomized each attempt</div>
          </div>
          <div className="space-y-2 text-sm text-left text-[var(--color-text-muted)] mb-8">
            {config.sections.map((s) => (
              <div key={s.sectionSlug} className="flex justify-between">
                <span>{s.sectionName}</span>
                <span className="font-mono">{s.questionCount}Q / {s.timeLimitMinutes}m</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => { setStarted(true); startTimeRef.current = Date.now(); }}
            className="w-full bg-[var(--color-primary)] text-white py-3 rounded-xl font-semibold text-base hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Start Exam
          </button>
          <button
            onClick={() => router.push("/exams")}
            className="w-full mt-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--foreground)]"
          >
            ← Back to Exams
          </button>
        </div>
      </div>
    );
  }

  // Results screen
  if (submitted) {
    const totalCorrect = questions.filter((q) => {
      const selected = answers[q.id];
      return q.choices.find((c) => c.isCorrect)?.label === selected;
    }).length;
    const percent = Math.round((totalCorrect / questions.length) * 100);
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);

    return (
      <div className="min-h-screen bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="bg-white rounded-2xl border-2 p-8 text-center mb-8" style={{ borderColor: percent >= 80 ? "#16A34A" : percent >= 60 ? "#D97706" : "#DC2626" }}>
            <div className="text-5xl mb-4">{percent >= 80 ? "🎉" : percent >= 60 ? "📖" : "💪"}</div>
            <div className="text-4xl font-bold mb-1">{totalCorrect}/{questions.length}</div>
            <div className="text-2xl font-bold mb-3" style={{ color: percent >= 80 ? "#16A34A" : percent >= 60 ? "#D97706" : "#DC2626" }}>{percent}%</div>
            <div className="text-[var(--color-text-secondary)] mb-2">{config.title}</div>
            <div className="text-xs text-[var(--color-text-muted)]">
              Time: {Math.floor(timeSpent / 60)}m {timeSpent % 60}s &middot; {new Date().toLocaleDateString()}
            </div>
          </div>

          <h2 className="font-semibold text-lg mb-4">Review Questions</h2>
          <div className="space-y-4">
            {questions.map((q, i) => {
              const selected = answers[q.id];
              const correct = q.choices.find((c) => c.isCorrect);
              const isCorrect = selected === correct?.label;

              return (
                <div key={q.id} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {i + 1}
                    </span>
                    <div className="text-sm">{q.stem}</div>
                  </div>
                  <div className="space-y-1.5 ml-10 text-sm">
                    {q.choices.map((c) => {
                      let cls = "border-[var(--color-border)]";
                      if (c.isCorrect) cls = "border-green-400 bg-green-50";
                      else if (c.label === selected) cls = "border-red-400 bg-red-50";
                      return (
                        <div key={c.label} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${cls}`}>
                          <span className="font-bold text-xs w-5">{c.label}.</span>
                          <span>{c.text}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className={`mt-3 ml-10 p-3 rounded-lg text-sm ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.explanation}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => router.push(`/exams/${examId}`)} className="border border-[var(--color-border)] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50">
              Retake (New Questions)
            </button>
            <button onClick={() => router.push("/exams")} className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[var(--color-primary-dark)]">
              Back to Exams
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Exam taking UI
  const q = questions[currentIndex];
  const answered = Object.keys(answers).length;
  const mm = Math.floor(timeLeft / 60);
  const ss = timeLeft % 60;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="border-b border-[var(--color-border)] bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <span className="text-sm font-medium">{config.title}</span>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[var(--color-text-muted)]">{answered}/{questions.length} answered</span>
            <span className={`font-mono font-bold text-sm ${timeLeft < 60 ? "text-red-600 animate-pulse" : timeLeft < 300 ? "text-amber-600" : "text-[var(--foreground)]"}`}>
              {mm.toString().padStart(2, "0")}:{ss.toString().padStart(2, "0")}
            </span>
            <button
              onClick={handleSubmit}
              className="text-sm font-medium bg-[var(--color-primary)] text-white px-4 py-1.5 rounded-lg hover:bg-[var(--color-primary-dark)]"
            >
              Submit Exam
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 max-w-5xl mx-auto w-full">
        {/* Question nav sidebar */}
        <aside className="w-16 border-r border-[var(--color-border)] py-4 px-2 shrink-0 overflow-y-auto">
          <div className="grid grid-cols-2 gap-1">
            {questions.map((_, i) => {
              const isAnswered = answers[questions[i].id];
              const isFlagged = flagged.has(i);
              const isCurrent = i === currentIndex;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-full aspect-square rounded text-xs font-bold flex items-center justify-center transition-colors ${
                    isCurrent
                      ? "bg-[var(--color-primary)] text-white"
                      : isAnswered
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-400"
                  } ${isFlagged ? "ring-2 ring-amber-400" : ""}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Question */}
        <main className="flex-1 py-8 px-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide font-semibold">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <button
                onClick={() => {
                  const next = new Set(flagged);
                  if (next.has(currentIndex)) next.delete(currentIndex);
                  else next.add(currentIndex);
                  setFlagged(next);
                }}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  flagged.has(currentIndex)
                    ? "bg-amber-50 border-amber-300 text-amber-700"
                    : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-amber-300"
                }`}
              >
                {flagged.has(currentIndex) ? "🚩 Flagged" : "🏳️ Flag"}
              </button>
            </div>

            <div className="text-base font-medium leading-relaxed mb-6">{q.stem}</div>

            <div className="space-y-3">
              {q.choices.map((choice) => {
                const isSelected = answers[q.id] === choice.label;
                return (
                  <button
                    key={choice.label}
                    onClick={() => setAnswers({ ...answers, [q.id]: choice.label })}
                    className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? "border-[var(--color-primary)] bg-[var(--color-primary-light)]"
                        : "border-[var(--color-border)] hover:border-[var(--color-text-muted)]"
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 ${
                      isSelected ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-[var(--color-border)]"
                    }`}>
                      {choice.label}
                    </span>
                    <span className="text-sm">{choice.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                className={`text-sm font-medium px-5 py-2.5 rounded-lg border border-[var(--color-border)] hover:bg-gray-50 ${currentIndex === 0 ? "invisible" : ""}`}
              >
                ← Previous
              </button>
              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                  className="text-sm font-semibold bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg hover:bg-[var(--color-primary-dark)]"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="text-sm font-semibold bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700"
                >
                  Submit Exam ✓
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { BIOLOGY_CHAPTERS } from "@/lib/sample-content";
import {
  markLessonComplete,
  isLessonComplete,
  saveQuizScore,
  logStudyTime,
  type QuizResult,
} from "@/lib/progress";
import { AppLayout } from "@/components/app-layout";
import { TextbookNav } from "@/components/textbook-nav";

export default function ChapterPage() {
  const params = useParams();
  const sectionSlug = params.sectionSlug as string;
  const chapterSlug = params.chapterSlug as string;

  const section = DAT_SECTIONS.find((s) => s.slug === sectionSlug);
  const chapters = sectionSlug === "biology" ? BIOLOGY_CHAPTERS : [];
  const chapter = chapters.find((c) => c.slug === chapterSlug);

  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [instantFeedback, setInstantFeedback] = useState(false);
  const [revealedQuestions, setRevealedQuestions] = useState<Set<number>>(new Set());
  const [showTerms, setShowTerms] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  // Study time tracking
  const sessionStartRef = useRef<number>(Date.now());

  useEffect(() => {
    sessionStartRef.current = Date.now();

    return () => {
      const elapsed = Math.round((Date.now() - sessionStartRef.current) / 60000);
      if (elapsed > 0) {
        logStudyTime(elapsed);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load completion state from localStorage
  useEffect(() => {
    if (!chapter) return;
    const completed = new Set<string>();
    for (const lesson of chapter.lessons) {
      if (isLessonComplete(sectionSlug, chapterSlug, lesson.slug)) {
        completed.add(lesson.slug);
      }
    }
    setCompletedLessons(completed);
  }, [sectionSlug, chapterSlug, chapter]);

  if (!section || !chapter || chapter.lessons.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--color-text-muted)]">
        <div className="text-center">
          <div className="text-4xl mb-4">📚</div>
          <div className="font-medium">Chapter not found or content not ready yet</div>
          <Link href={`/study/${sectionSlug}`} className="text-[var(--color-primary)] text-sm mt-2 block">
            &larr; Back to {section?.name || "section"}
          </Link>
        </div>
      </div>
    );
  }

  const lesson = chapter.lessons[currentLesson];
  const isLastLesson = currentLesson === chapter.lessons.length - 1;
  const quizScore = quizSubmitted
    ? chapter.questions.filter((q, i) => {
        const selected = quizAnswers[i];
        return q.choices.find((c) => c.label === selected)?.isCorrect;
      }).length
    : 0;

  const handleMarkComplete = () => {
    markLessonComplete(sectionSlug, chapterSlug, lesson.slug);
    setCompletedLessons((prev) => new Set(prev).add(lesson.slug));
  };

  const handleNextLesson = () => {
    handleMarkComplete();
    setCurrentLesson(currentLesson + 1);
    setShowTerms(false);
    window.scrollTo(0, 0);
  };

  const handlePrevLesson = () => {
    setCurrentLesson(Math.max(0, currentLesson - 1));
    setShowTerms(false);
    window.scrollTo(0, 0);
  };

  const handleStartQuiz = () => {
    handleMarkComplete();
    setShowQuiz(true);
    window.scrollTo(0, 0);
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    const score = chapter.questions.filter((q, i) => {
      const selected = quizAnswers[i];
      return q.choices.find((c) => c.label === selected)?.isCorrect;
    }).length;
    const result = saveQuizScore(sectionSlug, chapterSlug, score, chapter.questions.length);
    setQuizResult(result);
    window.scrollTo(0, 0);
  };

  if (showQuiz) {
    return (
      <AppLayout>
        <div className="min-h-screen">
        <nav className="border-b border-[var(--color-border)] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
            <button onClick={() => { setShowQuiz(false); setQuizSubmitted(false); setQuizAnswers({}); setQuizResult(null); }} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--foreground)]">
              &larr; Back to Lesson
            </button>
            <span className="text-sm font-medium">Chapter Quiz: {chapter.title}</span>
            {!quizSubmitted && (
              <button
                onClick={handleSubmitQuiz}
                className="text-sm font-medium bg-[var(--color-primary)] text-white px-4 py-1.5 rounded-lg disabled:opacity-40"
                disabled={Object.keys(quizAnswers).length < chapter.questions.length}
              >
                Submit ({Object.keys(quizAnswers).length}/{chapter.questions.length})
              </button>
            )}
            {quizSubmitted && (
              <span className="text-sm font-bold" style={{ color: quizScore / chapter.questions.length >= 0.8 ? "#16A34A" : "#D97706" }}>
                {quizScore}/{chapter.questions.length} ({Math.round((quizScore / chapter.questions.length) * 100)}%)
              </span>
            )}
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-6 py-8 space-y-8">
          {/* Instant feedback toggle */}
          {!quizSubmitted && (
            <div className="flex items-center justify-between bg-white rounded-xl border border-[var(--color-border)] p-4">
              <div>
                <div className="text-sm font-medium">Instant Feedback</div>
                <div className="text-xs text-[var(--color-text-muted)]">See explanations immediately after answering each question</div>
              </div>
              <button
                onClick={() => setInstantFeedback(!instantFeedback)}
                className={`relative w-11 h-6 rounded-full transition-colors ${instantFeedback ? "bg-[var(--color-primary)]" : "bg-gray-200"}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${instantFeedback ? "translate-x-5" : ""}`} />
              </button>
            </div>
          )}

          {/* Results summary card */}
          {quizSubmitted && quizResult && (
            <div className="bg-white rounded-xl border-2 p-6 text-center" style={{ borderColor: quizResult.percent >= 80 ? "#16A34A" : "#D97706" }}>
              <div className="text-4xl mb-3">{quizResult.percent >= 80 ? "🎉" : "📖"}</div>
              <div className="text-2xl font-bold mb-1">
                {quizResult.score}/{quizResult.total}
              </div>
              <div className="text-lg font-semibold mb-2" style={{ color: quizResult.percent >= 80 ? "#16A34A" : "#D97706" }}>
                {quizResult.percent}%
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] mb-4">
                {quizResult.percent >= 90
                  ? "Excellent! You have a strong grasp of this material."
                  : quizResult.percent >= 80
                  ? "Great job! Review the questions you missed to solidify your understanding."
                  : quizResult.percent >= 60
                  ? "Good effort. Re-read the lessons and try again to improve your score."
                  : "Keep studying! Review the lesson material and retake this quiz."}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">
                Score saved &middot; {new Date(quizResult.date).toLocaleDateString()}
              </div>
            </div>
          )}

          {chapter.questions.map((q, qi) => {
            const selected = quizAnswers[qi];
            const correct = q.choices.find((c) => c.isCorrect)?.label;
            const isCorrect = selected === correct;

            return (
              <div key={qi} className="bg-white rounded-xl border border-[var(--color-border)] p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center text-xs font-bold shrink-0">
                    {qi + 1}
                  </span>
                  <div className="text-sm font-medium leading-relaxed">{q.stem}</div>
                </div>

                <div className="space-y-2 ml-10">
                  {q.choices.map((choice) => {
                    let borderColor = "var(--color-border)";
                    let bg = "transparent";
                    if (quizSubmitted || revealedQuestions.has(qi)) {
                      if (choice.isCorrect) { borderColor = "#16A34A"; bg = "rgba(22,163,74,.06)"; }
                      else if (choice.label === selected && !choice.isCorrect) { borderColor = "#DC2626"; bg = "rgba(220,38,38,.06)"; }
                    } else if (choice.label === selected) {
                      borderColor = "var(--color-primary)"; bg = "var(--color-primary-light)";
                    }

                    return (
                      <button
                        key={choice.label}
                        onClick={() => {
                          if (quizSubmitted || revealedQuestions.has(qi)) return;
                          setQuizAnswers({ ...quizAnswers, [qi]: choice.label });
                          if (instantFeedback) {
                            setRevealedQuestions(new Set(revealedQuestions).add(qi));
                          }
                        }}
                        className="w-full text-left flex items-center gap-3 p-3 rounded-lg border transition-all text-sm"
                        style={{ borderColor, backgroundColor: bg }}
                        disabled={quizSubmitted}
                      >
                        <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0" style={{ borderColor }}>
                          {choice.label}
                        </span>
                        {choice.text}
                      </button>
                    );
                  })}
                </div>

                {(quizSubmitted || revealedQuestions.has(qi)) && (
                  <div className={`mt-4 ml-10 p-4 rounded-lg text-sm leading-relaxed ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                    <div className="font-semibold mb-1">{isCorrect ? "✓ Correct!" : `✗ Incorrect — the answer is ${correct}`}</div>
                    <div className="prose prose-sm max-w-none"><ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {q.explanation}
                    </ReactMarkdown></div>
                  </div>
                )}
              </div>
            );
          })}

          {quizSubmitted && (
            <div className="flex items-center justify-center gap-4 py-6">
              <button
                onClick={() => { setQuizSubmitted(false); setQuizAnswers({}); setQuizResult(null); window.scrollTo(0, 0); }}
                className="border border-[var(--color-border)] text-[var(--color-text-secondary)] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Retake Quiz
              </button>
              <Link
                href={`/study/${sectionSlug}`}
                className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Back to {section.name} &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
    <div className="flex flex-1 min-h-screen">
      <TextbookNav sectionSlug={sectionSlug} chapterSlug={chapterSlug} />
      <div className="flex-1 min-w-0 flex flex-col">
      {/* Top bar */}
      <div className="h-14 border-b border-[var(--color-border)] flex items-center px-6 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <span className="text-sm text-[var(--color-text-muted)]">{section.name}</span>
        <span className="mx-2 text-[var(--color-border)]">/</span>
        <span className="text-sm font-medium">{chapter.title}</span>
      </div>

      <div className="flex flex-1 w-full">
        {/* Lesson sidebar */}
        <aside className="w-52 border-r border-[var(--color-border)] py-6 px-4 shrink-0 hidden md:block overflow-y-auto h-[calc(100vh-56px)] sticky top-14">
          <div className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">Lessons</div>
          <div className="space-y-1">
            {chapter.lessons.map((l, i) => {
              const done = completedLessons.has(l.slug);
              return (
                <button
                  key={l.slug}
                  onClick={() => { setCurrentLesson(i); setShowTerms(false); window.scrollTo(0, 0); }}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    i === currentLesson
                      ? "bg-[var(--color-primary-light)] text-[var(--color-primary)] font-medium"
                      : "text-[var(--color-text-secondary)] hover:bg-gray-50"
                  }`}
                >
                  {done && <span className="text-xs text-green-600 shrink-0">&#10003;</span>}
                  <span className="truncate">{i + 1}. {l.title}</span>
                </button>
              );
            })}
          </div>
          {chapter.questions.length > 0 && (
            <>
              <div className="border-t border-[var(--color-border)] my-4" />
              <button
                onClick={handleStartQuiz}
                className="w-full text-left text-sm px-3 py-2 rounded-lg text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary-light)] transition-all"
              >
                📝 Chapter Quiz ({chapter.questions.length})
              </button>
            </>
          )}

          {/* Completion progress */}
          <div className="border-t border-[var(--color-border)] my-4" />
          <div className="px-3">
            <div className="text-xs text-[var(--color-text-muted)] mb-2">
              {completedLessons.size}/{chapter.lessons.length} lessons complete
            </div>
            <div className="h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-green-500 transition-all duration-300"
                style={{ width: `${(completedLessons.size / chapter.lessons.length) * 100}%` }}
              />
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 py-8 px-8 overflow-y-auto">
          <article className="max-w-3xl">
            {/* Lesson content */}
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-table:text-sm prose-th:bg-gray-50 prose-th:p-2 prose-td:p-2 prose-blockquote:border-l-[var(--color-primary)] prose-blockquote:bg-[var(--color-primary-light)] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-[var(--color-primary-dark)] prose-strong:text-[var(--foreground)]">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {lesson.content}
              </ReactMarkdown>
            </div>

            {/* Key Terms */}
            {lesson.keyTerms && lesson.keyTerms.length > 0 && (
              <div className="mt-8 border border-[var(--color-border)] rounded-xl overflow-hidden">
                <button
                  onClick={() => setShowTerms(!showTerms)}
                  className="w-full flex items-center justify-between px-5 py-3 bg-gray-50 text-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span>📋 Key Terms ({lesson.keyTerms.length})</span>
                  <span>{showTerms ? "▾" : "▸"}</span>
                </button>
                {showTerms && (
                  <div className="p-4 space-y-3">
                    {lesson.keyTerms.map((kt) => (
                      <div key={kt.term} className="flex gap-3 text-sm">
                        <span className="font-semibold text-[var(--color-primary)] min-w-[140px] shrink-0">{kt.term}</span>
                        <span className="text-[var(--color-text-secondary)]">{kt.definition}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Mark Complete button */}
            {!completedLessons.has(lesson.slug) && (
              <div className="mt-6">
                <button
                  onClick={handleMarkComplete}
                  className="text-sm font-medium px-4 py-2 rounded-lg border border-green-300 text-green-700 bg-green-50 hover:bg-green-100 transition-colors"
                >
                  &#10003; Mark Lesson Complete
                </button>
              </div>
            )}
            {completedLessons.has(lesson.slug) && (
              <div className="mt-6 text-sm text-green-600 font-medium flex items-center gap-1.5">
                <span>&#10003;</span> Lesson completed
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-[var(--color-border)]">
              <button
                onClick={handlePrevLesson}
                className={`text-sm font-medium px-4 py-2 rounded-lg border border-[var(--color-border)] hover:bg-gray-50 transition-colors ${currentLesson === 0 ? "invisible" : ""}`}
              >
                &larr; Previous Lesson
              </button>

              {isLastLesson ? (
                <button
                  onClick={handleStartQuiz}
                  className="text-sm font-semibold bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  Take Chapter Quiz &rarr;
                </button>
              ) : (
                <button
                  onClick={handleNextLesson}
                  className="text-sm font-semibold bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  Next Lesson &rarr;
                </button>
              )}
            </div>
          </article>
        </main>
      </div>
      </div>
    </div>
    </AppLayout>
  );
}

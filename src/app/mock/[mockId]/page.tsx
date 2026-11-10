"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ExamQuestion } from "@/lib/exam-engine";
import {
  MOCK_EXAM_CONFIGS,
  MOCK_MPS_PERCENT,
  generateSessionQuestions,
  scoreMockAttempt,
  saveMockAttempt,
  type MockAttempt,
} from "@/lib/mock-exam";

type Stage = "intro" | "session" | "review" | "break" | "results";

function fmtClock(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const mm = m.toString().padStart(2, "0");
  const ss = s.toString().padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

export default function MockExamPage() {
  const params = useParams();
  const router = useRouter();
  const mockId = params.mockId as string;
  const config = MOCK_EXAM_CONFIGS.find((c) => c.id === mockId);

  const [stage, setStage] = useState<Stage>("intro");
  const [sessions, setSessions] = useState<ExamQuestion[][]>([]);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [struck, setStruck] = useState<Record<string, string[]>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [breakLeft, setBreakLeft] = useState(0);
  const [timerHidden, setTimerHidden] = useState(false);
  const [pledged, setPledged] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [confirmEnd, setConfirmEnd] = useState(false);
  const [attempt, setAttempt] = useState<MockAttempt | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);

  const startedAtRef = useRef<string>("");
  const sessionTimeSpentRef = useRef<number[]>([0, 0]);
  const endSessionRef = useRef<() => void>(() => {});

  // Generate both sessions' question sets on mount (client-only, randomized per attempt)
  useEffect(() => {
    if (!config) return;
    setSessions(config.sessions.map((s) => generateSessionQuestions(s)));
  }, [config]);

  const questions = sessions[sessionIndex] || [];
  const q = questions[currentIndex];
  const sessionConfig = config?.sessions[sessionIndex];

  const endSession = () => {
    if (!config) return;
    sessionTimeSpentRef.current[sessionIndex] =
      config.sessions[sessionIndex].timeLimitMinutes * 60 - timeLeft;
    setConfirmEnd(false);
    setNavOpen(false);
    setCalcOpen(false);
    if (sessionIndex === 0) {
      setBreakLeft(config.breakMinutes * 60);
      setStage("break");
    } else {
      const result = scoreMockAttempt({
        config,
        sessionQuestions: sessions,
        answers,
        sessionTimeSpent: sessionTimeSpentRef.current,
        startedAt: startedAtRef.current,
      });
      saveMockAttempt(result);
      setAttempt(result);
      setStage("results");
      window.scrollTo(0, 0);
    }
  };
  endSessionRef.current = endSession;

  // Session timer — keeps running on the review screen, exactly like the real exam
  useEffect(() => {
    if (stage !== "session" && stage !== "review") return;
    const t = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endSessionRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [stage, sessionIndex]);

  // Optional break countdown — auto-starts Session 2 when it expires
  useEffect(() => {
    if (stage !== "break") return;
    const t = setInterval(() => {
      setBreakLeft((prev) => {
        if (prev <= 1) {
          startSession(1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  const startSession = (index: number) => {
    if (!config) return;
    setSessionIndex(index);
    setCurrentIndex(0);
    setTimeLeft(config.sessions[index].timeLimitMinutes * 60);
    setStage("session");
    window.scrollTo(0, 0);
  };

  const beginExam = () => {
    startedAtRef.current = new Date().toISOString();
    startSession(0);
  };

  const toggleFlag = (id: string) => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleStrike = (qid: string, label: string) => {
    setStruck((prev) => {
      const cur = prev[qid] || [];
      return {
        ...prev,
        [qid]: cur.includes(label) ? cur.filter((l) => l !== label) : [...cur, label],
      };
    });
  };

  const selectChoice = (qid: string, label: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: label }));
    // selecting a choice clears any strikethrough on it
    setStruck((prev) =>
      (prev[qid] || []).includes(label)
        ? { ...prev, [qid]: prev[qid].filter((l) => l !== label) }
        : prev
    );
  };

  const jumpTo = (index: number, filter?: "unanswered" | "flagged") => {
    let target = index;
    if (filter === "unanswered") {
      target = questions.findIndex((qq) => !answers[qq.id]);
      if (target === -1) return;
    } else if (filter === "flagged") {
      target = questions.findIndex((qq) => flagged.has(qq.id));
      if (target === -1) return;
    }
    setCurrentIndex(target);
    setNavOpen(false);
    setStage("session");
  };

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--color-text-muted)]">
        Mock exam not found
      </div>
    );
  }

  // ─────────────────────────── INTRO / CANDIDATE AGREEMENT ───────────────────────────
  if (stage === "intro") {
    const ready = sessions.length === 2;
    return (
      <div className="min-h-screen bg-[var(--background)] py-10">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-2">
                CFA Level I Format &middot; DAT Content
              </div>
              <h1 className="text-2xl font-bold">{config.title}</h1>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                180 questions &middot; two 135-minute sessions &middot; optional {config.breakMinutes}-minute break
              </p>
            </div>

            {config.sessions.map((s, si) => (
              <div key={s.name} className="mb-4">
                <div className="flex items-center justify-between text-sm font-semibold mb-2">
                  <span>{s.name}</span>
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">
                    90 questions &middot; 2 hrs 15 min
                  </span>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                  {s.topics.map((t) => (
                    <div
                      key={t.sectionSlug}
                      className="flex items-center justify-between px-4 py-2 text-sm border-b border-[var(--color-border)] last:border-0"
                    >
                      <span>{t.sectionName}</span>
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">
                        {t.questionCount} Q &middot; {t.weightLabel}
                      </span>
                    </div>
                  ))}
                </div>
                {si === 0 && (
                  <div className="text-center text-xs text-[var(--color-text-muted)] mt-3">
                    — optional {config.breakMinutes}-minute break (Session 1 is locked once ended) —
                  </div>
                )}
              </div>
            ))}

            <div className="bg-gray-50 rounded-xl p-4 text-xs text-[var(--color-text-secondary)] space-y-1.5 mb-6">
              <div className="font-semibold text-[var(--foreground)] text-sm mb-1">Exam rules & tools</div>
              <div>• Every question has exactly three answer choices (A, B, C). There is no penalty for guessing — answer everything.</div>
              <div>• Flag questions for review; right-click an answer choice to strike it through.</div>
              <div>• The Navigator and end-of-session Review screen let you revisit any question <em>within the current session only</em>.</div>
              <div>• The timer keeps running on the Review screen, and the session auto-submits at 0:00.</div>
              <div>• An on-screen calculator is available in the top bar.</div>
              <div>• Your result is graded against an estimated Minimum Passing Score of {MOCK_MPS_PERCENT}%.</div>
            </div>

            <label className="flex items-start gap-3 text-sm mb-6 cursor-pointer">
              <input
                type="checkbox"
                checked={pledged}
                onChange={(e) => setPledged(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[var(--color-primary)]"
              />
              <span className="text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--foreground)]">Candidate pledge:</span> I will complete
                this mock in one sitting under timed conditions, without notes or outside help.
              </span>
            </label>

            <button
              onClick={beginExam}
              disabled={!pledged || !ready}
              className="w-full bg-[var(--color-primary)] text-white py-3 rounded-xl font-semibold text-base hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {ready ? "Begin Session 1" : "Loading questions..."}
            </button>
            <button
              onClick={() => router.push("/exams")}
              className="w-full mt-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--foreground)]"
            >
              ← Back to Exams
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────── BREAK SCREEN ───────────────────────────
  if (stage === "break") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="bg-white rounded-2xl border border-[var(--color-border)] p-10 max-w-md text-center shadow-lg">
          <div className="text-4xl mb-4">☕</div>
          <h1 className="text-xl font-bold mb-2">Session 1 Complete</h1>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            You are on your optional break. Session 1 is now locked — you cannot return to it.
            Session 2 begins automatically when the break ends.
          </p>
          <div className="font-mono text-5xl font-bold mb-6">{fmtClock(breakLeft)}</div>
          <button
            onClick={() => startSession(1)}
            className="w-full bg-[var(--color-primary)] text-white py-3 rounded-xl font-semibold hover:bg-[var(--color-primary-dark)]"
          >
            Skip Break — Begin Session 2
          </button>
        </div>
      </div>
    );
  }

  // ─────────────────────────── RESULTS / SCORE REPORT ───────────────────────────
  if (stage === "results" && attempt) {
    return (
      <div className="min-h-screen bg-[var(--background)] py-10">
        <div className="max-w-3xl mx-auto px-6">
          {/* Pass/fail banner */}
          <div
            className="bg-white rounded-2xl border-2 p-8 text-center mb-6"
            style={{ borderColor: attempt.passed ? "#16A34A" : "#DC2626" }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
              {config.title} — Exam Result
            </div>
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: attempt.passed ? "#16A34A" : "#DC2626" }}
            >
              {attempt.passed ? "PASS" : "DID NOT PASS"}
            </div>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {attempt.passed
                ? "Congratulations. We are very pleased to inform you that you passed this mock examination."
                : "Unfortunately, your score was below the minimum passing score for this mock examination."}
            </p>
          </div>

          {/* Your score vs MPS */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 mb-6">
            <h2 className="font-semibold mb-4">Your Score vs. Minimum Passing Score</h2>
            <div className="relative h-8 bg-gray-100 rounded-full mb-8">
              <div
                className="absolute top-0 h-8 rounded-full"
                style={{
                  width: `${attempt.overallPercent}%`,
                  backgroundColor: attempt.passed ? "#16A34A" : "#DC2626",
                  opacity: 0.85,
                }}
              />
              <div
                className="absolute -top-1 h-10 border-l-2 border-dashed border-gray-800"
                style={{ left: `${MOCK_MPS_PERCENT}%` }}
              >
                <span className="absolute top-10 -translate-x-1/2 text-[10px] font-semibold whitespace-nowrap text-gray-700">
                  MPS {MOCK_MPS_PERCENT}%
                </span>
              </div>
              <span
                className="absolute -top-6 -translate-x-1/2 text-xs font-bold"
                style={{ left: `${Math.min(97, Math.max(3, attempt.overallPercent))}%` }}
              >
                You: {attempt.overallPercent}%
              </span>
            </div>
            <div className="text-xs text-[var(--color-text-muted)]">
              {attempt.overallCorrect} of {attempt.overallTotal} questions correct &middot; completed{" "}
              {new Date(attempt.completedAt).toLocaleDateString()}
            </div>
          </div>

          {/* Session breakdown */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 mb-6">
            <h2 className="font-semibold mb-4">Session Breakdown</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide border-b border-[var(--color-border)]">
                  <th className="text-left py-2">Session</th>
                  <th className="text-right py-2">Answered</th>
                  <th className="text-right py-2">Correct</th>
                  <th className="text-right py-2">Score</th>
                  <th className="text-right py-2">Time Used</th>
                </tr>
              </thead>
              <tbody>
                {attempt.sessionResults.map((s) => (
                  <tr key={s.name} className="border-b border-[var(--color-border)] last:border-0">
                    <td className="py-2.5 font-medium">{s.name}</td>
                    <td className="py-2.5 text-right font-mono">{s.answered}/{s.total}</td>
                    <td className="py-2.5 text-right font-mono">{s.correct}/{s.total}</td>
                    <td className="py-2.5 text-right font-mono font-bold">{s.percent}%</td>
                    <td className="py-2.5 text-right font-mono text-xs text-[var(--color-text-muted)]">
                      {fmtClock(s.timeSpentSeconds)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Topic-area performance, CFA score-report style */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 mb-6">
            <h2 className="font-semibold mb-1">Topic Area Performance</h2>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">
              A dot marks your performance band in each topic area.
            </p>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide border-b border-[var(--color-border)]">
                  <th className="text-left py-2">Topic</th>
                  <th className="text-right py-2">Qs</th>
                  <th className="text-center py-2 w-16">&lt;50%</th>
                  <th className="text-center py-2 w-16">50–70%</th>
                  <th className="text-center py-2 w-16">&gt;70%</th>
                </tr>
              </thead>
              <tbody>
                {attempt.topicResults.map((t) => (
                  <tr key={`${t.sessionName}-${t.sectionSlug}`} className="border-b border-[var(--color-border)] last:border-0">
                    <td className="py-2.5">
                      <span className="font-medium">{t.sectionName}</span>
                      <span className="text-xs text-[var(--color-text-muted)] ml-2">
                        {t.sessionName} &middot; {t.correct}/{t.total} ({t.percent}%)
                      </span>
                    </td>
                    <td className="py-2.5 text-right font-mono text-xs">{t.total}</td>
                    {(["<50%", "50%–70%", ">70%"] as const).map((band) => (
                      <td key={band} className="py-2.5 text-center">
                        {t.band === band && (
                          <span
                            className="inline-block w-3 h-3 rounded-full"
                            style={{
                              backgroundColor:
                                band === ">70%" ? "#16A34A" : band === "50%–70%" ? "#D97706" : "#DC2626",
                            }}
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Answer review */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className="border border-[var(--color-border)] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 bg-white"
            >
              {showAnswers ? "Hide Answer Review" : "Review All 180 Answers"}
            </button>
            <button
              onClick={() => window.location.reload()}
              className="border border-[var(--color-border)] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 bg-white"
            >
              Retake (New Questions)
            </button>
            <button
              onClick={() => router.push("/exams")}
              className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[var(--color-primary-dark)]"
            >
              Back to Exams
            </button>
          </div>

          {showAnswers &&
            sessions.map((sessionQs, si) => (
              <div key={si} className="mb-10">
                <h2 className="font-semibold text-lg mb-4">{config.sessions[si].name}</h2>
                <div className="space-y-4">
                  {sessionQs.map((qq, i) => {
                    const selected = answers[qq.id];
                    const correct = qq.choices.find((c) => c.isCorrect);
                    const isCorrect = selected === correct?.label;
                    return (
                      <div key={qq.id} className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <span
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                              isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            }`}
                          >
                            {i + 1}
                          </span>
                          <div className="text-sm">
                            {qq.stem}
                            {!selected && (
                              <span className="ml-2 text-xs text-[var(--color-text-muted)]">(unanswered)</span>
                            )}
                          </div>
                        </div>
                        <div className="space-y-1.5 ml-10 text-sm">
                          {qq.choices.map((c) => {
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
                        <div
                          className={`mt-3 ml-10 p-3 rounded-lg text-sm ${
                            isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                          }`}
                        >
                          <div className="prose prose-sm max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{qq.explanation}</ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  // ─────────────────────────── END-OF-SESSION REVIEW SCREEN ───────────────────────────
  if (stage === "review") {
    const unanswered = questions.filter((qq) => !answers[qq.id]).length;
    const flaggedCount = questions.filter((qq) => flagged.has(qq.id)).length;
    return (
      <div className="min-h-screen bg-[var(--background)]">
        <TopBar
          title={`${config.title} — ${sessionConfig?.name}`}
          timeLeft={timeLeft}
          timerHidden={timerHidden}
          onToggleTimer={() => setTimerHidden(!timerHidden)}
        />
        <div className="max-w-3xl mx-auto px-6 py-8">
          <h1 className="text-xl font-bold mb-1">Review — {sessionConfig?.name}</h1>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            The timer is still running. Click any question to return to it, or end the session below.
            {sessionIndex === 0 && " Once you end Session 1 you cannot return to it."}
          </p>

          <div className="flex items-center gap-3 mb-5">
            <button
              onClick={() => jumpTo(currentIndex)}
              className="text-sm font-medium border border-[var(--color-border)] bg-white px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Review All
            </button>
            <button
              onClick={() => jumpTo(0, "unanswered")}
              disabled={unanswered === 0}
              className="text-sm font-medium border border-[var(--color-border)] bg-white px-4 py-2 rounded-lg hover:bg-gray-50 disabled:opacity-40"
            >
              Review Incomplete ({unanswered})
            </button>
            <button
              onClick={() => jumpTo(0, "flagged")}
              disabled={flaggedCount === 0}
              className="text-sm font-medium border border-[var(--color-border)] bg-white px-4 py-2 rounded-lg hover:bg-gray-50 disabled:opacity-40"
            >
              Review Flagged ({flaggedCount})
            </button>
          </div>

          <div className="bg-white rounded-xl border border-[var(--color-border)] p-4 mb-6">
            <div className="grid grid-cols-10 gap-1.5">
              {questions.map((qq, i) => {
                const isAnswered = !!answers[qq.id];
                const isFlagged = flagged.has(qq.id);
                return (
                  <button
                    key={qq.id}
                    onClick={() => jumpTo(i)}
                    className={`aspect-square rounded text-xs font-bold flex items-center justify-center ${
                      isAnswered ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"
                    } ${isFlagged ? "ring-2 ring-amber-400" : ""}`}
                    title={`Question ${i + 1}: ${isAnswered ? "Answered" : "Incomplete"}${isFlagged ? " · Flagged" : ""}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] mt-3">
              <span><span className="inline-block w-3 h-3 rounded bg-green-100 align-middle mr-1" />Answered</span>
              <span><span className="inline-block w-3 h-3 rounded bg-gray-100 align-middle mr-1" />Incomplete</span>
              <span><span className="inline-block w-3 h-3 rounded ring-2 ring-amber-400 align-middle mr-1" />Flagged</span>
            </div>
          </div>

          {!confirmEnd ? (
            <button
              onClick={() => setConfirmEnd(true)}
              className="w-full bg-[var(--color-primary)] text-white py-3 rounded-xl font-semibold hover:bg-[var(--color-primary-dark)]"
            >
              End {sessionConfig?.name}
            </button>
          ) : (
            <div className="bg-white rounded-xl border-2 border-red-300 p-5 text-center">
              <div className="font-semibold mb-1">
                End {sessionConfig?.name}?{" "}
                {unanswered > 0 && <span className="text-red-600">{unanswered} questions are unanswered.</span>}
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mb-4">
                This cannot be undone. Unanswered questions are scored as incorrect.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setConfirmEnd(false)}
                  className="border border-[var(--color-border)] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50"
                >
                  Return to Review
                </button>
                <button
                  onClick={endSession}
                  className="bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-700"
                >
                  Yes, End Session
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─────────────────────────── QUESTION SCREEN ───────────────────────────
  if (!q) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--color-text-muted)]">
        Loading questions...
      </div>
    );
  }

  const answeredCount = questions.filter((qq) => answers[qq.id]).length;
  const qStruck = struck[q.id] || [];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <TopBar
        title={`${config.title} — ${sessionConfig?.name}`}
        timeLeft={timeLeft}
        timerHidden={timerHidden}
        onToggleTimer={() => setTimerHidden(!timerHidden)}
        extra={
          <>
            <span className="text-xs text-[var(--color-text-muted)] hidden sm:inline">
              {answeredCount}/{questions.length} answered
            </span>
            <button
              onClick={() => setCalcOpen(!calcOpen)}
              className="text-xs font-medium border border-[var(--color-border)] px-3 py-1.5 rounded-lg hover:bg-gray-50"
            >
              🖩 Calculator
            </button>
            <button
              onClick={() => setNavOpen(true)}
              className="text-xs font-medium border border-[var(--color-border)] px-3 py-1.5 rounded-lg hover:bg-gray-50"
            >
              Navigator
            </button>
            <button
              onClick={() => setStage("review")}
              className="text-xs font-medium bg-[var(--color-primary)] text-white px-3 py-1.5 rounded-lg hover:bg-[var(--color-primary-dark)]"
            >
              Review Screen
            </button>
          </>
        }
      />

      {calcOpen && <Calculator onClose={() => setCalcOpen(false)} />}

      {/* Navigator overlay */}
      {navOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-6" onClick={() => setNavOpen(false)}>
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 max-w-lg w-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Navigator — {sessionConfig?.name}</h2>
              <button onClick={() => setNavOpen(false)} className="text-[var(--color-text-muted)] hover:text-[var(--foreground)]">✕</button>
            </div>
            <div className="grid grid-cols-10 gap-1.5 mb-4">
              {questions.map((qq, i) => {
                const isAnswered = !!answers[qq.id];
                const isFlagged = flagged.has(qq.id);
                const isCurrent = i === currentIndex;
                return (
                  <button
                    key={qq.id}
                    onClick={() => jumpTo(i)}
                    className={`aspect-square rounded text-xs font-bold flex items-center justify-center ${
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
            <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
              <span><span className="inline-block w-3 h-3 rounded bg-green-100 align-middle mr-1" />Answered</span>
              <span><span className="inline-block w-3 h-3 rounded bg-gray-100 align-middle mr-1" />Incomplete</span>
              <span><span className="inline-block w-3 h-3 rounded ring-2 ring-amber-400 align-middle mr-1" />Flagged</span>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wide font-semibold">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <label className="flex items-center gap-2 text-xs cursor-pointer select-none">
              <input
                type="checkbox"
                checked={flagged.has(q.id)}
                onChange={() => toggleFlag(q.id)}
                className="w-3.5 h-3.5 accent-amber-500"
              />
              <span className={flagged.has(q.id) ? "text-amber-700 font-medium" : "text-[var(--color-text-muted)]"}>
                🚩 Flag for Review
              </span>
            </label>
          </div>

          <div className="text-base font-medium leading-relaxed mb-6">{q.stem}</div>

          <div className="space-y-3">
            {q.choices.map((choice) => {
              const isSelected = answers[q.id] === choice.label;
              const isStruck = qStruck.includes(choice.label);
              return (
                <button
                  key={choice.label}
                  onClick={() => selectChoice(q.id, choice.label)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    toggleStrike(q.id, choice.label);
                  }}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    isSelected
                      ? "border-[var(--color-primary)] bg-[var(--color-primary-light)]"
                      : "border-[var(--color-border)] hover:border-[var(--color-text-muted)]"
                  } ${isStruck ? "opacity-50" : ""}`}
                >
                  <span
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 ${
                      isSelected
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                        : "border-[var(--color-border)]"
                    }`}
                  >
                    {choice.label}
                  </span>
                  <span className={`text-sm ${isStruck ? "line-through" : ""}`}>{choice.text}</span>
                </button>
              );
            })}
          </div>
          <div className="text-[10px] text-[var(--color-text-muted)] mt-3">
            Tip: right-click a choice to strike it through.
          </div>

          <div className="flex items-center justify-between mt-10">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className={`text-sm font-medium px-5 py-2.5 rounded-lg border border-[var(--color-border)] bg-white hover:bg-gray-50 ${
                currentIndex === 0 ? "invisible" : ""
              }`}
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
                onClick={() => setStage("review")}
                className="text-sm font-semibold bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg hover:bg-[var(--color-primary-dark)]"
              >
                Go to Review Screen →
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function TopBar({
  title,
  timeLeft,
  timerHidden,
  onToggleTimer,
  extra,
}: {
  title: string;
  timeLeft: number;
  timerHidden: boolean;
  onToggleTimer: () => void;
  extra?: React.ReactNode;
}) {
  return (
    <div className="border-b border-[var(--color-border)] bg-white sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between gap-3">
        <span className="text-sm font-medium truncate">{title}</span>
        <div className="flex items-center gap-3">
          {extra}
          <button
            onClick={onToggleTimer}
            className={`font-mono font-bold text-sm px-2 py-1 rounded hover:bg-gray-50 ${
              timerHidden
                ? "text-[var(--color-text-muted)]"
                : timeLeft < 300
                ? "text-red-600"
                : timeLeft < 900
                ? "text-amber-600"
                : "text-[var(--foreground)]"
            }`}
            title={timerHidden ? "Show timer" : "Hide timer"}
          >
            {timerHidden ? "⏱ --:--" : `⏱ ${fmtClock(timeLeft)}`}
          </button>
        </div>
      </div>
    </div>
  );
}

/** Minimal four-function on-screen calculator, Prometric-style. */
function Calculator({ onClose }: { onClose: () => void }) {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);
  const [fresh, setFresh] = useState(true);

  const digit = (d: string) => {
    setDisplay((cur) => (fresh || cur === "0" ? (d === "." ? "0." : d) : cur.includes(".") && d === "." ? cur : cur + d));
    setFresh(false);
  };

  const apply = (a: number, b: number, o: string): number =>
    o === "+" ? a + b : o === "−" ? a - b : o === "×" ? a * b : b === 0 ? NaN : a / b;

  const pressOp = (o: string) => {
    const cur = parseFloat(display);
    if (prev !== null && op && !fresh) {
      const result = apply(prev, cur, op);
      setDisplay(String(result));
      setPrev(result);
    } else {
      setPrev(cur);
    }
    setOp(o);
    setFresh(true);
  };

  const equals = () => {
    if (prev === null || !op) return;
    setDisplay(String(apply(prev, parseFloat(display), op)));
    setPrev(null);
    setOp(null);
    setFresh(true);
  };

  const clear = () => {
    setDisplay("0");
    setPrev(null);
    setOp(null);
    setFresh(true);
  };

  const keys: { label: string; onClick: () => void; cls?: string }[] = [
    { label: "C", onClick: clear, cls: "text-red-600" },
    { label: "±", onClick: () => setDisplay((d) => (d.startsWith("-") ? d.slice(1) : d === "0" ? d : "-" + d)) },
    { label: "%", onClick: () => setDisplay((d) => String(parseFloat(d) / 100)) },
    { label: "÷", onClick: () => pressOp("÷"), cls: "bg-gray-100" },
    { label: "7", onClick: () => digit("7") },
    { label: "8", onClick: () => digit("8") },
    { label: "9", onClick: () => digit("9") },
    { label: "×", onClick: () => pressOp("×"), cls: "bg-gray-100" },
    { label: "4", onClick: () => digit("4") },
    { label: "5", onClick: () => digit("5") },
    { label: "6", onClick: () => digit("6") },
    { label: "−", onClick: () => pressOp("−"), cls: "bg-gray-100" },
    { label: "1", onClick: () => digit("1") },
    { label: "2", onClick: () => digit("2") },
    { label: "3", onClick: () => digit("3") },
    { label: "+", onClick: () => pressOp("+"), cls: "bg-gray-100" },
    { label: "0", onClick: () => digit("0") },
    { label: ".", onClick: () => digit(".") },
    { label: "⌫", onClick: () => setDisplay((d) => (d.length > 1 ? d.slice(0, -1) : "0")) },
    { label: "=", onClick: equals, cls: "bg-[var(--color-primary)] text-white" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl border border-[var(--color-border)] shadow-xl p-4 w-56">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-[var(--color-text-muted)]">Calculator</span>
        <button onClick={onClose} className="text-xs text-[var(--color-text-muted)] hover:text-[var(--foreground)]">✕</button>
      </div>
      <div className="bg-gray-50 rounded-lg px-3 py-2 text-right font-mono text-lg mb-3 overflow-x-auto">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {keys.map((k) => (
          <button
            key={k.label}
            onClick={k.onClick}
            className={`h-9 rounded-lg text-sm font-semibold border border-[var(--color-border)] hover:bg-gray-50 ${k.cls || ""}`}
          >
            {k.label}
          </button>
        ))}
      </div>
    </div>
  );
}

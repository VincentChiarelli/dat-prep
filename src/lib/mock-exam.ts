/**
 * Mock Exam Engine — full-length DAT mocks laid out in the CFA Level I format:
 * two 135-minute sessions of 90 three-choice questions each, an optional break
 * between sessions, and a CFA-style score report graded against an MPS.
 */

import type { ExamQuestion } from "./exam-engine";
import { getAllQuestions } from "./question-bank";

/** Estimated Minimum Passing Score, CFA-style (never disclosed on the real exam). */
export const MOCK_MPS_PERCENT = 70;

export interface MockTopic {
  sectionSlug: string;
  sectionName: string;
  questionCount: number;
  weightLabel: string; // e.g. "40–46%" — CFA-style topic weight range
}

export interface MockSessionConfig {
  name: string; // "Session 1" / "Session 2"
  timeLimitMinutes: number;
  topics: MockTopic[];
}

export interface MockExamConfig {
  id: string;
  title: string;
  sessions: MockSessionConfig[];
  breakMinutes: number;
}

export type PerformanceBand = "<50%" | "50%–70%" | ">70%";

export interface MockTopicResult {
  sectionSlug: string;
  sectionName: string;
  sessionName: string;
  correct: number;
  total: number;
  percent: number;
  band: PerformanceBand;
}

export interface MockSessionResult {
  name: string;
  correct: number;
  total: number;
  answered: number;
  percent: number;
  timeSpentSeconds: number;
}

export interface MockAttempt {
  mockId: string;
  mockTitle: string;
  startedAt: string;
  completedAt: string;
  sessionResults: MockSessionResult[];
  topicResults: MockTopicResult[];
  overallCorrect: number;
  overallTotal: number;
  overallPercent: number;
  passed: boolean;
}

const SESSION_MINUTES = 135;

function makeSessions(): MockSessionConfig[] {
  return [
    {
      name: "Session 1",
      timeLimitMinutes: SESSION_MINUTES,
      topics: [
        { sectionSlug: "biology", sectionName: "Biology", questionCount: 40, weightLabel: "42–46%" },
        { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 25, weightLabel: "26–30%" },
        { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 25, weightLabel: "26–30%" },
      ],
    },
    {
      name: "Session 2",
      timeLimitMinutes: SESSION_MINUTES,
      topics: [
        { sectionSlug: "perceptual-ability", sectionName: "Perceptual Ability", questionCount: 30, weightLabel: "31–35%" },
        { sectionSlug: "reading-comprehension", sectionName: "Reading Comprehension", questionCount: 20, weightLabel: "20–24%" },
        { sectionSlug: "quantitative-reasoning", sectionName: "Quantitative Reasoning", questionCount: 40, weightLabel: "42–46%" },
      ],
    },
  ];
}

export const MOCK_EXAM_CONFIGS: MockExamConfig[] = [1, 2, 3].map((n) => ({
  id: `mock-${n}`,
  title: `Full-Length Mock Exam ${n}`,
  sessions: makeSessions(),
  breakMinutes: 30,
}));

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** CFA Level I items have exactly three options (A, B, C): keep the correct
 *  answer, draw two distractors, shuffle, relabel. */
function toThreeChoices(q: ExamQuestion): ExamQuestion {
  const correct = q.choices.filter((c) => c.isCorrect);
  const wrong = shuffle(q.choices.filter((c) => !c.isCorrect)).slice(0, 2);
  const choices = shuffle([...correct.slice(0, 1), ...wrong]).map((c, i) => ({
    ...c,
    label: String.fromCharCode(65 + i),
  }));
  return { ...q, choices };
}

/**
 * Build one session's question set. Like the CFA exam, questions appear in
 * fixed topic blocks (randomized within each block), not shuffled across topics.
 */
export function generateSessionQuestions(session: MockSessionConfig): ExamQuestion[] {
  const all = getAllQuestions();
  const out: ExamQuestion[] = [];
  for (const topic of session.topics) {
    const pool = shuffle(all.filter((q) => q.sectionSlug === topic.sectionSlug));
    out.push(...pool.slice(0, topic.questionCount).map(toThreeChoices));
  }
  return out;
}

export function bandFor(percent: number): PerformanceBand {
  if (percent > 70) return ">70%";
  if (percent >= 50) return "50%–70%";
  return "<50%";
}

/** Score a completed mock. Unanswered questions count as incorrect — there is
 *  no penalty for guessing, so blanks are the only way to lose free points. */
export function scoreMockAttempt(params: {
  config: MockExamConfig;
  sessionQuestions: ExamQuestion[][];
  answers: Record<string, string>;
  sessionTimeSpent: number[];
  startedAt: string;
}): MockAttempt {
  const { config, sessionQuestions, answers, sessionTimeSpent, startedAt } = params;

  const sessionResults: MockSessionResult[] = [];
  const topicResults: MockTopicResult[] = [];
  let overallCorrect = 0;
  let overallTotal = 0;

  config.sessions.forEach((session, si) => {
    const questions = sessionQuestions[si] || [];
    let sessionCorrect = 0;
    let sessionAnswered = 0;

    for (const topic of session.topics) {
      const topicQs = questions.filter((q) => q.sectionSlug === topic.sectionSlug);
      let correct = 0;
      for (const q of topicQs) {
        const selected = answers[q.id];
        if (selected) sessionAnswered++;
        if (selected && q.choices.find((c) => c.isCorrect)?.label === selected) correct++;
      }
      const percent = topicQs.length ? Math.round((correct / topicQs.length) * 100) : 0;
      topicResults.push({
        sectionSlug: topic.sectionSlug,
        sectionName: topic.sectionName,
        sessionName: session.name,
        correct,
        total: topicQs.length,
        percent,
        band: bandFor(percent),
      });
      sessionCorrect += correct;
    }

    overallCorrect += sessionCorrect;
    overallTotal += questions.length;
    sessionResults.push({
      name: session.name,
      correct: sessionCorrect,
      total: questions.length,
      answered: sessionAnswered,
      percent: questions.length ? Math.round((sessionCorrect / questions.length) * 100) : 0,
      timeSpentSeconds: sessionTimeSpent[si] || 0,
    });
  });

  const overallPercent = overallTotal ? Math.round((overallCorrect / overallTotal) * 100) : 0;

  return {
    mockId: config.id,
    mockTitle: config.title,
    startedAt,
    completedAt: new Date().toISOString(),
    sessionResults,
    topicResults,
    overallCorrect,
    overallTotal,
    overallPercent,
    passed: overallPercent >= MOCK_MPS_PERCENT,
  };
}

const STORAGE_KEY = "dat-prep-mock-attempts";

export function saveMockAttempt(attempt: MockAttempt): void {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as MockAttempt[];
  existing.push(attempt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function getMockAttempts(): MockAttempt[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

/**
 * Exam Engine — generates randomized practice exams from the question bank.
 * Supports full-length DAT exams, section-specific exams, and chapter quizzes.
 */

export interface ExamQuestion {
  id: string; // unique identifier
  stem: string;
  choices: { label: string; text: string; isCorrect: boolean }[];
  explanation: string;
  difficulty: number;
  tags: string[];
  sectionSlug: string;
  chapterSlug: string;
}

export interface ExamConfig {
  id: string;
  title: string;
  type: "full" | "section" | "chapter" | "mini";
  sections: {
    sectionSlug: string;
    sectionName: string;
    questionCount: number;
    timeLimitMinutes: number;
  }[];
  totalQuestions: number;
  totalTimeMinutes: number;
}

export interface ExamAttempt {
  examId: string;
  examTitle: string;
  startedAt: string;
  completedAt: string;
  answers: Record<string, string>; // questionId -> selected label
  sectionScores: Record<string, { correct: number; total: number; percent: number }>;
  overallScore: number;
  overallPercent: number;
  totalQuestions: number;
  timeSpentSeconds: number;
}

// Shuffle array using Fisher-Yates
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Generate a randomized question set from a pool.
 * Ensures variety by shuffling and limiting per chapter.
 */
export function generateExamQuestions(
  allQuestions: ExamQuestion[],
  config: ExamConfig
): ExamQuestion[] {
  const examQuestions: ExamQuestion[] = [];

  for (const section of config.sections) {
    const sectionPool = allQuestions.filter(
      (q) => q.sectionSlug === section.sectionSlug
    );

    // Shuffle the pool
    const shuffled = shuffle(sectionPool);

    // Take the requested number (or all if not enough)
    const selected = shuffled.slice(0, section.questionCount);

    // Randomize choice order for each question
    const randomized = selected.map((q) => ({
      ...q,
      choices: shuffle(q.choices).map((c, i) => ({
        ...c,
        label: String.fromCharCode(65 + i), // Re-label A, B, C, D, E
      })),
    }));

    examQuestions.push(...randomized);
  }

  return examQuestions;
}

/**
 * Pre-built exam configs
 */
export const EXAM_CONFIGS: ExamConfig[] = [
  // ── FULL DAT PRACTICE EXAMS ──
  {
    id: "dat-practice-1",
    title: "DAT Practice Exam #1",
    type: "full",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 40, timeLimitMinutes: 30 },
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 30, timeLimitMinutes: 30 },
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 30, timeLimitMinutes: 30 },
    ],
    totalQuestions: 100,
    totalTimeMinutes: 90,
  },
  {
    id: "dat-practice-2",
    title: "DAT Practice Exam #2",
    type: "full",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 40, timeLimitMinutes: 30 },
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 30, timeLimitMinutes: 30 },
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 30, timeLimitMinutes: 30 },
    ],
    totalQuestions: 100,
    totalTimeMinutes: 90,
  },
  {
    id: "dat-practice-3",
    title: "DAT Practice Exam #3",
    type: "full",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 40, timeLimitMinutes: 30 },
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 30, timeLimitMinutes: 30 },
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 30, timeLimitMinutes: 30 },
    ],
    totalQuestions: 100,
    totalTimeMinutes: 90,
  },

  // ── MIDTERM EXAMS ──
  {
    id: "midterm-bio",
    title: "Biology Midterm",
    type: "section",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 60, timeLimitMinutes: 45 },
    ],
    totalQuestions: 60,
    totalTimeMinutes: 45,
  },
  {
    id: "midterm-chem",
    title: "Chemistry Midterm (Gen + Organic)",
    type: "full",
    sections: [
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 30, timeLimitMinutes: 25 },
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 30, timeLimitMinutes: 25 },
    ],
    totalQuestions: 60,
    totalTimeMinutes: 50,
  },

  // ── SECTION EXAMS ──
  {
    id: "bio-section-exam",
    title: "Biology — Section Exam",
    type: "section",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 40, timeLimitMinutes: 30 },
    ],
    totalQuestions: 40,
    totalTimeMinutes: 30,
  },
  {
    id: "genchem-section-exam",
    title: "General Chemistry — Section Exam",
    type: "section",
    sections: [
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 30, timeLimitMinutes: 25 },
    ],
    totalQuestions: 30,
    totalTimeMinutes: 25,
  },
  {
    id: "ochem-section-exam",
    title: "Organic Chemistry — Section Exam",
    type: "section",
    sections: [
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 30, timeLimitMinutes: 25 },
    ],
    totalQuestions: 30,
    totalTimeMinutes: 25,
  },

  // ── QUICK QUIZZES (10 questions each) ──
  {
    id: "bio-quick",
    title: "Biology — Quick Quiz",
    type: "mini",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 10, timeLimitMinutes: 12 },
    ],
    totalQuestions: 10,
    totalTimeMinutes: 12,
  },
  {
    id: "genchem-quick",
    title: "General Chemistry — Quick Quiz",
    type: "mini",
    sections: [
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 10, timeLimitMinutes: 12 },
    ],
    totalQuestions: 10,
    totalTimeMinutes: 12,
  },
  {
    id: "ochem-quick",
    title: "Organic Chemistry — Quick Quiz",
    type: "mini",
    sections: [
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 10, timeLimitMinutes: 12 },
    ],
    totalQuestions: 10,
    totalTimeMinutes: 12,
  },

  // ── CHECKPOINT EXAMS (mixed, 40 questions) ──
  {
    id: "checkpoint-1",
    title: "Checkpoint Exam #1",
    type: "full",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 16, timeLimitMinutes: 12 },
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 12, timeLimitMinutes: 10 },
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 12, timeLimitMinutes: 10 },
    ],
    totalQuestions: 40,
    totalTimeMinutes: 32,
  },
  {
    id: "checkpoint-2",
    title: "Checkpoint Exam #2",
    type: "full",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 16, timeLimitMinutes: 12 },
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 12, timeLimitMinutes: 10 },
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 12, timeLimitMinutes: 10 },
    ],
    totalQuestions: 40,
    totalTimeMinutes: 32,
  },

  // ── MIXED PRACTICE ──
  {
    id: "mixed-20",
    title: "Mixed Practice — 20 Questions",
    type: "mini",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 8, timeLimitMinutes: 6 },
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 6, timeLimitMinutes: 5 },
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 6, timeLimitMinutes: 5 },
    ],
    totalQuestions: 20,
    totalTimeMinutes: 16,
  },
  {
    id: "mixed-50",
    title: "Mixed Practice — 50 Questions",
    type: "full",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 20, timeLimitMinutes: 15 },
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 15, timeLimitMinutes: 12 },
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 15, timeLimitMinutes: 12 },
    ],
    totalQuestions: 50,
    totalTimeMinutes: 39,
  },

  // ── SPEED ROUNDS ──
  {
    id: "speed-bio",
    title: "Biology Speed Round",
    type: "mini",
    sections: [
      { sectionSlug: "biology", sectionName: "Biology", questionCount: 20, timeLimitMinutes: 10 },
    ],
    totalQuestions: 20,
    totalTimeMinutes: 10,
  },
  {
    id: "speed-chem",
    title: "Chemistry Speed Round",
    type: "mini",
    sections: [
      { sectionSlug: "general-chemistry", sectionName: "General Chemistry", questionCount: 10, timeLimitMinutes: 5 },
      { sectionSlug: "organic-chemistry", sectionName: "Organic Chemistry", questionCount: 10, timeLimitMinutes: 5 },
    ],
    totalQuestions: 20,
    totalTimeMinutes: 10,
  },
];

/**
 * Save exam attempt to localStorage
 */
export function saveExamAttempt(attempt: ExamAttempt): void {
  const key = "dat-prep-exam-attempts";
  const existing = JSON.parse(localStorage.getItem(key) || "[]") as ExamAttempt[];
  existing.push(attempt);
  localStorage.setItem(key, JSON.stringify(existing));
}

/**
 * Get all exam attempts
 */
export function getExamAttempts(): ExamAttempt[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("dat-prep-exam-attempts") || "[]");
}

/**
 * Get attempts for a specific exam
 */
export function getExamAttemptsById(examId: string): ExamAttempt[] {
  return getExamAttempts().filter((a) => a.examId === examId);
}

// Progress tracking system using localStorage
// Will migrate to Supabase later

const STORAGE_KEY = "dat-prep-progress";

export interface QuizResult {
  chapterSlug: string;
  sectionSlug: string;
  score: number;
  total: number;
  percent: number;
  date: string; // ISO string
}

export interface StudySession {
  date: string; // ISO date (YYYY-MM-DD)
  minutes: number;
}

export interface ProgressData {
  completedLessons: string[]; // Format: "sectionSlug/chapterSlug/lessonSlug"
  quizResults: QuizResult[];
  totalQuestionsAnswered: number;
  studySessions: StudySession[];
  lastStudiedPath: string | null; // e.g., "/study/biology/cell-biology"
  lastActiveDate: string | null; // ISO date
}

const DEFAULT_PROGRESS: ProgressData = {
  completedLessons: [],
  quizResults: [],
  totalQuestionsAnswered: 0,
  studySessions: [],
  lastStudiedPath: null,
  lastActiveDate: null,
};

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getProgress(): ProgressData {
  if (!isBrowser()) return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<ProgressData>;
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(data: ProgressData): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage might be full or unavailable
  }
}

// --- Lesson tracking ---

export function makeLessonKey(sectionSlug: string, chapterSlug: string, lessonSlug: string): string {
  return `${sectionSlug}/${chapterSlug}/${lessonSlug}`;
}

export function isLessonComplete(sectionSlug: string, chapterSlug: string, lessonSlug: string): boolean {
  const key = makeLessonKey(sectionSlug, chapterSlug, lessonSlug);
  const progress = getProgress();
  return progress.completedLessons.includes(key);
}

export function markLessonComplete(sectionSlug: string, chapterSlug: string, lessonSlug: string): void {
  const key = makeLessonKey(sectionSlug, chapterSlug, lessonSlug);
  const progress = getProgress();
  if (!progress.completedLessons.includes(key)) {
    progress.completedLessons.push(key);
  }
  progress.lastStudiedPath = `/study/${sectionSlug}/${chapterSlug}`;
  progress.lastActiveDate = new Date().toISOString().split("T")[0];
  saveProgress(progress);
}

// --- Quiz tracking ---

export function saveQuizScore(
  sectionSlug: string,
  chapterSlug: string,
  score: number,
  total: number
): QuizResult {
  const progress = getProgress();
  const result: QuizResult = {
    sectionSlug,
    chapterSlug,
    score,
    total,
    percent: total > 0 ? Math.round((score / total) * 100) : 0,
    date: new Date().toISOString(),
  };
  progress.quizResults.push(result);
  progress.totalQuestionsAnswered += total;
  progress.lastActiveDate = new Date().toISOString().split("T")[0];
  saveProgress(progress);
  return result;
}

export function getQuizResults(sectionSlug?: string, chapterSlug?: string): QuizResult[] {
  const progress = getProgress();
  return progress.quizResults.filter((r) => {
    if (sectionSlug && r.sectionSlug !== sectionSlug) return false;
    if (chapterSlug && r.chapterSlug !== chapterSlug) return false;
    return true;
  });
}

export function getBestQuizScore(sectionSlug: string, chapterSlug: string): QuizResult | null {
  const results = getQuizResults(sectionSlug, chapterSlug);
  if (results.length === 0) return null;
  return results.reduce((best, r) => (r.percent > best.percent ? r : best), results[0]);
}

// --- Study time tracking ---

export function logStudyTime(minutes: number): void {
  const progress = getProgress();
  const today = new Date().toISOString().split("T")[0];
  const existing = progress.studySessions.find((s) => s.date === today);
  if (existing) {
    existing.minutes += minutes;
  } else {
    progress.studySessions.push({ date: today, minutes });
  }
  progress.lastActiveDate = today;
  saveProgress(progress);
}

// --- Stats ---

export interface StudyStats {
  streak: number;
  totalQuestionsAnswered: number;
  totalHoursStudied: number;
  predictedScore: number | null;
  completedLessonsCount: number;
  quizzesTaken: number;
  averageQuizScore: number | null;
  lastStudiedPath: string | null;
}

export function getStudyStats(): StudyStats {
  const progress = getProgress();

  // Calculate streak: consecutive days ending at today or yesterday
  const streak = calculateStreak(progress);

  // Total hours
  const totalMinutes = progress.studySessions.reduce((sum, s) => sum + s.minutes, 0);
  const totalHoursStudied = Math.round((totalMinutes / 60) * 10) / 10; // 1 decimal

  // Average quiz score
  let averageQuizScore: number | null = null;
  if (progress.quizResults.length > 0) {
    const totalPercent = progress.quizResults.reduce((sum, r) => sum + r.percent, 0);
    averageQuizScore = Math.round(totalPercent / progress.quizResults.length);
  }

  // Predicted DAT score (rough mapping: quiz average % -> DAT scale 1-30)
  // DAT scoring: ~17 is average, 20+ is competitive, 23+ is excellent
  let predictedScore: number | null = null;
  if (averageQuizScore !== null && progress.quizResults.length >= 2) {
    // Map 0-100% to roughly 10-30 on DAT scale
    predictedScore = Math.round(10 + (averageQuizScore / 100) * 20);
    predictedScore = Math.max(10, Math.min(30, predictedScore));
  }

  return {
    streak,
    totalQuestionsAnswered: progress.totalQuestionsAnswered,
    totalHoursStudied,
    predictedScore,
    completedLessonsCount: progress.completedLessons.length,
    quizzesTaken: progress.quizResults.length,
    averageQuizScore,
    lastStudiedPath: progress.lastStudiedPath,
  };
}

function calculateStreak(progress: ProgressData): number {
  if (progress.studySessions.length === 0 && progress.completedLessons.length === 0) return 0;

  // Collect all active dates
  const activeDates = new Set<string>();
  progress.studySessions.forEach((s) => activeDates.add(s.date));
  if (progress.lastActiveDate) activeDates.add(progress.lastActiveDate);

  if (activeDates.size === 0) return 0;

  const sorted = Array.from(activeDates).sort().reverse(); // most recent first
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  // Streak must include today or yesterday
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prevDate = new Date(sorted[i - 1]);
    const currDate = new Date(sorted[i]);
    const diffMs = prevDate.getTime() - currDate.getTime();
    const diffDays = Math.round(diffMs / 86400000);
    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

// --- Section progress helpers ---

export function getCompletedLessonsForSection(sectionSlug: string): string[] {
  const progress = getProgress();
  return progress.completedLessons.filter((key) => key.startsWith(`${sectionSlug}/`));
}

export function getCompletedLessonsForChapter(sectionSlug: string, chapterSlug: string): string[] {
  const prefix = `${sectionSlug}/${chapterSlug}/`;
  const progress = getProgress();
  return progress.completedLessons.filter((key) => key.startsWith(prefix));
}

// Reset all progress (useful for testing)
export function resetProgress(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Question Bank — aggregates all questions from all content files
 */

import { BIOLOGY_CHAPTERS } from "./sample-content";
import { GENCHEM_CHAPTERS, OCHEM_CHAPTERS } from "./content-chemistry";
import type { ExamQuestion } from "./exam-engine";

let _cachedQuestions: ExamQuestion[] | null = null;

function extractQuestions(
  chapters: typeof BIOLOGY_CHAPTERS,
  sectionSlug: string
): ExamQuestion[] {
  const questions: ExamQuestion[] = [];
  for (const chapter of chapters) {
    for (let i = 0; i < chapter.questions.length; i++) {
      const q = chapter.questions[i];
      questions.push({
        id: `${sectionSlug}-${chapter.slug}-${i}`,
        stem: q.stem,
        choices: q.choices.map((c) => ({
          label: c.label,
          text: c.text,
          isCorrect: c.isCorrect,
        })),
        explanation: q.explanation,
        difficulty: q.difficulty,
        tags: q.tags,
        sectionSlug,
        chapterSlug: chapter.slug,
      });
    }
  }
  return questions;
}

export function getAllQuestions(): ExamQuestion[] {
  if (_cachedQuestions) return _cachedQuestions;
  const all: ExamQuestion[] = [
    ...extractQuestions(BIOLOGY_CHAPTERS, "biology"),
    ...extractQuestions(GENCHEM_CHAPTERS, "general-chemistry"),
    ...extractQuestions(OCHEM_CHAPTERS, "organic-chemistry"),
  ];
  _cachedQuestions = all;
  return all;
}

export function getQuestionsBySection(sectionSlug: string): ExamQuestion[] {
  return getAllQuestions().filter((q) => q.sectionSlug === sectionSlug);
}

export function getQuestionsByChapter(sectionSlug: string, chapterSlug: string): ExamQuestion[] {
  return getAllQuestions().filter(
    (q) => q.sectionSlug === sectionSlug && q.chapterSlug === chapterSlug
  );
}

export function getQuestionStats() {
  const all = getAllQuestions();
  const bySection: Record<string, number> = {};
  for (const q of all) {
    bySection[q.sectionSlug] = (bySection[q.sectionSlug] || 0) + 1;
  }
  return { total: all.length, bySection };
}

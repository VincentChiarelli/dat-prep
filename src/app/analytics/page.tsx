"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/app-layout";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import {
  getSectionMastery,
  getStudyStats,
  getProgress,
  type QuizResult,
} from "@/lib/progress";
import { getExamAttempts, type ExamAttempt } from "@/lib/exam-engine";

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Merge quiz results + exam attempts into a unified recent-scores list */
interface ScoreEntry {
  id: string;
  label: string;
  percent: number;
  date: string; // ISO
}

function buildScoreHistory(
  quizResults: QuizResult[],
  examAttempts: ExamAttempt[]
): ScoreEntry[] {
  const fromQuizzes: ScoreEntry[] = quizResults.map((r, i) => ({
    id: `quiz-${i}`,
    label: `${DAT_SECTIONS.find((s) => s.slug === r.sectionSlug)?.name ?? r.sectionSlug} Quiz`,
    percent: r.percent,
    date: r.date,
  }));

  const fromExams: ScoreEntry[] = examAttempts.map((a) => ({
    id: `exam-${a.examId}-${a.startedAt}`,
    label: a.examTitle,
    percent: a.overallPercent,
    date: a.completedAt,
  }));

  return [...fromQuizzes, ...fromExams]
    .sort((a, b) => b.date.localeCompare(a.date));
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso.slice(0, 10);
  }
}

function scoreColor(pct: number): string {
  if (pct >= 70) return "#16a34a";
  if (pct >= 50) return "#d97706";
  return "#dc2626";
}

function scoreBg(pct: number): string {
  if (pct >= 70) return "#dcfce7";
  if (pct >= 50) return "#fef3c7";
  return "#fee2e2";
}

// ── Mini bar chart ────────────────────────────────────────────────────────────

function MiniBarChart({ entries }: { entries: ScoreEntry[] }) {
  const MAX_BARS = 12;
  const recent = entries.slice(0, MAX_BARS).reverse(); // oldest first so bars read left→right
  const barW = recent.length > 0 ? Math.floor(100 / recent.length) : 10;

  return (
    <div className="flex items-end gap-1 h-16 w-full">
      {recent.map((e) => {
        const heightPct = Math.max(4, e.percent); // at least 4% height so bars are visible
        return (
          <div
            key={e.id}
            title={`${e.label} — ${e.percent}%`}
            className="rounded-t-sm flex-1 min-w-0 transition-all duration-300"
            style={{
              height: `${heightPct}%`,
              background: scoreColor(e.percent),
              opacity: 0.85,
            }}
          />
        );
      })}
      {recent.length === 0 && (
        <div className="flex-1 flex items-end">
          {[40, 55, 30, 70, 60, 80, 50].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{ height: `${h}%`, background: "var(--surface-2)" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Section bar row ───────────────────────────────────────────────────────────

function SectionBar({ slug, name, icon, mastery }: {
  slug: string;
  name: string;
  icon: string;
  mastery: number;
}) {
  const isWeak = mastery > 0 && mastery < 70;
  const barColor = mastery >= 70 ? "#16a34a" : mastery >= 50 ? "#d97706" : "var(--accent)";

  return (
    <div className="flex items-center gap-3 py-2.5">
      {/* Section name + link */}
      <Link
        href={`/study/${slug}`}
        className="flex items-center gap-2 min-w-0 w-36 sm:w-44 shrink-0 group"
      >
        <span className="text-base leading-none shrink-0">{icon}</span>
        <span
          className="text-xs font-medium truncate group-hover:underline"
          style={{ color: isWeak ? "#b45309" : "var(--ink)" }}
        >
          {name}
        </span>
      </Link>

      {/* Bar */}
      <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: "var(--surface-2)" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: mastery > 0 ? `${mastery}%` : "0%",
            background: barColor,
          }}
        />
      </div>

      {/* Percent */}
      <span
        className="text-xs font-bold tabular-nums w-10 text-right shrink-0"
        style={{ color: mastery > 0 ? barColor : "var(--faint)" }}
      >
        {mastery > 0 ? `${mastery}%` : "—"}
      </span>

      {/* Drill link */}
      <Link
        href={`/practice?drill=${slug}`}
        className="text-xs font-semibold px-2.5 py-1 rounded-lg shrink-0 transition-colors hover:opacity-80"
        style={{
          background: isWeak ? "#fef3c7" : "var(--accent-soft)",
          color: isWeak ? "#92400e" : "var(--accent-strong)",
        }}
      >
        Drill →
      </Link>
    </div>
  );
}

// ── Main analytics component ──────────────────────────────────────────────────

function AnalyticsInner() {
  const [sectionMastery, setSectionMastery] = useState<Record<string, number>>({});
  const [overallAccuracy, setOverallAccuracy] = useState<number | null>(null);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [scoreHistory, setScoreHistory] = useState<ScoreEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mastery: Record<string, number> = {};
    for (const s of DAT_SECTIONS) {
      mastery[s.slug] = getSectionMastery(s.slug);
    }
    setSectionMastery(mastery);

    const stats = getStudyStats();
    setTotalAnswered(stats.totalQuestionsAnswered);
    setOverallAccuracy(stats.averageQuizScore);

    const progress = getProgress();
    const examAttempts = getExamAttempts();
    const history = buildScoreHistory(progress.quizResults, examAttempts);
    setScoreHistory(history);

    setLoaded(true);
  }, []);

  const hasAnyData = loaded && scoreHistory.length > 0;
  const recent12 = scoreHistory.slice(0, 12);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--ink)" }}>Analytics</h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Your performance across all sections and sessions.
        </p>
      </div>

      {/* Empty state */}
      {loaded && !hasAnyData && (
        <div className="card p-10 text-center mb-6">
          <div className="text-4xl mb-3">📊</div>
          <div className="font-semibold mb-2" style={{ color: "var(--ink)" }}>No data yet</div>
          <div className="text-sm mb-5" style={{ color: "var(--muted)" }}>
            Complete a drill or exam to start seeing your performance here.
          </div>
          <Link
            href="/practice"
            className="inline-block px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)" }}
          >
            Start practicing →
          </Link>
        </div>
      )}

      {/* Overall stats row */}
      {hasAnyData && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="card card-tight p-5">
            <div
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "var(--muted)" }}
            >
              Overall accuracy
            </div>
            <div
              className="text-3xl font-bold"
              style={{ color: overallAccuracy !== null ? scoreColor(overallAccuracy) : "var(--faint)" }}
            >
              {overallAccuracy !== null ? `${overallAccuracy}%` : "—"}
            </div>
            <div className="text-xs mt-1" style={{ color: "var(--faint)" }}>
              Average across all quizzes
            </div>
          </div>
          <div className="card card-tight p-5">
            <div
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "var(--muted)" }}
            >
              Questions answered
            </div>
            <div className="text-3xl font-bold" style={{ color: "var(--accent)" }}>
              {totalAnswered.toLocaleString()}
            </div>
            <div className="text-xs mt-1" style={{ color: "var(--faint)" }}>
              Total across all sessions
            </div>
          </div>
        </div>
      )}

      {/* Recent scores chart */}
      {hasAnyData && (
        <div className="card p-5 mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>
            Recent scores
            <span className="ml-1.5 font-normal" style={{ color: "var(--faint)" }}>
              (last {recent12.length})
            </span>
          </div>
          <MiniBarChart entries={recent12} />
          <div className="flex items-center gap-4 mt-3 text-[10px]" style={{ color: "var(--faint)" }}>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: "#16a34a" }} />
              ≥70%
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: "#d97706" }} />
              50–69%
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: "#dc2626" }} />
              &lt;50%
            </span>
          </div>
        </div>
      )}

      {/* Accuracy by section */}
      <div className="card p-5 mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>
          Accuracy by section
        </div>
        <div className="text-[11px] mb-4" style={{ color: "var(--faint)" }}>
          Average quiz score per section. Highlighted sections are below 70%.
        </div>
        <div className="divide-y" style={{ borderColor: "var(--border)" }}>
          {DAT_SECTIONS.map((s) => (
            <SectionBar
              key={s.slug}
              slug={s.slug}
              name={s.name}
              icon={s.icon}
              mastery={sectionMastery[s.slug] ?? 0}
            />
          ))}
        </div>
      </div>

      {/* History list */}
      {hasAnyData && (
        <div className="card p-5">
          <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>
            History
          </div>
          <div className="space-y-2">
            {scoreHistory.slice(0, 20).map((e) => (
              <div
                key={e.id}
                className="flex items-center justify-between gap-3 py-2 border-b last:border-0"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium truncate" style={{ color: "var(--ink)" }}>
                    {e.label}
                  </div>
                  <div className="text-[11px]" style={{ color: "var(--faint)" }}>
                    {formatDate(e.date)}
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
                  style={{ background: scoreBg(e.percent), color: scoreColor(e.percent) }}
                >
                  {e.percent}%
                </span>
              </div>
            ))}
          </div>
          {scoreHistory.length === 0 && (
            <div className="text-sm text-center py-4" style={{ color: "var(--muted)" }}>
              No sessions yet.{" "}
              <Link href="/practice" style={{ color: "var(--accent)" }} className="hover:underline">
                Start practicing →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Page default export ────────────────────────────────────────────────────────

export default function AnalyticsPage() {
  return (
    <AppLayout>
      <AnalyticsInner />
    </AppLayout>
  );
}

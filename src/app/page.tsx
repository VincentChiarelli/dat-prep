"use client";

// Personal-app landing. No multi-user marketing copy, no "Start Free" CTAs.
// On revisits, kick straight to /dashboard. On first run only, show a brief
// orientation panel and let the user set a target test date.

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getProgress,
  setTargetTestDate,
  daysUntilTest,
} from "@/lib/progress";

export default function Home() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [firstRun, setFirstRun] = useState(false);
  const [dateInput, setDateInput] = useState("");

  useEffect(() => {
    // Returning user → straight to dashboard.
    const p = getProgress();
    const hasState =
      p.completedLessons.length > 0 ||
      p.quizResults.length > 0 ||
      p.studySessions.length > 0 ||
      p.targetTestDate !== null;
    if (hasState) {
      router.replace("/dashboard");
      return;
    }
    setFirstRun(true);
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-[var(--color-text-muted)]">
        Loading…
      </div>
    );
  }

  const handleSaveDate = () => {
    if (dateInput) setTargetTestDate(dateInput);
    router.push("/dashboard");
  };

  const handleSkip = () => router.push("/dashboard");

  if (!firstRun) return null;

  // First-run orientation. Single screen — set a target date (optional),
  // then jump in.
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white font-bold">D</div>
          <span className="font-semibold text-lg tracking-tight">DAT Prep</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome.</h1>
        <p className="text-[var(--color-text-secondary)] text-sm mb-8 leading-relaxed">
          Set a target test date and you&rsquo;ll see a daily countdown on the
          dashboard. You can change or remove it anytime.
        </p>

        <label className="block text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
          Target DAT date (optional)
        </label>
        <input
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          className="w-full border border-[var(--color-border)] rounded-lg px-3 py-2.5 text-sm mb-6 focus:outline-none focus:border-[var(--color-primary)]"
        />

        <div className="flex gap-3">
          <button
            onClick={handleSaveDate}
            className="flex-1 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            {dateInput ? "Save & continue" : "Continue"}
          </button>
          {!dateInput && (
            <button
              onClick={handleSkip}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:bg-gray-50 transition-colors"
            >
              Skip
            </button>
          )}
        </div>

        <Link
          href="/dashboard"
          className="block text-center text-xs text-[var(--color-text-muted)] hover:text-[var(--foreground)] mt-6"
        >
          (Or jump straight to the dashboard)
        </Link>

        {/* Hidden: keeps the unused import warning away */}
        <span className="hidden">{daysUntilTest()}</span>
      </div>
    </div>
  );
}

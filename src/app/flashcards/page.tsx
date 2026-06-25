"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { getAllQuestions } from "@/lib/question-bank";
import type { ExamQuestion } from "@/lib/exam-engine";
import {
  getDueQuestionIds,
  getMasteredCount,
  recordQuestionAttempt,
} from "@/lib/progress";

// ── types ────────────────────────────────────────────────────────────────────

type SectionFilter = "all" | string;

// ── component ─────────────────────────────────────────────────────────────────

export default function FlashcardsPage() {
  // hydration-safe: all state driven from useEffect
  const [ready, setReady] = useState(false);

  // deck state
  const [sectionFilter, setSectionFilter] = useState<SectionFilter>("all");
  const [deck, setDeck] = useState<ExamQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);
  const [answeredThisSession, setAnsweredThisSession] = useState(0);

  // Build / rebuild deck whenever filter changes
  const buildDeck = useCallback((filter: SectionFilter) => {
    const allQs = getAllQuestions();
    const dueIds = new Set(getDueQuestionIds());

    // Questions in scope (filtered by section)
    const scoped =
      filter === "all"
        ? allQs
        : allQs.filter((q) => q.sectionSlug === filter);

    // Prefer due questions; fall back to full scoped pool
    const dueInScope = scoped.filter((q) => dueIds.has(q.id));
    const finalDeck = dueInScope.length > 0 ? dueInScope : scoped;

    setDeck(finalDeck);
    setIndex(0);
    setFlipped(false);
    setMasteredCount(getMasteredCount());
    setAnsweredThisSession(0);
  }, []);

  useEffect(() => {
    buildDeck(sectionFilter);
    setReady(true);
  }, [sectionFilter, buildDeck]);

  // ── handlers ──────────────────────────────────────────────────────────────

  function handleFlip() {
    setFlipped((f) => !f);
  }

  function handleAnswer(correct: boolean) {
    if (!deck[index]) return;
    recordQuestionAttempt(deck[index].id, correct);
    setMasteredCount(getMasteredCount());
    setAnsweredThisSession((n) => n + 1);

    // Advance to next card
    const next = index + 1;
    if (next < deck.length) {
      setIndex(next);
      setFlipped(false);
    } else {
      // Deck exhausted — rebuild to pick up any new due state
      buildDeck(sectionFilter);
    }
  }

  // ── derived ───────────────────────────────────────────────────────────────

  const card = deck[index] ?? null;
  const correctChoice = card?.choices.find((c) => c.isCorrect);
  const totalInDeck = deck.length;
  // "n / total" counts current card as 1-based
  const progressLabel =
    totalInDeck > 0 ? `${Math.min(index + 1, totalInDeck)} / ${totalInDeck}` : "0 / 0";

  // ── render ────────────────────────────────────────────────────────────────

  if (!ready) {
    return (
      <div
        style={{ minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <span style={{ color: "var(--faint)", fontSize: "0.875rem" }}>Loading…</span>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "var(--bg)",
        color: "var(--ink)",
        padding: "0 1rem 3rem",
      }}
    >
      {/* ── top nav ── */}
      <nav
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "1.25rem 0 0",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <Link
          href="/dashboard"
          style={{
            fontSize: "0.8125rem",
            color: "var(--muted)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          ← Dashboard
        </Link>
      </nav>

      <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

        {/* ── heading + stats row ── */}
        <div style={{ marginTop: "1.5rem", marginBottom: "1.25rem" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Flashcards
          </h1>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              marginTop: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>
              Progress: <strong style={{ color: "var(--ink)" }}>{progressLabel}</strong>
            </span>
            <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>
              Mastered: <strong style={{ color: "var(--accent)" }}>{masteredCount}</strong>
            </span>
            {answeredThisSession > 0 && (
              <span style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>
                This session: <strong style={{ color: "var(--ink)" }}>{answeredThisSession}</strong>
              </span>
            )}
          </div>
        </div>

        {/* ── section filter chips ── */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "1.5rem",
          }}
        >
          {(["all", ...DAT_SECTIONS.map((s) => s.slug)] as SectionFilter[]).map((slug) => {
            const label =
              slug === "all"
                ? "All"
                : DAT_SECTIONS.find((s) => s.slug === slug)?.name ?? slug;
            const active = sectionFilter === slug;
            return (
              <button
                key={slug}
                onClick={() => setSectionFilter(slug)}
                style={{
                  padding: "0.3rem 0.875rem",
                  borderRadius: "999px",
                  fontSize: "0.8125rem",
                  fontWeight: active ? 600 : 400,
                  border: active
                    ? "1.5px solid var(--accent)"
                    : "1.5px solid var(--border)",
                  background: active ? "var(--accent-soft)" : "var(--surface)",
                  color: active ? "var(--accent-strong)" : "var(--muted)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* ── empty state ── */}
        {totalInDeck === 0 && (
          <div
            className="card"
            style={{
              padding: "3rem 2rem",
              textAlign: "center",
              color: "var(--muted)",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🎉</div>
            <p style={{ fontSize: "0.9375rem", margin: 0 }}>
              No questions available for this section yet.
            </p>
          </div>
        )}

        {/* ── flashcard ── */}
        {card && (
          <>
            {/* Front / Back */}
            <div
              className="card"
              onClick={handleFlip}
              style={{
                padding: "2rem",
                cursor: "pointer",
                minHeight: "14rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                userSelect: "none",
                transition: "box-shadow 0.15s",
              }}
            >
              {!flipped ? (
                /* ── FRONT ── */
                <div>
                  {/* Section badge */}
                  <div style={{ marginBottom: "1rem" }}>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        background: "var(--accent-soft)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                      }}
                    >
                      {DAT_SECTIONS.find((s) => s.slug === card.sectionSlug)?.name ??
                        card.sectionSlug}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.6,
                      margin: 0,
                      color: "var(--ink)",
                    }}
                  >
                    {card.stem}
                  </p>
                  <p
                    style={{
                      marginTop: "1.5rem",
                      fontSize: "0.8125rem",
                      color: "var(--faint)",
                      textAlign: "center",
                    }}
                  >
                    Tap to reveal answer
                  </p>
                </div>
              ) : (
                /* ── BACK ── */
                <div>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#16a34a",
                        background: "#dcfce7",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "999px",
                      }}
                    >
                      Answer
                    </span>
                  </div>
                  {/* Correct choice */}
                  {correctChoice && (
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                        margin: "0 0 1rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {correctChoice.label}. {correctChoice.text}
                    </p>
                  )}
                  {/* Explanation */}
                  {card.explanation && (
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--muted)",
                        lineHeight: 1.65,
                        margin: 0,
                        borderTop: "1px solid var(--border)",
                        paddingTop: "0.875rem",
                      }}
                    >
                      {card.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* ── action buttons (only after flip) ── */}
            {flipped && (
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginTop: "1rem",
                }}
              >
                <button
                  onClick={() => handleAnswer(false)}
                  style={{
                    flex: 1,
                    padding: "0.75rem 1rem",
                    borderRadius: "12px",
                    border: "1.5px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--ink)",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                >
                  Again
                </button>
                <button
                  onClick={() => handleAnswer(true)}
                  style={{
                    flex: 1,
                    padding: "0.75rem 1rem",
                    borderRadius: "12px",
                    border: "1.5px solid var(--accent)",
                    background: "var(--accent)",
                    color: "#fff",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity 0.15s",
                  }}
                >
                  Got it ✓
                </button>
              </div>
            )}

            {/* progress bar */}
            <div
              style={{
                marginTop: "1.25rem",
                height: "4px",
                borderRadius: "2px",
                background: "var(--border)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: "2px",
                  background: "var(--accent)",
                  width:
                    totalInDeck > 0
                      ? `${Math.round(((index) / totalInDeck) * 100)}%`
                      : "0%",
                  transition: "width 0.3s",
                }}
              />
            </div>
          </>
        )}

        {/* ── hint about spaced-rep ── */}
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.75rem",
            color: "var(--faint)",
            textAlign: "center",
          }}
        >
          Due cards are shown first. "Again" resets the interval; "Got it" advances it.
          Streak ≥ 3 = mastered.
        </p>
      </div>
    </div>
  );
}

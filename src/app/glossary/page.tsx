"use client";

import { useMemo, useState } from "react";
import { AppLayout } from "@/components/app-layout";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { getGlossaryTerms, groupByLetter } from "@/lib/glossary-data";

// Section colour map for chips
const SECTION_COLOR: Record<string, string> = Object.fromEntries(
  DAT_SECTIONS.map((s) => [s.slug, s.color])
);

export default function GlossaryPage() {
  const [query, setQuery] = useState("");

  const allTerms = useMemo(() => getGlossaryTerms(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allTerms;
    return allTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.section.toLowerCase().includes(q)
    );
  }, [allTerms, query]);

  const grouped = useMemo(() => groupByLetter(filtered), [filtered]);
  const letters = Array.from(grouped.keys()).sort();

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "var(--ink)" }}>
            Glossary
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {allTerms.length} terms across all DAT sections
          </p>
        </div>

        {/* ── Sticky search ───────────────────────────────────────────── */}
        <div
          className="sticky top-[112px] z-20 pb-3 pt-1"
          style={{ background: "var(--bg)" }}
        >
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 shrink-0"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--faint)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              placeholder="Search terms, definitions, or sections…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none transition-colors"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--ink)",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-1.5 py-0.5 rounded"
                style={{ color: "var(--faint)" }}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {query && (
            <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>
              {filtered.length === 0
                ? "No terms match."
                : `${filtered.length} term${filtered.length !== 1 ? "s" : ""} found`}
            </p>
          )}
        </div>

        {/* ── Letter groups ────────────────────────────────────────────── */}
        {letters.length === 0 ? (
          <div
            className="text-center py-16 text-sm"
            style={{ color: "var(--muted)" }}
          >
            No terms match your search.
          </div>
        ) : (
          <div className="space-y-8">
            {letters.map((letter) => {
              const terms = grouped.get(letter)!;
              return (
                <section key={letter} id={`letter-${letter}`}>
                  {/* Letter divider */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent-strong)",
                      }}
                    >
                      {letter}
                    </div>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "var(--border)" }}
                    />
                    <span
                      className="text-xs tabular-nums shrink-0"
                      style={{ color: "var(--faint)" }}
                    >
                      {terms.length}
                    </span>
                  </div>

                  {/* Term cards */}
                  <div className="space-y-2">
                    {terms.map((t) => {
                      const color = SECTION_COLOR[t.sectionSlug] ?? "var(--accent)";
                      return (
                        <div
                          key={t.term}
                          className="card card-tight px-4 py-3 flex flex-col gap-1.5"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span
                              className="font-semibold text-sm leading-snug"
                              style={{ color: "var(--ink)" }}
                            >
                              {t.term}
                            </span>
                            {/* Section chip */}
                            <span
                              className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full leading-none mt-0.5"
                              style={{
                                background: `${color}18`,
                                color: color,
                              }}
                            >
                              {t.section}
                            </span>
                          </div>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--muted)" }}
                          >
                            {t.definition}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Bottom padding */}
        <div className="h-16" />
      </div>
    </AppLayout>
  );
}

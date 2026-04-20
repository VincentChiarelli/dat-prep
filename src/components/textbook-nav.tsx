"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { getChaptersForSection } from "@/lib/content-map";

interface TextbookNavProps {
  sectionSlug?: string;
  chapterSlug?: string;
}

export function TextbookNav({ sectionSlug, chapterSlug }: TextbookNavProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(sectionSlug ? [sectionSlug] : [])
  );

  const toggleSection = (slug: string) => {
    const next = new Set(expandedSections);
    if (next.has(slug)) next.delete(slug);
    else next.add(slug);
    setExpandedSections(next);
  };

  // Filter sections/chapters by search
  const filteredSections = DAT_SECTIONS.filter((s) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    if (s.name.toLowerCase().includes(q)) return true;
    const chapters = getChaptersForSection(s.slug);
    return chapters.some(
      (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-72 bg-white border-r border-[var(--color-border)] flex-col h-screen sticky top-0 overflow-hidden hidden md:flex">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-[var(--color-border)]">
        <h2 className="font-semibold text-sm">Textbook</h2>
      </div>

      {/* Search */}
      <div className="px-3 py-3">
        <input
          type="text"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-gray-50 border border-[var(--color-border)] rounded-lg outline-none focus:border-[var(--color-primary)] transition-colors"
        />
      </div>

      {/* Introduction link */}
      <div className="px-3">
        <Link
          href="/study"
          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
            pathname === "/study"
              ? "text-[var(--color-primary)] font-medium"
              : "text-[var(--color-text-secondary)] hover:text-[var(--foreground)]"
          }`}
        >
          Introduction
        </Link>
      </div>

      {/* Sections + Chapters */}
      <div className="flex-1 overflow-y-auto px-3 pb-4">
        {filteredSections.map((section, sectionIdx) => {
          const chapters = getChaptersForSection(section.slug);
          const isExpanded = expandedSections.has(section.slug);
          const hasContent = chapters.some((c) => c.lessons.length > 0);

          // Calculate chapter offset for numbering across sections
          let chapterOffset = 0;
          for (let i = 0; i < sectionIdx; i++) {
            chapterOffset += DAT_SECTIONS[i].chapters;
          }

          return (
            <div key={section.slug} className="mt-1">
              {/* Section header — collapsible */}
              <button
                onClick={() => toggleSection(section.slug)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{section.icon}</span>
                  <span className={sectionSlug === section.slug ? "text-[var(--color-primary)]" : ""}>{section.name}</span>
                </span>
                <svg
                  className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Chapters list */}
              {isExpanded && (
                <div className="ml-2 border-l-2 border-[var(--color-border)] pl-2 space-y-0.5 mb-2">
                  {chapters.map((chapter, i) => {
                    const isActive = chapterSlug === chapter.slug && sectionSlug === section.slug;
                    const hasLessons = chapter.lessons.length > 0;

                    return (
                      <Link
                        key={chapter.slug}
                        href={hasLessons ? `/study/${section.slug}/${chapter.slug}` : "#"}
                        className={`block px-3 py-2 text-sm rounded-lg transition-all ${
                          isActive
                            ? "bg-[var(--color-primary-light)] text-[var(--color-primary)] font-medium"
                            : hasLessons
                            ? "text-[var(--color-text-secondary)] hover:bg-gray-50 hover:text-[var(--foreground)]"
                            : "text-[var(--color-text-muted)] cursor-not-allowed"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span className="text-xs text-[var(--color-text-muted)] font-mono w-4">{chapterOffset + i + 1}.</span>
                          <span className="truncate">{chapter.title}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

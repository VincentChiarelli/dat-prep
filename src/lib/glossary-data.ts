// Aggregates every lesson's keyTerms across all DAT sections into one flat,
// de-duplicated, alphabetically-sorted list.
//
// This module is imported by src/app/glossary/page.tsx and runs client-side
// (the content files are bundled at build time — no server needed).

import { DAT_SECTIONS } from "./dat-constants";
import { getChaptersForSection } from "./content-map";

export interface GlossaryTerm {
  term: string;
  definition: string;
  /** Display name of the section the term first appears in */
  section: string;
  /** Slug for colour lookup */
  sectionSlug: string;
}

let _cache: GlossaryTerm[] | null = null;

export function getGlossaryTerms(): GlossaryTerm[] {
  if (_cache) return _cache;

  const seen = new Set<string>(); // normalised term key → skip duplicates
  const flat: GlossaryTerm[] = [];

  for (const section of DAT_SECTIONS) {
    const chapters = getChaptersForSection(section.slug);
    for (const chapter of chapters) {
      for (const lesson of chapter.lessons) {
        const keyTerms = (lesson as { keyTerms?: { term: string; definition: string }[] }).keyTerms;
        if (!keyTerms) continue;
        for (const kt of keyTerms) {
          const key = kt.term.trim().toLowerCase();
          if (seen.has(key)) continue;
          seen.add(key);
          flat.push({
            term: kt.term.trim(),
            definition: kt.definition.trim(),
            section: section.name,
            sectionSlug: section.slug,
          });
        }
      }
    }
  }

  // Sort alphabetically by term (case-insensitive)
  flat.sort((a, b) => a.term.toLowerCase().localeCompare(b.term.toLowerCase()));

  _cache = flat;
  return flat;
}

/** Group sorted terms by their first letter (A–Z, # for non-alpha). */
export function groupByLetter(terms: GlossaryTerm[]): Map<string, GlossaryTerm[]> {
  const map = new Map<string, GlossaryTerm[]>();
  for (const t of terms) {
    const letter = t.term[0]?.toUpperCase() ?? "#";
    const bucket = /[A-Z]/.test(letter) ? letter : "#";
    if (!map.has(bucket)) map.set(bucket, []);
    map.get(bucket)!.push(t);
  }
  return map;
}

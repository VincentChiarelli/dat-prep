// Central content map — connects section slugs to their chapter data
import { BIOLOGY_CHAPTERS } from "./sample-content";
import { GENCHEM_CHAPTERS, OCHEM_CHAPTERS } from "./content-chemistry";

export function getChaptersForSection(sectionSlug: string) {
  switch (sectionSlug) {
    case "biology":
      return BIOLOGY_CHAPTERS;
    case "general-chemistry":
      return GENCHEM_CHAPTERS;
    case "organic-chemistry":
      return OCHEM_CHAPTERS;
    default:
      return [];
  }
}

export function getAllChapters() {
  return {
    biology: BIOLOGY_CHAPTERS,
    "general-chemistry": GENCHEM_CHAPTERS,
    "organic-chemistry": OCHEM_CHAPTERS,
  };
}

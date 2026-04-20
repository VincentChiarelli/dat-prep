// Central content map — connects section slugs to their chapter data
import { BIOLOGY_CHAPTERS } from "./sample-content";
import { GENCHEM_CHAPTERS, OCHEM_CHAPTERS } from "./content-chemistry";

// These will be populated once the content files are created
let PAT_CHAPTERS: typeof BIOLOGY_CHAPTERS = [];
let READING_CHAPTERS: typeof BIOLOGY_CHAPTERS = [];
let QUANT_CHAPTERS: typeof BIOLOGY_CHAPTERS = [];

try {
  const pat = require("./content-pat");
  PAT_CHAPTERS = pat.PAT_CHAPTERS || [];
} catch { /* file not ready yet */ }

try {
  const other = require("./content-other");
  READING_CHAPTERS = other.READING_CHAPTERS || [];
  QUANT_CHAPTERS = other.QUANT_CHAPTERS || [];
} catch { /* file not ready yet */ }

export function getChaptersForSection(sectionSlug: string) {
  switch (sectionSlug) {
    case "biology":
      return BIOLOGY_CHAPTERS;
    case "general-chemistry":
      return GENCHEM_CHAPTERS;
    case "organic-chemistry":
      return OCHEM_CHAPTERS;
    case "perceptual-ability":
      return PAT_CHAPTERS;
    case "reading-comprehension":
      return READING_CHAPTERS;
    case "quantitative-reasoning":
      return QUANT_CHAPTERS;
    default:
      return [];
  }
}

export function getAllChapters() {
  return {
    biology: BIOLOGY_CHAPTERS,
    "general-chemistry": GENCHEM_CHAPTERS,
    "organic-chemistry": OCHEM_CHAPTERS,
    "perceptual-ability": PAT_CHAPTERS,
    "reading-comprehension": READING_CHAPTERS,
    "quantitative-reasoning": QUANT_CHAPTERS,
  };
}

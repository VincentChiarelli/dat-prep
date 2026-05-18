import type { ComponentType } from "react";
import { ProkVsEuk } from "./ProkVsEuk";
import { FluidMosaic } from "./FluidMosaic";
import { Mitochondrion } from "./Mitochondrion";
import { EndomembraneFlow } from "./EndomembraneFlow";
import { CytoskeletonSizes } from "./CytoskeletonSizes";
import { MembraneTransport } from "./MembraneTransport";
import { Tonicity } from "./Tonicity";
import { DnaHelix } from "./DnaHelix";
import { ReplicationFork } from "./ReplicationFork";
import { TranscriptionBubble } from "./TranscriptionBubble";
import { MrnaProcessing } from "./MrnaProcessing";
import { Translation } from "./Translation";
import { Figure } from "./Figure";

export { Figure };

export const DIAGRAMS: Record<string, ComponentType> = {
  "prokaryote-vs-eukaryote": ProkVsEuk,
  "fluid-mosaic": FluidMosaic,
  mitochondrion: Mitochondrion,
  "endomembrane-flow": EndomembraneFlow,
  "cytoskeleton-sizes": CytoskeletonSizes,
  "membrane-transport": MembraneTransport,
  tonicity: Tonicity,
  "dna-helix": DnaHelix,
  "replication-fork": ReplicationFork,
  "transcription-bubble": TranscriptionBubble,
  "mrna-processing": MrnaProcessing,
  translation: Translation,
};

export function getDiagram(slug: string): ComponentType | null {
  return DIAGRAMS[slug] ?? null;
}

import type { ComponentType } from "react";
import { ProkVsEuk } from "./ProkVsEuk";
import { FluidMosaic } from "./FluidMosaic";
import { Mitochondrion } from "./Mitochondrion";
import { EndomembraneFlow } from "./EndomembraneFlow";
import { CytoskeletonSizes } from "./CytoskeletonSizes";
import { MembraneTransport } from "./MembraneTransport";
import { Tonicity } from "./Tonicity";
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
};

export function getDiagram(slug: string): ComponentType | null {
  return DIAGRAMS[slug] ?? null;
}

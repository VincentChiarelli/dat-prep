"use client";

import { useMemo, useState } from "react";
import { AppLayout } from "@/components/app-layout";

// ─────────────────────────────────────────────────────────────────────────────
// Structured reference data — authored inline, no external imports.
// Each section has a list of items; each item has a name and body text.
// Some items also have an optional note field for supplementary context.
// ─────────────────────────────────────────────────────────────────────────────

interface RefItem {
  name: string;
  body: string;
  note?: string;
}

interface RefSection {
  slug: string;
  title: string;
  icon: string;
  color: string;
  groups: { heading: string; items: RefItem[] }[];
}

const REFERENCE_SECTIONS: RefSection[] = [
  // ── Quantitative Reasoning ─────────────────────────────────────────────
  {
    slug: "quantitative-reasoning",
    title: "Quantitative Reasoning",
    icon: "📐",
    color: "#0891B2",
    groups: [
      {
        heading: "Algebra",
        items: [
          {
            name: "Slope of a line",
            body: "m = (y₂ − y₁) / (x₂ − x₁)",
            note: "Slope-intercept form: y = mx + b. Point-slope form: y − y₁ = m(x − x₁).",
          },
          {
            name: "Quadratic formula",
            body: "x = (−b ± √(b² − 4ac)) / 2a   for  ax² + bx + c = 0",
            note: "Discriminant b² − 4ac > 0: two real roots; = 0: one root; < 0: no real roots.",
          },
          {
            name: "Distance between two points",
            body: "d = √((x₂ − x₁)² + (y₂ − y₁)²)",
          },
          {
            name: "Midpoint",
            body: "M = ((x₁ + x₂)/2,  (y₁ + y₂)/2)",
          },
          {
            name: "Absolute value inequality",
            body: "|x| < a  ⟺  −a < x < a       |x| > a  ⟺  x < −a  or  x > a",
          },
        ],
      },
      {
        heading: "Geometry",
        items: [
          {
            name: "Pythagorean theorem",
            body: "a² + b² = c²   (c = hypotenuse)",
            note: "Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.",
          },
          {
            name: "Circle",
            body: "Area = πr²     Circumference = 2πr",
          },
          {
            name: "Triangle",
            body: "Area = ½ · base · height",
            note: "Sum of interior angles = 180°.",
          },
          {
            name: "Trapezoid",
            body: "Area = ½(b₁ + b₂) · h",
          },
          {
            name: "Rectangle / square",
            body: "Area = length × width     Perimeter = 2(l + w)",
          },
          {
            name: "Sphere",
            body: "Volume = (4/3)πr³     Surface area = 4πr²",
          },
          {
            name: "Cylinder",
            body: "Volume = πr²h     Lateral surface area = 2πrh",
          },
          {
            name: "Cone",
            body: "Volume = (1/3)πr²h     Lateral surface area = πr·l  (l = slant height)",
          },
          {
            name: "Rectangular prism / cube",
            body: "Volume = l·w·h     Surface area = 2(lw + lh + wh)",
          },
        ],
      },
      {
        heading: "Trigonometry",
        items: [
          {
            name: "SOH-CAH-TOA",
            body: "sin θ = Opposite/Hypotenuse    cos θ = Adjacent/Hypotenuse    tan θ = Opposite/Adjacent",
          },
          {
            name: "Reciprocal identities",
            body: "csc θ = 1/sin θ    sec θ = 1/cos θ    cot θ = 1/tan θ",
          },
          {
            name: "Pythagorean identity",
            body: "sin²θ + cos²θ = 1     →     1 + tan²θ = sec²θ     1 + cot²θ = csc²θ",
          },
          {
            name: "Key angle values",
            body: "sin 30°=½  cos 30°=√3/2   sin 45°=√2/2  cos 45°=√2/2   sin 60°=√3/2  cos 60°=½",
          },
          {
            name: "Radian–degree conversion",
            body: "180° = π rad     Degrees × (π/180) = radians     Radians × (180/π) = degrees",
          },
        ],
      },
      {
        heading: "Probability & Combinatorics",
        items: [
          {
            name: "Basic probability",
            body: "P(A) = (# favourable outcomes) / (# total outcomes)",
            note: "P(A or B) = P(A) + P(B) − P(A and B).  P(A and B) = P(A)·P(B) if independent.",
          },
          {
            name: "Permutations (order matters)",
            body: "ₙPᵣ = n! / (n − r)!",
          },
          {
            name: "Combinations (order doesn't matter)",
            body: "ₙCᵣ = n! / (r!(n − r)!)",
          },
          {
            name: "Complement rule",
            body: "P(not A) = 1 − P(A)",
          },
        ],
      },
      {
        heading: "Percentages & Ratios",
        items: [
          {
            name: "Percent change",
            body: "% change = (new − old) / old × 100",
            note: "Two successive changes are NOT additive: +20% then −20% ≠ 0%.",
          },
          {
            name: "Part-whole percent",
            body: "part = (percent/100) × whole     percent = (part/whole) × 100",
          },
          {
            name: "Ratio scaling",
            body: "If a:b = 3:5 and total = 80, then a = 80 × 3/8 = 30, b = 50.",
          },
          {
            name: "Weighted average",
            body: "x̄ = Σ(xᵢ · wᵢ) / Σwᵢ",
          },
        ],
      },
    ],
  },

  // ── General Chemistry ──────────────────────────────────────────────────
  {
    slug: "general-chemistry",
    title: "General Chemistry",
    icon: "⚗️",
    color: "#2563EB",
    groups: [
      {
        heading: "Gas Laws",
        items: [
          {
            name: "Ideal gas law",
            body: "PV = nRT",
            note: "R = 0.0821 L·atm/mol·K. T must be in Kelvin (K = °C + 273).",
          },
          {
            name: "Boyle's law (constant T, n)",
            body: "P₁V₁ = P₂V₂",
          },
          {
            name: "Charles's law (constant P, n)",
            body: "V₁/T₁ = V₂/T₂",
          },
          {
            name: "Gay-Lussac's law (constant V, n)",
            body: "P₁/T₁ = P₂/T₂",
          },
          {
            name: "Combined gas law",
            body: "P₁V₁/T₁ = P₂V₂/T₂",
          },
          {
            name: "Dalton's law of partial pressures",
            body: "P_total = P₁ + P₂ + P₃ + …",
          },
          {
            name: "Graham's law of effusion",
            body: "Rate₁/Rate₂ = √(M₂/M₁)   (M = molar mass)",
          },
        ],
      },
      {
        heading: "Solutions & Concentration",
        items: [
          {
            name: "Molarity",
            body: "M = moles of solute / litres of solution",
          },
          {
            name: "Dilution",
            body: "M₁V₁ = M₂V₂",
          },
          {
            name: "Molality",
            body: "m = moles of solute / kg of solvent",
          },
          {
            name: "Mole fraction",
            body: "χ_A = n_A / n_total",
          },
        ],
      },
      {
        heading: "Equilibrium",
        items: [
          {
            name: "Equilibrium constant (Keq)",
            body: "For aA + bB ⇌ cC + dD:   Keq = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)",
            note: "Pure solids and liquids are omitted from the expression. Keq > 1 = products favoured; Keq < 1 = reactants favoured.",
          },
          {
            name: "Reaction quotient Q",
            body: "Same form as Keq but using current (non-equilibrium) concentrations. Q < Keq → forward; Q > Keq → reverse.",
          },
          {
            name: "Le Chatelier's principle",
            body: "Adding reactant → shifts right. Removing product → shifts right. Increasing pressure → shifts toward fewer moles of gas. Increasing temperature → shifts toward endothermic side.",
          },
          {
            name: "Acid dissociation (Ka)",
            body: "HA ⇌ H⁺ + A⁻     Ka = [H⁺][A⁻] / [HA]",
            note: "Larger Ka = stronger acid.",
          },
          {
            name: "Base dissociation (Kb)",
            body: "B + H₂O ⇌ BH⁺ + OH⁻     Kb = [BH⁺][OH⁻] / [B]",
          },
          {
            name: "Kw and pOH/pH",
            body: "Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴  (at 25 °C)     pH + pOH = 14     pH = −log[H⁺]",
          },
          {
            name: "Henderson-Hasselbalch",
            body: "pH = pKa + log([A⁻]/[HA])     pOH = pKb + log([BH⁺]/[B])",
            note: "Buffer is most effective when pH ≈ pKa (i.e., [A⁻] ≈ [HA]).",
          },
          {
            name: "Conjugate acid/base relationship",
            body: "Ka × Kb = Kw = 1.0 × 10⁻¹⁴     pKa + pKb = 14",
          },
        ],
      },
      {
        heading: "Thermodynamics",
        items: [
          {
            name: "Gibbs free energy",
            body: "ΔG = ΔH − TΔS",
            note: "ΔG < 0 → spontaneous; ΔG > 0 → non-spontaneous; ΔG = 0 → equilibrium.",
          },
          {
            name: "Standard free energy and Keq",
            body: "ΔG° = −RT ln Keq     ΔG = ΔG° + RT ln Q",
          },
          {
            name: "Enthalpy of reaction (Hess's law)",
            body: "ΔH_rxn = Σ ΔHf°(products) − Σ ΔHf°(reactants)",
          },
          {
            name: "Entropy trends",
            body: "Gas > liquid > solid.  More moles of gas on product side → ΔS > 0.  Dissolution of most ionic salts → ΔS > 0.",
          },
          {
            name: "Spontaneity summary",
            body: "ΔH < 0, ΔS > 0 → always spontaneous.  ΔH > 0, ΔS < 0 → never spontaneous.  Mixed sign → temperature-dependent.",
          },
        ],
      },
      {
        heading: "Kinetics",
        items: [
          {
            name: "Rate law",
            body: "rate = k[A]ᵐ[B]ⁿ   (m, n determined experimentally — NOT from stoichiometry)",
          },
          {
            name: "Half-life (first-order)",
            body: "t₁/₂ = 0.693 / k   (independent of concentration)",
          },
          {
            name: "Arrhenius equation",
            body: "k = A · e^(−Eₐ/RT)   Higher Eₐ or lower T → slower rate.",
          },
          {
            name: "Rate-determining step",
            body: "The slowest step in a multi-step mechanism determines the overall rate and rate law.",
          },
        ],
      },
    ],
  },

  // ── Organic Chemistry ─────────────────────────────────────────────────
  {
    slug: "organic-chemistry",
    title: "Organic Chemistry",
    icon: "🔬",
    color: "#7C3AED",
    groups: [
      {
        heading: "Stereochemistry",
        items: [
          {
            name: "R/S configuration (CIP rules)",
            body: "Assign priority 1→4 by atomic number (higher = higher priority). If 1→2→3 is clockwise = R; counterclockwise = S. Flip if lowest priority is toward you.",
          },
          {
            name: "E/Z configuration (double bonds)",
            body: "Assign CIP priority to each substituent on each carbon of the double bond. Higher priority groups on same side = Z (zusammen); opposite sides = E (entgegen).",
            note: "E usually corresponds to trans, Z to cis — but use CIP rules, not cis/trans, for accuracy.",
          },
          {
            name: "Enantiomers vs diastereomers",
            body: "Enantiomers: non-superimposable mirror images (all stereocentres inverted). Diastereomers: stereoisomers that are NOT mirror images (some but not all centres inverted). Meso: has stereocentres but an internal mirror plane → achiral.",
          },
          {
            name: "Optical activity",
            body: "Enantiomers rotate plane-polarised light equally but in opposite directions. Racemic mixtures (50:50) are optically inactive.",
          },
        ],
      },
      {
        heading: "Reaction Selectivity Rules",
        items: [
          {
            name: "Markovnikov's rule",
            body: "In HX addition to an alkene, H adds to the carbon bearing more H (less substituted); X adds to the more substituted carbon, giving the more stable carbocation intermediate.",
          },
          {
            name: "Anti-Markovnikov (hydroboration-oxidation)",
            body: "BH₃ then H₂O₂/OH⁻: OH ends up on the less substituted carbon. Syn addition. No carbocation — no rearrangement.",
          },
          {
            name: "Zaitsev's rule (elimination)",
            body: "The major product is the more substituted (more stable) alkene. E2 with bulky base can give Hofmann (less substituted) product instead.",
          },
          {
            name: "SN1 vs SN2",
            body: "SN1: tertiary substrate, polar protic solvent, two steps (carbocation), racemisation. SN2: primary/methyl, polar aprotic, one step, inversion (Walden inversion), hindered = slow.",
          },
          {
            name: "E1 vs E2",
            body: "E1: tertiary, polar protic, low [base], two steps, carbocation. E2: any, strong base, one step, anti-periplanar geometry required.",
          },
          {
            name: "Nucleophilicity vs basicity",
            body: "In polar aprotic solvents, nucleophilicity ≈ basicity order. In polar protic solvents, larger/less solvated ion is better nucleophile (I⁻ > Br⁻ > Cl⁻ > F⁻).",
          },
        ],
      },
      {
        heading: "Acidity Trends",
        items: [
          {
            name: "Factors increasing acidity",
            body: "Stronger acid → more stable conjugate base. Stability increases with: electronegativity (F > O > N > C), resonance delocalisation, inductive withdrawal, and larger atomic radius (H-I > H-Br > H-Cl > H-F in gas phase).",
          },
          {
            name: "Carboxylic acid pKa ≈ 4–5",
            body: "Alcohol pKa ≈ 16–18. Terminal alkyne ≈ 25. Amine ≈ 35–38. Alkane ≈ 50. More acidic = lower pKa.",
          },
          {
            name: "α-carbon acidity",
            body: "CH adjacent to a carbonyl (α-C–H) is acidic (pKa ≈ 20) due to enolate resonance stabilisation.",
          },
        ],
      },
      {
        heading: "Functional Group Reactivity",
        items: [
          {
            name: "Carbonyl electrophilicity",
            body: "C=O carbon is electrophilic. Nucleophiles (Grignard, hydride, cyanide) attack it. Aldehydes are more reactive than ketones (less steric, more electrophilic).",
          },
          {
            name: "Grignard reagents",
            body: "RMgX reacts as a carbanion nucleophile. Adds to aldehydes → 2° alcohol; ketones → 3° alcohol; CO₂ → carboxylic acid. Incompatible with protic solvents and acidic groups.",
          },
          {
            name: "Acyl substitution (carboxylic acid derivatives)",
            body: "Reactivity order: acid chloride > anhydride > ester > amide. Less electronegative/better leaving group = more reactive.",
          },
          {
            name: "Oxidation states (common)",
            body: "Alkane (−2 per C) → alcohol → aldehyde/ketone → carboxylic acid. Gain of O or loss of H = oxidation. Loss of O or gain of H = reduction.",
          },
          {
            name: "Aromatic electrophilic substitution (EAS)",
            body: "Electron-donating groups (OH, NH₂, alkyl) activate ring and direct ortho/para. Electron-withdrawing groups (NO₂, CN, C=O) deactivate and direct meta.",
          },
          {
            name: "Aldol condensation",
            body: "Base-catalysed: enolate of one carbonyl attacks another. Product is β-hydroxy carbonyl. On heating → α,β-unsaturated carbonyl (dehydration).",
          },
        ],
      },
    ],
  },

  // ── Biology ────────────────────────────────────────────────────────────
  {
    slug: "biology",
    title: "Biology",
    icon: "🧬",
    color: "#16A34A",
    groups: [
      {
        heading: "Genetics & Molecular Biology",
        items: [
          {
            name: "Hardy-Weinberg equilibrium",
            body: "p² + 2pq + q² = 1     p + q = 1",
            note: "p = freq. of dominant allele; q = freq. of recessive allele; p² = homozygous dominant; 2pq = heterozygous; q² = homozygous recessive. Requires large population, random mating, no mutation/selection/migration.",
          },
          {
            name: "Genetic code facts",
            body: "64 codons total. 61 encode amino acids. 3 stop codons (UAA, UAG, UGA). AUG = start (Met). Code is degenerate (redundant) — multiple codons per AA — but unambiguous (each codon = one AA).",
          },
          {
            name: "DNA replication key numbers",
            body: "Human genome ≈ 3 × 10⁹ bp. 46 chromosomes in somatic cells (diploid 2n). Replication is semi-conservative (each daughter has one parental strand).",
          },
          {
            name: "Mitosis vs meiosis",
            body: "Mitosis: 2 diploid daughters, identical. Meiosis: 4 haploid gametes, genetic variation via crossing over & independent assortment. Crossing over occurs in prophase I.",
          },
          {
            name: "Mendel's laws",
            body: "Law of Segregation: alleles separate during gamete formation. Law of Independent Assortment: genes on different chromosomes sort independently (linked genes violate this).",
          },
          {
            name: "Lac operon",
            body: "Negative control (repressor OFF when lactose present). Positive control (CAP-cAMP activates when glucose absent). Both needed for high transcription.",
          },
        ],
      },
      {
        heading: "Cell Biology & Energetics",
        items: [
          {
            name: "ATP yield (aerobic respiration)",
            body: "Glycolysis: 2 ATP + 2 NADH. Pyruvate decarboxylation: 2 NADH. Krebs cycle: 2 ATP + 6 NADH + 2 FADH₂. ETC: ≈34 ATP. Total ≈ 36–38 ATP per glucose.",
          },
          {
            name: "Photosynthesis",
            body: "Light reactions (thylakoid): H₂O → O₂ + ATP + NADPH. Calvin cycle (stroma): CO₂ + ATP + NADPH → G3P → glucose.",
          },
          {
            name: "Cell cycle phases",
            body: "G1 (growth) → S (DNA synthesis) → G2 (growth/prep) → M (mitosis/cytokinesis). Interphase = G1 + S + G2.",
          },
          {
            name: "Enzyme kinetics (Michaelis-Menten)",
            body: "v = Vmax[S] / (Km + [S])     Km = [S] at half-Vmax (lower Km = higher affinity). Competitive inhibition: Km↑, Vmax unchanged. Non-competitive: Km unchanged, Vmax↓.",
          },
          {
            name: "Prokaryote ribosomes",
            body: "70S (50S + 30S). Target of many antibiotics. Eukaryotes = 80S (60S + 40S). Mitochondrial/chloroplast ribosomes are 70S (endosymbiotic origin).",
          },
        ],
      },
      {
        heading: "Physiology High-Yield Numbers",
        items: [
          {
            name: "Blood pH normal range",
            body: "7.35–7.45. pH < 7.35 = acidosis. pH > 7.45 = alkalosis.",
          },
          {
            name: "Resting membrane potential (neuron)",
            body: "≈ −70 mV (inside negative). Action potential threshold ≈ −55 mV. Peak ≈ +30–40 mV. Depolarisation = Na⁺ in; repolarisation = K⁺ out.",
          },
          {
            name: "Heart rate & cardiac output",
            body: "CO = HR × SV (heart rate × stroke volume). Normal resting HR ≈ 60–100 bpm. SV ≈ 70 mL. CO ≈ 5 L/min at rest.",
          },
          {
            name: "Kidney filtration",
            body: "GFR ≈ 125 mL/min = 180 L/day filtered. Only ≈ 1.5 L/day excreted. 99% of filtrate is reabsorbed.",
          },
          {
            name: "Hormone classes",
            body: "Peptide/protein hormones (insulin, FSH, LH, GH) act on surface receptors (can't cross membrane). Steroid hormones (cortisol, aldosterone, sex steroids) and thyroid hormones cross membrane and act on nuclear receptors.",
          },
        ],
      },
      {
        heading: "Ecology & Evolution",
        items: [
          {
            name: "Darwin's natural selection (4 premises)",
            body: "1. Variation exists within populations. 2. Variation is heritable. 3. More offspring are produced than can survive. 4. Those with favourable traits survive and reproduce more.",
          },
          {
            name: "Speciation types",
            body: "Allopatric: geographic isolation. Sympatric: reproductive isolation without geographic barrier. Prezygotic barriers (temporal, behavioural, mechanical) vs postzygotic (hybrid inviability/sterility).",
          },
          {
            name: "Ecological levels",
            body: "Individual → Population → Community → Ecosystem → Biosphere. Primary productivity = energy fixed by autotrophs. Only ≈10% of energy transfers between trophic levels.",
          },
        ],
      },
    ],
  },

  // ── Perceptual Ability ─────────────────────────────────────────────────
  {
    slug: "perceptual-ability",
    title: "Perceptual Ability",
    icon: "🎯",
    color: "#DC2626",
    groups: [
      {
        heading: "Keyhole (Apertures)",
        items: [
          {
            name: "Core rule",
            body: "Pick the aperture matching one of the 6 orthographic silhouettes (top/bottom/front/back/left/right). The object can be rotated before insertion but NOT during.",
          },
          {
            name: "3-step method",
            body: "1. Identify the 6 silhouettes mentally. 2. Eliminate by outline shape (square, circle, L-shape, etc.). 3. Verify notches, slots, and asymmetry are on the correct side.",
          },
          {
            name: "Common traps",
            body: "Mirror-image apertures. Slightly wrong proportions (squashed/stretched). Extra or missing notch. Always confirm the final choice has NO interior gaps and NO protruding parts.",
          },
        ],
      },
      {
        heading: "Top/Front/End Views (Orthographic Projections)",
        items: [
          {
            name: "Reading the three views",
            body: "Top view = looking straight down. Front view = looking directly at the front face. End (side) view = looking at the right side. Hidden edges appear as dashed lines.",
          },
          {
            name: "Reconstruction strategy",
            body: "Cross-reference all three views simultaneously. A feature visible in the top view must be consistent with the front and end views. Sketch a rough 3D shape and eliminate contradictions.",
          },
          {
            name: "Dashed-line rule",
            body: "Solid lines = visible edges. Dashed lines = hidden edges. An edge that is hidden in one view is often visible in another — use that to locate it in 3D.",
          },
        ],
      },
      {
        heading: "Angle Ranking",
        items: [
          {
            name: "Strategy",
            body: "Ignore the absolute size of the angles' arms — only the opening matters. Rank from smallest (most acute) to largest (most obtuse/reflex). Mentally extend short arms if needed.",
          },
          {
            name: "Common mistake",
            body: "Longer arms can make a small angle look large. Always measure the wedge, not the arm length.",
          },
        ],
      },
      {
        heading: "Hole Punching",
        items: [
          {
            name: "Fold-and-punch rule",
            body: "Each fold doubles the number of holes when unfolded (one punch through n layers = n holes). Track the fold lines carefully — holes reflect symmetrically across each fold axis.",
          },
          {
            name: "Step-by-step approach",
            body: "1. Note the fold sequence. 2. Unfold in reverse: reflect punch location across the most recent fold. 3. Reflect again across the next fold. 4. Count and place all holes.",
          },
          {
            name: "Shortcut for quarter-folded square",
            body: "One punch through a square folded in quarters → 4 holes arranged symmetrically around the centre. Hole near a fold = hole appears on both sides of that fold.",
          },
        ],
      },
      {
        heading: "Cube Counting",
        items: [
          {
            name: "Counting faces painted",
            body: "Identify each cube and count how many of its faces are exposed to paint. A cube in a corner has 3 painted faces. An edge cube has 2. A face cube has 1. Interior cube has 0.",
            note: "The bottom face of the whole stack is usually also painted — read the question carefully.",
          },
          {
            name: "Systematic scan",
            body: "Go layer by layer (top, middle, bottom). In each layer, classify each cube as corner/edge/face/interior. Tally cubes by paint-face count.",
          },
          {
            name: "Quick formula for a rectangular prism",
            body: "For an m×n×p solid block dipped in paint: corner cubes (3 faces) = 8; edge cubes (2 faces) = 4[(m−2)+(n−2)+(p−2)]; face cubes (1 face) = 2[(m−2)(n−2)+(m−2)(p−2)+(n−2)(p−2)]; interior (0 faces) = (m−2)(n−2)(p−2). For irregular stacks, count directly.",
          },
        ],
      },
      {
        heading: "Pattern Folding (3D Form Development)",
        items: [
          {
            name: "Core approach",
            body: "Identify the 6 faces of the net. Fold mentally around shared edges. Track which face ends up opposite which (opposite faces never share an edge on the net).",
          },
          {
            name: "Opposite-face rule",
            body: "In a standard cross-shaped cube net, opposite faces are: top↔bottom, front↔back, left↔right. Verify that answer choices don't show two opposite faces adjacent.",
          },
          {
            name: "Orientation of markings",
            body: "When folding, markings (arrows, letters, stripes) rotate with the face. Track rotations carefully — a face folded twice undergoes two 90° rotations. Eliminate choices where a marking points the wrong way.",
          },
          {
            name: "Elimination strategy",
            body: "Pick one anchor face (the largest or most distinctive). Determine which faces must be adjacent and in what orientation. Eliminate any answer where those adjacencies are wrong.",
          },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function ReferencePage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return REFERENCE_SECTIONS;
    return REFERENCE_SECTIONS.map((sec) => ({
      ...sec,
      groups: sec.groups
        .map((g) => ({
          ...g,
          items: g.items.filter(
            (item) =>
              item.name.toLowerCase().includes(q) ||
              item.body.toLowerCase().includes(q) ||
              (item.note ?? "").toLowerCase().includes(q) ||
              sec.title.toLowerCase().includes(q) ||
              g.heading.toLowerCase().includes(q)
          ),
        }))
        .filter((g) => g.items.length > 0),
    })).filter((sec) => sec.groups.length > 0);
  }, [query]);

  const totalItems = REFERENCE_SECTIONS.reduce(
    (s, sec) => s + sec.groups.reduce((gs, g) => gs + g.items.length, 0),
    0
  );

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "var(--ink)" }}>
            Reference sheet
          </h1>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {totalItems} high-yield facts across {REFERENCE_SECTIONS.length} sections
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
              placeholder="Search formulas, rules, or sections…"
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
              {filtered.length === 0 ? "No results." : `${filtered.reduce((s, sec) => s + sec.groups.reduce((gs, g) => gs + g.items.length, 0), 0)} items found`}
            </p>
          )}
        </div>

        {/* ── Sections ─────────────────────────────────────────────────── */}
        {filtered.length === 0 ? (
          <div
            className="text-center py-16 text-sm"
            style={{ color: "var(--muted)" }}
          >
            No reference items match your search.
          </div>
        ) : (
          <div className="space-y-10">
            {filtered.map((sec) => (
              <section key={sec.slug} id={`ref-${sec.slug}`}>
                {/* Section heading */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: `${sec.color}18` }}
                  >
                    {sec.icon}
                  </div>
                  <h2
                    className="text-lg font-bold tracking-tight"
                    style={{ color: "var(--ink)" }}
                  >
                    {sec.title}
                  </h2>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "var(--border)" }}
                  />
                </div>

                {/* Groups */}
                <div className="space-y-5">
                  {sec.groups.map((group) => (
                    <div key={group.heading}>
                      {/* Group sub-heading */}
                      <div
                        className="text-[11px] font-semibold uppercase tracking-widest mb-2.5"
                        style={{ color: sec.color }}
                      >
                        {group.heading}
                      </div>

                      {/* Items */}
                      <div className="space-y-2">
                        {group.items.map((item) => (
                          <div
                            key={item.name}
                            className="card card-tight px-4 py-3"
                          >
                            <div
                              className="text-xs font-semibold mb-1"
                              style={{ color: "var(--ink)" }}
                            >
                              {item.name}
                            </div>
                            <div
                              className="font-mono text-sm leading-relaxed"
                              style={{ color: "var(--accent-strong)" }}
                            >
                              {item.body}
                            </div>
                            {item.note && (
                              <p
                                className="text-xs leading-relaxed mt-2 pt-2"
                                style={{
                                  color: "var(--muted)",
                                  borderTop: "1px solid var(--border)",
                                }}
                              >
                                {item.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Bottom padding */}
        <div className="h-16" />
      </div>
    </AppLayout>
  );
}

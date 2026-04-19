// Sample content for Biology - will move to Supabase later

export const BIOLOGY_CHAPTERS = [
  {
    slug: "cell-biology",
    title: "Cell Biology",
    description: "Cell structure, organelles, membrane transport, cell cycle, mitosis & meiosis",
    estimatedMinutes: 45,
    lessons: [
      {
        slug: "cell-structure",
        title: "Cell Structure & Organelles",
        content: `# Cell Structure & Organelles

All living organisms are composed of cells — the basic unit of life. For the DAT, you need to understand both **prokaryotic** and **eukaryotic** cells and their key differences.

## Prokaryotic vs. Eukaryotic Cells

| Feature | Prokaryotic | Eukaryotic |
|---------|------------|------------|
| Nucleus | No (nucleoid region) | Yes (membrane-bound) |
| Size | 1-10 μm | 10-100 μm |
| DNA | Circular, single chromosome | Linear, multiple chromosomes |
| Organelles | Few, no membrane-bound | Many membrane-bound |
| Examples | Bacteria, Archaea | Animals, Plants, Fungi |

## Key Organelles

### Nucleus
- Contains DNA organized into **chromosomes**
- Surrounded by a **double membrane** (nuclear envelope) with nuclear pores
- Contains the **nucleolus** — site of ribosomal RNA (rRNA) synthesis
- **Key for DAT:** The nucleus is the control center of the cell

### Mitochondria
- **Powerhouse of the cell** — site of aerobic cellular respiration
- Has its own DNA (maternal inheritance)
- **Double membrane:** outer membrane is smooth, inner membrane has **cristae** (folds)
- Produces **ATP** via the electron transport chain
- Matrix contains enzymes for the **Krebs cycle**

### Endoplasmic Reticulum (ER)
- **Rough ER (RER):** Studded with ribosomes → protein synthesis & modification
- **Smooth ER (SER):** No ribosomes → lipid synthesis, detoxification, Ca²⁺ storage
- Continuous with the nuclear envelope

### Golgi Apparatus
- **Modifies, packages, and sorts** proteins from the ER
- **Cis face** (receiving) → medial → **trans face** (shipping)
- Adds carbohydrate groups (**glycosylation**)
- Forms lysosomes and secretory vesicles

### Lysosomes
- Contain **hydrolytic enzymes** (pH ~5, acidic)
- Break down macromolecules, old organelles (**autophagy**), and foreign material
- **Tay-Sachs disease:** lysosomal storage disorder (missing hexosaminidase A)

### Ribosomes
- Made of **rRNA + protein**
- **70S** in prokaryotes (50S + 30S subunits)
- **80S** in eukaryotes (60S + 40S subunits)
- Free ribosomes → cytoplasmic proteins
- Bound ribosomes (on RER) → secreted/membrane proteins

### Cytoskeleton
Three types of protein fibers:
1. **Microfilaments** (actin) — 7nm — muscle contraction, cell movement, cleavage furrow
2. **Intermediate filaments** (keratin, etc.) — 10nm — structural support
3. **Microtubules** (tubulin) — 25nm — chromosome movement, cilia/flagella, cell shape

> **High-Yield DAT Tip:** Know the sizes: microfilaments (7nm) < intermediate filaments (10nm) < microtubules (25nm)

## Plant Cell Unique Structures
- **Cell wall** — rigid cellulose structure outside the cell membrane
- **Chloroplasts** — photosynthesis (contain thylakoids → grana → stroma)
- **Central vacuole** — large, maintains turgor pressure
- **Plasmodesmata** — channels between adjacent plant cells

## Key Terms
- **Endosymbiotic theory:** Mitochondria and chloroplasts were once free-living prokaryotes
- **Apoptosis:** Programmed cell death
- **Autophagy:** Self-digestion of damaged organelles via lysosomes
`,
        keyTerms: [
          { term: "Prokaryote", definition: "Cell without a membrane-bound nucleus (bacteria, archaea)" },
          { term: "Eukaryote", definition: "Cell with a membrane-bound nucleus and organelles" },
          { term: "Mitochondria", definition: "Double-membraned organelle that produces ATP via aerobic respiration" },
          { term: "Endoplasmic Reticulum", definition: "Membrane system for protein (rough) and lipid (smooth) synthesis" },
          { term: "Golgi Apparatus", definition: "Modifies, packages, and sorts proteins for transport" },
          { term: "Lysosome", definition: "Vesicle containing hydrolytic enzymes for intracellular digestion" },
          { term: "Cytoskeleton", definition: "Network of protein fibers (actin, intermediate, tubulin) providing structure and movement" },
        ],
      },
      {
        slug: "membrane-transport",
        title: "Membrane Transport",
        content: `# Membrane Transport

The cell membrane is a **selectively permeable** barrier that controls what enters and exits the cell. Understanding transport mechanisms is essential for the DAT.

## Membrane Structure — Fluid Mosaic Model

The cell membrane consists of:
- **Phospholipid bilayer** — hydrophilic heads face out, hydrophobic tails face in
- **Cholesterol** — stabilizes membrane fluidity
- **Integral proteins** — span the entire membrane (channels, carriers, receptors)
- **Peripheral proteins** — attached to the surface (signaling, structural)
- **Glycoproteins/Glycolipids** — cell recognition and signaling

## Passive Transport (No ATP Required)

### Simple Diffusion
- Movement of molecules **down** their concentration gradient
- Small, nonpolar molecules: O₂, CO₂, N₂, steroid hormones
- No protein needed

### Facilitated Diffusion
- Uses **channel proteins** or **carrier proteins**
- Still moves down the concentration gradient (no ATP)
- Examples: glucose (via GLUT transporters), ions (via ion channels)

### Osmosis
- Diffusion of **water** across a selectively permeable membrane
- Water moves toward the area of **higher solute concentration**

| Solution | Compared to Cell | Water Movement | Cell Effect |
|----------|-----------------|----------------|-------------|
| Hypotonic | Less solute outside | Water enters cell | Cell swells (lyses in animal cells) |
| Hypertonic | More solute outside | Water leaves cell | Cell shrinks (crenation) |
| Isotonic | Equal solute | No net movement | Cell stays the same |

> **DAT Tip:** "Water follows solute" — water moves to where there's more dissolved stuff

## Active Transport (ATP Required)

### Primary Active Transport
- Uses ATP directly to pump molecules **against** their gradient
- **Na⁺/K⁺ ATPase:** Pumps 3 Na⁺ out and 2 K⁺ in per ATP
- Maintains the resting membrane potential

### Secondary Active Transport
- Uses the gradient created by primary active transport
- **Symport (cotransport):** Both molecules move in the same direction
- **Antiport (exchange):** Molecules move in opposite directions

## Bulk Transport

### Endocytosis (into the cell)
- **Phagocytosis:** "Cell eating" — engulfs large particles
- **Pinocytosis:** "Cell drinking" — takes in fluid + dissolved solutes
- **Receptor-mediated endocytosis:** Specific molecules bind receptors → clathrin-coated pit

### Exocytosis (out of the cell)
- Vesicles fuse with the cell membrane and release contents
- Example: neurotransmitter release, hormone secretion
`,
        keyTerms: [
          { term: "Passive Transport", definition: "Movement down the concentration gradient without ATP" },
          { term: "Active Transport", definition: "Movement against the concentration gradient requiring ATP" },
          { term: "Osmosis", definition: "Diffusion of water across a selectively permeable membrane" },
          { term: "Na+/K+ ATPase", definition: "Pump that moves 3 Na+ out and 2 K+ in per ATP molecule" },
          { term: "Endocytosis", definition: "Bulk transport of materials into the cell via membrane vesicles" },
          { term: "Exocytosis", definition: "Bulk transport of materials out of the cell via vesicle fusion" },
        ],
      },
    ],
    questions: [
      {
        stem: "Which organelle is responsible for modifying, packaging, and sorting proteins for transport?",
        choices: [
          { label: "A", text: "Rough endoplasmic reticulum", isCorrect: false },
          { label: "B", text: "Smooth endoplasmic reticulum", isCorrect: false },
          { label: "C", text: "Golgi apparatus", isCorrect: true },
          { label: "D", text: "Lysosome", isCorrect: false },
          { label: "E", text: "Mitochondria", isCorrect: false },
        ],
        explanation: "The **Golgi apparatus** receives proteins from the rough ER, modifies them (e.g., glycosylation), sorts them, and packages them into vesicles for transport. The rough ER synthesizes proteins but doesn't handle final sorting and packaging.",
        difficulty: 1,
        tags: ["organelles", "protein processing"],
      },
      {
        stem: "A cell is placed in a hypertonic solution. What will happen to the cell?",
        choices: [
          { label: "A", text: "The cell will swell and lyse", isCorrect: false },
          { label: "B", text: "The cell will shrink (crenation)", isCorrect: true },
          { label: "C", text: "Nothing — water is in equilibrium", isCorrect: false },
          { label: "D", text: "The cell will undergo apoptosis", isCorrect: false },
          { label: "E", text: "The cell membrane will dissolve", isCorrect: false },
        ],
        explanation: "In a **hypertonic** solution, there is more solute outside the cell than inside. Water moves OUT of the cell via osmosis, causing the cell to **shrink** (crenation in animal cells, plasmolysis in plant cells). In a hypotonic solution, the opposite would happen — the cell would swell.",
        difficulty: 1,
        tags: ["membrane transport", "osmosis"],
      },
      {
        stem: "The Na⁺/K⁺ ATPase pump moves:",
        choices: [
          { label: "A", text: "3 Na⁺ in, 2 K⁺ out", isCorrect: false },
          { label: "B", text: "2 Na⁺ out, 3 K⁺ in", isCorrect: false },
          { label: "C", text: "3 Na⁺ out, 2 K⁺ in", isCorrect: true },
          { label: "D", text: "3 Na⁺ out, 3 K⁺ in", isCorrect: false },
          { label: "E", text: "2 Na⁺ in, 2 K⁺ out", isCorrect: false },
        ],
        explanation: "The **Na⁺/K⁺ ATPase** is a primary active transport pump that uses 1 ATP to move **3 Na⁺ OUT** of the cell and **2 K⁺ IN**. This creates an electrochemical gradient essential for nerve impulse transmission and maintaining resting membrane potential (-70mV).",
        difficulty: 2,
        tags: ["active transport", "membrane potential"],
      },
      {
        stem: "Which cytoskeletal component is involved in chromosome separation during cell division?",
        choices: [
          { label: "A", text: "Microfilaments (actin)", isCorrect: false },
          { label: "B", text: "Intermediate filaments", isCorrect: false },
          { label: "C", text: "Microtubules (tubulin)", isCorrect: true },
          { label: "D", text: "Myosin", isCorrect: false },
          { label: "E", text: "Keratin", isCorrect: false },
        ],
        explanation: "**Microtubules** (made of tubulin, 25nm diameter) form the **mitotic spindle** that separates chromosomes during cell division. Microfilaments (actin) form the cleavage furrow for cytokinesis. Intermediate filaments provide structural support.",
        difficulty: 2,
        tags: ["cytoskeleton", "cell division"],
      },
      {
        stem: "According to the endosymbiotic theory, which organelle was once a free-living prokaryote?",
        choices: [
          { label: "A", text: "Golgi apparatus", isCorrect: false },
          { label: "B", text: "Lysosome", isCorrect: false },
          { label: "C", text: "Endoplasmic reticulum", isCorrect: false },
          { label: "D", text: "Mitochondria", isCorrect: true },
          { label: "E", text: "Ribosome", isCorrect: false },
        ],
        explanation: "The **endosymbiotic theory** (Lynn Margulis) states that mitochondria and chloroplasts were once independent prokaryotes that were engulfed by ancestral eukaryotic cells. Evidence: they have their own **circular DNA**, **double membranes**, **70S ribosomes**, and **replicate independently** by binary fission.",
        difficulty: 2,
        tags: ["evolution", "organelles", "endosymbiosis"],
      },
      {
        stem: "Which organelle contains hydrolytic enzymes at an acidic pH and is responsible for intracellular digestion?",
        choices: [
          { label: "A", text: "Peroxisome", isCorrect: false },
          { label: "B", text: "Lysosome", isCorrect: true },
          { label: "C", text: "Smooth endoplasmic reticulum", isCorrect: false },
          { label: "D", text: "Golgi apparatus", isCorrect: false },
          { label: "E", text: "Mitochondria", isCorrect: false },
        ],
        explanation: "**Lysosomes** contain hydrolytic enzymes that function optimally at an **acidic pH (~5)**. They are responsible for breaking down macromolecules, old organelles (autophagy), and foreign material (phagocytosed particles). Peroxisomes handle oxidative reactions (e.g., breakdown of fatty acids and detoxification of H₂O₂). Tay-Sachs disease is a classic lysosomal storage disorder caused by deficiency of hexosaminidase A.",
        difficulty: 1,
        tags: ["organelles", "lysosomes"],
      },
      {
        stem: "A researcher observes a cell with a large central vacuole, chloroplasts, and a rigid cell wall. This cell is most likely from a:",
        choices: [
          { label: "A", text: "Fungus", isCorrect: false },
          { label: "B", text: "Bacterium", isCorrect: false },
          { label: "C", text: "Animal", isCorrect: false },
          { label: "D", text: "Plant", isCorrect: true },
          { label: "E", text: "Protist", isCorrect: false },
        ],
        explanation: "**Plant cells** uniquely possess a **large central vacuole** (for turgor pressure), **chloroplasts** (for photosynthesis), and a **rigid cellulose cell wall**. Fungi have cell walls made of chitin but lack chloroplasts and a large central vacuole. Bacteria have peptidoglycan cell walls but are prokaryotic. Animal cells lack cell walls, chloroplasts, and a large central vacuole.",
        difficulty: 1,
        tags: ["cell types", "plant cells"],
      },
      {
        stem: "During which phase of mitosis do chromosomes align along the metaphase plate?",
        choices: [
          { label: "A", text: "Prophase", isCorrect: false },
          { label: "B", text: "Prometaphase", isCorrect: false },
          { label: "C", text: "Metaphase", isCorrect: true },
          { label: "D", text: "Anaphase", isCorrect: false },
          { label: "E", text: "Telophase", isCorrect: false },
        ],
        explanation: "During **metaphase**, chromosomes align at the **metaphase plate** (the cell's equator). Spindle fibers from opposite poles attach to the kinetochores of sister chromatids. This alignment ensures equal segregation during anaphase. In prophase, chromosomes condense and the spindle begins to form. In anaphase, sister chromatids are pulled apart.",
        difficulty: 1,
        tags: ["mitosis", "cell division"],
      },
      {
        stem: "Which of the following is NOT a function of the smooth endoplasmic reticulum?",
        choices: [
          { label: "A", text: "Lipid synthesis", isCorrect: false },
          { label: "B", text: "Detoxification of drugs", isCorrect: false },
          { label: "C", text: "Calcium ion storage", isCorrect: false },
          { label: "D", text: "Protein synthesis", isCorrect: true },
          { label: "E", text: "Steroid hormone synthesis", isCorrect: false },
        ],
        explanation: "**Protein synthesis** occurs on the **rough ER** (studded with ribosomes), not the smooth ER. The **smooth ER** functions include **lipid synthesis**, **detoxification** of drugs and poisons (especially in liver hepatocytes), **Ca²⁺ storage** (especially in the sarcoplasmic reticulum of muscle cells), and **steroid hormone synthesis** in endocrine cells.",
        difficulty: 1,
        tags: ["organelles", "endoplasmic reticulum"],
      },
      {
        stem: "Crossing over during meiosis occurs between:",
        choices: [
          { label: "A", text: "Sister chromatids of the same chromosome", isCorrect: false },
          { label: "B", text: "Non-sister chromatids of homologous chromosomes", isCorrect: true },
          { label: "C", text: "Chromatids of non-homologous chromosomes", isCorrect: false },
          { label: "D", text: "DNA and RNA molecules", isCorrect: false },
          { label: "E", text: "Centromeres of sister chromatids", isCorrect: false },
        ],
        explanation: "**Crossing over** occurs during **Prophase I** of meiosis between **non-sister chromatids of homologous chromosomes**. Homologs form tetrads (bivalents), and segments of DNA are exchanged at points called **chiasmata**. This results in genetic recombination, producing new allele combinations on chromosomes. Crossing over between sister chromatids would not produce genetic variation since they are identical copies.",
        difficulty: 2,
        tags: ["meiosis", "crossing over", "genetic variation"],
      },
      {
        stem: "A cell that has completed meiosis I but not meiosis II would have:",
        choices: [
          { label: "A", text: "The same number of chromosomes as the parent cell, each with two chromatids", isCorrect: false },
          { label: "B", text: "Half the number of chromosomes as the parent cell, each with two chromatids", isCorrect: true },
          { label: "C", text: "Half the number of chromosomes, each with one chromatid", isCorrect: false },
          { label: "D", text: "Twice the number of chromosomes as the parent cell", isCorrect: false },
          { label: "E", text: "The same number of chromosomes, each with one chromatid", isCorrect: false },
        ],
        explanation: "After **Meiosis I**, homologous chromosomes have separated (reductional division), so each daughter cell has **half** the original chromosome number (haploid number of chromosomes). However, each chromosome still consists of **two sister chromatids** joined at the centromere. It is during **Meiosis II** that sister chromatids separate, resulting in cells with half the chromosomes each composed of a single chromatid.",
        difficulty: 2,
        tags: ["meiosis", "chromosome number"],
      },
      {
        stem: "The cleavage furrow that divides an animal cell during cytokinesis is formed by:",
        choices: [
          { label: "A", text: "Microtubules", isCorrect: false },
          { label: "B", text: "Intermediate filaments", isCorrect: false },
          { label: "C", text: "A contractile ring of actin microfilaments", isCorrect: true },
          { label: "D", text: "A cell plate of vesicles", isCorrect: false },
          { label: "E", text: "Dynein motor proteins", isCorrect: false },
        ],
        explanation: "In animal cells, cytokinesis occurs via a **cleavage furrow** formed by a **contractile ring of actin (microfilaments) and myosin**. The ring contracts like a drawstring, pinching the cell in two. In **plant cells**, cytokinesis occurs by formation of a **cell plate** from Golgi-derived vesicles that fuse at the cell's midline. Microtubules form the mitotic spindle for chromosome segregation but do not form the cleavage furrow.",
        difficulty: 2,
        tags: ["cytokinesis", "cytoskeleton"],
      },
      {
        stem: "A cell in G₀ phase is:",
        choices: [
          { label: "A", text: "Actively synthesizing DNA", isCorrect: false },
          { label: "B", text: "Preparing for mitosis by condensing chromosomes", isCorrect: false },
          { label: "C", text: "In a non-dividing, quiescent state", isCorrect: true },
          { label: "D", text: "Undergoing cytokinesis", isCorrect: false },
          { label: "E", text: "At the metaphase checkpoint", isCorrect: false },
        ],
        explanation: "**G₀ phase** is a quiescent (resting) state in which cells have exited the cell cycle and are **not dividing**. Many differentiated cells (e.g., neurons, cardiac muscle cells) remain in G₀ permanently. Some G₀ cells can re-enter the cell cycle if stimulated by appropriate growth factors. DNA synthesis occurs in **S phase**, and chromosome condensation begins in **prophase** of M phase.",
        difficulty: 2,
        tags: ["cell cycle", "G0 phase"],
      },
      {
        stem: "Which of the following correctly matches the cytoskeletal component with its primary function?",
        choices: [
          { label: "A", text: "Microtubules — formation of the cleavage furrow", isCorrect: false },
          { label: "B", text: "Intermediate filaments — movement of cilia and flagella", isCorrect: false },
          { label: "C", text: "Microfilaments — structural support via keratin networks", isCorrect: false },
          { label: "D", text: "Microtubules — chromosome movement via the mitotic spindle", isCorrect: true },
          { label: "E", text: "Intermediate filaments — amoeboid cell movement", isCorrect: false },
        ],
        explanation: "**Microtubules** (made of tubulin, 25 nm) form the **mitotic spindle** and are responsible for chromosome movement during cell division. They also form cilia, flagella, and maintain cell shape. **Microfilaments** (actin, 7 nm) form the cleavage furrow and enable amoeboid movement. **Intermediate filaments** (keratin, vimentin, etc., 10 nm) provide structural support and mechanical strength.",
        difficulty: 2,
        tags: ["cytoskeleton", "cell structure"],
      },
      {
        stem: "Receptor-mediated endocytosis differs from pinocytosis primarily because it:",
        choices: [
          { label: "A", text: "Does not require energy", isCorrect: false },
          { label: "B", text: "Is specific for particular ligands that bind to surface receptors", isCorrect: true },
          { label: "C", text: "Transports materials out of the cell", isCorrect: false },
          { label: "D", text: "Involves movement down a concentration gradient", isCorrect: false },
          { label: "E", text: "Only occurs in prokaryotic cells", isCorrect: false },
        ],
        explanation: "**Receptor-mediated endocytosis** is highly specific: target molecules (ligands) bind to specific receptors on the cell surface, which cluster in **clathrin-coated pits** before being internalized. **Pinocytosis** (\"cell drinking\") is non-specific, taking in extracellular fluid and all dissolved solutes indiscriminately. Both are forms of endocytosis (into the cell) and both require energy (ATP). A classic example of receptor-mediated endocytosis is **LDL cholesterol uptake**.",
        difficulty: 3,
        tags: ["membrane transport", "endocytosis"],
      },
    ],
  },
  {
    slug: "molecular-biology",
    title: "Molecular Biology",
    description: "DNA replication, transcription, translation, gene regulation",
    estimatedMinutes: 50,
    lessons: [
      {
        slug: "dna-replication",
        title: "DNA Replication",
        content: `# DNA Replication

DNA replication is the process by which a cell copies its entire genome before division. For the DAT, you need to understand the enzymes, directionality, and key differences between prokaryotic and eukaryotic replication.

## Overview

- Replication is **semiconservative** — each new DNA molecule contains one original (parent) strand and one newly synthesized (daughter) strand
- Proved by the **Meselson-Stahl experiment** (1958) using heavy nitrogen (¹⁵N) and density gradient centrifugation
- Occurs during **S phase** of the cell cycle

> **High-Yield DAT Tip:** Semiconservative replication is a classic DAT question. Know the Meselson-Stahl experiment and why conservative and dispersive models were ruled out.

## Replication Fork & Directionality

DNA is **antiparallel** — the two strands run in opposite directions (5'→3' and 3'→5'). DNA polymerase can **only synthesize in the 5'→3' direction**.

- **Leading strand:** Synthesized continuously in the 5'→3' direction toward the replication fork
- **Lagging strand:** Synthesized discontinuously in short fragments (**Okazaki fragments**) away from the fork, then joined together

| Feature | Leading Strand | Lagging Strand |
|---------|---------------|----------------|
| Direction | 5'→3' toward fork | 5'→3' away from fork |
| Synthesis | Continuous | Discontinuous (Okazaki fragments) |
| Primers needed | 1 | Multiple |
| Ligase needed? | No | Yes (joins fragments) |

## Key Enzymes of Replication

| Enzyme | Function |
|--------|----------|
| **Helicase** | Unwinds the double helix at the replication fork |
| **Topoisomerase (Gyrase)** | Relieves tension/supercoiling ahead of the fork |
| **Primase** | Synthesizes short **RNA primers** (5-10 nucleotides) to give DNA polymerase a 3'-OH start point |
| **DNA Polymerase III** | Main replication enzyme — adds nucleotides 5'→3', has **3'→5' proofreading exonuclease** activity |
| **DNA Polymerase I** | Removes RNA primers and replaces them with DNA |
| **DNA Ligase** | Seals nicks (joins Okazaki fragments on the lagging strand) |
| **Single-Strand Binding Proteins (SSBs)** | Stabilize separated single strands and prevent re-annealing |
| **Sliding Clamp (PCNA)** | Holds DNA polymerase onto the template for processivity |

> **DAT Tip:** A common question format: "Which enzyme removes RNA primers?" → **DNA Polymerase I**. "Which enzyme joins Okazaki fragments?" → **DNA Ligase**.

## Steps of Replication (Prokaryotic — E. coli model)

1. **Initiation:** Initiator proteins bind the **origin of replication (oriC)**. Helicase unwinds the helix, SSBs stabilize the strands.
2. **Priming:** Primase lays down a short RNA primer on each strand.
3. **Elongation:** DNA Pol III extends from the primer, adding dNTPs in the 5'→3' direction. The leading strand is synthesized continuously; the lagging strand produces Okazaki fragments (~1,000-2,000 nt in prokaryotes).
4. **Primer removal:** DNA Pol I removes RNA primers via 5'→3' exonuclease activity and fills the gaps with DNA.
5. **Ligation:** DNA ligase seals the remaining nicks.
6. **Termination:** Replication forks meet at the **terminus region**.

## Eukaryotic vs. Prokaryotic Replication

| Feature | Prokaryotic | Eukaryotic |
|---------|------------|------------|
| Origins of replication | 1 (oriC) | Multiple (thousands) |
| Speed | ~1,000 nt/sec | ~50 nt/sec |
| Okazaki fragments | ~1,000-2,000 nt | ~100-200 nt |
| Main polymerase | DNA Pol III | DNA Pol δ (lagging), DNA Pol ε (leading) |
| Telomere issue | No (circular DNA) | Yes — requires **telomerase** |

## The Telomere Problem

- Eukaryotic chromosomes are **linear**, so the lagging strand cannot fully replicate the ends
- Each round of replication shortens the chromosome at the **telomeres** (TTAGGG repeats in humans)
- **Telomerase** (a reverse transcriptase with an RNA template) extends telomeres in germ cells, stem cells, and most cancer cells
- Somatic cells lack sufficient telomerase → **Hayflick limit** (finite number of divisions)

> **DAT Tip:** Telomerase is active in germ cells and cancer cells but NOT in most somatic cells. This is why normal cells have a limited lifespan.

## DNA Repair Mechanisms

| Mechanism | What It Fixes |
|-----------|--------------|
| **Proofreading** (3'→5' exonuclease) | Mismatched bases during replication |
| **Mismatch repair** | Errors missed by proofreading |
| **Nucleotide excision repair** | Bulky lesions (e.g., thymine dimers from UV) |
| **Base excision repair** | Small, non-bulky lesions (deaminated bases) |

## Key Terms
- **Semiconservative:** Each daughter DNA has one old + one new strand
- **Okazaki fragments:** Short DNA pieces on the lagging strand
- **Telomere:** Repetitive DNA at chromosome ends that protects coding sequences
`,
        keyTerms: [
          { term: "Helicase", definition: "Unwinds the DNA double helix at the replication fork" },
          { term: "DNA Polymerase III", definition: "Main prokaryotic enzyme that synthesizes new DNA in the 5'→3' direction" },
          { term: "Primase", definition: "Synthesizes short RNA primers needed by DNA polymerase to begin synthesis" },
          { term: "DNA Ligase", definition: "Seals nicks between Okazaki fragments on the lagging strand" },
          { term: "Okazaki Fragments", definition: "Short DNA fragments synthesized on the lagging strand during discontinuous replication" },
          { term: "Telomerase", definition: "Reverse transcriptase that extends telomeres in germ cells and cancer cells" },
          { term: "Semiconservative", definition: "Replication model where each new DNA has one parent and one new strand" },
          { term: "Topoisomerase", definition: "Relieves supercoiling tension ahead of the replication fork" },
        ],
      },
      {
        slug: "transcription-translation",
        title: "Transcription & Translation",
        content: `# Transcription & Translation

Gene expression is the process by which the information in DNA is used to produce a functional protein (or RNA). This occurs in two major steps: **transcription** (DNA → mRNA) and **translation** (mRNA → protein).

## The Central Dogma of Molecular Biology

**DNA → RNA → Protein**

- **Transcription:** DNA is used as a template to synthesize messenger RNA (mRNA)
- **Translation:** mRNA is read by ribosomes to assemble amino acids into a polypeptide
- **Reverse transcription:** RNA → DNA (retroviruses like HIV use **reverse transcriptase**)

> **High-Yield DAT Tip:** The central dogma goes DNA → RNA → Protein. Reverse transcriptase is the exception — it makes DNA from an RNA template (retroviruses).

---

## Part 1: Transcription

Transcription produces an mRNA copy of a gene. It occurs in the **nucleus** (eukaryotes) or **cytoplasm** (prokaryotes).

### Key Players

| Component | Role |
|-----------|------|
| **Template strand** (antisense, 3'→5') | Read by RNA polymerase |
| **Coding strand** (sense, 5'→3') | Same sequence as mRNA (except T→U) |
| **RNA Polymerase** | Synthesizes mRNA in the **5'→3' direction** |
| **Promoter** | DNA sequence where RNA polymerase binds to begin transcription |
| **Terminator** | DNA sequence that signals the end of transcription |

> **DAT Tip:** RNA polymerase reads the **template strand 3'→5'** and builds mRNA **5'→3'**. The mRNA sequence matches the **coding strand** (with U replacing T).

### Prokaryotic Transcription

- Single **RNA polymerase** handles all RNA types (mRNA, rRNA, tRNA)
- **Sigma factor (σ)** helps RNA polymerase recognize and bind the **promoter** (e.g., -10 and -35 regions)
- No mRNA processing needed — mRNA is translated **simultaneously** (coupled transcription-translation)
- Terminated by **rho-dependent** or **rho-independent** (hairpin loop) mechanisms

### Eukaryotic Transcription

Three different RNA polymerases:

| Polymerase | Product |
|------------|---------|
| **RNA Pol I** | rRNA (except 5S) |
| **RNA Pol II** | mRNA (and some snRNAs) |
| **RNA Pol III** | tRNA, 5S rRNA |

> **DAT Tip:** Remember: RNA Pol **II** makes **m**RNA — the one you care about most for gene expression.

**Eukaryotic promoter elements:**
- **TATA box** (~-25 position) — bound by **TFIID** (TBP subunit)
- **General transcription factors** (TFIIA, TFIIB, TFIID, TFIIE, TFIIF, TFIIH) assemble at the promoter
- **Enhancers** — distal regulatory sequences that increase transcription (bound by activators)
- **Silencers** — decrease transcription (bound by repressors)

### Post-Transcriptional Processing (Eukaryotes Only)

Before mRNA leaves the nucleus, it undergoes three modifications:

| Modification | What Happens | Purpose |
|-------------|-------------|---------|
| **5' cap** | 7-methylguanosine (m7G) added to 5' end | Protects from degradation; aids ribosome recognition |
| **3' poly-A tail** | 100-250 adenine nucleotides added | Protects from degradation; aids nuclear export |
| **Splicing** | Introns removed, exons joined by **spliceosome** | Creates mature mRNA with only coding sequences |

- **Introns** = "in-trons stay in the nucleus" (removed)
- **Exons** = "ex-ons are expressed" (kept)
- **Alternative splicing:** One gene can produce multiple protein variants by including/excluding different exons

> **DAT Tip:** Prokaryotes do NOT have introns (generally), 5' caps, or poly-A tails. Their mRNA is translated immediately.

---

## Part 2: Translation

Translation converts the mRNA nucleotide sequence into an amino acid sequence (polypeptide). It occurs on **ribosomes** in the cytoplasm (or rough ER for secreted proteins).

### The Genetic Code

- Read in **triplets** called **codons** (3 nucleotides = 1 amino acid)
- **64 codons** total: 61 code for amino acids, 3 are stop codons
- **Degenerate** (redundant) — multiple codons can code for the same amino acid
- **Universal** — nearly all organisms use the same code
- **Start codon: AUG** (methionine) — also signals the start of translation
- **Stop codons: UAA, UAG, UGA** — do NOT code for amino acids

| Property | Detail |
|----------|--------|
| Codons | 64 total (61 amino acid + 3 stop) |
| Start codon | AUG (Met) |
| Stop codons | UAA, UAG, UGA |
| Degeneracy | 3rd position "wobble" allows flexibility |
| Reading frame | Set by the start codon (AUG) |

> **DAT Tip:** Remember stop codons with: **U A**re **A**wful, **U A**re **G**one, **U G**o **A**way.

### Key Molecules in Translation

| Molecule | Function |
|----------|----------|
| **mRNA** | Carries the genetic code from DNA to the ribosome |
| **tRNA** | Adapter molecule — carries amino acids; has an **anticodon** complementary to the mRNA codon |
| **Aminoacyl-tRNA synthetase** | Charges tRNA with the correct amino acid (uses ATP → AMP + PPi) |
| **Ribosome** | Large macromolecular machine with 3 tRNA binding sites (A, P, E) |

**Ribosome binding sites:**
- **A site (Aminoacyl):** Incoming charged tRNA binds here
- **P site (Peptidyl):** tRNA holding the growing polypeptide chain
- **E site (Exit):** Empty tRNA exits here

### Steps of Translation

**1. Initiation**
- Small ribosomal subunit binds to the mRNA at the **5' cap** (eukaryotes) or **Shine-Dalgarno sequence** (prokaryotes)
- Scans for the **start codon (AUG)**
- Initiator tRNA (carrying **Met** in eukaryotes, **fMet** in prokaryotes) binds the P site
- Large subunit joins → complete ribosome assembled

**2. Elongation**
- **Codon recognition:** Charged tRNA enters the A site (complementary anticodon-codon pairing)
- **Peptide bond formation:** Peptidyl transferase (rRNA catalytic activity — **ribozyme**) forms a peptide bond between amino acids
- **Translocation:** Ribosome shifts one codon in the 5'→3' direction. tRNA in P site moves to E site; tRNA in A site moves to P site; A site is now empty for the next tRNA

**3. Termination**
- Ribosome encounters a **stop codon** (UAA, UAG, or UGA)
- **Release factor** binds the A site (no tRNA matches a stop codon)
- Polypeptide is released, ribosome subunits dissociate

### Post-Translational Modifications

After translation, proteins may be modified:
- **Folding** — assisted by **chaperones** (e.g., heat shock proteins)
- **Cleavage** — removal of signal peptides or activation of zymogens
- **Glycosylation** — addition of carbohydrate groups (ER and Golgi)
- **Phosphorylation** — addition of phosphate groups by kinases (regulation)
- **Ubiquitination** — tagging with ubiquitin for proteasomal degradation

### Prokaryotic vs. Eukaryotic Translation

| Feature | Prokaryotic | Eukaryotic |
|---------|------------|------------|
| Ribosome | 70S (50S + 30S) | 80S (60S + 40S) |
| Start amino acid | **fMet** (formyl-methionine) | **Met** (methionine) |
| mRNA processing | None — coupled with transcription | 5' cap, poly-A tail, splicing |
| Polycistronic? | Yes (one mRNA → multiple proteins) | No (one mRNA → one protein, monocistronic) |
| Shine-Dalgarno | Yes | No (uses 5' cap scanning) |

> **DAT Tip:** Prokaryotic ribosomes are **70S** — this is why certain antibiotics (e.g., tetracycline, chloramphenicol, erythromycin) can target bacterial ribosomes without harming human **80S** ribosomes.

## Gene Regulation Preview

- **Operon model** (prokaryotes): lac operon, trp operon
- **Eukaryotic regulation:** Transcription factors, enhancers, silencers, epigenetics (methylation, acetylation)
- These topics are covered in detail in a later chapter
`,
        keyTerms: [
          { term: "Transcription", definition: "Process of copying DNA into mRNA, catalyzed by RNA polymerase" },
          { term: "Translation", definition: "Process of reading mRNA codons to assemble amino acids into a polypeptide on the ribosome" },
          { term: "Codon", definition: "Three-nucleotide sequence on mRNA that codes for one amino acid" },
          { term: "Anticodon", definition: "Three-nucleotide sequence on tRNA complementary to the mRNA codon" },
          { term: "RNA Polymerase II", definition: "Eukaryotic enzyme that transcribes mRNA from DNA" },
          { term: "Spliceosome", definition: "Complex that removes introns and joins exons during mRNA processing" },
          { term: "Ribosome", definition: "Macromolecular machine (rRNA + protein) that catalyzes translation with A, P, and E sites" },
          { term: "Aminoacyl-tRNA Synthetase", definition: "Enzyme that charges tRNA with the correct amino acid" },
          { term: "Release Factor", definition: "Protein that recognizes stop codons and triggers termination of translation" },
        ],
      },
    ],
    questions: [
      {
        stem: "During DNA replication, which enzyme is responsible for joining Okazaki fragments on the lagging strand?",
        choices: [
          { label: "A", text: "DNA Polymerase III", isCorrect: false },
          { label: "B", text: "DNA Polymerase I", isCorrect: false },
          { label: "C", text: "Helicase", isCorrect: false },
          { label: "D", text: "DNA Ligase", isCorrect: true },
          { label: "E", text: "Primase", isCorrect: false },
        ],
        explanation: "**DNA Ligase** seals the phosphodiester backbone nicks between Okazaki fragments after DNA Polymerase I has replaced the RNA primers with DNA. DNA Pol III synthesizes the fragments, and DNA Pol I removes primers, but only ligase can join the fragments together.",
        difficulty: 1,
        tags: ["DNA replication", "enzymes"],
      },
      {
        stem: "The Meselson-Stahl experiment demonstrated that DNA replication is:",
        choices: [
          { label: "A", text: "Conservative", isCorrect: false },
          { label: "B", text: "Dispersive", isCorrect: false },
          { label: "C", text: "Semiconservative", isCorrect: true },
          { label: "D", text: "Unidirectional", isCorrect: false },
          { label: "E", text: "Non-enzymatic", isCorrect: false },
        ],
        explanation: "Meselson and Stahl used **heavy nitrogen (¹⁵N)** to label parental DNA and then switched to light nitrogen (¹⁴N). After one round of replication, all DNA was intermediate density (ruling out conservative). After two rounds, half was intermediate and half was light (ruling out dispersive). This proved **semiconservative** replication — each daughter molecule has one old and one new strand.",
        difficulty: 2,
        tags: ["DNA replication", "experiments"],
      },
      {
        stem: "In eukaryotic mRNA processing, introns are removed by the:",
        choices: [
          { label: "A", text: "Ribosome", isCorrect: false },
          { label: "B", text: "Proteasome", isCorrect: false },
          { label: "C", text: "Spliceosome", isCorrect: true },
          { label: "D", text: "RNA Polymerase II", isCorrect: false },
          { label: "E", text: "Poly-A polymerase", isCorrect: false },
        ],
        explanation: "The **spliceosome** is a complex of snRNPs (small nuclear ribonucleoproteins) that recognizes splice sites at intron-exon boundaries, removes introns (non-coding sequences), and joins exons together. This occurs in the nucleus before mRNA is exported to the cytoplasm.",
        difficulty: 1,
        tags: ["transcription", "mRNA processing"],
      },
      {
        stem: "A mutation changes a codon from UUU (phenylalanine) to UUC (also phenylalanine). This type of mutation is called:",
        choices: [
          { label: "A", text: "Missense mutation", isCorrect: false },
          { label: "B", text: "Nonsense mutation", isCorrect: false },
          { label: "C", text: "Silent (synonymous) mutation", isCorrect: true },
          { label: "D", text: "Frameshift mutation", isCorrect: false },
          { label: "E", text: "Deletion mutation", isCorrect: false },
        ],
        explanation: "A **silent (synonymous) mutation** changes the DNA/mRNA sequence but does NOT change the amino acid due to the **degeneracy** of the genetic code. UUU and UUC both code for phenylalanine. The wobble position (3rd nucleotide) often tolerates substitutions. A missense mutation would change the amino acid, and a nonsense mutation would create a premature stop codon.",
        difficulty: 2,
        tags: ["genetic code", "mutations"],
      },
      {
        stem: "During translation, the peptide bond between amino acids is catalyzed by:",
        choices: [
          { label: "A", text: "Aminoacyl-tRNA synthetase", isCorrect: false },
          { label: "B", text: "Peptidase", isCorrect: false },
          { label: "C", text: "Peptidyl transferase (ribosomal RNA)", isCorrect: true },
          { label: "D", text: "Release factor", isCorrect: false },
          { label: "E", text: "Elongation factor", isCorrect: false },
        ],
        explanation: "**Peptidyl transferase** activity is carried out by the **large ribosomal subunit** — and importantly, it is the **rRNA** (not protein) that catalyzes the reaction, making the ribosome a **ribozyme**. Aminoacyl-tRNA synthetase charges tRNA with amino acids but does not form peptide bonds. Release factors are involved in termination, not elongation.",
        difficulty: 2,
        tags: ["translation", "ribozyme"],
      },
    ],
  },
  {
    slug: "genetics",
    title: "Genetics",
    description: "Mendelian genetics, inheritance patterns, pedigrees, Hardy-Weinberg, population genetics",
    estimatedMinutes: 45,
    lessons: [
      {
        slug: "mendelian-genetics",
        title: "Mendelian Genetics & Inheritance Patterns",
        content: `# Mendelian Genetics & Inheritance Patterns

Genetics is one of the highest-yield topics on the DAT Biology section. You must be able to solve crosses, interpret pedigrees, and recognize non-Mendelian inheritance patterns quickly and accurately.

## Gregor Mendel's Key Principles

Mendel studied pea plants and discovered the fundamental laws of inheritance:

### Law of Segregation
- Each organism has **two alleles** for each gene (one from each parent)
- During gamete formation (meiosis), the two alleles **separate** so each gamete carries only **one allele**
- Corresponds to the separation of homologous chromosomes in **Meiosis I**

### Law of Independent Assortment
- Genes on **different chromosomes** assort independently during gamete formation
- This is why a dihybrid cross (AaBb) produces four gamete types in equal proportion: AB, Ab, aB, ab
- **Exception:** Linked genes on the same chromosome do NOT assort independently (unless recombination occurs)

### Law of Dominance
- In a heterozygote (Aa), only the **dominant allele** (A) is expressed phenotypically
- The **recessive allele** (a) is masked but still present in the genotype

> **High-Yield DAT Tip:** Mendel's laws correspond to meiotic events. Segregation = Anaphase I (homologs separate). Independent assortment = random orientation of bivalents at Metaphase I.

## Key Vocabulary

| Term | Definition |
|------|-----------|
| **Allele** | A variant form of a gene |
| **Homozygous** | Two identical alleles (AA or aa) |
| **Heterozygous** | Two different alleles (Aa) |
| **Genotype** | Genetic makeup (e.g., Aa) |
| **Phenotype** | Physical expression (e.g., tall) |
| **Dominant** | Allele expressed in heterozygotes |
| **Recessive** | Allele masked in heterozygotes |
| **Test cross** | Cross unknown genotype with homozygous recessive (aa) to determine genotype |

## Monohybrid Cross (Single Gene)

**Example:** Aa x Aa

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

- **Genotypic ratio:** 1 AA : 2 Aa : 1 aa
- **Phenotypic ratio:** 3 dominant : 1 recessive

> **DAT Tip:** If a question says "3:1 ratio," think monohybrid cross of two heterozygotes. If it says "1:1 ratio," think test cross (Aa x aa).

## Dihybrid Cross (Two Genes)

**Example:** AaBb x AaBb (both genes independently assort)

- **Phenotypic ratio:** 9:3:3:1
- 9/16 A_B_ : 3/16 A_bb : 3/16 aaB_ : 1/16 aabb

**FOIL method for gametes:**
- AaBb produces gametes: AB, Ab, aB, ab (each 1/4)

## Non-Mendelian Inheritance Patterns

| Pattern | Description | Example |
|---------|------------|---------|
| **Incomplete dominance** | Heterozygote is a **blend** of both phenotypes | Red x White = Pink flowers (snapdragons) |
| **Codominance** | Both alleles fully expressed in heterozygote | AB blood type (I^A I^B) — both A and B antigens present |
| **Multiple alleles** | More than 2 alleles exist in the population | ABO blood types (I^A, I^B, i) |
| **Polygenic inheritance** | Multiple genes contribute to one trait | Skin color, height, eye color |
| **Epistasis** | One gene masks expression of another gene | Labrador coat color (E gene masks B gene) |
| **Pleiotropy** | One gene affects multiple phenotypes | Sickle cell gene (affects RBCs, spleen, bones) |
| **X-linked inheritance** | Gene located on the X chromosome | Hemophilia, color blindness, Duchenne muscular dystrophy |

## ABO Blood Types (Classic DAT Topic)

| Genotype | Blood Type | Antigens on RBC | Antibodies in Plasma |
|----------|-----------|-----------------|---------------------|
| I^A I^A or I^A i | **A** | A antigen | Anti-B |
| I^B I^B or I^B i | **B** | B antigen | Anti-A |
| I^A I^B | **AB** | A and B antigens | Neither (universal recipient) |
| ii | **O** | Neither | Anti-A and Anti-B (universal donor) |

> **High-Yield DAT Tip:** ABO blood types demonstrate **codominance** (I^A and I^B are codominant to each other) and **dominance** (both I^A and I^B are dominant over i). Type O is the universal donor; type AB is the universal recipient.

## X-Linked Inheritance

- Males (XY) have only **one X chromosome** — a single recessive allele on X will be expressed (hemizygous)
- Females (XX) need **two copies** of the recessive allele to express the trait
- **Carrier females** (X^A X^a) are phenotypically normal but can pass the allele to sons
- **Affected fathers** pass the X-linked allele to **all daughters** but **no sons**
- More males are affected than females

**X-linked recessive cross: Carrier female x Normal male**
X^A X^a x X^A Y

| | X^A | Y |
|---|---|---|
| **X^A** | X^A X^A (normal female) | X^A Y (normal male) |
| **X^a** | X^A X^a (carrier female) | X^a Y (affected male) |

- 50% of sons affected, 50% of daughters are carriers

## Linkage & Recombination

- **Linked genes** are on the same chromosome and tend to be inherited together
- **Crossing over** during Prophase I of meiosis can separate linked genes
- **Recombination frequency** = (# recombinant offspring / total offspring) x 100%
- 1% recombination frequency = **1 centimorgan (cM)** = 1 map unit
- Maximum recombination frequency is **50%** (genes behave as if unlinked)
`,
        keyTerms: [
          { term: "Allele", definition: "A variant form of a gene at a particular locus" },
          { term: "Law of Segregation", definition: "Two alleles separate during gamete formation so each gamete carries one allele" },
          { term: "Independent Assortment", definition: "Genes on different chromosomes are distributed independently during meiosis" },
          { term: "Codominance", definition: "Both alleles are fully and simultaneously expressed in the heterozygote" },
          { term: "Incomplete Dominance", definition: "Heterozygote shows a blended intermediate phenotype" },
          { term: "Epistasis", definition: "One gene masks or modifies the expression of another gene" },
          { term: "X-linked", definition: "Gene located on the X chromosome; males are hemizygous and more frequently affected" },
          { term: "Test Cross", definition: "Crossing an individual of unknown genotype with a homozygous recessive to determine genotype" },
        ],
      },
      {
        slug: "pedigrees-population-genetics",
        title: "Pedigrees & Population Genetics",
        content: `# Pedigrees & Population Genetics

Pedigree analysis and Hardy-Weinberg equilibrium are among the most commonly tested genetics topics on the DAT. You must be able to determine inheritance patterns from pedigrees and perform population genetics calculations.

## Pedigree Analysis

A pedigree is a family tree diagram that shows the inheritance pattern of a trait across generations.

### Pedigree Symbols
- **Squares** = males; **Circles** = females
- **Filled/shaded** = affected; **Open** = unaffected
- **Half-filled** = carrier (known)
- **Horizontal line** between male and female = mating pair
- **Vertical line** = offspring
- **Roman numerals (I, II, III)** = generations

### How to Determine the Inheritance Pattern

| Pattern | Key Clues in Pedigree |
|---------|----------------------|
| **Autosomal Recessive** | Trait skips generations; affected child can have two unaffected parents (both carriers); affects males and females equally; affected x unaffected usually produces all unaffected children |
| **Autosomal Dominant** | Trait appears every generation; affected child has at least one affected parent; unaffected parents do NOT produce affected offspring; affects males and females equally |
| **X-linked Recessive** | More males affected; no male-to-male transmission; carrier mothers pass to ~50% of sons; affected fathers have all carrier daughters |
| **X-linked Dominant** | Affected fathers pass trait to ALL daughters; affected mothers pass to ~50% of children; more females affected |
| **Mitochondrial** | Maternal inheritance only; all children of affected mother are affected; affected father does NOT pass to children |

> **High-Yield DAT Tip:** The fastest way to rule out patterns: (1) If an affected child has two unaffected parents, it CANNOT be autosomal dominant. (2) If an affected father has an affected son, it CANNOT be X-linked. (3) If the trait skips generations, it is likely recessive.

### Calculating Probabilities from Pedigrees

**Strategy:**
1. Determine the inheritance pattern
2. Assign genotypes to all individuals
3. Use Punnett squares or probability rules to calculate offspring probabilities

**Probability Rules:**
- **Multiplication rule (AND):** P(A and B) = P(A) x P(B) — for independent events
- **Addition rule (OR):** P(A or B) = P(A) + P(B) — for mutually exclusive events

**Example:** Both parents are carriers for CF (Aa x Aa). What is the probability their first THREE children are all unaffected?
- P(unaffected) = 3/4
- P(all three unaffected) = (3/4)^3 = 27/64

## Hardy-Weinberg Equilibrium

The Hardy-Weinberg principle describes a theoretical population in which **allele frequencies do not change** from generation to generation — i.e., no evolution is occurring.

### Hardy-Weinberg Equations

For a gene with two alleles (A and a):

**Allele frequencies:**
- **p** = frequency of dominant allele (A)
- **q** = frequency of recessive allele (a)
- **p + q = 1**

**Genotype frequencies:**
- **p² + 2pq + q² = 1**
- p² = frequency of AA (homozygous dominant)
- 2pq = frequency of Aa (heterozygous)
- q² = frequency of aa (homozygous recessive)

> **High-Yield DAT Tip:** Most Hardy-Weinberg problems give you the frequency of the recessive PHENOTYPE (which equals q²). Start by taking the square root to find q, then p = 1 - q. Then calculate p², 2pq, and q².

### Five Conditions for Hardy-Weinberg Equilibrium

A population is in Hardy-Weinberg equilibrium ONLY if ALL five conditions are met:

| Condition | Violation = Evolutionary Force |
|-----------|-------------------------------|
| **No mutation** | Mutation introduces new alleles |
| **No natural selection** | Selection changes allele frequencies (differential fitness) |
| **No migration** (gene flow) | Immigration/emigration alters allele frequencies |
| **Large population** (no genetic drift) | Small populations experience random changes in allele frequency |
| **Random mating** | Non-random mating changes genotype frequencies (not allele frequencies) |

> **DAT Tip:** Mnemonic for HW conditions: **M**ating is random, **N**o mutation, **S**election absent, **L**arge population, **N**o migration = "**MN SLN**" or think "**My Neighbor Sees Large Numbers**"

### Hardy-Weinberg Practice Problem

**Problem:** In a population of 10,000 individuals, 400 have sickle cell disease (autosomal recessive). What is the expected number of carriers?

**Solution:**
1. q² = 400/10,000 = 0.04
2. q = sqrt(0.04) = 0.2
3. p = 1 - 0.2 = 0.8
4. 2pq = 2(0.8)(0.2) = 0.32 = 32% carriers
5. Number of carriers = 0.32 x 10,000 = **3,200 carriers**

## Population Genetics Concepts

### Genetic Drift
- **Random** changes in allele frequency due to **small population size**
- **Bottleneck effect:** Drastic reduction in population size (e.g., natural disaster) → loss of genetic diversity
- **Founder effect:** Small group colonizes a new area, carrying only a subset of alleles

### Gene Flow (Migration)
- Movement of alleles between populations
- Tends to **reduce** differences between populations
- **Increases** genetic diversity within a population

### Natural Selection Types

| Type | Effect on Phenotype Distribution | Example |
|------|--------------------------------|---------|
| **Stabilizing** | Favors the intermediate phenotype; reduces variation | Human birth weight |
| **Directional** | Favors one extreme phenotype | Antibiotic resistance in bacteria |
| **Disruptive** | Favors both extreme phenotypes | Beak size in African seed crackers |
| **Sexual selection** | Traits that increase mating success | Peacock tail feathers |

### Fitness & Selection
- **Fitness (w):** Reproductive success relative to others in the population
- **Selection coefficient (s):** s = 1 - w (measures intensity of selection against a genotype)
- **Heterozygote advantage:** Heterozygotes have higher fitness than either homozygote (e.g., sickle cell trait in malaria regions)

## Chi-Square Test (Goodness of Fit)

Used to determine if observed genetic ratios match expected Mendelian ratios.

**Formula:** X² = Sum of [(Observed - Expected)² / Expected]

**Steps:**
1. State the null hypothesis (H₀): observed ratios fit expected Mendelian ratios
2. Calculate expected values from Mendelian ratios
3. Calculate X² statistic
4. Compare to critical value at appropriate degrees of freedom (df = categories - 1)
5. If X² > critical value → reject H₀ (significant deviation from expected)
6. If X² < critical value → fail to reject H₀ (data fits expected ratios)

> **High-Yield DAT Tip:** You likely won't need to calculate chi-square on the DAT, but you DO need to understand its purpose — testing whether observed ratios significantly differ from expected Mendelian ratios.
`,
        keyTerms: [
          { term: "Hardy-Weinberg Equilibrium", definition: "State where allele frequencies remain constant across generations (p + q = 1; p² + 2pq + q² = 1)" },
          { term: "Genetic Drift", definition: "Random change in allele frequency due to small population size" },
          { term: "Bottleneck Effect", definition: "Reduction in genetic diversity after a drastic population size decrease" },
          { term: "Founder Effect", definition: "Reduced genetic diversity when a small group colonizes a new area" },
          { term: "Gene Flow", definition: "Movement of alleles between populations via migration" },
          { term: "Stabilizing Selection", definition: "Natural selection favoring the intermediate phenotype" },
          { term: "Directional Selection", definition: "Natural selection favoring one extreme phenotype" },
          { term: "Heterozygote Advantage", definition: "Heterozygotes have greater fitness than either homozygote (e.g., sickle cell trait)" },
        ],
      },
    ],
    questions: [
      {
        stem: "In a cross between two heterozygous pea plants (Aa x Aa), what fraction of the offspring are expected to be homozygous?",
        choices: [
          { label: "A", text: "1/4", isCorrect: false },
          { label: "B", text: "1/2", isCorrect: true },
          { label: "C", text: "3/4", isCorrect: false },
          { label: "D", text: "2/3", isCorrect: false },
          { label: "E", text: "1/3", isCorrect: false },
        ],
        explanation: "From Aa x Aa: the genotypic ratio is 1 AA : 2 Aa : 1 aa. Homozygous individuals include both AA (1/4) and aa (1/4), so the total fraction that is homozygous = 1/4 + 1/4 = **1/2**. The question asks for ALL homozygous offspring, not just homozygous dominant or recessive.",
        difficulty: 1,
        tags: ["Mendelian genetics", "monohybrid cross"],
      },
      {
        stem: "A color-blind man (X-linked recessive) marries a woman who is a carrier. What proportion of their sons will be color blind?",
        choices: [
          { label: "A", text: "0%", isCorrect: false },
          { label: "B", text: "25%", isCorrect: false },
          { label: "C", text: "50%", isCorrect: true },
          { label: "D", text: "75%", isCorrect: false },
          { label: "E", text: "100%", isCorrect: false },
        ],
        explanation: "The father is X^a Y and the carrier mother is X^A X^a. Sons inherit their X from the mother. Mother's X chromosomes: X^A and X^a. Half the sons receive X^a (color blind) and half receive X^A (normal). So **50%** of sons will be color blind. Note: all daughters will have at least one X^a from the father, so 50% of daughters will also be color blind (X^a X^a) and 50% will be carriers (X^A X^a).",
        difficulty: 2,
        tags: ["X-linked inheritance", "pedigree"],
      },
      {
        stem: "In a population of 1,000 individuals, 90 display the autosomal recessive phenotype. What is the frequency of heterozygous carriers in the population?",
        choices: [
          { label: "A", text: "0.09", isCorrect: false },
          { label: "B", text: "0.21", isCorrect: false },
          { label: "C", text: "0.42", isCorrect: true },
          { label: "D", text: "0.49", isCorrect: false },
          { label: "E", text: "0.30", isCorrect: false },
        ],
        explanation: "Using Hardy-Weinberg: q² = 90/1000 = 0.09, so q = 0.3. Then p = 1 - 0.3 = 0.7. The frequency of heterozygous carriers (2pq) = 2(0.7)(0.3) = **0.42**. This is one of the most commonly tested Hardy-Weinberg calculations on the DAT.",
        difficulty: 2,
        tags: ["Hardy-Weinberg", "population genetics"],
      },
      {
        stem: "Which of the following pedigree observations is MOST consistent with autosomal recessive inheritance?",
        choices: [
          { label: "A", text: "Every generation has affected individuals", isCorrect: false },
          { label: "B", text: "Two unaffected parents have an affected child", isCorrect: true },
          { label: "C", text: "An affected father has an affected son", isCorrect: false },
          { label: "D", text: "Only males are affected", isCorrect: false },
          { label: "E", text: "All children of an affected mother are affected", isCorrect: false },
        ],
        explanation: "In **autosomal recessive** inheritance, both parents can be unaffected carriers (Aa x Aa) and produce an affected child (aa) with probability 1/4. This pattern of 'skipping generations' is the hallmark of autosomal recessive traits. Choice A suggests dominant inheritance. Choice D suggests X-linked recessive. Choice E suggests mitochondrial inheritance.",
        difficulty: 1,
        tags: ["pedigree analysis", "inheritance patterns"],
      },
      {
        stem: "A population of butterflies experiences a severe drought that kills 95% of the population. The surviving 5% happen to have a different allele frequency distribution than the original population. This is an example of:",
        choices: [
          { label: "A", text: "Natural selection", isCorrect: false },
          { label: "B", text: "Gene flow", isCorrect: false },
          { label: "C", text: "Bottleneck effect", isCorrect: true },
          { label: "D", text: "Founder effect", isCorrect: false },
          { label: "E", text: "Disruptive selection", isCorrect: false },
        ],
        explanation: "The **bottleneck effect** is a type of genetic drift that occurs when a population is drastically reduced in size by a random catastrophic event (drought, earthquake, etc.). The surviving individuals may not be representative of the original population's allele frequencies, leading to a loss of genetic diversity. The **founder effect** is similar but involves a small group colonizing a NEW area, not surviving a catastrophe in place.",
        difficulty: 2,
        tags: ["population genetics", "genetic drift"],
      },
    ],
  },
  {
    slug: "microbiology",
    title: "Microbiology",
    description: "Bacteria structure, viruses, fungi, parasites, immune evasion, antibiotics",
    estimatedMinutes: 35,
    lessons: [
      {
        slug: "bacteria-structure-function",
        title: "Bacteria: Structure & Function",
        content: `# Bacteria: Structure & Function

Microbiology is a significant component of the DAT Biology section. You need to understand bacterial structure, classification, growth, and how antibiotics target specific bacterial components.

## Bacterial Classification

### Gram Staining

The Gram stain is the most fundamental way to classify bacteria:

| Feature | Gram-Positive | Gram-Negative |
|---------|--------------|---------------|
| **Cell wall** | Thick peptidoglycan layer | Thin peptidoglycan + outer membrane |
| **Gram stain color** | **Purple/violet** (retains crystal violet) | **Pink/red** (loses crystal violet, picks up safranin) |
| **Outer membrane** | Absent | Present (contains **LPS/endotoxin**) |
| **Periplasmic space** | Small or absent | Present (between inner and outer membranes) |
| **Teichoic acids** | Present | Absent |
| **Endotoxin (LPS)** | Absent | Present (lipid A triggers immune response) |
| **Sensitivity to penicillin** | More sensitive | Less sensitive (outer membrane barrier) |

> **High-Yield DAT Tip:** Gram-negative bacteria have an outer membrane with **lipopolysaccharide (LPS)**. The **Lipid A** portion of LPS is the endotoxin that triggers fever, inflammation, and potentially septic shock. Know this — it is heavily tested.

### Bacterial Shapes

| Shape | Term | Example |
|-------|------|---------|
| Spherical | **Cocci** | *Staphylococcus*, *Streptococcus* |
| Rod | **Bacilli** | *E. coli*, *Bacillus anthracis* |
| Spiral | **Spirilla / Spirochetes** | *Treponema pallidum* (syphilis) |
| Comma-shaped | **Vibrio** | *Vibrio cholerae* |

Arrangement prefixes: **Diplo-** (pairs), **Strepto-** (chains), **Staphylo-** (clusters)

## Bacterial Cell Structure

### Essential Structures

| Structure | Function |
|-----------|----------|
| **Cell membrane** | Phospholipid bilayer; selective permeability; **NO sterols** (unlike eukaryotes, except *Mycoplasma*) |
| **Cell wall** | Peptidoglycan (murein) — provides rigidity and prevents osmotic lysis |
| **Ribosomes** | **70S** (50S + 30S) — target of many antibiotics |
| **Nucleoid** | Region containing single circular chromosome (haploid, no histone proteins) |
| **Cytoplasm** | Contains enzymes, ribosomes, and metabolites |

### Optional/Specialized Structures

| Structure | Function |
|-----------|----------|
| **Plasmids** | Small circular extrachromosomal DNA — carry antibiotic resistance genes, virulence factors |
| **Capsule** | Polysaccharide coating OUTSIDE cell wall — **antiphagocytic** (protects from immune system) |
| **Flagella** | Locomotion — made of **flagellin** protein; enables chemotaxis |
| **Pili (fimbriae)** | Attachment to host cells; **sex pilus** for conjugation (DNA transfer) |
| **Endospore** | Dormant, highly resistant survival structure (*Bacillus*, *Clostridium*) — survives heat, chemicals, radiation, desiccation |

> **High-Yield DAT Tip:** **Endospores** are NOT reproductive structures. They are survival structures formed under harsh conditions. Organisms that form endospores include *Bacillus* and *Clostridium* (both Gram-positive rods). Endospores can survive autoclaving at 121 degrees C for extended periods.

## Bacterial Genetics & Gene Transfer

Bacteria reproduce asexually by **binary fission** (not mitosis). However, they achieve genetic diversity through horizontal gene transfer:

| Method | Mechanism |
|--------|-----------|
| **Transformation** | Uptake of free (naked) DNA from the environment (Griffith's experiment with *S. pneumoniae*) |
| **Transduction** | DNA transfer via **bacteriophages** (viruses). **Generalized** = random DNA; **Specialized** = specific DNA near prophage |
| **Conjugation** | Direct cell-to-cell transfer via **sex pilus** (F plasmid / Hfr). Requires physical contact |
| **Transposition** | Movement of **transposons** ("jumping genes") within or between DNA molecules |

> **DAT Tip:** Mnemonic for bacterial gene transfer: "**TransForMation = Free/naKed DNA**", "**TransDuction = phage/viruD**", "**ConJugation = physical Junction/sex pilus**"

## Bacterial Growth

### Growth Curve Phases

| Phase | Description |
|-------|------------|
| **Lag phase** | Bacteria adapt to medium; synthesize enzymes; NO cell division |
| **Log (exponential) phase** | Rapid, exponential growth; most susceptible to antibiotics |
| **Stationary phase** | Growth rate = death rate; nutrients depleted; waste accumulates |
| **Death (decline) phase** | Death rate > growth rate; nutrients exhausted |

## Antibiotics & Their Targets

| Target | Antibiotic Class | Examples |
|--------|-----------------|----------|
| **Cell wall synthesis** | Beta-lactams | Penicillin, cephalosporins, carbapenems |
| **Cell wall synthesis** | Glycopeptides | Vancomycin |
| **30S ribosome** | Aminoglycosides | Gentamicin, streptomycin |
| **30S ribosome** | Tetracyclines | Tetracycline, doxycycline |
| **50S ribosome** | Macrolides | Erythromycin, azithromycin |
| **50S ribosome** | Chloramphenicol | Chloramphenicol |
| **DNA replication** | Fluoroquinolones | Ciprofloxacin (inhibits DNA gyrase/topoisomerase) |
| **RNA synthesis** | Rifamycins | Rifampin (inhibits RNA polymerase) |
| **Folate synthesis** | Sulfonamides | Sulfamethoxazole (inhibits dihydropteroate synthase) |
| **Cell membrane** | Polymyxins | Polymyxin B, colistin |

> **High-Yield DAT Tip:** Antibiotics that target **70S (30S + 50S) ribosomes** work on bacteria but NOT human cells (which have 80S ribosomes). This is the basis of **selective toxicity**. Beta-lactams inhibit transpeptidase (penicillin-binding proteins), which cross-links peptidoglycan.

## Antibiotic Resistance Mechanisms

| Mechanism | Example |
|-----------|---------|
| **Enzymatic degradation** | Beta-lactamase breaks down penicillin |
| **Target modification** | Altered penicillin-binding proteins (MRSA) |
| **Efflux pumps** | Pump antibiotic out of cell (tetracycline resistance) |
| **Decreased permeability** | Porin mutations reduce drug entry (Gram-negatives) |
| **Bypass pathways** | Alternative metabolic pathway avoids drug target |
`,
        keyTerms: [
          { term: "Gram-Positive", definition: "Bacteria with thick peptidoglycan wall that retains crystal violet stain (appears purple)" },
          { term: "Gram-Negative", definition: "Bacteria with thin peptidoglycan and outer membrane containing LPS (appears pink)" },
          { term: "Endotoxin (LPS)", definition: "Lipopolysaccharide in Gram-negative outer membrane; Lipid A triggers fever and septic shock" },
          { term: "Endospore", definition: "Dormant survival structure formed by Bacillus and Clostridium; resistant to extreme conditions" },
          { term: "Conjugation", definition: "Direct transfer of DNA between bacteria via sex pilus" },
          { term: "Transformation", definition: "Uptake of free naked DNA from the environment" },
          { term: "Transduction", definition: "Bacteriophage-mediated transfer of DNA between bacteria" },
          { term: "Binary Fission", definition: "Asexual reproduction in bacteria; single cell divides into two identical daughter cells" },
        ],
      },
      {
        slug: "viruses-fungi-parasites",
        title: "Viruses, Fungi & Parasites",
        content: `# Viruses, Fungi & Parasites

Understanding the diversity of infectious agents beyond bacteria is essential for the DAT. Viruses, fungi, and parasites differ fundamentally in structure, replication, and treatment strategies.

## Viruses

Viruses are **obligate intracellular parasites** — they CANNOT replicate outside a host cell. They are **NOT considered living organisms** because they lack ribosomes, do not carry out metabolism, and cannot reproduce independently.

### Viral Structure

| Component | Description |
|-----------|------------|
| **Genome** | DNA or RNA (never both); single-stranded (ss) or double-stranded (ds); linear or circular |
| **Capsid** | Protein coat surrounding the genome; made of **capsomeres** |
| **Envelope** | Lipid bilayer derived from host cell membrane (some viruses only) |
| **Symmetry** | **Icosahedral** (20-sided, e.g., adenovirus), **Helical** (e.g., tobacco mosaic virus), or **Complex** (e.g., bacteriophage) |

### Viral Classification by Genome

| Genome Type | Examples |
|-------------|---------|
| **dsDNA** | Herpes, Adenovirus, Poxvirus, Bacteriophage T4 |
| **ssDNA** | Parvovirus |
| **dsRNA** | Reovirus (rotavirus) |
| **+ssRNA** (sense) | Coronavirus, Rhinovirus, HIV (retrovirus), Poliovirus — acts directly as mRNA |
| **-ssRNA** (antisense) | Influenza, Ebola, Rabies — must be converted to +sense by RNA-dependent RNA polymerase |

> **High-Yield DAT Tip:** **+ssRNA** can be directly translated by host ribosomes (it IS the mRNA). **-ssRNA** must first be transcribed into +ssRNA by the virus's own **RNA-dependent RNA polymerase (RdRp)**, which it must carry in its virion.

### Viral Replication Cycles

**Lytic Cycle (Virulent Phages):**
1. **Attachment** — virus binds to host cell receptor
2. **Penetration/Entry** — viral genome enters cell
3. **Biosynthesis** — host machinery makes viral components
4. **Assembly** — new virions are assembled
5. **Lysis/Release** — host cell bursts, releasing new virions

**Lysogenic Cycle (Temperate Phages):**
1. Viral DNA integrates into host chromosome as a **prophage**
2. Prophage replicates with host DNA during cell division
3. Can remain dormant for many generations
4. Environmental stress triggers switch to **lytic cycle**

> **DAT Tip:** Temperate phages can switch between lysogenic and lytic cycles. A classic example is **bacteriophage lambda**. The integrated viral DNA is called a **prophage** (in bacteria) or **provirus** (in eukaryotes, e.g., HIV).

### Retroviruses (HIV)

- Genome: **+ssRNA** (two copies)
- Carry **reverse transcriptase** — converts RNA to DNA
- Viral DNA integrates into host genome as a **provirus**
- HIV infects **CD4+ T-helper cells** → destroys immune system → AIDS

**Replication steps:**
1. +ssRNA → dsDNA (reverse transcriptase)
2. dsDNA integrates into host chromosome (integrase)
3. Host RNA polymerase transcribes provirus → viral mRNA and new genomic RNA
4. New virions assemble and bud from host cell

### Prions

- **NOT viruses** — they are misfolded proteins (no nucleic acid)
- **PrP^Sc** (scrapie form) converts normal **PrP^C** into the misfolded form
- Cause **transmissible spongiform encephalopathies**: mad cow disease (BSE), Creutzfeldt-Jakob disease (CJD), kuru
- Resistant to heat, UV, and chemical sterilization
- Cannot be destroyed by autoclaving under normal conditions

## Fungi

Fungi are **eukaryotic** organisms with **cell walls made of chitin**. They are heterotrophs that obtain nutrition by **absorption** (secreting enzymes extracellularly and absorbing digested nutrients).

### Fungal vs. Bacterial vs. Animal Cells

| Feature | Fungi | Bacteria | Animal Cells |
|---------|-------|----------|-------------|
| **Cell type** | Eukaryotic | Prokaryotic | Eukaryotic |
| **Cell wall** | **Chitin** | Peptidoglycan | None |
| **Membrane sterol** | **Ergosterol** | None (except *Mycoplasma*) | Cholesterol |
| **Ribosomes** | 80S | 70S | 80S |
| **Nucleus** | Yes | No | Yes |

> **High-Yield DAT Tip:** Fungal cell membranes contain **ergosterol** instead of cholesterol. Antifungal drugs like **amphotericin B** bind ergosterol to form pores, and **azoles** (fluconazole, ketoconazole) inhibit ergosterol synthesis. This selective targeting is why these drugs work against fungi but not human cells.

### Types of Fungi

| Type | Description | Example |
|------|------------|---------|
| **Yeasts** | Unicellular; reproduce by **budding** | *Saccharomyces*, *Candida* |
| **Molds** | Multicellular; form **hyphae** (filaments) and **mycelia** (networks) | *Aspergillus*, *Penicillium* |
| **Dimorphic fungi** | Yeast at **37 degrees C** (body temp); mold at **25 degrees C** (room temp) | *Histoplasma*, *Blastomyces*, *Coccidioides* |

**Mnemonic for dimorphic fungi:** "**Mold in the Cold, Yeast in the Heat**" — at 25 degrees C they are molds, at 37 degrees C they become yeasts.

### Fungal Reproduction
- **Asexual:** Budding (yeasts), spore formation (conidia), fragmentation of hyphae
- **Sexual:** Involves fusion of hyphae from compatible mating types → formation of sexual spores (zygospores, ascospores, basidiospores)

## Parasites

Parasites are organisms that live on or in a host and benefit at the host's expense. For the DAT, focus on the major categories:

### Protozoa (Unicellular Eukaryotic Parasites)

| Organism | Disease | Transmission | Key Feature |
|----------|---------|-------------|-------------|
| *Plasmodium* | **Malaria** | *Anopheles* mosquito | Infects RBCs; cyclic fevers |
| *Entamoeba histolytica* | Amoebic dysentery | Fecal-oral (contaminated water) | Pseudopod movement |
| *Giardia lamblia* | Giardiasis | Fecal-oral (contaminated water) | Flagellated; "face-like" trophozoite |
| *Trypanosoma* | African sleeping sickness | Tsetse fly | Flagellated; antigenic variation to evade immune system |
| *Toxoplasma gondii* | Toxoplasmosis | Cat feces; undercooked meat | Dangerous in pregnancy (congenital defects) |

### Helminths (Parasitic Worms)

| Type | Examples | Key Features |
|------|----------|-------------|
| **Nematodes** (roundworms) | *Ascaris*, hookworm, pinworm | Cylindrical body; complete digestive tract |
| **Cestodes** (tapeworms) | *Taenia* | Flat, segmented (proglottids); scolex attachment; NO digestive tract |
| **Trematodes** (flukes) | *Schistosoma* | Flat, leaf-shaped; complex life cycles with snail intermediate hosts |

## Immune Evasion Strategies

Pathogens have evolved numerous strategies to evade the host immune system:

| Strategy | Organism | Mechanism |
|----------|----------|-----------|
| **Antigenic variation** | *Trypanosoma*, influenza | Constantly change surface proteins |
| **Intracellular hiding** | *Mycobacterium tuberculosis*, viruses | Hide inside host cells, away from antibodies |
| **Capsule** | *Streptococcus pneumoniae* | Polysaccharide capsule prevents phagocytosis |
| **Biofilm formation** | *Pseudomonas*, *Staphylococcus* | Extracellular matrix protects colony from immune cells and antibiotics |
| **Destroying immune cells** | HIV | Infects and kills CD4+ T-helper cells |
| **Inhibiting complement** | Various bacteria | Produce proteins that block complement cascade |
| **Molecular mimicry** | *Streptococcus pyogenes* | Surface antigens resemble host proteins (can lead to rheumatic fever) |

> **High-Yield DAT Tip:** **Antigenic variation** is the strategy used by influenza (antigenic drift = minor mutations; antigenic shift = major reassortment of genome segments, causes pandemics) and *Trypanosoma* (variable surface glycoproteins). This is why we need a new flu vaccine every year.
`,
        keyTerms: [
          { term: "Obligate Intracellular Parasite", definition: "An organism (like a virus) that can only replicate inside a host cell" },
          { term: "Capsid", definition: "Protein coat surrounding a viral genome, made of capsomeres" },
          { term: "Lysogeny", definition: "Viral DNA integrates into host genome as a prophage and replicates passively" },
          { term: "Reverse Transcriptase", definition: "Retroviral enzyme that synthesizes DNA from an RNA template" },
          { term: "Prion", definition: "Misfolded protein (PrP^Sc) that causes transmissible spongiform encephalopathies; no nucleic acid" },
          { term: "Chitin", definition: "Polysaccharide that forms the cell wall of fungi" },
          { term: "Ergosterol", definition: "Sterol in fungal cell membranes (equivalent to cholesterol in animals); target of antifungals" },
          { term: "Antigenic Variation", definition: "Pathogen strategy of changing surface proteins to evade immune recognition" },
        ],
      },
    ],
    questions: [
      {
        stem: "A Gram-negative bacterium is distinguished from a Gram-positive bacterium by the presence of:",
        choices: [
          { label: "A", text: "A thick peptidoglycan layer", isCorrect: false },
          { label: "B", text: "Teichoic acids in the cell wall", isCorrect: false },
          { label: "C", text: "An outer membrane containing lipopolysaccharide (LPS)", isCorrect: true },
          { label: "D", text: "Ribosomes with 80S subunits", isCorrect: false },
          { label: "E", text: "A capsule made of peptidoglycan", isCorrect: false },
        ],
        explanation: "**Gram-negative** bacteria have a unique **outer membrane** containing **lipopolysaccharide (LPS/endotoxin)**. This outer membrane is absent in Gram-positive bacteria. Gram-positive bacteria have a thick peptidoglycan layer and teichoic acids. Both Gram-positive and Gram-negative bacteria have 70S ribosomes.",
        difficulty: 1,
        tags: ["bacteria", "Gram staining"],
      },
      {
        stem: "Which method of horizontal gene transfer in bacteria requires direct cell-to-cell contact?",
        choices: [
          { label: "A", text: "Transformation", isCorrect: false },
          { label: "B", text: "Transduction", isCorrect: false },
          { label: "C", text: "Conjugation", isCorrect: true },
          { label: "D", text: "Transposition", isCorrect: false },
          { label: "E", text: "Binary fission", isCorrect: false },
        ],
        explanation: "**Conjugation** requires direct physical contact between two bacterial cells via a **sex pilus** (encoded by the F plasmid). DNA is transferred from the donor (F+) to the recipient (F-). Transformation involves uptake of free DNA from the environment. Transduction uses bacteriophages as vectors. Binary fission is asexual reproduction, not gene transfer.",
        difficulty: 1,
        tags: ["bacterial genetics", "gene transfer"],
      },
      {
        stem: "A virus with a -ssRNA genome must carry which enzyme in its virion?",
        choices: [
          { label: "A", text: "DNA polymerase", isCorrect: false },
          { label: "B", text: "Reverse transcriptase", isCorrect: false },
          { label: "C", text: "RNA-dependent RNA polymerase", isCorrect: true },
          { label: "D", text: "Helicase", isCorrect: false },
          { label: "E", text: "Integrase", isCorrect: false },
        ],
        explanation: "A **-ssRNA** (negative-sense) genome is complementary to mRNA and cannot be directly translated. The virus must carry its own **RNA-dependent RNA polymerase (RdRp)** to convert the -ssRNA into +ssRNA (mRNA) that can be translated by host ribosomes. +ssRNA viruses do NOT need to carry this enzyme because their genome can be directly translated. Reverse transcriptase is used by retroviruses (which have +ssRNA but replicate through a DNA intermediate).",
        difficulty: 3,
        tags: ["virology", "viral replication"],
      },
      {
        stem: "Antifungal drugs like fluconazole target ergosterol synthesis. Why do these drugs selectively affect fungi but not human cells?",
        choices: [
          { label: "A", text: "Human cells do not have cell membranes", isCorrect: false },
          { label: "B", text: "Human cell membranes contain cholesterol instead of ergosterol", isCorrect: true },
          { label: "C", text: "Fungi have 70S ribosomes that are different from human ribosomes", isCorrect: false },
          { label: "D", text: "Human cells have cell walls made of cellulose", isCorrect: false },
          { label: "E", text: "Fungi are prokaryotic and use different metabolic pathways", isCorrect: false },
        ],
        explanation: "Fungal cell membranes contain **ergosterol** while human cell membranes contain **cholesterol**. Azole antifungals (fluconazole, ketoconazole) inhibit the enzyme that synthesizes ergosterol (lanosterol 14-alpha-demethylase), disrupting the fungal membrane without affecting cholesterol synthesis in human cells. This is the basis of **selective toxicity**. Note: fungi ARE eukaryotic and have 80S ribosomes, just like human cells.",
        difficulty: 2,
        tags: ["fungi", "antifungals", "selective toxicity"],
      },
      {
        stem: "Which of the following correctly describes a prion?",
        choices: [
          { label: "A", text: "A small RNA molecule that causes disease", isCorrect: false },
          { label: "B", text: "A virus that lacks an envelope", isCorrect: false },
          { label: "C", text: "A misfolded protein that converts normal proteins to the abnormal form", isCorrect: true },
          { label: "D", text: "A bacterium that lacks a cell wall", isCorrect: false },
          { label: "E", text: "A parasite that lives inside red blood cells", isCorrect: false },
        ],
        explanation: "A **prion** is a misfolded version of a normal cellular protein (PrP^C → PrP^Sc). The misfolded prion protein acts as a template, converting normal PrP^C proteins into the pathogenic PrP^Sc conformation. Prions contain **NO nucleic acid** (no DNA or RNA), making them unique among infectious agents. They cause transmissible spongiform encephalopathies such as Creutzfeldt-Jakob disease (CJD), mad cow disease (BSE), and kuru.",
        difficulty: 2,
        tags: ["prions", "infectious agents"],
      },
    ],
  },
  {
    slug: "cardiovascular-respiratory",
    title: "Cardiovascular & Respiratory",
    description: "Heart anatomy, cardiac cycle, blood vessels, gas exchange, hemoglobin",
    estimatedMinutes: 45,
    lessons: [
      {
        slug: "cardiovascular-system",
        title: "Cardiovascular System",
        content: `# Cardiovascular System

The cardiovascular system is one of the most heavily tested organ systems on the DAT. You need to know heart anatomy, the cardiac cycle, blood vessel structure, and blood pressure regulation.

## Heart Anatomy

The heart is a **four-chambered muscular pump** made primarily of **cardiac muscle** (myocardium). It is enclosed in the **pericardium** (protective sac).

### Chambers and Great Vessels

| Chamber | Receives Blood From | Sends Blood To |
|---------|-------------------|----------------|
| **Right Atrium (RA)** | Superior & inferior vena cava (deoxygenated blood from body) | Right ventricle (through tricuspid valve) |
| **Right Ventricle (RV)** | Right atrium | Pulmonary arteries (to lungs via pulmonary semilunar valve) |
| **Left Atrium (LA)** | Pulmonary veins (oxygenated blood from lungs) | Left ventricle (through bicuspid/mitral valve) |
| **Left Ventricle (LV)** | Left atrium | Aorta (to body via aortic semilunar valve) |

> **High-Yield DAT Tip:** The **left ventricle** has the **thickest walls** because it must pump blood to the entire body (systemic circulation) at high pressure. The right ventricle only pumps to the lungs (pulmonary circulation) at lower pressure.

### Heart Valves

| Valve | Location | Type | Prevents backflow into |
|-------|----------|------|----------------------|
| **Tricuspid** | RA → RV | Atrioventricular (AV) | Right atrium |
| **Bicuspid (Mitral)** | LA → LV | Atrioventricular (AV) | Left atrium |
| **Pulmonary semilunar** | RV → pulmonary artery | Semilunar | Right ventricle |
| **Aortic semilunar** | LV → aorta | Semilunar | Left ventricle |

**Heart sounds:**
- **S1 ("lub")** = AV valves closing (beginning of systole)
- **S2 ("dub")** = semilunar valves closing (beginning of diastole)

### Blood Flow Path (Complete Circuit)

**Mnemonic: "Blood goes to Lungs and Back, then to Body and Back"**

Body → **Vena cava** → RA → Tricuspid → RV → Pulmonary valve → **Pulmonary arteries** → Lungs (gas exchange) → **Pulmonary veins** → LA → Mitral → LV → Aortic valve → **Aorta** → Body

> **DAT Tip:** **Pulmonary arteries carry DEoxygenated blood** (the only arteries that do). **Pulmonary veins carry Oxygenated blood** (the only veins that do). Arteries = AWAY from heart; Veins = toward heart.

## The Cardiac Cycle

The cardiac cycle consists of **systole** (contraction) and **diastole** (relaxation).

| Phase | Atria | Ventricles | Valves | Event |
|-------|-------|------------|--------|-------|
| **Atrial systole** | Contracting | Relaxed | AV valves open, semilunar closed | Blood pushed from atria into ventricles |
| **Isovolumetric contraction** | Relaxed | Contracting | ALL valves closed | Ventricles build pressure (volume constant) |
| **Ventricular ejection** | Relaxed | Contracting | AV closed, semilunar open | Blood ejected into arteries |
| **Isovolumetric relaxation** | Relaxed | Relaxing | ALL valves closed | Ventricles relax, pressure drops (volume constant) |
| **Passive filling** | Relaxed | Relaxed | AV open, semilunar closed | Blood flows passively from atria to ventricles |

### Cardiac Output

- **Cardiac Output (CO)** = Heart Rate (HR) x Stroke Volume (SV)
- CO = volume of blood pumped per minute (~5 L/min at rest)
- **Stroke volume** = End Diastolic Volume (EDV) - End Systolic Volume (ESV)

**Factors affecting stroke volume:**
- **Preload** — degree of ventricular stretch before contraction (related to EDV). Increased venous return → increased preload → increased SV (**Frank-Starling Law**)
- **Contractility** — strength of ventricular contraction (increased by sympathetic stimulation, epinephrine)
- **Afterload** — resistance the ventricle must overcome to eject blood (related to arterial blood pressure)

> **High-Yield DAT Tip:** The **Frank-Starling Law** states that the heart pumps more forcefully when stretched more (up to a limit). More blood in = more blood out. This is analogous to stretching a rubber band — the more you stretch it, the more forcefully it snaps back.

## Cardiac Conduction System

The heart generates its own electrical impulses — it is **myogenic** (self-excitable).

**Conduction pathway:**
1. **SA node** (sinoatrial node) — **pacemaker** of the heart; located in the right atrium; sets heart rate (~72 bpm)
2. **AV node** (atrioventricular node) — slight delay (~0.1 sec) allows atria to empty before ventricles contract
3. **Bundle of His** — conducts impulse from AV node down the interventricular septum
4. **Left and right bundle branches** — split along the septum
5. **Purkinje fibers** — rapidly spread impulse throughout ventricular myocardium → coordinated contraction

### Autonomic Regulation of Heart Rate

| Division | Effect on HR | Neurotransmitter | Receptor |
|----------|-------------|-----------------|----------|
| **Sympathetic** | Increases HR (tachycardia) | Norepinephrine | Beta-1 adrenergic |
| **Parasympathetic** | Decreases HR (bradycardia) | Acetylcholine | Muscarinic (M2) |

## Blood Vessels

| Vessel Type | Wall Structure | Function |
|-------------|---------------|----------|
| **Arteries** | Thick, muscular, elastic walls | Carry blood AWAY from heart at high pressure |
| **Arterioles** | Smooth muscle walls; regulate resistance | **Major site of blood pressure regulation** (vasoconstriction/vasodilation) |
| **Capillaries** | Single endothelial cell layer | **Gas exchange, nutrient/waste exchange** (thin walls for diffusion) |
| **Venules** | Thin walls; converge to form veins | Collect blood from capillaries |
| **Veins** | Thin walls; contain **valves** | Return blood to heart at low pressure; valves prevent backflow |

> **DAT Tip:** Veins have **valves** and rely on **skeletal muscle contraction** (skeletal muscle pump) and the **respiratory pump** to help return blood to the heart. Varicose veins result from incompetent valves.

## Blood Pressure

**Blood Pressure = Cardiac Output x Total Peripheral Resistance (TPR)**
- BP = CO x TPR
- Systolic pressure: peak pressure during ventricular contraction (~120 mmHg)
- Diastolic pressure: lowest pressure during ventricular relaxation (~80 mmHg)

### Blood Pressure Regulation

| Mechanism | Trigger | Response |
|-----------|---------|----------|
| **Baroreceptors** (aortic arch, carotid sinus) | Detect changes in BP | Short-term autonomic adjustments to HR and vessel tone |
| **RAAS** (Renin-Angiotensin-Aldosterone System) | Low BP / low Na+ | Renin → Angiotensin I → ACE → Angiotensin II (vasoconstriction + aldosterone release → Na+ retention → water retention → increased BP) |
| **ADH (Vasopressin)** | High osmolarity / low blood volume | Water reabsorption in kidney collecting ducts → increased blood volume → increased BP |
| **ANP** (Atrial Natriuretic Peptide) | High blood pressure / atrial stretch | Promotes Na+ and water excretion → decreased blood volume → decreased BP |

## Blood Composition

- **Plasma** (~55% of blood): water, proteins (albumin, globulins, fibrinogen), electrolytes, glucose, hormones
- **Formed elements** (~45%): RBCs (erythrocytes), WBCs (leukocytes), platelets (thrombocytes)

**Hematocrit** = percentage of blood volume occupied by RBCs (~45%)
`,
        keyTerms: [
          { term: "Cardiac Output", definition: "Volume of blood pumped by the heart per minute; CO = HR x SV" },
          { term: "Frank-Starling Law", definition: "The heart's stroke volume increases with greater venous return (preload)" },
          { term: "SA Node", definition: "Sinoatrial node; the pacemaker of the heart located in the right atrium" },
          { term: "Systole", definition: "Phase of the cardiac cycle when heart chambers contract" },
          { term: "Diastole", definition: "Phase of the cardiac cycle when heart chambers relax and fill" },
          { term: "Arterioles", definition: "Small arteries that are the major site of peripheral resistance and blood pressure regulation" },
          { term: "RAAS", definition: "Renin-Angiotensin-Aldosterone System; raises blood pressure via vasoconstriction and sodium/water retention" },
          { term: "Baroreceptors", definition: "Pressure sensors in the aortic arch and carotid sinus that detect blood pressure changes" },
        ],
      },
      {
        slug: "respiratory-system",
        title: "Respiratory System & Gas Exchange",
        content: `# Respiratory System & Gas Exchange

The respiratory system works closely with the cardiovascular system to deliver oxygen to tissues and remove carbon dioxide. Understanding the mechanics of breathing, gas exchange, and hemoglobin is critical for the DAT.

## Respiratory Anatomy

### Upper Respiratory Tract
- **Nasal cavity** — warms, humidifies, and filters incoming air; lined with ciliated mucous membrane
- **Pharynx** — shared passageway for air and food
- **Larynx** — contains vocal cords; **epiglottis** covers larynx during swallowing to prevent aspiration

### Lower Respiratory Tract
- **Trachea** — reinforced with C-shaped cartilage rings; lined with ciliated pseudostratified columnar epithelium (mucociliary escalator)
- **Bronchi** — trachea branches into left and right primary bronchi
- **Bronchioles** — smaller branches; smooth muscle walls (no cartilage); site of bronchoconstriction/dilation
- **Alveoli** — tiny air sacs (~300 million per lung); site of **gas exchange**

### Alveolar Structure

| Cell Type | Function |
|-----------|----------|
| **Type I pneumocytes** | Thin, flat cells that form the gas exchange surface (~95% of alveolar surface) |
| **Type II pneumocytes** | Secrete **surfactant** — reduces surface tension, prevents alveolar collapse |
| **Alveolar macrophages** | Phagocytize pathogens and particles in alveoli (dust cells) |

> **High-Yield DAT Tip:** **Surfactant** is a phospholipid mixture (mainly **dipalmitoylphosphatidylcholine / DPPC**) secreted by Type II pneumocytes. It reduces surface tension, preventing small alveoli from collapsing. Premature infants may lack surfactant → **neonatal respiratory distress syndrome (NRDS)**.

## Mechanics of Breathing (Ventilation)

Breathing is driven by **pressure gradients** created by the diaphragm and intercostal muscles.

### Inspiration (Inhalation) — Active Process
1. **Diaphragm contracts** (flattens downward)
2. **External intercostals contract** (ribs move up and out)
3. Thoracic cavity volume **increases**
4. Intrapleural pressure **decreases** (becomes more negative)
5. Lungs expand → intrapulmonary pressure drops **below** atmospheric pressure
6. Air flows INTO lungs (down the pressure gradient)

### Expiration (Exhalation) — Passive at Rest
1. Diaphragm and external intercostals **relax**
2. Elastic recoil of lungs decreases thoracic volume
3. Intrapulmonary pressure rises **above** atmospheric pressure
4. Air flows OUT of lungs

**Forced expiration** (active): Internal intercostals and abdominal muscles contract

> **DAT Tip:** Normal inspiration is always **active** (requires muscle contraction). Normal expiration is **passive** (elastic recoil). Forced expiration uses internal intercostals and abdominal muscles (active).

### Lung Volumes and Capacities

| Term | Definition | Approximate Value |
|------|-----------|-------------------|
| **Tidal Volume (TV)** | Normal breath volume | ~500 mL |
| **Inspiratory Reserve (IRV)** | Extra air inspired beyond TV | ~3,000 mL |
| **Expiratory Reserve (ERV)** | Extra air expired beyond TV | ~1,200 mL |
| **Residual Volume (RV)** | Air remaining after maximal expiration (cannot be expelled) | ~1,200 mL |
| **Vital Capacity (VC)** | Maximum air exhaled after maximum inhalation (TV + IRV + ERV) | ~4,700 mL |
| **Total Lung Capacity (TLC)** | VC + RV | ~5,900 mL |
| **Dead space** | Air in conducting airways that does NOT participate in gas exchange | ~150 mL |

## Gas Exchange

### External Respiration (Lungs)
- O₂ diffuses from **alveoli → pulmonary capillary blood** (high PO₂ → low PO₂)
- CO₂ diffuses from **pulmonary capillary blood → alveoli** (high PCO₂ → low PCO₂)

### Internal Respiration (Tissues)
- O₂ diffuses from **capillary blood → tissues** (high PO₂ → low PO₂)
- CO₂ diffuses from **tissues → capillary blood** (high PCO₂ → low PCO₂)

**Key concept:** Gas exchange occurs by **simple diffusion** down partial pressure gradients across the **respiratory membrane** (alveolar epithelium + capillary endothelium + fused basement membranes).

### Partial Pressures of Gases

| Location | PO₂ (mmHg) | PCO₂ (mmHg) |
|----------|-----------|-------------|
| Alveolar air | 104 | 40 |
| Deoxygenated blood (entering lungs) | 40 | 46 |
| Oxygenated blood (leaving lungs) | 104 | 40 |
| Tissues (cells) | <40 | >46 |

## Oxygen Transport

~98.5% of O₂ is carried bound to **hemoglobin** (Hb) in red blood cells; ~1.5% is dissolved in plasma.

### Hemoglobin Structure
- Tetramer: **4 polypeptide subunits** (2 alpha + 2 beta in adult HbA)
- Each subunit contains a **heme group** with an **Fe²⁺ (iron)** ion that binds one O₂ molecule
- One hemoglobin molecule carries **up to 4 O₂ molecules**
- **Cooperative binding:** Binding of one O₂ increases affinity for the next O₂ (explains sigmoidal curve)

### Oxygen-Hemoglobin Dissociation Curve

The sigmoidal (S-shaped) curve shows the relationship between PO₂ and hemoglobin saturation.

**Right shift (decreased O₂ affinity — Hb releases more O₂ to tissues):**
- Increased PCO₂
- Increased H⁺ (decreased pH) — **Bohr effect**
- Increased temperature
- Increased **2,3-BPG** (bisphosphoglycerate)

**Left shift (increased O₂ affinity — Hb holds onto O₂):**
- Decreased PCO₂
- Decreased H⁺ (increased pH)
- Decreased temperature
- Decreased 2,3-BPG
- **Fetal hemoglobin (HbF)** — has higher O₂ affinity than adult HbA (left-shifted curve)
- **Carbon monoxide (CO)** — binds Hb with 200x greater affinity than O₂ (left-shifted, also reduces overall O₂ carrying capacity)

> **High-Yield DAT Tip:** The **Bohr effect** is the most tested concept here. In active tissues (high CO₂, low pH, high temp), hemoglobin releases MORE oxygen — the curve shifts RIGHT. Think: "**Right shift = Release O₂**". Exercising muscles benefit from the Bohr effect.

**Mnemonic for right shift:** "**CADET, face Right!**" — **C**O₂, **A**cid (low pH), **D**PG (2,3-BPG), **E**xercise, **T**emperature

## Carbon Dioxide Transport

CO₂ is transported in blood in three forms:

| Form | Percentage | Description |
|------|-----------|-------------|
| **Bicarbonate (HCO₃⁻)** | ~70% | CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ (catalyzed by **carbonic anhydrase** in RBCs) |
| **Carbaminohemoglobin** | ~23% | CO₂ binds directly to hemoglobin (at amino groups, NOT the heme iron) |
| **Dissolved CO₂** | ~7% | Dissolved in plasma |

### Chloride Shift
- When CO₂ enters RBCs and is converted to HCO₃⁻, the bicarbonate exits the RBC into plasma
- To maintain electrical neutrality, **Cl⁻ enters the RBC** (chloride shift)
- This process reverses in the lungs

## Respiratory Control

- **Medullary respiratory center** — sets the basic rhythm of breathing (dorsal respiratory group = inspiration; ventral respiratory group = forced breathing)
- **Pontine respiratory group** — smooths the transition between inhalation and exhalation
- **Central chemoreceptors** (medulla) — detect changes in **H⁺/CO₂** in cerebrospinal fluid; PRIMARY driver of breathing
- **Peripheral chemoreceptors** (carotid and aortic bodies) — detect changes in PO₂, PCO₂, and pH in blood; stimulate breathing when PO₂ drops significantly (<60 mmHg)

> **DAT Tip:** The PRIMARY stimulus for breathing is **CO₂ levels** (via H⁺ in CSF), NOT oxygen levels. Only when PO₂ drops very low (<60 mmHg) do peripheral chemoreceptors significantly drive ventilation.
`,
        keyTerms: [
          { term: "Alveoli", definition: "Tiny air sacs in the lungs where gas exchange occurs by simple diffusion" },
          { term: "Surfactant", definition: "Phospholipid mixture secreted by Type II pneumocytes that reduces surface tension in alveoli" },
          { term: "Hemoglobin", definition: "Oxygen-carrying protein in RBCs with 4 heme groups, each binding one O2 molecule" },
          { term: "Bohr Effect", definition: "Decreased hemoglobin-oxygen affinity at lower pH / higher CO2 (right shift of dissociation curve)" },
          { term: "Tidal Volume", definition: "Volume of air inhaled or exhaled in a normal breath (~500 mL)" },
          { term: "Vital Capacity", definition: "Maximum volume of air that can be exhaled after maximum inhalation (TV + IRV + ERV)" },
          { term: "Carbonic Anhydrase", definition: "Enzyme in RBCs that catalyzes: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-" },
          { term: "Residual Volume", definition: "Volume of air remaining in lungs after maximal expiration; cannot be measured by spirometry" },
        ],
      },
    ],
    questions: [
      {
        stem: "Blood entering the right atrium of the heart arrives via the:",
        choices: [
          { label: "A", text: "Pulmonary veins", isCorrect: false },
          { label: "B", text: "Aorta", isCorrect: false },
          { label: "C", text: "Pulmonary arteries", isCorrect: false },
          { label: "D", text: "Superior and inferior vena cava", isCorrect: true },
          { label: "E", text: "Coronary sinus only", isCorrect: false },
        ],
        explanation: "Deoxygenated blood returns from the body to the **right atrium** via the **superior vena cava** (from the upper body) and the **inferior vena cava** (from the lower body). Pulmonary veins carry oxygenated blood from the lungs to the LEFT atrium. The aorta carries oxygenated blood away from the left ventricle to the body.",
        difficulty: 1,
        tags: ["heart anatomy", "blood flow"],
      },
      {
        stem: "According to the Frank-Starling law, an increase in venous return will result in:",
        choices: [
          { label: "A", text: "Decreased stroke volume", isCorrect: false },
          { label: "B", text: "Decreased cardiac output", isCorrect: false },
          { label: "C", text: "Increased stroke volume", isCorrect: true },
          { label: "D", text: "Decreased heart rate", isCorrect: false },
          { label: "E", text: "Increased total peripheral resistance", isCorrect: false },
        ],
        explanation: "The **Frank-Starling law** states that increased venous return stretches the ventricle more (increased preload/EDV), leading to a more forceful contraction and **increased stroke volume**. More blood in = more blood out. This intrinsic mechanism allows the heart to match cardiac output to venous return without requiring neural input.",
        difficulty: 2,
        tags: ["cardiac physiology", "Frank-Starling"],
      },
      {
        stem: "Which of the following would cause a RIGHT shift in the oxygen-hemoglobin dissociation curve?",
        choices: [
          { label: "A", text: "Decreased temperature", isCorrect: false },
          { label: "B", text: "Decreased PCO₂", isCorrect: false },
          { label: "C", text: "Increased pH", isCorrect: false },
          { label: "D", text: "Increased 2,3-BPG concentration", isCorrect: true },
          { label: "E", text: "Fetal hemoglobin (HbF)", isCorrect: false },
        ],
        explanation: "A **right shift** of the oxygen-hemoglobin dissociation curve means decreased O₂ affinity (hemoglobin releases O₂ more readily). This is caused by increased 2,3-BPG, increased CO₂, increased temperature, and decreased pH (Bohr effect). Decreased temperature, decreased CO₂, increased pH, and fetal hemoglobin all cause a **left shift** (increased O₂ affinity). Mnemonic: **CADET, face Right** (CO₂, Acid, DPG, Exercise, Temperature).",
        difficulty: 2,
        tags: ["hemoglobin", "Bohr effect", "gas exchange"],
      },
      {
        stem: "Surfactant is secreted by which cell type in the alveoli?",
        choices: [
          { label: "A", text: "Type I pneumocytes", isCorrect: false },
          { label: "B", text: "Type II pneumocytes", isCorrect: true },
          { label: "C", text: "Alveolar macrophages", isCorrect: false },
          { label: "D", text: "Goblet cells", isCorrect: false },
          { label: "E", text: "Clara cells", isCorrect: false },
        ],
        explanation: "**Type II pneumocytes** (also called type II alveolar cells) secrete **surfactant**, a phospholipid mixture that reduces surface tension in the alveoli and prevents them from collapsing during expiration. **Type I pneumocytes** are thin, flat cells that form the gas exchange surface (~95% of alveolar surface area). Premature infants often lack sufficient surfactant, leading to neonatal respiratory distress syndrome.",
        difficulty: 1,
        tags: ["respiratory anatomy", "surfactant"],
      },
      {
        stem: "The PRIMARY chemical stimulus that drives normal resting ventilation is:",
        choices: [
          { label: "A", text: "Low blood oxygen levels (PO₂)", isCorrect: false },
          { label: "B", text: "High blood carbon dioxide levels (PCO₂)", isCorrect: true },
          { label: "C", text: "Low blood pH detected by peripheral chemoreceptors only", isCorrect: false },
          { label: "D", text: "Stretch receptors in the bronchioles", isCorrect: false },
          { label: "E", text: "Voluntary cortical input from the cerebrum", isCorrect: false },
        ],
        explanation: "The **primary stimulus** for breathing is **CO₂ levels**, specifically the resulting H⁺ concentration detected by **central chemoreceptors** in the medulla. CO₂ crosses the blood-brain barrier, is converted to H⁺ + HCO₃⁻ by carbonic anhydrase, and the H⁺ stimulates the respiratory center. Low PO₂ only becomes a significant stimulus when it falls below ~60 mmHg (detected by peripheral chemoreceptors in the carotid and aortic bodies).",
        difficulty: 3,
        tags: ["respiratory control", "chemoreceptors"],
      },
    ],
  },
  {
    slug: "digestive-excretory",
    title: "Digestive & Excretory",
    description: "GI tract, enzymes, liver, kidneys, nephron, acid-base balance",
    estimatedMinutes: 40,
    lessons: [
      {
        slug: "digestive-system",
        title: "Digestive System",
        content: `# Digestive System

The digestive system breaks down food into absorbable nutrients. For the DAT, you need to know the organs, secretions, enzymes, and absorption sites in detail.

## Overview: GI Tract Organization

The GI tract is a continuous tube from mouth to anus, with four tissue layers:

| Layer (inner → outer) | Description |
|-----------------------|-------------|
| **Mucosa** | Innermost; epithelium + lamina propria + muscularis mucosae; secretion and absorption |
| **Submucosa** | Connective tissue; blood vessels, nerves (**submucosal plexus / Meissner's plexus**) |
| **Muscularis externa** | Smooth muscle: inner circular + outer longitudinal layers; **myenteric plexus (Auerbach's)** between layers |
| **Serosa (Adventitia)** | Outermost; connective tissue covering |

> **High-Yield DAT Tip:** The **enteric nervous system** (ENS) is the "gut brain" — it functions independently of the CNS. **Meissner's plexus** controls secretions, **Auerbach's plexus** controls motility (peristalsis).

## Digestion by Region

### Mouth (Oral Cavity)
- **Mechanical digestion:** Teeth (mastication) and tongue
- **Chemical digestion:** **Salivary amylase** (ptyalin) begins starch digestion (starch → maltose)
- **Lingual lipase** begins fat digestion (minor role)
- Saliva has a **neutral to slightly alkaline pH (~6.5-7.5)** — optimal for salivary amylase
- **Bolus** formed → swallowed into esophagus

### Esophagus
- Muscular tube connecting pharynx to stomach
- **Peristalsis** (coordinated smooth muscle contractions) moves bolus
- **Upper esophageal sphincter** (skeletal muscle) and **lower esophageal sphincter / cardiac sphincter** (smooth muscle)
- No significant digestion or absorption occurs here

### Stomach
- Stores food, mixes with gastric juice, begins **protein digestion**
- **pH ~1.5-2** (highly acidic)

| Cell Type | Location | Secretion | Function |
|-----------|----------|-----------|----------|
| **Parietal cells** | Gastric glands (body/fundus) | **HCl** and **Intrinsic Factor** | HCl activates pepsinogen, kills bacteria; Intrinsic Factor needed for vitamin B12 absorption in ileum |
| **Chief cells** | Gastric glands (body/fundus) | **Pepsinogen** | Inactive zymogen; HCl converts it to **pepsin** (active protease) |
| **G cells** | Antrum | **Gastrin** (hormone) | Stimulates HCl secretion by parietal cells |
| **Mucous cells** | Throughout stomach | **Mucus + bicarbonate** | Protects stomach lining from acid/pepsin (mucosal barrier) |
| **D cells** | Antrum | **Somatostatin** | Inhibits gastrin and HCl release |

- **Pepsin** optimal pH: **~2** — it denatures at neutral pH
- Stomach churning produces **chyme** (acidic, semi-liquid mixture)

> **DAT Tip:** **Intrinsic Factor** from parietal cells is essential for **vitamin B12** absorption in the terminal ileum. Loss of parietal cells (e.g., autoimmune gastritis) → pernicious anemia (B12 deficiency).

### Small Intestine (Major Site of Digestion and Absorption)

Three regions: **Duodenum** → **Jejunum** → **Ileum**

- **Duodenum** = primary site of chemical digestion; receives pancreatic juice and bile
- **Jejunum** = primary site of nutrient absorption
- **Ileum** = absorbs bile salts and vitamin B12; contains Peyer's patches (lymphoid tissue)

**Structural adaptations for absorption:**
- **Circular folds** (plicae circulares) — increase surface area
- **Villi** — finger-like projections of mucosa
- **Microvilli** (brush border) — tiny projections on each epithelial cell → form the **brush border**
- Combined, these features increase surface area by **~600x**

### Key Hormones of Digestion

| Hormone | Source | Stimulus | Action |
|---------|--------|----------|--------|
| **Gastrin** | G cells (stomach antrum) | Protein in stomach, vagal stimulation | Stimulates HCl and pepsinogen secretion |
| **Secretin** | S cells (duodenum) | Acidic chyme entering duodenum | Stimulates **pancreatic bicarbonate** secretion; inhibits gastric acid |
| **CCK (Cholecystokinin)** | I cells (duodenum) | Fatty acids and amino acids in duodenum | Stimulates **pancreatic enzyme** secretion; stimulates **gallbladder contraction** (bile release); inhibits gastric emptying |
| **GIP (Gastric Inhibitory Peptide)** | K cells (duodenum) | Glucose and fat | Stimulates insulin release; inhibits gastric acid and motility |

> **High-Yield DAT Tip:** **Secretin** releases **bicarbonate** from the pancreas (neutralizes acidic chyme — think: Secretin = bicarbonate Solution). **CCK** releases **enzymes** from the pancreas AND contracts the gallbladder to release bile (think: CCK = Cholecystokinin = Contracts gallbladder + Catalytic enzymes).

### Pancreas (Exocrine Function)

The pancreas secretes **pancreatic juice** into the duodenum containing:

| Enzyme/Component | Substrate | Product |
|-----------------|-----------|---------|
| **Trypsin** (activated from trypsinogen by **enterokinase**) | Proteins | Peptides |
| **Chymotrypsin** (activated by trypsin) | Proteins | Peptides |
| **Carboxypeptidase** (activated by trypsin) | Peptides | Amino acids (cleaves from C-terminus) |
| **Pancreatic lipase** | Triglycerides | Monoglycerides + fatty acids |
| **Pancreatic amylase** | Starch | Maltose |
| **Nucleases** | DNA/RNA | Nucleotides |
| **Bicarbonate (HCO₃⁻)** | — | Neutralizes acidic chyme (raises pH to ~7-8) |

> **DAT Tip:** **Enterokinase** (enteropeptidase) is a brush border enzyme in the duodenum that activates **trypsinogen → trypsin**. Trypsin then activates all other pancreatic zymogens (chymotrypsinogen, procarboxypeptidase, etc.). This is a **cascade activation** system.

### Liver & Gallbladder

**Liver functions:**
- Produces **bile** (bile salts, cholesterol, bilirubin, phospholipids)
- **Detoxification** of drugs, alcohol, and toxins
- **Gluconeogenesis** and **glycogenolysis** (blood glucose regulation)
- Produces **plasma proteins** (albumin, clotting factors)
- **Urea synthesis** (converts toxic NH₃ → urea via the urea cycle)
- Stores vitamins (A, D, E, K, B12) and iron

**Bile:**
- Produced by hepatocytes, stored/concentrated in the **gallbladder**
- Bile salts **emulsify** fats — break large fat globules into smaller droplets (increases surface area for lipase)
- Bile is NOT an enzyme — it does not chemically digest fats, it emulsifies them
- **Enterohepatic circulation:** ~95% of bile salts are reabsorbed in the terminal ileum and returned to the liver

### Large Intestine (Colon)
- Absorbs **water**, **electrolytes (Na+, K+)**, and some **vitamins** (K, biotin produced by gut bacteria)
- Houses the **gut microbiome** (commensal bacteria)
- Forms and stores **feces**
- Regions: cecum → ascending → transverse → descending → sigmoid → rectum → anal canal

## Summary: Enzyme Quick Reference

| Substrate | Enzyme(s) | Source |
|-----------|----------|-------|
| **Starch** | Salivary amylase, Pancreatic amylase | Mouth, Pancreas |
| **Proteins** | Pepsin, Trypsin, Chymotrypsin | Stomach, Pancreas |
| **Fats** | Pancreatic lipase (+ bile emulsification) | Pancreas, Liver |
| **Peptides** | Carboxypeptidase, Aminopeptidase, Dipeptidase | Pancreas, Brush border |
| **Maltose** | Maltase | Brush border (small intestine) |
| **Sucrose** | Sucrase | Brush border |
| **Lactose** | Lactase | Brush border |
| **Nucleotides** | Nucleosidases, Phosphatases | Brush border |
`,
        keyTerms: [
          { term: "Pepsin", definition: "Protease in the stomach that digests proteins; active at pH ~2; activated from pepsinogen by HCl" },
          { term: "Parietal Cells", definition: "Stomach cells that secrete HCl and intrinsic factor" },
          { term: "Chief Cells", definition: "Stomach cells that secrete pepsinogen (inactive precursor of pepsin)" },
          { term: "CCK (Cholecystokinin)", definition: "Duodenal hormone that stimulates pancreatic enzyme release and gallbladder contraction" },
          { term: "Secretin", definition: "Duodenal hormone that stimulates pancreatic bicarbonate secretion to neutralize acidic chyme" },
          { term: "Bile", definition: "Emulsifier produced by the liver and stored in the gallbladder; bile salts break fat into droplets" },
          { term: "Enterokinase", definition: "Brush border enzyme that activates trypsinogen to trypsin, initiating the cascade of pancreatic enzyme activation" },
          { term: "Villi", definition: "Finger-like projections of the small intestinal mucosa that increase absorptive surface area" },
        ],
      },
      {
        slug: "excretory-system",
        title: "Excretory System & Acid-Base Balance",
        content: `# Excretory System & Acid-Base Balance

The kidneys are the primary excretory organs, responsible for filtering blood, regulating fluid balance, maintaining electrolyte homeostasis, and controlling acid-base balance. This is a high-yield topic for the DAT.

## Kidney Anatomy

- **Location:** Retroperitoneal (behind the peritoneum), one on each side of the spine
- **Structure:** Outer **cortex** → inner **medulla** (contains renal pyramids) → **renal pelvis** → **ureter** → **bladder** → **urethra**
- **Functional unit:** **Nephron** (~1 million per kidney)

### The Nephron

Each nephron has two main components:
1. **Renal corpuscle** — Bowman's capsule + glomerulus (filtration)
2. **Renal tubule** — PCT → Loop of Henle → DCT → Collecting duct (reabsorption & secretion)

| Nephron Segment | Location | Key Functions |
|----------------|----------|---------------|
| **Glomerulus** | Cortex | Filtration of blood (forms filtrate); fenestrated capillaries |
| **Bowman's Capsule** | Cortex | Collects glomerular filtrate |
| **Proximal Convoluted Tubule (PCT)** | Cortex | Reabsorbs ~65% of filtrate: glucose, amino acids, Na+, water, HCO₃⁻; secretes H+, drugs, toxins |
| **Descending Loop of Henle** | Medulla | Permeable to **water** (water reabsorbed); impermeable to solutes |
| **Ascending Loop of Henle** | Medulla → Cortex | Permeable to **solutes** (Na+, K+, Cl- reabsorbed); impermeable to water; creates medullary osmotic gradient |
| **Distal Convoluted Tubule (DCT)** | Cortex | Fine-tuning: reabsorbs Na+ (aldosterone); reabsorbs Ca²+ (PTH); secretes H+ and K+ |
| **Collecting Duct** | Cortex → Medulla | Water reabsorption regulated by **ADH**; final urine concentration |

> **High-Yield DAT Tip:** The descending limb of the Loop of Henle is permeable to **water** (water leaves). The ascending limb is permeable to **solutes** (NaCl leaves but water stays). Mnemonic: "**Descending = Dilutes surroundings (water leaves tubule)**" and "**Ascending = solutes Ascend out (NaCl pumped out)**"

### Filtration, Reabsorption, and Secretion

| Process | Definition | Location |
|---------|-----------|----------|
| **Filtration** | Fluid forced from blood into Bowman's capsule by hydrostatic pressure | Glomerulus |
| **Reabsorption** | Useful substances moved from tubule BACK into blood | PCT, Loop, DCT, Collecting duct |
| **Secretion** | Waste substances moved from blood INTO tubule | PCT, DCT |

**Glomerular Filtration Rate (GFR):**
- ~125 mL/min (~180 L/day)
- ~99% of filtrate is reabsorbed; only ~1-2 L of urine produced per day
- Measured clinically using **creatinine clearance** or **inulin clearance**

### Substances Handled by the Nephron

| Substance | Filtered? | Reabsorbed? | Secreted? | Notes |
|-----------|----------|------------|----------|-------|
| **Glucose** | Yes | Yes (PCT) — 100% | No | **Threshold:** if blood glucose exceeds ~180 mg/dL (transport maximum), glucose appears in urine (glucosuria — seen in diabetes) |
| **Amino acids** | Yes | Yes (PCT) — 100% | No | Active transport in PCT |
| **Na+** | Yes | Yes (PCT, ascending loop, DCT) | No | Aldosterone increases Na+ reabsorption in DCT/collecting duct |
| **Water** | Yes | Yes (PCT, descending loop, collecting duct) | No | ADH increases water reabsorption in collecting duct |
| **K+** | Yes | Yes (PCT) | Yes (DCT) | Aldosterone promotes K+ secretion in DCT |
| **H+** | Yes | No | Yes (PCT, DCT) | Important for acid-base balance |
| **Urea** | Yes | Partially (collecting duct) | Yes (thin loop) | Contributes to medullary osmotic gradient |
| **Creatinine** | Yes | No | Yes (PCT) | Used to measure GFR (not reabsorbed) |

## Hormonal Regulation of Kidney Function

| Hormone | Source | Stimulus | Action on Kidney |
|---------|--------|----------|-----------------|
| **ADH (Vasopressin)** | Posterior pituitary | High plasma osmolarity; low blood volume | Inserts **aquaporins** in collecting duct → water reabsorption → concentrated urine |
| **Aldosterone** | Adrenal cortex (zona glomerulosa) | Angiotensin II; high K+ | Increases Na+ reabsorption and K+ secretion in DCT/collecting duct |
| **ANP** | Atrial cardiomyocytes | Atrial stretch (high blood volume) | Decreases Na+ reabsorption → increases Na+ and water excretion → decreases blood volume |
| **PTH** | Parathyroid glands | Low blood Ca²+ | Increases Ca²+ reabsorption in DCT; increases phosphate excretion |
| **Renin** | Juxtaglomerular cells (kidney) | Low blood pressure; low Na+ | Cleaves angiotensinogen → angiotensin I (starts RAAS cascade) |

> **High-Yield DAT Tip:** **ADH** = water reabsorption (anti-diuretic hormone — "anti-peeing hormone"). **Aldosterone** = sodium reabsorption + potassium secretion. **No ADH** → diabetes insipidus (dilute urine, excessive urination). **Too much aldosterone** → hypertension (Na+ and water retention).

### The RAAS Pathway (Step by Step)

1. Low blood pressure or low Na+ detected by **juxtaglomerular (JG) cells**
2. JG cells release **renin** into blood
3. Renin cleaves **angiotensinogen** (from liver) → **angiotensin I**
4. **ACE** (angiotensin-converting enzyme, in lung capillaries) converts angiotensin I → **angiotensin II**
5. Angiotensin II effects:
   - **Vasoconstriction** → increases blood pressure
   - Stimulates **aldosterone** release from adrenal cortex → Na+ retention → water follows → increases blood volume
   - Stimulates **ADH** release → water reabsorption
   - Stimulates **thirst**

## Acid-Base Balance

The kidneys (along with the lungs and buffer systems) maintain blood pH within the narrow range of **7.35-7.45**.

### Buffer Systems

| Buffer | Components | Location |
|--------|-----------|----------|
| **Bicarbonate buffer** | H₂CO₃ / HCO₃⁻ | Most important ECF buffer |
| **Phosphate buffer** | H₂PO₄⁻ / HPO₄²⁻ | Important in urine and ICF |
| **Protein buffer** | Hemoglobin, albumin | Blood, ICF |

**Key equation:** CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻

### Acid-Base Disorders

| Disorder | pH | Primary Change | Cause | Compensation |
|----------|-----|---------------|-------|-------------|
| **Respiratory acidosis** | <7.35 | ↑ PCO₂ (hypoventilation) | COPD, respiratory depression | Kidneys retain HCO₃⁻ |
| **Respiratory alkalosis** | >7.45 | ↓ PCO₂ (hyperventilation) | Anxiety, high altitude | Kidneys excrete HCO₃⁻ |
| **Metabolic acidosis** | <7.35 | ↓ HCO₃⁻ | Diabetic ketoacidosis, renal failure, diarrhea | Lungs hyperventilate (blow off CO₂) |
| **Metabolic alkalosis** | >7.45 | ↑ HCO₃⁻ | Vomiting (loss of HCl), excess aldosterone | Lungs hypoventilate (retain CO₂) |

> **High-Yield DAT Tip:** The lungs compensate for METABOLIC disorders (by adjusting CO₂). The kidneys compensate for RESPIRATORY disorders (by adjusting HCO₃⁻). Compensation restores pH toward normal but rarely fully corrects it.

### Henderson-Hasselbalch Equation

**pH = pKa + log([HCO₃⁻] / [H₂CO₃])**

- Normal ratio of HCO₃⁻ to H₂CO₃ is **20:1** → pH 7.4
- Kidneys regulate the numerator (HCO₃⁻)
- Lungs regulate the denominator (CO₂ → H₂CO₃)
`,
        keyTerms: [
          { term: "Nephron", definition: "Functional unit of the kidney; consists of glomerulus, Bowman's capsule, PCT, Loop of Henle, DCT, and collecting duct" },
          { term: "Glomerular Filtration Rate (GFR)", definition: "Rate at which blood is filtered by the glomerulus; ~125 mL/min" },
          { term: "ADH (Vasopressin)", definition: "Hormone from posterior pituitary that increases water reabsorption in collecting duct via aquaporins" },
          { term: "Aldosterone", definition: "Adrenal cortex hormone that increases Na+ reabsorption and K+ secretion in the DCT" },
          { term: "RAAS", definition: "Renin-Angiotensin-Aldosterone System; cascade that raises blood pressure via vasoconstriction and fluid retention" },
          { term: "PCT (Proximal Convoluted Tubule)", definition: "Nephron segment that reabsorbs ~65% of filtrate including glucose, amino acids, Na+, and water" },
          { term: "Loop of Henle", definition: "Nephron segment creating the medullary osmotic gradient; descending limb permeable to water, ascending to solutes" },
          { term: "Henderson-Hasselbalch Equation", definition: "pH = pKa + log([HCO3-]/[H2CO3]); relates pH to bicarbonate and carbonic acid concentrations" },
        ],
      },
    ],
    questions: [
      {
        stem: "Which hormone stimulates the gallbladder to contract and release bile into the duodenum?",
        choices: [
          { label: "A", text: "Secretin", isCorrect: false },
          { label: "B", text: "Gastrin", isCorrect: false },
          { label: "C", text: "Cholecystokinin (CCK)", isCorrect: true },
          { label: "D", text: "Somatostatin", isCorrect: false },
          { label: "E", text: "GIP (Gastric Inhibitory Peptide)", isCorrect: false },
        ],
        explanation: "**CCK (Cholecystokinin)** is released by I cells in the duodenum in response to fats and amino acids. It stimulates **gallbladder contraction** (releasing bile for fat emulsification) and **pancreatic enzyme secretion**. **Secretin** stimulates pancreatic bicarbonate secretion. **Gastrin** stimulates HCl secretion. **Somatostatin** inhibits GI secretions.",
        difficulty: 1,
        tags: ["digestive hormones", "bile"],
      },
      {
        stem: "The brush border enzyme enterokinase (enteropeptidase) activates which pancreatic zymogen?",
        choices: [
          { label: "A", text: "Chymotrypsinogen", isCorrect: false },
          { label: "B", text: "Procarboxypeptidase", isCorrect: false },
          { label: "C", text: "Pepsinogen", isCorrect: false },
          { label: "D", text: "Trypsinogen", isCorrect: true },
          { label: "E", text: "Lipase", isCorrect: false },
        ],
        explanation: "**Enterokinase** (enteropeptidase) is found on the brush border of duodenal enterocytes. It converts **trypsinogen → trypsin**. Trypsin then activates all other pancreatic zymogens (chymotrypsinogen → chymotrypsin, procarboxypeptidase → carboxypeptidase, etc.). Pepsinogen is activated by HCl in the stomach, not by enterokinase. Lipase is secreted in its active form.",
        difficulty: 2,
        tags: ["pancreatic enzymes", "digestion"],
      },
      {
        stem: "In the nephron, which segment is permeable to water but NOT to solutes?",
        choices: [
          { label: "A", text: "Proximal convoluted tubule", isCorrect: false },
          { label: "B", text: "Thick ascending limb of the loop of Henle", isCorrect: false },
          { label: "C", text: "Descending limb of the loop of Henle", isCorrect: true },
          { label: "D", text: "Distal convoluted tubule", isCorrect: false },
          { label: "E", text: "Collecting duct", isCorrect: false },
        ],
        explanation: "The **descending limb** of the loop of Henle is permeable to **water** but impermeable to solutes. Water leaves the tubule by osmosis as the filtrate passes through the hypertonic medulla, concentrating the filtrate. The **ascending limb** is the opposite — permeable to solutes (Na+, K+, Cl- are reabsorbed) but impermeable to water. The PCT reabsorbs both water and solutes.",
        difficulty: 2,
        tags: ["nephron", "loop of Henle"],
      },
      {
        stem: "A patient with uncontrolled diabetes mellitus has rapid, deep breathing (Kussmaul breathing), blood pH of 7.25, low bicarbonate, and low PCO₂. This patient has:",
        choices: [
          { label: "A", text: "Respiratory acidosis with metabolic compensation", isCorrect: false },
          { label: "B", text: "Respiratory alkalosis", isCorrect: false },
          { label: "C", text: "Metabolic acidosis with respiratory compensation", isCorrect: true },
          { label: "D", text: "Metabolic alkalosis with respiratory compensation", isCorrect: false },
          { label: "E", text: "Combined respiratory and metabolic acidosis", isCorrect: false },
        ],
        explanation: "The patient has **metabolic acidosis** (low pH + low HCO₃⁻) from diabetic ketoacidosis (accumulation of ketone bodies). The body compensates by **hyperventilating** (Kussmaul breathing) to blow off CO₂ and raise pH. This is why PCO₂ is also low — it reflects respiratory **compensation**, not a primary respiratory disorder. The primary disturbance is metabolic (low HCO₃⁻), and the respiratory system is compensating.",
        difficulty: 3,
        tags: ["acid-base balance", "metabolic acidosis"],
      },
      {
        stem: "ADH (antidiuretic hormone) primarily acts on which part of the nephron?",
        choices: [
          { label: "A", text: "Glomerulus", isCorrect: false },
          { label: "B", text: "Proximal convoluted tubule", isCorrect: false },
          { label: "C", text: "Ascending loop of Henle", isCorrect: false },
          { label: "D", text: "Collecting duct", isCorrect: true },
          { label: "E", text: "Bowman's capsule", isCorrect: false },
        ],
        explanation: "**ADH (vasopressin)** is released from the posterior pituitary in response to high blood osmolarity or low blood volume. It acts primarily on the **collecting duct** by inserting **aquaporin-2 channels** into the apical membrane, increasing water reabsorption. Without ADH, the collecting duct is impermeable to water, resulting in dilute urine (as seen in **diabetes insipidus**).",
        difficulty: 1,
        tags: ["kidney hormones", "ADH", "nephron"],
      },
    ],
  },
  {
    slug: "nervous-endocrine",
    title: "Nervous & Endocrine",
    description: "CNS/PNS, action potentials, neurotransmitters, hormones, feedback loops",
    estimatedMinutes: 50,
    lessons: [
      {
        slug: "nervous-system",
        title: "Nervous System",
        content: `# Nervous System

The nervous system coordinates rapid responses to stimuli. The DAT heavily tests action potentials, neurotransmitter function, and the organization of the central and peripheral nervous systems.

## Organization of the Nervous System

| Division | Components |
|----------|-----------|
| **Central Nervous System (CNS)** | Brain + Spinal cord |
| **Peripheral Nervous System (PNS)** | Cranial nerves (12 pairs) + Spinal nerves (31 pairs) |

### PNS Subdivisions

| Division | Function | Further Divided Into |
|----------|----------|---------------------|
| **Sensory (Afferent)** | Carries signals FROM receptors TO CNS | Somatic sensory + Visceral sensory |
| **Motor (Efferent)** | Carries signals FROM CNS TO effectors | Somatic + Autonomic |

### Autonomic Nervous System (ANS)

| Feature | Sympathetic | Parasympathetic |
|---------|------------|-----------------|
| **Nickname** | "Fight or flight" | "Rest and digest" |
| **Preganglionic neurotransmitter** | Acetylcholine (ACh) | Acetylcholine (ACh) |
| **Postganglionic neurotransmitter** | **Norepinephrine (NE)** | **Acetylcholine (ACh)** |
| **Preganglionic fiber** | Short | Long |
| **Postganglionic fiber** | Long | Short |
| **Ganglia location** | Close to spinal cord (paravertebral chain) | Close to or within target organ |
| **Origin** | Thoracolumbar (T1-L2) | Craniosacral (CN III, VII, IX, X + S2-S4) |
| **Heart rate** | Increases (beta-1 receptors) | Decreases (muscarinic receptors) |
| **Bronchioles** | Dilates (beta-2) | Constricts |
| **Pupils** | Dilates (mydriasis) | Constricts (miosis) |
| **Digestion** | Inhibits | Stimulates |
| **Blood vessels** | Vasoconstriction (alpha-1) | No direct innervation of most vessels |

> **High-Yield DAT Tip:** Both sympathetic and parasympathetic preganglionic neurons release **ACh**. The difference is at the postganglionic synapse: sympathetic releases **norepinephrine** (except sweat glands → ACh), while parasympathetic releases **ACh**. Exception: the adrenal medulla acts as a modified sympathetic ganglion and releases **epinephrine** directly into the blood.

## Neurons

### Neuron Structure

| Part | Function |
|------|----------|
| **Cell body (soma)** | Contains nucleus and organelles; integrates signals |
| **Dendrites** | Receive incoming signals from other neurons |
| **Axon** | Carries action potential away from cell body toward target |
| **Axon hillock** | Trigger zone — where action potential is initiated if threshold is reached |
| **Myelin sheath** | Insulating lipid layer formed by Schwann cells (PNS) or oligodendrocytes (CNS); speeds conduction |
| **Nodes of Ranvier** | Gaps in myelin where ion channels cluster; enable **saltatory conduction** |
| **Synaptic terminals (boutons)** | Release neurotransmitters into the synapse |

### Types of Neurons

| Type | Function | Example |
|------|----------|---------|
| **Sensory (afferent)** | Carry signals from receptors → CNS | Pain receptors, photoreceptors |
| **Motor (efferent)** | Carry signals from CNS → effectors | Motor neurons to skeletal muscle |
| **Interneurons** | Connect sensory to motor neurons within CNS | Spinal cord relay neurons |

## The Action Potential

The action potential is an **all-or-nothing** electrical signal that propagates along the axon.

### Resting Membrane Potential
- Resting potential = **-70 mV** (inside of cell is negative relative to outside)
- Maintained by the **Na+/K+ ATPase** (3 Na+ out, 2 K+ in) and **K+ leak channels**
- At rest: high K+ inside, high Na+ outside

### Steps of the Action Potential

| Phase | Events | Channels |
|-------|--------|----------|
| **1. Resting state** | Membrane at -70 mV; voltage-gated channels closed | K+ leak channels open |
| **2. Depolarization** | Stimulus reaches **threshold (~-55 mV)** → voltage-gated Na+ channels open → Na+ rushes IN → membrane becomes positive (~+30 mV) | Na+ channels open |
| **3. Repolarization** | Na+ channels **inactivate**; voltage-gated K+ channels open → K+ rushes OUT → membrane returns toward resting potential | Na+ inactivated; K+ channels open |
| **4. Hyperpolarization (undershoot)** | K+ channels slow to close → membrane briefly dips below -70 mV (~-80 mV) | K+ channels closing slowly |
| **5. Return to resting** | Na+/K+ ATPase restores ion gradients; resting potential re-established | Leak channels maintain equilibrium |

> **High-Yield DAT Tip:** The action potential is **all-or-nothing**. If threshold is reached, a full action potential fires. If not, nothing happens. The STRENGTH of a stimulus is coded by **frequency** of action potentials (more stimulation = more frequent firing), NOT by the amplitude of individual action potentials.

### Refractory Periods
- **Absolute refractory period:** During depolarization/repolarization; Na+ channels inactivated; **NO new action potential possible** regardless of stimulus strength
- **Relative refractory period:** During hyperpolarization; a stronger-than-normal stimulus CAN trigger a new action potential

### Factors Affecting Conduction Velocity

| Factor | Effect |
|--------|--------|
| **Myelination** | Increases speed (saltatory conduction — AP jumps between nodes of Ranvier) |
| **Axon diameter** | Larger diameter = faster conduction (less internal resistance) |
| **Temperature** | Higher temperature = faster (up to a point) |

## Synaptic Transmission

### Chemical Synapse Steps
1. Action potential arrives at **synaptic terminal (bouton)**
2. **Voltage-gated Ca²+ channels** open → Ca²+ enters the terminal
3. Ca²+ triggers **exocytosis** of synaptic vesicles → neurotransmitter released into synaptic cleft
4. Neurotransmitter binds **receptors** on postsynaptic membrane
5. Postsynaptic response: **EPSP** (excitatory postsynaptic potential — depolarization) or **IPSP** (inhibitory postsynaptic potential — hyperpolarization)
6. Neurotransmitter removed by: **enzymatic degradation**, **reuptake**, or **diffusion**

> **DAT Tip:** **Calcium influx** into the presynaptic terminal is the trigger for neurotransmitter release. No calcium = no neurotransmitter release.

### Major Neurotransmitters

| Neurotransmitter | Type | Function | Key Facts |
|-----------------|------|----------|-----------|
| **Acetylcholine (ACh)** | Cholinergic | Muscle contraction (NMJ); parasympathetic NS | Degraded by **acetylcholinesterase**; botulinum toxin blocks release; curare blocks nicotinic receptors |
| **Norepinephrine (NE)** | Catecholamine | Sympathetic postganglionic; alertness | Alpha and beta adrenergic receptors |
| **Dopamine** | Catecholamine | Reward, movement, motivation | Deficiency → Parkinson's disease; excess → schizophrenia |
| **Serotonin (5-HT)** | Monoamine | Mood, sleep, appetite | SSRIs (antidepressants) block reuptake |
| **GABA** | Amino acid | **Major INHIBITORY** NT in brain | Benzodiazepines and barbiturates enhance GABA activity |
| **Glutamate** | Amino acid | **Major EXCITATORY** NT in brain | NMDA and AMPA receptors; excess → excitotoxicity |
| **Endorphins** | Neuropeptide | Pain modulation (natural opioids) | Released during exercise ("runner's high") |

## Reflex Arc

The simplest neural pathway — a rapid, involuntary response:
1. **Receptor** detects stimulus
2. **Sensory (afferent) neuron** carries signal to spinal cord
3. **Integration center** (interneuron in spinal cord) processes signal
4. **Motor (efferent) neuron** carries response signal to effector
5. **Effector** (muscle or gland) produces response

> **DAT Tip:** Reflexes are processed at the **spinal cord level** (not the brain), which is why they are so fast. The brain is informed afterward but does not initiate the reflex.

## Brain Regions

| Region | Function |
|--------|----------|
| **Cerebrum** | Higher-order thinking, voluntary movement, sensory processing, language, memory |
| **Cerebellum** | Coordination, balance, fine motor control (does NOT initiate movement) |
| **Brainstem** (midbrain, pons, medulla) | Vital functions: breathing, heart rate, blood pressure; cranial nerve nuclei |
| **Hypothalamus** | Homeostasis hub: temperature, hunger, thirst, circadian rhythms; controls pituitary gland |
| **Thalamus** | Sensory relay station (all senses except smell go through thalamus before reaching cortex) |
| **Limbic system** (amygdala, hippocampus) | Emotion (amygdala), memory formation (hippocampus) |
`,
        keyTerms: [
          { term: "Action Potential", definition: "All-or-nothing electrical signal propagating along an axon via sequential opening of Na+ and K+ channels" },
          { term: "Resting Membrane Potential", definition: "Voltage across the neuron membrane at rest (~-70 mV), maintained by Na+/K+ ATPase and K+ leak channels" },
          { term: "Myelin Sheath", definition: "Insulating lipid layer around axons; formed by Schwann cells (PNS) or oligodendrocytes (CNS)" },
          { term: "Saltatory Conduction", definition: "Rapid conduction where action potentials jump between Nodes of Ranvier on myelinated axons" },
          { term: "EPSP", definition: "Excitatory postsynaptic potential; depolarization that makes the neuron more likely to fire" },
          { term: "IPSP", definition: "Inhibitory postsynaptic potential; hyperpolarization that makes the neuron less likely to fire" },
          { term: "Acetylcholine", definition: "Neurotransmitter at neuromuscular junctions and parasympathetic synapses; degraded by acetylcholinesterase" },
          { term: "GABA", definition: "Gamma-aminobutyric acid; the major inhibitory neurotransmitter in the brain" },
        ],
      },
      {
        slug: "endocrine-system",
        title: "Endocrine System & Feedback Loops",
        content: `# Endocrine System & Feedback Loops

The endocrine system uses hormones to regulate long-term processes such as growth, metabolism, reproduction, and homeostasis. For the DAT, you must know the major glands, their hormones, and the feedback mechanisms that control them.

## Nervous vs. Endocrine System

| Feature | Nervous System | Endocrine System |
|---------|---------------|-----------------|
| **Signal type** | Electrical (action potentials) + chemical (neurotransmitters) | Chemical (hormones) |
| **Speed** | Fast (milliseconds) | Slow (seconds to hours) |
| **Duration** | Short-lived | Long-lasting |
| **Target** | Specific (single synapse) | Widespread (any cell with receptor) |
| **Transmission** | Via neurons (axons) | Via bloodstream |

## Hormone Types

| Type | Characteristics | Receptor Location | Examples |
|------|----------------|------------------|----------|
| **Peptide/Protein** | Water-soluble; cannot cross membrane; stored in vesicles | **Cell surface** (membrane receptors) → second messenger systems | Insulin, GH, ADH, oxytocin |
| **Steroid** | Lipid-soluble (made from cholesterol); cross membrane freely; NOT stored (made on demand) | **Intracellular** (nuclear receptors) → directly alter gene transcription | Cortisol, aldosterone, testosterone, estrogen, progesterone |
| **Amino acid derivatives** | Derived from tyrosine or tryptophan | Varies | Thyroid hormones (T3/T4), epinephrine, melatonin |

> **High-Yield DAT Tip:** **Peptide hormones** bind cell-surface receptors and use **second messenger systems** (cAMP, IP3, Ca²⁺). **Steroid hormones** are lipophilic, cross the cell membrane, bind **intracellular/nuclear receptors**, and directly activate gene transcription. Steroid hormones act slower but have longer-lasting effects.

### Second Messenger Systems

| Pathway | Mechanism |
|---------|-----------|
| **cAMP pathway** | Hormone binds receptor → activates **G-protein** → activates **adenylyl cyclase** → ATP → **cAMP** → activates **protein kinase A (PKA)** → cellular response |
| **IP3/DAG pathway** | Hormone binds receptor → activates **phospholipase C** → PIP₂ → **IP3** (releases Ca²⁺ from ER) + **DAG** (activates protein kinase C) |

## Major Endocrine Glands and Hormones

### Hypothalamus — "Master Regulator"
- Links nervous and endocrine systems
- Produces **releasing and inhibiting hormones** that control the anterior pituitary

| Hormone | Action |
|---------|--------|
| **GnRH** (Gonadotropin-Releasing Hormone) | Stimulates FSH and LH release |
| **TRH** (Thyrotropin-Releasing Hormone) | Stimulates TSH release |
| **CRH** (Corticotropin-Releasing Hormone) | Stimulates ACTH release |
| **GHRH** (Growth Hormone-Releasing Hormone) | Stimulates GH release |
| **Somatostatin (GHIH)** | Inhibits GH (and TSH) release |
| **Dopamine (PIH)** | Inhibits prolactin release |

### Anterior Pituitary (Adenohypophysis)

Produces and releases hormones in response to hypothalamic signals:

| Hormone | Target | Function |
|---------|--------|----------|
| **GH (Growth Hormone / Somatotropin)** | Liver, bones, muscles | Stimulates growth; liver produces **IGF-1** (insulin-like growth factor); increases blood glucose |
| **TSH (Thyroid-Stimulating Hormone)** | Thyroid | Stimulates T3/T4 production |
| **ACTH (Adrenocorticotropic Hormone)** | Adrenal cortex | Stimulates cortisol release |
| **FSH (Follicle-Stimulating Hormone)** | Gonads | Stimulates follicle development (females) and spermatogenesis (males) |
| **LH (Luteinizing Hormone)** | Gonads | Triggers ovulation (females); stimulates testosterone production (males, Leydig cells) |
| **Prolactin** | Mammary glands | Stimulates milk production |

> **DAT Tip:** Mnemonic for anterior pituitary hormones: "**FLAT PiG**" — **F**SH, **L**H, **A**CTH, **T**SH, **P**rolact**i**n, **G**H

### Posterior Pituitary (Neurohypophysis)

Does NOT produce hormones — **stores and releases** hormones made by the hypothalamus:

| Hormone | Function | Key Facts |
|---------|----------|-----------|
| **ADH (Vasopressin)** | Water reabsorption in collecting duct | Released in response to high osmolarity; deficiency → diabetes insipidus |
| **Oxytocin** | Uterine contractions during labor; milk let-down; social bonding | Positive feedback during labor (more contractions → more oxytocin → stronger contractions) |

### Thyroid Gland

| Hormone | Function | Key Facts |
|---------|----------|-----------|
| **T3 (Triiodothyronine)** | Increases metabolic rate; more biologically active form | Mostly converted from T4 in peripheral tissues |
| **T4 (Thyroxine)** | Increases metabolic rate; less active, longer half-life | Major secretory product of thyroid |
| **Calcitonin** | Lowers blood calcium (deposits Ca²⁺ into bone) | Secreted by **parafollicular C cells**; opposes PTH |

- **Hypothyroidism:** Low T3/T4 → weight gain, fatigue, cold intolerance, low metabolic rate
- **Hyperthyroidism (Graves' disease):** Excess T3/T4 → weight loss, anxiety, heat intolerance, exophthalmos

### Parathyroid Glands (4 glands behind thyroid)

| Hormone | Function |
|---------|----------|
| **PTH (Parathyroid Hormone)** | **Raises blood calcium**: (1) stimulates osteoclasts → bone resorption; (2) increases Ca²⁺ reabsorption in kidney DCT; (3) activates vitamin D → increases Ca²⁺ absorption in gut |

> **High-Yield DAT Tip:** **PTH raises calcium** (think: "**P**our **T**he **H**ot calcium"). **Calcitonin lowers calcium** (think: "calci-**tone** it down"). PTH and calcitonin are antagonistic.

### Adrenal Glands

**Adrenal Cortex (outer)** — steroid hormones:

| Zone | Hormone | Function | Mnemonic |
|------|---------|----------|----------|
| **Zona Glomerulosa** | **Aldosterone** (mineralocorticoid) | Na+ retention, K+ excretion, raises BP | **G**lomerulosa = **G**salt (salt) |
| **Zona Fasciculata** | **Cortisol** (glucocorticoid) | Raises blood glucose; anti-inflammatory; stress response | **F**asciculata = **F**sugar (sugar) |
| **Zona Reticularis** | **Androgens** (DHEA) | Weak male sex hormones (converted to testosterone/estrogen peripherally) | **R**eticularis = **R**sex (sex) |

> **DAT Tip:** Mnemonic for adrenal cortex zones (outside → inside): "**GFR**" — Glomerulosa, Fasciculata, Reticularis. Hormones: "**Salt, Sugar, Sex**" — Aldosterone, Cortisol, Androgens.

**Adrenal Medulla (inner):**
- Modified sympathetic ganglion
- Releases **epinephrine (80%)** and **norepinephrine (20%)** directly into blood
- "Fight or flight" response: increases HR, BP, blood glucose, bronchodilation

### Pancreas (Endocrine — Islets of Langerhans)

| Cell Type | Hormone | Function |
|-----------|---------|----------|
| **Alpha (α) cells** | **Glucagon** | Raises blood glucose: glycogenolysis, gluconeogenesis in liver |
| **Beta (β) cells** | **Insulin** | Lowers blood glucose: promotes glucose uptake (GLUT4 in muscle/adipose), glycogenesis, lipogenesis |
| **Delta (δ) cells** | **Somatostatin** | Inhibits both insulin and glucagon |

> **High-Yield DAT Tip:** **Insulin** is the ONLY hormone that **lowers** blood glucose. Multiple hormones raise it (glucagon, cortisol, epinephrine, GH). Type 1 diabetes = autoimmune destruction of beta cells (no insulin). Type 2 diabetes = insulin resistance.

## Feedback Loops

### Negative Feedback (Most Common)
- The product of a pathway **inhibits** earlier steps in the pathway
- Maintains homeostasis by keeping variables within a narrow range
- **Example — Thyroid axis:**
  - Hypothalamus → TRH → Anterior pituitary → TSH → Thyroid → T3/T4
  - High T3/T4 inhibits TRH and TSH release → less thyroid hormone produced

### Positive Feedback (Rare)
- The product of a pathway **amplifies/enhances** earlier steps
- Drives a process to completion (not homeostatic)
- **Examples:**
  - **Oxytocin during labor:** Uterine contractions → oxytocin release → stronger contractions → more oxytocin (until delivery)
  - **LH surge during ovulation:** Rising estrogen → triggers LH surge → ovulation
  - **Blood clotting cascade:** Platelets release factors → recruit more platelets → larger clot

### Hormonal Axis Examples (Negative Feedback)

| Axis | Hypothalamus | Anterior Pituitary | Target Gland | End Hormone |
|------|-------------|-------------------|--------------|-------------|
| **HPT (Thyroid)** | TRH | TSH | Thyroid | T3/T4 |
| **HPA (Adrenal)** | CRH | ACTH | Adrenal cortex | Cortisol |
| **HPG (Gonadal)** | GnRH | FSH/LH | Gonads | Testosterone / Estrogen |

In each axis, the end hormone feeds back to **inhibit** both the hypothalamus and the anterior pituitary (negative feedback).

> **High-Yield DAT Tip:** If a question asks what happens when you administer exogenous thyroid hormone (T3/T4), the answer is: TSH and TRH levels will **decrease** due to negative feedback. If the thyroid gland is destroyed (no T3/T4), TSH levels will **increase** (loss of negative feedback inhibition).

## Comparison: Key Antagonistic Hormone Pairs

| Process | Hormone That INCREASES | Hormone That DECREASES |
|---------|----------------------|----------------------|
| **Blood glucose** | Glucagon, cortisol, epinephrine, GH | **Insulin** (only one!) |
| **Blood calcium** | PTH, Vitamin D (calcitriol) | **Calcitonin** |
| **Blood pressure** | Aldosterone, ADH, Angiotensin II | **ANP** |
| **Blood Na+** | Aldosterone | ANP |
`,
        keyTerms: [
          { term: "Negative Feedback", definition: "Regulatory mechanism where the end product inhibits earlier steps in the pathway to maintain homeostasis" },
          { term: "Positive Feedback", definition: "Regulatory mechanism where the product amplifies the pathway (e.g., oxytocin during labor, LH surge)" },
          { term: "Insulin", definition: "Peptide hormone from pancreatic beta cells; the only hormone that lowers blood glucose" },
          { term: "Glucagon", definition: "Peptide hormone from pancreatic alpha cells; raises blood glucose via glycogenolysis and gluconeogenesis" },
          { term: "Cortisol", definition: "Glucocorticoid from adrenal cortex zona fasciculata; raises blood glucose and suppresses inflammation" },
          { term: "PTH (Parathyroid Hormone)", definition: "Raises blood calcium by stimulating osteoclasts, kidney Ca2+ reabsorption, and vitamin D activation" },
          { term: "TSH", definition: "Thyroid-stimulating hormone from anterior pituitary; stimulates T3/T4 release from thyroid" },
          { term: "Second Messenger", definition: "Intracellular signaling molecule (cAMP, IP3, Ca2+) activated when a peptide hormone binds its surface receptor" },
        ],
      },
    ],
    questions: [
      {
        stem: "During an action potential, the rapid depolarization phase is caused by:",
        choices: [
          { label: "A", text: "K+ rushing out of the cell through voltage-gated channels", isCorrect: false },
          { label: "B", text: "Na+ rushing into the cell through voltage-gated channels", isCorrect: true },
          { label: "C", text: "Ca²+ entering the cell through ligand-gated channels", isCorrect: false },
          { label: "D", text: "Cl- entering the cell through leak channels", isCorrect: false },
          { label: "E", text: "Na+/K+ ATPase pumping ions across the membrane", isCorrect: false },
        ],
        explanation: "When threshold (~-55 mV) is reached, **voltage-gated Na+ channels** rapidly open, allowing Na+ to rush INTO the cell down its electrochemical gradient. This massive Na+ influx causes the membrane potential to shoot up to approximately +30 mV (**depolarization**). K+ efflux through voltage-gated K+ channels causes **repolarization** (the next phase). The Na+/K+ ATPase restores ion gradients but does not directly cause the action potential.",
        difficulty: 1,
        tags: ["action potential", "ion channels"],
      },
      {
        stem: "A patient has abnormally high levels of TSH and low levels of T3/T4. The most likely diagnosis is:",
        choices: [
          { label: "A", text: "Primary hyperthyroidism", isCorrect: false },
          { label: "B", text: "Secondary hyperthyroidism", isCorrect: false },
          { label: "C", text: "Primary hypothyroidism", isCorrect: true },
          { label: "D", text: "Secondary hypothyroidism", isCorrect: false },
          { label: "E", text: "Pituitary adenoma secreting TSH", isCorrect: false },
        ],
        explanation: "In **primary hypothyroidism**, the thyroid gland itself is dysfunctional (e.g., Hashimoto's thyroiditis) and cannot produce adequate T3/T4. Low T3/T4 removes negative feedback on the anterior pituitary, causing **TSH to increase** (the pituitary is trying to stimulate the failing thyroid). In secondary hypothyroidism, the pituitary is the problem, so TSH would be LOW. In hyperthyroidism, T3/T4 would be HIGH.",
        difficulty: 2,
        tags: ["thyroid", "negative feedback", "endocrine"],
      },
      {
        stem: "Which neurotransmitter is the primary inhibitory neurotransmitter in the central nervous system?",
        choices: [
          { label: "A", text: "Glutamate", isCorrect: false },
          { label: "B", text: "Acetylcholine", isCorrect: false },
          { label: "C", text: "Dopamine", isCorrect: false },
          { label: "D", text: "GABA (gamma-aminobutyric acid)", isCorrect: true },
          { label: "E", text: "Serotonin", isCorrect: false },
        ],
        explanation: "**GABA** is the major inhibitory neurotransmitter in the brain. It causes hyperpolarization (IPSPs) by opening Cl- channels. **Glutamate** is the major EXCITATORY neurotransmitter. Benzodiazepines and barbiturates work by enhancing GABA receptor activity, increasing inhibition in the CNS (which is why they produce sedation and anxiolysis).",
        difficulty: 1,
        tags: ["neurotransmitters", "CNS"],
      },
      {
        stem: "Insulin is released by beta cells of the pancreas and acts to lower blood glucose. Which of the following correctly describes insulin's mechanism?",
        choices: [
          { label: "A", text: "It crosses the cell membrane and binds an intracellular receptor to alter gene transcription", isCorrect: false },
          { label: "B", text: "It binds a cell-surface receptor and promotes insertion of GLUT4 transporters into cell membranes", isCorrect: true },
          { label: "C", text: "It stimulates glycogenolysis in the liver", isCorrect: false },
          { label: "D", text: "It promotes gluconeogenesis in the liver", isCorrect: false },
          { label: "E", text: "It inhibits glucose uptake by adipose tissue", isCorrect: false },
        ],
        explanation: "**Insulin** is a peptide hormone that binds a **cell-surface receptor** (receptor tyrosine kinase). Its key action is promoting the insertion of **GLUT4 glucose transporters** into the membranes of muscle and adipose cells, allowing them to take up glucose from the blood. Insulin also promotes **glycogenesis** (glucose → glycogen), **lipogenesis**, and **protein synthesis**. It does NOT cross the membrane (it is a peptide, water-soluble). Glycogenolysis and gluconeogenesis are stimulated by glucagon and cortisol, not insulin.",
        difficulty: 2,
        tags: ["insulin", "pancreas", "hormone mechanism"],
      },
      {
        stem: "During labor, uterine contractions stimulate oxytocin release, which in turn causes stronger contractions and more oxytocin release. This is an example of:",
        choices: [
          { label: "A", text: "Negative feedback", isCorrect: false },
          { label: "B", text: "Positive feedback", isCorrect: true },
          { label: "C", text: "Paracrine signaling", isCorrect: false },
          { label: "D", text: "Antagonistic hormone interaction", isCorrect: false },
          { label: "E", text: "Down-regulation of receptors", isCorrect: false },
        ],
        explanation: "This is a classic example of **positive feedback**. The product (oxytocin) amplifies the stimulus (uterine contractions), creating a self-reinforcing cycle that continues until delivery is complete (at which point the stimulus is removed and the cycle stops). **Negative feedback** would INHIBIT the pathway. Most hormone regulation uses negative feedback; positive feedback is rare and is used to drive processes to completion (other examples: LH surge during ovulation, blood clotting cascade).",
        difficulty: 1,
        tags: ["feedback loops", "positive feedback", "oxytocin"],
      },
    ],
  },
  { slug: "musculoskeletal", title: "Musculoskeletal & Integumentary", description: "Muscle contraction, bone growth, skin layers", estimatedMinutes: 35, lessons: [], questions: [] },
  { slug: "reproductive-development", title: "Reproductive & Development", description: "Gametogenesis, embryology, fetal development", estimatedMinutes: 40, lessons: [], questions: [] },
  { slug: "immunology", title: "Immunology", description: "Innate/adaptive immunity, antibodies, MHC, allergies", estimatedMinutes: 40, lessons: [], questions: [] },
  { slug: "ecology", title: "Ecology", description: "Ecosystems, food webs, biomes, population dynamics", estimatedMinutes: 35, lessons: [], questions: [] },
  { slug: "evolution", title: "Evolution", description: "Natural selection, speciation, phylogenetics, evidence", estimatedMinutes: 30, lessons: [], questions: [] },
  { slug: "taxonomy-diversity", title: "Taxonomy & Diversity", description: "Classification systems, plant biology, animal phyla", estimatedMinutes: 35, lessons: [], questions: [] },
];

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
  { slug: "genetics", title: "Genetics", description: "Mendelian genetics, inheritance patterns, pedigrees, Hardy-Weinberg", estimatedMinutes: 45, lessons: [], questions: [] },
  { slug: "microbiology", title: "Microbiology", description: "Bacteria, viruses, fungi, parasites, immune evasion", estimatedMinutes: 35, lessons: [], questions: [] },
  { slug: "cardiovascular-respiratory", title: "Cardiovascular & Respiratory", description: "Heart, blood vessels, gas exchange, blood composition", estimatedMinutes: 45, lessons: [], questions: [] },
  { slug: "digestive-excretory", title: "Digestive & Excretory", description: "GI tract, liver, kidneys, nephron, acid-base balance", estimatedMinutes: 40, lessons: [], questions: [] },
  { slug: "nervous-endocrine", title: "Nervous & Endocrine", description: "CNS/PNS, neurotransmitters, hormones, feedback loops", estimatedMinutes: 50, lessons: [], questions: [] },
  { slug: "musculoskeletal", title: "Musculoskeletal & Integumentary", description: "Muscle contraction, bone growth, skin layers", estimatedMinutes: 35, lessons: [], questions: [] },
  { slug: "reproductive-development", title: "Reproductive & Development", description: "Gametogenesis, embryology, fetal development", estimatedMinutes: 40, lessons: [], questions: [] },
  { slug: "immunology", title: "Immunology", description: "Innate/adaptive immunity, antibodies, MHC, allergies", estimatedMinutes: 40, lessons: [], questions: [] },
  { slug: "ecology", title: "Ecology", description: "Ecosystems, food webs, biomes, population dynamics", estimatedMinutes: 35, lessons: [], questions: [] },
  { slug: "evolution", title: "Evolution", description: "Natural selection, speciation, phylogenetics, evidence", estimatedMinutes: 30, lessons: [], questions: [] },
  { slug: "taxonomy-diversity", title: "Taxonomy & Diversity", description: "Classification systems, plant biology, animal phyla", estimatedMinutes: 35, lessons: [], questions: [] },
];

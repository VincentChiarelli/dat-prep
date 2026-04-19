// Chemistry content for DAT Prep — General Chemistry & Organic Chemistry

export const GENCHEM_CHAPTERS = [
  {
    slug: "atomic-structure",
    title: "Atomic Structure",
    description: "Electron configuration, quantum numbers, periodic trends",
    estimatedMinutes: 45,
    lessons: [
      {
        slug: "electron-configuration",
        title: "Electron Configuration & Quantum Numbers",
        content: `# Electron Configuration & Quantum Numbers

Understanding atomic structure is the foundation of general chemistry. For the DAT, you must be fluent in electron configurations, quantum numbers, and how they dictate an element's chemical behavior.

## The Four Quantum Numbers

Every electron in an atom is described by a unique set of four quantum numbers (no two electrons share all four — **Pauli Exclusion Principle**).

| Quantum Number | Symbol | Allowed Values | Describes |
|----------------|--------|---------------|-----------|
| **Principal** | n | 1, 2, 3, ... | Energy level (shell), size of orbital |
| **Angular momentum** | l | 0 to (n - 1) | Shape of orbital (s, p, d, f) |
| **Magnetic** | m_l | -l to +l | Orientation of orbital in space |
| **Spin** | m_s | +1/2 or -1/2 | Spin direction of the electron |

### Orbital Shapes by l Value

| l value | Letter | Shape | Max electrons |
|---------|--------|-------|---------------|
| 0 | s | Spherical | 2 |
| 1 | p | Dumbbell | 6 |
| 2 | d | Cloverleaf | 10 |
| 3 | f | Complex | 14 |

> **High-Yield DAT Tip:** The maximum number of electrons in a shell = **2n²**. For n = 3: 2(9) = 18 electrons maximum.

## Electron Configuration Rules

Three principles govern how electrons fill orbitals:

### 1. Aufbau Principle
Electrons fill orbitals from **lowest energy to highest energy**. The filling order follows the diagonal rule:

**1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p**

### 2. Pauli Exclusion Principle
No two electrons in the same atom can have the **same set of all four quantum numbers**. Each orbital holds a maximum of **2 electrons** with opposite spins.

### 3. Hund's Rule
When filling orbitals of equal energy (**degenerate orbitals**), electrons occupy them **singly first** with parallel spins before pairing up. This minimizes electron-electron repulsion.

## Writing Electron Configurations

### Full Configuration Examples

| Element | Atomic # | Full Configuration |
|---------|----------|--------------------|
| H | 1 | 1s¹ |
| C | 6 | 1s² 2s² 2p² |
| Na | 11 | 1s² 2s² 2p⁶ 3s¹ |
| Fe | 26 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ |
| Br | 35 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ |

### Noble Gas (Shorthand) Configuration
Replace the inner core electrons with the preceding noble gas in brackets:

- **Fe:** [Ar] 4s² 3d⁶
- **Br:** [Ar] 4s² 3d¹⁰ 4p⁵

## Exceptions to the Aufbau Order

Two critical exceptions appear on the DAT regularly:

| Element | Expected | Actual | Reason |
|---------|----------|--------|--------|
| **Chromium (Cr)** | [Ar] 4s² 3d⁴ | [Ar] 4s¹ 3d⁵ | Half-filled d subshell is extra stable |
| **Copper (Cu)** | [Ar] 4s² 3d⁹ | [Ar] 4s¹ 3d¹⁰ | Fully filled d subshell is extra stable |

> **DAT Tip:** Cr and Cu are the two classic exceptions. Half-filled (d⁵) and fully filled (d¹⁰) d subshells have special stability due to exchange energy.

## Ions and Electron Configuration

When transition metals form cations, electrons are removed from the **4s orbital first** (even though 4s fills first, it is higher in energy once the 3d is occupied).

- **Fe²⁺:** [Ar] 3d⁶ (lose the two 4s electrons first)
- **Fe³⁺:** [Ar] 3d⁵ (lose 4s² then one 3d)

> **DAT Tip:** For transition metal cations, always remove electrons from the **ns orbital before (n-1)d**. This is a very common DAT question.

## Paramagnetic vs. Diamagnetic

- **Paramagnetic:** Has **unpaired electrons** — attracted to a magnetic field
- **Diamagnetic:** All electrons **paired** — weakly repelled by a magnetic field

To determine: write out the electron configuration and check for unpaired electrons.

- Fe²⁺ [Ar] 3d⁶ → four unpaired electrons → **paramagnetic**
- Zn²⁺ [Ar] 3d¹⁰ → zero unpaired electrons → **diamagnetic**

## Key Terms
- **Ground state:** Lowest energy electron arrangement
- **Excited state:** Electron promoted to a higher energy orbital
- **Valence electrons:** Electrons in the outermost shell (determine chemical reactivity)
- **Core electrons:** Inner electrons that shield valence electrons from the nucleus
`,
        keyTerms: [
          { term: "Aufbau Principle", definition: "Electrons fill orbitals from lowest to highest energy" },
          { term: "Pauli Exclusion Principle", definition: "No two electrons can have the same four quantum numbers" },
          { term: "Hund's Rule", definition: "Electrons fill degenerate orbitals singly before pairing, with parallel spins" },
          { term: "Paramagnetic", definition: "Has unpaired electrons; attracted to a magnetic field" },
          { term: "Diamagnetic", definition: "All electrons paired; weakly repelled by a magnetic field" },
          { term: "Valence Electrons", definition: "Outermost electrons that participate in chemical bonding" },
        ],
      },
      {
        slug: "periodic-trends",
        title: "Periodic Trends",
        content: `# Periodic Trends

The periodic table is organized so that elements with similar properties fall in the same group. Understanding periodic trends allows you to predict physical and chemical properties without memorizing data for every element.

## The Big Five Periodic Trends

### 1. Atomic Radius

**Definition:** Half the distance between two bonded nuclei of the same element.

**Trends:**
- **Across a period (left → right):** Decreases. More protons pull electrons closer (increased effective nuclear charge, Z_eff).
- **Down a group (top → bottom):** Increases. Additional electron shells increase the distance from the nucleus.

| Direction | Atomic Radius | Reason |
|-----------|--------------|--------|
| Left → Right | Decreases | Increasing Z_eff, same shell |
| Top → Bottom | Increases | More electron shells |

> **DAT Tip:** Largest atom on the periodic table = **Francium (Fr)** (bottom-left). Smallest neutral atom = **Helium (He)** (top-right), but among commonly tested elements, **Fluorine** is the smallest halogen.

### 2. Ionization Energy (IE)

**Definition:** Energy required to remove the **outermost electron** from a gaseous atom.

**Trends:**
- **Across a period (left → right):** Increases. Electrons are held more tightly as Z_eff increases.
- **Down a group (top → bottom):** Decreases. Outermost electrons are farther from the nucleus and easier to remove.

**Key points:**
- First IE < Second IE < Third IE (each successive removal is harder)
- Large jumps in IE occur when you break into a new **inner shell** or a **filled/half-filled subshell**

> **High-Yield DAT Tip:** Noble gases have the highest IE in each period. Alkali metals have the lowest. Know that removing a core electron causes a dramatic jump in IE.

### 3. Electron Affinity (EA)

**Definition:** Energy change when a gaseous atom **gains** an electron. More negative = more energy released = greater tendency to gain an electron.

**Trends:**
- **Across a period (left → right):** Generally becomes more negative (halogens have the most negative EA).
- **Down a group (top → bottom):** Generally becomes less negative.

**Exceptions:** Noble gases have near-zero or positive EA (they don't want electrons). Nitrogen has a lower EA than expected because its half-filled 2p subshell is stable.

### 4. Electronegativity (EN)

**Definition:** The ability of an atom in a **bond** to attract shared electrons toward itself. (Pauling scale: F = 4.0, highest.)

**Trends:**
- **Across a period (left → right):** Increases.
- **Down a group (top → bottom):** Decreases.

| Element | Electronegativity |
|---------|-------------------|
| F | 4.0 |
| O | 3.5 |
| N, Cl | 3.0 |
| C, S | 2.5 |

> **DAT Tip:** Electronegativity order: **F > O > N = Cl > Br > C = S > I > H**. Memorize this — it appears constantly on the DAT.

### 5. Metallic Character

**Definition:** How easily an element loses electrons and behaves as a metal.

**Trends:**
- **Across a period (left → right):** Decreases (nonmetals gain electrons instead).
- **Down a group (top → bottom):** Increases (outer electrons are farther from the nucleus and easier to lose).

## Effective Nuclear Charge (Z_eff)

**Z_eff = Z - S** (where Z = atomic number, S = shielding constant from inner electrons)

- Z_eff increases left to right across a period because protons increase but shielding stays roughly the same.
- This explains why atomic radius shrinks and IE increases across a period.

## Ionic Radius

- **Cations** are **smaller** than their parent atom (lost electrons, fewer shells or reduced repulsion).
- **Anions** are **larger** than their parent atom (gained electrons, more repulsion).
- In an **isoelectronic series** (same # of electrons), the ion with more protons is smaller.

| Isoelectronic Series (10 e⁻) | Protons | Radius |
|-------------------------------|---------|--------|
| N³⁻ | 7 | Largest |
| O²⁻ | 8 | ↓ |
| F⁻ | 9 | ↓ |
| Na⁺ | 11 | ↓ |
| Mg²⁺ | 12 | Smallest |

> **DAT Tip:** In an isoelectronic series, more protons = smaller radius. This is a very high-yield concept.

## Summary Table of Trends

| Property | Left → Right | Top → Bottom |
|----------|-------------|-------------|
| Atomic Radius | Decreases | Increases |
| Ionization Energy | Increases | Decreases |
| Electron Affinity | More negative | Less negative |
| Electronegativity | Increases | Decreases |
| Metallic Character | Decreases | Increases |

## Key Terms
- **Shielding (screening):** Inner electrons block outer electrons from the full nuclear charge
- **Isoelectronic:** Species with the same number of electrons (e.g., Na⁺, F⁻, Ne)
- **Z_eff:** Net positive charge experienced by valence electrons after accounting for shielding
`,
        keyTerms: [
          { term: "Atomic Radius", definition: "Half the distance between bonded nuclei; increases down a group, decreases across a period" },
          { term: "Ionization Energy", definition: "Energy needed to remove the outermost electron from a gaseous atom" },
          { term: "Electronegativity", definition: "Ability of a bonded atom to attract shared electrons (F is highest at 4.0)" },
          { term: "Electron Affinity", definition: "Energy change when a gaseous atom gains an electron" },
          { term: "Effective Nuclear Charge", definition: "Net positive charge felt by valence electrons (Z_eff = Z - S)" },
          { term: "Isoelectronic", definition: "Species with the same number of electrons" },
        ],
      },
    ],
    questions: [
      {
        stem: "What is the ground-state electron configuration of Cu (Z = 29)?",
        choices: [
          { label: "A", text: "[Ar] 4s² 3d⁹", isCorrect: false },
          { label: "B", text: "[Ar] 4s¹ 3d¹⁰", isCorrect: true },
          { label: "C", text: "[Ar] 4s² 3d¹⁰", isCorrect: false },
          { label: "D", text: "[Ar] 3d¹⁰ 4p¹", isCorrect: false },
          { label: "E", text: "[Ar] 4s⁰ 3d¹⁰ 4p¹", isCorrect: false },
        ],
        explanation: "Copper is one of the classic exceptions to the Aufbau principle. Instead of [Ar] 4s² 3d⁹, the actual configuration is **[Ar] 4s¹ 3d¹⁰** because a completely filled d subshell (d¹⁰) provides extra stability from electron exchange energy. Chromium (Cr) is the other classic exception with [Ar] 4s¹ 3d⁵.",
        difficulty: 2,
        tags: ["electron configuration", "exceptions"],
      },
      {
        stem: "Which of the following has the largest atomic radius?",
        choices: [
          { label: "A", text: "Na", isCorrect: false },
          { label: "B", text: "Mg", isCorrect: false },
          { label: "C", text: "K", isCorrect: true },
          { label: "D", text: "Ca", isCorrect: false },
          { label: "E", text: "Al", isCorrect: false },
        ],
        explanation: "Atomic radius increases **down a group** and **from right to left** across a period. K (potassium) is in Period 4, Group 1 — it has the lowest effective nuclear charge and the most electron shells among these choices. Na is above K in Group 1 (smaller), and Mg, Ca, Al are further to the right (higher Z_eff).",
        difficulty: 1,
        tags: ["periodic trends", "atomic radius"],
      },
      {
        stem: "What is the electron configuration of Fe³⁺ (Z = 26)?",
        choices: [
          { label: "A", text: "[Ar] 4s² 3d³", isCorrect: false },
          { label: "B", text: "[Ar] 4s¹ 3d⁴", isCorrect: false },
          { label: "C", text: "[Ar] 3d⁵", isCorrect: true },
          { label: "D", text: "[Ar] 4s² 3d⁶", isCorrect: false },
          { label: "E", text: "[Ar] 3d⁶", isCorrect: false },
        ],
        explanation: "Fe is [Ar] 4s² 3d⁶. When forming Fe³⁺, remove 3 electrons — but electrons are removed from **4s before 3d** in transition metal cations. Remove 4s² first (2 electrons), then one 3d electron, giving **[Ar] 3d⁵**. This half-filled d⁵ configuration is especially stable.",
        difficulty: 2,
        tags: ["electron configuration", "ions"],
      },
      {
        stem: "In the isoelectronic series O²⁻, F⁻, Ne, Na⁺, Mg²⁺, which species has the smallest ionic radius?",
        choices: [
          { label: "A", text: "O²⁻", isCorrect: false },
          { label: "B", text: "F⁻", isCorrect: false },
          { label: "C", text: "Ne", isCorrect: false },
          { label: "D", text: "Na⁺", isCorrect: false },
          { label: "E", text: "Mg²⁺", isCorrect: true },
        ],
        explanation: "All species have **10 electrons**. In an isoelectronic series, the species with the **most protons** pulls the electron cloud tightest, giving the **smallest radius**. Mg²⁺ has 12 protons (the most), so it is the smallest. O²⁻ has only 8 protons and is the largest.",
        difficulty: 2,
        tags: ["periodic trends", "ionic radius", "isoelectronic"],
      },
      {
        stem: "An element has the quantum numbers n = 3, l = 2, m_l = -1, m_s = +1/2. Which subshell does this electron occupy?",
        choices: [
          { label: "A", text: "3s", isCorrect: false },
          { label: "B", text: "3p", isCorrect: false },
          { label: "C", text: "3d", isCorrect: true },
          { label: "D", text: "4d", isCorrect: false },
          { label: "E", text: "3f", isCorrect: false },
        ],
        explanation: "The angular momentum quantum number **l = 2** corresponds to a **d subshell** (l = 0 → s, l = 1 → p, l = 2 → d, l = 3 → f). Combined with n = 3, the electron is in the **3d** subshell. A 3f subshell does not exist because l can only range from 0 to n - 1, and for n = 3, the maximum l is 2.",
        difficulty: 1,
        tags: ["quantum numbers", "orbitals"],
      },
      {
        stem: "Which element has the highest first ionization energy?",
        choices: [
          { label: "A", text: "Li", isCorrect: false },
          { label: "B", text: "B", isCorrect: false },
          { label: "C", text: "N", isCorrect: false },
          { label: "D", text: "Ne", isCorrect: true },
          { label: "E", text: "Na", isCorrect: false },
        ],
        explanation: "Ionization energy increases across a period (left to right) and decreases down a group. **Ne** (neon) is a noble gas at the far right of Period 2, giving it the highest first ionization energy among these choices. Noble gases have completely filled shells, making electron removal very difficult.",
        difficulty: 1,
        tags: ["ionization energy", "periodic trends"],
      },
      {
        stem: "How many unpaired electrons are present in the ground state of nitrogen (Z = 7)?",
        choices: [
          { label: "A", text: "0", isCorrect: false },
          { label: "B", text: "1", isCorrect: false },
          { label: "C", text: "2", isCorrect: false },
          { label: "D", text: "3", isCorrect: true },
          { label: "E", text: "5", isCorrect: false },
        ],
        explanation: "Nitrogen's electron configuration is 1s² 2s² 2p³. By **Hund's rule**, the three 2p electrons each occupy a separate 2p orbital with parallel spins before pairing. This gives **3 unpaired electrons**, making nitrogen paramagnetic. The half-filled 2p subshell also gives nitrogen extra stability.",
        difficulty: 1,
        tags: ["Hund's rule", "unpaired electrons"],
      },
      {
        stem: "Which of the following atoms has the most negative electron affinity?",
        choices: [
          { label: "A", text: "Na", isCorrect: false },
          { label: "B", text: "Cl", isCorrect: true },
          { label: "C", text: "Ar", isCorrect: false },
          { label: "D", text: "N", isCorrect: false },
          { label: "E", text: "Mg", isCorrect: false },
        ],
        explanation: "**Chlorine** has the most negative electron affinity (most exothermic when gaining an electron). Halogens in general have the most negative electron affinities because gaining one electron completes their valence shell. Argon (noble gas) has near-zero EA. Nitrogen's half-filled 2p subshell gives it a lower EA than expected.",
        difficulty: 2,
        tags: ["electron affinity", "periodic trends"],
      },
      {
        stem: "The effective nuclear charge (Z_eff) experienced by valence electrons increases from left to right across a period because:",
        choices: [
          { label: "A", text: "More electron shells are added", isCorrect: false },
          { label: "B", text: "Protons increase while shielding stays roughly constant", isCorrect: true },
          { label: "C", text: "Inner electrons are removed", isCorrect: false },
          { label: "D", text: "Valence electrons move farther from the nucleus", isCorrect: false },
          { label: "E", text: "Electronegativity decreases", isCorrect: false },
        ],
        explanation: "Across a period, each successive element adds one proton and one electron to the **same shell**. The core (inner) electrons remain constant, so shielding stays approximately the same while the nuclear charge (Z) increases. Therefore, **Z_eff = Z − S** increases, pulling valence electrons closer and explaining the decrease in atomic radius.",
        difficulty: 2,
        tags: ["effective nuclear charge", "periodic trends"],
      },
      {
        stem: "Which of the following is diamagnetic?",
        choices: [
          { label: "A", text: "Fe²⁺", isCorrect: false },
          { label: "B", text: "Cu²⁺", isCorrect: false },
          { label: "C", text: "Mn²⁺", isCorrect: false },
          { label: "D", text: "Zn²⁺", isCorrect: true },
          { label: "E", text: "Co²⁺", isCorrect: false },
        ],
        explanation: "Zn²⁺ has the configuration [Ar] 3d¹⁰ — all d orbitals are fully filled with paired electrons, so there are **zero unpaired electrons** and it is **diamagnetic**. Fe²⁺ ([Ar] 3d⁶) has 4 unpaired, Cu²⁺ ([Ar] 3d⁹) has 1 unpaired, Mn²⁺ ([Ar] 3d⁵) has 5 unpaired, and Co²⁺ ([Ar] 3d⁷) has 3 unpaired — all paramagnetic.",
        difficulty: 2,
        tags: ["paramagnetism", "electron configuration", "transition metals"],
      },
    ],
  },
  {
    slug: "bonding",
    title: "Chemical Bonding",
    description: "Ionic, covalent, metallic bonding, Lewis structures, VSEPR theory, hybridization",
    estimatedMinutes: 50,
    lessons: [
      {
        slug: "types-of-bonding",
        title: "Types of Chemical Bonds & Lewis Structures",
        content: `# Types of Chemical Bonds & Lewis Structures

Chemical bonding determines the structure and properties of all matter. The DAT tests your ability to identify bond types, draw Lewis structures, and predict molecular properties.

## Types of Chemical Bonds

### Ionic Bonds
- Formed between a **metal** and a **nonmetal**
- Electron **transfer** from metal to nonmetal
- Results in cations (+) and anions (-)
- Generally occurs when electronegativity difference (ΔEN) > **1.7**
- Properties: high melting points, conduct electricity when dissolved/molten, brittle crystalline solids

### Covalent Bonds
- Formed between two **nonmetals**
- Electron **sharing** between atoms
- Can be **polar** (unequal sharing, 0.4 < ΔEN < 1.7) or **nonpolar** (equal sharing, ΔEN < 0.4)
- Properties: lower melting points, generally do not conduct electricity, can be gases/liquids/solids

### Metallic Bonds
- Formed between **metal** atoms
- Valence electrons are **delocalized** in an "electron sea"
- Properties: electrical/thermal conductivity, malleability, ductility, metallic luster

| Bond Type | Between | Electron Behavior | ΔEN | Examples |
|-----------|---------|-------------------|-----|----------|
| Ionic | Metal + Nonmetal | Transfer | > 1.7 | NaCl, MgO |
| Polar Covalent | Nonmetals | Unequal sharing | 0.4 - 1.7 | H₂O, HCl |
| Nonpolar Covalent | Same nonmetals | Equal sharing | < 0.4 | H₂, O₂, Cl₂ |
| Metallic | Metals | Delocalized sea | — | Fe, Cu, Au |

> **DAT Tip:** Bond character is a spectrum, not absolute categories. Use ΔEN to estimate: >1.7 = ionic, 0.4–1.7 = polar covalent, <0.4 = nonpolar covalent.

## Drawing Lewis Structures

### Step-by-Step Method

1. **Count total valence electrons** (add for anions, subtract for cations)
2. **Draw the skeleton** — least electronegative atom is central (H is always terminal)
3. **Place bonding pairs** (single bonds first)
4. **Distribute remaining electrons** as lone pairs to satisfy the octet rule (starting with terminal atoms)
5. **Check octets** — if the central atom lacks an octet, convert lone pairs to double or triple bonds

### Example: CO₂

1. Valence electrons: C(4) + 2×O(6) = 16
2. Skeleton: O–C–O
3. Single bonds use 4 electrons → 12 remaining
4. Give terminal O atoms 3 lone pairs each → 0 remaining
5. C has only 4 electrons → convert lone pairs to double bonds: **O=C=O**

## Formal Charge

**Formal Charge = Valence electrons − Lone pair electrons − (1/2 × Bonding electrons)**

The best Lewis structure minimizes formal charges and places negative formal charges on more electronegative atoms.

> **High-Yield DAT Tip:** Always calculate formal charges to choose the best resonance structure. The structure with all formal charges = 0 is preferred.

## Resonance

When multiple valid Lewis structures can be drawn by moving **electrons** (not atoms), the molecule exhibits **resonance**. The actual structure is a **hybrid** of all resonance forms.

- Example: **NO₃⁻** has three equivalent resonance structures
- Bond order = (total bonds) / (number of resonance structures) = 4/3 ≈ 1.33

## Exceptions to the Octet Rule

| Category | Examples | Details |
|----------|----------|---------|
| **Incomplete octet** | BF₃, BeCl₂ | B has 6 e⁻, Be has 4 e⁻ |
| **Expanded octet** | PCl₅, SF₆, XeF₄ | Period 3+ elements use d orbitals |
| **Odd-electron species** | NO, NO₂ | Free radicals with unpaired electrons |

> **DAT Tip:** Only elements in **Period 3 or below** can expand their octet because they have accessible d orbitals. C, N, O, F can NEVER exceed 8 electrons.

## Bond Properties

### Bond Order, Length, and Energy

| Property | Single Bond | Double Bond | Triple Bond |
|----------|------------|-------------|-------------|
| Bond Order | 1 | 2 | 3 |
| Bond Length | Longest | Intermediate | Shortest |
| Bond Energy | Weakest | Intermediate | Strongest |

- **Higher bond order → shorter bond → stronger bond**

## Intermolecular Forces (IMFs)

| Force | Strength | Occurs Between |
|-------|----------|----------------|
| **London Dispersion (LDF)** | Weakest | All molecules (increases with size/surface area) |
| **Dipole-Dipole** | Moderate | Polar molecules |
| **Hydrogen Bonding** | Strongest IMF | H bonded to **F, O, or N** interacting with lone pair on F, O, or N |
| **Ion-Dipole** | Very strong | Ions + polar molecules (e.g., NaCl in H₂O) |

> **DAT Tip:** Hydrogen bonds are a special, extra-strong type of dipole-dipole interaction. They explain water's high boiling point, surface tension, and solvent properties.

## Key Terms
- **Octet rule:** Atoms tend to gain, lose, or share electrons to achieve 8 valence electrons
- **Resonance:** Multiple valid Lewis structures for the same molecule; actual structure is a hybrid
- **Formal charge:** Hypothetical charge on an atom assuming equal sharing of bonded electrons
`,
        keyTerms: [
          { term: "Ionic Bond", definition: "Electrostatic attraction between cation and anion formed by electron transfer" },
          { term: "Covalent Bond", definition: "Bond formed by sharing electron pairs between nonmetals" },
          { term: "Resonance", definition: "Multiple valid Lewis structures whose hybrid represents the actual electron distribution" },
          { term: "Formal Charge", definition: "Hypothetical charge on an atom calculated as valence e⁻ minus lone pair e⁻ minus half of bonding e⁻" },
          { term: "Hydrogen Bond", definition: "Strong IMF between H bonded to F/O/N and a lone pair on another F/O/N" },
          { term: "London Dispersion Forces", definition: "Weak IMF due to temporary dipoles; present in all molecules, increases with molecular size" },
        ],
      },
      {
        slug: "vsepr-hybridization",
        title: "VSEPR Theory & Hybridization",
        content: `# VSEPR Theory & Hybridization

Once you can draw a Lewis structure, the next step is predicting the **3D shape** of the molecule. The DAT heavily tests VSEPR (Valence Shell Electron Pair Repulsion) theory and orbital hybridization.

## VSEPR Theory

**Core idea:** Electron groups (bonding pairs and lone pairs) around a central atom repel each other and arrange themselves to **maximize the distance** between them.

### Electron Group vs. Molecular Geometry

- **Electron geometry:** Arrangement of ALL electron groups (bonding + lone pairs)
- **Molecular geometry:** Arrangement of only the **atoms** (what you actually "see")
- Lone pairs take up more space than bonding pairs, compressing bond angles

### VSEPR Geometries Table

| Electron Groups | Lone Pairs | Electron Geometry | Molecular Geometry | Bond Angle | Example |
|-----------------|------------|-------------------|-------------------|------------|---------|
| 2 | 0 | Linear | **Linear** | 180° | CO₂, BeCl₂ |
| 3 | 0 | Trigonal planar | **Trigonal planar** | 120° | BF₃ |
| 3 | 1 | Trigonal planar | **Bent** | ~117° | SO₂ |
| 4 | 0 | Tetrahedral | **Tetrahedral** | 109.5° | CH₄ |
| 4 | 1 | Tetrahedral | **Trigonal pyramidal** | ~107° | NH₃ |
| 4 | 2 | Tetrahedral | **Bent** | ~104.5° | H₂O |
| 5 | 0 | Trigonal bipyramidal | **Trigonal bipyramidal** | 90°, 120° | PCl₅ |
| 5 | 1 | Trigonal bipyramidal | **Seesaw** | — | SF₄ |
| 5 | 2 | Trigonal bipyramidal | **T-shaped** | — | ClF₃ |
| 5 | 3 | Trigonal bipyramidal | **Linear** | 180° | XeF₂ |
| 6 | 0 | Octahedral | **Octahedral** | 90° | SF₆ |
| 6 | 1 | Octahedral | **Square pyramidal** | — | BrF₅ |
| 6 | 2 | Octahedral | **Square planar** | 90° | XeF₄ |

> **High-Yield DAT Tip:** You MUST memorize this table. The DAT almost always includes at least one VSEPR question. Remember: lone pairs reduce the bond angle from the ideal value.

## Polarity of Molecules

A molecule is **polar** if:
1. It contains **polar bonds** (ΔEN > 0.4), AND
2. The bond dipoles **do NOT cancel** due to asymmetric geometry

| Molecule | Geometry | Polar? | Reason |
|----------|----------|--------|--------|
| CO₂ | Linear | No | Symmetric — dipoles cancel |
| H₂O | Bent | Yes | Asymmetric — dipoles don't cancel |
| CH₄ | Tetrahedral | No | Symmetric — dipoles cancel |
| NH₃ | Trigonal pyramidal | Yes | Lone pair creates asymmetry |
| CCl₄ | Tetrahedral | No | Symmetric — dipoles cancel |
| CHCl₃ | Tetrahedral | Yes | Different substituents — no cancellation |

> **DAT Tip:** Symmetric molecules with identical substituents (CO₂, CH₄, CCl₄, SF₆, BF₃) are **nonpolar** even if individual bonds are polar.

## Hybridization

**Hybridization** is the mixing of atomic orbitals to form new hybrid orbitals that are better suited for bonding. The type of hybridization matches the electron geometry.

| Electron Groups | Hybridization | Geometry | Orbitals Mixed | Unhybridized p orbitals |
|-----------------|---------------|----------|----------------|------------------------|
| 2 | **sp** | Linear | 1s + 1p | 2 (for π bonds) |
| 3 | **sp²** | Trigonal planar | 1s + 2p | 1 (for π bond) |
| 4 | **sp³** | Tetrahedral | 1s + 3p | 0 |
| 5 | **sp³d** | Trigonal bipyramidal | 1s + 3p + 1d | 0 |
| 6 | **sp³d²** | Octahedral | 1s + 3p + 2d | 0 |

### Quick Method to Determine Hybridization

**Count the number of electron groups (σ bonds + lone pairs) on the central atom:**
- 2 groups → sp
- 3 groups → sp²
- 4 groups → sp³
- 5 groups → sp³d
- 6 groups → sp³d²

> **DAT Tip:** A double bond or triple bond counts as **one electron group** for both VSEPR and hybridization.

### Sigma (σ) and Pi (π) Bonds

| Bond Type | σ bonds | π bonds | Total bonds |
|-----------|---------|---------|-------------|
| Single bond | 1 | 0 | 1 |
| Double bond | 1 | 1 | 2 |
| Triple bond | 1 | 2 | 3 |

- **σ bonds** are formed by **head-on** overlap of hybrid orbitals
- **π bonds** are formed by **side-by-side** overlap of unhybridized p orbitals
- π bonds restrict rotation → explains cis/trans isomerism in alkenes

### Example: Ethene (C₂H₄)

Each carbon: 3 electron groups (2 C–H bonds + 1 C=C bond) → **sp²** hybridized
- The C=C double bond = 1 σ bond + 1 π bond
- Total bonds in C₂H₄: 5 σ + 1 π = 6 bonds
- The molecule is **planar** because of the sp² geometry and the π bond preventing rotation

### Example: Ethyne (C₂H₂)

Each carbon: 2 electron groups (1 C–H bond + 1 C≡C bond) → **sp** hybridized
- The C≡C triple bond = 1 σ bond + 2 π bonds
- The molecule is **linear** (180°)

## Key Terms
- **Electron geometry:** 3D arrangement of all electron groups around a central atom
- **Molecular geometry:** 3D arrangement of atoms only (excludes lone pairs)
- **Hybridization:** Mixing of atomic orbitals to form equivalent hybrid orbitals for bonding
- **Sigma bond:** Head-on orbital overlap; first bond between two atoms
- **Pi bond:** Side-by-side overlap of p orbitals; second and third bonds in multiple bonds
`,
        keyTerms: [
          { term: "VSEPR Theory", definition: "Electron groups repel and arrange to maximize distance, determining molecular shape" },
          { term: "Hybridization", definition: "Mixing of atomic orbitals to form hybrid orbitals; determined by number of electron groups" },
          { term: "Sigma Bond", definition: "Bond formed by head-on overlap of orbitals; present in all covalent bonds" },
          { term: "Pi Bond", definition: "Bond formed by side-by-side overlap of p orbitals; present in double and triple bonds" },
          { term: "Molecular Geometry", definition: "Shape defined by the arrangement of atoms only (lone pairs excluded)" },
          { term: "Electron Geometry", definition: "Shape defined by the arrangement of all electron groups including lone pairs" },
        ],
      },
    ],
    questions: [
      {
        stem: "What is the molecular geometry and hybridization of XeF₄?",
        choices: [
          { label: "A", text: "Tetrahedral, sp³", isCorrect: false },
          { label: "B", text: "Square planar, sp³d²", isCorrect: true },
          { label: "C", text: "Seesaw, sp³d", isCorrect: false },
          { label: "D", text: "Octahedral, sp³d²", isCorrect: false },
          { label: "E", text: "Square pyramidal, sp³d²", isCorrect: false },
        ],
        explanation: "Xe has 8 valence electrons. In XeF₄, Xe forms 4 bonds to F and has 2 lone pairs = **6 electron groups** total. Electron geometry is octahedral (**sp³d²**). The 2 lone pairs sit opposite each other (180° apart) to minimize repulsion, giving a **square planar** molecular geometry.",
        difficulty: 2,
        tags: ["VSEPR", "hybridization", "noble gas compounds"],
      },
      {
        stem: "How many sigma (σ) and pi (π) bonds are present in HCN?",
        choices: [
          { label: "A", text: "2 σ and 1 π", isCorrect: false },
          { label: "B", text: "2 σ and 2 π", isCorrect: true },
          { label: "C", text: "3 σ and 1 π", isCorrect: false },
          { label: "D", text: "1 σ and 3 π", isCorrect: false },
          { label: "E", text: "3 σ and 2 π", isCorrect: false },
        ],
        explanation: "HCN structure: H–C≡N. The H–C single bond = 1 σ. The C≡N triple bond = 1 σ + 2 π. Total: **2 σ bonds and 2 π bonds**. Remember every bond has exactly one σ bond, with additional bonds being π bonds.",
        difficulty: 1,
        tags: ["sigma pi bonds", "Lewis structures"],
      },
      {
        stem: "Which of the following molecules is polar?",
        choices: [
          { label: "A", text: "CO₂", isCorrect: false },
          { label: "B", text: "CCl₄", isCorrect: false },
          { label: "C", text: "SF₆", isCorrect: false },
          { label: "D", text: "NH₃", isCorrect: true },
          { label: "E", text: "BF₃", isCorrect: false },
        ],
        explanation: "NH₃ has a **trigonal pyramidal** geometry (3 bonding pairs + 1 lone pair). The lone pair creates an asymmetric charge distribution, so the bond dipoles do NOT cancel. CO₂ (linear), CCl₄ (tetrahedral), SF₆ (octahedral), and BF₃ (trigonal planar) are all symmetric with identical substituents, so their dipoles cancel and they are **nonpolar**.",
        difficulty: 1,
        tags: ["polarity", "molecular geometry"],
      },
      {
        stem: "What is the formal charge on nitrogen in the nitrate ion (NO₃⁻) in the resonance structure where N is double-bonded to one O and single-bonded to two O atoms?",
        choices: [
          { label: "A", text: "-1", isCorrect: false },
          { label: "B", text: "0", isCorrect: false },
          { label: "C", text: "+1", isCorrect: true },
          { label: "D", text: "+2", isCorrect: false },
          { label: "E", text: "-2", isCorrect: false },
        ],
        explanation: "Formal charge = Valence e⁻ − Lone pair e⁻ − (1/2 × Bonding e⁻). Nitrogen has 5 valence electrons. In this resonance structure, N has 0 lone pairs and 4 bonds (1 double + 2 single = 8 bonding electrons). FC = 5 − 0 − 4 = **+1**. The two single-bonded oxygens each carry -1 formal charge.",
        difficulty: 2,
        tags: ["formal charge", "resonance"],
      },
      {
        stem: "Which compound would you expect to have the highest boiling point?",
        choices: [
          { label: "A", text: "CH₄ (methane)", isCorrect: false },
          { label: "B", text: "CH₃OH (methanol)", isCorrect: true },
          { label: "C", text: "CH₃CH₃ (ethane)", isCorrect: false },
          { label: "D", text: "CH₃F (fluoromethane)", isCorrect: false },
          { label: "E", text: "Ne (neon)", isCorrect: false },
        ],
        explanation: "Methanol (CH₃OH) can form **hydrogen bonds** (O–H...O), which are the strongest intermolecular forces among these choices. CH₄ and ethane only have weak London dispersion forces. CH₃F has dipole-dipole interactions but cannot form hydrogen bonds (F is bonded to C, not H). Ne has only LDF and is a noble gas with a very low boiling point.",
        difficulty: 2,
        tags: ["intermolecular forces", "boiling point"],
      },
      {
        stem: "What is the electron geometry and molecular geometry of SO₂?",
        choices: [
          { label: "A", text: "Linear, linear", isCorrect: false },
          { label: "B", text: "Trigonal planar, bent", isCorrect: true },
          { label: "C", text: "Tetrahedral, bent", isCorrect: false },
          { label: "D", text: "Trigonal planar, trigonal planar", isCorrect: false },
          { label: "E", text: "Linear, bent", isCorrect: false },
        ],
        explanation: "Sulfur in SO₂ has **3 electron groups** (2 bonding regions + 1 lone pair). The electron geometry is **trigonal planar** (sp²). The lone pair is not visible, so the molecular geometry is **bent** with a bond angle of ~119°. This is different from H₂O which is also bent but has tetrahedral electron geometry (sp³).",
        difficulty: 2,
        tags: ["VSEPR", "molecular geometry"],
      },
      {
        stem: "What is the hybridization of the central carbon in CO₂?",
        choices: [
          { label: "A", text: "sp", isCorrect: true },
          { label: "B", text: "sp²", isCorrect: false },
          { label: "C", text: "sp³", isCorrect: false },
          { label: "D", text: "sp³d", isCorrect: false },
          { label: "E", text: "sp³d²", isCorrect: false },
        ],
        explanation: "Carbon in CO₂ has **2 electron groups** (2 double bonds — each double bond counts as one group). Two electron groups require **sp hybridization**, giving a linear geometry with 180° bond angles. The two unhybridized p orbitals on carbon form the two π bonds with the oxygen atoms.",
        difficulty: 1,
        tags: ["hybridization", "sp"],
      },
      {
        stem: "Which type of bond is formed between Na and Cl in NaCl?",
        choices: [
          { label: "A", text: "Nonpolar covalent", isCorrect: false },
          { label: "B", text: "Polar covalent", isCorrect: false },
          { label: "C", text: "Ionic", isCorrect: true },
          { label: "D", text: "Metallic", isCorrect: false },
          { label: "E", text: "Hydrogen bond", isCorrect: false },
        ],
        explanation: "NaCl is formed between a **metal (Na)** and a **nonmetal (Cl)**. The electronegativity difference is 3.0 − 0.9 = 2.1, which is greater than 1.7, confirming an **ionic bond**. Na transfers its valence electron to Cl, forming Na⁺ and Cl⁻ ions held together by electrostatic attraction in a crystal lattice.",
        difficulty: 1,
        tags: ["ionic bonds", "bond type"],
      },
      {
        stem: "Which of the following molecules can exhibit hydrogen bonding with itself?",
        choices: [
          { label: "A", text: "CH₃OCH₃ (dimethyl ether)", isCorrect: false },
          { label: "B", text: "CH₃NH₂ (methylamine)", isCorrect: true },
          { label: "C", text: "CH₃F (fluoromethane)", isCorrect: false },
          { label: "D", text: "CH₃SH (methanethiol)", isCorrect: false },
          { label: "E", text: "CH₃Cl (chloromethane)", isCorrect: false },
        ],
        explanation: "Hydrogen bonding requires H bonded directly to **F, O, or N** on the same molecule that can also act as a hydrogen bond donor. **CH₃NH₂** has N−H bonds, so it can both donate and accept hydrogen bonds with other CH₃NH₂ molecules. Dimethyl ether has an O but no O−H bond. CH₃F has F bonded to C, not H. CH₃SH involves S, which is too large for effective H-bonding.",
        difficulty: 2,
        tags: ["hydrogen bonding", "intermolecular forces"],
      },
      {
        stem: "A molecule has the Lewis structure showing a central atom with 4 bonding pairs and 0 lone pairs. The bond angle is approximately:",
        choices: [
          { label: "A", text: "90°", isCorrect: false },
          { label: "B", text: "109.5°", isCorrect: true },
          { label: "C", text: "120°", isCorrect: false },
          { label: "D", text: "180°", isCorrect: false },
          { label: "E", text: "104.5°", isCorrect: false },
        ],
        explanation: "Four bonding pairs with no lone pairs gives a **tetrahedral** molecular geometry with bond angles of **109.5°**. This is the geometry of CH₄, CCl₄, and similar molecules. 104.5° is the bond angle for water (bent, with 2 lone pairs compressing the angle from 109.5°). 120° is trigonal planar, 180° is linear, and 90° is octahedral.",
        difficulty: 1,
        tags: ["VSEPR", "bond angles"],
      },
    ],
  },
  {
    slug: "thermodynamics",
    title: "Thermodynamics",
    description: "Enthalpy, entropy, Gibbs free energy, Hess's Law, calorimetry",
    estimatedMinutes: 50,
    lessons: [
      {
        slug: "enthalpy-calorimetry",
        title: "Enthalpy, Hess's Law & Calorimetry",
        content: `# Enthalpy, Hess's Law & Calorimetry

Thermodynamics describes the energy changes that accompany chemical reactions. For the DAT, you must be comfortable with enthalpy calculations, Hess's Law, and calorimetry problems.

## First Law of Thermodynamics

**Energy is conserved.** The total energy of the universe is constant.

**ΔE = q + w**

Where:
- ΔE = change in internal energy
- q = heat (+ if absorbed, − if released)
- w = work (+ if done ON the system, − if done BY the system)
- For gases at constant pressure: w = −PΔV

## Enthalpy (H)

**Enthalpy** is the heat exchanged at constant pressure.

**ΔH = q_p** (heat at constant pressure)

| Process | ΔH | Term |
|---------|-----|------|
| Heat absorbed | Positive (+) | **Endothermic** |
| Heat released | Negative (−) | **Exothermic** |

### Standard Enthalpy of Formation (ΔH°f)

- The enthalpy change when **1 mole** of a compound is formed from its elements in their **standard states** (25°C, 1 atm)
- ΔH°f for any element in its standard state = **0** (e.g., O₂(g), C(graphite), Fe(s))

**Calculating ΔH°rxn from formation enthalpies:**

**ΔH°rxn = Σ ΔH°f(products) − Σ ΔH°f(reactants)**

> **High-Yield DAT Tip:** This formula is extremely common on the DAT. Remember: products minus reactants, weighted by stoichiometric coefficients.

## Hess's Law

**The total enthalpy change for a reaction is independent of the pathway.** You can add individual ΔH values for a series of steps to find the overall ΔH.

### Rules for Manipulating Reactions

1. **Reverse a reaction:** Change the sign of ΔH
2. **Multiply a reaction by a coefficient:** Multiply ΔH by the same coefficient
3. **Add reactions:** Add the ΔH values

### Example Problem

Find ΔH for: C(s) + 1/2 O₂(g) → CO(g)

Given:
- C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ
- CO(g) + 1/2 O₂(g) → CO₂(g), ΔH = −283.0 kJ

**Solution:** Keep reaction 1, reverse reaction 2:
- C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ
- CO₂(g) → CO(g) + 1/2 O₂(g), ΔH = +283.0 kJ

Add: C(s) + 1/2 O₂(g) → CO(g), ΔH = −393.5 + 283.0 = **−110.5 kJ**

## Bond Enthalpies

**ΔH°rxn = Σ (bonds broken) − Σ (bonds formed)**

- Breaking bonds is **endothermic** (+)
- Forming bonds is **exothermic** (−)
- This equation uses the absolute values of bond energies

> **DAT Tip:** Bond enthalpy formula is "broken minus formed." If breaking requires more energy than forming releases, the reaction is endothermic. If forming releases more, it's exothermic.

## Calorimetry

Calorimetry measures the heat exchanged in a chemical or physical process.

### Key Equations

**q = mcΔT** (for a substance with specific heat capacity)

Where:
- q = heat (J or kJ)
- m = mass (g)
- c = specific heat capacity (J/g·°C)
- ΔT = T_final − T_initial

**q = CΔT** (for a calorimeter with heat capacity C)

Where C = calorimeter constant (J/°C)

### Important Specific Heat Values

| Substance | Specific Heat (J/g·°C) |
|-----------|----------------------|
| Water (liquid) | **4.184** |
| Water (ice) | 2.09 |
| Water (steam) | 2.01 |

> **High-Yield DAT Tip:** Water's specific heat is 4.184 J/g·°C. The DAT expects you to know this value. Water has an unusually high specific heat due to hydrogen bonding.

### Coffee-Cup vs. Bomb Calorimetry

| Feature | Coffee-Cup | Bomb |
|---------|-----------|------|
| Pressure | Constant (open) | Constant volume (closed) |
| Measures | ΔH (enthalpy) | ΔE (internal energy) |
| Used for | Solution reactions | Combustion reactions |

### Phase Change Energy

During a phase change, temperature stays constant while energy is absorbed or released.

**q = nΔH_fus** (melting/freezing)
**q = nΔH_vap** (boiling/condensation)

### Heating Curve

A heating curve shows temperature vs. heat added:

1. **Solid phase:** Temperature rises (q = mcΔT, c of solid)
2. **Melting:** Temperature constant at melting point (q = nΔH_fus)
3. **Liquid phase:** Temperature rises (q = mcΔT, c of liquid)
4. **Boiling:** Temperature constant at boiling point (q = nΔH_vap)
5. **Gas phase:** Temperature rises (q = mcΔT, c of gas)

> **DAT Tip:** On a heating curve, flat regions = phase changes. The longer flat region is boiling (ΔH_vap > ΔH_fus).

## Key Terms
- **System:** The part of the universe being studied
- **Surroundings:** Everything outside the system
- **State function:** Property that depends only on the current state (H, E, S, G) — not path-dependent
- **Exothermic:** Releases heat to surroundings (ΔH < 0)
- **Endothermic:** Absorbs heat from surroundings (ΔH > 0)
`,
        keyTerms: [
          { term: "Enthalpy (H)", definition: "Heat exchanged at constant pressure; ΔH < 0 for exothermic, ΔH > 0 for endothermic" },
          { term: "Hess's Law", definition: "Total ΔH is independent of pathway; sum the ΔH values of individual steps" },
          { term: "Standard Enthalpy of Formation", definition: "ΔH when 1 mol of compound forms from elements in standard states" },
          { term: "Calorimetry", definition: "Measurement of heat changes using q = mcΔT" },
          { term: "Specific Heat Capacity", definition: "Energy needed to raise 1 g of a substance by 1°C (water = 4.184 J/g·°C)" },
          { term: "Bond Enthalpy", definition: "Energy required to break 1 mol of a bond in the gas phase" },
        ],
      },
      {
        slug: "entropy-gibbs",
        title: "Entropy & Gibbs Free Energy",
        content: `# Entropy & Gibbs Free Energy

Entropy and Gibbs free energy determine whether a reaction will proceed spontaneously. The DAT expects you to predict spontaneity and understand the interplay between enthalpy and entropy.

## Second Law of Thermodynamics

**The total entropy of the universe always increases for a spontaneous process.**

ΔS_universe = ΔS_system + ΔS_surroundings > 0 (for spontaneous processes)

## Entropy (S)

**Entropy** is a measure of **disorder** or the number of available **microstates** (W).

**S = k_B ln W** (Boltzmann equation)

### Predicting Entropy Changes

Entropy increases (ΔS > 0) when:
- **Solid → Liquid → Gas** (more freedom of motion)
- **Fewer moles → More moles** of gas
- **Temperature increases** (more kinetic energy)
- **Dissolution** occurs (solute disperses)
- **Larger, more complex molecules** (more vibrational modes)

| Process | ΔS |
|---------|-----|
| Ice melting | + |
| Water boiling | + |
| Gas condensing | − |
| 2 mol gas → 1 mol gas | − |
| Dissolving NaCl in water | + |

> **DAT Tip:** To quickly predict the sign of ΔS for a reaction: compare moles of gas on each side. More moles of gas in products → ΔS > 0.

### Standard Molar Entropy

**ΔS°rxn = Σ S°(products) − Σ S°(reactants)**

Key differences from ΔH°f:
- Standard molar entropies are **always positive** (S° > 0 for all substances, even elements)
- Elements do NOT have S° = 0 (unlike ΔH°f)
- Perfect crystal at 0 K has S = 0 (**Third Law of Thermodynamics**)

## Third Law of Thermodynamics

**The entropy of a perfect crystalline substance is zero at absolute zero (0 K).**

This provides an absolute reference point for entropy — unlike enthalpy, we can measure absolute values of entropy.

## Gibbs Free Energy (G)

**ΔG = ΔH − TΔS**

This is the master equation for spontaneity.

| ΔG | Reaction |
|----|----------|
| **Negative (−)** | **Spontaneous** (thermodynamically favorable) |
| **Zero (0)** | At **equilibrium** |
| **Positive (+)** | **Non-spontaneous** (reverse reaction is spontaneous) |

### Predicting Spontaneity from ΔH and ΔS

| ΔH | ΔS | ΔG | Spontaneous? |
|----|-----|-----|-------------|
| − | + | Always − | **Always spontaneous** |
| + | − | Always + | **Never spontaneous** |
| − | − | Depends on T | Spontaneous at **low T** |
| + | + | Depends on T | Spontaneous at **high T** |

> **High-Yield DAT Tip:** Memorize this 2×2 table. The DAT frequently asks "at what temperature does this reaction become spontaneous?" Use ΔG = 0 → T = ΔH/ΔS to find the crossover temperature.

### Standard Free Energy of Formation

**ΔG°rxn = Σ ΔG°f(products) − Σ ΔG°f(reactants)**

Similar to the ΔH°f calculation. ΔG°f for elements in standard states = 0.

### Relationship Between ΔG° and Equilibrium

**ΔG° = −RT ln K**

Where R = 8.314 J/(mol·K), T in Kelvin, K = equilibrium constant.

| ΔG° | K | Meaning |
|-----|---|---------|
| Negative | K > 1 | Products favored at equilibrium |
| Zero | K = 1 | Neither side favored |
| Positive | K < 1 | Reactants favored at equilibrium |

> **DAT Tip:** ΔG° tells you about the standard state. Actual ΔG depends on concentrations: **ΔG = ΔG° + RT ln Q**. At equilibrium, Q = K and ΔG = 0.

### Free Energy and Coupled Reactions

In biological systems, unfavorable reactions (ΔG > 0) can be driven by coupling them to highly favorable reactions like ATP hydrolysis (ΔG° = −30.5 kJ/mol).

Example:
- Reaction A: ΔG = +15 kJ/mol (non-spontaneous)
- ATP → ADP + Pi: ΔG = −30.5 kJ/mol
- Coupled: ΔG = +15 + (−30.5) = −15.5 kJ/mol (**spontaneous**)

## Thermodynamics vs. Kinetics

**Thermodynamics (ΔG)** tells you WHETHER a reaction CAN occur.
**Kinetics (E_a)** tells you HOW FAST a reaction occurs.

A reaction can be thermodynamically favorable (ΔG < 0) but kinetically slow (high activation energy). Example: diamond → graphite is thermodynamically favorable but extremely slow at room temperature.

> **DAT Tip:** Thermodynamics and kinetics are independent. A catalyst lowers E_a (speeds up the reaction) but does NOT change ΔG, ΔH, or K.

## Key Terms
- **Spontaneous:** Occurs without continuous external input (ΔG < 0)
- **Entropy:** Measure of disorder or number of microstates
- **Gibbs Free Energy:** Combines enthalpy and entropy to predict spontaneity
- **Equilibrium:** ΔG = 0; no net change in concentrations
`,
        keyTerms: [
          { term: "Entropy (S)", definition: "Measure of disorder or randomness; always increases for the universe in spontaneous processes" },
          { term: "Gibbs Free Energy (G)", definition: "ΔG = ΔH − TΔS; negative means spontaneous" },
          { term: "Spontaneous", definition: "A process with ΔG < 0; occurs without continuous energy input" },
          { term: "Third Law of Thermodynamics", definition: "Entropy of a perfect crystal is zero at absolute zero (0 K)" },
          { term: "Coupled Reactions", definition: "Pairing a non-spontaneous reaction with a highly spontaneous one to drive it forward" },
          { term: "Equilibrium Constant (K)", definition: "Related to ΔG° by ΔG° = −RT ln K; K > 1 means products favored" },
        ],
      },
    ],
    questions: [
      {
        stem: "Given the following standard enthalpies of formation: ΔH°f[CO₂(g)] = −393.5 kJ/mol, ΔH°f[H₂O(l)] = −285.8 kJ/mol, ΔH°f[C₂H₆(g)] = −84.7 kJ/mol. Calculate ΔH° for the combustion of ethane: C₂H₆(g) + 7/2 O₂(g) → 2CO₂(g) + 3H₂O(l).",
        choices: [
          { label: "A", text: "−1559.8 kJ", isCorrect: false },
          { label: "B", text: "−1559.7 kJ", isCorrect: false },
          { label: "C", text: "−1559.9 kJ", isCorrect: false },
          { label: "D", text: "−1559.5 kJ", isCorrect: true },
          { label: "E", text: "+1559.5 kJ", isCorrect: false },
        ],
        explanation: "Using ΔH°rxn = Σ ΔH°f(products) − Σ ΔH°f(reactants): Products: 2(−393.5) + 3(−285.8) = −787.0 + (−857.4) = −1644.4 kJ. Reactants: (−84.7) + 7/2(0) = −84.7 kJ (O₂ is an element in standard state, ΔH°f = 0). ΔH° = −1644.4 − (−84.7) = **−1559.7 kJ**. The closest answer is −1559.5 kJ accounting for rounding in the given values. The negative sign confirms combustion is **exothermic**.",
        difficulty: 3,
        tags: ["enthalpy of formation", "Hess's Law", "combustion"],
      },
      {
        stem: "A reaction has ΔH = +80 kJ/mol and ΔS = +200 J/(mol·K). At what temperature does this reaction become spontaneous?",
        choices: [
          { label: "A", text: "Below 400 K", isCorrect: false },
          { label: "B", text: "Above 400 K", isCorrect: true },
          { label: "C", text: "At all temperatures", isCorrect: false },
          { label: "D", text: "Never spontaneous", isCorrect: false },
          { label: "E", text: "Above 800 K", isCorrect: false },
        ],
        explanation: "For ΔG = 0 (crossover point): T = ΔH/ΔS = 80,000 J / 200 J/K = **400 K**. Since ΔH is positive and ΔS is positive, this reaction is spontaneous at **high temperatures** (above 400 K) where the TΔS term dominates. Below 400 K, ΔG > 0 and the reaction is non-spontaneous. Note: convert ΔH to J to match units with ΔS.",
        difficulty: 2,
        tags: ["Gibbs free energy", "spontaneity", "temperature"],
      },
      {
        stem: "How much heat is required to raise the temperature of 200 g of water from 25°C to 75°C? (Specific heat of water = 4.184 J/g·°C)",
        choices: [
          { label: "A", text: "20.9 kJ", isCorrect: false },
          { label: "B", text: "41.8 kJ", isCorrect: true },
          { label: "C", text: "83.7 kJ", isCorrect: false },
          { label: "D", text: "4.18 kJ", isCorrect: false },
          { label: "E", text: "209 kJ", isCorrect: false },
        ],
        explanation: "Using q = mcΔT: q = (200 g)(4.184 J/g·°C)(75 − 25°C) = (200)(4.184)(50) = **41,840 J = 41.8 kJ**. This is a straightforward calorimetry calculation — make sure units are consistent and remember to convert J to kJ by dividing by 1000.",
        difficulty: 1,
        tags: ["calorimetry", "specific heat"],
      },
      {
        stem: "For a reaction at equilibrium with ΔG° = −5.7 kJ/mol, what can be said about the equilibrium constant K?",
        choices: [
          { label: "A", text: "K = 0", isCorrect: false },
          { label: "B", text: "K < 1", isCorrect: false },
          { label: "C", text: "K = 1", isCorrect: false },
          { label: "D", text: "K > 1", isCorrect: true },
          { label: "E", text: "K cannot be determined", isCorrect: false },
        ],
        explanation: "From ΔG° = −RT ln K: A negative ΔG° means ln K > 0, which means **K > 1**. This tells us products are **favored at equilibrium**. When ΔG° = 0, K = 1. When ΔG° > 0, K < 1 (reactants favored). Note: ΔG° ≠ ΔG. At actual equilibrium, ΔG = 0, but ΔG° tells us the position of equilibrium.",
        difficulty: 2,
        tags: ["Gibbs free energy", "equilibrium constant"],
      },
      {
        stem: "Which of the following processes results in a decrease in entropy?",
        choices: [
          { label: "A", text: "Ice melting at 0°C", isCorrect: false },
          { label: "B", text: "NaCl dissolving in water", isCorrect: false },
          { label: "C", text: "2 NO₂(g) → N₂O₄(g)", isCorrect: true },
          { label: "D", text: "CaCO₃(s) → CaO(s) + CO₂(g)", isCorrect: false },
          { label: "E", text: "Liquid water evaporating", isCorrect: false },
        ],
        explanation: "In the reaction 2 NO₂(g) → N₂O₄(g), **2 moles of gas combine to form 1 mole of gas**. Fewer gas molecules = fewer microstates = **decreased entropy (ΔS < 0)**. Melting, dissolving, decomposition producing a gas, and evaporation all increase entropy.",
        difficulty: 1,
        tags: ["entropy", "predicting ΔS"],
      },
      {
        stem: "Using bond enthalpies, estimate ΔH for: H₂(g) + Cl₂(g) → 2 HCl(g). Bond enthalpies: H−H = 436 kJ/mol, Cl−Cl = 242 kJ/mol, H−Cl = 431 kJ/mol.",
        choices: [
          { label: "A", text: "+247 kJ", isCorrect: false },
          { label: "B", text: "−184 kJ", isCorrect: true },
          { label: "C", text: "+184 kJ", isCorrect: false },
          { label: "D", text: "−247 kJ", isCorrect: false },
          { label: "E", text: "−431 kJ", isCorrect: false },
        ],
        explanation: "ΔH = Σ(bonds broken) − Σ(bonds formed). Bonds broken: 1×H−H (436) + 1×Cl−Cl (242) = 678 kJ. Bonds formed: 2×H−Cl (2×431) = 862 kJ. ΔH = 678 − 862 = **−184 kJ**. The negative value confirms the reaction is exothermic — more energy is released forming H−Cl bonds than is consumed breaking H−H and Cl−Cl.",
        difficulty: 2,
        tags: ["bond enthalpy", "Hess's Law"],
      },
      {
        stem: "On a heating curve, the flat region at 100°C for water corresponds to:",
        choices: [
          { label: "A", text: "Increasing kinetic energy", isCorrect: false },
          { label: "B", text: "Phase change from liquid to gas (vaporization)", isCorrect: true },
          { label: "C", text: "Phase change from solid to liquid (melting)", isCorrect: false },
          { label: "D", text: "Superheating of the liquid", isCorrect: false },
          { label: "E", text: "Decreasing potential energy", isCorrect: false },
        ],
        explanation: "On a heating curve, **flat (horizontal) regions** correspond to **phase changes** where added heat is used to overcome intermolecular forces rather than increase temperature. At 100°C, water undergoes **vaporization** (liquid → gas). During this plateau, q = nΔH_vap. The flat region at 0°C would be melting.",
        difficulty: 1,
        tags: ["heating curve", "phase changes"],
      },
      {
        stem: "Which statement about a catalyst is correct?",
        choices: [
          { label: "A", text: "It changes the equilibrium constant K", isCorrect: false },
          { label: "B", text: "It makes ΔG more negative", isCorrect: false },
          { label: "C", text: "It lowers the activation energy without changing ΔH or ΔG", isCorrect: true },
          { label: "D", text: "It shifts equilibrium toward products", isCorrect: false },
          { label: "E", text: "It is consumed during the reaction", isCorrect: false },
        ],
        explanation: "A catalyst provides an **alternative reaction pathway** with a **lower activation energy** (Ea). It speeds up both forward and reverse reactions equally, so it does NOT change ΔH, ΔG, ΔS, or K. It helps the system reach equilibrium faster but does not shift the position of equilibrium. A catalyst is regenerated and not consumed.",
        difficulty: 1,
        tags: ["catalysts", "thermodynamics vs kinetics"],
      },
      {
        stem: "A reaction has ΔH < 0 and ΔS < 0. Under what conditions is the reaction spontaneous?",
        choices: [
          { label: "A", text: "At all temperatures", isCorrect: false },
          { label: "B", text: "Only at high temperatures", isCorrect: false },
          { label: "C", text: "Only at low temperatures", isCorrect: true },
          { label: "D", text: "Never spontaneous", isCorrect: false },
          { label: "E", text: "Only when a catalyst is added", isCorrect: false },
        ],
        explanation: "When ΔH < 0 (exothermic) and ΔS < 0 (entropy decreases), ΔG = ΔH − TΔS. At low temperatures, the TΔS term is small and ΔH dominates, making ΔG negative (**spontaneous**). At high temperatures, the −TΔS term becomes large and positive, making ΔG positive (non-spontaneous). The crossover temperature is T = ΔH/ΔS.",
        difficulty: 2,
        tags: ["Gibbs free energy", "spontaneity"],
      },
      {
        stem: "The standard enthalpy of formation (ΔH°f) of O₂(g) is:",
        choices: [
          { label: "A", text: "−249 kJ/mol", isCorrect: false },
          { label: "B", text: "−498 kJ/mol", isCorrect: false },
          { label: "C", text: "+249 kJ/mol", isCorrect: false },
          { label: "D", text: "0 kJ/mol", isCorrect: true },
          { label: "E", text: "Cannot be determined", isCorrect: false },
        ],
        explanation: "The standard enthalpy of formation for any **element in its standard state** is defined as **zero**. O₂(g) is oxygen in its standard state (diatomic gas at 25°C, 1 atm). Other examples: C(graphite), N₂(g), Fe(s), and H₂(g) all have ΔH°f = 0. Note that O₃ (ozone) would NOT be zero because it is not the standard state of oxygen.",
        difficulty: 1,
        tags: ["enthalpy of formation", "standard state"],
      },
    ],
  },
  {
    slug: "acids-bases",
    title: "Acids & Bases",
    description: "pH, pKa, buffers, titrations, strong vs weak acids and bases",
    estimatedMinutes: 50,
    lessons: [
      {
        slug: "ph-acid-base-theory",
        title: "Acid-Base Theory & pH Calculations",
        content: `# Acid-Base Theory & pH Calculations

Acids and bases are among the most heavily tested topics on the DAT General Chemistry section. You must understand multiple definitions, pH calculations, and the properties of strong vs. weak acids/bases.

## Three Definitions of Acids and Bases

| Definition | Acid | Base |
|------------|------|------|
| **Arrhenius** | Produces H⁺ in water | Produces OH⁻ in water |
| **Brønsted-Lowry** | Proton (H⁺) **donor** | Proton (H⁺) **acceptor** |
| **Lewis** | Electron pair **acceptor** | Electron pair **donor** |

> **High-Yield DAT Tip:** The Brønsted-Lowry definition is the most commonly used on the DAT. The Lewis definition is broader and includes reactions without proton transfer (e.g., BF₃ + NH₃).

### Conjugate Acid-Base Pairs

When an acid donates a proton, it becomes its **conjugate base**. When a base accepts a proton, it becomes its **conjugate acid**.

- HCl → H⁺ + Cl⁻ (HCl is the acid, Cl⁻ is the conjugate base)
- NH₃ + H⁺ → NH₄⁺ (NH₃ is the base, NH₄⁺ is the conjugate acid)

**Key relationship:** A strong acid has a **weak conjugate base**, and a weak acid has a **relatively strong conjugate base**.

## Strong vs. Weak Acids and Bases

### Strong Acids (completely dissociate — memorize these!)

| Acid | Formula |
|------|---------|
| Hydrochloric acid | HCl |
| Hydrobromic acid | HBr |
| Hydroiodic acid | HI |
| Nitric acid | HNO₃ |
| Sulfuric acid | H₂SO₄ |
| Perchloric acid | HClO₄ |
| Chloric acid | HClO₃ |

### Strong Bases (completely dissociate)

Group 1A hydroxides: LiOH, NaOH, KOH, RbOH, CsOH
Group 2A hydroxides: Ca(OH)₂, Sr(OH)₂, Ba(OH)₂

> **DAT Tip:** There are only 7 strong acids and ~8 strong bases. Everything else is **weak**. If you can't name it as strong, it's weak.

### Weak Acids and Bases

Weak acids **partially dissociate** and establish equilibrium:

HA ⇌ H⁺ + A⁻, with equilibrium constant **Ka**

Weak bases **partially ionize**:

B + H₂O ⇌ BH⁺ + OH⁻, with equilibrium constant **Kb**

**Relationship:** Ka × Kb = Kw = 1.0 × 10⁻¹⁴ (at 25°C)
**Also:** pKa + pKb = 14

## pH, pOH, and the Water Autoionization

**Water autoionization:** H₂O ⇌ H⁺ + OH⁻

**Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴** (at 25°C)

| Formula | Definition |
|---------|------------|
| **pH = −log[H⁺]** | Measure of acidity |
| **pOH = −log[OH⁻]** | Measure of basicity |
| **pH + pOH = 14** | Always true at 25°C |
| **[H⁺] = 10⁻ᵖᴴ** | Convert pH to concentration |

| pH | Solution |
|----|----------|
| < 7 | Acidic |
| = 7 | Neutral |
| > 7 | Basic |

### Quick pH Calculation Examples

**Strong acid:** 0.01 M HCl → [H⁺] = 0.01 M → pH = −log(0.01) = **2.0**

**Strong base:** 0.001 M NaOH → [OH⁻] = 0.001 M → pOH = 3.0 → pH = **11.0**

### Weak Acid pH Calculation (ICE Table)

For a weak acid HA with concentration C and Ka:

If Ka is small (Ka/C < 0.01), use the approximation:

**[H⁺] = √(Ka × C)**

**pH = −log[H⁺]**

Example: 0.1 M acetic acid (Ka = 1.8 × 10⁻⁵)
- [H⁺] = √(1.8 × 10⁻⁵ × 0.1) = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ M
- pH = −log(1.34 × 10⁻³) ≈ **2.87**

> **DAT Tip:** For weak acid pH calculations, the approximation [H⁺] = √(Ka × C) works when the percent dissociation is less than 5%. Verify by checking that x/C < 0.05.

## Polyprotic Acids

Acids with more than one ionizable proton (e.g., H₂SO₄, H₃PO₄, H₂CO₃):

- Ka₁ >> Ka₂ >> Ka₃ (each successive proton is harder to remove)
- For pH calculations, only the **first dissociation** typically matters

| Acid | Ka₁ | Ka₂ |
|------|-----|-----|
| H₂CO₃ | 4.3 × 10⁻⁷ | 4.7 × 10⁻¹¹ |
| H₂SO₃ | 1.5 × 10⁻² | 6.3 × 10⁻⁸ |
| H₃PO₄ | 7.1 × 10⁻³ | 6.3 × 10⁻⁸ |

## Amphoteric Substances

An **amphoteric** substance can act as either an acid or a base depending on the other reactant.

- **Water (H₂O):** Can donate H⁺ (acid) or accept H⁺ (base)
- **HSO₄⁻, HCO₃⁻, H₂PO₄⁻:** Can donate or accept protons
- **Amino acids:** Have both −NH₃⁺ (acid) and −COO⁻ (base) groups

## Key Terms
- **pKa:** −log(Ka); lower pKa = stronger acid
- **Conjugate pair:** Acid and its deprotonated form (or base and its protonated form)
- **Amphiprotic:** Can donate or accept a proton
`,
        keyTerms: [
          { term: "Brønsted-Lowry Acid", definition: "Proton (H⁺) donor" },
          { term: "Lewis Base", definition: "Electron pair donor" },
          { term: "pH", definition: "−log[H⁺]; scale measuring acidity (lower = more acidic)" },
          { term: "Ka", definition: "Acid dissociation constant; larger Ka = stronger acid" },
          { term: "Conjugate Base", definition: "Species formed when an acid donates a proton" },
          { term: "Amphoteric", definition: "Substance that can act as either an acid or a base" },
          { term: "Kw", definition: "Ion product of water = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C" },
        ],
      },
      {
        slug: "buffers-titrations",
        title: "Buffers & Titrations",
        content: `# Buffers & Titrations

Buffers and titrations are essential acid-base topics on the DAT. You must know how buffers resist pH changes, how to use the Henderson-Hasselbalch equation, and how to interpret titration curves.

## Buffers

A **buffer** is a solution that resists changes in pH when small amounts of acid or base are added.

### Composition of a Buffer

A buffer contains:
- A **weak acid** and its **conjugate base** (e.g., CH₃COOH / CH₃COO⁻)
- OR a **weak base** and its **conjugate acid** (e.g., NH₃ / NH₄⁺)

> **DAT Tip:** A buffer CANNOT be made from a strong acid and its conjugate base (e.g., HCl/Cl⁻) because strong acids dissociate completely — there's no equilibrium to resist pH changes.

### Henderson-Hasselbalch Equation

**pH = pKa + log([A⁻]/[HA])**

Where:
- [A⁻] = concentration of conjugate base
- [HA] = concentration of weak acid
- pKa = −log(Ka)

**Key relationships:**
- When [A⁻] = [HA]: pH = pKa (the buffer is at its midpoint)
- When [A⁻] > [HA]: pH > pKa
- When [A⁻] < [HA]: pH < pKa

> **High-Yield DAT Tip:** At the half-equivalence point of a titration, exactly half the acid has been neutralized, so [A⁻] = [HA] and **pH = pKa**. This is the easiest way to determine pKa from a titration curve.

### Buffer Capacity

- **Buffer capacity** is the amount of acid or base a buffer can neutralize before the pH changes significantly
- Maximum buffer capacity occurs when **pH = pKa** (equal amounts of acid and conjugate base)
- Effective buffer range: **pKa ± 1** (roughly pH = pKa − 1 to pH = pKa + 1)
- Higher concentrations → greater buffer capacity

### How Buffers Work

When **acid (H⁺)** is added: The conjugate base (A⁻) reacts with H⁺ → HA
When **base (OH⁻)** is added: The weak acid (HA) reacts with OH⁻ → A⁻ + H₂O

The ratio [A⁻]/[HA] changes slightly, but the log function dampens the pH change.

## Titrations

A **titration** is the gradual addition of a known solution (titrant) to an unknown solution (analyte) to determine concentration or study acid-base behavior.

### Strong Acid + Strong Base Titration

Example: HCl titrated with NaOH

- **Initial pH:** Low (determined by [HCl])
- **Equivalence point:** pH = **7.00** (neutral salt NaCl forms)
- **Curve shape:** Steep rise near equivalence point

### Weak Acid + Strong Base Titration

Example: CH₃COOH titrated with NaOH

| Region | Description | pH |
|--------|-------------|-----|
| Initial | Weak acid alone | Calculated from Ka |
| Buffer region | Mix of HA and A⁻ | Henderson-Hasselbalch |
| Half-equivalence | [HA] = [A⁻] | **pH = pKa** |
| Equivalence point | All HA converted to A⁻ | **pH > 7** (basic) |
| After equivalence | Excess NaOH | pOH from excess [OH⁻] |

> **DAT Tip:** For weak acid + strong base titrations, the equivalence point pH is ALWAYS **above 7** because the conjugate base (A⁻) hydrolyzes to produce OH⁻.

### Weak Base + Strong Acid Titration

Example: NH₃ titrated with HCl

- Half-equivalence point: **pOH = pKb** (or pH = 14 − pKb)
- Equivalence point: **pH < 7** (acidic, because NH₄⁺ is a weak acid)

### Indicators

An **indicator** is a weak acid that changes color at a specific pH range. Choose an indicator whose color change range includes the equivalence point pH.

| Indicator | pH Range | Color Change |
|-----------|----------|-------------|
| Methyl orange | 3.1-4.4 | Red → Yellow |
| Litmus | 5.0-8.0 | Red → Blue |
| Phenolphthalein | 8.2-10.0 | Colorless → Pink |

- Strong acid + strong base: Use any indicator near pH 7
- Weak acid + strong base: Use **phenolphthalein** (equivalence point pH > 7)
- Weak base + strong acid: Use **methyl orange** (equivalence point pH < 7)

### Titration Calculations

At the equivalence point: **moles of acid = moles of base**

**M_acid × V_acid = M_base × V_base**

Example: What volume of 0.20 M NaOH is needed to neutralize 25 mL of 0.10 M HCl?
- (0.10)(25) = (0.20)(V_base)
- V_base = 2.5/0.20 = **12.5 mL**

## Polyprotic Acid Titrations

For a diprotic acid (like H₂CO₃), the titration curve shows **two equivalence points** and **two half-equivalence points** (one for each proton).

- First half-equivalence: pH = pKa₁
- Second half-equivalence: pH = pKa₂
- Between the two equivalence points is a buffer region

## Key Terms
- **Equivalence point:** Moles of acid = moles of base; reaction is complete
- **End point:** When the indicator changes color (ideally matches equivalence point)
- **Buffer region:** Flat portion of titration curve where pH changes slowly
- **Half-equivalence point:** Half the acid neutralized; pH = pKa
`,
        keyTerms: [
          { term: "Buffer", definition: "Solution of weak acid + conjugate base that resists pH changes" },
          { term: "Henderson-Hasselbalch Equation", definition: "pH = pKa + log([A⁻]/[HA])" },
          { term: "Equivalence Point", definition: "Point in titration where moles of acid equal moles of base" },
          { term: "Half-Equivalence Point", definition: "Half the analyte neutralized; pH = pKa for a weak acid" },
          { term: "Buffer Capacity", definition: "Amount of acid/base a buffer can absorb; maximized at pH = pKa" },
          { term: "Indicator", definition: "Weak acid that changes color at a specific pH; chosen to match equivalence point" },
        ],
      },
    ],
    questions: [
      {
        stem: "What is the pH of a 0.0010 M HNO₃ solution?",
        choices: [
          { label: "A", text: "1", isCorrect: false },
          { label: "B", text: "2", isCorrect: false },
          { label: "C", text: "3", isCorrect: true },
          { label: "D", text: "4", isCorrect: false },
          { label: "E", text: "11", isCorrect: false },
        ],
        explanation: "HNO₃ is a **strong acid** that dissociates completely: [H⁺] = 0.0010 M = 1.0 × 10⁻³ M. pH = −log(1.0 × 10⁻³) = **3**. Since HNO₃ is one of the seven strong acids, we don't need Ka — it fully dissociates.",
        difficulty: 1,
        tags: ["pH", "strong acids"],
      },
      {
        stem: "A buffer solution is prepared by mixing 0.30 M acetic acid (pKa = 4.74) with 0.30 M sodium acetate. What is the pH of this buffer?",
        choices: [
          { label: "A", text: "3.74", isCorrect: false },
          { label: "B", text: "4.74", isCorrect: true },
          { label: "C", text: "5.74", isCorrect: false },
          { label: "D", text: "7.00", isCorrect: false },
          { label: "E", text: "9.26", isCorrect: false },
        ],
        explanation: "Using the Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]) = 4.74 + log(0.30/0.30) = 4.74 + log(1) = 4.74 + 0 = **4.74**. When [A⁻] = [HA], the log term equals zero and **pH = pKa**. This is the maximum buffer capacity point.",
        difficulty: 1,
        tags: ["Henderson-Hasselbalch", "buffers"],
      },
      {
        stem: "During the titration of a weak acid with a strong base, the pH at the equivalence point is:",
        choices: [
          { label: "A", text: "Less than 7", isCorrect: false },
          { label: "B", text: "Equal to 7", isCorrect: false },
          { label: "C", text: "Greater than 7", isCorrect: true },
          { label: "D", text: "Equal to the pKa", isCorrect: false },
          { label: "E", text: "Cannot be determined", isCorrect: false },
        ],
        explanation: "At the equivalence point, all the weak acid (HA) has been converted to its conjugate base (A⁻). The conjugate base is a **weak base** that hydrolyzes in water: A⁻ + H₂O ⇌ HA + OH⁻, producing hydroxide ions and making the solution **basic (pH > 7)**. The pH = pKa only at the half-equivalence point.",
        difficulty: 2,
        tags: ["titrations", "weak acid", "equivalence point"],
      },
      {
        stem: "Which of the following is a Lewis acid?",
        choices: [
          { label: "A", text: "NH₃", isCorrect: false },
          { label: "B", text: "OH⁻", isCorrect: false },
          { label: "C", text: "BF₃", isCorrect: true },
          { label: "D", text: "H₂O acting as a base", isCorrect: false },
          { label: "E", text: "F⁻", isCorrect: false },
        ],
        explanation: "A **Lewis acid** is an electron pair **acceptor**. BF₃ has an incomplete octet on boron (only 6 electrons) and readily accepts a lone pair from a Lewis base. NH₃, OH⁻, H₂O (as a base), and F⁻ are all Lewis bases — they have lone pairs to donate. BF₃ is a classic Lewis acid tested on the DAT.",
        difficulty: 2,
        tags: ["Lewis acid-base", "BF₃"],
      },
      {
        stem: "If the Ka of hydrofluoric acid (HF) is 6.8 × 10⁻⁴, what is the Kb of its conjugate base F⁻?",
        choices: [
          { label: "A", text: "1.5 × 10⁻¹¹", isCorrect: true },
          { label: "B", text: "6.8 × 10⁻⁴", isCorrect: false },
          { label: "C", text: "1.0 × 10⁻¹⁴", isCorrect: false },
          { label: "D", text: "6.8 × 10⁻¹⁰", isCorrect: false },
          { label: "E", text: "1.5 × 10⁻⁴", isCorrect: false },
        ],
        explanation: "For a conjugate acid-base pair: **Ka × Kb = Kw = 1.0 × 10⁻¹⁴**. Therefore Kb = Kw/Ka = (1.0 × 10⁻¹⁴)/(6.8 × 10⁻⁴) = **1.47 × 10⁻¹¹ ≈ 1.5 × 10⁻¹¹**. Since HF is a weak acid (but relatively strong among weak acids), its conjugate base F⁻ is a correspondingly weak base with a small Kb.",
        difficulty: 2,
        tags: ["Ka Kb relationship", "conjugate pairs"],
      },
      {
        stem: "What is the pH of a 0.10 M NaOH solution?",
        choices: [
          { label: "A", text: "1", isCorrect: false },
          { label: "B", text: "7", isCorrect: false },
          { label: "C", text: "10", isCorrect: false },
          { label: "D", text: "13", isCorrect: true },
          { label: "E", text: "14", isCorrect: false },
        ],
        explanation: "NaOH is a **strong base** that dissociates completely: [OH⁻] = 0.10 M. pOH = −log(0.10) = 1. pH = 14 − pOH = 14 − 1 = **13**. Remember: strong bases give [OH⁻] directly, then use pH + pOH = 14.",
        difficulty: 1,
        tags: ["pH", "strong bases"],
      },
      {
        stem: "Which indicator would be most appropriate for the titration of a weak acid with a strong base?",
        choices: [
          { label: "A", text: "Methyl orange (pH 3.1-4.4)", isCorrect: false },
          { label: "B", text: "Bromothymol blue (pH 6.0-7.6)", isCorrect: false },
          { label: "C", text: "Phenolphthalein (pH 8.2-10.0)", isCorrect: true },
          { label: "D", text: "Methyl red (pH 4.2-6.3)", isCorrect: false },
          { label: "E", text: "Any indicator would work", isCorrect: false },
        ],
        explanation: "For a weak acid + strong base titration, the equivalence point pH is **above 7** (basic) because the conjugate base (A⁻) hydrolyzes. **Phenolphthalein** (pH 8.2-10.0) is ideal because its color-change range brackets the equivalence point pH. Methyl orange would change color too early (before reaching the equivalence point).",
        difficulty: 2,
        tags: ["titrations", "indicators"],
      },
      {
        stem: "At the half-equivalence point of a weak acid titration, pH = 5.2. What is the pKa of the acid?",
        choices: [
          { label: "A", text: "2.6", isCorrect: false },
          { label: "B", text: "5.2", isCorrect: true },
          { label: "C", text: "8.8", isCorrect: false },
          { label: "D", text: "10.4", isCorrect: false },
          { label: "E", text: "Cannot be determined", isCorrect: false },
        ],
        explanation: "At the half-equivalence point, exactly half the weak acid has been neutralized, so **[HA] = [A⁻]**. Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa + 0 = **pKa**. Therefore pKa = **5.2**. This is the simplest method to determine pKa from a titration curve.",
        difficulty: 1,
        tags: ["half-equivalence point", "pKa"],
      },
      {
        stem: "Which of the following is the conjugate acid of HPO₄²⁻?",
        choices: [
          { label: "A", text: "PO₄³⁻", isCorrect: false },
          { label: "B", text: "H₃PO₄", isCorrect: false },
          { label: "C", text: "H₂PO₄⁻", isCorrect: true },
          { label: "D", text: "H₃O⁺", isCorrect: false },
          { label: "E", text: "OH⁻", isCorrect: false },
        ],
        explanation: "The **conjugate acid** is formed by adding one proton (H⁺) to the base. HPO₄²⁻ + H⁺ → **H₂PO₄⁻**. The conjugate base of HPO₄²⁻ would be PO₄³⁻ (remove a proton). HPO₄²⁻ is **amphoteric** — it can act as either an acid (donating H⁺ to form PO₄³⁻) or a base (accepting H⁺ to form H₂PO₄⁻).",
        difficulty: 1,
        tags: ["conjugate pairs", "polyprotic acids"],
      },
      {
        stem: "A buffer solution contains 0.20 M CH₃COOH and 0.40 M CH₃COO⁻ (pKa = 4.74). What is the pH?",
        choices: [
          { label: "A", text: "4.44", isCorrect: false },
          { label: "B", text: "4.74", isCorrect: false },
          { label: "C", text: "5.04", isCorrect: true },
          { label: "D", text: "5.74", isCorrect: false },
          { label: "E", text: "4.14", isCorrect: false },
        ],
        explanation: "Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = 4.74 + log(0.40/0.20) = 4.74 + log(2) = 4.74 + 0.30 = **5.04**. Since [A⁻] > [HA], the pH is above pKa. Remember log(2) ≈ 0.30 — this is a useful approximation for DAT calculations.",
        difficulty: 2,
        tags: ["Henderson-Hasselbalch", "buffer calculations"],
      },
    ],
  },
  {
    slug: "kinetics-equilibrium",
    title: "Kinetics & Equilibrium",
    description: "Rate laws, reaction order, Keq, Le Chatelier's Principle, ICE tables",
    estimatedMinutes: 50,
    lessons: [
      {
        slug: "chemical-kinetics",
        title: "Chemical Kinetics & Rate Laws",
        content: `# Chemical Kinetics & Rate Laws

Chemical kinetics is the study of **how fast** reactions occur and the factors that influence reaction rates. The DAT tests rate laws, reaction order, and the relationship between rate and concentration.

## Reaction Rate

**Rate** = change in concentration per unit time

For: aA + bB → cC + dD

**Rate = −(1/a)(Δ[A]/Δt) = −(1/b)(Δ[B]/Δt) = (1/c)(Δ[C]/Δt) = (1/d)(Δ[D]/Δt)**

- Reactant rates are negative (concentration decreasing) — the negative sign makes rate positive
- Product rates are positive (concentration increasing)
- Rates are divided by stoichiometric coefficients to normalize

## Rate Laws

The **rate law** relates reaction rate to reactant concentrations:

**Rate = k[A]^m[B]^n**

Where:
- k = **rate constant** (units depend on overall order)
- m = order with respect to A
- n = order with respect to B
- m + n = **overall reaction order**

> **High-Yield DAT Tip:** Rate law exponents are determined **experimentally** — they are NOT the stoichiometric coefficients (unless the reaction is elementary).

### Determining Order from Experimental Data

Compare two experiments where only one reactant changes:

| Method | What Changes | Result |
|--------|-------------|--------|
| Double [A], rate unchanged | [A] × 2 → rate × 1 | Zero order in A (m = 0) |
| Double [A], rate doubles | [A] × 2 → rate × 2 | First order in A (m = 1) |
| Double [A], rate quadruples | [A] × 2 → rate × 4 | Second order in A (m = 2) |
| Triple [A], rate × 9 | [A] × 3 → rate × 9 | Second order in A (m = 2) |

### Units of the Rate Constant k

| Overall Order | Units of k |
|--------------|------------|
| 0 | M/s (or mol L⁻¹ s⁻¹) |
| 1 | s⁻¹ |
| 2 | M⁻¹s⁻¹ (or L mol⁻¹ s⁻¹) |

> **DAT Tip:** Units of k are a dead giveaway for the reaction order. If k has units of s⁻¹, the reaction is first order overall.

## Integrated Rate Laws

These relate concentration to time:

| Order | Integrated Rate Law | Linear Plot | Half-Life (t₁/₂) |
|-------|--------------------|-----------  |-------------------|
| **Zero** | [A] = [A]₀ − kt | [A] vs. t | t₁/₂ = [A]₀/(2k) |
| **First** | ln[A] = ln[A]₀ − kt | ln[A] vs. t | t₁/₂ = **0.693/k** |
| **Second** | 1/[A] = 1/[A]₀ + kt | 1/[A] vs. t | t₁/₂ = 1/(k[A]₀) |

> **High-Yield DAT Tip:** First-order half-life is **independent of concentration** (t₁/₂ = 0.693/k). This is the most important half-life equation. Radioactive decay is first-order.

## Factors Affecting Reaction Rate

1. **Concentration:** Higher concentration → more collisions → faster rate
2. **Temperature:** Higher T → more kinetic energy → more effective collisions
3. **Surface area:** More surface area → more collisions (for heterogeneous reactions)
4. **Catalyst:** Lowers activation energy → faster rate (both forward and reverse)
5. **Nature of reactants:** Ionic reactions are generally faster than covalent reactions

## Arrhenius Equation

**k = Ae^(−Ea/RT)**

Or the two-point form:

**ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂)**

Where:
- k = rate constant
- A = frequency factor (pre-exponential factor)
- Ea = activation energy (J/mol)
- R = 8.314 J/(mol·K)
- T = temperature in Kelvin

> **DAT Tip:** As temperature increases, k increases exponentially. A rough rule: for every **10°C increase**, the rate roughly **doubles** for many reactions.

## Collision Theory and Transition State Theory

For a reaction to occur, molecules must:
1. **Collide** with each other
2. Have sufficient **energy** (≥ Ea) — effective collision
3. Have proper **orientation**

The **transition state** (activated complex) is the highest-energy point along the reaction coordinate. The activation energy (Ea) is the energy difference between reactants and the transition state.

## Catalysts

A **catalyst** speeds up a reaction by providing an **alternative pathway** with a **lower activation energy**.

| Property | Effect of Catalyst |
|----------|-------------------|
| Activation energy | **Decreases** |
| Rate | **Increases** |
| ΔH, ΔG, ΔS | **Unchanged** |
| Equilibrium constant (K) | **Unchanged** |
| Position of equilibrium | **Unchanged** |

> **DAT Tip:** A catalyst speeds up both forward and reverse reactions equally. It helps the reaction reach equilibrium FASTER but does not shift equilibrium or change ΔG.

## Reaction Mechanisms

A **mechanism** is the step-by-step sequence of elementary reactions:
- **Elementary step:** A single molecular event with a rate law matching its molecularity
- **Rate-determining step (RDS):** The slowest step — determines the overall rate law
- **Intermediate:** Produced in one step, consumed in another (does NOT appear in the overall equation)
- **Catalyst:** Consumed in one step, regenerated in another

## Key Terms
- **Rate law:** Mathematical expression relating rate to concentrations
- **Activation energy:** Minimum energy required for a reaction to proceed
- **Half-life:** Time for reactant concentration to decrease by half
- **Rate-determining step:** Slowest step in a mechanism; controls overall rate
`,
        keyTerms: [
          { term: "Rate Law", definition: "Rate = k[A]^m[B]^n; exponents determined experimentally" },
          { term: "Rate Constant (k)", definition: "Proportionality constant in the rate law; increases with temperature" },
          { term: "Activation Energy (Ea)", definition: "Minimum energy required for reactants to form the transition state" },
          { term: "Half-Life", definition: "Time for concentration to drop by half; for first order: t₁/₂ = 0.693/k" },
          { term: "Catalyst", definition: "Lowers Ea without being consumed; doesn't change ΔG or K" },
          { term: "Rate-Determining Step", definition: "The slowest elementary step; dictates the overall rate law" },
        ],
      },
      {
        slug: "chemical-equilibrium",
        title: "Chemical Equilibrium & Le Chatelier's Principle",
        content: `# Chemical Equilibrium & Le Chatelier's Principle

Chemical equilibrium is a dynamic state where the rates of the forward and reverse reactions are equal. The DAT tests your ability to write equilibrium expressions, perform ICE table calculations, and apply Le Chatelier's Principle.

## Equilibrium Concepts

At equilibrium:
- The **forward rate equals the reverse rate** (rate_f = rate_r)
- Concentrations of reactants and products remain **constant** (but NOT necessarily equal)
- The reaction has NOT stopped — it is **dynamic** (still occurring in both directions)

## Equilibrium Constant (K)

For: aA + bB ⇌ cC + dD

**Kc = [C]^c[D]^d / [A]^a[B]^b**

### Important Rules for K

| Rule | Detail |
|------|--------|
| **Pure solids and liquids** | **Excluded** from the expression (activity = 1) |
| **Gases** | Can use partial pressures → Kp = Kc(RT)^Δn |
| **K >> 1** | Products heavily favored at equilibrium |
| **K << 1** | Reactants heavily favored at equilibrium |
| **Reverse reaction** | K_reverse = 1/K_forward |
| **Multiply reaction by n** | K_new = K^n |
| **Add reactions** | K_total = K₁ × K₂ |

> **High-Yield DAT Tip:** K changes ONLY with **temperature**. Catalysts, concentration changes, and pressure changes do NOT change K. They may shift the position of equilibrium (Q changes), but K stays the same.

### Relationship Between Kp and Kc

**Kp = Kc(RT)^Δn**

Where Δn = moles of gaseous products − moles of gaseous reactants, R = 0.0821 L·atm/(mol·K)

## Reaction Quotient (Q)

Q has the **same form as K** but uses **current (non-equilibrium) concentrations**.

| Comparison | Direction of Shift | Meaning |
|-----------|-------------------|---------|
| **Q < K** | Forward (→) | Too many reactants; need to make more products |
| **Q = K** | At equilibrium | No net change |
| **Q > K** | Reverse (←) | Too many products; need to make more reactants |

## ICE Tables

**ICE** = Initial, Change, Equilibrium

### Example: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Kc = 0.50

Starting with [N₂]₀ = 1.0 M, [H₂]₀ = 1.0 M, [NH₃]₀ = 0 M:

|  | N₂ | H₂ | NH₃ |
|--|-----|-----|------|
| **I** | 1.0 | 1.0 | 0 |
| **C** | −x | −3x | +2x |
| **E** | 1.0−x | 1.0−3x | 2x |

Plug equilibrium values into Kc expression and solve for x.

> **DAT Tip:** In ICE tables, the change row uses stoichiometric coefficients. If you assume x is small (when K is very small), you can simplify by ignoring x in the denominator.

## Le Chatelier's Principle

**If a system at equilibrium is disturbed, it will shift to partially counteract the disturbance and re-establish equilibrium.**

### Concentration Changes

| Disturbance | Shift Direction | Effect |
|------------|----------------|--------|
| Add reactant | Forward (→) | More products formed |
| Remove reactant | Reverse (←) | More reactants formed |
| Add product | Reverse (←) | More reactants formed |
| Remove product | Forward (→) | More products formed |

### Pressure/Volume Changes (Gases Only)

| Disturbance | Shift Direction |
|------------|----------------|
| Increase pressure (decrease volume) | Toward **fewer moles of gas** |
| Decrease pressure (increase volume) | Toward **more moles of gas** |
| Add inert gas at constant volume | **No shift** (partial pressures unchanged) |

### Temperature Changes

| Disturbance | Exothermic (ΔH < 0) | Endothermic (ΔH > 0) |
|------------|---------------------|---------------------|
| Increase T | Shift ← (K decreases) | Shift → (K increases) |
| Decrease T | Shift → (K increases) | Shift ← (K decreases) |

> **High-Yield DAT Tip:** Temperature is the ONLY factor that changes the value of K. Treat heat as a product (exothermic) or reactant (endothermic) to predict the direction of shift.

### Catalyst Effect on Equilibrium

A catalyst:
- **Does NOT shift** equilibrium
- **Does NOT change K**
- Speeds up both forward and reverse reactions equally
- Helps the system **reach equilibrium faster**

## Solubility Equilibrium (Ksp)

For a sparingly soluble salt: AB₂(s) ⇌ A²⁺(aq) + 2B⁻(aq)

**Ksp = [A²⁺][B⁻]²**

### Common Ion Effect

Adding a common ion (an ion already present in the equilibrium) decreases solubility by shifting equilibrium toward the solid (Le Chatelier).

Example: Adding NaCl to a saturated AgCl solution decreases AgCl solubility because [Cl⁻] increases, shifting the equilibrium left.

## Key Terms
- **Dynamic equilibrium:** Forward and reverse rates are equal; concentrations are constant
- **Le Chatelier's Principle:** System shifts to oppose a disturbance
- **ICE table:** Systematic method for calculating equilibrium concentrations
- **Common ion effect:** Decreased solubility when a common ion is added
`,
        keyTerms: [
          { term: "Equilibrium Constant (K)", definition: "Ratio of product to reactant concentrations at equilibrium, each raised to their stoichiometric power" },
          { term: "Reaction Quotient (Q)", definition: "Same form as K but using current concentrations; compare to K to predict shift direction" },
          { term: "Le Chatelier's Principle", definition: "A system at equilibrium shifts to partially counteract any disturbance" },
          { term: "ICE Table", definition: "Initial-Change-Equilibrium method for solving equilibrium problems" },
          { term: "Ksp", definition: "Solubility product constant for sparingly soluble salts" },
          { term: "Common Ion Effect", definition: "Decreased solubility of a salt when a common ion is added to the solution" },
        ],
      },
    ],
    questions: [
      {
        stem: "For the reaction 2A + B → C, the following data were collected:\n\nExperiment 1: [A] = 0.10 M, [B] = 0.10 M, Rate = 2.0 × 10⁻³ M/s\nExperiment 2: [A] = 0.20 M, [B] = 0.10 M, Rate = 8.0 × 10⁻³ M/s\nExperiment 3: [A] = 0.10 M, [B] = 0.20 M, Rate = 2.0 × 10⁻³ M/s\n\nWhat is the rate law?",
        choices: [
          { label: "A", text: "Rate = k[A][B]", isCorrect: false },
          { label: "B", text: "Rate = k[A]²", isCorrect: true },
          { label: "C", text: "Rate = k[A]²[B]", isCorrect: false },
          { label: "D", text: "Rate = k[B]²", isCorrect: false },
          { label: "E", text: "Rate = k[A][B]²", isCorrect: false },
        ],
        explanation: "Comparing Exp 1 and 2: [A] doubles, [B] constant, rate quadruples (×4 = 2²) → **second order in A**. Comparing Exp 1 and 3: [B] doubles, [A] constant, rate unchanged → **zero order in B**. Rate = k[A]²[B]⁰ = **k[A]²**. Remember: rate law exponents come from experiments, not stoichiometry.",
        difficulty: 2,
        tags: ["rate law", "reaction order", "experimental data"],
      },
      {
        stem: "A first-order reaction has a rate constant k = 0.0693 s⁻¹. What is the half-life of this reaction?",
        choices: [
          { label: "A", text: "1 s", isCorrect: false },
          { label: "B", text: "5 s", isCorrect: false },
          { label: "C", text: "10 s", isCorrect: true },
          { label: "D", text: "14.4 s", isCorrect: false },
          { label: "E", text: "0.1 s", isCorrect: false },
        ],
        explanation: "For a first-order reaction: **t₁/₂ = 0.693/k** = 0.693/0.0693 = **10 s**. First-order half-life is independent of initial concentration — it depends only on k. This is the most commonly tested half-life equation on the DAT.",
        difficulty: 1,
        tags: ["first order", "half-life"],
      },
      {
        stem: "For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = −92 kJ), which change will shift the equilibrium to produce MORE NH₃?",
        choices: [
          { label: "A", text: "Increasing temperature", isCorrect: false },
          { label: "B", text: "Removing N₂", isCorrect: false },
          { label: "C", text: "Adding a catalyst", isCorrect: false },
          { label: "D", text: "Decreasing the volume of the container", isCorrect: true },
          { label: "E", text: "Adding an inert gas at constant volume", isCorrect: false },
        ],
        explanation: "Decreasing volume increases pressure. By Le Chatelier's Principle, the system shifts toward **fewer moles of gas**: reactants have 4 moles of gas (1 N₂ + 3 H₂), products have 2 moles (2 NH₃), so equilibrium shifts **right** toward NH₃. Increasing T would shift left (exothermic reaction). A catalyst and adding inert gas at constant volume don't shift equilibrium.",
        difficulty: 2,
        tags: ["Le Chatelier", "equilibrium", "pressure"],
      },
      {
        stem: "The Ksp of AgCl is 1.8 × 10⁻¹⁰. What is the molar solubility of AgCl in pure water?",
        choices: [
          { label: "A", text: "1.3 × 10⁻⁵ M", isCorrect: true },
          { label: "B", text: "1.8 × 10⁻¹⁰ M", isCorrect: false },
          { label: "C", text: "9.0 × 10⁻⁶ M", isCorrect: false },
          { label: "D", text: "1.8 × 10⁻⁵ M", isCorrect: false },
          { label: "E", text: "3.2 × 10⁻¹⁰ M", isCorrect: false },
        ],
        explanation: "AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq). Let solubility = s. Then [Ag⁺] = s and [Cl⁻] = s. Ksp = s × s = s² = 1.8 × 10⁻¹⁰. s = √(1.8 × 10⁻¹⁰) = **1.34 × 10⁻⁵ M ≈ 1.3 × 10⁻⁵ M**. For a 1:1 salt, molar solubility = √Ksp.",
        difficulty: 2,
        tags: ["Ksp", "solubility"],
      },
      {
        stem: "A catalyst in a chemical reaction:",
        choices: [
          { label: "A", text: "Increases the equilibrium constant K", isCorrect: false },
          { label: "B", text: "Changes the enthalpy of reaction", isCorrect: false },
          { label: "C", text: "Lowers the activation energy for the forward reaction only", isCorrect: false },
          { label: "D", text: "Lowers the activation energy for both forward and reverse reactions", isCorrect: true },
          { label: "E", text: "Shifts the equilibrium toward products", isCorrect: false },
        ],
        explanation: "A **catalyst** provides an alternative reaction pathway with a **lower activation energy** for BOTH the forward and reverse reactions. It does not change ΔH, ΔG, ΔS, or K. It does not shift equilibrium — it simply helps the system reach equilibrium faster. Common misconception: catalysts do NOT only speed up the forward reaction.",
        difficulty: 1,
        tags: ["catalysts", "activation energy"],
      },
      {
        stem: "For the reaction Q < K. In which direction will the reaction proceed?",
        choices: [
          { label: "A", text: "Toward products (forward)", isCorrect: true },
          { label: "B", text: "Toward reactants (reverse)", isCorrect: false },
          { label: "C", text: "The reaction is at equilibrium", isCorrect: false },
          { label: "D", text: "No reaction occurs", isCorrect: false },
          { label: "E", text: "It depends on the temperature", isCorrect: false },
        ],
        explanation: "When **Q < K**, there are too many reactants relative to products compared to equilibrium. The reaction shifts **forward (toward products)** to increase Q until Q = K. When Q > K, the reaction shifts in reverse. When Q = K, the system is at equilibrium.",
        difficulty: 1,
        tags: ["reaction quotient", "equilibrium"],
      },
      {
        stem: "What are the units of the rate constant k for a second-order reaction?",
        choices: [
          { label: "A", text: "s⁻¹", isCorrect: false },
          { label: "B", text: "M/s", isCorrect: false },
          { label: "C", text: "M⁻¹s⁻¹", isCorrect: true },
          { label: "D", text: "M⁻²s⁻¹", isCorrect: false },
          { label: "E", text: "Unitless", isCorrect: false },
        ],
        explanation: "For a second-order reaction, Rate = k[A]². Solving for k: k = Rate/[A]² = (M/s)/(M²) = **M⁻¹s⁻¹** (or L mol⁻¹ s⁻¹). For zeroth order, k has units of M/s. For first order, k has units of s⁻¹. The units of k are a quick way to identify the reaction order.",
        difficulty: 1,
        tags: ["rate constant", "reaction order"],
      },
      {
        stem: "Adding an inert gas to an equilibrium mixture at constant volume will:",
        choices: [
          { label: "A", text: "Shift equilibrium toward products", isCorrect: false },
          { label: "B", text: "Shift equilibrium toward reactants", isCorrect: false },
          { label: "C", text: "Have no effect on the equilibrium position", isCorrect: true },
          { label: "D", text: "Increase the equilibrium constant K", isCorrect: false },
          { label: "E", text: "Decrease the equilibrium constant K", isCorrect: false },
        ],
        explanation: "Adding an inert gas at **constant volume** increases total pressure but does NOT change the **partial pressures** of any reactant or product (partial pressure depends on moles and volume, not total pressure). Since concentrations and partial pressures are unchanged, Q is unchanged, and there is **no shift** in equilibrium. Note: adding inert gas at constant pressure DOES change the volume and could shift equilibrium.",
        difficulty: 2,
        tags: ["Le Chatelier", "inert gas", "equilibrium"],
      },
      {
        stem: "For the exothermic reaction A(g) ⇌ 2B(g), increasing the temperature will:",
        choices: [
          { label: "A", text: "Increase K and shift right", isCorrect: false },
          { label: "B", text: "Decrease K and shift left", isCorrect: true },
          { label: "C", text: "Increase K and shift left", isCorrect: false },
          { label: "D", text: "Not change K", isCorrect: false },
          { label: "E", text: "Decrease K and shift right", isCorrect: false },
        ],
        explanation: "For an **exothermic** reaction, heat is a product: A → 2B + heat. Increasing temperature adds heat, shifting equilibrium **to the left** (toward reactants) by Le Chatelier's Principle. Temperature is the only factor that changes the **value of K** — for exothermic reactions, increasing T **decreases K**.",
        difficulty: 2,
        tags: ["Le Chatelier", "temperature", "equilibrium constant"],
      },
      {
        stem: "The half-life of a radioactive isotope is 8 days. After 24 days, what fraction of the original sample remains?",
        choices: [
          { label: "A", text: "1/2", isCorrect: false },
          { label: "B", text: "1/4", isCorrect: false },
          { label: "C", text: "1/8", isCorrect: true },
          { label: "D", text: "1/16", isCorrect: false },
          { label: "E", text: "1/3", isCorrect: false },
        ],
        explanation: "Radioactive decay is **first-order**. Number of half-lives = 24 days / 8 days = **3 half-lives**. After each half-life, half remains: 1 → 1/2 → 1/4 → **1/8**. The fraction remaining = (1/2)ⁿ where n = number of half-lives. (1/2)³ = 1/8 of the original sample.",
        difficulty: 1,
        tags: ["half-life", "radioactive decay"],
      },
    ],
  },
];

export const OCHEM_CHAPTERS = [
  {
    slug: "stereochemistry",
    title: "Stereochemistry",
    description: "Chirality, R/S configuration, E/Z nomenclature, optical activity, meso compounds",
    estimatedMinutes: 50,
    lessons: [
      {
        slug: "chirality-configuration",
        title: "Chirality & R/S Configuration",
        content: `# Chirality & R/S Configuration

Stereochemistry is the study of the 3D arrangement of atoms in molecules. The DAT heavily tests chirality, stereoisomer relationships, and naming conventions. Mastering these concepts is essential for organic chemistry success.

## Chirality

A molecule is **chiral** if it is non-superimposable on its mirror image. The most common source of chirality is a **stereocenter** (chiral center) — a carbon bonded to **four different substituents**.

### Identifying Stereocenters

A stereocenter (also called an asymmetric carbon or chiral center) has:
- Four **different** groups attached
- sp³ hybridization (tetrahedral geometry)
- No plane of symmetry through the carbon

> **High-Yield DAT Tip:** To quickly find stereocenters, look for carbons bonded to 4 different groups. Ignore CH₂ and CH₃ groups (they can't be stereocenters) and carbons in double bonds.

### Mirror Images and Enantiomers

- **Enantiomers:** Non-superimposable mirror images (like left and right hands)
- Enantiomers have **identical physical properties** (melting point, boiling point, solubility) EXCEPT:
  - They rotate plane-polarized light in **opposite directions**
  - They react differently with other chiral molecules (biological significance)

## R/S Configuration (Cahn-Ingold-Prelog Rules)

### Step-by-Step Assignment

1. **Assign priority** to the four substituents based on **atomic number** of the atom directly attached to the stereocenter (higher atomic number = higher priority)
2. If there's a tie, move outward to the next atom until a difference is found
3. **Orient the molecule** so the **lowest priority group (4)** points **away** from you (back)
4. Trace a path from priority 1 → 2 → 3:
   - **Clockwise = R** (rectus, Latin for "right")
   - **Counterclockwise = S** (sinister, Latin for "left")

### Priority Rules

| Rule | Example |
|------|---------|
| Higher atomic number wins | I > Br > Cl > S > F > O > N > C > H |
| If tied, go to next atom | −CH₂OH > −CH₂CH₃ > −CH₃ |
| Double bond = two single bonds | C=O treated as C bonded to O,O |
| Triple bond = three single bonds | C≡N treated as C bonded to N,N,N |

### Shortcut: Group 4 in the Plane

If the lowest priority group is in the plane of the page (wedge or dash), assign R/S normally and then **switch** the answer (R becomes S, S becomes R).

> **DAT Tip:** If the #4 group is on a wedge (coming toward you), determine the rotation 1→2→3, then reverse the assignment.

## Stereoisomer Relationships

| Relationship | Definition | Same physical properties? |
|-------------|-----------|--------------------------|
| **Enantiomers** | Non-superimposable mirror images | Yes (except optical rotation) |
| **Diastereomers** | Stereoisomers that are NOT mirror images | No — different physical properties |
| **Meso compounds** | Has stereocenters but an internal mirror plane | Achiral (optically inactive) |

### Maximum Stereoisomers

**2^n rule:** A molecule with n stereocenters has a maximum of **2^n** stereoisomers.

- 1 stereocenter → max 2 stereoisomers (one pair of enantiomers)
- 2 stereocenters → max 4 stereoisomers
- 3 stereocenters → max 8 stereoisomers

> **DAT Tip:** The actual number may be less than 2^n if meso compounds exist (internal planes of symmetry reduce the count).

## Fischer Projections

Fischer projections are a 2D representation of 3D molecules, commonly used for sugars and amino acids:

- **Horizontal lines** = bonds coming **toward** you (wedges)
- **Vertical lines** = bonds going **away** from you (dashes)
- Most oxidized carbon goes on **top**

### R/S Assignment from Fischer Projections

1. Assign priorities as usual
2. If the **#4 group is on a horizontal line** → the direct reading gives the **wrong** answer (switch R↔S)
3. If the **#4 group is on a vertical line** → the direct reading gives the **correct** answer

## Key Terms
- **Chiral:** Non-superimposable on its mirror image
- **Achiral:** Superimposable on its mirror image
- **Racemic mixture:** 50:50 mixture of enantiomers (optically inactive, net rotation = 0)
- **Stereocenter:** Carbon with four different substituents
`,
        keyTerms: [
          { term: "Chiral", definition: "Non-superimposable on its mirror image; typically has a stereocenter" },
          { term: "Enantiomers", definition: "Non-superimposable mirror images with opposite R/S configuration at every stereocenter" },
          { term: "Diastereomers", definition: "Stereoisomers that are NOT mirror images; different physical properties" },
          { term: "Stereocenter", definition: "sp³ carbon bonded to four different groups" },
          { term: "R Configuration", definition: "Clockwise priority path (1→2→3) with #4 group pointing away" },
          { term: "S Configuration", definition: "Counterclockwise priority path (1→2→3) with #4 group pointing away" },
          { term: "Racemic Mixture", definition: "Equal mixture of both enantiomers; net optical rotation = 0°" },
        ],
      },
      {
        slug: "optical-activity-meso",
        title: "Optical Activity, Meso Compounds & E/Z Nomenclature",
        content: `# Optical Activity, Meso Compounds & E/Z Nomenclature

This lesson covers optical activity, meso compounds, and E/Z nomenclature for alkenes — all high-yield DAT topics.

## Optical Activity

**Optical activity** is the ability of a chiral substance to rotate the plane of **plane-polarized light**. It is measured with a **polarimeter**.

### Key Terminology

| Term | Symbol | Meaning |
|------|--------|---------|
| **Dextrorotatory** | (+) or d | Rotates light **clockwise** (to the right) |
| **Levorotatory** | (−) or l | Rotates light **counterclockwise** (to the left) |
| **Specific rotation** | [α] | Characteristic physical property for a chiral compound |

**Specific rotation formula:**

**[α] = α / (l × c)**

Where:
- α = observed rotation (degrees)
- l = path length (dm)
- c = concentration (g/mL)

> **High-Yield DAT Tip:** You CANNOT predict the sign of rotation ((+) or (−)) from the R/S configuration. R does NOT mean (+), and S does NOT mean (−). The sign is determined experimentally.

### Enantiomeric Excess (ee)

**ee = |% major enantiomer − % minor enantiomer|**

Or: **ee = (observed [α] / pure [α]) × 100%**

- A racemic mixture has ee = 0% (50:50, no net rotation)
- A pure enantiomer has ee = 100%
- Example: 75% R and 25% S → ee = 75 − 25 = **50% ee**

## Meso Compounds

A **meso compound** contains stereocenters but has an **internal plane of symmetry**, making it **achiral** and **optically inactive**.

### Identifying Meso Compounds

1. The molecule has two or more stereocenters
2. There is an internal mirror plane that makes one half a mirror image of the other
3. The stereocenters have **opposite R/S configurations** that cancel out

### Example: 2,3-Butanediol

- (2R,3R)-butanediol — chiral, optically active
- (2S,3S)-butanediol — chiral, optically active (enantiomer of above)
- (2R,3S)-butanediol — **meso** — achiral despite having two stereocenters

> **DAT Tip:** Meso compounds are a common trap on the DAT. A molecule with stereocenters can be achiral if it has an internal mirror plane. Always check for symmetry!

### Meso vs. Racemic

| Property | Meso | Racemic Mixture |
|----------|------|-----------------|
| Type | Single compound | Mixture of two enantiomers |
| Stereocenters | Yes, with internal symmetry | Yes |
| Optically active? | No | No |
| Separable? | N/A (one compound) | Can be separated (resolution) |

## E/Z Nomenclature (Alkene Stereochemistry)

Alkenes with two different substituents on each carbon of the double bond exhibit **geometric isomerism** (cis/trans or E/Z).

### Assigning E/Z

Use **Cahn-Ingold-Prelog priority rules** (same as R/S):

1. Assign priorities to the two substituents on each alkene carbon
2. Compare the higher-priority groups on each carbon:
   - **Z (zusammen = together):** Higher-priority groups on the **same side**
   - **E (entgegen = opposite):** Higher-priority groups on **opposite sides**

### E/Z vs. Cis/Trans

| System | Basis | Limitation |
|--------|-------|------------|
| **Cis/Trans** | Similar groups on same/opposite sides | Only works with 2 identical pairs |
| **E/Z** | CIP priority rules | Works for ALL disubstituted alkenes |

> **DAT Tip:** E/Z is more general than cis/trans and should always be used when cis/trans is ambiguous. On the DAT, if there are 3 or 4 different groups on the alkene carbons, use E/Z.

### Stability of Geometric Isomers

- **Trans (E)** isomers are generally more **stable** than cis (Z) due to less steric strain
- Exception: Cyclic alkenes with small rings (cis may be preferred)

## Conformational Isomers vs. Configurational Isomers

| Type | Interconversion | Examples |
|------|----------------|---------|
| **Conformational** | Rotation around σ bonds (no bond breaking) | Anti, gauche, eclipsed |
| **Configurational** | Requires bond breaking | Enantiomers, diastereomers, E/Z |

### Newman Projections (Conformational Analysis)

For ethane and butane:
- **Anti:** 180° dihedral angle — most stable (least steric strain)
- **Gauche:** 60° dihedral angle — some strain
- **Eclipsed:** 0° dihedral angle — high strain (torsional + steric)
- **Totally eclipsed:** Highest energy for butane (largest groups eclipsed)

Stability order: **Anti > Gauche > Eclipsed > Totally Eclipsed**

> **DAT Tip:** For cyclohexane, the chair conformation is most stable. Bulky substituents prefer the **equatorial** position to avoid 1,3-diaxial interactions.

## Key Terms
- **Specific rotation:** Measured optical rotation normalized for path length and concentration
- **Meso compound:** Has stereocenters but is achiral due to internal mirror plane
- **E isomer:** Higher-priority groups on opposite sides of the double bond
- **Z isomer:** Higher-priority groups on the same side of the double bond
`,
        keyTerms: [
          { term: "Optical Activity", definition: "Ability of chiral compounds to rotate plane-polarized light" },
          { term: "Specific Rotation [α]", definition: "Characteristic rotation value: [α] = α/(l×c)" },
          { term: "Meso Compound", definition: "Has stereocenters but is achiral due to internal mirror plane" },
          { term: "E/Z Nomenclature", definition: "Geometric isomer naming based on CIP priority rules for alkene substituents" },
          { term: "Enantiomeric Excess", definition: "Measure of optical purity: ee = |% major − % minor| enantiomer" },
          { term: "Newman Projection", definition: "End-on view of a C−C bond showing rotational conformations" },
        ],
      },
    ],
    questions: [
      {
        stem: "A compound has two stereocenters with configurations (2R,3S). Its enantiomer would have which configuration?",
        choices: [
          { label: "A", text: "(2R,3R)", isCorrect: false },
          { label: "B", text: "(2S,3R)", isCorrect: true },
          { label: "C", text: "(2S,3S)", isCorrect: false },
          { label: "D", text: "(2R,3S)", isCorrect: false },
          { label: "E", text: "It has no enantiomer", isCorrect: false },
        ],
        explanation: "Enantiomers have the **opposite configuration at EVERY stereocenter**. If the original is (2R,3S), the enantiomer must be **(2S,3R)**. (2R,3R) and (2S,3S) would be **diastereomers** of the original compound because only one stereocenter is inverted.",
        difficulty: 1,
        tags: ["enantiomers", "R/S configuration"],
      },
      {
        stem: "Which of the following statements about a meso compound is TRUE?",
        choices: [
          { label: "A", text: "It has no stereocenters", isCorrect: false },
          { label: "B", text: "It rotates plane-polarized light to the right", isCorrect: false },
          { label: "C", text: "It is a racemic mixture of enantiomers", isCorrect: false },
          { label: "D", text: "It has stereocenters but is optically inactive due to an internal mirror plane", isCorrect: true },
          { label: "E", text: "It must have an odd number of stereocenters", isCorrect: false },
        ],
        explanation: "A **meso compound** contains stereocenters but possesses an **internal plane of symmetry**, making the molecule achiral and **optically inactive**. It is a single compound (not a mixture), so it is not a racemic mixture. Meso compounds typically have an even number of stereocenters with opposing configurations.",
        difficulty: 1,
        tags: ["meso compounds", "optical activity"],
      },
      {
        stem: "In a polarimetry experiment, a pure enantiomer has [α] = +40°. A sample of the same compound is found to have an observed rotation of +20° under identical conditions. What is the enantiomeric excess?",
        choices: [
          { label: "A", text: "20%", isCorrect: false },
          { label: "B", text: "40%", isCorrect: false },
          { label: "C", text: "50%", isCorrect: true },
          { label: "D", text: "75%", isCorrect: false },
          { label: "E", text: "80%", isCorrect: false },
        ],
        explanation: "**ee = (observed [α] / pure [α]) × 100% = (20/40) × 100% = 50%**. This means the sample is 50% excess of the (+) enantiomer. To find the composition: 50% ee means 75% (+) enantiomer and 25% (−) enantiomer (the 50% that's racemic is split evenly: 25% each, plus 50% pure (+)).",
        difficulty: 2,
        tags: ["optical activity", "enantiomeric excess"],
      },
      {
        stem: "For the alkene 2-bromo-2-butene, the Z isomer has the higher-priority groups on the same side. Which groups are compared to make this determination?",
        choices: [
          { label: "A", text: "The two hydrogen atoms", isCorrect: false },
          { label: "B", text: "Br and CH₃ (higher priority on each carbon)", isCorrect: true },
          { label: "C", text: "The two carbon chains", isCorrect: false },
          { label: "D", text: "H and Br only", isCorrect: false },
          { label: "E", text: "The two methyl groups", isCorrect: false },
        ],
        explanation: "In E/Z nomenclature, you assign CIP priorities to the two groups on **each** alkene carbon separately. On one carbon, Br > CH₃ (higher atomic number wins). On the other carbon, CH₃ > H. The **higher-priority group from each carbon** (Br and CH₃) is compared: if they're on the same side, it's **Z**; if on opposite sides, it's **E**.",
        difficulty: 2,
        tags: ["E/Z nomenclature", "CIP priority"],
      },
      {
        stem: "What is the relationship between (2R,3R)-tartaric acid and (2R,3S)-tartaric acid?",
        choices: [
          { label: "A", text: "Enantiomers", isCorrect: false },
          { label: "B", text: "Diastereomers", isCorrect: true },
          { label: "C", text: "Constitutional isomers", isCorrect: false },
          { label: "D", text: "Identical compounds", isCorrect: false },
          { label: "E", text: "Conformational isomers", isCorrect: false },
        ],
        explanation: "These are **diastereomers** — stereoisomers that are NOT mirror images. Enantiomers require ALL stereocenters to be inverted. Here, C2 has the same configuration (R) in both, while C3 differs (R vs. S). When only some (but not all) stereocenters are inverted, the molecules are diastereomers. Note: (2R,3S)-tartaric acid is also a **meso compound**.",
        difficulty: 2,
        tags: ["stereoisomer relationships", "diastereomers"],
      },
      {
        stem: "A molecule with 3 stereocenters can have a maximum of how many stereoisomers?",
        choices: [
          { label: "A", text: "3", isCorrect: false },
          { label: "B", text: "4", isCorrect: false },
          { label: "C", text: "6", isCorrect: false },
          { label: "D", text: "8", isCorrect: true },
          { label: "E", text: "16", isCorrect: false },
        ],
        explanation: "The maximum number of stereoisomers is **2ⁿ**, where n = number of stereocenters. For 3 stereocenters: 2³ = **8** stereoisomers maximum. The actual number may be fewer if meso compounds exist (internal symmetry reduces the count). For 2 stereocenters, max = 4; for 4 stereocenters, max = 16.",
        difficulty: 1,
        tags: ["stereoisomers", "2^n rule"],
      },
      {
        stem: "Which conformation of butane has the lowest energy?",
        choices: [
          { label: "A", text: "Totally eclipsed", isCorrect: false },
          { label: "B", text: "Gauche", isCorrect: false },
          { label: "C", text: "Eclipsed", isCorrect: false },
          { label: "D", text: "Anti", isCorrect: true },
          { label: "E", text: "All conformations have equal energy", isCorrect: false },
        ],
        explanation: "In the **anti** conformation, the two methyl groups are 180° apart (maximum separation), minimizing both torsional and steric strain. Stability order: **anti > gauche > eclipsed > totally eclipsed**. The totally eclipsed conformation (methyl groups directly overlapping at 0°) has the highest energy due to maximum steric and torsional strain.",
        difficulty: 1,
        tags: ["conformational analysis", "Newman projections"],
      },
      {
        stem: "A racemic mixture is optically inactive because:",
        choices: [
          { label: "A", text: "The molecules have no stereocenters", isCorrect: false },
          { label: "B", text: "Equal amounts of (+) and (−) enantiomers cancel each other's rotation", isCorrect: true },
          { label: "C", text: "The molecules are meso compounds", isCorrect: false },
          { label: "D", text: "The molecules are achiral", isCorrect: false },
          { label: "E", text: "The polarimeter is not sensitive enough", isCorrect: false },
        ],
        explanation: "A **racemic mixture** is a 50:50 mixture of both enantiomers. The (+) enantiomer rotates light clockwise, and the (−) enantiomer rotates it counterclockwise by the same amount. These rotations **cancel out**, giving a net rotation of **zero** (optically inactive). Unlike meso compounds (single achiral molecules), a racemic mixture contains chiral molecules.",
        difficulty: 1,
        tags: ["racemic mixture", "optical activity"],
      },
      {
        stem: "In assigning R/S configuration, which atom has the HIGHEST priority?",
        choices: [
          { label: "A", text: "Carbon", isCorrect: false },
          { label: "B", text: "Hydrogen", isCorrect: false },
          { label: "C", text: "Nitrogen", isCorrect: false },
          { label: "D", text: "Oxygen", isCorrect: false },
          { label: "E", text: "Bromine", isCorrect: true },
        ],
        explanation: "In CIP priority rules, atoms are ranked by **atomic number** — higher atomic number gets higher priority. Br (Z=35) > O (Z=8) > N (Z=7) > C (Z=6) > H (Z=1). Therefore **bromine** has the highest priority among these choices. The full common ranking: I > Br > Cl > S > F > O > N > C > H.",
        difficulty: 1,
        tags: ["CIP priority", "R/S configuration"],
      },
      {
        stem: "In a cyclohexane ring, a large substituent preferentially occupies which position to minimize strain?",
        choices: [
          { label: "A", text: "Axial", isCorrect: false },
          { label: "B", text: "Equatorial", isCorrect: true },
          { label: "C", text: "Either axial or equatorial equally", isCorrect: false },
          { label: "D", text: "Bridging", isCorrect: false },
          { label: "E", text: "Planar", isCorrect: false },
        ],
        explanation: "Large substituents prefer the **equatorial** position to avoid **1,3-diaxial interactions** (steric strain with axial hydrogens on C3 and C5). In the equatorial position, the substituent points outward from the ring, minimizing steric clash. This preference is quantified by the A-value — larger A-value means stronger equatorial preference.",
        difficulty: 1,
        tags: ["cyclohexane", "equatorial", "conformational analysis"],
      },
    ],
  },
  {
    slug: "reactions-alkenes",
    title: "Alkene & Alkyne Reactions",
    description: "Addition reactions, Markovnikov's rule, hydroboration-oxidation, ozonolysis",
    estimatedMinutes: 50,
    lessons: [
      {
        slug: "alkene-addition",
        title: "Alkene Addition Reactions",
        content: `# Alkene Addition Reactions

Alkenes are one of the most important functional groups in organic chemistry. Their electron-rich **π bond** makes them excellent **nucleophiles** that undergo **addition reactions** with electrophiles. The DAT tests your ability to predict products, regiochemistry, and stereochemistry.

## General Characteristics of Alkenes

- C=C double bond: 1 σ bond + 1 π bond
- sp² hybridized carbons → trigonal planar, 120° bond angles
- π electrons are the reactive site (electron-rich, above and below the plane)
- Most alkene reactions are **additions** (π bond breaks, two new σ bonds form)

## Hydrohalogenation (HX Addition)

**Reagent:** HCl, HBr, or HI

**Mechanism:** Electrophilic addition (Markovnikov)
1. H⁺ adds to the **less substituted** carbon (forms more stable carbocation)
2. X⁻ attacks the carbocation

**Markovnikov's Rule:** The hydrogen adds to the carbon with **more hydrogens** (H goes to the H-rich carbon). The halide ends up on the **more substituted** carbon.

> **High-Yield DAT Tip:** Markovnikov's rule is really about forming the **more stable carbocation** intermediate. Stability order: 3° > 2° > 1° > methyl. Rearrangements (hydride and methyl shifts) can occur!

| Reagent | Product | Regiochemistry | Stereochemistry |
|---------|---------|----------------|-----------------|
| HBr | Alkyl halide | Markovnikov | Not controlled (racemic if new stereocenter) |
| HBr + peroxides (ROOR) | Alkyl halide | **Anti-Markovnikov** | Not controlled |

### Anti-Markovnikov Addition (Radical Addition)

With **peroxides (ROOR)** and HBr only:
- Free radical mechanism
- Br adds to the **less substituted** carbon (anti-Markovnikov)
- Only works with HBr (not HCl or HI)

## Hydration Reactions

### Acid-Catalyzed Hydration (H₂O/H⁺)

**Reagent:** H₂O with H₂SO₄ or H₃PO₄ catalyst

- **Markovnikov** addition of water
- OH goes to the more substituted carbon
- Follows carbocation intermediate → rearrangements possible

### Oxymercuration-Demercuration

**Reagents:** (1) Hg(OAc)₂, H₂O (2) NaBH₄

- **Markovnikov** addition of water
- **No carbocation rearrangement** (advantage over acid-catalyzed hydration)
- Anti stereochemistry but often not tested for stereo

### Hydroboration-Oxidation

**Reagents:** (1) BH₃·THF (2) H₂O₂, NaOH

- **Anti-Markovnikov** addition of water (OH on less substituted carbon)
- **Syn** addition (both H and OH add from the same face)
- No carbocation → no rearrangement
- Concerted mechanism (one-step addition of B-H across the double bond)

> **High-Yield DAT Tip:** Hydroboration-oxidation gives **anti-Markovnikov, syn** addition of water. This is the opposite regiochemistry of acid-catalyzed hydration.

| Hydration Method | Regiochemistry | Stereochemistry | Rearrangement? |
|-----------------|----------------|-----------------|----------------|
| H₃O⁺/H₂SO₄ | Markovnikov | Not controlled | Yes |
| Hg(OAc)₂/NaBH₄ | Markovnikov | Anti | No |
| BH₃ then H₂O₂/OH⁻ | Anti-Markovnikov | **Syn** | No |

## Halogenation (X₂ Addition)

**Reagent:** Br₂ or Cl₂

- Adds X to both carbons of the double bond
- Forms a **halonium ion** intermediate (bridged, 3-membered ring)
- **Anti addition** (the two halogens add from opposite faces)
- Produces the anti product (trans dihalide)

> **DAT Tip:** Br₂ in CCl₄ is a classic test for unsaturation. The reddish-brown Br₂ color disappears when it adds across a double bond.

### Halohydrin Formation

**Reagent:** X₂/H₂O (e.g., Br₂ in H₂O)

- X adds to the less substituted carbon (anti-Markovnikov for X)
- OH adds to the more substituted carbon (Markovnikov for OH)
- **Anti** addition (via halonium ion)

## Catalytic Hydrogenation

**Reagent:** H₂ with Pd/C, Pt, or Ni catalyst

- Adds H₂ across the double bond → alkane
- **Syn addition** (both H atoms add from the same face, on the metal surface)
- **cis product** formed from an alkene

| Catalyst | Product |
|----------|---------|
| H₂/Pd or Pt or Ni | Alkane (fully reduced) |
| H₂/Lindlar's catalyst | **cis-alkene** (from alkyne, partial reduction) |

## Epoxidation

**Reagent:** mCPBA (meta-chloroperoxybenzoic acid) or other peroxyacid

- Converts alkene to an **epoxide** (oxirane, 3-membered ring with O)
- **Syn** addition (concerted mechanism)
- Epoxides can be opened with acid (anti-Markovnikov attack) or base (Markovnikov attack by nucleophile at less hindered carbon)

## Key Terms
- **Electrophilic addition:** Electrophile attacks the π bond; most common alkene reaction class
- **Markovnikov's rule:** H adds to carbon with more H's; electrophile to more substituted carbon
- **Anti-Markovnikov:** Opposite regiochemistry; electrophile to less substituted carbon
- **Syn addition:** Both groups add from the same face
- **Anti addition:** Groups add from opposite faces
`,
        keyTerms: [
          { term: "Markovnikov's Rule", definition: "H adds to the less substituted carbon; X/OH adds to the more substituted carbon (via more stable carbocation)" },
          { term: "Anti-Markovnikov Addition", definition: "Opposite of Markovnikov; reagent adds to the less substituted carbon (e.g., hydroboration)" },
          { term: "Syn Addition", definition: "Both groups add from the same face of the double bond" },
          { term: "Anti Addition", definition: "Groups add from opposite faces (e.g., halogenation via halonium ion)" },
          { term: "Hydroboration-Oxidation", definition: "BH₃ then H₂O₂/NaOH; anti-Markovnikov, syn addition of water" },
          { term: "Halonium Ion", definition: "Bridged 3-membered ring intermediate in halogenation; ensures anti addition" },
        ],
      },
      {
        slug: "alkyne-reactions-oxidation",
        title: "Alkyne Reactions & Oxidative Cleavage",
        content: `# Alkyne Reactions & Oxidative Cleavage

Alkynes contain a C≡C triple bond (1 σ + 2 π bonds) and undergo many reactions similar to alkenes, with some important differences. Oxidative cleavage reactions (ozonolysis and permanganate) are also heavily tested.

## Alkyne Structure and Acidity

- **sp hybridized** carbons → linear geometry, 180° bond angles
- Triple bond is shorter and stronger than a double bond
- **Terminal alkynes** (R−C≡C−H) are weakly acidic (pKa ≈ 25)
  - Can be deprotonated by strong bases: NaNH₂, NaH, n-BuLi
  - Forms **acetylide anions** (R−C≡C⁻) — powerful nucleophiles

> **DAT Tip:** Terminal alkynes are acidic enough to be deprotonated by NaNH₂ (pKa of NH₃ ≈ 38 > 25). Acetylide anions are useful nucleophiles for carbon-carbon bond formation.

## Alkyne Reduction

| Reagent | Product | Stereochemistry |
|---------|---------|-----------------|
| H₂/Pd (or Pt, Ni) — excess | **Alkane** (full reduction) | N/A |
| H₂/**Lindlar's catalyst** (poisoned Pd) | **cis-Alkene** | Syn addition |
| Na or Li in NH₃(l) (**dissolving metal**) | **trans-Alkene** | Anti addition |

> **High-Yield DAT Tip:** Lindlar's catalyst gives **cis** alkene (syn). Dissolving metal reduction (Na/NH₃) gives **trans** alkene (anti). This distinction is guaranteed to appear on the DAT.

## Alkyne Addition Reactions

### Hydrohalogenation (HX)

- **1 equivalent HX:** Gives vinyl halide (Markovnikov — X on more substituted carbon)
- **2 equivalents HX:** Gives geminal dihalide (both X on the same carbon, Markovnikov)

### Halogenation (X₂)

- **1 equivalent X₂:** Gives trans-dihalide (anti addition)
- **2 equivalents X₂:** Gives tetrahalide

### Hydration

| Method | Product |
|--------|---------|
| H₂O/H₂SO₄/**HgSO₄** | **Ketone** (Markovnikov → enol → tautomerizes to ketone) |
| (1) BH₃·THF, then H₂O₂/NaOH | **Aldehyde** (anti-Markovnikov → enol → tautomerizes to aldehyde) |

> **DAT Tip:** Markovnikov hydration of an internal alkyne gives a ketone. Anti-Markovnikov hydration (hydroboration) of a terminal alkyne gives an aldehyde via tautomerization of the enol intermediate.

### Keto-Enol Tautomerism

The **enol** form (vinyl alcohol) is in equilibrium with the **keto** form (carbonyl). The keto form is usually favored.

- Enol → Keto: The OH migrates as H, and C=C becomes C–C with a C=O forming
- Catalyzed by acid or base

## Oxidative Cleavage of Alkenes

### Ozonolysis

**Reagents:** (1) O₃ (2) Zn/H₂O (reductive workup) or DMS

Ozone cleaves the double bond completely:
- Each C=C carbon becomes a **C=O**
- The products depend on the substitution of the alkene:

| Alkene Type | Product |
|-------------|---------|
| R₂C=CR₂ | Two **ketones** |
| R₂C=CHR | Ketone + **aldehyde** |
| R₂C=CH₂ | Ketone + **formaldehyde** |
| RHC=CHR | Two **aldehydes** |
| H₂C=CH₂ | Two **formaldehyde** |

**With oxidative workup (H₂O₂):** Aldehydes are further oxidized to **carboxylic acids**

> **High-Yield DAT Tip:** Ozonolysis is a favorite DAT question. Draw the alkene, "cut" the double bond, and put =O on each carbon. Reductive workup preserves aldehydes; oxidative workup converts them to carboxylic acids.

### Potassium Permanganate (KMnO₄) Cleavage

**Cold, dilute KMnO₄ (neutral/basic):**
- Gives a **1,2-diol (glycol)** — syn addition of two OH groups
- Also called **syn dihydroxylation**

**Hot, concentrated, acidic KMnO₄:**
- Full cleavage of the double bond
- Similar products to oxidative ozonolysis (carboxylic acids and/or ketones)
- Terminal =CH₂ gives CO₂ + H₂O

### Osmium Tetroxide (OsO₄)

**Reagent:** OsO₄ followed by NaHSO₃ or with NMO (co-oxidant)

- **Syn dihydroxylation** — adds two OH groups from the same face
- Produces a **cis-1,2-diol**

| Reagent | Product | Stereochemistry |
|---------|---------|-----------------|
| O₃/Zn (ozonolysis) | Ketones and/or aldehydes | Cleavage |
| KMnO₄ cold, dilute | 1,2-diol | Syn |
| OsO₄/NMO | 1,2-diol | Syn |
| KMnO₄ hot, acidic | Carboxylic acids/ketones | Cleavage |

## Oxidative Cleavage of Alkynes

Ozonolysis of alkynes yields **carboxylic acids** (internal alkynes) or **CO₂** (terminal alkynes).

KMnO₄ (hot) cleaves alkynes similarly to give carboxylic acids.

## Key Terms
- **Lindlar's catalyst:** Poisoned Pd catalyst that partially reduces alkynes to cis-alkenes
- **Dissolving metal reduction:** Na in liquid NH₃; converts alkynes to trans-alkenes
- **Ozonolysis:** Cleavage of C=C with O₃ followed by reductive or oxidative workup
- **Tautomerism:** Equilibrium between keto and enol forms
- **Dihydroxylation:** Addition of two OH groups to an alkene (syn with OsO₄ or cold KMnO₄)
`,
        keyTerms: [
          { term: "Ozonolysis", definition: "O₃ followed by Zn/H₂O cleaves C=C to give aldehydes and/or ketones" },
          { term: "Lindlar's Catalyst", definition: "Poisoned Pd that partially reduces alkynes to cis-alkenes (syn addition)" },
          { term: "Dissolving Metal Reduction", definition: "Na/NH₃(l) reduces alkynes to trans-alkenes (anti addition)" },
          { term: "Keto-Enol Tautomerism", definition: "Equilibrium between enol (vinyl alcohol) and keto (carbonyl) forms; keto usually favored" },
          { term: "Syn Dihydroxylation", definition: "Addition of two OH groups from the same face using OsO₄ or cold KMnO₄" },
          { term: "Acetylide Anion", definition: "R−C≡C⁻; strong nucleophile/base formed by deprotonating a terminal alkyne" },
        ],
      },
    ],
    questions: [
      {
        stem: "What is the major product of the reaction of 1-butene with HBr in the presence of peroxides (ROOR)?",
        choices: [
          { label: "A", text: "2-Bromobutane", isCorrect: false },
          { label: "B", text: "1-Bromobutane", isCorrect: true },
          { label: "C", text: "1,2-Dibromobutane", isCorrect: false },
          { label: "D", text: "2-Butanol", isCorrect: false },
          { label: "E", text: "1-Butanol", isCorrect: false },
        ],
        explanation: "Peroxides initiate a **free radical chain mechanism** that gives **anti-Markovnikov** addition of HBr. The bromine adds to the **less substituted** carbon (C1), giving **1-bromobutane**. Without peroxides, Markovnikov addition would give 2-bromobutane. Note: this radical anti-Markovnikov addition only works with HBr, not HCl or HI.",
        difficulty: 2,
        tags: ["anti-Markovnikov", "radical addition", "HBr"],
      },
      {
        stem: "What is the product of treating 1-hexyne with Lindlar's catalyst and H₂?",
        choices: [
          { label: "A", text: "Hexane", isCorrect: false },
          { label: "B", text: "cis-1-Hexene", isCorrect: true },
          { label: "C", text: "trans-1-Hexene", isCorrect: false },
          { label: "D", text: "1-Hexanol", isCorrect: false },
          { label: "E", text: "2-Hexanone", isCorrect: false },
        ],
        explanation: "**Lindlar's catalyst** (poisoned Pd/CaCO₃/Pb) partially reduces an alkyne to an alkene, stopping at the alkene stage. The addition is **syn**, giving a **cis-alkene**. For trans-alkene formation, use dissolving metal reduction (Na/NH₃). Full reduction to hexane would require H₂ with regular Pd/C.",
        difficulty: 1,
        tags: ["Lindlar's catalyst", "alkyne reduction"],
      },
      {
        stem: "What products are formed when 2-methyl-2-butene is treated with O₃ followed by Zn/H₂O?",
        choices: [
          { label: "A", text: "Acetone and acetaldehyde", isCorrect: true },
          { label: "B", text: "Two equivalents of acetone", isCorrect: false },
          { label: "C", text: "Acetone and acetic acid", isCorrect: false },
          { label: "D", text: "2-Pentanone", isCorrect: false },
          { label: "E", text: "Formaldehyde and butanone", isCorrect: false },
        ],
        explanation: "Ozonolysis cleaves the C=C bond. 2-Methyl-2-butene: (CH₃)₂C=CHCH₃. Cut the double bond and put =O on each carbon: (CH₃)₂C=O (**acetone**) + CH₃CH=O (**acetaldehyde**). Reductive workup (Zn/H₂O) preserves the aldehyde. Oxidative workup would convert acetaldehyde to acetic acid.",
        difficulty: 2,
        tags: ["ozonolysis", "alkene cleavage"],
      },
      {
        stem: "The hydroboration-oxidation of propene (CH₃CH=CH₂) gives:",
        choices: [
          { label: "A", text: "2-Propanol (isopropanol)", isCorrect: false },
          { label: "B", text: "1-Propanol", isCorrect: true },
          { label: "C", text: "Propanal", isCorrect: false },
          { label: "D", text: "Propanone (acetone)", isCorrect: false },
          { label: "E", text: "1,2-Propanediol", isCorrect: false },
        ],
        explanation: "Hydroboration-oxidation (BH₃·THF, then H₂O₂/NaOH) gives **anti-Markovnikov** addition of water. The OH adds to the **less substituted** carbon. For propene, this places OH on C1, giving **1-propanol**. Acid-catalyzed hydration would give 2-propanol (Markovnikov product).",
        difficulty: 1,
        tags: ["hydroboration-oxidation", "anti-Markovnikov"],
      },
      {
        stem: "What is the product of treating 2-butyne with Na metal in liquid NH₃?",
        choices: [
          { label: "A", text: "cis-2-Butene", isCorrect: false },
          { label: "B", text: "trans-2-Butene", isCorrect: true },
          { label: "C", text: "Butane", isCorrect: false },
          { label: "D", text: "1-Butyne", isCorrect: false },
          { label: "E", text: "2-Butanol", isCorrect: false },
        ],
        explanation: "**Dissolving metal reduction** (Na or Li in liquid NH₃) reduces an alkyne to a **trans-alkene** through an **anti addition** mechanism (via a radical anion intermediate). The trans selectivity arises because the bulky groups prefer to be on opposite sides of the developing double bond. Lindlar's catalyst would give the cis product.",
        difficulty: 2,
        tags: ["dissolving metal reduction", "trans-alkene"],
      },
      {
        stem: "Bromination of an alkene (Br₂/CCl₄) produces what stereochemical outcome?",
        choices: [
          { label: "A", text: "Syn addition (cis product)", isCorrect: false },
          { label: "B", text: "Anti addition (trans product)", isCorrect: true },
          { label: "C", text: "Racemic mixture of syn and anti", isCorrect: false },
          { label: "D", text: "No stereoselectivity", isCorrect: false },
          { label: "E", text: "Inversion of configuration", isCorrect: false },
        ],
        explanation: "Bromination proceeds through a **bromonium ion** intermediate — a bridged, 3-membered ring. The second bromide ion attacks the opposite face (backside) of the bromonium ion. This gives exclusive **anti addition**, producing the trans-dibromide. The bromonium ion prevents rotation and ensures stereospecific anti addition.",
        difficulty: 2,
        tags: ["halogenation", "anti addition", "bromonium ion"],
      },
      {
        stem: "What is the product of acid-catalyzed hydration (H₂O/H₂SO₄) of propene?",
        choices: [
          { label: "A", text: "1-Propanol", isCorrect: false },
          { label: "B", text: "2-Propanol", isCorrect: true },
          { label: "C", text: "Propanal", isCorrect: false },
          { label: "D", text: "Propanoic acid", isCorrect: false },
          { label: "E", text: "1,2-Propanediol", isCorrect: false },
        ],
        explanation: "Acid-catalyzed hydration follows **Markovnikov's rule**: the H adds to the less substituted carbon (C1), and OH adds to the more substituted carbon (C2). This gives **2-propanol** (isopropanol). The intermediate is a secondary carbocation at C2. For anti-Markovnikov (OH at C1), use hydroboration-oxidation.",
        difficulty: 1,
        tags: ["Markovnikov", "acid-catalyzed hydration"],
      },
      {
        stem: "Treatment of a terminal alkyne with NaNH₂ followed by CH₃CH₂Br gives what product?",
        choices: [
          { label: "A", text: "A disubstituted alkyne (internal alkyne)", isCorrect: true },
          { label: "B", text: "A vinyl halide", isCorrect: false },
          { label: "C", text: "A ketone", isCorrect: false },
          { label: "D", text: "A trans-alkene", isCorrect: false },
          { label: "E", text: "An amine", isCorrect: false },
        ],
        explanation: "NaNH₂ (a strong base) deprotonates the terminal alkyne to form an **acetylide anion** (RC≡C⁻), which is a strong nucleophile. The acetylide then undergoes **SN2 reaction** with the primary alkyl halide (CH₃CH₂Br), forming a new C−C bond and creating an **internal (disubstituted) alkyne**. This is a key carbon-carbon bond-forming reaction.",
        difficulty: 2,
        tags: ["acetylide anion", "alkyne alkylation", "SN2"],
      },
      {
        stem: "Syn dihydroxylation of an alkene can be achieved using:",
        choices: [
          { label: "A", text: "O₃ followed by Zn/H₂O", isCorrect: false },
          { label: "B", text: "OsO₄ followed by NaHSO₃", isCorrect: true },
          { label: "C", text: "Br₂ in CCl₄", isCorrect: false },
          { label: "D", text: "HBr with peroxides", isCorrect: false },
          { label: "E", text: "KMnO₄ hot, acidic", isCorrect: false },
        ],
        explanation: "**OsO₄** (osmium tetroxide) adds two hydroxyl groups from the **same face** of the double bond, giving a **syn-1,2-diol** (cis-diol). Cold, dilute KMnO₄ also gives syn dihydroxylation. Hot, acidic KMnO₄ cleaves the double bond entirely. Ozonolysis also cleaves the bond. Br₂ gives anti addition of two bromines.",
        difficulty: 2,
        tags: ["syn dihydroxylation", "OsO₄"],
      },
      {
        stem: "What product results from treating an internal alkyne with H₂O, H₂SO₄, and HgSO₄ catalyst?",
        choices: [
          { label: "A", text: "An aldehyde", isCorrect: false },
          { label: "B", text: "A ketone", isCorrect: true },
          { label: "C", text: "A carboxylic acid", isCorrect: false },
          { label: "D", text: "An alcohol", isCorrect: false },
          { label: "E", text: "An alkene", isCorrect: false },
        ],
        explanation: "Acid-catalyzed hydration of an alkyne (with HgSO₄ catalyst) follows **Markovnikov's rule**, placing OH on the more substituted carbon. The initial product is an **enol**, which rapidly tautomerizes to the more stable **keto** form. For an internal alkyne, this gives a **ketone**. Terminal alkynes also give ketones via Markovnikov hydration. Anti-Markovnikov hydration of terminal alkynes (hydroboration) gives aldehydes.",
        difficulty: 2,
        tags: ["alkyne hydration", "keto-enol tautomerism"],
      },
    ],
  },
  {
    slug: "substitution-elimination",
    title: "Substitution & Elimination",
    description: "SN1, SN2, E1, E2 mechanisms, substrate effects, competition",
    estimatedMinutes: 55,
    lessons: [
      {
        slug: "sn1-sn2",
        title: "Nucleophilic Substitution: SN1 & SN2",
        content: `# Nucleophilic Substitution: SN1 & SN2

Nucleophilic substitution reactions are among the most fundamental in organic chemistry and are heavily tested on the DAT. Understanding when SN1 vs. SN2 occurs is critical.

## Overview

In nucleophilic substitution, a **nucleophile (Nu⁻)** replaces a **leaving group (LG)** on a carbon.

**Nu⁻ + R−LG → R−Nu + LG⁻**

## SN2 Mechanism

**S**ubstitution, **N**ucleophilic, **2** = bimolecular (both reactants in the rate-determining step)

### Key Features

| Feature | SN2 |
|---------|-----|
| Rate law | Rate = k[substrate][nucleophile] — **second order** |
| Mechanism | One step — concerted (bond breaking and forming occur simultaneously) |
| Transition state | Pentacoordinate carbon (backside attack) |
| Stereochemistry | **Inversion of configuration** (Walden inversion) |
| Substrate preference | **Methyl > 1° > 2°** (3° does NOT undergo SN2) |
| Nucleophile | **Strong nucleophile** required |
| Solvent | **Polar aprotic** solvents (DMSO, DMF, acetone) |
| Leaving group | Good leaving group needed |

### Why No SN2 at 3° Carbons?

Steric hindrance! The three bulky groups block the nucleophile from attacking the backside of the carbon. SN2 is fastest at methyl and 1° substrates.

> **High-Yield DAT Tip:** SN2 = strong nucleophile + methyl/primary substrate + polar aprotic solvent + inversion of stereochemistry. This is the #1 most tested combination.

### Nucleophile Strength

Strong nucleophiles (favor SN2):
- Negatively charged species: OH⁻, CN⁻, RS⁻, I⁻, RO⁻
- Nucleophilicity increases **down a group** in polar protic solvents: I⁻ > Br⁻ > Cl⁻ > F⁻
- Nucleophilicity increases with **basicity** in polar aprotic solvents: F⁻ > Cl⁻ > Br⁻ > I⁻

## SN1 Mechanism

**S**ubstitution, **N**ucleophilic, **1** = unimolecular (only substrate in the rate-determining step)

### Key Features

| Feature | SN1 |
|---------|-----|
| Rate law | Rate = k[substrate] — **first order** |
| Mechanism | Two steps: (1) LG leaves → carbocation, (2) Nu⁻ attacks |
| Intermediate | **Carbocation** (sp², planar) |
| Stereochemistry | **Racemization** (attack from both faces of planar carbocation) |
| Substrate preference | **3° > 2°** (1° and methyl do NOT undergo SN1) |
| Nucleophile | Weak nucleophile OK (often the solvent — solvolysis) |
| Solvent | **Polar protic** solvents (water, alcohols) — stabilize carbocation and LG |
| Leaving group | Good leaving group needed |

### Carbocation Stability

**3° > 2° > 1° > methyl**

Stabilized by:
- **Hyperconjugation** (σ donation from neighboring C–H bonds)
- **Resonance** (adjacent π systems, e.g., allylic and benzylic carbocations)
- **Induction** (electron-donating groups)

> **DAT Tip:** Allylic and benzylic carbocations are stabilized by resonance and can undergo SN1 even at primary positions. This is a common DAT trap.

### Carbocation Rearrangements

SN1 reactions can involve **1,2-hydride shifts** or **1,2-methyl shifts** to form a more stable carbocation.

- 2° → 3° via hydride shift (very common)
- Ring expansion (less common but tested)

## Leaving Group Ability

Good leaving groups are **weak bases** (stable after departure):

**Best → Worst leaving group:**
**TsO⁻ > I⁻ > Br⁻ > Cl⁻ > F⁻ > OH⁻ > NH₂⁻**

> **DAT Tip:** OH⁻ and NH₂⁻ are terrible leaving groups. To use an alcohol in substitution, first convert OH to a better leaving group (e.g., tosylate, mesylate) or protonate it with acid (makes H₂O the leaving group).

## Comparing SN1 and SN2

| Factor | Favors SN2 | Favors SN1 |
|--------|-----------|-----------|
| **Substrate** | Methyl, 1° | 3° (2° is borderline) |
| **Nucleophile** | Strong, unhindered | Weak (or solvent) |
| **Solvent** | Polar aprotic | Polar protic |
| **Rate law** | Second order | First order |
| **Stereochemistry** | Inversion | Racemization |
| **Rearrangements** | Never | Possible |

> **High-Yield DAT Tip:** Secondary (2°) substrates are the trickiest — they can undergo either SN1 or SN2 depending on the nucleophile and solvent. Strong nucleophile + polar aprotic → SN2. Weak nucleophile + polar protic → SN1.

## Polar Protic vs. Polar Aprotic Solvents

| Polar Protic | Polar Aprotic |
|-------------|--------------|
| H₂O, MeOH, EtOH, AcOH | DMSO, DMF, Acetone, CH₃CN |
| Have O–H or N–H bonds | No O–H or N–H bonds |
| Stabilize ions via H-bonding | Do not solvate nucleophiles well |
| Favor SN1, E1 | Favor SN2, E2 |

## Key Terms
- **Nucleophile:** Electron-rich species that attacks electrophilic carbon
- **Leaving group:** Group that departs with the bonding electrons
- **Inversion:** Stereochemistry flips at the carbon (SN2)
- **Racemization:** Both enantiomers formed equally (SN1)
`,
        keyTerms: [
          { term: "SN2", definition: "One-step substitution; rate = k[sub][Nu]; inversion; favored by methyl/1° substrates and strong nucleophiles" },
          { term: "SN1", definition: "Two-step substitution via carbocation; rate = k[sub]; racemization; favored by 3° substrates" },
          { term: "Nucleophile", definition: "Electron-rich species that donates electrons to an electrophilic carbon" },
          { term: "Leaving Group", definition: "Departs with the bonding electrons; weak bases are good leaving groups" },
          { term: "Walden Inversion", definition: "Complete inversion of stereochemistry at the carbon undergoing SN2 attack" },
          { term: "Carbocation Rearrangement", definition: "1,2-hydride or methyl shift to form a more stable carbocation in SN1" },
        ],
      },
      {
        slug: "e1-e2",
        title: "Elimination Reactions: E1 & E2",
        content: `# Elimination Reactions: E1 & E2

Elimination reactions form **alkenes** by removing a leaving group and a β-hydrogen. Understanding E1 vs. E2, and when elimination competes with substitution, is essential for the DAT.

## Overview

In elimination, a base removes a **β-hydrogen** (hydrogen on the carbon adjacent to the carbon bearing the leaving group), forming a **C=C double bond**.

## E2 Mechanism

**E**limination, **2** = bimolecular

### Key Features

| Feature | E2 |
|---------|-----|
| Rate law | Rate = k[substrate][base] — **second order** |
| Mechanism | **One step** — concerted (base removes β-H while LG leaves simultaneously) |
| Geometry | **Anti-periplanar** (β-H and LG must be 180° apart) |
| Stereochemistry | **Anti elimination** → trans alkene usually favored |
| Substrate preference | **3° > 2° > 1°** |
| Base | **Strong, bulky base** (tBuO⁻, LDA, DBU) |
| Solvent | Polar aprotic or polar protic |
| Product | **Zaitsev's rule** (more substituted alkene) unless bulky base |

### Anti-Periplanar Requirement

The β-hydrogen and leaving group must be in an **anti-periplanar** arrangement (180° dihedral angle). This is a strict geometric requirement of E2.

In cyclohexanes: the β-H and LG must both be **axial** and **trans** to each other (1,2-diaxial).

> **High-Yield DAT Tip:** The anti-periplanar requirement in E2 is critical for cyclohexane substrates. If the leaving group is equatorial, the ring must flip to place it axial before E2 can occur.

### Zaitsev's Rule vs. Hofmann Product

| Base | Product Alkene | Reason |
|------|---------------|--------|
| Small base (EtO⁻, OH⁻) | **Zaitsev** (more substituted, more stable) | Thermodynamic product |
| Bulky base (tBuO⁻) | **Hofmann** (less substituted) | Steric approach control |

> **DAT Tip:** Default to Zaitsev's rule on the DAT unless a bulky base (like potassium tert-butoxide, KOtBu) is specified.

## E1 Mechanism

**E**limination, **1** = unimolecular

### Key Features

| Feature | E1 |
|---------|-----|
| Rate law | Rate = k[substrate] — **first order** |
| Mechanism | **Two steps:** (1) LG leaves → carbocation, (2) base removes β-H |
| Intermediate | **Carbocation** |
| Stereochemistry | No geometric requirement → mixture of E/Z isomers |
| Substrate preference | **3° > 2°** (same as SN1) |
| Base | Weak base |
| Product | **Zaitsev** (more substituted alkene, thermodynamic product) |
| Rearrangements | Yes (carbocation intermediates can rearrange) |

### E1 Always Competes with SN1

E1 and SN1 share the same first step (carbocation formation), so they always occur together. The ratio depends on temperature:
- **Higher temperature** → favors **elimination** (E1)
- **Lower temperature** → favors **substitution** (SN1)

> **DAT Tip:** Heat favors elimination. If the question says "heat" or "high temperature," think elimination (E1 or E2).

## The Big Picture: SN1 vs. SN2 vs. E1 vs. E2

### Decision Framework

**Step 1: Look at the substrate**
- **Methyl / 1°:** SN2 (or E2 with a strong, bulky base)
- **3°:** E2 (with strong base) or SN1/E1 (with weak base/solvent)
- **2°:** Most variable — depends on nucleophile/base and solvent

**Step 2: Look at the nucleophile/base**
- **Strong nucleophile, good base (not bulky):** SN2 (or E2 if 3° substrate)
- **Strong, bulky base:** E2
- **Weak nucleophile/base:** SN1/E1

**Step 3: Look at the solvent and temperature**
- **Polar aprotic solvent:** Favors SN2/E2
- **Polar protic solvent:** Favors SN1/E1
- **High temperature:** Favors elimination

### Master Summary Table

| Substrate | Strong Nu/Base | Strong Bulky Base | Weak Nu/Base (protic solvent) |
|-----------|---------------|-------------------|------------------------------|
| Methyl | SN2 | SN2 | SN2 (slow) |
| 1° | SN2 | E2 | SN2 (slow) |
| 2° | SN2 (or E2) | E2 | SN1/E1 (mixture) |
| 3° | E2 | E2 | SN1/E1 |

> **High-Yield DAT Tip:** This table is probably the single most important summary in organic chemistry for the DAT. Memorize it completely.

## Predicting Major Products

1. **Identify the substrate** (methyl, 1°, 2°, 3°)
2. **Identify nucleophile/base strength and size**
3. **Choose mechanism** (SN1, SN2, E1, or E2)
4. **Predict product:**
   - SN2: Inversion product
   - SN1: Racemic substitution product
   - E2: Zaitsev alkene (or Hofmann with bulky base)
   - E1: Zaitsev alkene (+ SN1 products)

## Key Terms
- **Zaitsev's rule:** Major product is the more substituted (more stable) alkene
- **Hofmann product:** Less substituted alkene formed with bulky bases
- **Anti-periplanar:** 180° dihedral between β-H and LG required for E2
- **β-Hydrogen:** H on the carbon adjacent to the C bearing the leaving group
`,
        keyTerms: [
          { term: "E2", definition: "One-step elimination; rate = k[sub][base]; anti-periplanar geometry; strong base required" },
          { term: "E1", definition: "Two-step elimination via carbocation; rate = k[sub]; weak base; competes with SN1" },
          { term: "Zaitsev's Rule", definition: "More substituted alkene is the major product (thermodynamic control)" },
          { term: "Hofmann Product", definition: "Less substituted alkene favored when a bulky base is used" },
          { term: "Anti-Periplanar", definition: "180° dihedral angle between β-H and leaving group; required for E2" },
          { term: "Beta (β) Hydrogen", definition: "Hydrogen on the carbon adjacent to the carbon bearing the leaving group" },
        ],
      },
    ],
    questions: [
      {
        stem: "What is the major product when (R)-2-bromobutane reacts with NaCN in DMSO?",
        choices: [
          { label: "A", text: "(R)-2-Cyanobutane", isCorrect: false },
          { label: "B", text: "(S)-2-Cyanobutane", isCorrect: true },
          { label: "C", text: "Racemic 2-cyanobutane", isCorrect: false },
          { label: "D", text: "2-Butene", isCorrect: false },
          { label: "E", text: "1-Cyanobutane", isCorrect: false },
        ],
        explanation: "CN⁻ is a **strong nucleophile**. DMSO is a **polar aprotic** solvent. The substrate is **secondary**. These conditions favor **SN2**. SN2 proceeds with **inversion of configuration** (Walden inversion), so (R)-2-bromobutane gives **(S)-2-cyanobutane**. In a polar protic solvent with a weak nucleophile, SN1 (racemization) would compete.",
        difficulty: 2,
        tags: ["SN2", "inversion", "stereochemistry"],
      },
      {
        stem: "Which substrate will undergo SN1 solvolysis FASTEST in ethanol?",
        choices: [
          { label: "A", text: "CH₃Br", isCorrect: false },
          { label: "B", text: "(CH₃)₃CBr", isCorrect: true },
          { label: "C", text: "CH₃CH₂Br", isCorrect: false },
          { label: "D", text: "(CH₃)₂CHBr", isCorrect: false },
          { label: "E", text: "CH₂=CHCH₂Br", isCorrect: false },
        ],
        explanation: "**(CH₃)₃CBr** (tert-butyl bromide) undergoes SN1 fastest because it forms the most stable **tertiary carbocation**. SN1 rate depends on carbocation stability: 3° > 2° > 1° > methyl. Ethanol is a polar protic solvent (favors SN1). While allyl bromide forms a resonance-stabilized carbocation, a 3° carbocation is still more stable.",
        difficulty: 1,
        tags: ["SN1", "carbocation stability"],
      },
      {
        stem: "Treatment of 2-bromo-2-methylbutane with sodium ethoxide (NaOEt) in ethanol primarily gives:",
        choices: [
          { label: "A", text: "2-Ethoxy-2-methylbutane (substitution product)", isCorrect: false },
          { label: "B", text: "2-Methyl-2-butene (Zaitsev product)", isCorrect: true },
          { label: "C", text: "2-Methyl-1-butene (Hofmann product)", isCorrect: false },
          { label: "D", text: "3-Methyl-1-butene", isCorrect: false },
          { label: "E", text: "Ethyl bromide + 2-methylbutane", isCorrect: false },
        ],
        explanation: "The substrate is **tertiary** (3°) — SN2 is impossible due to steric hindrance. NaOEt is a **strong base** → **E2 elimination**. By **Zaitsev's rule**, the more substituted alkene is the major product: **2-methyl-2-butene** (trisubstituted alkene). The Hofmann product (2-methyl-1-butene) would be major only with a bulky base like KOtBu.",
        difficulty: 2,
        tags: ["E2", "Zaitsev's rule", "tertiary substrate"],
      },
      {
        stem: "In an E2 elimination of a substituted cyclohexane, the leaving group and the β-hydrogen must be:",
        choices: [
          { label: "A", text: "Both equatorial", isCorrect: false },
          { label: "B", text: "Both axial and trans to each other", isCorrect: true },
          { label: "C", text: "Both axial and cis to each other", isCorrect: false },
          { label: "D", text: "One axial and one equatorial", isCorrect: false },
          { label: "E", text: "In any orientation", isCorrect: false },
        ],
        explanation: "E2 requires an **anti-periplanar** geometry (180° dihedral angle) between the β-H and the leaving group. In a cyclohexane ring, this is achieved only when both are **axial** and **trans** (1,2-diaxial). If the LG is equatorial, the ring must chair-flip to place it axial before E2 can occur.",
        difficulty: 2,
        tags: ["E2", "anti-periplanar", "cyclohexane"],
      },
      {
        stem: "A primary alkyl bromide is treated with a weak base in a polar protic solvent at room temperature. What mechanism predominates?",
        choices: [
          { label: "A", text: "SN1", isCorrect: false },
          { label: "B", text: "SN2", isCorrect: true },
          { label: "C", text: "E1", isCorrect: false },
          { label: "D", text: "E2", isCorrect: false },
          { label: "E", text: "No reaction occurs", isCorrect: false },
        ],
        explanation: "Primary substrates strongly favor **SN2** because they cannot form stable primary carbocations (ruling out SN1 and E1). Even with a weak base, the primary substrate is unhindered enough for nucleophilic attack. E2 would require a strong base. The SN2 reaction may be slow with a weak nucleophile but still predominates over other pathways for 1° substrates.",
        difficulty: 2,
        tags: ["SN2", "primary substrate", "mechanism selection"],
      },
      {
        stem: "SN1 reactions typically result in which stereochemical outcome?",
        choices: [
          { label: "A", text: "Complete inversion of configuration", isCorrect: false },
          { label: "B", text: "Complete retention of configuration", isCorrect: false },
          { label: "C", text: "Racemization (mixture of both enantiomers)", isCorrect: true },
          { label: "D", text: "Only the R product", isCorrect: false },
          { label: "E", text: "E/Z isomerism", isCorrect: false },
        ],
        explanation: "SN1 proceeds through a **planar carbocation** intermediate (sp² hybridized). The nucleophile can attack from **either face** of the flat carbocation with roughly equal probability, giving a **racemic mixture** (approximately 50:50 R and S). In contrast, SN2 gives complete **inversion** (Walden inversion) because the nucleophile attacks from the backside.",
        difficulty: 1,
        tags: ["SN1", "racemization", "stereochemistry"],
      },
      {
        stem: "Which of the following is the BEST leaving group?",
        choices: [
          { label: "A", text: "OH⁻", isCorrect: false },
          { label: "B", text: "NH₂⁻", isCorrect: false },
          { label: "C", text: "F⁻", isCorrect: false },
          { label: "D", text: "I⁻", isCorrect: true },
          { label: "E", text: "H⁻", isCorrect: false },
        ],
        explanation: "Good leaving groups are **weak bases** (stable after departure). Among the choices, **I⁻** is the best leaving group because it is the weakest base and most stable anion (large, polarizable, charge dispersed). Leaving group ability: I⁻ > Br⁻ > Cl⁻ > F⁻ >> OH⁻ >> NH₂⁻. OH⁻ and NH₂⁻ are strong bases and terrible leaving groups.",
        difficulty: 1,
        tags: ["leaving groups", "basicity"],
      },
      {
        stem: "What is the major product when 2-methyl-2-butanol is treated with concentrated HBr?",
        choices: [
          { label: "A", text: "2-Bromo-2-methylbutane", isCorrect: true },
          { label: "B", text: "1-Bromo-2-methylbutane", isCorrect: false },
          { label: "C", text: "2-Methyl-2-butene", isCorrect: false },
          { label: "D", text: "3-Bromo-2-methylbutane", isCorrect: false },
          { label: "E", text: "2-Methyl-1-butene", isCorrect: false },
        ],
        explanation: "2-Methyl-2-butanol is a **tertiary alcohol**. With HBr, the OH is protonated (making H₂O the leaving group), and water departs to form a **tertiary carbocation**. Br⁻ then attacks the carbocation (**SN1 mechanism**) giving **2-bromo-2-methylbutane**. Tertiary substrates favor SN1. Some E1 elimination product may form but substitution predominates at lower temperatures.",
        difficulty: 2,
        tags: ["SN1", "alcohol reactivity", "HBr"],
      },
      {
        stem: "E2 elimination is favored over SN2 when the base is:",
        choices: [
          { label: "A", text: "Small and strong (e.g., NaOCH₃)", isCorrect: false },
          { label: "B", text: "Bulky and strong (e.g., KOtBu)", isCorrect: true },
          { label: "C", text: "Weak and small (e.g., H₂O)", isCorrect: false },
          { label: "D", text: "A good nucleophile but weak base (e.g., I⁻)", isCorrect: false },
          { label: "E", text: "Neutral (e.g., CH₃OH)", isCorrect: false },
        ],
        explanation: "**Bulky, strong bases** (like KOtBu, potassium tert-butoxide) favor **E2** elimination because they are too sterically hindered to act as nucleophiles in SN2. They can still abstract a β-hydrogen (accessible on the periphery). Small, strong bases (like NaOCH₃) can act as either nucleophile or base, often favoring SN2 at primary substrates.",
        difficulty: 2,
        tags: ["E2", "bulky base", "SN2 vs E2"],
      },
      {
        stem: "Which solvent favors an SN1 mechanism?",
        choices: [
          { label: "A", text: "DMSO (polar aprotic)", isCorrect: false },
          { label: "B", text: "Acetone (polar aprotic)", isCorrect: false },
          { label: "C", text: "DMF (polar aprotic)", isCorrect: false },
          { label: "D", text: "Water (polar protic)", isCorrect: true },
          { label: "E", text: "Diethyl ether (nonpolar)", isCorrect: false },
        ],
        explanation: "**Polar protic solvents** (water, methanol, ethanol) favor SN1 because they stabilize the carbocation intermediate through solvation and stabilize the departing leaving group through hydrogen bonding. **Polar aprotic solvents** (DMSO, DMF, acetone) favor SN2 because they do not solvate nucleophiles, leaving them more reactive.",
        difficulty: 1,
        tags: ["SN1", "solvent effects", "polar protic"],
      },
    ],
  },
  {
    slug: "carbonyl-chemistry",
    title: "Carbonyl Chemistry",
    description: "Aldehydes, ketones, carboxylic acids, esters, amides, and nucleophilic addition/substitution",
    estimatedMinutes: 55,
    lessons: [
      {
        slug: "aldehydes-ketones",
        title: "Aldehydes & Ketones: Nucleophilic Addition",
        content: `# Aldehydes & Ketones: Nucleophilic Addition

The carbonyl group (C=O) is the most important functional group in organic chemistry. Aldehydes and ketones undergo **nucleophilic addition** — the nucleophile attacks the electrophilic carbonyl carbon, and the π bond breaks.

## Carbonyl Reactivity

The C=O bond is **polarized** — oxygen is more electronegative, making the carbon **electrophilic** (δ+) and the oxygen **nucleophilic** (δ−).

**Aldehyde vs. Ketone Reactivity:**

| Property | Aldehyde (RCHO) | Ketone (RCOR') |
|----------|----------------|----------------|
| Steric hindrance | Less (one H) | More (two R groups) |
| Electronic effect | More electrophilic | Less electrophilic (R groups donate electrons) |
| Reactivity | **More reactive** | Less reactive |

> **DAT Tip:** Aldehydes are MORE reactive than ketones toward nucleophilic addition because they are less sterically hindered and more electrophilic.

## General Mechanism: Nucleophilic Addition

1. **Nucleophile attacks** the electrophilic carbonyl carbon
2. **π bond breaks** — electrons go to oxygen (forming alkoxide)
3. **Protonation** of the alkoxide gives the product

## Key Nucleophilic Addition Reactions

### 1. Grignard Reagents (RMgBr)

Grignard reagents are **powerful carbon nucleophiles** that add to carbonyls:

| Carbonyl | + RMgBr → | Product (after H₃O⁺ workup) |
|----------|-----------|------------------------------|
| Formaldehyde (HCHO) | RMgBr | **Primary alcohol** |
| Aldehyde (RCHO) | R'MgBr | **Secondary alcohol** |
| Ketone (RCOR') | R''MgBr | **Tertiary alcohol** |
| Ester (RCOOR') | 2 eq R''MgBr | **Tertiary alcohol** |
| CO₂ | RMgBr | **Carboxylic acid** (after workup) |

> **High-Yield DAT Tip:** Grignard reagents are destroyed by protic solvents and acidic protons (–OH, –NH, –SH, –COOH). The reaction must be done in anhydrous ether or THF.

### 2. Hydride Reductions (NaBH₄ and LiAlH₄)

| Reagent | Aldehydes → | Ketones → | Esters → | Carboxylic Acids → | Amides → |
|---------|------------|-----------|----------|--------------------|---------|
| **NaBH₄** | 1° alcohol | 2° alcohol | No reaction | No reaction | No reaction |
| **LiAlH₄** | 1° alcohol | 2° alcohol | **1° alcohol** | **1° alcohol** | **Amine** |

> **DAT Tip:** NaBH₄ is a **mild** reducing agent (only reduces aldehydes and ketones). LiAlH₄ is a **strong** reducing agent (reduces almost everything including esters, carboxylic acids, and amides).

### 3. Cyanohydrin Formation (HCN or NaCN/H⁺)

CN⁻ attacks the carbonyl → **cyanohydrin** (R₂C(OH)(CN))
- Reversible; favored for aldehydes and unhindered ketones

### 4. Wittig Reaction

**Reagent:** Phosphorus ylide (R₂C=PPh₃)

Converts a C=O to a **C=C** (alkene). The Wittig reaction is an important method for making alkenes with specific positioning of the double bond.

Aldehyde/Ketone + Ph₃P=CHR → **Alkene** + Ph₃P=O

### 5. Acetal Formation

**Reagent:** Excess alcohol + acid catalyst

Aldehyde/Ketone → **Hemiacetal** (1 eq ROH) → **Acetal** (2 eq ROH)

| Starting Material | + ROH/H⁺ | Product |
|------------------|-----------|---------|
| RCHO | 2 eq R'OH | Acetal: RCH(OR')₂ |
| RCOR' | 2 eq R''OH | Ketal: RC(OR'')₂R' |

- Acetals are **stable in basic conditions** but cleave in **acidic conditions**
- Used as **protecting groups** for carbonyls

> **DAT Tip:** Acetal formation is reversible. Acid conditions favor hydrolysis back to the carbonyl. Basic conditions leave the acetal intact.

### 6. Imine and Enamine Formation

| Reagent | Product |
|---------|---------|
| **Primary amine** (RNH₂) | **Imine** (Schiff base, C=NR) |
| **Secondary amine** (R₂NH) | **Enamine** (C=C−NR₂) |

Both require acid catalysis and removal of water to drive equilibrium.

## Oxidation of Aldehydes

Aldehydes are easily oxidized to **carboxylic acids**:

| Oxidizing Agent | Aldehydes → |
|----------------|-------------|
| KMnO₄ | Carboxylic acid |
| CrO₃/H₂SO₄ (Jones) | Carboxylic acid |
| Tollens' reagent (Ag(NH₃)₂⁺) | Carboxylic acid + Ag mirror |
| Fehling's/Benedict's (Cu²⁺) | Carboxylic acid + Cu₂O precipitate |

> **DAT Tip:** Tollens' test (silver mirror) and Benedict's test (brick-red precipitate) distinguish aldehydes from ketones. Ketones are NOT oxidized by these reagents.

## Key Terms
- **Nucleophilic addition:** Nu attacks C=O, breaking the π bond; characteristic of aldehydes and ketones
- **Grignard reagent:** RMgBr; strong carbon nucleophile
- **Acetal:** RCH(OR')₂; protecting group for carbonyls, stable in base
- **Wittig reaction:** Converts C=O to C=C using a phosphorus ylide
`,
        keyTerms: [
          { term: "Nucleophilic Addition", definition: "Nucleophile attacks electrophilic carbonyl carbon; π bond breaks; typical of aldehydes/ketones" },
          { term: "Grignard Reagent", definition: "RMgBr; strong carbon nucleophile that adds to carbonyls to form alcohols" },
          { term: "NaBH₄", definition: "Mild reducing agent; reduces only aldehydes and ketones to alcohols" },
          { term: "LiAlH₄", definition: "Strong reducing agent; reduces aldehydes, ketones, esters, acids, and amides" },
          { term: "Acetal", definition: "RCH(OR')₂; formed from aldehyde + 2 eq alcohol; stable protecting group in base" },
          { term: "Wittig Reaction", definition: "Converts C=O to C=C using phosphorus ylide (Ph₃P=CHR)" },
        ],
      },
      {
        slug: "carboxylic-acid-derivatives",
        title: "Carboxylic Acid Derivatives",
        content: `# Carboxylic Acid Derivatives

Carboxylic acid derivatives — acyl halides, anhydrides, esters, and amides — undergo **nucleophilic acyl substitution** rather than simple addition. This is because they have a leaving group attached to the carbonyl.

## The Four Major Carboxylic Acid Derivatives

| Derivative | Structure | Leaving Group | Reactivity |
|-----------|-----------|---------------|------------|
| **Acyl halide** (acid chloride) | RCOCl | Cl⁻ | **Most reactive** |
| **Anhydride** | RCO-O-COR | RCOO⁻ | High |
| **Ester** | RCOOR' | R'O⁻ | Moderate |
| **Amide** | RCONR'₂ | R'₂N⁻ | **Least reactive** |

**Reactivity order:** Acyl halide > Anhydride > Ester > Amide

> **High-Yield DAT Tip:** Reactivity decreases as the leaving group becomes a stronger base (harder to leave). Cl⁻ is a great leaving group (weak base); NH₂⁻ is a terrible leaving group (strong base). This is why amides are the least reactive.

### Resonance and Reactivity

The stability of the derivative is due to **resonance donation** from the heteroatom to the carbonyl:
- Nitrogen donates more strongly than oxygen → amides are most resonance-stabilized → least reactive
- Chlorine donates poorly → acyl chlorides have the least resonance stabilization → most reactive

## Nucleophilic Acyl Substitution Mechanism

1. **Nucleophile attacks** the electrophilic carbonyl carbon
2. **Tetrahedral intermediate** forms (sp³ carbon with Nu, LG, R, and O⁻)
3. **Leaving group departs**, regenerating the C=O

**Key difference from nucleophilic addition (aldehydes/ketones):** Here, the leaving group is expelled. Aldehydes and ketones lack a good leaving group, so they stop at the addition product.

## Interconversions: Going Down the Reactivity Ladder

You can convert a more reactive derivative to a less reactive one (going DOWN the ladder):

**Acyl chloride → Anhydride → Ester → Amide**

| Starting Material | + Nucleophile | Product |
|------------------|---------------|---------|
| RCOCl + RCOO⁻ | Carboxylate | Anhydride |
| RCOCl + R'OH | Alcohol | Ester |
| RCOCl + R'NH₂ | Amine | Amide |
| Anhydride + R'OH | Alcohol | Ester |
| Anhydride + R'NH₂ | Amine | Amide |
| Ester + R'NH₂ | Amine | Amide (aminolysis) |

> **DAT Tip:** You CANNOT easily go UP the reactivity ladder (e.g., amide → ester) under normal conditions because that would require replacing a weaker leaving group with a stronger one.

## Important Reactions of Each Derivative

### Carboxylic Acids (RCOOH)

| Reaction | Reagent | Product |
|----------|---------|---------|
| Esterification | R'OH / H⁺ (Fischer) | Ester + H₂O |
| Reduction | LiAlH₄ | 1° Alcohol |
| Acyl chloride formation | SOCl₂ or PCl₃ | Acyl chloride |
| Decarboxylation | Heat (β-keto acids) | Ketone + CO₂ |
| Salt formation | NaOH | Carboxylate (RCOO⁻Na⁺) |

### Fischer Esterification

**RCOOH + R'OH ⇌ RCOOR' + H₂O** (acid-catalyzed, reversible)

- Driven forward by removing water or using excess alcohol
- Reverse = **acid-catalyzed hydrolysis**

### Saponification (Base Hydrolysis of Esters)

**RCOOR' + NaOH → RCOO⁻Na⁺ + R'OH**

- **Irreversible** (carboxylate salt is very stable)
- This is how soap is made (saponification of fats/triglycerides)

> **DAT Tip:** Saponification is irreversible because the product is the resonance-stabilized carboxylate anion. Fischer esterification is reversible.

### Amide Properties

- Amides have a **partial double bond** character (C=N resonance) → restricted rotation
- Amide bond is planar (important for peptide structure)
- Hydrolysis of amides requires **strong acid or base** and heat
- LiAlH₄ reduces amides to **amines**

## Acid Derivatives in Biology

| Biological Molecule | Bond Type |
|-------------------|-----------|
| **Proteins** | Amide bonds (peptide bonds between amino acids) |
| **Fats/Oils** | Ester bonds (glycerol + fatty acids) |
| **DNA/RNA** | Phosphoester bonds |
| **Acetyl-CoA** | Thioester (RS-COR) — high-energy bond |

> **DAT Tip:** Thioesters (like acetyl-CoA) are more reactive than regular esters because sulfur is a better leaving group than oxygen (RS⁻ is more stable than RO⁻ due to sulfur's larger size and polarizability).

## Summary of Reductions

| Starting Material | NaBH₄ | LiAlH₄ | Catalytic H₂ |
|------------------|--------|---------|--------------|
| Aldehyde | 1° Alcohol | 1° Alcohol | 1° Alcohol |
| Ketone | 2° Alcohol | 2° Alcohol | 2° Alcohol |
| Ester | No reaction | 1° Alcohol | No reaction |
| Carboxylic Acid | No reaction | 1° Alcohol | No reaction |
| Amide | No reaction | Amine | No reaction |

## Key Terms
- **Nucleophilic acyl substitution:** Nucleophile adds, then leaving group departs (regenerating C=O)
- **Fischer esterification:** Acid-catalyzed formation of ester from carboxylic acid + alcohol
- **Saponification:** Base-catalyzed hydrolysis of an ester (irreversible)
- **Thioester:** R-CO-SR'; more reactive than esters; biologically important (acetyl-CoA)
`,
        keyTerms: [
          { term: "Nucleophilic Acyl Substitution", definition: "Mechanism for carboxylic acid derivatives: Nu attacks, tetrahedral intermediate forms, LG departs" },
          { term: "Acyl Chloride", definition: "RCOCl; most reactive carboxylic acid derivative" },
          { term: "Fischer Esterification", definition: "Reversible acid-catalyzed reaction: RCOOH + R'OH ⇌ RCOOR' + H₂O" },
          { term: "Saponification", definition: "Irreversible base hydrolysis of an ester to carboxylate salt + alcohol" },
          { term: "Amide Bond", definition: "R-CO-NR'₂; least reactive derivative; planar due to resonance; key bond in proteins" },
          { term: "Thioester", definition: "R-CO-SR'; more reactive than esters; acetyl-CoA is a key biological thioester" },
        ],
      },
    ],
    questions: [
      {
        stem: "What is the product when benzaldehyde (C₆H₅CHO) is treated with methylmagnesium bromide (CH₃MgBr) followed by aqueous acid workup?",
        choices: [
          { label: "A", text: "A primary alcohol", isCorrect: false },
          { label: "B", text: "A secondary alcohol", isCorrect: true },
          { label: "C", text: "A tertiary alcohol", isCorrect: false },
          { label: "D", text: "A ketone", isCorrect: false },
          { label: "E", text: "A carboxylic acid", isCorrect: false },
        ],
        explanation: "Grignard reagent (CH₃MgBr) adds the CH₃ group to the aldehyde carbonyl carbon. Aldehyde + RMgBr → **secondary alcohol** (after acid workup). The product is 1-phenylethanol: C₆H₅CH(OH)CH₃. Formaldehyde + RMgBr gives a primary alcohol; ketone + RMgBr gives a tertiary alcohol.",
        difficulty: 1,
        tags: ["Grignard", "nucleophilic addition", "aldehydes"],
      },
      {
        stem: "Which of the following carboxylic acid derivatives is the LEAST reactive toward nucleophilic acyl substitution?",
        choices: [
          { label: "A", text: "Acyl chloride (RCOCl)", isCorrect: false },
          { label: "B", text: "Anhydride (RCO₂COR)", isCorrect: false },
          { label: "C", text: "Ester (RCOOR')", isCorrect: false },
          { label: "D", text: "Amide (RCONHR')", isCorrect: true },
          { label: "E", text: "Thioester (RCOSR')", isCorrect: false },
        ],
        explanation: "Reactivity order: acyl chloride > anhydride > thioester > ester > **amide**. Amides are the least reactive because nitrogen is an excellent resonance donor (lone pair delocalizes into the carbonyl), stabilizing the ground state. Additionally, NR₂⁻ is a very poor leaving group (strong base). This resonance gives the amide bond partial double-bond character.",
        difficulty: 1,
        tags: ["carboxylic acid derivatives", "reactivity"],
      },
      {
        stem: "Treatment of an ester with NaOH and water produces:",
        choices: [
          { label: "A", text: "An alcohol and a carboxylic acid", isCorrect: false },
          { label: "B", text: "A carboxylate salt and an alcohol", isCorrect: true },
          { label: "C", text: "An aldehyde and an alcohol", isCorrect: false },
          { label: "D", text: "An amide and water", isCorrect: false },
          { label: "E", text: "An acyl chloride and an alkoxide", isCorrect: false },
        ],
        explanation: "**Saponification** is the base-catalyzed hydrolysis of an ester: RCOOR' + NaOH → **RCOO⁻Na⁺ (carboxylate salt)** + R'OH (alcohol). This reaction is **irreversible** because the carboxylate anion is resonance-stabilized. Unlike acid-catalyzed hydrolysis, the product is the carboxylate salt, not the free carboxylic acid.",
        difficulty: 1,
        tags: ["saponification", "ester hydrolysis"],
      },
      {
        stem: "Which reagent selectively reduces a ketone in the presence of an ester functional group?",
        choices: [
          { label: "A", text: "LiAlH₄", isCorrect: false },
          { label: "B", text: "NaBH₄", isCorrect: true },
          { label: "C", text: "H₂/Pd", isCorrect: false },
          { label: "D", text: "Na/NH₃(l)", isCorrect: false },
          { label: "E", text: "CrO₃", isCorrect: false },
        ],
        explanation: "**NaBH₄** is a **mild** reducing agent that reduces aldehydes and ketones but does NOT reduce esters, carboxylic acids, or amides. LiAlH₄ would reduce BOTH the ketone and the ester. H₂/Pd reduces C=C but not C=O under normal conditions. CrO₃ is an oxidizing agent, not a reducing agent.",
        difficulty: 2,
        tags: ["selective reduction", "NaBH4", "chemoselectivity"],
      },
      {
        stem: "An aldehyde is treated with excess methanol in the presence of an acid catalyst. The product is:",
        choices: [
          { label: "A", text: "A hemiacetal", isCorrect: false },
          { label: "B", text: "An acetal", isCorrect: true },
          { label: "C", text: "An ester", isCorrect: false },
          { label: "D", text: "An ether", isCorrect: false },
          { label: "E", text: "A carboxylic acid", isCorrect: false },
        ],
        explanation: "With **excess alcohol** and acid catalyst, an aldehyde undergoes two successive additions: first forming a **hemiacetal** (one OR group + one OH), then converting to an **acetal** (two OR groups): RCH(OCH₃)₂. A hemiacetal would form with only 1 equivalent of alcohol. Acetals serve as protecting groups for carbonyls (stable in base, cleaved by acid).",
        difficulty: 2,
        tags: ["acetal formation", "protecting groups"],
      },
      {
        stem: "Tollens' test (silver mirror test) gives a positive result with:",
        choices: [
          { label: "A", text: "Ketones only", isCorrect: false },
          { label: "B", text: "Aldehydes only", isCorrect: true },
          { label: "C", text: "Both aldehydes and ketones", isCorrect: false },
          { label: "D", text: "Carboxylic acids only", isCorrect: false },
          { label: "E", text: "Esters only", isCorrect: false },
        ],
        explanation: "**Tollens' reagent** (Ag(NH₃)₂⁺) selectively oxidizes **aldehydes** to carboxylic acids while reducing Ag⁺ to metallic silver (forming a mirror on the flask). Ketones are NOT oxidized because they lack the C−H bond on the carbonyl carbon. This is a classic test to **distinguish aldehydes from ketones** on the DAT.",
        difficulty: 1,
        tags: ["Tollens' test", "aldehyde vs ketone"],
      },
      {
        stem: "What is the product when a carboxylic acid is treated with LiAlH₄ followed by aqueous workup?",
        choices: [
          { label: "A", text: "An aldehyde", isCorrect: false },
          { label: "B", text: "A primary alcohol", isCorrect: true },
          { label: "C", text: "A ketone", isCorrect: false },
          { label: "D", text: "An ester", isCorrect: false },
          { label: "E", text: "An amine", isCorrect: false },
        ],
        explanation: "**LiAlH₄** is a strong reducing agent that reduces carboxylic acids (RCOOH) all the way to **primary alcohols** (RCH₂OH). The reaction proceeds through an aldehyde intermediate, but LiAlH₄ is powerful enough to reduce it further. NaBH₄ cannot reduce carboxylic acids — it only reduces aldehydes and ketones.",
        difficulty: 1,
        tags: ["LiAlH4", "reduction", "carboxylic acids"],
      },
      {
        stem: "In the Wittig reaction, a carbonyl compound is converted to:",
        choices: [
          { label: "A", text: "An alcohol", isCorrect: false },
          { label: "B", text: "An alkene", isCorrect: true },
          { label: "C", text: "An epoxide", isCorrect: false },
          { label: "D", text: "An amine", isCorrect: false },
          { label: "E", text: "A carboxylic acid", isCorrect: false },
        ],
        explanation: "The **Wittig reaction** uses a **phosphorus ylide** (Ph₃P=CHR) to convert a C=O double bond into a **C=C double bond** (alkene). The byproduct is triphenylphosphine oxide (Ph₃P=O). This reaction is valuable because it places the double bond at a specific, predictable location — unlike elimination reactions which may give mixtures.",
        difficulty: 2,
        tags: ["Wittig reaction", "alkene synthesis"],
      },
      {
        stem: "Fischer esterification is best described as:",
        choices: [
          { label: "A", text: "An irreversible reaction between an acid chloride and an alcohol", isCorrect: false },
          { label: "B", text: "A reversible acid-catalyzed reaction between a carboxylic acid and an alcohol", isCorrect: true },
          { label: "C", text: "Base-catalyzed hydrolysis of an ester", isCorrect: false },
          { label: "D", text: "Reduction of an ester with LiAlH₄", isCorrect: false },
          { label: "E", text: "An irreversible reaction producing an amide", isCorrect: false },
        ],
        explanation: "**Fischer esterification** is the **reversible, acid-catalyzed** condensation of a carboxylic acid and an alcohol to form an ester and water: RCOOH + R'OH ⇌ RCOOR' + H₂O. It is driven forward by removing water or using excess alcohol. The reverse (acid-catalyzed hydrolysis) uses excess water. Base-catalyzed ester hydrolysis is called **saponification** (irreversible).",
        difficulty: 2,
        tags: ["Fischer esterification", "ester synthesis"],
      },
      {
        stem: "Why are thioesters (like acetyl-CoA) more reactive than regular oxygen esters?",
        choices: [
          { label: "A", text: "Sulfur is more electronegative than oxygen", isCorrect: false },
          { label: "B", text: "Sulfur's lone pairs overlap poorly with the C=O, providing less resonance stabilization", isCorrect: true },
          { label: "C", text: "Thioesters have a stronger C=O bond", isCorrect: false },
          { label: "D", text: "Thioesters are more sterically hindered", isCorrect: false },
          { label: "E", text: "Sulfur forms stronger bonds with carbon", isCorrect: false },
        ],
        explanation: "In oxygen esters, the oxygen lone pairs donate into the C=O via resonance, stabilizing the ground state and making it less reactive. **Sulfur** is larger (3p orbitals) and its lone pairs **overlap poorly** with the 2p orbital of the carbonyl carbon. This means **less resonance stabilization**, making the carbonyl more electrophilic and the thioester more reactive. Additionally, RS⁻ is a better leaving group than RO⁻.",
        difficulty: 3,
        tags: ["thioesters", "reactivity", "resonance"],
      },
    ],
  },
  {
    slug: "biochemistry-basics",
    title: "Biochemistry Basics",
    description: "Amino acids, peptide bonds, carbohydrates, lipids",
    estimatedMinutes: 50,
    lessons: [
      {
        slug: "amino-acids-proteins",
        title: "Amino Acids & Protein Structure",
        content: `# Amino Acids & Protein Structure

Biochemistry bridges organic chemistry and biology, and the DAT tests fundamental biomolecule concepts. Amino acids and protein structure are essential topics.

## Amino Acid Structure

All 20 standard amino acids share a common structure:

- **α-carbon** (central carbon) bonded to:
  - **Amino group** (−NH₃⁺ at physiological pH)
  - **Carboxyl group** (−COO⁻ at physiological pH)
  - **Hydrogen** atom
  - **R group** (side chain) — unique to each amino acid

At physiological pH (7.4), amino acids exist as **zwitterions** — the amino group is protonated (NH₃⁺) and the carboxyl group is deprotonated (COO⁻).

> **High-Yield DAT Tip:** All amino acids except **glycine** are chiral (glycine's R group is just H). All naturally occurring amino acids in proteins are the **L-configuration** (S configuration at the α-carbon, except for cysteine which is R due to the sulfur priority).

## Classification of Amino Acids

### By R Group Properties

| Category | Amino Acids | Properties |
|----------|-------------|------------|
| **Nonpolar/Hydrophobic** | Gly, Ala, Val, Leu, Ile, Pro, Phe, Trp, Met | Found in protein interior; hydrophobic interactions |
| **Polar/Uncharged** | Ser, Thr, Cys, Tyr, Asn, Gln | Can form H-bonds; found on protein surface |
| **Positively charged (+)** | Lys, Arg, His | Basic side chains; + charge at pH 7.4 |
| **Negatively charged (−)** | Asp, Glu | Acidic side chains; − charge at pH 7.4 |

### Special Amino Acids

| Amino Acid | Special Feature |
|-----------|----------------|
| **Glycine** | Smallest; no chirality; provides flexibility |
| **Proline** | Cyclic side chain bonded to N; introduces kinks; disrupts α-helices |
| **Cysteine** | Thiol (−SH) group; forms **disulfide bonds** (−S−S−) |
| **Histidine** | Imidazole ring; pKa ≈ 6 (can be protonated/deprotonated near physiological pH) |
| **Tryptophan** | Largest; indole ring; absorbs UV at 280 nm |

> **DAT Tip:** Histidine is the only amino acid with a pKa near physiological pH (~6), making it an excellent biological buffer and catalytic residue in enzyme active sites.

## Acid-Base Properties of Amino Acids

Each amino acid has at least two pKa values:
- **pKa₁** ≈ 2 (−COOH → −COO⁻)
- **pKa₂** ≈ 9-10 (−NH₃⁺ → −NH₂)
- Some have a **pKa_R** for the ionizable side chain

### Isoelectric Point (pI)

The **pI** is the pH at which the amino acid has **no net charge** (zwitterion form is dominant).

For amino acids with no ionizable side chain:
**pI = (pKa₁ + pKa₂) / 2**

For amino acids with an acidic side chain (Asp, Glu):
**pI = (pKa₁ + pKa_R) / 2** (average the two lowest pKa values)

For amino acids with a basic side chain (Lys, Arg, His):
**pI = (pKa₂ + pKa_R) / 2** (average the two highest pKa values)

> **DAT Tip:** At pH below pI, the amino acid has a net positive charge and migrates toward the cathode (−) in electrophoresis. At pH above pI, it has a net negative charge and migrates toward the anode (+).

## The Peptide Bond

The **peptide bond** is an **amide bond** formed between the carboxyl group of one amino acid and the amino group of the next, with loss of water (**condensation/dehydration**).

Properties of the peptide bond:
- **Partial double-bond character** (resonance between C=O and C−N)
- **Planar** — rotation restricted around the C−N bond
- **Trans** configuration preferred (less steric strain)
- The six atoms of the peptide bond unit are coplanar

## Four Levels of Protein Structure

| Level | Description | Bonds/Interactions |
|-------|-------------|-------------------|
| **Primary (1°)** | Amino acid **sequence** | Covalent (peptide bonds) |
| **Secondary (2°)** | Local folding: **α-helix** and **β-sheet** | **Hydrogen bonds** (backbone N−H...O=C) |
| **Tertiary (3°)** | Overall 3D shape of a single polypeptide | H-bonds, hydrophobic, ionic, disulfide, van der Waals |
| **Quaternary (4°)** | Arrangement of multiple polypeptide **subunits** | Same as tertiary (between subunits) |

### Secondary Structure

- **α-helix:** Right-handed coil; H-bonds between C=O of residue i and N−H of residue i+4; **Pro disrupts** helices
- **β-sheet:** Extended strands connected by H-bonds; can be **parallel** or **antiparallel**

### Denaturation

**Denaturation** disrupts secondary, tertiary, and quaternary structure but does NOT break peptide bonds (primary structure is preserved).

Causes: heat, pH extremes, organic solvents, detergents, urea, heavy metals

> **DAT Tip:** Denaturation destroys the 3D shape and biological function of a protein but leaves the amino acid sequence (primary structure) intact.

## Key Terms
- **Zwitterion:** Molecule with both positive and negative charges but net zero charge
- **pI:** pH where the amino acid has no net charge
- **Peptide bond:** Amide bond linking amino acids; planar with partial double-bond character
- **Disulfide bond:** Covalent S−S bond between two cysteine residues
- **Denaturation:** Loss of 3D structure (2°, 3°, 4°) without breaking peptide bonds
`,
        keyTerms: [
          { term: "Zwitterion", definition: "Amino acid form with both NH₃⁺ and COO⁻ groups; net zero charge at pI" },
          { term: "Isoelectric Point (pI)", definition: "pH at which amino acid has no net charge" },
          { term: "Peptide Bond", definition: "Planar amide bond between amino acids; partial double-bond character from resonance" },
          { term: "Alpha Helix", definition: "Right-handed helical secondary structure stabilized by i to i+4 backbone H-bonds" },
          { term: "Beta Sheet", definition: "Extended secondary structure with inter-strand backbone hydrogen bonds" },
          { term: "Denaturation", definition: "Loss of 2°/3°/4° protein structure; primary structure preserved" },
          { term: "Disulfide Bond", definition: "Covalent S−S bond between cysteine residues; stabilizes tertiary structure" },
        ],
      },
      {
        slug: "carbohydrates-lipids",
        title: "Carbohydrates & Lipids",
        content: `# Carbohydrates & Lipids

Carbohydrates and lipids are essential biomolecules tested on the DAT. Understanding their structures, classifications, and key reactions is important for both organic chemistry and biochemistry.

## Carbohydrates

Carbohydrates are polyhydroxy aldehydes or ketones with the general formula **(CH₂O)_n**.

### Classification

| Class | # Carbons | Examples |
|-------|-----------|---------|
| **Triose** | 3 | Glyceraldehyde, dihydroxyacetone |
| **Pentose** | 5 | Ribose, deoxyribose |
| **Hexose** | 6 | Glucose, fructose, galactose |

| Type | Structure | Examples |
|------|-----------|---------|
| **Aldose** | Aldehyde + polyol | Glucose, galactose, ribose |
| **Ketose** | Ketone + polyol | Fructose, dihydroxyacetone |

### D and L Configuration

- Determined by the orientation of the **highest-numbered stereocenter** (farthest from the carbonyl in a Fischer projection)
- **D-sugar:** OH on the right in Fischer projection
- **L-sugar:** OH on the left in Fischer projection
- Most naturally occurring sugars are **D-sugars**

> **DAT Tip:** D and L refer to configuration at the highest-numbered stereocenter, NOT optical rotation. D-glucose happens to be dextrorotatory (+), but this is coincidental.

### Cyclic Forms (Haworth Projections)

In solution, sugars with 5+ carbons cyclize via intramolecular hemiacetal (aldoses) or hemiketal (ketoses) formation:

- **Pyranose:** 6-membered ring (glucose, galactose)
- **Furanose:** 5-membered ring (fructose, ribose)

### Anomers

When a sugar cyclizes, the carbonyl carbon becomes a new **stereocenter** called the **anomeric carbon** (C1 for aldoses):

| Anomer | OH position (Haworth) | Relationship |
|--------|----------------------|-------------|
| **α** | OH **down** (axial in glucose) | Trans to CH₂OH reference group |
| **β** | OH **up** (equatorial in glucose) | Cis to CH₂OH reference group |

### Mutarotation

The interconversion between α and β anomers in solution through the open-chain form. This changes the optical rotation until equilibrium is reached.

### Important Reactions

| Reaction | Description |
|----------|-------------|
| **Oxidation** | Aldehyde → carboxylic acid (aldonic acid); reduces Tollens'/Benedict's |
| **Reduction** | Carbonyl → alcohol (sugar alcohol/alditol, e.g., sorbitol) |
| **Glycosidic bond** | Acetal linkage between anomeric C and OH of another sugar |

### Important Disaccharides

| Disaccharide | Components | Bond |
|-------------|------------|------|
| **Maltose** | Glucose + Glucose | α-1,4 |
| **Lactose** | Galactose + Glucose | β-1,4 |
| **Sucrose** | Glucose + Fructose | α-1,β-2 |

> **DAT Tip:** Sucrose is a **non-reducing sugar** because both anomeric carbons are involved in the glycosidic bond. Maltose and lactose are reducing sugars (one free anomeric carbon).

### Polysaccharides

| Polysaccharide | Monomer | Bond | Function |
|---------------|---------|------|----------|
| **Starch** (amylose/amylopectin) | Glucose | α-1,4 (α-1,6 branches) | Energy storage (plants) |
| **Glycogen** | Glucose | α-1,4 (α-1,6 branches, more branched) | Energy storage (animals) |
| **Cellulose** | Glucose | **β-1,4** | Structural (plant cell walls) |

> **DAT Tip:** Humans can digest starch and glycogen (α linkages) but NOT cellulose (β linkages) because we lack the enzyme cellulase.

## Lipids

Lipids are a diverse group of **hydrophobic** biomolecules. They are not defined by a common structure but by their **solubility in nonpolar solvents**.

### Fatty Acids

Long-chain carboxylic acids (typically 12-20 carbons):

| Type | Structure | Melting Point | Example |
|------|-----------|---------------|---------|
| **Saturated** | No C=C double bonds | Higher (pack tightly) | Palmitic acid (16:0), Stearic acid (18:0) |
| **Unsaturated** | One or more C=C | Lower (kinks disrupt packing) | Oleic acid (18:1), Linoleic acid (18:2) |

- Natural unsaturated fatty acids are almost always **cis (Z)** configuration
- **Trans fats** (artificial) increase cardiovascular disease risk

### Triacylglycerols (Triglycerides)

- Three fatty acids esterified to **glycerol**
- **Fats** (solid) = mostly saturated fatty acids
- **Oils** (liquid) = mostly unsaturated fatty acids
- Energy storage (9 kcal/g vs. 4 kcal/g for carbohydrates and proteins)

### Phospholipids

- Two fatty acids + glycerol + phosphate group + polar head group
- **Amphipathic:** hydrophobic tails + hydrophilic head
- Form **lipid bilayers** (cell membranes)

### Steroids

- Four fused ring structure (three 6-membered + one 5-membered)
- **Cholesterol:** membrane fluidity, precursor to steroid hormones
- Examples: testosterone, estrogen, cortisol, vitamin D

### Terpenes

- Built from **isoprene units** (5-carbon units, C₅H₈)
- Monoterpene = 2 isoprene units (C₁₀), sesquiterpene = 3 (C₁₅), diterpene = 4 (C₂₀)

## Saponification of Fats

Triglyceride + 3 NaOH → Glycerol + 3 Fatty acid salts (soap)

This is a classic application of ester hydrolysis (base-catalyzed, irreversible).

> **DAT Tip:** Soap molecules are amphipathic — the carboxylate head is hydrophilic and the hydrocarbon tail is hydrophobic. They form micelles that solubilize grease in water.

## Key Terms
- **Anomeric carbon:** New stereocenter formed when a sugar cyclizes
- **Glycosidic bond:** Acetal bond linking two sugars
- **Reducing sugar:** Has a free anomeric carbon that can be oxidized
- **Amphipathic:** Has both hydrophobic and hydrophilic regions (e.g., phospholipids, soap)
`,
        keyTerms: [
          { term: "Aldose", definition: "Sugar with an aldehyde functional group (e.g., glucose)" },
          { term: "Ketose", definition: "Sugar with a ketone functional group (e.g., fructose)" },
          { term: "Anomeric Carbon", definition: "New stereocenter formed at C1 (aldoses) upon cyclization; determines α/β" },
          { term: "Glycosidic Bond", definition: "Acetal bond between the anomeric carbon of one sugar and an OH of another" },
          { term: "Reducing Sugar", definition: "Sugar with a free anomeric carbon capable of reducing Tollens'/Benedict's reagent" },
          { term: "Phospholipid", definition: "Amphipathic lipid with two fatty acids, glycerol, phosphate, and polar head group" },
          { term: "Saponification", definition: "Base-catalyzed hydrolysis of triglycerides to glycerol and soap (fatty acid salts)" },
        ],
      },
    ],
    questions: [
      {
        stem: "At physiological pH (7.4), the predominant form of alanine (pKa₁ = 2.3, pKa₂ = 9.7) is:",
        choices: [
          { label: "A", text: "Fully protonated cation (NH₃⁺−CHR−COOH)", isCorrect: false },
          { label: "B", text: "Zwitterion (NH₃⁺−CHR−COO⁻)", isCorrect: true },
          { label: "C", text: "Fully deprotonated anion (NH₂−CHR−COO⁻)", isCorrect: false },
          { label: "D", text: "Uncharged (NH₂−CHR−COOH)", isCorrect: false },
          { label: "E", text: "Doubly protonated dication", isCorrect: false },
        ],
        explanation: "At pH 7.4, the pH is above pKa₁ (2.3), so the carboxyl group is **deprotonated** (COO⁻). The pH is below pKa₂ (9.7), so the amino group remains **protonated** (NH₃⁺). This gives the **zwitterion** form with no net charge. The pI of alanine = (2.3 + 9.7)/2 = 6.0, and at pH 7.4 (above pI), there is a slight net negative charge, but the dominant ionic form is still the zwitterion.",
        difficulty: 1,
        tags: ["amino acids", "zwitterion", "pH"],
      },
      {
        stem: "Which level of protein structure is stabilized primarily by hydrogen bonds between backbone amide N−H and carbonyl C=O groups?",
        choices: [
          { label: "A", text: "Primary structure", isCorrect: false },
          { label: "B", text: "Secondary structure", isCorrect: true },
          { label: "C", text: "Tertiary structure", isCorrect: false },
          { label: "D", text: "Quaternary structure", isCorrect: false },
          { label: "E", text: "All levels equally", isCorrect: false },
        ],
        explanation: "**Secondary structure** (α-helices and β-sheets) is stabilized by **backbone hydrogen bonds** between the amide N−H of one residue and the C=O of another. Primary structure involves covalent peptide bonds. Tertiary structure involves side-chain interactions (hydrophobic, ionic, disulfide bonds, H-bonds between side chains). Quaternary structure involves interactions between subunits.",
        difficulty: 1,
        tags: ["protein structure", "secondary structure"],
      },
      {
        stem: "Sucrose is classified as a non-reducing sugar because:",
        choices: [
          { label: "A", text: "It contains no hydroxyl groups", isCorrect: false },
          { label: "B", text: "It is a monosaccharide", isCorrect: false },
          { label: "C", text: "Both anomeric carbons are involved in the glycosidic bond", isCorrect: true },
          { label: "D", text: "It cannot undergo mutarotation", isCorrect: false },
          { label: "E", text: "It is composed of two ketoses", isCorrect: false },
        ],
        explanation: "A **reducing sugar** needs a **free anomeric carbon** that can open to expose the aldehyde (or α-hydroxy ketone) for oxidation. In sucrose, the glycosidic bond connects the anomeric carbon of **glucose (C1)** to the anomeric carbon of **fructose (C2)**, so neither anomeric carbon is free. Maltose and lactose are reducing sugars because they have one free anomeric carbon.",
        difficulty: 2,
        tags: ["carbohydrates", "reducing sugars"],
      },
      {
        stem: "Which amino acid can form disulfide bonds to stabilize protein tertiary structure?",
        choices: [
          { label: "A", text: "Methionine", isCorrect: false },
          { label: "B", text: "Serine", isCorrect: false },
          { label: "C", text: "Cysteine", isCorrect: true },
          { label: "D", text: "Proline", isCorrect: false },
          { label: "E", text: "Tyrosine", isCorrect: false },
        ],
        explanation: "**Cysteine** has a thiol (−SH) side chain. Two cysteine residues can be oxidized to form a **disulfide bond** (−S−S−), a covalent cross-link that stabilizes tertiary (and sometimes quaternary) structure. Methionine also contains sulfur but as a thioether (−S−CH₃), which cannot form disulfide bonds.",
        difficulty: 1,
        tags: ["amino acids", "disulfide bonds", "cysteine"],
      },
      {
        stem: "Humans cannot digest cellulose because:",
        choices: [
          { label: "A", text: "Cellulose contains fructose instead of glucose", isCorrect: false },
          { label: "B", text: "Cellulose has α-1,4 glycosidic bonds that are too strong", isCorrect: false },
          { label: "C", text: "Humans lack the enzyme to hydrolyze β-1,4 glycosidic bonds", isCorrect: true },
          { label: "D", text: "Cellulose is a lipid, not a carbohydrate", isCorrect: false },
          { label: "E", text: "Cellulose contains D-galactose subunits", isCorrect: false },
        ],
        explanation: "Cellulose is a polymer of glucose linked by **β-1,4 glycosidic bonds**. Humans lack the enzyme **cellulase** needed to hydrolyze these β linkages. We can digest starch and glycogen because they have **α-1,4** (and α-1,6) linkages, which are hydrolyzed by amylase and other enzymes. Cellulose is composed of glucose (not fructose or galactose).",
        difficulty: 1,
        tags: ["polysaccharides", "cellulose", "digestion"],
      },
      {
        stem: "The isoelectric point (pI) of aspartic acid (pKa₁ = 2.1, pKa₂ = 9.8, pKa_R = 3.9) is approximately:",
        choices: [
          { label: "A", text: "2.1", isCorrect: false },
          { label: "B", text: "3.0", isCorrect: true },
          { label: "C", text: "5.9", isCorrect: false },
          { label: "D", text: "6.9", isCorrect: false },
          { label: "E", text: "9.8", isCorrect: false },
        ],
        explanation: "Aspartic acid has an **acidic side chain** (extra COOH). For amino acids with acidic side chains, pI = average of the **two lowest pKa values**: pI = (pKa₁ + pKa_R)/2 = (2.1 + 3.9)/2 = **3.0**. For basic amino acids (Lys, Arg, His), pI = average of the two highest pKa values.",
        difficulty: 2,
        tags: ["isoelectric point", "amino acids"],
      },
      {
        stem: "Which amino acid disrupts α-helices due to its cyclic side chain?",
        choices: [
          { label: "A", text: "Glycine", isCorrect: false },
          { label: "B", text: "Alanine", isCorrect: false },
          { label: "C", text: "Proline", isCorrect: true },
          { label: "D", text: "Leucine", isCorrect: false },
          { label: "E", text: "Tryptophan", isCorrect: false },
        ],
        explanation: "**Proline** has a unique cyclic structure where the side chain is bonded to both the α-carbon and the nitrogen atom, forming a rigid pyrrolidine ring. This restricts the backbone φ angle and introduces a **kink** that is incompatible with the regular hydrogen bonding pattern of an α-helix. Glycine is a helix breaker due to its flexibility, but proline is the classic answer for its rigid cyclic structure.",
        difficulty: 1,
        tags: ["amino acids", "protein structure", "proline"],
      },
      {
        stem: "D-glucose and D-galactose differ only in the configuration at C4. This makes them:",
        choices: [
          { label: "A", text: "Enantiomers", isCorrect: false },
          { label: "B", text: "Epimers", isCorrect: true },
          { label: "C", text: "Anomers", isCorrect: false },
          { label: "D", text: "Constitutional isomers", isCorrect: false },
          { label: "E", text: "Identical molecules", isCorrect: false },
        ],
        explanation: "**Epimers** are diastereomers that differ at **exactly one** stereocenter. D-glucose and D-galactose differ only at **C4**, making them C4 epimers. Anomers differ at the anomeric carbon (C1 for aldoses). Enantiomers differ at every stereocenter. Glucose and galactose have the same connectivity (not constitutional isomers).",
        difficulty: 2,
        tags: ["carbohydrates", "epimers"],
      },
      {
        stem: "Triglycerides store more energy per gram than carbohydrates primarily because:",
        choices: [
          { label: "A", text: "Triglycerides contain more water", isCorrect: false },
          { label: "B", text: "Triglycerides are more highly reduced (more C−H bonds)", isCorrect: true },
          { label: "C", text: "Triglycerides are smaller molecules", isCorrect: false },
          { label: "D", text: "Triglycerides contain nitrogen", isCorrect: false },
          { label: "E", text: "Triglycerides are more soluble in water", isCorrect: false },
        ],
        explanation: "Fatty acids in triglycerides are **highly reduced** — they contain many C−H bonds and few C−O bonds. Oxidation of these C−H bonds releases large amounts of energy. Carbohydrates are more oxidized (many C−OH groups), so they yield less energy per gram. Fats yield ~9 kcal/g versus ~4 kcal/g for carbohydrates. Triglycerides are also hydrophobic (store without water), further increasing energy density.",
        difficulty: 2,
        tags: ["lipids", "energy storage"],
      },
      {
        stem: "What type of bond links amino acids together in a polypeptide chain?",
        choices: [
          { label: "A", text: "Ester bond", isCorrect: false },
          { label: "B", text: "Glycosidic bond", isCorrect: false },
          { label: "C", text: "Peptide bond (amide bond)", isCorrect: true },
          { label: "D", text: "Disulfide bond", isCorrect: false },
          { label: "E", text: "Phosphodiester bond", isCorrect: false },
        ],
        explanation: "Amino acids are linked by **peptide bonds**, which are **amide bonds** formed between the carboxyl group (−COOH) of one amino acid and the amino group (−NH₂) of the next, with loss of water. The peptide bond has partial double-bond character due to resonance, making it planar and restricting rotation. Disulfide bonds (Cys−Cys) stabilize tertiary structure but don't form the backbone.",
        difficulty: 1,
        tags: ["peptide bond", "protein structure"],
      },
    ],
  },
];

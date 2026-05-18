export function Translation() {
  return (
    <svg viewBox="0 0 760 420" className="w-full max-w-3xl" role="img" aria-label="Ribosome translation with A, P, E sites and tRNA-mRNA codon-anticodon pairing">
      <text x="380" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1F2937">Translation: Ribosome reads mRNA codons → polypeptide</text>

      {/* Large + small subunit */}
      <path d="M 140 130 Q 200 80 380 80 Q 560 80 620 130 Q 660 180 600 220 L 160 220 Q 100 180 140 130 Z" fill="#A78BFA" stroke="#4C1D95" strokeWidth="2" opacity="0.9" />
      <text x="380" y="125" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">60S large subunit</text>

      <path d="M 180 240 Q 280 290 380 290 Q 480 290 580 240 L 180 240 Z" fill="#7C3AED" stroke="#4C1D95" strokeWidth="2" />
      <text x="380" y="270" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">40S small subunit</text>
      <text x="380" y="285" textAnchor="middle" fontSize="9" fill="white" fontStyle="italic">(prokaryotic: 30S + 50S = 70S; eukaryotic: 40S + 60S = 80S)</text>

      {/* A, P, E site labels */}
      <text x="270" y="170" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">E</text>
      <text x="380" y="170" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">P</text>
      <text x="490" y="170" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">A</text>
      <text x="270" y="190" textAnchor="middle" fontSize="8" fill="white" fontStyle="italic">Exit</text>
      <text x="380" y="190" textAnchor="middle" fontSize="8" fill="white" fontStyle="italic">Peptidyl</text>
      <text x="490" y="190" textAnchor="middle" fontSize="8" fill="white" fontStyle="italic">Aminoacyl</text>

      {/* mRNA strand */}
      <path d="M 100 330 L 660 330" stroke="#DC2626" strokeWidth="6" />
      <text x="80" y="335" fontSize="11" fontWeight="700" fill="#7F1D1D">5'</text>
      <text x="680" y="335" fontSize="11" fontWeight="700" fill="#7F1D1D">3'</text>
      <text x="380" y="368" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7F1D1D">mRNA (read 5' → 3', codon by codon)</text>

      {/* mRNA codons aligned under sites */}
      {[
        { x: 270, codon: "AUG", site: "E" },
        { x: 380, codon: "GCU", site: "P" },
        { x: 490, codon: "UUC", site: "A" },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x - 25} y={318} width="50" height="14" fill="#FEE2E2" stroke="#7F1D1D" strokeWidth="1" />
          <text x={c.x} y={329} textAnchor="middle" fontSize="11" fontWeight="700" fill="#7F1D1D">{c.codon}</text>
        </g>
      ))}

      {/* tRNAs in E (exiting), P (with growing peptide), A (incoming) */}
      {/* E-site tRNA */}
      <g transform="translate(270, 230)">
        <path d="M 0 0 L -8 -20 L 0 -28 L 8 -20 Z" fill="#FCD34D" stroke="#92400E" strokeWidth="1.5" />
        <text x="0" y="60" textAnchor="middle" fontSize="9" fill="#92400E">UAC</text>
      </g>

      {/* P-site tRNA (with peptide chain) */}
      <g transform="translate(380, 230)">
        <path d="M 0 0 L -8 -20 L 0 -28 L 8 -20 Z" fill="#FCD34D" stroke="#92400E" strokeWidth="1.5" />
        <text x="0" y="60" textAnchor="middle" fontSize="9" fill="#92400E">CGA</text>
        {/* Peptide chain */}
        <circle cx="-15" cy="-40" r="8" fill="#10B981" /><text x="-15" y="-37" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">M</text>
        <circle cx="-35" cy="-55" r="8" fill="#10B981" /><text x="-35" y="-52" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">A</text>
        <circle cx="-55" cy="-70" r="8" fill="#10B981" /><text x="-55" y="-67" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">L</text>
        <line x1="0" y1="-28" x2="-15" y2="-40" stroke="#065F46" strokeWidth="1.5" />
        <line x1="-15" y1="-40" x2="-35" y2="-55" stroke="#065F46" strokeWidth="1.5" />
        <line x1="-35" y1="-55" x2="-55" y2="-70" stroke="#065F46" strokeWidth="1.5" />
      </g>

      {/* A-site tRNA (incoming with new amino acid) */}
      <g transform="translate(490, 230)">
        <path d="M 0 0 L -8 -20 L 0 -28 L 8 -20 Z" fill="#FCD34D" stroke="#92400E" strokeWidth="1.5" />
        <text x="0" y="60" textAnchor="middle" fontSize="9" fill="#92400E">AAG</text>
        <circle cx="0" cy="-44" r="8" fill="#3B82F6" /><text x="0" y="-41" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">F</text>
        <text x="0" y="-58" textAnchor="middle" fontSize="9" fill="#1E40AF">(Phe)</text>
        <line x1="0" y1="-28" x2="0" y2="-36" stroke="#1E40AF" strokeWidth="1.5" />
      </g>

      {/* Site labels (codon-anticodon pairing call-out) */}
      <text x="60" y="280" fontSize="11" fontWeight="700" fill="#475569">codon</text>
      <text x="60" y="294" fontSize="11" fontWeight="700" fill="#475569">↕ pairs</text>
      <text x="60" y="308" fontSize="11" fontWeight="700" fill="#475569">anticodon</text>

      {/* Direction arrow */}
      <text x="700" y="290" textAnchor="end" fontSize="11" fontWeight="700" fill="#1F2937">ribosome →</text>

      {/* Mnemonic banner */}
      <rect x="120" y="385" width="520" height="26" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" rx="6" />
      <text x="380" y="402" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4C1D95">
        START codon: AUG (Met) · STOP codons: UAA, UAG, UGA · "U Are Annoying / U Are Gone / U Go Away"
      </text>
    </svg>
  );
}

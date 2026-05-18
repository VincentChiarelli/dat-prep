export function MrnaProcessing() {
  return (
    <svg viewBox="0 0 760 380" className="w-full max-w-3xl" role="img" aria-label="mRNA processing: 5' capping, splicing, and 3' polyadenylation">
      <defs>
        <marker id="mpArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
        </marker>
      </defs>

      <text x="380" y="28" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1F2937">Eukaryotic mRNA Processing (nucleus → cytoplasm)</text>

      {/* Stage 1: pre-mRNA with introns/exons */}
      <text x="20" y="70" fontSize="11" fontWeight="700" fill="#1F2937">1. Pre-mRNA (primary transcript)</text>
      <g transform="translate(20, 80)">
        <rect x="0" y="0" width="80" height="22" fill="#3B82F6" /><text x="40" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">exon 1</text>
        <rect x="80" y="0" width="50" height="22" fill="#94A3B8" /><text x="105" y="15" textAnchor="middle" fontSize="10" fontStyle="italic" fill="white">intron</text>
        <rect x="130" y="0" width="100" height="22" fill="#3B82F6" /><text x="180" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">exon 2</text>
        <rect x="230" y="0" width="60" height="22" fill="#94A3B8" /><text x="260" y="15" textAnchor="middle" fontSize="10" fontStyle="italic" fill="white">intron</text>
        <rect x="290" y="0" width="80" height="22" fill="#3B82F6" /><text x="330" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">exon 3</text>
        <rect x="370" y="0" width="50" height="22" fill="#94A3B8" /><text x="395" y="15" textAnchor="middle" fontSize="10" fontStyle="italic" fill="white">intron</text>
        <rect x="420" y="0" width="80" height="22" fill="#3B82F6" /><text x="460" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">exon 4</text>
      </g>
      <text x="20" y="125" fontSize="9" fill="#475569" fontStyle="italic">5'</text>
      <text x="525" y="98" fontSize="9" fill="#475569" fontStyle="italic">3'</text>

      <line x1="380" y1="130" x2="380" y2="160" stroke="#1F2937" strokeWidth="2" markerEnd="url(#mpArr)" />

      {/* Stage 2: 5' cap + 3' poly-A added */}
      <text x="20" y="175" fontSize="11" fontWeight="700" fill="#1F2937">2. 5' cap (m7G) and 3' poly-A tail added</text>
      <g transform="translate(20, 185)">
        <circle cx="-10" cy="11" r="14" fill="#F59E0B" stroke="#92400E" strokeWidth="1.5" />
        <text x="-10" y="14" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">m7G</text>
        <line x1="4" y1="11" x2="0" y2="11" stroke="#475569" strokeWidth="2" />
        <rect x="0" y="0" width="80" height="22" fill="#3B82F6" />
        <rect x="80" y="0" width="50" height="22" fill="#94A3B8" />
        <rect x="130" y="0" width="100" height="22" fill="#3B82F6" />
        <rect x="230" y="0" width="60" height="22" fill="#94A3B8" />
        <rect x="290" y="0" width="80" height="22" fill="#3B82F6" />
        <rect x="370" y="0" width="50" height="22" fill="#94A3B8" />
        <rect x="420" y="0" width="80" height="22" fill="#3B82F6" />
        <line x1="500" y1="11" x2="520" y2="11" stroke="#475569" strokeWidth="2" />
        <text x="540" y="15" fontSize="11" fontWeight="700" fill="#7F1D1D">AAAAA...</text>
        <text x="585" y="32" fontSize="9" fill="#7F1D1D" fontStyle="italic">~200 As</text>
      </g>

      <line x1="380" y1="230" x2="380" y2="260" stroke="#1F2937" strokeWidth="2" markerEnd="url(#mpArr)" />
      <text x="395" y="252" fontSize="10" fill="#1F2937" fontStyle="italic">spliceosome (snRNPs) excises introns</text>

      {/* Stage 3: mature mRNA */}
      <text x="20" y="275" fontSize="11" fontWeight="700" fill="#065F46">3. Mature mRNA — exits nucleus through nuclear pore</text>
      <g transform="translate(20, 285)">
        <circle cx="-10" cy="11" r="14" fill="#F59E0B" stroke="#92400E" strokeWidth="1.5" />
        <text x="-10" y="14" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">m7G</text>
        <line x1="4" y1="11" x2="0" y2="11" stroke="#475569" strokeWidth="2" />
        <rect x="0" y="0" width="80" height="22" fill="#10B981" /><text x="40" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">exon 1</text>
        <rect x="80" y="0" width="100" height="22" fill="#10B981" /><text x="130" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">exon 2</text>
        <rect x="180" y="0" width="80" height="22" fill="#10B981" /><text x="220" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">exon 3</text>
        <rect x="260" y="0" width="80" height="22" fill="#10B981" /><text x="300" y="15" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">exon 4</text>
        <line x1="340" y1="11" x2="360" y2="11" stroke="#475569" strokeWidth="2" />
        <text x="380" y="15" fontSize="11" fontWeight="700" fill="#7F1D1D">AAAAA...</text>
      </g>

      {/* Mnemonic */}
      <rect x="160" y="335" width="440" height="32" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" rx="6" />
      <text x="380" y="350" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400E">
        "INtrons stay IN the nucleus · EXons are EXpressed"
      </text>
      <text x="380" y="362" textAnchor="middle" fontSize="9" fill="#92400E" fontStyle="italic">
        Alternative splicing lets one gene produce multiple protein variants
      </text>
    </svg>
  );
}

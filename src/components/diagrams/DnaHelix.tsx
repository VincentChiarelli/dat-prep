export function DnaHelix() {
  // Render a ladder-style DNA with base pairs labeled
  const pairs = [
    { top: "A", bot: "T", hbonds: 2 },
    { top: "G", bot: "C", hbonds: 3 },
    { top: "T", bot: "A", hbonds: 2 },
    { top: "C", bot: "G", hbonds: 3 },
    { top: "A", bot: "T", hbonds: 2 },
    { top: "G", bot: "C", hbonds: 3 },
    { top: "T", bot: "A", hbonds: 2 },
    { top: "C", bot: "G", hbonds: 3 },
  ];

  const colorOf = (b: string) => {
    if (b === "A") return "#EF4444";
    if (b === "T") return "#3B82F6";
    if (b === "G") return "#10B981";
    return "#F59E0B"; // C
  };

  return (
    <svg viewBox="0 0 720 320" className="w-full max-w-3xl" role="img" aria-label="DNA double helix with base pairing">
      {/* Antiparallel strand labels */}
      <text x="20" y="40" fontSize="11" fontWeight="700" fill="#1F2937">5'</text>
      <text x="700" y="40" fontSize="11" fontWeight="700" fill="#1F2937" textAnchor="end">3'</text>
      <text x="20" y="240" fontSize="11" fontWeight="700" fill="#1F2937">3'</text>
      <text x="700" y="240" fontSize="11" fontWeight="700" fill="#1F2937" textAnchor="end">5'</text>

      {/* Backbones */}
      <path d="M 40 60 L 680 60" stroke="#475569" strokeWidth="6" />
      <path d="M 40 220 L 680 220" stroke="#475569" strokeWidth="6" />
      <text x="40" y="48" fontSize="10" fill="#475569" fontStyle="italic">sugar-phosphate backbone</text>
      <text x="40" y="270" fontSize="10" fill="#475569" fontStyle="italic">sugar-phosphate backbone (antiparallel)</text>

      {/* Base pairs */}
      {pairs.map((p, i) => {
        const x = 80 + i * 75;
        return (
          <g key={i}>
            {/* Top base */}
            <rect x={x - 14} y={68} width="28" height="28" fill={colorOf(p.top)} rx="4" />
            <text x={x} y={88} textAnchor="middle" fontSize="14" fontWeight="700" fill="white">{p.top}</text>
            {/* H-bonds */}
            {Array.from({ length: p.hbonds }, (_, k) => (
              <line
                key={k}
                x1={x - 6 + k * 6}
                y1={100}
                x2={x - 6 + k * 6}
                y2={180}
                stroke="#94A3B8"
                strokeWidth="1.5"
                strokeDasharray="3 2"
              />
            ))}
            {/* Bottom base */}
            <rect x={x - 14} y={184} width="28" height="28" fill={colorOf(p.bot)} rx="4" />
            <text x={x} y={204} textAnchor="middle" fontSize="14" fontWeight="700" fill="white">{p.bot}</text>
            {/* H-bond count label */}
            <text x={x} y={144} textAnchor="middle" fontSize="9" fill="#64748B" fontStyle="italic">{p.hbonds}H</text>
          </g>
        );
      })}

      {/* Legend */}
      <g transform="translate(40, 290)">
        <rect x="0" y="-12" width="18" height="14" fill="#EF4444" rx="2" /><text x="22" y="0" fontSize="11" fill="#1F2937">A (adenine)</text>
        <rect x="115" y="-12" width="18" height="14" fill="#3B82F6" rx="2" /><text x="137" y="0" fontSize="11" fill="#1F2937">T (thymine)</text>
        <rect x="230" y="-12" width="18" height="14" fill="#10B981" rx="2" /><text x="252" y="-0" fontSize="11" fill="#1F2937">G (guanine)</text>
        <rect x="345" y="-12" width="18" height="14" fill="#F59E0B" rx="2" /><text x="367" y="0" fontSize="11" fill="#1F2937">C (cytosine)</text>
        <text x="475" y="0" fontSize="11" fontWeight="700" fill="#475569">A-T = 2 H-bonds &nbsp;·&nbsp; G-C = 3 H-bonds</text>
      </g>
    </svg>
  );
}

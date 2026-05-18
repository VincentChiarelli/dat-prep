export function CytoskeletonSizes() {
  return (
    <svg viewBox="0 0 720 280" className="w-full max-w-2xl" role="img" aria-label="Cytoskeleton filament sizes: microfilaments, intermediate filaments, microtubules">
      {/* Headers */}
      <text x="120" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937">Microfilament</text>
      <text x="120" y="44" textAnchor="middle" fontSize="11" fill="#6B7280">actin · 7 nm</text>

      <text x="360" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937">Intermediate filament</text>
      <text x="360" y="44" textAnchor="middle" fontSize="11" fill="#6B7280">keratin, vimentin · 10 nm</text>

      <text x="600" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937">Microtubule</text>
      <text x="600" y="44" textAnchor="middle" fontSize="11" fill="#6B7280">α/β-tubulin · 25 nm</text>

      {/* Microfilament - twisted strand */}
      <g transform="translate(120, 110)">
        <path d="M -30 -40 Q -25 -20 -30 0 Q -25 20 -30 40" stroke="#DC2626" strokeWidth="3" fill="none" />
        <path d="M -10 -40 Q -15 -20 -10 0 Q -15 20 -10 40" stroke="#B91C1C" strokeWidth="3" fill="none" />
        {/* Scale dot for 7 nm */}
        <circle cx="35" cy="0" r="3.5" fill="#DC2626" />
        <text x="50" y="4" fontSize="10" fill="#7F1D1D" fontWeight="600">7 nm</text>
      </g>
      <text x="120" y="190" textAnchor="middle" fontSize="10" fill="#7F1D1D">muscle contraction · cleavage furrow · cell motility</text>

      {/* Intermediate filament - ropelike braid */}
      <g transform="translate(360, 110)">
        <path d="M -30 -40 L -30 40 M -20 -40 L -20 40 M -10 -40 L -10 40 M 0 -40 L 0 40" stroke="#10B981" strokeWidth="2" />
        <path d="M -32 -30 L 2 -30 M -32 -15 L 2 -15 M -32 0 L 2 0 M -32 15 L 2 15 M -32 30 L 2 30" stroke="#059669" strokeWidth="1" />
        {/* Scale */}
        <line x1="-32" y1="50" x2="2" y2="50" stroke="#065F46" strokeWidth="1.5" />
        <line x1="-32" y1="46" x2="-32" y2="54" stroke="#065F46" strokeWidth="1.5" />
        <line x1="2" y1="46" x2="2" y2="54" stroke="#065F46" strokeWidth="1.5" />
        <text x="-15" y="65" textAnchor="middle" fontSize="10" fill="#065F46" fontWeight="600">10 nm</text>
      </g>
      <text x="360" y="190" textAnchor="middle" fontSize="10" fill="#065F46">structural support · nuclear lamina · desmosomes</text>

      {/* Microtubule - hollow tube */}
      <g transform="translate(600, 110)">
        <rect x="-40" y="-50" width="80" height="100" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2" rx="6" />
        {/* Protofilaments */}
        {[-30, -18, -6, 6, 18, 30].map((x) => (
          <line key={x} x1={x} y1="-50" x2={x} y2="50" stroke="#1E40AF" strokeWidth="1" opacity="0.6" />
        ))}
        {/* Tubulin dimers (round) */}
        {[-25, -13, -1, 11, 23].map((x, i) =>
          [-40, -20, 0, 20, 40].map((y, j) => (
            <circle key={`${i}-${j}`} cx={x} cy={y} r="3" fill={(i + j) % 2 === 0 ? "#3B82F6" : "#1D4ED8"} />
          ))
        )}
        {/* Scale */}
        <line x1="-40" y1="60" x2="40" y2="60" stroke="#1E3A8A" strokeWidth="1.5" />
        <line x1="-40" y1="56" x2="-40" y2="64" stroke="#1E3A8A" strokeWidth="1.5" />
        <line x1="40" y1="56" x2="40" y2="64" stroke="#1E3A8A" strokeWidth="1.5" />
        <text x="0" y="75" textAnchor="middle" fontSize="10" fill="#1E3A8A" fontWeight="600">25 nm</text>
      </g>
      <text x="600" y="200" textAnchor="middle" fontSize="10" fill="#1E3A8A">chromosome movement · cilia/flagella · spindle</text>

      {/* Memory aid bar at bottom */}
      <rect x="60" y="225" width="600" height="38" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" rx="8" />
      <text x="360" y="247" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400E">
        High-Yield: 7 &lt; 10 &lt; 25 nm — smaller string, medium rope, biggest pipe
      </text>
      <text x="360" y="258" textAnchor="middle" fontSize="9" fill="#92400E" fontStyle="italic">
        microfilaments are solid · microtubules are hollow
      </text>
    </svg>
  );
}

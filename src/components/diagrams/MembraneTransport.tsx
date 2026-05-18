export function MembraneTransport() {
  return (
    <svg viewBox="0 0 760 400" className="w-full max-w-3xl" role="img" aria-label="Membrane transport: simple diffusion, facilitated diffusion, primary active transport">
      <defs>
        <marker id="trArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
        </marker>
        <marker id="trArrR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
        </marker>
      </defs>

      {/* Top region: extracellular */}
      <text x="20" y="22" fontSize="11" fontWeight="700" fill="#1E3A8A">EXTRACELLULAR</text>
      {/* Bottom region: cytoplasm */}
      <text x="20" y="385" fontSize="11" fontWeight="700" fill="#92400E">CYTOPLASM</text>

      {/* Bilayer (top heads at y=70, bottom heads at y=220) */}
      {Array.from({ length: 38 }, (_, i) => 25 + i * 19).map((x) => (
        <g key={x}>
          <circle cx={x} cy="70" r="6" fill="#FBBF24" stroke="#92400E" strokeWidth="0.5" />
          <path d={`M ${x - 2} 76 Q ${x - 3} 95 ${x - 1} 115 Q ${x - 3} 135 ${x - 1} 145`} stroke="#92400E" strokeWidth="1.2" fill="none" />
          <path d={`M ${x + 2} 76 Q ${x + 3} 95 ${x + 1} 115 Q ${x + 3} 135 ${x + 1} 145`} stroke="#92400E" strokeWidth="1.2" fill="none" />
          <path d={`M ${x - 2} 215 Q ${x - 3} 195 ${x - 1} 175 Q ${x - 3} 155 ${x - 1} 145`} stroke="#92400E" strokeWidth="1.2" fill="none" />
          <path d={`M ${x + 2} 215 Q ${x + 3} 195 ${x + 1} 175 Q ${x + 3} 155 ${x + 1} 145`} stroke="#92400E" strokeWidth="1.2" fill="none" />
          <circle cx={x} cy="220" r="6" fill="#FBBF24" stroke="#92400E" strokeWidth="0.5" />
        </g>
      ))}

      {/* 1. Simple diffusion (O2/CO2) */}
      <g>
        <text x="120" y="46" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1E40AF">Simple diffusion</text>
        <text x="120" y="60" textAnchor="middle" fontSize="9" fill="#1E40AF" fontStyle="italic">no protein · no ATP</text>
        <circle cx="100" cy="40" r="6" fill="#3B82F6" />
        <circle cx="135" cy="35" r="6" fill="#3B82F6" />
        <circle cx="115" cy="55" r="6" fill="#3B82F6" />
        {/* Arrow through */}
        <line x1="120" y1="60" x2="120" y2="240" stroke="#1F2937" strokeWidth="2" markerEnd="url(#trArr)" strokeDasharray="3 3" />
        <circle cx="120" cy="260" r="6" fill="#3B82F6" opacity="0.5" />
        <text x="120" y="287" textAnchor="middle" fontSize="9" fill="#1E40AF">O₂, CO₂, steroids</text>
      </g>

      {/* 2. Facilitated diffusion via channel */}
      <g>
        <text x="300" y="46" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5B21B6">Facilitated diffusion</text>
        <text x="300" y="60" textAnchor="middle" fontSize="9" fill="#5B21B6" fontStyle="italic">channel/carrier · no ATP</text>
        <path d="M 285 70 Q 280 90 280 145 Q 280 200 285 220 L 315 220 Q 320 200 320 145 Q 320 90 315 70 Z" fill="#A78BFA" stroke="#4C1D95" strokeWidth="1.5" />
        <ellipse cx="300" cy="145" rx="6" ry="40" fill="#EFF6FF" stroke="#4C1D95" strokeWidth="1" />
        {/* Ions flowing through */}
        <circle cx="300" cy="40" r="5" fill="#EF4444" />
        <text x="300" y="42" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">Na⁺</text>
        <line x1="300" y1="48" x2="300" y2="240" stroke="#DC2626" strokeWidth="2" markerEnd="url(#trArrR)" />
        <circle cx="300" cy="260" r="5" fill="#EF4444" opacity="0.6" />
        <text x="300" y="262" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">Na⁺</text>
        <text x="300" y="287" textAnchor="middle" fontSize="9" fill="#5B21B6">glucose · ions</text>
      </g>

      {/* 3. Primary active transport (Na/K pump) */}
      <g>
        <text x="500" y="46" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7F1D1D">Primary active transport</text>
        <text x="500" y="60" textAnchor="middle" fontSize="9" fill="#7F1D1D" fontStyle="italic">requires ATP · against gradient</text>
        <path d="M 475 70 Q 465 95 465 145 Q 465 195 475 220 L 525 220 Q 535 195 535 145 Q 535 95 525 70 Z" fill="#F87171" stroke="#7F1D1D" strokeWidth="1.5" />

        {/* ATP indicator */}
        <circle cx="500" cy="145" r="13" fill="#FCD34D" stroke="#92400E" strokeWidth="1" />
        <text x="500" y="148" textAnchor="middle" fontSize="9" fontWeight="700" fill="#92400E">ATP</text>

        {/* 3 Na+ going out (from cytoplasm to ECF) */}
        <circle cx="490" cy="35" r="5" fill="#EF4444" />
        <text x="490" y="37" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">Na⁺</text>
        <circle cx="510" cy="35" r="5" fill="#EF4444" />
        <text x="510" y="37" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">Na⁺</text>
        <circle cx="500" cy="20" r="5" fill="#EF4444" />
        <text x="500" y="22" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">Na⁺</text>
        <text x="500" y="290" textAnchor="middle" fontSize="9" fill="#7F1D1D" fontWeight="700">3 Na⁺ out · 2 K⁺ in</text>

        {/* 2 K+ going in */}
        <circle cx="488" cy="270" r="5" fill="#10B981" />
        <text x="488" y="272" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">K⁺</text>
        <circle cx="514" cy="270" r="5" fill="#10B981" />
        <text x="514" y="272" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">K⁺</text>

        {/* Arrows */}
        <line x1="488" y1="60" x2="488" y2="40" stroke="#DC2626" strokeWidth="2" markerEnd="url(#trArrR)" />
        <line x1="512" y1="60" x2="512" y2="40" stroke="#DC2626" strokeWidth="2" markerEnd="url(#trArrR)" />
        <line x1="488" y1="240" x2="488" y2="265" stroke="#059669" strokeWidth="2" markerEnd="url(#trArr)" />
        <line x1="512" y1="240" x2="512" y2="265" stroke="#059669" strokeWidth="2" markerEnd="url(#trArr)" />
      </g>

      {/* 4. Vesicular transport */}
      <g>
        <text x="685" y="46" textAnchor="middle" fontSize="11" fontWeight="700" fill="#065F46">Endo / Exocytosis</text>
        <text x="685" y="60" textAnchor="middle" fontSize="9" fill="#065F46" fontStyle="italic">bulk transport</text>
        {/* Vesicle inside */}
        <circle cx="660" cy="260" r="18" fill="none" stroke="#065F46" strokeWidth="1.5" />
        <circle cx="660" cy="260" r="3" fill="#3B82F6" />
        <circle cx="668" cy="265" r="3" fill="#3B82F6" />
        <circle cx="653" cy="263" r="3" fill="#3B82F6" />

        {/* Pinching membrane (endocytosis) */}
        <path d="M 690 70 Q 700 90 715 100 Q 730 110 730 130" stroke="#92400E" strokeWidth="2" fill="none" />
        <circle cx="720" cy="115" r="3" fill="#3B82F6" />
        <text x="685" y="290" textAnchor="middle" fontSize="9" fill="#065F46">phagocytosis · pinocytosis</text>
      </g>

      {/* Concentration gradient bar */}
      <g transform="translate(20, 320)">
        <text x="0" y="0" fontSize="10" fontWeight="700" fill="#1F2937">concentration gradient</text>
        <rect x="0" y="8" width="720" height="14" fill="url(#gradBar)" stroke="#1F2937" strokeWidth="0.5" />
        <defs>
          <linearGradient id="gradBar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#DBEAFE" />
          </linearGradient>
        </defs>
        <text x="6" y="34" fontSize="9" fill="#1E3A8A">HIGH</text>
        <text x="690" y="34" fontSize="9" fill="#1E3A8A">LOW</text>
      </g>
    </svg>
  );
}

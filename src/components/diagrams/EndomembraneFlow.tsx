export function EndomembraneFlow() {
  return (
    <svg viewBox="0 0 760 380" className="w-full max-w-3xl" role="img" aria-label="Endomembrane system: nucleus → ER → Golgi → secretory vesicle → plasma membrane">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
        </marker>
      </defs>

      {/* Step 1: Nucleus */}
      <g>
        <circle cx="80" cy="180" r="55" fill="#A78BFA" stroke="#4C1D95" strokeWidth="2" />
        <circle cx="80" cy="180" r="55" fill="none" stroke="#4C1D95" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="74" cy="174" r="14" fill="#7C3AED" />
        <text x="80" y="178" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">nucleus</text>
        <text x="80" y="190" textAnchor="middle" fontSize="8" fill="white">(mRNA)</text>
        <text x="80" y="265" textAnchor="middle" fontSize="10" fontWeight="600" fill="#4C1D95">1. mRNA exits</text>
      </g>

      {/* Arrow 1 → ER */}
      <line x1="140" y1="180" x2="195" y2="180" stroke="#1F2937" strokeWidth="2" markerEnd="url(#arr)" />

      {/* Step 2: Rough ER */}
      <g>
        <path
          d="M 200 130 Q 230 125 260 135 Q 290 130 295 150 Q 290 165 260 165 Q 230 170 200 165 Z"
          fill="#FCA5A5"
          stroke="#7F1D1D"
          strokeWidth="2"
        />
        <path
          d="M 200 175 Q 230 170 260 180 Q 290 175 295 195 Q 290 210 260 210 Q 230 215 200 210 Z"
          fill="#FCA5A5"
          stroke="#7F1D1D"
          strokeWidth="2"
        />
        <path
          d="M 200 220 Q 230 215 260 225 Q 290 220 295 240 Q 290 255 260 255 Q 230 260 200 255 Z"
          fill="#FCA5A5"
          stroke="#7F1D1D"
          strokeWidth="2"
        />
        {/* Ribosomes */}
        {[[210, 125], [240, 122], [275, 128], [212, 168], [245, 172], [280, 168], [215, 215], [248, 213], [280, 218], [225, 158], [260, 200], [225, 250]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#7F1D1D" />
        ))}
        <text x="247" y="290" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7F1D1D">Rough ER</text>
        <text x="247" y="304" textAnchor="middle" fontSize="9" fill="#7F1D1D">2. translate + fold</text>
      </g>

      {/* Vesicle 1 */}
      <g>
        <circle cx="335" cy="185" r="14" fill="#FCD34D" stroke="#92400E" strokeWidth="1.5" />
        <text x="335" y="188" textAnchor="middle" fontSize="7" fill="#92400E">vesicle</text>
      </g>
      <line x1="305" y1="195" x2="320" y2="190" stroke="#1F2937" strokeWidth="1.5" markerEnd="url(#arr)" />

      {/* Step 3: Golgi */}
      <g transform="translate(380, 0)">
        <path d="M 0 130 Q 60 122 110 130" stroke="#F59E0B" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 5 155 Q 60 148 105 155" stroke="#F59E0B" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 10 180 Q 60 172 100 180" stroke="#F59E0B" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 15 205 Q 60 198 95 205" stroke="#F59E0B" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 20 230 Q 60 222 90 230" stroke="#F59E0B" strokeWidth="6" fill="none" strokeLinecap="round" />

        <text x="-10" y="135" textAnchor="end" fontSize="9" fontWeight="600" fill="#92400E">cis</text>
        <text x="-10" y="232" textAnchor="end" fontSize="9" fontWeight="600" fill="#92400E">trans</text>

        <text x="55" y="290" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400E">Golgi apparatus</text>
        <text x="55" y="304" textAnchor="middle" fontSize="9" fill="#92400E">3. modify, glycosylate, sort</text>
      </g>

      {/* Vesicle 2 */}
      <g>
        <circle cx="520" cy="200" r="14" fill="#FCD34D" stroke="#92400E" strokeWidth="1.5" />
        <text x="520" y="203" textAnchor="middle" fontSize="7" fill="#92400E">vesicle</text>
      </g>
      <line x1="495" y1="220" x2="510" y2="208" stroke="#1F2937" strokeWidth="1.5" markerEnd="url(#arr)" />

      {/* Arrow → membrane */}
      <line x1="540" y1="195" x2="600" y2="170" stroke="#1F2937" strokeWidth="2" markerEnd="url(#arr)" />

      {/* Step 4: Plasma membrane / exocytosis */}
      <g>
        <line x1="600" y1="60" x2="600" y2="320" stroke="#92400E" strokeWidth="2.5" />
        <line x1="612" y1="60" x2="612" y2="320" stroke="#92400E" strokeWidth="2.5" />
        {/* Heads */}
        {Array.from({ length: 20 }, (_, i) => 70 + i * 13).map((y) => (
          <g key={y}>
            <circle cx="600" cy={y} r="3.5" fill="#FBBF24" stroke="#92400E" strokeWidth="0.5" />
            <circle cx="612" cy={y} r="3.5" fill="#FBBF24" stroke="#92400E" strokeWidth="0.5" />
          </g>
        ))}
        {/* Fusing vesicle */}
        <path d="M 590 165 Q 580 175 590 195 Q 600 200 612 195 Q 622 175 612 165 Z" fill="#FCD34D" stroke="#92400E" strokeWidth="1.5" />
        <text x="606" y="183" textAnchor="middle" fontSize="7" fill="#92400E">fusion</text>

        {/* Exported cargo */}
        <circle cx="660" cy="140" r="4" fill="#3B82F6" />
        <circle cx="680" cy="125" r="4" fill="#3B82F6" />
        <circle cx="700" cy="115" r="4" fill="#3B82F6" />
        <text x="720" y="110" fontSize="10" fontWeight="600" fill="#1E40AF" textAnchor="end">secreted</text>
        <text x="720" y="122" fontSize="10" fontWeight="600" fill="#1E40AF" textAnchor="end">protein</text>

        <text x="606" y="345" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400E">plasma membrane</text>
        <text x="606" y="360" textAnchor="middle" fontSize="9" fill="#92400E">4. exocytosis releases cargo</text>
      </g>
    </svg>
  );
}

export function ProkVsEuk() {
  return (
    <svg viewBox="0 0 720 360" className="w-full max-w-3xl" role="img" aria-label="Prokaryotic vs eukaryotic cell comparison">
      <defs>
        <radialGradient id="proxCyto" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </radialGradient>
        <radialGradient id="eukCyto" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#BFDBFE" />
        </radialGradient>
      </defs>

      {/* Prokaryote */}
      <g>
        <text x="160" y="28" textAnchor="middle" fontSize="15" fontWeight="700" fill="#92400E">PROKARYOTE</text>
        <text x="160" y="44" textAnchor="middle" fontSize="10" fill="#92400E">1–10 μm</text>
        <ellipse cx="160" cy="200" rx="140" ry="105" fill="url(#proxCyto)" stroke="#92400E" strokeWidth="2.5" />
        <ellipse cx="160" cy="200" rx="146" ry="111" fill="none" stroke="#78350F" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        {/* Nucleoid */}
        <path d="M 110 170 Q 130 150 160 165 Q 195 180 210 215 Q 200 240 165 235 Q 125 230 115 205 Q 105 185 110 170 Z" fill="none" stroke="#7C2D12" strokeWidth="2" />
        <text x="160" y="208" textAnchor="middle" fontSize="10" fill="#7C2D12" fontStyle="italic">nucleoid (DNA)</text>
        {/* Ribosomes */}
        {[[80, 130], [220, 145], [110, 250], [195, 265], [70, 200], [240, 200]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#78350F" />
        ))}
        {/* Flagellum */}
        <path d="M 300 200 Q 330 195 345 205 Q 360 215 380 205 Q 395 195 415 205" stroke="#78350F" strokeWidth="2" fill="none" />
        {/* Pili */}
        {[[40, 150], [50, 250], [30, 200]].map(([x, y], i) => (
          <line key={i} x1={x} y1={y} x2={x - 15} y2={y - (i % 2 ? 6 : -6)} stroke="#78350F" strokeWidth="1.5" />
        ))}

        {/* Labels */}
        <line x1="305" y1="175" x2="345" y2="120" stroke="#78350F" strokeWidth="1" />
        <text x="350" y="118" fontSize="10" fill="#7C2D12">flagellum</text>
        <line x1="80" y1="130" x2="50" y2="80" stroke="#78350F" strokeWidth="1" />
        <text x="20" y="76" fontSize="10" fill="#7C2D12">ribosome (70S)</text>
        <line x1="280" y1="220" x2="320" y2="280" stroke="#78350F" strokeWidth="1" />
        <text x="330" y="284" fontSize="10" fill="#7C2D12">cell wall / membrane</text>
      </g>

      {/* Eukaryote */}
      <g transform="translate(360, 0)">
        <text x="180" y="28" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1E40AF">EUKARYOTE</text>
        <text x="180" y="44" textAnchor="middle" fontSize="10" fill="#1E40AF">10–100 μm</text>
        <ellipse cx="180" cy="200" rx="160" ry="120" fill="url(#eukCyto)" stroke="#1E40AF" strokeWidth="2.5" />
        {/* Nucleus */}
        <circle cx="180" cy="190" r="48" fill="#A78BFA" stroke="#5B21B6" strokeWidth="2" />
        <circle cx="180" cy="190" r="48" fill="none" stroke="#5B21B6" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="172" cy="185" r="13" fill="#7C3AED" />
        <text x="180" y="194" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">nucleus</text>
        {/* Mitochondria */}
        <ellipse cx="80" cy="125" rx="28" ry="14" fill="#F87171" stroke="#991B1B" strokeWidth="1.5" />
        <path d="M 60 125 Q 70 117 80 125 Q 90 133 100 125" fill="none" stroke="#991B1B" strokeWidth="1" />
        <ellipse cx="280" cy="290" rx="28" ry="14" fill="#F87171" stroke="#991B1B" strokeWidth="1.5" />
        <path d="M 260 290 Q 270 282 280 290 Q 290 298 300 290" fill="none" stroke="#991B1B" strokeWidth="1" />
        {/* Rough ER */}
        <path d="M 70 220 Q 85 210 100 220 Q 115 230 90 240 Q 65 245 60 230 Z" fill="#FCA5A5" stroke="#7F1D1D" strokeWidth="1" />
        {[[68, 215], [78, 213], [88, 216], [98, 222], [70, 240], [85, 244], [97, 235]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="#7F1D1D" />
        ))}
        {/* Golgi */}
        <path d="M 250 100 Q 300 95 305 105" stroke="#F59E0B" strokeWidth="3" fill="none" />
        <path d="M 252 115 Q 302 110 307 120" stroke="#F59E0B" strokeWidth="3" fill="none" />
        <path d="M 254 130 Q 304 125 309 135" stroke="#F59E0B" strokeWidth="3" fill="none" />
        {/* Lysosomes */}
        <circle cx="120" cy="290" r="8" fill="#34D399" stroke="#065F46" strokeWidth="1" />
        <circle cx="250" cy="245" r="6" fill="#34D399" stroke="#065F46" strokeWidth="1" />

        {/* Labels */}
        <line x1="55" y1="125" x2="20" y2="100" stroke="#1E40AF" strokeWidth="1" />
        <text x="2" y="94" fontSize="10" fill="#1E40AF">mitochondrion</text>
        <line x1="60" y1="225" x2="20" y2="265" stroke="#1E40AF" strokeWidth="1" />
        <text x="2" y="280" fontSize="10" fill="#1E40AF">rough ER</text>
        <line x1="305" y1="105" x2="345" y2="75" stroke="#1E40AF" strokeWidth="1" />
        <text x="305" y="68" fontSize="10" fill="#1E40AF">Golgi apparatus</text>
        <line x1="120" y1="298" x2="135" y2="335" stroke="#1E40AF" strokeWidth="1" />
        <text x="140" y="340" fontSize="10" fill="#1E40AF">lysosome</text>
      </g>
    </svg>
  );
}

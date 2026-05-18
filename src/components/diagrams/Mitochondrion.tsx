export function Mitochondrion() {
  return (
    <svg viewBox="0 0 720 360" className="w-full max-w-2xl" role="img" aria-label="Mitochondrion structure">
      <defs>
        <radialGradient id="matrix" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#FECACA" />
          <stop offset="100%" stopColor="#FCA5A5" />
        </radialGradient>
      </defs>

      {/* Outer membrane */}
      <ellipse cx="360" cy="180" rx="280" ry="125" fill="#FCA5A5" stroke="#7F1D1D" strokeWidth="3" />
      {/* Intermembrane space */}
      <ellipse cx="360" cy="180" rx="262" ry="110" fill="#FEE2E2" stroke="#991B1B" strokeWidth="1.5" />
      {/* Inner membrane with cristae */}
      <path
        d="M 105 180
           Q 130 110 175 175 Q 200 110 245 175 Q 270 110 315 175 Q 340 115 385 175 Q 410 110 455 175 Q 480 115 525 175 Q 550 110 595 175 Q 615 180 595 185 Q 550 250 525 185 Q 480 245 455 185 Q 410 250 385 185 Q 340 245 315 185 Q 270 250 245 185 Q 200 250 175 185 Q 130 250 105 180 Z"
        fill="url(#matrix)"
        stroke="#7F1D1D"
        strokeWidth="2"
      />

      {/* ATP synthase dots on inner membrane (suggested as small lollipops on cristae crests) */}
      {[[175, 145], [245, 145], [315, 145], [385, 145], [455, 145], [525, 145]].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x} y2={y - 12} stroke="#7F1D1D" strokeWidth="1" />
          <circle cx={x} cy={y - 14} r="4" fill="#DC2626" stroke="#7F1D1D" strokeWidth="1" />
        </g>
      ))}

      {/* mtDNA loop */}
      <ellipse cx="200" cy="220" rx="14" ry="8" fill="none" stroke="#7F1D1D" strokeWidth="1.5" strokeDasharray="2 2" />
      <text x="200" y="223" textAnchor="middle" fontSize="8" fill="#7F1D1D" fontWeight="600">mtDNA</text>

      {/* Ribosome */}
      <circle cx="490" cy="220" r="5" fill="#7F1D1D" />

      {/* Labels with leader lines */}
      <line x1="640" y1="180" x2="690" y2="135" stroke="#7F1D1D" strokeWidth="1" />
      <text x="540" y="125" fontSize="11" fontWeight="600" fill="#7F1D1D">outer membrane</text>

      <line x1="620" y1="200" x2="690" y2="270" stroke="#7F1D1D" strokeWidth="1" />
      <text x="540" y="286" fontSize="11" fontWeight="600" fill="#7F1D1D">inner membrane (cristae)</text>
      <text x="540" y="299" fontSize="9" fontStyle="italic" fill="#7F1D1D">→ electron transport chain</text>

      <line x1="120" y1="220" x2="40" y2="280" stroke="#7F1D1D" strokeWidth="1" />
      <text x="14" y="296" fontSize="11" fontWeight="600" fill="#7F1D1D">matrix</text>
      <text x="14" y="309" fontSize="9" fontStyle="italic" fill="#7F1D1D">→ Krebs cycle (citric acid cycle)</text>

      <line x1="120" y1="140" x2="40" y2="80" stroke="#7F1D1D" strokeWidth="1" />
      <text x="14" y="76" fontSize="11" fontWeight="600" fill="#7F1D1D">intermembrane space</text>
      <text x="14" y="89" fontSize="9" fontStyle="italic" fill="#7F1D1D">→ H⁺ accumulates (proton gradient)</text>

      <line x1="385" y1="125" x2="385" y2="55" stroke="#DC2626" strokeWidth="1" />
      <text x="385" y="44" textAnchor="middle" fontSize="11" fontWeight="600" fill="#7F1D1D">ATP synthase</text>
      <text x="385" y="56" textAnchor="middle" fontSize="9" fontStyle="italic" fill="#7F1D1D">(F₀F₁) — makes ATP</text>
    </svg>
  );
}

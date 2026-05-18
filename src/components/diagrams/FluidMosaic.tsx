export function FluidMosaic() {
  // Phospholipid: round head + two wavy tails
  const Lipid = ({ x, flip = false }: { x: number; flip?: boolean }) => {
    const y0 = flip ? 195 : 105;
    const dir = flip ? 1 : -1;
    return (
      <g>
        <circle cx={x} cy={y0} r="7" fill="#FBBF24" stroke="#92400E" strokeWidth="0.8" />
        <path
          d={`M ${x - 3} ${y0 + dir * 6} Q ${x - 5} ${y0 + dir * 25} ${x - 2} ${y0 + dir * 40} Q ${x - 4} ${y0 + dir * 55} ${x - 1} ${y0 + dir * 70}`}
          stroke="#92400E"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d={`M ${x + 3} ${y0 + dir * 6} Q ${x + 5} ${y0 + dir * 25} ${x + 2} ${y0 + dir * 40} Q ${x + 4} ${y0 + dir * 55} ${x + 1} ${y0 + dir * 70}`}
          stroke="#92400E"
          strokeWidth="1.5"
          fill="none"
        />
      </g>
    );
  };

  // Cholesterol: rigid 4-ring block
  const Cholesterol = ({ x }: { x: number }) => (
    <g>
      <rect x={x - 4} y={130} width="8" height="40" fill="#FCD34D" stroke="#78350F" strokeWidth="0.8" rx="2" />
      <line x1={x - 4} y1={140} x2={x + 4} y2={140} stroke="#78350F" strokeWidth="0.4" />
      <line x1={x - 4} y1={150} x2={x + 4} y2={150} stroke="#78350F" strokeWidth="0.4" />
      <line x1={x - 4} y1={160} x2={x + 4} y2={160} stroke="#78350F" strokeWidth="0.4" />
    </g>
  );

  const lipidPositions = [40, 60, 80, 100, 145, 165, 185, 230, 250, 310, 330, 350, 395, 415, 460, 480, 500, 545, 565, 610, 630, 660, 680];

  return (
    <svg viewBox="0 0 720 360" className="w-full max-w-3xl" role="img" aria-label="Fluid mosaic model of cell membrane">
      <defs>
        <linearGradient id="extracellular" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#EFF6FF" />
        </linearGradient>
        <linearGradient id="intracellular" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FFFBEB" />
        </linearGradient>
      </defs>

      {/* Extracellular and intracellular regions */}
      <rect x="0" y="0" width="720" height="105" fill="url(#extracellular)" />
      <rect x="0" y="195" width="720" height="165" fill="url(#intracellular)" />

      <text x="12" y="20" fontSize="11" fontWeight="700" fill="#1E3A8A">EXTRACELLULAR (outside cell)</text>
      <text x="12" y="34" fontSize="9" fill="#1E40AF" fontStyle="italic">hydrophilic environment</text>

      <text x="12" y="218" fontSize="11" fontWeight="700" fill="#92400E">INTRACELLULAR (cytoplasm)</text>
      <text x="12" y="232" fontSize="9" fill="#92400E" fontStyle="italic">hydrophilic environment</text>

      {/* Hydrophobic core label */}
      <text x="360" y="155" textAnchor="middle" fontSize="9" fill="#78350F" fontStyle="italic" opacity="0.7">hydrophobic core (fatty-acid tails)</text>

      {/* Lipid bilayer */}
      {lipidPositions.map((x, i) => (
        <g key={`top-${i}`}>
          <Lipid x={x} />
        </g>
      ))}
      {lipidPositions.map((x, i) => (
        <g key={`bot-${i}`}>
          <Lipid x={x} flip />
        </g>
      ))}

      {/* Cholesterol */}
      <Cholesterol x={120} />
      <Cholesterol x={290} />
      <Cholesterol x={520} />

      {/* Integral channel protein */}
      <path d="M 200 80 Q 195 100 195 150 Q 195 200 200 220 L 222 220 Q 227 200 227 150 Q 227 100 222 80 Z" fill="#60A5FA" stroke="#1E3A8A" strokeWidth="1.5" />
      <ellipse cx="211" cy="150" rx="6" ry="20" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="1" />

      {/* Integral carrier protein */}
      <path d="M 370 80 Q 363 100 363 150 Q 363 200 370 220 L 395 220 Q 402 200 402 150 Q 402 100 395 80 Z" fill="#A78BFA" stroke="#4C1D95" strokeWidth="1.5" />
      <circle cx="383" cy="120" r="3" fill="#4C1D95" />
      <circle cx="383" cy="180" r="3" fill="#4C1D95" />

      {/* Peripheral protein (inside) */}
      <ellipse cx="430" cy="232" rx="18" ry="12" fill="#34D399" stroke="#065F46" strokeWidth="1.5" />

      {/* Glycoprotein (extracellular) */}
      <path d="M 580 80 Q 575 100 575 150 Q 575 200 580 220 L 605 220 Q 610 200 610 150 Q 610 100 605 80 Z" fill="#FB7185" stroke="#9F1239" strokeWidth="1.5" />
      <circle cx="593" cy="65" r="5" fill="#A7F3D0" stroke="#065F46" strokeWidth="1" />
      <circle cx="585" cy="55" r="4" fill="#A7F3D0" stroke="#065F46" strokeWidth="1" />
      <circle cx="603" cy="58" r="4" fill="#A7F3D0" stroke="#065F46" strokeWidth="1" />
      <line x1="585" y1="55" x2="593" y2="65" stroke="#065F46" strokeWidth="0.6" />
      <line x1="603" y1="58" x2="593" y2="65" stroke="#065F46" strokeWidth="0.6" />
      <line x1="593" y1="65" x2="593" y2="80" stroke="#065F46" strokeWidth="0.6" />

      {/* Glycolipid */}
      <circle cx="270" cy="85" r="4" fill="#A7F3D0" stroke="#065F46" strokeWidth="0.8" />
      <circle cx="262" cy="75" r="3" fill="#A7F3D0" stroke="#065F46" strokeWidth="0.8" />
      <line x1="262" y1="75" x2="270" y2="85" stroke="#065F46" strokeWidth="0.6" />
      <line x1="270" y1="85" x2="270" y2="98" stroke="#065F46" strokeWidth="0.6" />

      {/* Labels */}
      <line x1="60" y1="100" x2="40" y2="270" stroke="#78350F" strokeWidth="0.8" />
      <text x="30" y="284" fontSize="10" fill="#7C2D12" fontWeight="600">phospholipid head</text>
      <text x="30" y="296" fontSize="9" fill="#7C2D12" fontStyle="italic">(hydrophilic, polar)</text>

      <line x1="80" y1="160" x2="100" y2="280" stroke="#78350F" strokeWidth="0.8" />
      <text x="105" y="296" fontSize="10" fill="#7C2D12" fontWeight="600">fatty-acid tails</text>
      <text x="105" y="308" fontSize="9" fill="#7C2D12" fontStyle="italic">(hydrophobic, nonpolar)</text>

      <line x1="120" y1="155" x2="180" y2="305" stroke="#78350F" strokeWidth="0.8" />
      <text x="185" y="310" fontSize="10" fill="#7C2D12" fontWeight="600">cholesterol</text>
      <text x="185" y="322" fontSize="9" fill="#7C2D12" fontStyle="italic">(stabilizes fluidity)</text>

      <line x1="210" y1="80" x2="270" y2="305" stroke="#1E3A8A" strokeWidth="0.8" />
      <text x="275" y="310" fontSize="10" fill="#1E3A8A" fontWeight="600">channel protein</text>
      <text x="275" y="322" fontSize="9" fill="#1E3A8A" fontStyle="italic">(facilitated diffusion)</text>

      <line x1="382" y1="80" x2="360" y2="305" stroke="#1E3A8A" strokeWidth="0.8" />
      <text x="362" y="310" fontSize="10" fill="#4C1D95" fontWeight="600">carrier protein</text>

      <line x1="430" y1="244" x2="445" y2="310" stroke="#065F46" strokeWidth="0.8" />
      <text x="447" y="314" fontSize="10" fill="#065F46" fontWeight="600">peripheral protein</text>

      <line x1="593" y1="50" x2="535" y2="20" stroke="#9F1239" strokeWidth="0.8" />
      <text x="425" y="18" fontSize="10" fill="#9F1239" fontWeight="600">glycoprotein</text>
      <text x="425" y="30" fontSize="9" fill="#9F1239" fontStyle="italic">(cell recognition)</text>
    </svg>
  );
}

export function Tonicity() {
  const Cell = ({ cx, cy, r, fill, label, sublabel }: { cx: number; cy: number; r: number; fill: string; label: string; sublabel: string }) => (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#7C2D12" strokeWidth="2" />
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize="11" fontWeight="700" fill="#7C2D12">{label}</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="9" fill="#7C2D12">{sublabel}</text>
    </g>
  );

  const Dot = ({ x, y }: { x: number; y: number }) => (
    <circle cx={x} cy={y} r="2.5" fill="#1E3A8A" />
  );

  return (
    <svg viewBox="0 0 720 320" className="w-full max-w-3xl" role="img" aria-label="Tonicity: hypotonic, isotonic, hypertonic">
      {/* Three beakers */}
      {[
        { x: 120, label: "HYPOTONIC", sub: "low solute outside", dots: 6, cellR: 70, cellFill: "#DBEAFE", flow: "water IN", animal: "cell SWELLS / LYSES", plant: "turgid (good for plants)" },
        { x: 360, label: "ISOTONIC", sub: "equal solute", dots: 14, cellR: 55, cellFill: "#A7F3D0", flow: "no net flow", animal: "normal", plant: "flaccid" },
        { x: 600, label: "HYPERTONIC", sub: "high solute outside", dots: 24, cellR: 40, cellFill: "#FED7AA", flow: "water OUT", animal: "cell SHRINKS / CRENATES", plant: "plasmolyzed" },
      ].map((b) => (
        <g key={b.x}>
          {/* Beaker outline */}
          <path d={`M ${b.x - 95} 50 L ${b.x - 95} 230 Q ${b.x - 95} 240 ${b.x - 85} 240 L ${b.x + 85} 240 Q ${b.x + 95} 240 ${b.x + 95} 230 L ${b.x + 95} 50`} fill="#EFF6FF" stroke="#1F2937" strokeWidth="1.5" />
          {/* Header */}
          <text x={b.x} y={36} textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937">{b.label}</text>
          <text x={b.x} y={50} textAnchor="middle" fontSize="9" fill="#4B5563" fontStyle="italic">{b.sub}</text>
          {/* Solute dots */}
          {Array.from({ length: b.dots }, (_, i) => {
            const angle = (i / b.dots) * Math.PI * 2;
            const rr = 60 + (i % 3) * 12;
            const ox = b.x + Math.cos(angle) * rr;
            const oy = 140 + Math.sin(angle) * rr;
            // skip dots inside cell
            const dx = ox - b.x, dy = oy - 140;
            if (Math.sqrt(dx * dx + dy * dy) < b.cellR + 3) return null;
            return <Dot key={i} x={ox} y={oy} />;
          })}
          {/* Cell */}
          <Cell cx={b.x} cy={140} r={b.cellR} fill={b.cellFill} label="cell" sublabel="" />
          {/* Outcome text */}
          <text x={b.x} y={262} textAnchor="middle" fontSize="10" fontWeight="700" fill="#1E3A8A">{b.flow}</text>
          <text x={b.x} y={280} textAnchor="middle" fontSize="9" fill="#7C2D12">{b.animal}</text>
          <text x={b.x} y={295} textAnchor="middle" fontSize="9" fill="#065F46" fontStyle="italic">{b.plant}</text>
        </g>
      ))}
      {/* Arrows indicating water direction (top middle of each beaker) */}
      <g>
        <text x="120" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1E40AF">→ H₂O →</text>
        <text x="600" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7F1D1D">← H₂O ←</text>
      </g>
    </svg>
  );
}

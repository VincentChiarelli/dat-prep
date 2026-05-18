export function ReplicationFork() {
  return (
    <svg viewBox="0 0 760 400" className="w-full max-w-3xl" role="img" aria-label="DNA replication fork showing leading and lagging strand synthesis">
      <defs>
        <marker id="rfArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
        </marker>
      </defs>

      {/* Parental DNA on left, unwound by helicase */}
      <path d="M 30 200 L 280 200" stroke="#475569" strokeWidth="5" />
      <text x="60" y="190" fontSize="10" fill="#475569" fontStyle="italic">parental dsDNA</text>

      {/* Helicase (sphere at fork) */}
      <circle cx="290" cy="200" r="24" fill="#A78BFA" stroke="#4C1D95" strokeWidth="2" />
      <text x="290" y="204" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">helicase</text>

      {/* Leading strand template (top) */}
      <path d="M 290 180 Q 380 130 600 100" stroke="#475569" strokeWidth="5" fill="none" />
      <text x="320" y="118" fontSize="10" fill="#475569" fontStyle="italic">3'</text>
      <text x="600" y="92" fontSize="10" fill="#475569" fontStyle="italic">5'</text>

      {/* Lagging strand template (bottom) */}
      <path d="M 290 220 Q 380 270 600 300" stroke="#475569" strokeWidth="5" fill="none" />
      <text x="320" y="294" fontSize="10" fill="#475569" fontStyle="italic">5'</text>
      <text x="600" y="318" fontSize="10" fill="#475569" fontStyle="italic">3'</text>

      {/* Single-strand binding proteins */}
      {[[320, 168], [360, 160], [340, 245], [380, 260]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="#FCD34D" stroke="#92400E" strokeWidth="1" />
        </g>
      ))}
      <text x="340" y="155" fontSize="8" fill="#92400E">SSB</text>

      {/* Topoisomerase (ahead of fork) */}
      <circle cx="50" cy="200" r="14" fill="#FB7185" stroke="#9F1239" strokeWidth="1.5" />
      <text x="50" y="183" textAnchor="middle" fontSize="8" fill="#9F1239">topoisomerase</text>

      {/* Leading strand — new synthesis (continuous, away from helicase, toward fork) */}
      <path d="M 380 130 L 600 100" stroke="#10B981" strokeWidth="4" />
      <line x1="380" y1="130" x2="370" y2="135" stroke="#10B981" strokeWidth="4" />
      <text x="450" y="120" fontSize="11" fontWeight="700" fill="#065F46">LEADING (5' → 3')</text>
      <text x="450" y="135" fontSize="9" fill="#065F46" fontStyle="italic">continuous synthesis</text>

      {/* DNA Pol III on leading */}
      <circle cx="500" cy="115" r="16" fill="#10B981" stroke="#065F46" strokeWidth="2" />
      <text x="500" y="118" textAnchor="middle" fontSize="8" fontWeight="700" fill="white">Pol III</text>

      {/* RNA primer on leading (small red marker) */}
      <rect x="305" y="138" width="20" height="6" fill="#EF4444" rx="1" />
      <text x="315" y="158" textAnchor="middle" fontSize="8" fill="#7F1D1D">primer</text>

      {/* Lagging strand — three Okazaki fragments synthesized away from fork */}
      <g>
        {/* Fragment 1 — closest to fork, just started */}
        <rect x="395" y="262" width="20" height="6" fill="#EF4444" rx="1" />
        <path d="M 420 268 L 470 280" stroke="#3B82F6" strokeWidth="4" />
        {/* Pol III */}
        <circle cx="475" cy="282" r="14" fill="#3B82F6" stroke="#1E3A8A" strokeWidth="2" />
        <text x="475" y="285" textAnchor="middle" fontSize="7" fontWeight="700" fill="white">Pol III</text>

        {/* Fragment 2 — middle, complete with primer to remove */}
        <rect x="490" y="284" width="18" height="6" fill="#EF4444" rx="1" />
        <path d="M 512 290 L 555 297" stroke="#3B82F6" strokeWidth="4" />

        {/* Fragment 3 — oldest, ligated */}
        <rect x="570" y="295" width="14" height="6" fill="#EF4444" rx="1" />
        <path d="M 588 300 L 620 305" stroke="#3B82F6" strokeWidth="4" />

        {/* Arrows showing the fragment direction (each goes 5'→3' away from fork) */}
        <text x="450" y="320" fontSize="11" fontWeight="700" fill="#1E3A8A">LAGGING (5' → 3')</text>
        <text x="450" y="335" fontSize="9" fill="#1E3A8A" fontStyle="italic">discontinuous · Okazaki fragments</text>
      </g>

      {/* Annotation: primer → DNA Pol I removes → ligase seals */}
      <g transform="translate(490, 350)">
        <rect x="0" y="-12" width="18" height="8" fill="#EF4444" rx="1" />
        <text x="22" y="-5" fontSize="10" fill="#7F1D1D">RNA primer</text>
        <text x="22" y="6" fontSize="9" fill="#475569" fontStyle="italic">primase → Pol I removes → Ligase seals</text>
      </g>

      {/* Direction of fork movement */}
      <line x1="320" y1="200" x2="240" y2="200" stroke="#1F2937" strokeWidth="2" markerEnd="url(#rfArr)" />
      <text x="170" y="218" fontSize="10" fontWeight="700" fill="#1F2937">fork moves →</text>

      {/* Title */}
      <text x="380" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1F2937">Semiconservative DNA Replication</text>
      <text x="380" y="48" textAnchor="middle" fontSize="10" fill="#475569" fontStyle="italic">DNA polymerase synthesizes only 5' → 3' · the antiparallel template forces leading/lagging asymmetry</text>
    </svg>
  );
}

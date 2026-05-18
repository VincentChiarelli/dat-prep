export function TranscriptionBubble() {
  return (
    <svg viewBox="0 0 760 380" className="w-full max-w-3xl" role="img" aria-label="Transcription bubble with RNA polymerase reading template strand">
      <defs>
        <marker id="tbArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1F2937" />
        </marker>
      </defs>

      {/* Title */}
      <text x="380" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1F2937">Transcription: DNA → mRNA</text>

      {/* Coding (sense) strand top — closed, with promoter label */}
      <path d="M 30 100 L 240 100" stroke="#475569" strokeWidth="4" />
      <path d="M 460 100 L 720 100" stroke="#475569" strokeWidth="4" />
      <text x="30" y="92" fontSize="10" fontWeight="600" fill="#475569">5' coding strand (sense) — same sequence as mRNA, T→U</text>
      <text x="50" y="120" fontSize="9" fill="#475569" fontStyle="italic">5'</text>
      <text x="710" y="120" fontSize="9" fill="#475569" fontStyle="italic" textAnchor="end">3'</text>

      {/* Template (antisense) strand bottom — closed, with promoter label */}
      <path d="M 30 240 L 240 240" stroke="#475569" strokeWidth="4" />
      <path d="M 460 240 L 720 240" stroke="#475569" strokeWidth="4" />
      <text x="30" y="262" fontSize="10" fontWeight="600" fill="#475569">3' template strand (antisense) — read 3'→5' by RNA polymerase</text>
      <text x="50" y="228" fontSize="9" fill="#475569" fontStyle="italic">3'</text>
      <text x="710" y="228" fontSize="9" fill="#475569" fontStyle="italic" textAnchor="end">5'</text>

      {/* Transcription bubble — bulging open between 240 and 460 */}
      <path d="M 240 100 Q 280 90 320 130 Q 380 175 440 130 Q 480 90 460 100" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="3 2" />
      <path d="M 240 240 Q 280 250 320 210 Q 380 165 440 210 Q 480 250 460 240" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="3 2" />

      {/* RNA Polymerase (big ellipse) */}
      <ellipse cx="360" cy="170" rx="80" ry="55" fill="#A78BFA" stroke="#4C1D95" strokeWidth="2" opacity="0.85" />
      <text x="360" y="172" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">RNA Pol</text>
      <text x="360" y="188" textAnchor="middle" fontSize="9" fill="white" fontStyle="italic">5' → 3' synthesis</text>

      {/* Template bases visible inside bubble */}
      {[
        { x: 290, b: "G" },
        { x: 320, b: "A" },
        { x: 350, b: "C" },
        { x: 380, b: "T" },
        { x: 410, b: "G" },
        { x: 440, b: "A" },
      ].map((d, i) => (
        <text key={i} x={d.x} y="218" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7F1D1D">{d.b}</text>
      ))}

      {/* mRNA emerging from polymerase upward-right */}
      <path d="M 380 130 Q 440 110 500 80 Q 560 50 620 30" stroke="#DC2626" strokeWidth="3" fill="none" />
      {/* Complementary mRNA bases */}
      {[
        { x: 420, b: "C" },
        { x: 460, b: "U" },
        { x: 500, b: "G" },
        { x: 540, b: "A" },
        { x: 580, b: "C" },
        { x: 615, b: "U" },
      ].map((d, i) => (
        <g key={i}>
          <circle cx={d.x} cy={d.b === "U" ? 90 : 90} r="9" fill="#FCA5A5" stroke="#7F1D1D" strokeWidth="1" />
          <text x={d.x} y="94" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">{d.b}</text>
        </g>
      ))}
      <text x="640" y="34" fontSize="11" fontWeight="700" fill="#7F1D1D">5'</text>
      <text x="620" y="20" fontSize="10" fill="#7F1D1D" fontStyle="italic">nascent mRNA</text>

      {/* Arrow showing direction of polymerase movement */}
      <line x1="270" y1="280" x2="440" y2="280" stroke="#1F2937" strokeWidth="2" markerEnd="url(#tbArr)" />
      <text x="355" y="298" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1F2937">RNA Pol moves 3' → 5' along template (synthesizes mRNA 5' → 3')</text>

      {/* Promoter label */}
      <rect x="130" y="320" width="100" height="22" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" rx="4" />
      <text x="180" y="335" textAnchor="middle" fontSize="11" fontWeight="700" fill="#92400E">PROMOTER (TATA)</text>

      {/* Mnemonic */}
      <text x="600" y="335" fontSize="11" fontWeight="700" fill="#1E3A8A">A→U · T→A · G→C · C→G</text>
      <text x="600" y="350" fontSize="9" fill="#1E3A8A" fontStyle="italic">U replaces T in RNA</text>
    </svg>
  );
}

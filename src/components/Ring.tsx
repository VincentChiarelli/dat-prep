// Reusable circular progress dial
// Props: value 0-100, size (px), stroke (px), label (override center text)

interface RingProps {
  value: number;
  size?: number;
  stroke?: number;
  label?: string;
}

export function Ring({ value, size = 96, stroke = 8, label }: RingProps) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = circumference - (clamped / 100) * circumference;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: "rotate(-90deg)" }}
        aria-hidden="true"
      >
        {/* Track */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={stroke}
        />
        {/* Progress arc */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="#6c5ce7"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      {/* Centered label — absolute overlay so it never affects layout */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-bold leading-none"
          style={{
            fontSize: size * 0.22,
            color: "var(--ink)",
          }}
        >
          {label ?? `${Math.round(clamped)}%`}
        </span>
      </div>
    </div>
  );
}

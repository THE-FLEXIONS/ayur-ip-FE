import { useId } from "react";

const LEAF = "M0 0C10-11 33-12 48 0 33 12 10 11 0 0Z";

type Leaf = { x: number; y: number; r: number; s: number; tone?: 0 | 1 };

const BRANCH_LEAVES: Leaf[] = [
  { x: 190, y: 268, r: -175, s: 1.05, tone: 1 },
  { x: 184, y: 250, r: -25, s: 1.1 },
  { x: 166, y: 212, r: -168, s: 1.2 },
  { x: 160, y: 196, r: -30, s: 1.15, tone: 1 },
  { x: 142, y: 164, r: -160, s: 1.15 },
  { x: 136, y: 148, r: -40, s: 1.1, tone: 1 },
  { x: 118, y: 118, r: -150, s: 1.05, tone: 1 },
  { x: 112, y: 104, r: -48, s: 1.0 },
  { x: 94, y: 76, r: -145, s: 0.9 },
  { x: 88, y: 62, r: -60, s: 0.85, tone: 1 },
  { x: 66, y: 26, r: -118, s: 0.8 },
];

/**
 * A decorative leafy branch drawn in SVG so it scales crisply and blends with
 * the ivory background. The stem enters from the bottom-right of the viewBox.
 */
export function LeafBranch({
  className,
  flowers = false,
}: {
  className?: string;
  flowers?: boolean;
}) {
  const id = useId();
  return (
    <svg viewBox="0 0 220 300" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-l0`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1f5f36" />
          <stop offset="1" stopColor="#4c9651" />
        </linearGradient>
        <linearGradient id={`${id}-l1`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2e7a43" />
          <stop offset="1" stopColor="#7fb866" />
        </linearGradient>
      </defs>
      <path d="M214 300C176 232 124 150 62 20" stroke="#476b3c" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {BRANCH_LEAVES.map((leaf, i) => (
        <g key={i} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`}>
          <path d={LEAF} fill={`url(#${id}-l${leaf.tone ?? 0})`} />
          <path d="M2 0H44" stroke="#d9ecd0" strokeWidth="0.9" opacity="0.7" />
        </g>
      ))}
      {flowers &&
        [
          [150, 238, 1],
          [120, 262, 0.8],
          [176, 214, 0.7],
        ].map(([x, y, s], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
            {[0, 72, 144, 216, 288].map((a) => (
              <ellipse key={a} cx="0" cy="-6" rx="3.6" ry="6" fill="#f2c94c" transform={`rotate(${a})`} />
            ))}
            <circle r="2.6" fill="#c9861a" />
          </g>
        ))}
    </svg>
  );
}

/** Soft, layered mountain ridges that fade into mist. */
export function MistRidges({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-far`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9d6cb" stopOpacity="0.75" />
          <stop offset="1" stopColor="#c9d6cb" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-near`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b8cbb9" stopOpacity="0.7" />
          <stop offset="1" stopColor="#b8cbb9" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}-blur`} x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <g filter={`url(#${id}-blur)`}>
        <path
          d="M0 260 120 200l70 30 110-110 90 70 80-40 120 90 110-150 120 110 90-40 120 100 80-30 90 60V420H0Z"
          fill={`url(#${id}-far)`}
        />
        <path
          d="M0 330 90 280l110 40 130-90 100 70 140-60 120 90 130-100 120 80 90-30 170 90V420H0Z"
          fill={`url(#${id}-near)`}
        />
      </g>
    </svg>
  );
}

export function FlagIndia({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <clipPath id={id}>
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="8" fill="#ff9933" />
        <rect y="8" width="24" height="8" fill="#ffffff" />
        <rect y="16" width="24" height="8" fill="#138808" />
        <circle cx="12" cy="12" r="3" fill="none" stroke="#000080" strokeWidth="0.9" />
        <circle cx="12" cy="12" r="0.8" fill="#000080" />
      </g>
      <circle cx="12" cy="12" r="11.5" fill="none" stroke="#00000014" />
    </svg>
  );
}

export function FlagEU({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="12" fill="#1f3f99" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6;
        return <circle key={i} cx={12 + 6.5 * Math.cos(a)} cy={12 + 6.5 * Math.sin(a)} r="0.95" fill="#ffcc00" />;
      })}
    </svg>
  );
}

export function FlagUS({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <clipPath id={id}>
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        <rect width="24" height="24" fill="#ffffff" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect key={i} y={i * 1.846} width="24" height="1.846" fill="#b22234" />
        ))}
        <rect width="11" height="12" fill="#3c3b6e" />
      </g>
      <circle cx="12" cy="12" r="11.5" fill="none" stroke="#00000014" />
    </svg>
  );
}

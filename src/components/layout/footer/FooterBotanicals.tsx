// ─── Footer botanicals ──────────────────────────────────────────────────────
// Pale leaf sprays behind the footer: one on the right of the link columns,
// one rising from the bottom-right corner. Both are cropped by the footer edge.

function Leaf({ d, vein, fill }: { d: string; vein: string; fill: string }) {
  return (
    <g>
      <path d={d} fill={fill} />
      <path d={vein} stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </g>
  );
}

/** A branch with alternating leaves, drawn in a 300×600 box. */
function Spray({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 300 600" fill="none" aria-hidden="true" className={className}>
      <path d="M300 600 C250 470 225 330 250 190 C262 120 285 60 300 20" stroke="#b9d1b2" strokeWidth="3" />
      <Leaf fill="#c9ddc3" d="M262 150 C205 135 160 90 150 22 C215 30 258 80 262 150Z" vein="M262 150 C225 115 190 75 158 32" />
      <Leaf fill="#d3e4ce" d="M258 210 C300 165 330 150 360 160 C345 210 300 235 258 210Z" vein="M258 210 C290 190 320 172 352 163" />
      <Leaf fill="#c3d9bc" d="M245 285 C175 290 115 255 85 190 C160 180 225 220 245 285Z" vein="M245 285 C195 255 140 220 95 195" />
      <Leaf fill="#cfe1c9" d="M250 360 C300 300 340 285 380 300 C360 360 300 385 250 360Z" vein="M250 360 C290 335 330 310 372 302" />
      <Leaf fill="#c7dcc1" d="M255 440 C185 455 120 425 85 360 C165 345 235 380 255 440Z" vein="M255 440 C205 410 150 380 95 364" />
      <Leaf fill="#d6e6d1" d="M270 520 C310 470 345 455 380 465 C365 520 315 545 270 520Z" vein="M270 520 C305 497 340 478 374 468" />
    </svg>
  );
}

export default function FooterBotanicals() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <Spray className="absolute -right-10 top-10 h-[300px] w-[150px] opacity-50 sm:h-[360px] sm:w-[180px] lg:-right-6 lg:top-[38px] lg:h-[330px] lg:w-[165px] lg:opacity-80" />
      <Spray className="absolute -bottom-24 -right-8 h-[260px] w-[130px] opacity-50 lg:-bottom-[70px] lg:-right-3 lg:h-[230px] lg:w-[115px] lg:opacity-75" />
    </div>
  );
}

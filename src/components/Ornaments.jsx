// Hand-drawn gold ornaments from the design. All decorative, so hidden from screen readers.

const LEAVES = [
  [30, 91, -62, 1], [44, 85, 28, 1], [72, 72, -70, 1], [86, 66, 22, 1], [116, 53, -72, 1],
  [130, 47, 18, 1], [156, 35, -66, 1], [170, 29, 14, 1], [192, 19, -48, 0.85], [203, 13, -12, 0.7],
]

const OLIVES = [
  { stem: 'M84 67 C84 71 86 74 86 78', cx: 86, cy: 86, rx: 6.56, ry: 8, hl: [83.44, 82.96, 1.6, 2.4] },
  { stem: 'M66 75 C66 79 62 82.5 62 86.5', cx: 62, cy: 94, rx: 6.15, ry: 7.5, hl: [59.6, 91.15, 1.5, 2.25] },
  { stem: 'M124 50 C124 54 126 54.5 126 58.5', cx: 126, cy: 66, rx: 6.15, ry: 7.5, hl: [123.6, 63.15, 1.5, 2.25] },
  { stem: 'M160 34 C160 38 163 39.5 163 43.5', cx: 163, cy: 50, rx: 5.33, ry: 6.5, hl: [160.92, 47.53, 1.3, 1.95] },
]

// Olive branch artwork in a 220×110 box.
function BranchShapes(props) {
  return (
    <g {...props}>
      <path d="M10 100 C50 82 100 60 150 38 C175 27 195 18 212 8" stroke="currentColor" fill="none" strokeWidth="2.6" strokeLinecap="round" />
      {LEAVES.map(([x, y, r, s]) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
          <path d="M0 0 C9 -7 28 -7 40 0 C28 6 9 6 0 0Z" fill="currentColor" />
          <path d="M4 0 C14 -1 24 -1 35 0" stroke="#0E0D0B" strokeOpacity="0.55" strokeWidth="1" fill="none" />
        </g>
      ))}
      {OLIVES.map(({ stem, cx, cy, rx, ry, hl }) => (
        <g key={stem}>
          <path d={stem} stroke="currentColor" strokeWidth="1.4" fill="none" />
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#14120D" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx={hl[0]} cy={hl[1]} rx={hl[2]} ry={hl[3]} fill="#F6E2A8" fillOpacity="0.85" />
        </g>
      ))}
    </g>
  )
}

const GRAPES = [
  [52, 48], [67, 48], [82, 48], [44.5, 61], [59.5, 61], [74.5, 61], [89.5, 61],
  [52, 74], [67, 74], [82, 74], [59.5, 87], [74.5, 87], [67, 100],
]

// Grape cluster artwork in a 110×112 box.
function GrapeShapes(props) {
  return (
    <g {...props}>
      <path d="M60 6 C61 18 58 26 63 40" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
      <path d="M61 14 C76 2 92 12 84 22 C79 28 70 24 75 17" stroke="currentColor" fill="none" strokeWidth="1.2" />
      <path d="M59 22 C44 6 18 12 22 30 C8 36 14 54 30 50 C32 62 48 60 52 46 C56 38 58 30 59 22Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.3" />
      <path d="M58 24 L30 42 M44 32 L28 26 M40 36 L40 52" stroke="currentColor" strokeWidth="0.8" />
      {GRAPES.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="7.6" fill="#1E1B14" stroke="currentColor" strokeWidth="1.3" />
          <circle cx={cx - 2.4} cy={cy - 2.6} r="1.8" fill="currentColor" fillOpacity="0.6" />
        </g>
      ))}
    </g>
  )
}

// Scroll flourish artwork in an 80×24 box.
function FlourishShapes(props) {
  return (
    <g {...props}>
      <path d="M78 12 H36 C28 12 25 4 18 4 C11 4 8 10 11 15 C14 19 20 18 20 13 C20 10 17 9 15 11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M36 12 C30 13 28 19 22 20" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <circle cx="4" cy="12" r="2" fill="currentColor" />
    </g>
  )
}

export function Branch({ className = '' }) {
  return (
    <svg className={`ornament ${className}`} viewBox="0 0 220 110" aria-hidden="true">
      <BranchShapes />
    </svg>
  )
}

export function Grapes({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 110 112" aria-hidden="true">
      <GrapeShapes />
    </svg>
  )
}

export function Flourish({ flip = false }) {
  return (
    <svg className={`ornament${flip ? ' flip' : ''}`} viewBox="0 0 80 24" aria-hidden="true">
      <FlourishShapes />
    </svg>
  )
}

// Text framed by a flourish on each side: ~~ TEXT ~~
export function Flourished({ children, className = '' }) {
  return (
    <div className={className}>
      <Flourish flip />
      {children}
      <Flourish />
    </div>
  )
}

export function EyebrowRow({ children, center = false }) {
  return (
    <Flourished className={`eyebrow-row${center ? ' center' : ''}`}>
      <p className="eyebrow">{children}</p>
    </Flourished>
  )
}

export function Divider() {
  return (
    <svg className="divider" viewBox="0 0 400 40" aria-hidden="true">
      <path d="M0 20 H112 M288 20 H400" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1" />
      <FlourishShapes transform="translate(190 8) scale(-1 1)" />
      <FlourishShapes transform="translate(210 8)" />
      <path d="M200 13 L206 20 L200 27 L194 20Z" fill="currentColor" />
      <circle cx="186" cy="20" r="1.6" fill="currentColor" />
      <circle cx="214" cy="20" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function Corners() {
  return ['tl', 'tr', 'bl', 'br'].map((pos) => (
    <svg key={pos} className={`corner ${pos}`} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M3 38 V15 C3 8 8 3 15 3 H38" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M10 30 C10 18 18 10 30 10 M17 22 C17 18 20 15 24 16 C26 17 25 20 22 20" stroke="currentColor" strokeWidth="1.1" fill="none" />
      <circle cx="10" cy="10" r="2.2" fill="currentColor" />
    </svg>
  ))
}

export function Tricolore() {
  return (
    <div className="tricolore" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}

// Line drawing of the Biloxi coast: lighthouse, olive branch, wine glass and grapes.
export function CoastlineArt() {
  return (
    <svg className="footer-art" viewBox="0 0 1200 160" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeOpacity="0.55">
        <path d="M0 112 C150 84 260 96 380 80 C520 62 640 94 780 78 C900 66 1020 90 1200 74" strokeWidth="1.4" />
        <path d="M0 138 C200 116 360 128 520 114 C700 100 860 124 1200 106" strokeWidth="1.2" />
        <path d="M300 104 C380 96 440 92 520 96 M310 116 C390 108 450 104 530 108 M660 104 C740 96 800 94 880 98 M650 118 C730 110 800 108 890 112" strokeDasharray="3 7" strokeWidth="2" />
      </g>
      <g fill="currentColor" fillOpacity="0.45">
        <ellipse cx="430" cy="62" rx="5" ry="19" />
        <ellipse cx="446" cy="68" rx="4" ry="14" />
        <ellipse cx="822" cy="56" rx="5" ry="21" />
        <ellipse cx="839" cy="63" rx="4" ry="15" />
        <ellipse cx="855" cy="66" rx="3.5" ry="12" />
      </g>
      <path d="M598 78 V64 L614 54 L630 64 V78 M608 78 V70 H616 V78" stroke="currentColor" strokeOpacity="0.55" fill="none" strokeWidth="1.3" />
      <path d="M84 160 V108 C84 98 92 94 94 84 V56 H104 V84 C106 94 114 98 114 108 V160Z" fill="#14120D" stroke="currentColor" strokeWidth="1.6" />
      <rect x="88" y="118" width="22" height="24" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="93" y="50" width="12" height="8" fill="currentColor" />
      <BranchShapes transform="translate(118 94) scale(0.42)" />
      <path d="M1086 58 C1086 96 1134 96 1134 58Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M1088 72 C1092 92 1128 92 1132 72Z" fill="#6B1E22" />
      <path d="M1110 90 V146 M1092 148 H1128" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <GrapeShapes transform="translate(1000 62) scale(0.78)" />
    </svg>
  )
}

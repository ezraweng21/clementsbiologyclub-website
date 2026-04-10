import { memo } from "react";

const eventMicrobes = [
  { x: 186, y: 212, scale: 1.04, rotate: -12, tone: "sage" },
  { x: 1372, y: 248, scale: 0.92, rotate: 14, tone: "teal" },
  { x: 1242, y: 618, scale: 1.08, rotate: -8, tone: "olive" },
  { x: 258, y: 1038, scale: 0.96, rotate: 10, tone: "sage" },
  { x: 1360, y: 1108, scale: 0.88, rotate: -14, tone: "teal" },
];

const virusBursts = [
  { x: 1210, y: 186, scale: 0.86, rotate: 10, tone: "gold" },
  { x: 330, y: 702, scale: 0.78, rotate: -8, tone: "sage" },
  { x: 1424, y: 846, scale: 0.94, rotate: 18, tone: "teal" },
];

const spores = [
  { x: 90, y: 154, r: 6 },
  { x: 126, y: 184, r: 4 },
  { x: 114, y: 230, r: 5 },
  { x: 148, y: 268, r: 3 },
  { x: 1500, y: 232, r: 5 },
  { x: 1466, y: 278, r: 3 },
  { x: 1508, y: 328, r: 4 },
  { x: 86, y: 1002, r: 4 },
  { x: 132, y: 1062, r: 6 },
  { x: 1504, y: 1090, r: 5 },
  { x: 1450, y: 1140, r: 4 },
];

const particleBands = [
  { cx: 546, cy: 250, rx: 220, ry: 82, rotate: -10 },
  { cx: 1126, cy: 528, rx: 250, ry: 90, rotate: 14 },
  { cx: 510, cy: 960, rx: 242, ry: 88, rotate: -12 },
];

function renderMicrobe({ x, y, scale, rotate, tone }, index) {
  return (
    <g
      key={`event-microbe-${x}-${y}-${index}`}
      className={`event-microbe event-microbe-${tone}`}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <ellipse className="microbe-body" cx="0" cy="0" rx="72" ry="48" />
      <ellipse className="microbe-core" cx="-12" cy="-6" rx="28" ry="18" />
      <circle className="microbe-dot" cx="18" cy="-10" r="8" />
      <circle className="microbe-dot microbe-dot-soft" cx="-28" cy="14" r="6" />
      <path className="microbe-cilia" d="M-54 -40 C-62 -56 -78 -62 -92 -58" />
      <path className="microbe-cilia" d="M-10 -52 C-14 -68 -6 -82 10 -90" />
      <path className="microbe-cilia" d="M44 -42 C58 -58 74 -60 88 -54" />
      <path className="microbe-cilia" d="M56 18 C72 18 84 28 92 42" />
      <path className="microbe-cilia" d="M-38 40 C-54 48 -64 62 -70 78" />
    </g>
  );
}

function renderVirusBurst({ x, y, scale, rotate, tone }, index) {
  return (
    <g
      key={`event-virus-${x}-${y}-${index}`}
      className={`event-virus event-virus-${tone}`}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <circle className="virus-core" cx="0" cy="0" r="24" />
      {Array.from({ length: 12 }, (_, spikeIndex) => (
        <g key={`spike-${spikeIndex}`} transform={`rotate(${spikeIndex * 30})`}>
          <path className="virus-spike" d="M0 -28 L4 -44 L0 -58 L-4 -44 Z" />
          <circle className="virus-tip" cx="0" cy="-60" r="4.5" />
        </g>
      ))}
    </g>
  );
}

function EventsVisual() {
  return (
    <div className="events-page-visual" aria-hidden="true">
      <svg
        className="events-visual-svg"
        viewBox="0 0 1600 1360"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="eventCurrent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cfe6db" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#6f9b82" stopOpacity="0.26" />
          </linearGradient>
          <radialGradient id="eventAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#eef8f0" stopOpacity="0.76" />
            <stop offset="100%" stopColor="#a6c7ae" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="event-currents">
          <path
            className="event-current event-current-main"
            d="M-60 210 C180 114, 420 118, 640 218 C824 304, 1010 346, 1308 290 C1450 264, 1562 238, 1660 218"
          />
          <path
            className="event-current event-current-soft"
            d="M-80 572 C132 494, 332 500, 534 580 C728 654, 926 688, 1160 644 C1336 612, 1500 600, 1660 626"
          />
          <path
            className="event-current event-current-main"
            d="M-40 1026 C188 946, 394 954, 614 1038 C822 1118, 1046 1142, 1292 1090 C1440 1058, 1554 1040, 1660 1054"
          />
          <path
            className="event-current event-current-thread"
            d="M1088 232 C956 410, 930 570, 1004 760 C1064 914, 1096 1060, 1056 1240"
          />
          <path
            className="event-current event-current-thread"
            d="M314 196 C262 366, 286 534, 374 692 C452 832, 472 986, 438 1184"
          />
        </g>

        <g className="event-aura-fields">
          <ellipse className="event-aura" cx="282" cy="236" rx="198" ry="128" />
          <ellipse className="event-aura" cx="1288" cy="626" rx="246" ry="154" />
          <ellipse className="event-aura" cx="356" cy="1108" rx="208" ry="132" />
        </g>

        <g className="event-particle-bands">
          {particleBands.map((band, index) => (
            <ellipse
              key={`event-particle-band-${index}`}
              className="event-particle-band"
              cx={band.cx}
              cy={band.cy}
              rx={band.rx}
              ry={band.ry}
              transform={`rotate(${band.rotate} ${band.cx} ${band.cy})`}
            />
          ))}
        </g>

        <g className="event-particles">
          {Array.from({ length: 36 }, (_, index) => {
            const x = 226 + (index % 6) * 70 + (index % 2) * 10;
            const y = 176 + Math.floor(index / 6) * 26;
            return <circle key={`event-particle-top-${index}`} className="event-particle" cx={x} cy={y} r={(index % 3) + 2.6} />;
          })}
          {Array.from({ length: 42 }, (_, index) => {
            const x = 970 + (index % 7) * 62 + (index % 2) * 12;
            const y = 454 + Math.floor(index / 7) * 28;
            return <circle key={`event-particle-mid-${index}`} className="event-particle event-particle-soft" cx={x} cy={y} r={(index % 4) + 2.2} />;
          })}
          {Array.from({ length: 32 }, (_, index) => {
            const x = 196 + (index % 8) * 58;
            const y = 888 + Math.floor(index / 8) * 24;
            return <circle key={`event-particle-bottom-${index}`} className="event-particle" cx={x} cy={y} r={(index % 3) + 2.4} />;
          })}
        </g>

        <g className="event-microbe-field">
          {eventMicrobes.map(renderMicrobe)}
          {virusBursts.map(renderVirusBurst)}
          {spores.map((spore, index) => (
            <circle
              key={`spore-${spore.x}-${spore.y}-${index}`}
              className="event-spore"
              cx={spore.x}
              cy={spore.y}
              r={spore.r}
            />
          ))}
        </g>

        <g className="event-lab-rings">
          <circle className="event-ring" cx="1298" cy="228" r="118" />
          <circle className="event-ring event-ring-soft" cx="260" cy="1046" r="134" />
          <circle className="event-ring event-ring-soft" cx="1228" cy="854" r="96" />
        </g>
      </svg>
    </div>
  );
}

export default memo(EventsVisual);

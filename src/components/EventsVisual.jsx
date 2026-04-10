import { memo } from "react";

const eventMicrobes = [
  { x: 134, y: 182, scale: 0.94, rotate: -12, tone: "sage" },
  { x: 1478, y: 132, scale: 0.82, rotate: 14, tone: "teal" },
  { x: 1096, y: 692, scale: 0.96, rotate: -8, tone: "olive" },
  { x: 196, y: 1086, scale: 0.86, rotate: 10, tone: "sage" },
  { x: 1504, y: 1188, scale: 0.8, rotate: -14, tone: "teal" },
  { x: 1424, y: 286, scale: 1.36, rotate: -6, tone: "hero" },
  { x: 154, y: 816, scale: 1.18, rotate: 12, tone: "hero" },
  { x: 1558, y: 706, scale: 1.08, rotate: 20, tone: "hero" },
  { x: 52, y: 486, scale: 1.02, rotate: -18, tone: "teal" },
  { x: 428, y: 150, scale: 0.84, rotate: 8, tone: "olive" },
  { x: 910, y: 796, scale: 0.84, rotate: -10, tone: "olive" },
  { x: 594, y: 1188, scale: 0.86, rotate: 18, tone: "teal" },
  { x: 1564, y: 968, scale: 0.84, rotate: 16, tone: "olive" },
];

const virusBursts = [
  { x: 1166, y: 118, scale: 0.78, rotate: 10, tone: "gold" },
  { x: 458, y: 618, scale: 0.7, rotate: -8, tone: "sage" },
  { x: 1466, y: 760, scale: 0.84, rotate: 18, tone: "teal" },
  { x: 1060, y: 1002, scale: 1.08, rotate: -10, tone: "hero" },
  { x: 1288, y: 480, scale: 1.24, rotate: 12, tone: "hero" },
  { x: 236, y: 1290, scale: 1.04, rotate: -12, tone: "gold" },
  { x: 760, y: 564, scale: 0.9, rotate: -14, tone: "gold" },
  { x: 1540, y: 418, scale: 0.86, rotate: -16, tone: "teal" },
  { x: 520, y: 1324, scale: 0.8, rotate: 14, tone: "sage" },
];

const bacteriaRods = [
  { x: 88, y: 286, scale: 0.96, rotate: 34, tone: "sage" },
  { x: 252, y: 424, scale: 0.74, rotate: -18, tone: "teal" },
  { x: 1190, y: 454, scale: 1.04, rotate: 18, tone: "olive" },
  { x: 1406, y: 544, scale: 0.82, rotate: -28, tone: "teal" },
  { x: 1548, y: 758, scale: 0.98, rotate: 44, tone: "olive" },
  { x: 1038, y: 1188, scale: 0.9, rotate: -30, tone: "sage" },
  { x: 92, y: 914, scale: 1, rotate: 22, tone: "teal" },
  { x: 264, y: 680, scale: 0.78, rotate: -16, tone: "olive" },
  { x: 366, y: 1098, scale: 0.72, rotate: -24, tone: "sage" },
  { x: 508, y: 470, scale: 0.82, rotate: 28, tone: "teal" },
  { x: 714, y: 236, scale: 0.94, rotate: -12, tone: "sage" },
  { x: 852, y: 590, scale: 0.76, rotate: 34, tone: "olive" },
  { x: 1068, y: 464, scale: 0.9, rotate: -26, tone: "teal" },
  { x: 1478, y: 548, scale: 0.88, rotate: -18, tone: "olive" },
  { x: 1142, y: 884, scale: 0.8, rotate: 26, tone: "teal" },
  { x: 590, y: 794, scale: 0.82, rotate: 20, tone: "sage" },
  { x: 808, y: 1028, scale: 0.92, rotate: -24, tone: "teal" },
  { x: 978, y: 1162, scale: 0.76, rotate: 28, tone: "olive" },
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
  { cx: 1298, cy: 356, rx: 290, ry: 114, rotate: -8 },
  { cx: 232, cy: 868, rx: 244, ry: 102, rotate: 12 },
  { cx: 1240, cy: 920, rx: 318, ry: 126, rotate: -14 },
];

const eventRings = [
  { cx: 1298, cy: 228, r: 118, tone: "base" },
  { cx: 260, cy: 1046, r: 134, tone: "soft" },
  { cx: 1228, cy: 854, r: 96, tone: "soft" },
  { cx: 1302, cy: 358, r: 176, tone: "focus" },
  { cx: 238, cy: 856, r: 152, tone: "focus" },
  { cx: 1208, cy: 560, r: 148, tone: "focus" },
];

const eventGridPulses = [
  { x: 1174, y: 432 },
  { x: 1238, y: 572 },
  { x: 1308, y: 714 },
  { x: 286, y: 770 },
  { x: 346, y: 924 },
  { x: 412, y: 1088 },
];

const mutationChains = [
  {
    className: "event-mutation-chain-top",
    path: "M820 208 C922 194, 1018 214, 1114 266 C1214 320, 1306 404, 1398 528",
    nodes: [
      { x: 842, y: 206, stage: 0, scale: 0.82, rotate: -8, tone: "sage" },
      { x: 934, y: 210, stage: 1, scale: 0.92, rotate: -4, tone: "teal" },
      { x: 1038, y: 236, stage: 2, scale: 1, rotate: 6, tone: "olive" },
      { x: 1154, y: 294, stage: 3, scale: 1.12, rotate: 12, tone: "teal" },
      { x: 1278, y: 392, stage: 4, scale: 1.24, rotate: 18, tone: "hero" },
    ],
  },
  {
    className: "event-mutation-chain-bottom",
    path: "M168 702 C238 762, 300 842, 356 936 C424 1050, 510 1136, 652 1216",
    nodes: [
      { x: 174, y: 712, stage: 0, scale: 0.88, rotate: 12, tone: "teal" },
      { x: 242, y: 766, stage: 1, scale: 0.96, rotate: 10, tone: "sage" },
      { x: 316, y: 854, stage: 2, scale: 1.04, rotate: 4, tone: "olive" },
      { x: 412, y: 978, stage: 3, scale: 1.16, rotate: -6, tone: "teal" },
      { x: 548, y: 1128, stage: 4, scale: 1.28, rotate: -10, tone: "hero" },
    ],
  },
];

function renderMicrobe({ x, y, scale, rotate, tone }, index) {
  return (
    <g
      key={`event-microbe-${x}-${y}-${index}`}
      className={`event-microbe event-microbe-${tone}`}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <ellipse className="microbe-body" cx="0" cy="0" rx="72" ry="48" />
      <ellipse className="microbe-halo" cx="6" cy="-2" rx="56" ry="34" />
      <ellipse className="microbe-core" cx="-12" cy="-6" rx="28" ry="18" />
      <path className="microbe-vein" d="M-38 -10 C-12 -20, 20 -18, 42 -6" />
      <path className="microbe-vein" d="M-34 14 C-8 8, 18 10, 36 22" />
      <circle className="microbe-dot" cx="18" cy="-10" r="8" />
      <circle className="microbe-dot microbe-dot-soft" cx="-28" cy="14" r="6" />
      <circle className="microbe-speck" cx="-2" cy="-18" r="3.2" />
      <circle className="microbe-speck" cx="30" cy="12" r="2.8" />
      <circle className="microbe-speck microbe-speck-soft" cx="-24" cy="-2" r="2.4" />
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
      <circle className="virus-ring" cx="0" cy="0" r="14" />
      <circle className="virus-nucleus" cx="-4" cy="-2" r="6" />
      {Array.from({ length: 12 }, (_, spikeIndex) => (
        <g key={`spike-${spikeIndex}`} transform={`rotate(${spikeIndex * 30})`}>
          <path className="virus-spike" d="M0 -28 L4 -44 L0 -58 L-4 -44 Z" />
          <circle className="virus-tip" cx="0" cy="-60" r="4.5" />
        </g>
      ))}
    </g>
  );
}

function renderBacteriaRod({ x, y, scale, rotate, tone }, index) {
  return (
    <g
      key={`event-bacteria-${x}-${y}-${index}`}
      className={`event-bacteria event-bacteria-${tone}`}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <rect className="bacteria-body" x="-44" y="-16" width="88" height="32" rx="16" />
      <path className="bacteria-band" d="M-24 -14 C-18 -6 -18 6 -24 14" />
      <path className="bacteria-band" d="M4 -15 C10 -6 10 6 4 15" />
      <path className="bacteria-band" d="M28 -14 C34 -6 34 6 28 14" />
      <ellipse className="bacteria-core" cx="-8" cy="0" rx="20" ry="10" />
      <circle className="bacteria-dot" cx="20" cy="-2" r="5.5" />
      <circle className="bacteria-speck" cx="-18" cy="5" r="2.4" />
      <circle className="bacteria-speck" cx="8" cy="-6" r="2" />
      <path className="bacteria-tail" d="M44 0 C62 -6 74 -18 88 -34" />
      <path className="bacteria-tail" d="M-44 0 C-62 8 -74 22 -88 36" />
    </g>
  );
}

function renderMutationStage({ x, y, stage, scale, rotate, tone }, index) {
  const widths = [22, 28, 34, 42, 52];
  const heights = [16, 20, 24, 30, 36];
  const spikeCounts = [0, 2, 4, 6, 8];

  return (
    <g
      key={`event-mutation-stage-${x}-${y}-${index}`}
      className={`event-mutation-stage event-mutation-stage-${tone} event-mutation-stage-${stage}`}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <ellipse className="mutation-shell" cx="0" cy="0" rx={widths[stage]} ry={heights[stage]} />
      <ellipse
        className="mutation-halo"
        cx="2"
        cy="0"
        rx={widths[stage] * 0.74}
        ry={heights[stage] * 0.68}
      />
      <ellipse className="mutation-core" cx="-4" cy="-2" rx={widths[stage] * 0.36} ry={heights[stage] * 0.34} />
      <circle className="mutation-dot" cx={widths[stage] * 0.28} cy="-2" r={Math.max(3, stage + 2)} />
      <path
        className="mutation-vein"
        d={`M${-widths[stage] * 0.34} ${-heights[stage] * 0.1} C-4 ${-heights[stage] * 0.34}, ${widths[stage] * 0.22} ${-heights[stage] * 0.18}, ${widths[stage] * 0.34} ${heights[stage] * 0.08}`}
      />
      {spikeCounts[stage] > 0 &&
        Array.from({ length: spikeCounts[stage] }, (_, spikeIndex) => {
          const angle = (360 / spikeCounts[stage]) * spikeIndex;
          return (
            <g key={`mutation-spike-${spikeIndex}`} transform={`rotate(${angle})`}>
              <path
                className="mutation-spike"
                d={`M0 ${-heights[stage]} L3 ${-(heights[stage] + 12)} L0 ${-(heights[stage] + 22)} L-3 ${-(heights[stage] + 12)} Z`}
              />
            </g>
          );
        })}
      <path className="mutation-tail" d={`M${widths[stage]} 2 C${widths[stage] + 18} -2, ${widths[stage] + 26} -12, ${widths[stage] + 34} -24`} />
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
          <path
            className="event-current event-current-emphasis"
            d="M1032 122 C1166 132, 1290 184, 1366 282 C1432 366, 1440 476, 1392 568"
          />
          <path
            className="event-current event-current-emphasis"
            d="M126 760 C198 714, 292 706, 374 744 C448 780, 500 846, 516 930"
          />
        </g>

        <g className="event-aura-fields">
          <ellipse className="event-aura" cx="282" cy="236" rx="198" ry="128" />
          <ellipse className="event-aura" cx="1288" cy="626" rx="246" ry="154" />
          <ellipse className="event-aura" cx="356" cy="1108" rx="208" ry="132" />
          <ellipse className="event-aura event-aura-strong" cx="1294" cy="346" rx="320" ry="196" />
          <ellipse className="event-aura event-aura-strong" cx="246" cy="862" rx="276" ry="172" />
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
          {Array.from({ length: 52 }, (_, index) => {
            const x = 226 + (index % 6) * 70 + (index % 2) * 10;
            const y = 176 + Math.floor(index / 6) * 26;
            return <circle key={`event-particle-top-${index}`} className="event-particle" cx={x} cy={y} r={(index % 3) + 2.6} />;
          })}
          {Array.from({ length: 58 }, (_, index) => {
            const x = 970 + (index % 7) * 62 + (index % 2) * 12;
            const y = 454 + Math.floor(index / 7) * 28;
            return <circle key={`event-particle-mid-${index}`} className="event-particle event-particle-soft" cx={x} cy={y} r={(index % 4) + 2.2} />;
          })}
          {Array.from({ length: 46 }, (_, index) => {
            const x = 196 + (index % 8) * 58;
            const y = 888 + Math.floor(index / 8) * 24;
            return <circle key={`event-particle-bottom-${index}`} className="event-particle" cx={x} cy={y} r={(index % 3) + 2.4} />;
          })}
        </g>

        <g className="event-microbe-field">
          {eventMicrobes.map(renderMicrobe)}
          {virusBursts.map(renderVirusBurst)}
          {bacteriaRods.map(renderBacteriaRod)}
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
          {eventRings.map((ring, index) => (
            <circle
              key={`event-ring-${ring.cx}-${ring.cy}-${index}`}
              className={`event-ring event-ring-${ring.tone}`}
              cx={ring.cx}
              cy={ring.cy}
              r={ring.r}
            />
          ))}
        </g>

        <g className="event-timeline-signals">
          <path
            className="event-signal event-signal-main"
            d="M1062 384 C1122 426, 1166 482, 1182 556 C1200 636, 1196 712, 1170 788 C1146 860, 1146 940, 1182 1028"
          />
          <path
            className="event-signal event-signal-soft"
            d="M304 702 C350 748, 386 806, 396 878 C406 952, 400 1028, 366 1104"
          />
          {eventGridPulses.map((pulse, index) => (
            <g
              key={`event-pulse-${pulse.x}-${pulse.y}-${index}`}
              className="event-pulse"
              transform={`translate(${pulse.x} ${pulse.y})`}
            >
              <circle className="event-pulse-ring" cx="0" cy="0" r="16" />
              <circle className="event-pulse-core" cx="0" cy="0" r="5.5" />
            </g>
          ))}
        </g>

        <g className="event-mutation-field">
          {mutationChains.map((chain) => (
            <g key={chain.className} className={chain.className}>
              <path className="event-mutation-path" d={chain.path} />
              {chain.nodes.map(renderMutationStage)}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default memo(EventsVisual);

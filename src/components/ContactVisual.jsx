import { memo } from "react";

const journalLines = Array.from({ length: 21 }, (_, index) => 88 + index * 54);

const labelCards = [
  { x: 88, y: 116, width: 168, height: 70, rotate: -4, tone: "paper", rules: 3 },
  { x: 1292, y: 148, width: 182, height: 74, rotate: 5, tone: "paper", rules: 3 },
  { x: 128, y: 1094, width: 176, height: 72, rotate: -3, tone: "note", rules: 4 },
  { x: 1256, y: 1088, width: 188, height: 78, rotate: 4, tone: "note", rules: 4 },
];

const tapeStrips = [
  { x: 108, y: 108, width: 58, height: 18, rotate: -8 },
  { x: 1336, y: 138, width: 62, height: 18, rotate: 10 },
  { x: 156, y: 1080, width: 54, height: 18, rotate: -6 },
  { x: 1292, y: 1074, width: 58, height: 18, rotate: 9 },
];

const stampRings = [
  { cx: 1366, cy: 304, r: 62, tone: "olive" },
  { cx: 246, cy: 1088, r: 56, tone: "rose" },
  { cx: 1356, cy: 748, r: 62, tone: "sage" },
  { cx: 238, cy: 386, r: 48, tone: "amber" },
];

const leafSprigs = [
  {
    className: "contact-sprig-left",
    stem: "M116 74 C152 234, 166 376, 174 546 C182 710, 176 884, 146 1142",
    leaves: [
      { x: 142, y: 160, rotate: -42, scale: 0.86, tone: "sage" },
      { x: 164, y: 286, rotate: 28, scale: 0.8, tone: "olive" },
      { x: 176, y: 432, rotate: -34, scale: 0.9, tone: "sage" },
      { x: 180, y: 586, rotate: 26, scale: 0.78, tone: "mint" },
      { x: 176, y: 754, rotate: -36, scale: 0.92, tone: "olive" },
      { x: 164, y: 926, rotate: 24, scale: 0.82, tone: "sage" },
      { x: 146, y: 1088, rotate: -26, scale: 0.76, tone: "mint" },
    ],
  },
  {
    className: "contact-sprig-right",
    stem: "M1388 86 C1352 244, 1328 390, 1322 558 C1312 716, 1320 890, 1360 1142",
    leaves: [
      { x: 1356, y: 170, rotate: 34, scale: 0.84, tone: "olive" },
      { x: 1334, y: 306, rotate: -30, scale: 0.8, tone: "sage" },
      { x: 1320, y: 456, rotate: 30, scale: 0.92, tone: "mint" },
      { x: 1314, y: 628, rotate: -24, scale: 0.82, tone: "olive" },
      { x: 1320, y: 806, rotate: 32, scale: 0.88, tone: "sage" },
      { x: 1334, y: 970, rotate: -28, scale: 0.78, tone: "olive" },
      { x: 1354, y: 1104, rotate: 26, scale: 0.74, tone: "mint" },
    ],
  },
];

const flowerClusters = [
  {
    x: 1280,
    y: 144,
    scale: 0.82,
    rotate: 8,
    petals: [
      { angle: 0, length: 46 },
      { angle: 52, length: 52 },
      { angle: 104, length: 44 },
      { angle: 156, length: 48 },
      { angle: 208, length: 50 },
      { angle: 260, length: 46 },
      { angle: 312, length: 52 },
    ],
  },
  {
    x: 300,
    y: 976,
    scale: 0.74,
    rotate: -10,
    petals: [
      { angle: 10, length: 40 },
      { angle: 72, length: 44 },
      { angle: 132, length: 38 },
      { angle: 194, length: 42 },
      { angle: 254, length: 40 },
      { angle: 314, length: 44 },
    ],
  },
  {
    x: 1420,
    y: 584,
    scale: 0.64,
    rotate: 14,
    petals: [
      { angle: 0, length: 34 },
      { angle: 60, length: 36 },
      { angle: 120, length: 32 },
      { angle: 180, length: 34 },
      { angle: 240, length: 36 },
      { angle: 300, length: 32 },
    ],
  },
];

const fernFronds = [
  {
    x: 1276,
    y: 1168,
    rotate: -8,
    scale: 0.86,
    stem: "M0 0 C36 -66, 78 -116, 132 -164 C174 -202, 220 -234, 272 -258",
  },
  {
    x: 252,
    y: 1164,
    rotate: 12,
    scale: 0.76,
    stem: "M0 0 C52 -58, 108 -100, 172 -136 C224 -164, 286 -186, 348 -194",
  },
];

const fossilImprints = [
  { x: 1398, y: 878, scale: 0.82, rotate: 8, type: "shell" },
  { x: 248, y: 224, scale: 0.74, rotate: -12, type: "fern" },
  { x: 250, y: 1114, scale: 0.78, rotate: -6, type: "ammonite" },
  { x: 1454, y: 486, scale: 0.62, rotate: 12, type: "shell" },
  { x: 1402, y: 678, scale: 0.74, rotate: -10, type: "shell" },
  { x: 236, y: 474, scale: 0.68, rotate: 14, type: "ammonite" },
  { x: 1376, y: 356, scale: 0.76, rotate: -6, type: "dinoSkull" },
  { x: 238, y: 1028, scale: 0.84, rotate: 8, type: "dinoSpine" },
  { x: 1428, y: 1038, scale: 0.64, rotate: -12, type: "dinoFoot" },
];

const scribbleNotes = [
  { x: 352, y: 132, rotate: -3, width: 124 },
  { x: 1228, y: 122, rotate: 4, width: 118 },
  { x: 1446, y: 636, rotate: -2, width: 120 },
  { x: 432, y: 1144, rotate: 3, width: 132 },
  { x: 1048, y: 186, rotate: -4, width: 102 },
  { x: 162, y: 556, rotate: 5, width: 104 },
  { x: 1418, y: 882, rotate: -3, width: 108 },
];

const specimenSketches = [
  {
    x: 1458,
    y: 546,
    rotate: 8,
    scale: 0.72,
    path: "M0 0 C-12 -24 -24 -50 -30 -82 C-2 -78 24 -64 46 -40 C64 -18 76 8 82 32 C42 28 16 18 0 0 Z",
  },
  {
    x: 172,
    y: 678,
    rotate: -10,
    scale: 0.68,
    path: "M0 0 C20 -28 54 -54 92 -74 C92 -38 78 -10 56 18 C34 46 8 62 -20 72 C-16 42 -8 18 0 0 Z",
  },
  {
    x: 1438,
    y: 260,
    rotate: 4,
    scale: 0.6,
    path: "M0 0 C16 -14 42 -28 74 -38 C66 -10 54 8 32 28 C10 48 -14 58 -38 62 C-30 30 -18 12 0 0 Z",
  },
  {
    x: 158,
    y: 786,
    rotate: -6,
    scale: 0.58,
    path: "M0 0 C-16 -18 -34 -42 -42 -74 C-8 -66 22 -46 44 -16 C62 8 72 30 76 56 C42 48 18 30 0 0 Z",
  },
];

const seedPods = [
  { x: 1456, y: 748, rotate: 18, scale: 0.82 },
  { x: 164, y: 388, rotate: -14, scale: 0.74 },
];

const inkMarks = [
  { x: 360, y: 188, r: 18, type: "blot" },
  { x: 1288, y: 104, r: 12, type: "blot" },
  { x: 1462, y: 672, r: 14, type: "blot" },
  { x: 1414, y: 640, type: "swirl" },
  { x: 246, y: 764, type: "swirl" },
  { x: 1096, y: 302, r: 10, type: "blot" },
  { x: 186, y: 1026, type: "swirl" },
];

const journalTools = [
  { type: "magnifier", x: 104, y: 104, rotate: 22, scale: 1.38 },
  { type: "forceps", x: 98, y: 122, rotate: -18, scale: 1.34 },
  { type: "ruler", x: 118, y: 138, rotate: 122, scale: 1.44 },
  { type: "pen", x: 102, y: 122, rotate: -32, scale: 1.38 },
];

function renderLeaf({ x, y, rotate, scale, tone }, index, className) {
  return (
    <g
      key={`${className}-leaf-${x}-${y}-${index}`}
      className={`contact-pressed-leaf contact-pressed-leaf-${tone}`}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <path
        className="contact-leaf-body"
        d="M0 0 C-26 -20 -58 -54 -70 -98 C-38 -92 -10 -72 10 -48 C36 -18 50 14 48 48 C18 40 -6 26 0 0 Z"
      />
      <path className="contact-leaf-vein" d="M-48 -84 C-24 -54 0 -20 34 34" />
      <path className="contact-leaf-vein contact-leaf-vein-soft" d="M-26 -58 C-12 -44 2 -30 18 -8" />
      <path className="contact-leaf-vein contact-leaf-vein-soft" d="M-6 -30 C6 -18 18 -2 26 16" />
    </g>
  );
}

function renderFlower(cluster, index) {
  return (
    <g
      key={`contact-flower-${index}`}
      className="contact-pressed-flower"
      transform={`translate(${cluster.x} ${cluster.y}) rotate(${cluster.rotate}) scale(${cluster.scale})`}
    >
      {cluster.petals.map((petal, petalIndex) => (
        <g key={`contact-flower-petal-${index}-${petalIndex}`} transform={`rotate(${petal.angle})`}>
          <path
            className="contact-flower-petal"
            d={`M0 0 C8 ${-petal.length * 0.14}, 18 ${-petal.length * 0.62}, 0 ${-petal.length} C-18 ${-petal.length * 0.62}, -8 ${-petal.length * 0.14}, 0 0 Z`}
          />
        </g>
      ))}
      <circle className="contact-flower-center" cx="0" cy="0" r="16" />
    </g>
  );
}

function renderLabel(card, index) {
  return (
    <g
      key={`contact-label-${index}`}
      className={`contact-label-card contact-label-card-${card.tone}`}
      transform={`translate(${card.x} ${card.y}) rotate(${card.rotate})`}
    >
      <rect className="contact-label-paper" x="0" y="0" width={card.width} height={card.height} rx="12" />
      <circle className="contact-label-pin" cx="16" cy="16" r="4.6" />
      {Array.from({ length: card.rules }, (_, lineIndex) => (
        <line
          key={`contact-label-rule-${index}-${lineIndex}`}
          className={`contact-label-rule${lineIndex === card.rules - 1 ? " contact-label-rule-short" : ""}`}
          x1="18"
          y1={24 + lineIndex * 16}
          x2={lineIndex === card.rules - 1 ? card.width - 60 : card.width - 18}
          y2={24 + lineIndex * 16}
        />
      ))}
    </g>
  );
}

function renderTapeStrip(tape, index) {
  return (
    <g
      key={`contact-tape-${index}`}
      className="contact-tape-strip"
      transform={`translate(${tape.x} ${tape.y}) rotate(${tape.rotate})`}
    >
      <path
        className="contact-tape-body"
        d={`M0 0 L${tape.width} 0 L${tape.width - 6} ${tape.height} L6 ${tape.height} Z`}
      />
    </g>
  );
}

function renderFern(frond, index) {
  return (
    <g
      key={`contact-fern-${index}`}
      className="contact-fern-frond"
      transform={`translate(${frond.x} ${frond.y}) rotate(${frond.rotate}) scale(${frond.scale})`}
    >
      <path className="contact-fern-stem" d={frond.stem} />
      {Array.from({ length: 8 }, (_, leafIndex) => {
        const baseX = 18 + leafIndex * 36;
        const baseY = -24 - leafIndex * 28;
        return (
          <g key={`contact-fern-leaf-${index}-${leafIndex}`}>
            <path className="contact-fern-leaf" d={`M${baseX} ${baseY} C${baseX - 26} ${baseY - 10}, ${baseX - 46} ${baseY - 20}, ${baseX - 70} ${baseY - 36}`} />
            <path className="contact-fern-leaf" d={`M${baseX + 8} ${baseY + 8} C${baseX + 32} ${baseY + 2}, ${baseX + 54} ${baseY - 10}, ${baseX + 80} ${baseY - 24}`} />
          </g>
        );
      })}
    </g>
  );
}

function renderFossil(imprint, index) {
  if (imprint.type === "shell") {
    return (
      <g
        key={`contact-fossil-${index}`}
        className="contact-fossil-imprint contact-fossil-shell"
        transform={`translate(${imprint.x} ${imprint.y}) rotate(${imprint.rotate}) scale(${imprint.scale})`}
      >
        <ellipse className="contact-fossil-shadow" cx="0" cy="0" rx="72" ry="52" />
        <path className="contact-fossil-outline" d="M-46 14 C-40 -36 -2 -74 52 -74 C58 -34 40 8 4 44 C-12 58 -28 66 -46 72 C-46 48 -46 30 -46 14 Z" />
        <path className="contact-fossil-rib" d="M-34 18 C-8 6 18 -10 42 -44" />
        <path className="contact-fossil-rib" d="M-28 34 C-2 24 16 10 32 -14" />
        <path className="contact-fossil-rib" d="M-24 50 C-2 40 12 28 20 14" />
      </g>
    );
  }

  if (imprint.type === "ammonite") {
    return (
      <g
        key={`contact-fossil-${index}`}
        className="contact-fossil-imprint contact-fossil-ammonite"
        transform={`translate(${imprint.x} ${imprint.y}) rotate(${imprint.rotate}) scale(${imprint.scale})`}
      >
        <circle className="contact-fossil-shadow" cx="0" cy="0" r="72" />
        <path className="contact-fossil-outline" d="M48 8 C48 38 26 60 -2 60 C-34 60 -58 38 -58 8 C-58 -22 -36 -44 -8 -44 C18 -44 34 -26 34 -4 C34 16 20 30 2 30 C-12 30 -24 18 -24 2 C-24 -12 -14 -22 -2 -22 C8 -22 16 -16 16 -6 C16 2 12 8 4 10" />
        <circle className="contact-fossil-hole" cx="0" cy="-4" r="3.5" />
      </g>
    );
  }

  if (imprint.type === "dinoSkull") {
    return (
      <g
        key={`contact-fossil-${index}`}
        className="contact-fossil-imprint contact-fossil-dino"
        transform={`translate(${imprint.x} ${imprint.y}) rotate(${imprint.rotate}) scale(${imprint.scale})`}
      >
        <ellipse className="contact-fossil-shadow" cx="0" cy="0" rx="90" ry="54" />
        <path className="contact-fossil-outline" d="M-70 12 C-76 -24 -52 -56 -10 -68 C40 -82 92 -64 104 -28 C112 -4 98 20 70 28 C50 34 26 36 8 28 L-8 52 L-20 26 C-44 22 -64 22 -70 12 Z" />
        <circle className="contact-fossil-hole" cx="18" cy="-18" r="10" />
        <circle className="contact-fossil-hole" cx="-24" cy="-8" r="8" />
        <path className="contact-fossil-rib" d="M40 12 L88 4" />
        <path className="contact-fossil-rib" d="M-40 18 C-20 10 0 8 22 12" />
      </g>
    );
  }

  if (imprint.type === "dinoSpine") {
    return (
      <g
        key={`contact-fossil-${index}`}
        className="contact-fossil-imprint contact-fossil-dino"
        transform={`translate(${imprint.x} ${imprint.y}) rotate(${imprint.rotate}) scale(${imprint.scale})`}
      >
        <ellipse className="contact-fossil-shadow" cx="0" cy="0" rx="124" ry="48" />
        <path className="contact-fossil-outline" d="M-92 0 C-58 -12 -22 -16 14 -14 C44 -12 74 -4 102 8" />
        {[-62, -26, 8, 42, 74].map((x, ribIndex) => (
          <g key={`dino-spine-${ribIndex}`}>
            <ellipse className="contact-fossil-bone" cx={x} cy={x < 20 ? -2 : 4} rx="18" ry="12" />
            <path className="contact-fossil-rib" d={`M${x} 8 C${x - 8} 26, ${x - 6} 42, ${x + 2} 56`} />
          </g>
        ))}
      </g>
    );
  }

  if (imprint.type === "dinoFoot") {
    return (
      <g
        key={`contact-fossil-${index}`}
        className="contact-fossil-imprint contact-fossil-dino"
        transform={`translate(${imprint.x} ${imprint.y}) rotate(${imprint.rotate}) scale(${imprint.scale})`}
      >
        <ellipse className="contact-fossil-shadow" cx="0" cy="0" rx="82" ry="52" />
        <path className="contact-fossil-outline" d="M0 48 C-14 20 -16 -6 -8 -30 L-34 -70 L-12 -52 L0 -82 L12 -50 L36 -68 L18 -28 C28 -8 28 18 16 48 Z" />
      </g>
    );
  }

  return (
    <g
      key={`contact-fossil-${index}`}
      className="contact-fossil-imprint contact-fossil-fern"
      transform={`translate(${imprint.x} ${imprint.y}) rotate(${imprint.rotate}) scale(${imprint.scale})`}
    >
      <ellipse className="contact-fossil-shadow" cx="0" cy="0" rx="86" ry="44" />
      <path className="contact-fossil-outline" d="M-8 58 C-2 30 4 8 12 -26 C18 -54 20 -72 18 -94" />
      {Array.from({ length: 6 }, (_, leafIndex) => {
        const y = 34 - leafIndex * 24;
        return (
          <g key={`contact-fossil-fern-leaf-${leafIndex}`}>
            <path className="contact-fossil-rib" d={`M10 ${y} C-14 ${y - 10}, -30 ${y - 18}, -50 ${y - 30}`} />
            <path className="contact-fossil-rib" d={`M12 ${y - 8} C34 ${y - 16}, 54 ${y - 24}, 74 ${y - 36}`} />
          </g>
        );
      })}
    </g>
  );
}

function renderScribble(note, index) {
  return (
    <g
      key={`contact-scribble-${index}`}
      className="contact-scribble-note"
      transform={`translate(${note.x} ${note.y}) rotate(${note.rotate})`}
    >
      <path className="contact-scribble-line" d={`M0 0 C${note.width * 0.1} -8, ${note.width * 0.18} 12, ${note.width * 0.28} 2 C${note.width * 0.38} -8, ${note.width * 0.48} 14, ${note.width * 0.58} 0 C${note.width * 0.68} -10, ${note.width * 0.78} 12, ${note.width * 0.88} 2 C${note.width * 0.94} -4, ${note.width * 0.98} 6, ${note.width} 0`} />
      <path className="contact-scribble-line contact-scribble-line-soft" d={`M6 18 C${note.width * 0.12} 10, ${note.width * 0.22} 24, ${note.width * 0.34} 14 C${note.width * 0.46} 6, ${note.width * 0.56} 24, ${note.width * 0.68} 12 C${note.width * 0.8} 4, ${note.width * 0.9} 22, ${note.width - 4} 14`} />
      <path className="contact-scribble-line contact-scribble-line-soft" d={`M10 34 C${note.width * 0.14} 28, ${note.width * 0.26} 42, ${note.width * 0.38} 30 C${note.width * 0.5} 20, ${note.width * 0.62} 40, ${note.width * 0.74} 28 C${note.width * 0.84} 20, ${note.width * 0.92} 34, ${note.width - 2} 26`} />
    </g>
  );
}

function renderSpecimenSketch(sketch, index) {
  return (
    <g
      key={`contact-specimen-sketch-${index}`}
      className="contact-specimen-sketch"
      transform={`translate(${sketch.x} ${sketch.y}) rotate(${sketch.rotate}) scale(${sketch.scale})`}
    >
      <path className="contact-specimen-sketch-outline" d={sketch.path} />
      <path className="contact-specimen-sketch-vein" d="M-2 -4 C12 -20 26 -38 42 -62" />
      <path className="contact-specimen-sketch-vein" d="M8 10 C26 0 46 -14 64 -30" />
    </g>
  );
}

function renderSeedPod(pod, index) {
  return (
    <g
      key={`contact-seed-pod-${index}`}
      className="contact-seed-pod"
      transform={`translate(${pod.x} ${pod.y}) rotate(${pod.rotate}) scale(${pod.scale})`}
    >
      <path className="contact-seed-pod-body" d="M0 0 C22 -26 42 -60 48 -96 C12 -86 -18 -64 -38 -34 C-56 -6 -64 30 -62 64 C-30 50 -10 30 0 0 Z" />
      <path className="contact-seed-pod-vein" d="M-44 54 C-22 18 -4 -12 20 -62" />
    </g>
  );
}

function renderInkMark(mark, index) {
  if (mark.type === "swirl") {
    return (
      <g
        key={`contact-ink-${index}`}
        className="contact-ink-mark contact-ink-swirl"
        transform={`translate(${mark.x} ${mark.y})`}
      >
        <path d="M0 0 C18 -22, 48 -18, 52 4 C56 26 28 34 10 20 C-8 6 0 -18 22 -26 C44 -34 70 -24 86 -6" />
      </g>
    );
  }

  return (
    <g
      key={`contact-ink-${index}`}
      className="contact-ink-mark contact-ink-blot"
      transform={`translate(${mark.x} ${mark.y})`}
    >
      <circle className="contact-ink-blot-core" cx="0" cy="0" r={mark.r} />
      <circle className="contact-ink-blot-speck" cx={mark.r * 0.9} cy={-mark.r * 0.6} r={Math.max(3, mark.r * 0.24)} />
      <circle className="contact-ink-blot-speck" cx={-mark.r * 0.8} cy={mark.r * 0.72} r={Math.max(2.4, mark.r * 0.18)} />
    </g>
  );
}

function renderJournalTool(tool, index) {
  if (tool.type === "magnifier") {
    return (
      <g
        key={`contact-tool-${tool.type}-${index}`}
        className="contact-journal-tool"
        transform={`translate(${tool.x} ${tool.y}) rotate(${tool.rotate}) scale(${tool.scale})`}
      >
        <circle className="contact-tool-glass" cx="-8" cy="-10" r="42" />
        <circle className="contact-tool-metal" cx="-8" cy="-10" r="48" />
        <circle className="contact-tool-metal-soft" cx="-8" cy="-10" r="34" />
        <path className="contact-tool-metal" d="M26 24 L88 88" />
        <path className="contact-tool-metal-soft" d="M36 34 L96 94" />
        <circle className="contact-tool-joint" cx="28" cy="26" r="7" />
      </g>
    );
  }

  if (tool.type === "forceps") {
    return (
      <g
        key={`contact-tool-${tool.type}-${index}`}
        className="contact-journal-tool"
        transform={`translate(${tool.x} ${tool.y}) rotate(${tool.rotate}) scale(${tool.scale})`}
      >
        <path className="contact-tool-metal" d="M-28 -96 C-12 -64 -6 -28 -4 76" />
        <path className="contact-tool-metal" d="M24 -96 C8 -64 4 -28 2 76" />
        <path className="contact-tool-metal-soft" d="M-2 -58 C0 -20 0 18 -2 62" />
        <path className="contact-tool-metal-soft" d="M-14 -84 C-10 -68 -6 -50 -4 -34" />
        <path className="contact-tool-metal-soft" d="M16 -84 C10 -66 6 -48 4 -30" />
        <path className="contact-tool-tip" d="M-5 76 L-11 108 L1 92" />
        <path className="contact-tool-tip" d="M3 76 L9 108 L-3 92" />
      </g>
    );
  }

  if (tool.type === "ruler") {
    return (
      <g
        key={`contact-tool-${tool.type}-${index}`}
        className="contact-journal-tool"
        transform={`translate(${tool.x} ${tool.y}) rotate(${tool.rotate}) scale(${tool.scale})`}
      >
        <rect className="contact-tool-board" x="-18" y="-96" width="36" height="192" rx="8" />
        {Array.from({ length: 15 }, (_, tick) => {
          const y = -84 + tick * 12;
          const longTick = tick % 3 === 0;
          return (
            <line
              key={`contact-ruler-tick-${tick}`}
              className="contact-tool-mark"
              x1="-18"
              y1={y}
              x2={longTick ? "10" : "0"}
              y2={y}
            />
          );
        })}
        <circle className="contact-tool-joint" cx="0" cy="-74" r="3.5" />
        <circle className="contact-tool-joint" cx="0" cy="74" r="3.5" />
      </g>
    );
  }

  return (
    <g
      key={`contact-tool-${tool.type}-${index}`}
      className="contact-journal-tool"
      transform={`translate(${tool.x} ${tool.y}) rotate(${tool.rotate}) scale(${tool.scale})`}
    >
      <path className="contact-tool-fill" d="M-10 -104 L18 -78 L6 24 L-10 118 L-24 112 L-10 18 Z" />
      <path className="contact-tool-metal" d="M-8 -100 L18 -76" />
      <path className="contact-tool-metal" d="M-6 22 L-18 110" />
      <path className="contact-tool-tip" d="M-10 -104 L-1 -132 L18 -76 Z" />
      <path className="contact-tool-tip" d="M-2 -94 L6 -108 L12 -84 Z" />
      <path className="contact-tool-mark" d="M-6 -42 L4 -38" />
      <path className="contact-tool-mark" d="M-10 -12 L0 -8" />
      <path className="contact-tool-mark" d="M-12 18 L-2 22" />
      <path className="contact-tool-mark" d="M-16 48 L-6 52" />
    </g>
  );
}

function ContactVisual() {
  return (
    <div className="contact-page-visual" aria-hidden="true">
      <svg
        className="contact-visual-svg"
        viewBox="0 0 1600 1280"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="contactStem" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7a8f64" stopOpacity="0.76" />
            <stop offset="100%" stopColor="#4a5f42" stopOpacity="0.92" />
          </linearGradient>
          <radialGradient id="contactStamp" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f9f2e4" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#d9ccb5" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="contact-journal-rules">
          {journalLines.map((y, index) => (
            <line
              key={`contact-rule-${index}`}
              className="contact-rule-line"
              x1="52"
              y1={y}
              x2="1544"
              y2={y}
            />
          ))}
          <line className="contact-margin-line" x1="118" y1="64" x2="118" y2="1208" />
        </g>

        <g className="contact-stamp-field">
          {stampRings.map((ring, index) => (
            <g
              key={`contact-stamp-${index}`}
              className={`contact-stamp-ring contact-stamp-ring-${ring.tone}`}
              transform={`translate(${ring.cx} ${ring.cy})`}
            >
              <circle className="contact-stamp-glow" cx="0" cy="0" r={ring.r + 12} />
              <circle className="contact-stamp-outer" cx="0" cy="0" r={ring.r} />
              <circle className="contact-stamp-inner" cx="0" cy="0" r={ring.r - 18} />
            </g>
          ))}
        </g>

        <g className="contact-specimen-labels">{labelCards.map(renderLabel)}</g>
        <g className="contact-tape-field">{tapeStrips.map(renderTapeStrip)}</g>

        <g className="contact-sprig-field">
          {leafSprigs.map((sprig) => (
            <g key={sprig.className} className={sprig.className}>
              <path className="contact-specimen-stem" d={sprig.stem} />
              {sprig.leaves.map((leaf, leafIndex) =>
                renderLeaf(leaf, leafIndex, sprig.className)
              )}
            </g>
          ))}
        </g>

        <g className="contact-flower-field">{flowerClusters.map(renderFlower)}</g>
        <g className="contact-fern-field">{fernFronds.map(renderFern)}</g>
        <g className="contact-seed-pod-field">{seedPods.map(renderSeedPod)}</g>
        <g className="contact-fossil-field">{fossilImprints.map(renderFossil)}</g>
        <g className="contact-specimen-sketch-field">
          {specimenSketches.map(renderSpecimenSketch)}
        </g>

        <g className="contact-annotation-field">
          <path className="contact-annotation-line" d="M320 250 C432 286, 520 334, 592 420" />
          <path className="contact-annotation-line" d="M1210 286 C1146 350, 1094 434, 1068 520" />
          <path className="contact-annotation-line" d="M392 1008 C530 956, 648 930, 770 932" />
          <path className="contact-annotation-line" d="M1012 236 C1116 252, 1200 274, 1260 322" />
          <circle className="contact-annotation-dot" cx="598" cy="424" r="5" />
          <circle className="contact-annotation-dot" cx="1066" cy="524" r="5" />
          <circle className="contact-annotation-dot" cx="772" cy="932" r="5" />
          <circle className="contact-annotation-dot" cx="1260" cy="324" r="5" />
        </g>

        <g className="contact-scribble-field">{scribbleNotes.map(renderScribble)}</g>
        <g className="contact-ink-field">{inkMarks.map(renderInkMark)}</g>
      </svg>

      <svg
        className="contact-tool-float contact-tool-float-forceps"
        viewBox="0 0 180 220"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="contact-tool-field">
          {journalTools.filter((tool) => tool.type === "forceps").map(renderJournalTool)}
        </g>
      </svg>

      <svg
        className="contact-tool-float contact-tool-float-magnifier"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="contact-tool-field">
          {journalTools.filter((tool) => tool.type === "magnifier").map(renderJournalTool)}
        </g>
      </svg>

      <svg
        className="contact-tool-float contact-tool-float-ruler"
        viewBox="0 0 220 260"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="contact-tool-field">
          {journalTools.filter((tool) => tool.type === "ruler").map(renderJournalTool)}
        </g>
      </svg>

      <svg
        className="contact-tool-float contact-tool-float-pen"
        viewBox="0 0 180 240"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="contact-tool-field">
          {journalTools.filter((tool) => tool.type === "pen").map(renderJournalTool)}
        </g>
      </svg>

      <svg
        className="contact-side-gallery contact-side-gallery-left"
        viewBox="0 0 280 980"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="contactSideClipLeftTop">
            <rect x="12" y="12" width="164" height="186" rx="12" />
          </clipPath>
          <clipPath id="contactSideClipLeftMid">
            <rect x="12" y="12" width="160" height="210" rx="12" />
          </clipPath>
          <clipPath id="contactSideClipLeftBot">
            <rect x="12" y="12" width="152" height="186" rx="12" />
          </clipPath>
        </defs>
        <g className="contact-side-card" transform="translate(18 48) rotate(-3)">
          <rect className="contact-side-paper" x="0" y="0" width="188" height="210" rx="16" />
          <rect className="contact-side-paper-inner" x="12" y="12" width="164" height="186" rx="12" />
          <circle className="contact-side-pin" cx="16" cy="16" r="4.6" />
          <g clipPath="url(#contactSideClipLeftTop)">
            <g className="contact-fossil-imprint contact-fossil-ammonite" transform="translate(96 98) scale(0.9)">
              <circle className="contact-fossil-shadow" cx="0" cy="0" r="72" />
              <circle className="contact-fossil-plane" cx="0" cy="0" r="58" />
              <path className="contact-fossil-outline" d="M48 8 C48 38 26 60 -2 60 C-34 60 -58 38 -58 8 C-58 -22 -36 -44 -8 -44 C18 -44 34 -26 34 -4 C34 16 20 30 2 30 C-12 30 -24 18 -24 2 C-24 -12 -14 -22 -2 -22 C8 -22 16 -16 16 -6 C16 2 12 8 4 10" />
              <circle className="contact-fossil-hole" cx="0" cy="-4" r="3.8" />
            </g>
          </g>
          <g className="contact-side-caption" transform="translate(24 148)">
            <line className="contact-side-caption-line" x1="0" y1="0" x2="88" y2="0" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="18" x2="130" y2="18" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="34" x2="114" y2="34" />
          </g>
        </g>

        <g className="contact-side-card" transform="translate(24 320) rotate(4)">
          <rect className="contact-side-paper" x="0" y="0" width="184" height="234" rx="16" />
          <rect className="contact-side-paper-inner" x="12" y="12" width="160" height="210" rx="12" />
          <circle className="contact-side-pin" cx="16" cy="16" r="4.6" />
          <g clipPath="url(#contactSideClipLeftMid)">
            <g className="contact-fossil-imprint contact-fossil-dino" transform="translate(84 92) scale(0.72)">
              <ellipse className="contact-fossil-shadow" cx="0" cy="0" rx="124" ry="48" />
              <path className="contact-fossil-plane" d="M-92 0 C-58 -12 -22 -16 14 -14 C44 -12 74 -4 102 8 C74 16 42 20 10 18 C-28 16 -62 10 -92 0 Z" />
              <path className="contact-fossil-outline" d="M-92 0 C-58 -12 -22 -16 14 -14 C44 -12 74 -4 102 8" />
              <ellipse className="contact-fossil-bone" cx="-62" cy="-2" rx="18" ry="12" />
              <ellipse className="contact-fossil-bone" cx="-26" cy="0" rx="18" ry="12" />
              <ellipse className="contact-fossil-bone" cx="8" cy="2" rx="18" ry="12" />
              <ellipse className="contact-fossil-bone" cx="42" cy="5" rx="18" ry="12" />
              <ellipse className="contact-fossil-bone" cx="74" cy="8" rx="18" ry="12" />
              <ellipse className="contact-fossil-bone" cx="102" cy="12" rx="14" ry="10" />
              <ellipse className="contact-fossil-bone" cx="-88" cy="-4" rx="12" ry="8" />
              <path className="contact-fossil-rib" d="M-62 8 C-68 24 -66 38 -58 50" />
              <path className="contact-fossil-rib" d="M8 12 C4 28 6 42 14 56" />
              <path className="contact-fossil-rib" d="M74 18 C70 34 74 46 84 58" />
            </g>
          </g>
          <g className="contact-scribble-note" transform="translate(18 158)">
            <path className="contact-scribble-line" d="M0 0 C18 -8 32 10 48 2 C62 -6 76 10 92 0 C104 -6 122 10 146 2" />
            <path className="contact-scribble-line contact-scribble-line-soft" d="M2 18 C16 10 30 26 46 16 C60 8 74 24 92 14 C106 8 126 22 148 16" />
          </g>
          <g className="contact-side-caption" transform="translate(18 192)">
            <line className="contact-side-caption-line" x1="0" y1="0" x2="96" y2="0" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="16" x2="142" y2="16" />
          </g>
        </g>

        <g className="contact-side-card" transform="translate(20 690) rotate(-4)">
          <rect className="contact-side-paper" x="0" y="0" width="176" height="210" rx="16" />
          <rect className="contact-side-paper-inner" x="12" y="12" width="152" height="186" rx="12" />
          <circle className="contact-side-pin" cx="16" cy="16" r="4.6" />
          <g clipPath="url(#contactSideClipLeftBot)">
            <g className="contact-side-sketch" transform="translate(54 92) rotate(-5) scale(0.98)">
              <path className="contact-specimen-sketch-plane" d="M0 0 C26 -18 54 -34 92 -44 C86 -10 68 20 44 46 C22 70 -4 86 -30 94 C-20 52 -8 22 0 0 Z" />
              <path className="contact-specimen-sketch-outline" d="M0 0 C26 -18 54 -34 92 -44 C86 -10 68 20 44 46 C22 70 -4 86 -30 94 C-20 52 -8 22 0 0 Z" />
              <path className="contact-specimen-sketch-vein" d="M2 0 C18 -14 36 -28 58 -40" />
              <path className="contact-specimen-sketch-vein" d="M12 24 C28 16 42 4 56 -12" />
              <path className="contact-specimen-sketch-vein" d="M16 48 C28 42 42 28 56 12" />
            </g>
          </g>
          <g className="contact-side-caption" transform="translate(18 150)">
            <line className="contact-side-caption-line" x1="0" y1="0" x2="74" y2="0" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="18" x2="124" y2="18" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="34" x2="104" y2="34" />
          </g>
        </g>
      </svg>

      <svg
        className="contact-side-gallery contact-side-gallery-right"
        viewBox="0 0 280 980"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id="contactSideClipRightTop">
            <rect x="12" y="12" width="166" height="190" rx="12" />
          </clipPath>
          <clipPath id="contactSideClipRightMid">
            <rect x="12" y="12" width="164" height="198" rx="12" />
          </clipPath>
          <clipPath id="contactSideClipRightBot">
            <rect x="12" y="12" width="152" height="182" rx="12" />
          </clipPath>
        </defs>
        <g className="contact-side-card" transform="translate(28 56) rotate(4)">
          <rect className="contact-side-paper" x="0" y="0" width="190" height="214" rx="16" />
          <rect className="contact-side-paper-inner" x="12" y="12" width="166" height="190" rx="12" />
          <circle className="contact-side-pin" cx="16" cy="16" r="4.6" />
          <g clipPath="url(#contactSideClipRightTop)">
            <g className="contact-fossil-imprint contact-fossil-dino" transform="translate(92 94) scale(0.84)">
              <ellipse className="contact-fossil-shadow" cx="0" cy="0" rx="90" ry="54" />
              <path className="contact-fossil-plane" d="M-70 12 C-76 -24 -52 -56 -10 -68 C40 -82 92 -64 104 -28 C112 -4 98 20 70 28 C50 34 26 36 8 28 L-8 52 L-20 26 C-44 22 -64 22 -70 12 Z" />
              <path className="contact-fossil-outline" d="M-70 12 C-76 -24 -52 -56 -10 -68 C40 -82 92 -64 104 -28 C112 -4 98 20 70 28 C50 34 26 36 8 28 L-8 52 L-20 26 C-44 22 -64 22 -70 12 Z" />
              <circle className="contact-fossil-hole" cx="18" cy="-18" r="10" />
              <circle className="contact-fossil-hole" cx="-24" cy="-8" r="8" />
              <circle className="contact-fossil-hole" cx="44" cy="-10" r="5.6" />
              <path className="contact-fossil-rib" d="M-34 16 C-10 8 12 8 34 12" />
              <path className="contact-fossil-rib" d="M48 12 C64 12 80 10 92 6" />
              <path className="contact-fossil-rib" d="M-8 42 C6 38 18 38 30 40" />
            </g>
          </g>
          <g className="contact-side-caption" transform="translate(22 152)">
            <line className="contact-side-caption-line" x1="0" y1="0" x2="82" y2="0" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="18" x2="132" y2="18" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="34" x2="112" y2="34" />
          </g>
        </g>

        <g className="contact-side-card" transform="translate(22 338) rotate(-3)">
          <rect className="contact-side-paper" x="0" y="0" width="188" height="222" rx="16" />
          <rect className="contact-side-paper-inner" x="12" y="12" width="164" height="198" rx="12" />
          <circle className="contact-side-pin" cx="16" cy="16" r="4.6" />
          <g clipPath="url(#contactSideClipRightMid)">
            <g className="contact-fossil-imprint contact-fossil-shell" transform="translate(94 96) scale(0.84)">
              <ellipse className="contact-fossil-shadow" cx="0" cy="0" rx="72" ry="52" />
              <path className="contact-fossil-plane" d="M-46 14 C-40 -36 -2 -74 52 -74 C58 -34 40 8 4 44 C-12 58 -28 66 -46 72 C-46 48 -46 30 -46 14 Z" />
              <path className="contact-fossil-outline" d="M-46 14 C-40 -36 -2 -74 52 -74 C58 -34 40 8 4 44 C-12 58 -28 66 -46 72 C-46 48 -46 30 -46 14 Z" />
              <path className="contact-fossil-rib" d="M-34 18 C-10 6 10 -10 28 -30" />
              <path className="contact-fossil-rib" d="M-28 38 C-6 28 10 16 24 0" />
              <path className="contact-fossil-rib" d="M-20 58 C-2 48 10 38 18 26" />
            </g>
          </g>
          <g className="contact-side-caption" transform="translate(20 160)">
            <line className="contact-side-caption-line" x1="0" y1="0" x2="84" y2="0" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="16" x2="136" y2="16" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="32" x2="116" y2="32" />
          </g>
        </g>

        <g className="contact-side-card" transform="translate(34 664) rotate(3)">
          <rect className="contact-side-paper" x="0" y="0" width="176" height="206" rx="16" />
          <rect className="contact-side-paper-inner" x="12" y="12" width="152" height="182" rx="12" />
          <circle className="contact-side-pin" cx="16" cy="16" r="4.6" />
          <g clipPath="url(#contactSideClipRightBot)">
            <g className="contact-fossil-imprint contact-fossil-dino" transform="translate(88 92) scale(0.8)">
              <ellipse className="contact-fossil-shadow" cx="0" cy="0" rx="82" ry="52" />
              <path className="contact-fossil-plane" d="M0 48 C-14 20 -16 -6 -8 -30 L-34 -70 L-12 -52 L0 -82 L12 -50 L36 -68 L18 -28 C28 -8 28 18 16 48 Z" />
              <path className="contact-fossil-outline" d="M0 48 C-14 20 -16 -6 -8 -30 L-34 -70 L-12 -52 L0 -82 L12 -50 L36 -68 L18 -28 C28 -8 28 18 16 48 Z" />
              <path className="contact-fossil-rib" d="M-8 18 C-4 2 -4 -12 -8 -26" />
              <path className="contact-fossil-rib" d="M8 18 C8 4 10 -10 14 -26" />
              <path className="contact-fossil-rib" d="M-12 -40 L-24 -60" />
              <path className="contact-fossil-rib" d="M4 -48 L2 -74" />
            </g>
          </g>
          <g className="contact-ink-mark contact-ink-swirl" transform="translate(22 144)">
            <path d="M0 0 C18 -22, 48 -18, 52 4 C56 26 28 34 10 20 C-8 6 0 -18 22 -26 C44 -34 70 -24 86 -6" />
          </g>
          <g className="contact-side-caption" transform="translate(18 152)">
            <line className="contact-side-caption-line" x1="0" y1="0" x2="78" y2="0" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="18" x2="126" y2="18" />
            <line className="contact-side-caption-line contact-side-caption-line-short" x1="0" y1="34" x2="102" y2="34" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default memo(ContactVisual);

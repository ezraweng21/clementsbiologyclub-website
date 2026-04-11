import { memo } from "react";

const currentPaths = [
  "M-60 196 C184 102, 426 110, 664 206 C878 292, 1110 318, 1360 272 C1490 248, 1576 226, 1660 198",
  "M-80 502 C120 448, 328 458, 538 534 C758 612, 986 638, 1226 598 C1426 566, 1542 546, 1660 558",
  "M-40 856 C176 814, 418 824, 644 908 C862 988, 1120 1010, 1374 960 C1498 936, 1584 922, 1660 928",
];

const bubbleClusters = [
  { x: 124, y: 198, count: 12, step: 32 },
  { x: 284, y: 328, count: 10, step: 34 },
  { x: 520, y: 214, count: 9, step: 36 },
  { x: 820, y: 182, count: 8, step: 34 },
  { x: 1088, y: 314, count: 11, step: 30 },
  { x: 1424, y: 224, count: 13, step: 30 },
  { x: 1260, y: 712, count: 10, step: 36 },
  { x: 1012, y: 602, count: 8, step: 34 },
  { x: 740, y: 792, count: 8, step: 34 },
  { x: 286, y: 988, count: 10, step: 30 },
  { x: 1492, y: 932, count: 12, step: 28 },
  { x: 1342, y: 1042, count: 8, step: 30 },
];

const waveBands = [
  {
    className: "reef-wave-back",
    path: "M-40 256 C162 178, 396 176, 638 246 C858 310, 1120 330, 1370 286 C1490 264, 1588 252, 1660 260 L1660 -40 L-40 -40 Z",
  },
  {
    className: "reef-wave-mid",
    path: "M-40 566 C152 496, 380 484, 612 544 C860 608, 1120 626, 1390 592 C1510 578, 1598 568, 1660 576 L1660 210 C1542 192, 1418 204, 1266 230 C1066 266, 846 246, 620 192 C402 140, 180 146 -40 238 Z",
  },
  {
    className: "reef-wave-front",
    path: "M-40 898 C154 836, 400 824, 660 888 C900 946, 1142 962, 1386 930 C1514 914, 1602 906, 1660 912 L1660 602 C1570 584, 1466 592, 1322 610 C1088 638, 846 620, 610 556 C378 496, 156 510 -40 582 Z",
  },
  {
    className: "reef-wave-lower",
    path: "M-40 1126 C170 1074, 418 1076, 684 1140 C920 1196, 1164 1210, 1402 1184 C1518 1172, 1604 1168, 1660 1174 L1660 878 C1578 864, 1472 868, 1316 892 C1084 924, 838 916, 600 854 C368 794, 152 810 -40 886 Z",
  },
  {
    className: "reef-wave-deep",
    path: "M-40 1300 C196 1238, 460 1248, 726 1310 C962 1364, 1202 1372, 1426 1346 C1542 1332, 1614 1326, 1660 1330 L1660 1500 L-40 1500 Z",
  },
  {
    className: "reef-wave-ribbon-top",
    path: "M-40 136 C182 88, 434 94, 694 156 C936 214, 1188 224, 1440 194 C1544 182, 1614 176, 1660 178",
  },
  {
    className: "reef-wave-ribbon-mid",
    path: "M-40 404 C190 352, 444 362, 700 430 C936 492, 1186 506, 1442 474 C1540 462, 1612 458, 1660 460",
  },
  {
    className: "reef-wave-ribbon-lower",
    path: "M-40 736 C206 686, 470 696, 726 764 C960 826, 1208 838, 1454 810 C1544 800, 1614 796, 1660 798",
  },
  {
    className: "reef-wave-ribbon-deep",
    path: "M-40 1048 C210 1004, 478 1018, 738 1086 C974 1148, 1218 1164, 1458 1142 C1546 1134, 1614 1132, 1660 1136",
  },
];

const coralFans = [
  {
    x: 154,
    y: 1168,
    scale: 1.2,
    rotate: -10,
    path: "M0 0 C44 -120, 88 -214, 128 -318 M0 0 C18 -122, 32 -218, 42 -332 M0 0 C-18 -122, -30 -222, -38 -336 M0 0 C-44 -104, -90 -190, -148 -280 M0 0 C56 -88, 120 -154, 196 -214",
  },
  {
    x: 1458,
    y: 1148,
    scale: 1.08,
    rotate: 12,
    path: "M0 0 C-54 -128, -96 -224, -136 -328 M0 0 C-18 -120, -34 -226, -48 -346 M0 0 C22 -116, 40 -214, 60 -320 M0 0 C64 -92, 124 -164, 192 -226 M0 0 C-68 -90, -132 -158, -214 -208",
  },
];

const shellClusters = [
  { x: 370, y: 988, scale: 1.02, rotate: -12, tone: "sand" },
  { x: 1226, y: 1060, scale: 0.96, rotate: 10, tone: "pearl" },
  { x: 986, y: 260, scale: 0.84, rotate: -8, tone: "mint" },
  { x: 624, y: 1182, scale: 0.92, rotate: 14, tone: "sand" },
  { x: 1148, y: 334, scale: 0.7, rotate: 6, tone: "pearl" },
  { x: 248, y: 726, scale: 0.78, rotate: -16, tone: "mint" },
];

const anemoneClusters = [
  { x: 472, y: 1124, scale: 0.96, rotate: -6, tone: "rose" },
  { x: 1328, y: 1174, scale: 1.04, rotate: 8, tone: "violet" },
  { x: 1034, y: 1092, scale: 0.86, rotate: -8, tone: "teal" },
];

const jellyfishClusters = [
  { x: 438, y: 382, scale: 0.84, drift: "slow", tone: "pearl" },
  { x: 1188, y: 248, scale: 0.92, drift: "medium", tone: "blue" },
  { x: 1312, y: 786, scale: 0.76, drift: "slow", tone: "violet" },
];

const fishGroups = [
  {
    className: "reef-fish-school-left",
    fish: [
      { x: 302, y: 612, scale: 0.78, rotate: 8, tone: "silver" },
      { x: 356, y: 642, scale: 0.62, rotate: 4, tone: "teal" },
      { x: 414, y: 592, scale: 0.58, rotate: -4, tone: "silver" },
      { x: 460, y: 626, scale: 0.68, rotate: 6, tone: "gold" },
    ],
  },
  {
    className: "reef-fish-school-right",
    fish: [
      { x: 1128, y: 504, scale: 0.72, rotate: -8, tone: "teal" },
      { x: 1198, y: 540, scale: 0.58, rotate: -12, tone: "silver" },
      { x: 1268, y: 506, scale: 0.66, rotate: -6, tone: "gold" },
      { x: 1332, y: 548, scale: 0.54, rotate: -10, tone: "silver" },
    ],
  },
];

const seagrassClusters = [
  { x: 108, width: 124, blades: 10, height: 214 },
  { x: 266, width: 132, blades: 11, height: 224 },
  { x: 456, width: 142, blades: 12, height: 236 },
  { x: 676, width: 136, blades: 11, height: 226 },
  { x: 892, width: 148, blades: 12, height: 242 },
  { x: 1128, width: 138, blades: 11, height: 232 },
  { x: 1338, width: 144, blades: 12, height: 238 },
  { x: 1514, width: 102, blades: 8, height: 214 },
];

const kelpGroups = [
  {
    className: "reef-kelp-left",
    blades: [
      { x: 84, width: 32, height: 404, bend: 54 },
      { x: 132, width: 26, height: 362, bend: -42 },
      { x: 176, width: 28, height: 388, bend: 60 },
      { x: 222, width: 22, height: 330, bend: -36 },
      { x: 264, width: 26, height: 354, bend: 48 },
    ],
  },
  {
    className: "reef-kelp-right",
    blades: [
      { x: 1336, width: 30, height: 396, bend: -56 },
      { x: 1384, width: 24, height: 358, bend: 42 },
      { x: 1428, width: 28, height: 386, bend: -50 },
      { x: 1470, width: 22, height: 332, bend: 34 },
      { x: 1512, width: 26, height: 368, bend: -44 },
    ],
  },
  {
    className: "reef-kelp-center",
    blades: [
      { x: 676, width: 20, height: 220, bend: 22 },
      { x: 730, width: 18, height: 188, bend: -18 },
      { x: 876, width: 18, height: 202, bend: 16 },
      { x: 928, width: 20, height: 228, bend: -20 },
    ],
  },
];

function renderBubbleCluster(cluster, clusterIndex) {
  return (
    <g
      key={`reef-bubble-cluster-${cluster.x}-${cluster.y}-${clusterIndex}`}
      className="reef-bubble-cluster"
    >
      {Array.from({ length: cluster.count }, (_, index) => {
        const cx = cluster.x + (index % 2 === 0 ? 0 : 18);
        const cy = cluster.y + index * cluster.step;
        const radius = 5 + (index % 3) * 2.4;

        return (
          <circle
            key={`reef-bubble-${clusterIndex}-${index}`}
            className={`reef-bubble reef-bubble-${index % 3}`}
            cx={cx}
            cy={cy}
            r={radius}
          />
        );
      })}
    </g>
  );
}

function renderKelpBlade(blade, bladeIndex, groupIndex) {
  const halfWidth = blade.width / 2;
  const topY = 1280 - blade.height;
  const controlY = topY + blade.height * 0.42;

  return (
    <path
      key={`reef-kelp-blade-${groupIndex}-${bladeIndex}`}
      className="reef-kelp-blade"
      d={`M${blade.x} 1280 C${blade.x + blade.bend * 0.35} ${1128}, ${blade.x + blade.bend} ${controlY}, ${blade.x + blade.bend * 0.58} ${topY} C${blade.x + blade.bend * 0.12 + halfWidth} ${controlY}, ${blade.x + halfWidth} ${1158}, ${blade.x} 1280 Z`}
    />
  );
}

function renderShell(shell, shellIndex) {
  return (
    <g
      key={`reef-shell-${shell.x}-${shell.y}-${shellIndex}`}
      className={`reef-shell reef-shell-${shell.tone}`}
      transform={`translate(${shell.x} ${shell.y}) rotate(${shell.rotate}) scale(${shell.scale})`}
    >
      <path
        className="reef-shell-body"
        d="M0 0 C-18 -26 -44 -44 -74 -48 C-68 -16 -62 6 -48 26 C-26 54 8 66 42 64 C66 62 92 54 112 34 C88 10 68 -10 44 -22 C28 -30 14 -30 0 0 Z"
      />
      <path className="reef-shell-rib" d="M-16 -2 C-8 22 2 42 20 60" />
      <path className="reef-shell-rib" d="M18 -10 C28 12 40 30 60 44" />
      <path className="reef-shell-rib" d="M44 -6 C60 4 76 18 92 34" />
    </g>
  );
}

function renderAnemone(cluster, clusterIndex) {
  return (
    <g
      key={`reef-anemone-${cluster.x}-${cluster.y}-${clusterIndex}`}
      className={`reef-anemone reef-anemone-${cluster.tone}`}
      transform={`translate(${cluster.x} ${cluster.y}) rotate(${cluster.rotate}) scale(${cluster.scale})`}
    >
      {Array.from({ length: 12 }, (_, index) => {
        const angle = -74 + index * 14;
        const length = 92 + (index % 3) * 16;
        return (
          <path
            key={`reef-anemone-tentacle-${clusterIndex}-${index}`}
            className="reef-anemone-tentacle"
            d={`M0 0 C${Math.sin((angle * Math.PI) / 180) * 14} ${-24}, ${Math.sin((angle * Math.PI) / 180) * 34} ${-length * 0.56}, ${Math.sin((angle * Math.PI) / 180) * 54} ${-length}`}
            transform={`rotate(${angle})`}
          />
        );
      })}
      <ellipse className="reef-anemone-core" cx="0" cy="0" rx="34" ry="24" />
    </g>
  );
}

function renderJellyfish(jelly, jellyIndex) {
  return (
    <g
      key={`reef-jelly-${jelly.x}-${jelly.y}-${jellyIndex}`}
      className={`reef-jellyfish reef-jellyfish-${jelly.tone} reef-jellyfish-${jelly.drift}`}
      transform={`translate(${jelly.x} ${jelly.y}) scale(${jelly.scale})`}
    >
      <path className="reef-jelly-cap" d="M-44 6 C-38 -34, -16 -58, 0 -58 C16 -58, 38 -34, 44 6 C22 -4, -20 -4, -44 6 Z" />
      <path className="reef-jelly-inner" d="M-20 2 C-14 -24, -4 -34, 0 -34 C4 -34, 14 -24, 20 2" />
      <path className="reef-jelly-tentacle" d="M-22 8 C-34 34, -26 62, -40 92" />
      <path className="reef-jelly-tentacle" d="M-8 10 C-14 34, -4 58, -10 88" />
      <path className="reef-jelly-tentacle" d="M8 10 C14 32, 8 58, 16 94" />
      <path className="reef-jelly-tentacle" d="M22 8 C30 34, 26 58, 38 90" />
    </g>
  );
}

function renderFish(fish, fishIndex, schoolIndex) {
  return (
    <g
      key={`reef-fish-${schoolIndex}-${fishIndex}`}
      className={`reef-fish reef-fish-${fish.tone}`}
      transform={`translate(${fish.x} ${fish.y}) rotate(${fish.rotate}) scale(${fish.scale})`}
    >
      <ellipse className="reef-fish-body" cx="0" cy="0" rx="34" ry="16" />
      <path className="reef-fish-tail" d="M34 0 L56 -14 L52 0 L56 14 Z" />
      <path className="reef-fish-fin" d="M-4 -8 L10 -20 L16 -8 Z" />
      <circle className="reef-fish-eye" cx="-20" cy="-2" r="2.4" />
    </g>
  );
}

function ResourcesVisual() {
  return (
    <div className="resources-page-visual" aria-hidden="true">
      <svg
        className="resources-visual-svg"
        viewBox="0 0 1600 1320"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="reefCurrent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#bbd9d1" stopOpacity="0.64" />
            <stop offset="50%" stopColor="#7ab2a8" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#4d857f" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="reefWaveBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d8f1f3" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#a6d7dc" stopOpacity="0.68" />
          </linearGradient>
          <linearGradient id="reefWaveMid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c4e7eb" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7fbec7" stopOpacity="0.76" />
          </linearGradient>
          <linearGradient id="reefWaveFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a7d6de" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#5da4b0" stopOpacity="0.74" />
          </linearGradient>
          <linearGradient id="reefKelp" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#92b992" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4f7759" stopOpacity="0.94" />
          </linearGradient>
          <radialGradient id="reefGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5fbfb" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#b1d6ce" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="reef-wave-bands">
          {waveBands.map((band) => (
            <path
              key={band.className}
              className={`reef-wave-band ${band.className}`}
              d={band.path}
            />
          ))}
          <path
            className="reef-wave-edge reef-wave-edge-top"
            d="M-40 246 C178 164, 404 166, 642 236 C862 300, 1118 318, 1370 276 C1494 254, 1592 242, 1660 250"
          />
          <path
            className="reef-wave-edge reef-wave-edge-mid"
            d="M-40 554 C154 488, 388 480, 620 538 C858 598, 1120 620, 1392 586 C1510 570, 1600 560, 1660 568"
          />
          <path
            className="reef-wave-edge reef-wave-edge-front"
            d="M-40 884 C170 826, 412 822, 664 884 C900 942, 1148 958, 1390 928 C1518 912, 1604 904, 1660 910"
          />
        </g>

        <g className="reef-currents">
          {currentPaths.map((path, index) => (
            <path
              key={`reef-current-${index}`}
              className={`reef-current reef-current-${index}`}
              d={path}
            />
          ))}
          <path
            className="reef-current reef-current-thread"
            d="M220 132 C148 282, 124 444, 158 622 C190 792, 216 964, 200 1198"
          />
          <path
            className="reef-current reef-current-thread"
            d="M1366 164 C1436 314, 1464 490, 1424 682 C1394 830, 1368 1026, 1396 1226"
          />
        </g>

        <g className="reef-glows">
          <ellipse className="reef-glow" cx="268" cy="302" rx="260" ry="162" />
          <ellipse className="reef-glow reef-glow-soft" cx="1314" cy="430" rx="286" ry="182" />
          <ellipse className="reef-glow reef-glow-soft" cx="1086" cy="968" rx="342" ry="188" />
          <ellipse className="reef-glow reef-glow-deep" cx="820" cy="1258" rx="640" ry="220" />
        </g>

        <g className="reef-bubbles">
          {bubbleClusters.map(renderBubbleCluster)}
          {Array.from({ length: 34 }, (_, index) => {
            const x = 86 + (index % 8) * 186 + (index % 2) * 18;
            const y = 132 + Math.floor(index / 8) * 228 + (index % 3) * 16;
            return (
              <circle
                key={`reef-floating-bubble-${index}`}
                className={`reef-bubble reef-bubble-floating reef-bubble-${index % 3}`}
                cx={x}
                cy={y}
                r={2.8 + (index % 4) * 1.3}
              />
            );
          })}
        </g>

        <g className="reef-jellyfish-field">
          {jellyfishClusters.map(renderJellyfish)}
        </g>

        <g className="reef-fish-field">
          {fishGroups.map((school, schoolIndex) => (
            <g key={school.className} className={school.className}>
              {school.fish.map((fish, fishIndex) =>
                renderFish(fish, fishIndex, schoolIndex)
              )}
            </g>
          ))}
        </g>

        <g className="reef-shells">
          {shellClusters.map(renderShell)}
        </g>

        <g className="reef-anemones">
          {anemoneClusters.map(renderAnemone)}
        </g>

        <g className="reef-coral-clusters">
          {coralFans.map((fan, index) => (
            <g
              key={`reef-fan-${index}`}
              className="reef-coral-fan"
              transform={`translate(${fan.x} ${fan.y}) rotate(${fan.rotate}) scale(${fan.scale})`}
            >
              <path className="reef-coral-trunk" d={fan.path} />
            </g>
          ))}

          <g className="reef-coral-mounds reef-coral-mounds-left">
            <path d="M-20 1210 C44 1136, 118 1104, 198 1110 C278 1118, 354 1168, 412 1262 L-20 1262 Z" />
            <path d="M52 1268 C102 1208, 176 1188, 250 1202 C314 1216, 376 1250, 430 1306 L52 1306 Z" />
          </g>

          <g className="reef-coral-mounds reef-coral-mounds-right">
            <path d="M1152 1222 C1226 1134, 1320 1094, 1408 1118 C1488 1138, 1566 1194, 1626 1284 L1152 1284 Z" />
            <path d="M1212 1294 C1286 1218, 1362 1198, 1448 1214 C1524 1228, 1586 1278, 1642 1330 L1212 1330 Z" />
          </g>

          <g className="reef-stone-ridges">
            <path d="M268 1152 C336 1118, 430 1110, 516 1148 C590 1180, 638 1234, 660 1314 L232 1314 C240 1248, 258 1192, 268 1152 Z" />
            <path d="M934 1134 C1022 1088, 1142 1086, 1244 1138 C1322 1178, 1388 1244, 1426 1314 L886 1314 C894 1236, 908 1178, 934 1134 Z" />
          </g>
        </g>

        <g className="reef-kelp-field">
          {kelpGroups.map((group, groupIndex) => (
            <g key={group.className} className={group.className}>
              {group.blades.map((blade, bladeIndex) =>
                renderKelpBlade(blade, bladeIndex, groupIndex)
              )}
            </g>
          ))}
        </g>

        <g className="reef-seagrass-mid">
          {Array.from({ length: 34 }, (_, index) => {
            const x = 8 + index * 48;
            const height = 126 + (index % 6) * 18;
            const bend = index % 2 === 0 ? 18 : -16;
            return (
              <path
                key={`reef-seagrass-mid-${index}`}
                className={`reef-seagrass-blade reef-seagrass-mid-blade reef-seagrass-tone-${(index + 1) % 3}`}
                d={`M${x} 1318 C${x + bend * 0.28} ${1284}, ${x + bend} ${1264 - height * 0.4}, ${x + bend * 0.84} ${1318 - height} C${x + bend * 0.32 + 10} ${1260 - height * 0.16}, ${x + 12} 1286, ${x} 1318 Z`}
              />
            );
          })}
        </g>

        <g className="reef-seagrass-back">
          {Array.from({ length: 38 }, (_, index) => {
            const x = -10 + index * 44;
            const height = 154 + (index % 7) * 16;
            const bend = index % 2 === 0 ? 14 : -14;
            return (
              <path
                key={`reef-seagrass-back-${index}`}
                className={`reef-seagrass-blade reef-seagrass-back-blade reef-seagrass-tone-${(index + 2) % 3}`}
                d={`M${x} 1322 C${x + bend * 0.26} ${1288}, ${x + bend} ${1262 - height * 0.42}, ${x + bend * 0.8} ${1322 - height} C${x + bend * 0.28 + 8} ${1268 - height * 0.18}, ${x + 10} 1290, ${x} 1322 Z`}
              />
            );
          })}
        </g>

        <g className="reef-seagrass-front">
          {Array.from({ length: 46 }, (_, index) => {
            const x = 8 + index * 36;
            const height = 102 + (index % 7) * 20;
            const bend = index % 2 === 0 ? 24 : -22;
            return (
              <path
                key={`reef-seagrass-${index}`}
                className={`reef-seagrass-blade reef-seagrass-front-blade reef-seagrass-tone-${index % 3}`}
                d={`M${x} 1322 C${x + bend * 0.26} ${1288}, ${x + bend} ${1260 - height * 0.42}, ${x + bend * 0.82} ${1322 - height} C${x + bend * 0.34 + 10} ${1266 - height * 0.18}, ${x + 12} 1292, ${x} 1322 Z`}
              />
            );
          })}
        </g>

        <g className="reef-seagrass-clusters">
          {seagrassClusters.map((cluster, clusterIndex) =>
            Array.from({ length: cluster.blades }, (_, bladeIndex) => {
              const progress = bladeIndex / Math.max(1, cluster.blades - 1);
              const x = cluster.x + progress * cluster.width - cluster.width / 2;
              const height = cluster.height - (bladeIndex % 4) * 18 + (bladeIndex % 2) * 10;
              const bend = bladeIndex % 2 === 0 ? 18 + (bladeIndex % 3) * 4 : -18 - (bladeIndex % 3) * 4;

              return (
                <path
                  key={`reef-seagrass-cluster-${clusterIndex}-${bladeIndex}`}
                  className={`reef-seagrass-blade reef-seagrass-cluster-blade reef-seagrass-tone-${(clusterIndex + bladeIndex) % 3}`}
                  d={`M${x} 1324 C${x + bend * 0.24} ${1288}, ${x + bend} ${1260 - height * 0.4}, ${x + bend * 0.84} ${1324 - height} C${x + bend * 0.3 + 11} ${1264 - height * 0.16}, ${x + 14} 1294, ${x} 1324 Z`}
                />
              );
            })
          )}
        </g>
      </svg>

      <svg
        className="resources-corner-creature"
        viewBox="0 0 340 240"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="reef-creature reef-creature-turtle" transform="translate(192 120) rotate(-10) scale(1.26)">
          <ellipse className="reef-turtle-glow" cx="10" cy="12" rx="138" ry="92" />
          <ellipse className="reef-turtle-shadow" cx="18" cy="26" rx="96" ry="46" />
          <ellipse className="reef-turtle-shell" cx="0" cy="0" rx="72" ry="50" />
          <ellipse className="reef-turtle-shell-inner" cx="0" cy="0" rx="48" ry="34" />
          <path className="reef-turtle-shell-seam" d="M-42 0 C-20 -18, 18 -18, 40 0" />
          <path className="reef-turtle-shell-seam" d="M-26 -24 C-6 -6, -2 10, -8 28" />
          <path className="reef-turtle-shell-seam" d="M18 -26 C32 -8, 34 10, 26 26" />
          <path className="reef-turtle-shell-seam" d="M-20 14 C2 22, 18 22, 34 16" />
          <ellipse className="reef-turtle-shell-plate" cx="-24" cy="-10" rx="14" ry="12" />
          <ellipse className="reef-turtle-shell-plate" cx="2" cy="-14" rx="16" ry="13" />
          <ellipse className="reef-turtle-shell-plate" cx="26" cy="-6" rx="14" ry="11" />
          <ellipse className="reef-turtle-shell-plate" cx="-10" cy="12" rx="18" ry="13" />
          <ellipse className="reef-turtle-shell-highlight" cx="-18" cy="-20" rx="24" ry="12" />
          <ellipse className="reef-turtle-cheek" cx="-108" cy="4" rx="7" ry="5" />
          <ellipse className="reef-turtle-head" cx="-92" cy="-4" rx="20" ry="15" />
          <path className="reef-turtle-head-detail" d="M-106 -6 C-98 -14, -88 -16, -76 -12" />
          <path className="reef-turtle-head-detail" d="M-108 2 C-96 8, -84 10, -74 8" />
          <path className="reef-turtle-flipper" d="M-22 -28 C-52 -60, -74 -78, -96 -88 C-88 -50, -72 -24, -44 -2 Z" />
          <path className="reef-turtle-flipper" d="M-16 26 C-42 56, -58 74, -74 92 C-54 82, -24 64, 2 34 Z" />
          <path className="reef-turtle-flipper reef-turtle-flipper-back" d="M30 -22 C62 -48, 88 -58, 112 -58 C94 -34, 70 -10, 38 8 Z" />
          <path className="reef-turtle-flipper reef-turtle-flipper-back" d="M34 18 C66 38, 86 54, 102 76 C72 70, 46 54, 20 30 Z" />
          <path className="reef-turtle-flipper-vein" d="M-44 -28 C-64 -38, -74 -50, -86 -68" />
          <path className="reef-turtle-flipper-vein" d="M-18 34 C-34 48, -46 62, -60 80" />
          <path className="reef-turtle-flipper-vein" d="M42 -14 C64 -24, 82 -32, 98 -42" />
          <path className="reef-turtle-flipper-vein" d="M34 30 C54 40, 70 52, 88 66" />
          <path className="reef-turtle-tail" d="M74 0 L98 -8 L94 10 Z" />
          <circle className="reef-turtle-eye" cx="-100" cy="-6" r="2.8" />
          <circle className="reef-turtle-eye-highlight" cx="-101.5" cy="-7.5" r="0.9" />
        </g>
      </svg>
    </div>
  );
}

export default memo(ResourcesVisual);

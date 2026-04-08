function buildHelix({
  id,
  centerX,
  topY,
  height,
  baseRadius,
  amplitude,
  frequency,
  tilt,
  rungCount,
  rungInset = 0.9,
}) {
  const samples = 120;
  const leftPoints = [];
  const rightPoints = [];
  const rungs = [];

  for (let index = 0; index <= samples; index += 1) {
    const t = index / samples;
    const y = topY + height * t;
    const wave = Math.sin(t * Math.PI * 2 * frequency);
    const offset = baseRadius * wave;
    const sway = amplitude * Math.sin(t * Math.PI * frequency + tilt);

    leftPoints.push({
      x: centerX + sway - offset,
      y,
    });

    rightPoints.push({
      x: centerX + sway + offset,
      y,
    });
  }

  for (let rungIndex = 0; rungIndex < rungCount; rungIndex += 1) {
    const t = (rungIndex + rungInset) / (rungCount + 1);
    const y = topY + height * t;
    const wave = Math.sin(t * Math.PI * 2 * frequency);
    const offset = baseRadius * wave;
    const sway = amplitude * Math.sin(t * Math.PI * frequency + tilt);

    rungs.push({
      x1: centerX + sway - offset,
      y1: y,
      x2: centerX + sway + offset,
      y2: y,
    });
  }

  return {
    id,
    leftPath: pointsToPath(leftPoints),
    rightPath: pointsToPath(rightPoints),
    rungs,
  };
}

function pointsToPath(points) {
  return points
    .map((point, index) =>
      `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`
    )
    .join(" ");
}

const helices = [
  buildHelix({
    id: "primary",
    centerX: 1180,
    topY: 20,
    height: 1140,
    baseRadius: 80,
    amplitude: 130,
    frequency: 2.8,
    tilt: 0.4,
    rungCount: 16,
  }),
  buildHelix({
    id: "secondary",
    centerX: 760,
    topY: 110,
    height: 1060,
    baseRadius: 68,
    amplitude: 104,
    frequency: 2.4,
    tilt: 1.2,
    rungCount: 14,
  }),
  buildHelix({
    id: "faint",
    centerX: 290,
    topY: 240,
    height: 940,
    baseRadius: 52,
    amplitude: 76,
    frequency: 2.15,
    tilt: 0.7,
    rungCount: 12,
  }),
];

function AboutVisual() {
  return (
    <div className="about-page-visual" aria-hidden="true">
      <svg
        className="about-dna-svg"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="dnaGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#74b081" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#315f3e" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="dnaGreenSoft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b0daba" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#5f916c" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="dnaGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cdab64" stopOpacity="0.82" />
            <stop offset="50%" stopColor="#f6dfab" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#cdab64" stopOpacity="0.82" />
          </linearGradient>
          <radialGradient id="cellGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f4fff6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#82c190" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="lushGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e5f8e9" stopOpacity="0.86" />
            <stop offset="100%" stopColor="#73b282" stopOpacity="0.08" />
          </radialGradient>
        </defs>

        <ellipse
          className="atmosphere-glow glow-right"
          cx="1160"
          cy="250"
          rx="280"
          ry="180"
        />
        <ellipse
          className="atmosphere-glow glow-left"
          cx="360"
          cy="760"
          rx="250"
          ry="180"
        />
        <ellipse
          className="atmosphere-glow glow-mid"
          cx="790"
          cy="530"
          rx="190"
          ry="140"
        />

        <path
          className="frond frond-left"
          d="M110 1140 C130 1000, 150 900, 210 780 C255 688, 330 620, 410 560"
        />
        <path
          className="frond frond-left-soft"
          d="M170 1150 C190 1030, 220 950, 275 850 C320 766, 390 708, 452 664"
        />
        <path
          className="frond frond-right"
          d="M1510 1180 C1490 1060, 1450 950, 1382 850 C1320 756, 1238 696, 1140 640"
        />
        <path
          className="frond frond-right-soft"
          d="M1450 1180 C1438 1086, 1400 1010, 1338 918 C1285 840, 1210 782, 1138 742"
        />

        <path
          className="micro-current current-one"
          d="M120 420 C280 360, 455 360, 602 420"
        />
        <path
          className="micro-current current-two"
          d="M920 210 C1035 168, 1162 176, 1280 238"
        />
        <path
          className="micro-current current-three"
          d="M842 866 C970 828, 1112 842, 1242 900"
        />

        {helices.map((helix) => (
          <g className={`helix-${helix.id}`} key={helix.id}>
            <path className="dna-strand" d={helix.leftPath} />
            <path className="dna-strand" d={helix.rightPath} />
            {helix.rungs.map((rung, index) => (
              <g className="dna-rung-group" key={`${helix.id}-rung-${index}`}>
                <line
                  className="dna-rung-line dna-rung-line-underlay"
                  x1={rung.x1}
                  y1={rung.y1}
                  x2={rung.x2}
                  y2={rung.y2}
                />
                <line
                  className="dna-rung-line"
                  x1={rung.x1}
                  y1={rung.y1}
                  x2={rung.x2}
                  y2={rung.y2}
                />
                <circle
                  className="dna-rung-node dna-rung-node-left"
                  cx={rung.x1}
                  cy={rung.y1}
                  r={helix.id === "primary" ? 5.5 : helix.id === "secondary" ? 4.5 : 3.5}
                />
                <circle
                  className="dna-rung-node dna-rung-node-right"
                  cx={rung.x2}
                  cy={rung.y2}
                  r={helix.id === "primary" ? 5.5 : helix.id === "secondary" ? 4.5 : 3.5}
                />
              </g>
            ))}
          </g>
        ))}

        <circle className="bio-cell big-cell" cx="1010" cy="260" r="72" />
        <circle className="bio-cell mid-cell" cx="905" cy="360" r="38" />
        <circle className="bio-cell small-cell" cx="980" cy="455" r="22" />
        <circle className="bio-cell lush-cell" cx="1145" cy="336" r="28" />
        <circle className="bio-cell lush-cell-soft" cx="1078" cy="414" r="16" />

        <circle className="bio-cell faint-cell" cx="265" cy="565" r="48" />
        <circle className="bio-cell faint-cell-small" cx="350" cy="640" r="24" />
        <circle className="bio-cell faint-cell-soft" cx="462" cy="722" r="18" />

        <g className="petal-cluster petal-cluster-one">
          <ellipse
            className="petal"
            cx="888"
            cy="214"
            rx="18"
            ry="44"
            transform="rotate(-22 888 214)"
          />
          <ellipse
            className="petal"
            cx="926"
            cy="222"
            rx="16"
            ry="38"
            transform="rotate(18 926 222)"
          />
          <ellipse
            className="petal"
            cx="905"
            cy="252"
            rx="14"
            ry="34"
            transform="rotate(4 905 252)"
          />
        </g>

        <g className="petal-cluster petal-cluster-two">
          <ellipse
            className="petal petal-soft"
            cx="312"
            cy="518"
            rx="16"
            ry="34"
            transform="rotate(-12 312 518)"
          />
          <ellipse
            className="petal petal-soft"
            cx="348"
            cy="532"
            rx="14"
            ry="30"
            transform="rotate(16 348 532)"
          />
        </g>

        <path
          className="contour-flow"
          d="M-80 900 C180 820, 420 850, 690 930 C900 992, 1170 1000, 1680 900"
        />
        <path
          className="contour-flow contour-flow-soft"
          d="M-120 980 C160 910, 420 932, 672 1000 C928 1070, 1210 1062, 1700 986"
        />

        <g className="molecule-group">
          <circle className="molecule-node" cx="432" cy="250" r="10" />
          <circle className="molecule-node" cx="474" cy="220" r="7" />
          <circle className="molecule-node" cx="516" cy="270" r="6" />
          <path className="molecule-link" d="M440 244 L468 225" />
          <path className="molecule-link" d="M480 226 L511 266" />
        </g>

        <g className="molecule-group molecule-group-soft">
          <circle className="molecule-node" cx="1115" cy="860" r="8" />
          <circle className="molecule-node" cx="1160" cy="832" r="6" />
          <circle className="molecule-node" cx="1192" cy="874" r="5" />
          <path className="molecule-link" d="M1121 855 L1154 836" />
          <path className="molecule-link" d="M1164 836 L1188 870" />
        </g>

        <g className="molecule-group molecule-group-soft">
          <circle className="molecule-node" cx="600" cy="930" r="7" />
          <circle className="molecule-node" cx="644" cy="902" r="5" />
          <circle className="molecule-node" cx="676" cy="946" r="4" />
          <path className="molecule-link" d="M606 925 L638 906" />
          <path className="molecule-link" d="M648 906 L672 942" />
        </g>
      </svg>
    </div>
  );
}

export default AboutVisual;

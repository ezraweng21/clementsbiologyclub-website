function AboutVisual() {
  return (
    <div className="about-page-visual" aria-hidden="true">
      <svg
        className="about-dna-svg"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dnaGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(116, 176, 129, 0.82)" />
            <stop offset="100%" stopColor="rgba(49, 95, 62, 0.92)" />
          </linearGradient>
          <linearGradient id="dnaGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(205, 171, 100, 0.82)" />
            <stop offset="50%" stopColor="rgba(246, 223, 171, 0.92)" />
            <stop offset="100%" stopColor="rgba(205, 171, 100, 0.82)" />
          </linearGradient>
          <radialGradient id="cellGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(244, 255, 246, 0.9)" />
            <stop offset="100%" stopColor="rgba(130, 193, 144, 0.2)" />
          </radialGradient>
        </defs>

        <path
          className="dna-strand strand-a"
          d="M1170 20 C1280 140, 1380 220, 1280 340 C1170 475, 930 520, 960 700 C985 860, 1260 930, 1200 1160"
        />
        <path
          className="dna-strand strand-b"
          d="M1285 20 C1170 145, 1040 225, 1145 350 C1260 490, 1490 530, 1460 710 C1435 875, 1165 945, 1230 1160"
        />

        <path
          className="dna-strand strand-c"
          d="M690 120 C560 240, 460 330, 560 450 C675 590, 890 640, 855 790 C825 930, 570 1000, 640 1180"
        />
        <path
          className="dna-strand strand-d"
          d="M805 120 C930 250, 1060 330, 955 458 C840 602, 610 648, 645 794 C675 936, 920 1008, 860 1180"
        />

        <path
          className="dna-strand strand-faint"
          d="M250 260 C340 360, 430 420, 360 520 C275 645, 120 690, 150 820 C175 925, 360 1000, 320 1170"
        />
        <path
          className="dna-strand strand-faint-alt"
          d="M355 250 C270 360, 185 420, 255 525 C340 648, 500 698, 468 830 C442 940, 255 1008, 298 1175"
        />

        <path className="dna-rung-line" d="M1210 120 L1248 158" />
        <path className="dna-rung-line" d="M1165 225 L1240 262" />
        <path className="dna-rung-line" d="M1070 328 L1200 364" />
        <path className="dna-rung-line" d="M986 460 L1178 474" />
        <path className="dna-rung-line" d="M964 618 L1210 602" />
        <path className="dna-rung-line" d="M1026 770 L1290 732" />
        <path className="dna-rung-line" d="M1126 896 L1310 850" />
        <path className="dna-rung-line" d="M1190 1028 L1260 980" />

        <path className="dna-rung-line dna-rung-line-soft" d="M722 214 L772 250" />
        <path className="dna-rung-line dna-rung-line-soft" d="M640 322 L834 350" />
        <path className="dna-rung-line dna-rung-line-soft" d="M590 474 L870 482" />
        <path className="dna-rung-line dna-rung-line-soft" d="M642 640 L844 622" />
        <path className="dna-rung-line dna-rung-line-soft" d="M710 816 L784 780" />
        <path className="dna-rung-line dna-rung-line-soft" d="M686 982 L760 942" />

        <circle className="bio-cell big-cell" cx="1010" cy="260" r="72" />
        <circle className="bio-cell mid-cell" cx="905" cy="360" r="38" />
        <circle className="bio-cell small-cell" cx="980" cy="455" r="22" />

        <circle className="bio-cell faint-cell" cx="265" cy="565" r="48" />
        <circle className="bio-cell faint-cell-small" cx="350" cy="640" r="24" />

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
      </svg>
    </div>
  );
}

export default AboutVisual;

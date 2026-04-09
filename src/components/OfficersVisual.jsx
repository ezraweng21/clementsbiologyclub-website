function buildFlowerRow({
  y,
  startX,
  step,
  count,
  stem,
  scale,
  flip = true,
  variants,
  shapes,
  rotations,
}) {
  return Array.from({ length: count }, (_, index) => ({
    x: startX + step * index,
    y,
    scale: scale[index % scale.length],
    rotate: rotations[index % rotations.length],
    variant: variants[index % variants.length],
    shape: shapes ? shapes[index % shapes.length] : undefined,
    stem: stem[index % stem.length],
    flip,
  }));
}

const topFlowersBack = buildFlowerRow({
  y: 138,
  startX: 28,
  step: 96,
  count: 17,
  stem: [58, 60, 56, 62],
  scale: [0.94, 0.98, 0.92, 1],
  variants: ["wild", "bright", "soft", "bright"],
  rotations: [-12, 10, -8, 12],
});

const topFlowersAccent = buildFlowerRow({
  y: 154,
  startX: 74,
  step: 96,
  count: 16,
  stem: [48, 46, 44, 50],
  scale: [0.74, 0.78, 0.72, 0.76],
  variants: ["rose", "pearl", "gold", "rose"],
  shapes: ["rosette", "slender", "tuft", "rosette"],
  rotations: [-8, 10, -10, 8],
});

const topFlowers = buildFlowerRow({
  y: 184,
  startX: 18,
  step: 92,
  count: 18,
  stem: [40, 38, 42, 36],
  scale: [0.9, 0.94, 0.96, 0.92],
  variants: ["soft", "bright", "wild", "soft"],
  rotations: [-14, 10, -10, 12],
});

const topFlowersFront = buildFlowerRow({
  y: 214,
  startX: 62,
  step: 92,
  count: 17,
  stem: [24, 22, 20, 22],
  scale: [0.84, 0.88, 0.82, 0.86],
  variants: ["bright", "soft", "wild", "soft"],
  rotations: [-8, 10, -12, 8],
});

const topFlowersLower = buildFlowerRow({
  y: 244,
  startX: 20,
  step: 88,
  count: 18,
  stem: [18, 20, 18, 22],
  scale: [0.78, 0.82, 0.8, 0.84],
  variants: ["pearl", "rose", "bright", "gold"],
  shapes: ["slender", "rosette", undefined, "tuft"],
  rotations: [-10, 8, -8, 10],
});

const midFlowers = [
  { x: 286, y: 404, scale: 0.78, rotate: -8, variant: "soft", stem: 18 },
  { x: 450, y: 564, scale: 0.72, rotate: 16, variant: "wild", stem: 18 },
  { x: 680, y: 504, scale: 0.82, rotate: -12, variant: "bright", stem: 20 },
  { x: 812, y: 662, scale: 0.68, rotate: 10, variant: "soft", stem: 16 },
  { x: 996, y: 528, scale: 0.82, rotate: -6, variant: "wild", stem: 18 },
  { x: 1182, y: 706, scale: 0.74, rotate: 12, variant: "bright", stem: 18 },
  { x: 378, y: 920, scale: 0.7, rotate: -14, variant: "soft", stem: 16 },
  { x: 712, y: 940, scale: 0.8, rotate: 8, variant: "wild", stem: 18 },
  { x: 1060, y: 976, scale: 0.74, rotate: -10, variant: "bright", stem: 18 },
];

const bottomFlowers = [
  { x: 64, y: 1100, scale: 0.84, rotate: -18, variant: "soft", stem: 20 },
  { x: 158, y: 1086, scale: 0.98, rotate: -10, variant: "wild", stem: 26 },
  { x: 246, y: 1094, scale: 0.94, rotate: 12, variant: "soft", stem: 24 },
  { x: 336, y: 1088, scale: 1.08, rotate: 8, variant: "bright", stem: 28 },
  { x: 430, y: 1100, scale: 0.92, rotate: -14, variant: "wild", stem: 22 },
  { x: 522, y: 1096, scale: 0.92, rotate: -14, variant: "soft", stem: 24 },
  { x: 620, y: 1106, scale: 1.02, rotate: 10, variant: "bright", stem: 26 },
  { x: 714, y: 1110, scale: 0.9, rotate: 12, variant: "bright", stem: 22 },
  { x: 822, y: 1098, scale: 1.08, rotate: -8, variant: "wild", stem: 28 },
  { x: 922, y: 1088, scale: 1.02, rotate: -8, variant: "wild", stem: 28 },
  { x: 1034, y: 1098, scale: 0.92, rotate: 10, variant: "soft", stem: 22 },
  { x: 1148, y: 1086, scale: 1.06, rotate: 10, variant: "bright", stem: 28 },
  { x: 1246, y: 1096, scale: 0.94, rotate: -12, variant: "wild", stem: 24 },
  { x: 1328, y: 1100, scale: 0.9, rotate: -12, variant: "soft", stem: 24 },
  { x: 1406, y: 1104, scale: 1, rotate: 8, variant: "bright", stem: 24 },
  { x: 1468, y: 1108, scale: 0.86, rotate: 14, variant: "wild", stem: 22 },
  { x: 1544, y: 1114, scale: 0.82, rotate: -10, variant: "soft", stem: 20 },
];

const bottomFlowersAccent = [
  { x: 112, y: 1118, scale: 0.68, rotate: -10, variant: "rose", shape: "rosette", stem: 16 },
  { x: 286, y: 1120, scale: 0.72, rotate: 10, variant: "pearl", shape: "slender", stem: 18 },
  { x: 388, y: 1116, scale: 0.66, rotate: -12, variant: "gold", shape: "tuft", stem: 16 },
  { x: 572, y: 1124, scale: 0.7, rotate: 8, variant: "rose", shape: "rosette", stem: 18 },
  { x: 676, y: 1128, scale: 0.68, rotate: -10, variant: "pearl", shape: "slender", stem: 16 },
  { x: 776, y: 1122, scale: 0.74, rotate: 12, variant: "gold", shape: "tuft", stem: 18 },
  { x: 980, y: 1120, scale: 0.68, rotate: -8, variant: "rose", shape: "rosette", stem: 16 },
  { x: 1088, y: 1118, scale: 0.7, rotate: 10, variant: "pearl", shape: "slender", stem: 18 },
  { x: 1196, y: 1124, scale: 0.68, rotate: -10, variant: "gold", shape: "tuft", stem: 16 },
  { x: 1368, y: 1126, scale: 0.72, rotate: 8, variant: "rose", shape: "rosette", stem: 18 },
  { x: 1512, y: 1128, scale: 0.66, rotate: -12, variant: "pearl", shape: "slender", stem: 14 },
];

const bottomFlowersFront = [
  { x: 54, y: 1140, scale: 0.62, rotate: -8, variant: "bright", stem: 14 },
  { x: 174, y: 1138, scale: 0.64, rotate: 10, variant: "rose", shape: "rosette", stem: 14 },
  { x: 306, y: 1142, scale: 0.6, rotate: -10, variant: "soft", stem: 12 },
  { x: 446, y: 1138, scale: 0.64, rotate: 8, variant: "gold", shape: "tuft", stem: 14 },
  { x: 590, y: 1144, scale: 0.6, rotate: -12, variant: "pearl", shape: "slender", stem: 12 },
  { x: 734, y: 1140, scale: 0.64, rotate: 10, variant: "bright", stem: 14 },
  { x: 884, y: 1144, scale: 0.6, rotate: -8, variant: "rose", shape: "rosette", stem: 12 },
  { x: 1038, y: 1138, scale: 0.64, rotate: 8, variant: "gold", shape: "tuft", stem: 14 },
  { x: 1186, y: 1142, scale: 0.6, rotate: -10, variant: "soft", stem: 12 },
  { x: 1336, y: 1140, scale: 0.64, rotate: 10, variant: "pearl", shape: "slender", stem: 14 },
  { x: 1490, y: 1144, scale: 0.6, rotate: -8, variant: "bright", stem: 12 },
];

const flowerPetalSets = {
  bright: [
    { x: 0, y: -13, rx: 8, ry: 18, rotate: 0 },
    { x: 10, y: -10, rx: 7, ry: 17, rotate: 32 },
    { x: 15, y: 0, rx: 7, ry: 17, rotate: 72 },
    { x: 10, y: 10, rx: 7, ry: 17, rotate: 118 },
    { x: 0, y: 13, rx: 7, ry: 16, rotate: 180 },
    { x: -10, y: 10, rx: 7, ry: 17, rotate: -118 },
    { x: -15, y: 0, rx: 7, ry: 17, rotate: -72 },
    { x: -10, y: -10, rx: 7, ry: 17, rotate: -32 },
  ],
  soft: [
    { x: 0, y: -12, rx: 7, ry: 16, rotate: 0 },
    { x: 10, y: -8, rx: 6, ry: 15, rotate: 34 },
    { x: 13, y: 1, rx: 6, ry: 15, rotate: 76 },
    { x: 9, y: 10, rx: 6, ry: 14, rotate: 124 },
    { x: 0, y: 12, rx: 6, ry: 14, rotate: 180 },
    { x: -9, y: 10, rx: 6, ry: 14, rotate: -124 },
    { x: -13, y: 1, rx: 6, ry: 15, rotate: -76 },
    { x: -10, y: -8, rx: 6, ry: 15, rotate: -34 },
  ],
  wild: [
    { x: 0, y: -14, rx: 8, ry: 19, rotate: -4 },
    { x: 11, y: -11, rx: 7, ry: 17, rotate: 26 },
    { x: 17, y: -1, rx: 7, ry: 18, rotate: 62 },
    { x: 13, y: 10, rx: 7, ry: 17, rotate: 108 },
    { x: 2, y: 15, rx: 7, ry: 16, rotate: 162 },
    { x: -10, y: 12, rx: 7, ry: 17, rotate: -126 },
    { x: -17, y: 1, rx: 7, ry: 18, rotate: -74 },
    { x: -11, y: -11, rx: 7, ry: 17, rotate: -30 },
  ],
  rosette: [
    { x: 0, y: -10, rx: 6, ry: 13, rotate: 0 },
    { x: 8, y: -8, rx: 6, ry: 13, rotate: 26 },
    { x: 12, y: 0, rx: 6, ry: 12, rotate: 64 },
    { x: 8, y: 8, rx: 6, ry: 13, rotate: 116 },
    { x: 0, y: 10, rx: 6, ry: 12, rotate: 180 },
    { x: -8, y: 8, rx: 6, ry: 13, rotate: -116 },
    { x: -12, y: 0, rx: 6, ry: 12, rotate: -64 },
    { x: -8, y: -8, rx: 6, ry: 13, rotate: -26 },
    { x: 0, y: 0, rx: 5, ry: 10, rotate: 22 },
  ],
  slender: [
    { x: 0, y: -14, rx: 5, ry: 17, rotate: 0 },
    { x: 8, y: -8, rx: 4, ry: 16, rotate: 28 },
    { x: 12, y: 2, rx: 4, ry: 15, rotate: 70 },
    { x: 8, y: 10, rx: 4, ry: 14, rotate: 118 },
    { x: 0, y: 13, rx: 4, ry: 13, rotate: 180 },
    { x: -8, y: 10, rx: 4, ry: 14, rotate: -118 },
    { x: -12, y: 2, rx: 4, ry: 15, rotate: -70 },
    { x: -8, y: -8, rx: 4, ry: 16, rotate: -28 },
  ],
  tuft: [
    { x: 0, y: -12, rx: 5, ry: 11, rotate: 0 },
    { x: 7, y: -8, rx: 4, ry: 10, rotate: 24 },
    { x: 11, y: -1, rx: 4, ry: 10, rotate: 58 },
    { x: 9, y: 7, rx: 4, ry: 10, rotate: 102 },
    { x: 3, y: 11, rx: 4, ry: 9, rotate: 148 },
    { x: -5, y: 10, rx: 4, ry: 10, rotate: -132 },
    { x: -11, y: 1, rx: 4, ry: 10, rotate: -64 },
    { x: -7, y: -8, rx: 4, ry: 10, rotate: -24 },
  ],
};

const bottomGrassClumps = [
  { x: 48, y: 1168, scale: 1.08, tone: "deep" },
  { x: 132, y: 1164, scale: 0.94, tone: "sage" },
  { x: 218, y: 1162, scale: 0.98, tone: "lime" },
  { x: 302, y: 1168, scale: 0.92, tone: "deep" },
  { x: 394, y: 1170, scale: 1.08, tone: "sage" },
  { x: 486, y: 1168, scale: 0.96, tone: "lime" },
  { x: 578, y: 1172, scale: 0.96, tone: "deep" },
  { x: 670, y: 1168, scale: 1.02, tone: "sage" },
  { x: 762, y: 1170, scale: 1.04, tone: "lime" },
  { x: 854, y: 1166, scale: 0.94, tone: "deep" },
  { x: 946, y: 1168, scale: 0.96, tone: "sage" },
  { x: 1038, y: 1164, scale: 1.02, tone: "lime" },
  { x: 1130, y: 1168, scale: 1.06, tone: "deep" },
  { x: 1222, y: 1166, scale: 0.92, tone: "sage" },
  { x: 1314, y: 1168, scale: 1.02, tone: "lime" },
  { x: 1406, y: 1170, scale: 1.06, tone: "deep" },
  { x: 1490, y: 1168, scale: 0.92, tone: "sage" },
];

const bottomGrassDense = [
  { x: 16, y: 1218, scale: 1.06, tone: "deep" },
  { x: 100, y: 1220, scale: 0.96, tone: "lime" },
  { x: 186, y: 1216, scale: 1.02, tone: "sage" },
  { x: 272, y: 1222, scale: 0.94, tone: "deep" },
  { x: 358, y: 1218, scale: 1.08, tone: "lime" },
  { x: 444, y: 1224, scale: 0.98, tone: "sage" },
  { x: 530, y: 1218, scale: 1.04, tone: "deep" },
  { x: 616, y: 1222, scale: 0.96, tone: "lime" },
  { x: 702, y: 1218, scale: 1.08, tone: "sage" },
  { x: 788, y: 1224, scale: 0.98, tone: "deep" },
  { x: 874, y: 1218, scale: 1.02, tone: "lime" },
  { x: 960, y: 1222, scale: 0.96, tone: "sage" },
  { x: 1046, y: 1218, scale: 1.04, tone: "deep" },
  { x: 1132, y: 1224, scale: 0.98, tone: "lime" },
  { x: 1218, y: 1218, scale: 1.08, tone: "sage" },
  { x: 1304, y: 1222, scale: 0.96, tone: "deep" },
  { x: 1390, y: 1218, scale: 1.08, tone: "lime" },
  { x: 1476, y: 1222, scale: 0.96, tone: "sage" },
];

const bottomGrassFront = [
  { x: 0, y: 1260, scale: 1.14, tone: "deep" },
  { x: 72, y: 1264, scale: 1.04, tone: "sage" },
  { x: 146, y: 1260, scale: 1.08, tone: "lime" },
  { x: 220, y: 1266, scale: 1, tone: "deep" },
  { x: 296, y: 1260, scale: 1.12, tone: "sage" },
  { x: 372, y: 1266, scale: 1.02, tone: "lime" },
  { x: 448, y: 1260, scale: 1.1, tone: "deep" },
  { x: 524, y: 1264, scale: 1.02, tone: "sage" },
  { x: 600, y: 1260, scale: 1.14, tone: "lime" },
  { x: 676, y: 1266, scale: 1.04, tone: "deep" },
  { x: 752, y: 1260, scale: 1.08, tone: "sage" },
  { x: 828, y: 1264, scale: 1.02, tone: "lime" },
  { x: 904, y: 1260, scale: 1.1, tone: "deep" },
  { x: 980, y: 1266, scale: 1.02, tone: "sage" },
  { x: 1056, y: 1260, scale: 1.14, tone: "lime" },
  { x: 1132, y: 1264, scale: 1.04, tone: "deep" },
  { x: 1208, y: 1260, scale: 1.08, tone: "sage" },
  { x: 1284, y: 1266, scale: 1.02, tone: "lime" },
  { x: 1360, y: 1260, scale: 1.12, tone: "deep" },
  { x: 1436, y: 1264, scale: 1.04, tone: "sage" },
  { x: 1512, y: 1260, scale: 1.08, tone: "lime" },
];

const bottomGrassUltraFront = [
  { x: -16, y: 1292, scale: 1.2, tone: "deep" },
  { x: 44, y: 1296, scale: 1.08, tone: "lime" },
  { x: 108, y: 1292, scale: 1.14, tone: "sage" },
  { x: 172, y: 1298, scale: 1.04, tone: "deep" },
  { x: 238, y: 1292, scale: 1.18, tone: "lime" },
  { x: 304, y: 1296, scale: 1.08, tone: "sage" },
  { x: 370, y: 1292, scale: 1.16, tone: "deep" },
  { x: 436, y: 1298, scale: 1.04, tone: "lime" },
  { x: 502, y: 1292, scale: 1.18, tone: "sage" },
  { x: 568, y: 1296, scale: 1.08, tone: "deep" },
  { x: 634, y: 1292, scale: 1.16, tone: "lime" },
  { x: 700, y: 1298, scale: 1.04, tone: "sage" },
  { x: 766, y: 1292, scale: 1.2, tone: "deep" },
  { x: 832, y: 1296, scale: 1.08, tone: "lime" },
  { x: 898, y: 1292, scale: 1.14, tone: "sage" },
  { x: 964, y: 1298, scale: 1.04, tone: "deep" },
  { x: 1030, y: 1292, scale: 1.18, tone: "lime" },
  { x: 1096, y: 1296, scale: 1.08, tone: "sage" },
  { x: 1162, y: 1292, scale: 1.16, tone: "deep" },
  { x: 1228, y: 1298, scale: 1.04, tone: "lime" },
  { x: 1294, y: 1292, scale: 1.18, tone: "sage" },
  { x: 1360, y: 1296, scale: 1.08, tone: "deep" },
  { x: 1426, y: 1292, scale: 1.16, tone: "lime" },
  { x: 1492, y: 1298, scale: 1.04, tone: "sage" },
];

const hangingVines = [
  "M92 -96 C34 32, 42 154, 104 262 C168 374, 174 490, 108 604 C40 726, 44 854, 112 968 C176 1078, 178 1188, 100 1292",
  "M236 -104 C304 18, 312 138, 248 248 C184 360, 182 478, 248 592 C312 704, 318 830, 244 948 C172 1062, 176 1180, 238 1296",
  "M392 -108 C328 16, 330 140, 396 254 C462 368, 472 490, 404 608 C334 730, 332 852, 398 970 C462 1082, 470 1192, 394 1298",
  "M560 -102 C624 18, 632 136, 566 246 C500 358, 494 476, 562 592 C628 706, 638 834, 570 954 C500 1076, 498 1188, 562 1300",
  "M708 -108 C644 18, 646 142, 712 258 C780 374, 790 496, 720 614 C648 738, 644 862, 710 980 C774 1094, 780 1200, 708 1298",
  "M892 -102 C958 18, 966 138, 900 250 C832 364, 826 482, 894 598 C962 714, 970 840, 902 960 C832 1080, 830 1190, 894 1300",
  "M1048 -108 C980 18, 984 144, 1052 260 C1122 378, 1132 500, 1060 620 C986 744, 980 866, 1048 984 C1114 1098, 1120 1202, 1048 1300",
  "M1216 -104 C1282 18, 1288 140, 1222 252 C1154 366, 1148 486, 1216 602 C1282 716, 1290 842, 1222 964 C1154 1084, 1150 1192, 1218 1296",
  "M1376 -108 C1308 18, 1312 144, 1380 262 C1450 380, 1460 502, 1386 622 C1310 746, 1304 870, 1372 988 C1438 1102, 1446 1204, 1378 1300",
  "M1518 -102 C1580 18, 1586 136, 1522 246 C1458 356, 1454 474, 1520 590 C1584 704, 1590 832, 1524 954 C1458 1076, 1454 1190, 1518 1298",
];

const hangingVinesSoft = [
  "M126 -88 C178 28, 184 148, 136 260 C88 372, 88 492, 138 610 C188 724, 196 850, 140 972 C84 1088, 86 1192, 132 1298",
  "M284 -96 C230 24, 226 146, 280 260 C334 374, 342 496, 286 614 C230 732, 224 858, 278 980 C330 1094, 336 1198, 282 1300",
  "M430 -92 C482 26, 488 150, 438 266 C388 382, 390 504, 440 624 C492 742, 500 866, 444 988 C390 1102, 392 1202, 438 1300",
  "M522 -88 C470 28, 468 152, 520 268 C572 384, 580 506, 526 624 C472 742, 466 868, 518 990 C568 1104, 574 1204, 520 1300",
  "M744 -92 C798 26, 804 148, 752 264 C700 382, 700 506, 752 626 C804 744, 812 870, 756 992 C702 1106, 700 1206, 754 1300",
  "M930 -94 C876 24, 872 148, 924 264 C976 382, 984 506, 930 626 C876 746, 870 872, 922 994 C972 1108, 978 1208, 928 1300",
  "M1084 -88 C1138 28, 1144 152, 1092 270 C1038 388, 1036 510, 1088 630 C1140 750, 1148 874, 1094 996 C1040 1110, 1038 1208, 1090 1300",
  "M1178 -92 C1124 26, 1120 150, 1172 268 C1224 386, 1232 510, 1178 632 C1122 754, 1118 878, 1170 998 C1220 1112, 1226 1210, 1176 1300",
  "M1430 -90 C1482 28, 1488 152, 1438 270 C1388 388, 1390 512, 1440 634 C1490 756, 1498 880, 1442 1002 C1388 1116, 1390 1212, 1440 1300",
];

const sideVines = [
  "M-22 16 C16 126, 22 236, 4 346 C-16 460, -18 572, 12 684 C42 794, 52 902, 30 1012 C8 1120, 4 1202, 28 1268",
  "M-36 244 C10 356, 24 470, 2 584 C-18 698, -14 812, 12 922 C38 1034, 50 1144, 26 1264",
  "M1628 12 C1598 124, 1592 236, 1610 348 C1630 462, 1632 576, 1602 688 C1572 800, 1560 910, 1584 1022 C1606 1134, 1608 1212, 1588 1268",
  "M1640 238 C1596 352, 1584 466, 1604 582 C1622 696, 1618 810, 1592 922 C1566 1036, 1558 1146, 1578 1266",
];

const sideVinesSoft = [
  "M22 30 C42 140, 50 252, 32 366 C14 478, 12 590, 38 702 C64 814, 72 924, 54 1038 C36 1150, 30 1222, 44 1270",
  "M1598 26 C1578 138, 1570 252, 1588 368 C1606 482, 1608 596, 1582 710 C1556 824, 1546 936, 1564 1050 C1582 1160, 1588 1230, 1572 1270",
];

const snakeVines = [
  "M188 -24 C150 126, 166 252, 252 332 C344 416, 366 530, 282 634 C198 738, 204 846, 298 928 C390 1010, 410 1122, 330 1212 C282 1266, 292 1286, 346 1302",
  "M614 -30 C570 118, 586 244, 678 326 C772 410, 794 526, 708 632 C622 738, 626 850, 722 934 C818 1018, 840 1130, 758 1222 C708 1278, 718 1290, 778 1306",
  "M1042 -26 C998 122, 1014 250, 1106 334 C1198 418, 1220 534, 1134 640 C1048 746, 1054 856, 1148 940 C1242 1024, 1264 1138, 1184 1228 C1134 1282, 1148 1294, 1208 1308",
  "M1458 -22 C1416 126, 1432 252, 1512 334 C1594 418, 1610 530, 1534 632 C1456 736, 1458 844, 1540 926 C1622 1008, 1638 1118, 1564 1210 C1520 1264, 1540 1284, 1616 1306",
];

function renderFlower(
  { x, y, scale = 1, rotate = 0, variant = "soft", shape, stem = 24, flip = false },
  index,
) {
  const scaled = scale * 1.16;
  const offsetXPattern = [-6, -2, 4, 1, -4, 6];
  const offsetYPattern = [0, -4, 2, -3, 1, -2];
  const rotatePattern = [-7, 4, -3, 6, -5, 2];
  const stretchXPattern = [1.02, 0.98, 1.04, 0.99, 1.03, 0.97];
  const stretchYPattern = [0.98, 1.03, 0.97, 1.04, 0.99, 1.02];
  const xOffset = offsetXPattern[index % offsetXPattern.length];
  const yOffset = offsetYPattern[index % offsetYPattern.length];
  const rotation = rotate + rotatePattern[index % rotatePattern.length];
  const xScale = scaled * stretchXPattern[index % stretchXPattern.length];
  const yScaleBase = scaled * stretchYPattern[index % stretchYPattern.length];
  const yScale = flip ? -yScaleBase : yScaleBase;

  const petals = flowerPetalSets[shape ?? variant] ?? flowerPetalSets.soft;

  return (
    <g
      key={`flower-${x}-${y}-${index}`}
      className={`flower-cluster flower-cluster-${variant}`}
      transform={`translate(${x + xOffset} ${y + yOffset}) rotate(${rotation}) scale(${xScale} ${yScale})`}
    >
      <path className="flower-stem" d={`M0 ${stem} C -2 ${stem - 8}, 4 ${stem - 18}, 0 -8`} />
      {petals.map((petal, petalIndex) => (
        <ellipse
          key={`${variant}-petal-${petalIndex}`}
          className="bloom-petal"
          cx={petal.x}
          cy={petal.y}
          rx={petal.rx}
          ry={petal.ry}
          transform={`rotate(${petal.rotate} ${petal.x} ${petal.y})`}
        />
      ))}
      <circle className="bloom-core" cx="0" cy="0" r="6" />
    </g>
  );
}

function renderGrassClump({ x, y, scale = 1, flip = false, tone = "deep" }, index) {
  const yScale = flip ? -scale : scale;

  return (
    <g
      key={`grass-${x}-${y}-${index}`}
      className={`grass-clump grass-clump-${tone}`}
      transform={`translate(${x} ${y}) scale(${scale} ${yScale})`}
    >
      <path className="grass-blade grass-blade-deep" d="M0 0 C-8 -18 -12 -42 -16 -74" />
      <path className="grass-blade grass-blade-light" d="M6 0 C0 -20 2 -52 6 -96" />
      <path className="grass-blade grass-blade-tip" d="M12 0 C10 -18 14 -48 18 -108" />
      <path className="grass-blade grass-blade-deep" d="M20 0 C22 -24 28 -48 38 -82" />
      <path className="grass-blade grass-blade-light" d="M28 0 C34 -18 46 -38 58 -68" />
      <path className="grass-blade grass-blade-deep" d="M34 0 C24 -16 16 -34 12 -64" />
      <path className="grass-blade grass-blade-tip" d="M42 0 C44 -18 48 -44 52 -78" />
      <path className="grass-blade grass-blade-light" d="M50 0 C58 -16 70 -34 84 -58" />
      <path className="grass-blade grass-blade-deep" d="M58 0 C50 -20 50 -40 54 -72" />
      <path className="grass-blade grass-blade-tip" d="M66 0 C72 -20 84 -44 98 -76" />
      <path className="grass-blade grass-blade-light" d="M76 0 C80 -14 88 -28 102 -46" />
      <path className="grass-blade grass-blade-deep" d="M84 0 C80 -18 86 -42 94 -92" />
      <path className="grass-blade grass-blade-tip" d="M92 0 C98 -16 108 -34 122 -64" />
      <path className="grass-blade grass-blade-light" d="M100 0 C94 -18 98 -38 110 -72" />
      <path className="grass-blade grass-blade-deep" d="M108 0 C116 -18 126 -42 136 -96" />
      <path className="grass-blade grass-blade-tip" d="M116 0 C120 -16 130 -30 146 -52" />
    </g>
  );
}

function OfficersVisual() {
  return (
    <div className="officers-page-visual" aria-hidden="true">
      <svg
        className="officers-vine-svg"
        viewBox="0 0 1600 1300"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="vineStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6e9e78" stopOpacity="0.86" />
            <stop offset="100%" stopColor="#345f43" stopOpacity="0.94" />
          </linearGradient>
          <linearGradient id="vineStrokeAlt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#89ad72" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#5c7f54" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="vineStrokeDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#56745b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2c4734" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="vineLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c8e3cb" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6ca277" stopOpacity="0.88" />
          </linearGradient>
          <linearGradient id="petalBloom" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5ead8" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#d8b37a" stopOpacity="0.86" />
          </linearGradient>
          <radialGradient id="forestGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ecf8ee" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#7db388" stopOpacity="0.08" />
          </radialGradient>
        </defs>

        <g className="hanging-vine-columns">
          {hangingVines.map((path, index) => (
            <path
              key={`hanging-vine-${index}`}
              className={`vine-drop vine-drop-${index % 3}`}
              d={path}
            />
          ))}
          {hangingVinesSoft.map((path, index) => (
            <path
              key={`hanging-vine-soft-${index}`}
              className={`vine-drop-soft vine-drop-soft-${index % 3}`}
              d={path}
            />
          ))}
        </g>

        <g className="side-vines">
          {sideVines.map((path, index) => (
            <path
              key={`side-vine-${index}`}
              className={`vine-side vine-side-${index % 3}`}
              d={path}
            />
          ))}
          {sideVinesSoft.map((path, index) => (
            <path
              key={`side-vine-soft-${index}`}
              className={`vine-side-soft vine-side-soft-${index % 2}`}
              d={path}
            />
          ))}
        </g>

        <g className="snake-vines">
          {snakeVines.map((path, index) => (
            <path
              key={`snake-vine-${index}`}
              className={`vine-snake vine-snake-${index % 2}`}
              d={path}
            />
          ))}
        </g>

        <g className="forest-band forest-band-top" transform="translate(0 -146)">
          <path
            className="forest-band-fill forest-band-fill-top"
            d="M-80 214 C140 160, 310 162, 488 206 C646 244, 824 252, 1014 228 C1196 204, 1382 194, 1680 250 L1680 -40 L-80 -40 Z"
          />
          <path
            className="forest-band-silhouette forest-band-silhouette-top"
            d="M-100 238 C150 186, 354 194, 530 232 C718 272, 904 278, 1118 248 C1318 220, 1480 226, 1680 266 L1680 42 L-100 42 Z"
          />
          <path
            className="forest-band-detail forest-band-detail-top"
            d="M-40 238 C180 190, 364 194, 538 228 C702 260, 876 264, 1062 242 C1240 220, 1438 222, 1680 268"
          />
          <g className="shrub-cluster shrub-cluster-top">
            <ellipse className="shrub-mass" cx="124" cy="236" rx="48" ry="24" />
            <ellipse className="shrub-mass shrub-mass-mid" cx="190" cy="228" rx="56" ry="26" />
            <ellipse className="shrub-mass shrub-mass-soft" cx="350" cy="220" rx="44" ry="22" />
            <ellipse className="shrub-mass shrub-mass-mid" cx="610" cy="232" rx="66" ry="30" />
            <ellipse className="shrub-mass" cx="824" cy="230" rx="54" ry="26" />
            <ellipse className="shrub-mass shrub-mass-soft" cx="1048" cy="226" rx="46" ry="24" />
            <ellipse className="shrub-mass" cx="1140" cy="228" rx="58" ry="28" />
            <ellipse className="shrub-mass shrub-mass-mid" cx="1354" cy="234" rx="60" ry="28" />
            <ellipse className="shrub-mass shrub-mass-soft" cx="1486" cy="246" rx="46" ry="24" />
          </g>
          <g className="forest-leaf-band">
            <ellipse className="vine-leaf" cx="118" cy="212" rx="16" ry="38" transform="rotate(-28 118 212)" />
            <ellipse className="vine-leaf vine-leaf-soft" cx="198" cy="206" rx="12" ry="28" transform="rotate(20 198 206)" />
            <ellipse className="vine-leaf" cx="404" cy="196" rx="14" ry="34" transform="rotate(18 404 196)" />
            <ellipse className="vine-leaf vine-leaf-soft" cx="760" cy="214" rx="16" ry="36" transform="rotate(-16 760 214)" />
            <ellipse className="vine-leaf" cx="1096" cy="206" rx="14" ry="32" transform="rotate(26 1096 206)" />
            <ellipse className="vine-leaf vine-leaf-soft" cx="1268" cy="214" rx="12" ry="28" transform="rotate(-14 1268 214)" />
            <ellipse className="vine-leaf vine-leaf-soft" cx="1490" cy="228" rx="16" ry="38" transform="rotate(-22 1490 228)" />
          </g>
          <g className="forest-blooms forest-blooms-top forest-blooms-top-back">
            {topFlowersBack.map(renderFlower)}
            {topFlowersAccent.map(renderFlower)}
          </g>
          <g className="forest-blooms forest-blooms-top forest-blooms-top-mid">
            {topFlowers.map(renderFlower)}
          </g>
          <g className="forest-blooms forest-blooms-top forest-blooms-top-front">
            {topFlowersFront.map(renderFlower)}
            {topFlowersLower.map(renderFlower)}
          </g>
        </g>

        <g className="thorn-cluster thorn-cluster-one">
          <path className="thorn" d="M456 510 L468 494 L462 520" />
          <path className="thorn" d="M640 494 L652 476 L646 502" />
          <path className="thorn" d="M980 486 L992 468 L986 494" />
          <path className="thorn" d="M1256 534 L1268 516 L1262 542" />
        </g>

        <g className="thorn-cluster thorn-cluster-two">
          <path className="thorn thorn-soft" d="M372 746 L384 732 L380 754" />
          <path className="thorn thorn-soft" d="M714 720 L726 706 L722 728" />
          <path className="thorn thorn-soft" d="M916 716 L928 702 L924 724" />
          <path className="thorn thorn-soft" d="M1180 770 L1192 756 L1188 778" />
        </g>

        <g className="thorn-cluster thorn-cluster-three">
          <path className="thorn" d="M444 1026 L456 1014 L450 1034" />
          <path className="thorn" d="M888 998 L900 986 L894 1008" />
          <path className="thorn" d="M1280 988 L1292 976 L1286 998" />
        </g>

        <g className="forest-blooms forest-blooms-mid">
          {midFlowers.map(renderFlower)}
        </g>

        <g className="forest-band forest-band-bottom" transform="translate(0 34)">
          <path
            className="forest-band-fill forest-band-fill-bottom"
            d="M-80 1118 C174 1030, 404 1028, 628 1092 C864 1160, 1118 1170, 1680 1098 L1680 1360 L-80 1360 Z"
          />
          <path
            className="forest-band-silhouette forest-band-silhouette-bottom"
            d="M-90 1098 C188 1022, 422 1028, 648 1090 C892 1158, 1156 1162, 1680 1100 L1680 1234 L-90 1234 Z"
          />
          <path
            className="forest-band-detail forest-band-detail-bottom"
            d="M-60 1086 C194 1014, 426 1018, 648 1080 C884 1146, 1140 1156, 1672 1094"
          />
          <g className="forest-floor-stems">
            <path className="floor-stem" d="M132 1188 C144 1124, 154 1068, 170 1006" />
            <path className="floor-stem" d="M182 1180 C190 1118, 194 1064, 206 1008" />
            <path className="floor-stem" d="M522 1188 C534 1122, 546 1068, 562 1012" />
            <path className="floor-stem" d="M776 1194 C790 1128, 806 1074, 826 1014" />
            <path className="floor-stem" d="M964 1192 C970 1126, 982 1076, 1000 1016" />
            <path className="floor-stem" d="M1328 1186 C1338 1122, 1352 1068, 1370 1012" />
            <path className="floor-stem" d="M1464 1188 C1478 1126, 1490 1074, 1508 1018" />
          </g>
          <g className="shrub-cluster shrub-cluster-bottom">
            <ellipse className="shrub-mass shrub-mass-mid" cx="130" cy="1118" rx="64" ry="30" />
            <ellipse className="shrub-mass shrub-mass-soft" cx="250" cy="1110" rx="44" ry="22" />
            <ellipse className="shrub-mass" cx="440" cy="1112" rx="58" ry="28" />
            <ellipse className="shrub-mass shrub-mass-soft" cx="784" cy="1126" rx="70" ry="32" />
            <ellipse className="shrub-mass" cx="980" cy="1112" rx="52" ry="24" />
            <ellipse className="shrub-mass" cx="1160" cy="1114" rx="60" ry="28" />
            <ellipse className="shrub-mass shrub-mass-soft" cx="1334" cy="1114" rx="48" ry="24" />
            <ellipse className="shrub-mass shrub-mass-soft" cx="1472" cy="1120" rx="52" ry="26" />
          </g>
          <g className="forest-floor-leaves">
            <ellipse className="vine-leaf" cx="156" cy="1086" rx="18" ry="42" transform="rotate(-34 156 1086)" />
            <ellipse className="vine-leaf vine-leaf-soft" cx="236" cy="1068" rx="16" ry="34" transform="rotate(18 236 1068)" />
            <ellipse className="vine-leaf" cx="486" cy="1080" rx="18" ry="42" transform="rotate(-22 486 1080)" />
            <ellipse className="vine-leaf vine-leaf-soft" cx="586" cy="1064" rx="14" ry="30" transform="rotate(26 586 1064)" />
            <ellipse className="vine-leaf vine-leaf-soft" cx="762" cy="1082" rx="16" ry="34" transform="rotate(-18 762 1082)" />
            <ellipse className="vine-leaf" cx="928" cy="1088" rx="18" ry="42" transform="rotate(-18 928 1088)" />
            <ellipse className="vine-leaf vine-leaf-soft" cx="1028" cy="1072" rx="14" ry="30" transform="rotate(24 1028 1072)" />
            <ellipse className="vine-leaf" cx="1288" cy="1084" rx="18" ry="42" transform="rotate(-28 1288 1084)" />
            <ellipse className="vine-leaf vine-leaf-soft" cx="1392" cy="1070" rx="14" ry="30" transform="rotate(22 1392 1070)" />
          </g>
          <g className="grass-cluster grass-cluster-bottom">
            {bottomGrassClumps.map(renderGrassClump)}
            {bottomGrassDense.map(renderGrassClump)}
            {bottomGrassFront.map(renderGrassClump)}
            {bottomGrassUltraFront.map(renderGrassClump)}
          </g>
          <g className="forest-blooms forest-blooms-bottom">
            {bottomFlowers.map(renderFlower)}
            {bottomFlowersAccent.map(renderFlower)}
            {bottomFlowersFront.map(renderFlower)}
          </g>
        </g>
      </svg>
    </div>
  );
}

export default OfficersVisual;

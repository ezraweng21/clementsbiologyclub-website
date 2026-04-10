const leafClusterGroups = [
  {
    className: "card-wreath-foliage-outer",
    clusters: [
      { x: 94, y: 106, rotate: -70, scale: 0.72, stretch: 1.04, flip: 1 },
      { x: 128, y: 90, rotate: -48, scale: 0.66, stretch: 1.12, flip: -1 },
      { x: 170, y: 78, rotate: -26, scale: 0.7, stretch: 0.98, flip: 1 },
      { x: 218, y: 72, rotate: -4, scale: 0.68, stretch: 1.08, flip: -1 },
      { x: 266, y: 78, rotate: 20, scale: 0.7, stretch: 1, flip: 1 },
      { x: 314, y: 96, rotate: 42, scale: 0.68, stretch: 1.1, flip: -1 },
      { x: 354, y: 128, rotate: 62, scale: 0.72, stretch: 1.02, flip: 1 },
      { x: 382, y: 174, rotate: 80, scale: 0.66, stretch: 1.12, flip: -1 },
      { x: 398, y: 226, rotate: 98, scale: 0.7, stretch: 1, flip: 1 },
      { x: 394, y: 282, rotate: 118, scale: 0.68, stretch: 1.08, flip: -1 },
      { x: 374, y: 336, rotate: 140, scale: 0.72, stretch: 1.04, flip: 1 },
      { x: 340, y: 380, rotate: 160, scale: 0.66, stretch: 1.12, flip: -1 },
      { x: 294, y: 412, rotate: 180, scale: 0.7, stretch: 1, flip: 1 },
      { x: 240, y: 430, rotate: 198, scale: 0.68, stretch: 1.08, flip: -1 },
      { x: 184, y: 430, rotate: 218, scale: 0.7, stretch: 1.02, flip: 1 },
      { x: 132, y: 414, rotate: 238, scale: 0.68, stretch: 1.12, flip: -1 },
      { x: 88, y: 380, rotate: 258, scale: 0.72, stretch: 1, flip: 1 },
      { x: 56, y: 334, rotate: 278, scale: 0.66, stretch: 1.08, flip: -1 },
      { x: 38, y: 280, rotate: 296, scale: 0.7, stretch: 1.04, flip: 1 },
      { x: 36, y: 224, rotate: 316, scale: 0.68, stretch: 1.12, flip: -1 },
      { x: 50, y: 170, rotate: 338, scale: 0.7, stretch: 1, flip: 1 },
      { x: 66, y: 132, rotate: 356, scale: 0.62, stretch: 1.08, flip: -1 },
    ],
  },
];

import { memo } from "react";

function LeafCluster({ x, y, rotate, scale, stretch = 1, flip = 1 }) {
  return (
    <g
      className="card-leaf-cluster"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale * flip} ${scale * stretch})`}
    >
      <path className="card-leaf-stem" d="M0 0 C8 6, 16 14, 24 24" />

      <path
        className="card-leaf"
        d="M24 24 C10 26, -4 12, -2 -8 C14 -10, 30 8, 24 24"
      />
      <path className="card-leaf-vein" d="M24 24 C14 16, 7 8, 0 0" />
    </g>
  );
}

const OfficerCardVines = memo(function OfficerCardVines({ variant = 0 }) {
  return (
    <div className={`officer-card-vines officer-card-vines-${variant}`} aria-hidden="true">
      <svg className="officer-card-vines-svg" viewBox="0 0 420 500" preserveAspectRatio="none">
        <g className="card-wreath-branches">
          <path
            className="card-vine card-vine-outer"
            d="M108 110
               C58 150, 34 226, 44 302
               C54 380, 92 434, 158 464
               C228 492, 310 486, 362 444
               C402 410, 420 350, 410 280
               C400 204, 382 152, 336 116
               C278 74, 172 70, 108 110"
          />
          <path
            className="card-vine card-vine-outer"
            d="M126 96
               C74 138, 52 212, 60 288
               C68 360, 102 416, 164 446
               C230 478, 306 474, 356 438
               C394 408, 410 356, 404 292
               C396 226, 378 170, 336 128
               C286 86, 194 76, 126 96"
          />
          <path
            className="card-vine card-vine-main"
            d="M122 122
               C76 156, 54 224, 62 294
               C70 362, 102 412, 162 440
               C226 468, 298 464, 346 428
               C384 398, 400 344, 392 280
               C384 210, 368 164, 326 132
               C272 92, 180 88, 122 122"
          />
          <path
            className="card-vine card-vine-main"
            d="M134 138
               C96 170, 76 230, 84 292
               C92 350, 122 394, 174 418
               C230 444, 292 442, 334 412
               C366 386, 380 338, 374 282
               C366 220, 352 178, 314 148
               C266 114, 188 110, 134 138"
          />
          <path
            className="card-vine card-vine-mid"
            d="M116 146
               C88 190, 84 244, 96 300
               C108 350, 140 390, 190 408
               C240 424, 290 418, 324 388
               C354 360, 364 316, 356 264
               C346 214, 330 178, 296 152
               C250 122, 170 120, 116 146"
          />
          <path
            className="card-vine card-vine-mid"
            d="M102 104
               C140 80, 194 70, 252 78
               C316 86, 362 110, 388 154"
          />
          <path
            className="card-vine card-vine-mid"
            d="M90 382
               C132 430, 196 450, 266 444
               C324 438, 370 414, 394 374"
          />
          <path
            className="card-vine card-vine-mid"
            d="M76 182
               C58 224, 56 272, 70 322"
          />
          <path
            className="card-vine card-vine-mid"
            d="M370 174
               C388 218, 392 268, 378 322"
          />
        </g>

        <g className="card-wreath-twists">
          <path
            className="card-vine card-vine-loop"
            d="M88 154
               C118 128, 152 132, 164 162
               C176 194, 154 220, 122 216
               C90 210, 74 180, 88 154"
          />
          <path
            className="card-vine card-vine-loop"
            d="M260 100
               C296 74, 334 82, 344 116
               C354 150, 328 176, 292 170
               C258 162, 244 128, 260 100"
          />
          <path
            className="card-vine card-vine-loop"
            d="M84 320
               C114 298, 146 304, 158 334
               C168 364, 148 390, 118 386
               C88 380, 72 350, 84 320"
          />
          <path
            className="card-vine card-vine-loop"
            d="M264 314
               C298 290, 334 298, 344 332
               C354 366, 328 390, 294 386
               C260 380, 248 346, 264 314"
          />
          <path
            className="card-vine card-vine-loop"
            d="M94 108
               C116 92, 138 96, 146 116
               C154 138, 140 154, 118 150
               C96 144, 88 122, 94 108"
          />
          <path
            className="card-vine card-vine-loop"
            d="M298 130
               C320 114, 340 118, 346 138
               C352 160, 338 176, 318 172
               C298 166, 292 146, 298 130"
          />
          <path
            className="card-vine card-vine-loop"
            d="M100 364
               C122 348, 144 352, 150 372
               C156 394, 142 408, 122 404
               C102 398, 94 380, 100 364"
          />
          <path
            className="card-vine card-vine-loop"
            d="M286 352
               C308 336, 330 340, 338 360
               C344 382, 330 398, 308 394
               C288 388, 280 370, 286 352"
          />
          <path
            className="card-vine card-vine-fine"
            d="M150 96
               C186 84, 228 82, 274 94"
          />
          <path
            className="card-vine card-vine-fine"
            d="M116 132
               C142 154, 148 182, 132 208"
          />
          <path
            className="card-vine card-vine-fine"
            d="M302 104
               C326 126, 332 154, 316 182"
          />
          <path
            className="card-vine card-vine-fine"
            d="M108 338
               C132 358, 138 386, 122 408"
          />
          <path
            className="card-vine card-vine-fine"
            d="M298 322
               C322 342, 328 370, 312 394"
          />
          <path
            className="card-vine card-vine-fine"
            d="M136 426
               C186 440, 240 440, 292 424"
          />
          <path
            className="card-vine card-vine-fine"
            d="M360 126
               C374 142, 378 162, 372 184"
          />
          <path
            className="card-vine card-vine-fine"
            d="M72 334
               C64 356, 68 378, 82 396"
          />
        </g>

        {leafClusterGroups.map((group) => (
          <g key={group.className} className={`card-wreath-foliage ${group.className}`}>
            {group.clusters.map((cluster, index) => (
              <LeafCluster
                key={`${group.className}-${cluster.x}-${cluster.y}-${index}`}
                x={cluster.x}
                y={cluster.y}
                rotate={cluster.rotate}
                scale={cluster.scale}
                stretch={cluster.stretch}
                flip={cluster.flip}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
});

export default OfficerCardVines;

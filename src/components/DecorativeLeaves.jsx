const variantSettings = {
  hero: {
    count: 28,
    hue: 0,
    sizeMin: 12,
    sizeMax: 30,
    opacityMin: 0.22,
    opacityMax: 0.48,
    durationMin: 10,
    durationMax: 18,
    driftMin: -32,
    driftMax: 32,
    delaySpread: 14,
  },
  about: {
    count: 24,
    hue: 8,
    sizeMin: 10,
    sizeMax: 24,
    opacityMin: 0.2,
    opacityMax: 0.4,
    durationMin: 11,
    durationMax: 19,
    driftMin: -24,
    driftMax: 24,
    delaySpread: 16,
  },
  quick: {
    count: 22,
    hue: -6,
    sizeMin: 10,
    sizeMax: 22,
    opacityMin: 0.18,
    opacityMax: 0.34,
    durationMin: 12,
    durationMax: 20,
    driftMin: -22,
    driftMax: 22,
    delaySpread: 18,
  },
  whyJoin: {
    count: 26,
    hue: 4,
    sizeMin: 10,
    sizeMax: 24,
    opacityMin: 0.18,
    opacityMax: 0.38,
    durationMin: 10,
    durationMax: 18,
    driftMin: -28,
    driftMax: 28,
    delaySpread: 15,
  },
  eventsPreview: {
    count: 24,
    hue: 12,
    sizeMin: 10,
    sizeMax: 24,
    opacityMin: 0.2,
    opacityMax: 0.38,
    durationMin: 11,
    durationMax: 18,
    driftMin: -26,
    driftMax: 26,
    delaySpread: 17,
  },
  officersPreview: {
    count: 20,
    hue: -12,
    sizeMin: 12,
    sizeMax: 22,
    opacityMin: 0.16,
    opacityMax: 0.32,
    durationMin: 12,
    durationMax: 20,
    driftMin: -18,
    driftMax: 18,
    delaySpread: 18,
  },
  aboutPage: {
    count: 28,
    hue: 10,
    sizeMin: 10,
    sizeMax: 24,
    opacityMin: 0.18,
    opacityMax: 0.38,
    durationMin: 11,
    durationMax: 19,
    driftMin: -24,
    driftMax: 24,
    delaySpread: 18,
  },
  eventsPage: {
    count: 30,
    hue: 18,
    sizeMin: 10,
    sizeMax: 26,
    opacityMin: 0.18,
    opacityMax: 0.38,
    durationMin: 10,
    durationMax: 17,
    driftMin: -30,
    driftMax: 30,
    delaySpread: 14,
  },
  resourcesPage: {
    count: 26,
    hue: 0,
    sizeMin: 10,
    sizeMax: 22,
    opacityMin: 0.16,
    opacityMax: 0.32,
    durationMin: 12,
    durationMax: 20,
    driftMin: -20,
    driftMax: 20,
    delaySpread: 18,
  },
  contactPage: {
    count: 30,
    hue: -4,
    sizeMin: 10,
    sizeMax: 24,
    opacityMin: 0.2,
    opacityMax: 0.4,
    durationMin: 10,
    durationMax: 18,
    driftMin: -28,
    driftMax: 28,
    delaySpread: 15,
  },
  officersPage: {
    count: 24,
    hue: 14,
    sizeMin: 10,
    sizeMax: 22,
    opacityMin: 0.16,
    opacityMax: 0.32,
    durationMin: 12,
    durationMax: 20,
    driftMin: -20,
    driftMax: 20,
    delaySpread: 18,
  },
};

function hashString(input) {
  let hash = 2166136261;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createRandom(seed) {
  let value = seed >>> 0;

  return () => {
    value = (1664525 * value + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function buildLeaves(variant) {
  const settings = variantSettings[variant] || variantSettings.about;
  const random = createRandom(hashString(variant));

  return Array.from({ length: settings.count }, (_, index) => {
    const size =
      settings.sizeMin + random() * (settings.sizeMax - settings.sizeMin);
    const left = random() * 100;
    const top = -12 - random() * 90;
    const duration =
      settings.durationMin +
      random() * (settings.durationMax - settings.durationMin);
    const delay = -random() * settings.delaySpread;
    const opacity =
      settings.opacityMin +
      random() * (settings.opacityMax - settings.opacityMin);
    const rotate = -80 + random() * 160;
    const drift =
      settings.driftMin + random() * (settings.driftMax - settings.driftMin);
    const hue = settings.hue + (-6 + random() * 12);
    const scale = 0.78 + random() * 0.55;

    return {
      id: `${variant}-${index}`,
      style: {
        "--leaf-left": `${left}%`,
        "--leaf-top": `${top}%`,
        "--leaf-size": `${size}px`,
        "--leaf-duration": `${duration}s`,
        "--leaf-delay": `${delay}s`,
        "--leaf-opacity": opacity.toFixed(2),
        "--leaf-rotate": `${rotate}deg`,
        "--leaf-drift": `${drift}px`,
        "--leaf-hue": `${hue}deg`,
        "--leaf-scale": scale.toFixed(2),
      },
    };
  });
}

function DecorativeLeaves({ variant = "about" }) {
  const leaves = buildLeaves(variant);

  return (
    <div className={`decorative-leaves decorative-leaves-${variant}`} aria-hidden="true">
      {leaves.map((leaf) => (
        <span className="decorative-leaf" key={leaf.id} style={leaf.style}>
          <span className="decorative-leaf-inner"></span>
        </span>
      ))}
    </div>
  );
}

export default DecorativeLeaves;

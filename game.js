const HISTORY_STEPS = [
  {
    type: "history",
    name: "The very first window",
    clue: "A faded screen glimmers among the north-side ferns, near a fallen log.",
    description: "Windows 1.0 launched in November 1985. It gave MS-DOS computers a graphical environment with windows, menus, icons, and mouse support.",
    takeaway: "The first Windows was a graphical environment that ran on top of MS-DOS.",
    question: "What did Windows 1.0 run on top of?",
    choices: ["MS-DOS", "Windows 10", "Linux", "The Windows Store"],
    answer: 0,
    symbol: "▣",
  },
  {
    type: "history",
    name: "A button to begin",
    clue: "A little square keepsake is tucked near a weathered stump and warm stones.",
    description: "Windows 95 arrived in August 1995. Its Start menu and taskbar gave people a new, familiar way to open programs and switch between them.",
    takeaway: "Windows 95 introduced the Start menu and taskbar.",
    question: "Which familiar tools arrived with Windows 95?",
    choices: ["Start menu and taskbar", "Widgets and Snap Layouts", "The Microsoft Store and Xbox", "Voice Access and Copilot"],
    answer: 0,
    symbol: "◩",
  },
  {
    type: "history",
    name: "The blue-sky years",
    clue: "Three pale mushrooms mark a quiet spot among the volcanic rocks.",
    description: "Windows XP launched in 2001. It brought the Windows NT foundation to home PCs as well as work PCs, with a bright new look and a more stable base.",
    takeaway: "Windows XP brought home and work editions together on the Windows NT foundation.",
    question: "What important foundation did Windows XP use?",
    choices: ["Windows NT", "MS-DOS only", "Windows 3.1", "A web browser"],
    answer: 0,
    symbol: "✿",
  },
  {
    type: "history",
    name: "A new start, again",
    clue: "A new-start note is hidden near a broken stone arch.",
    description: "Windows 10 launched in July 2015. It brought back the Start menu after Windows 8 and continued Microsoft's move toward regular feature updates.",
    takeaway: "Windows 10 launched in 2015 and brought back the Start menu.",
    question: "When did Windows 10 launch?",
    choices: ["2015", "1995", "2001", "2021"],
    answer: 0,
    symbol: "⌂",
  },
  {
    type: "history",
    name: "A window onto today",
    clue: "A pale-blue glint waits beside an old standing stone.",
    description: "Windows 11 first became available on October 5, 2021. Its refreshed design brought a centered Start menu, new window layouts, and more ways to personalize a PC.",
    takeaway: "Windows 11's first release was October 5, 2021.",
    question: "When did Windows 11 first become available?",
    choices: ["October 5, 2021", "August 24, 1995", "July 29, 2015", "November 20, 1985"],
    answer: 0,
    symbol: "⊞",
  },
];

const FEATURES = [
  {
    name: "A fresh Start",
    clue: "A tiny four-pane window is hidden near a fallen log by the foothills.",
    description: "Windows 11 redesigned Start and the taskbar, centering the app icons and giving Start a simpler pinned-apps and recommendations layout.",
    takeaway: "Start and the taskbar have a refreshed, centered design.",
    tryIt: "Open Start or visit Settings > Personalization > Taskbar.",
    question: "Which change is part of the Windows 11 redesign?",
    choices: [
      "A centered taskbar and redesigned Start menu",
      "The return of desktop gadgets from Windows Vista",
      "A requirement to use Live Tiles",
      "Removing the desktop",
    ],
    answer: 0,
    symbol: "⊞",
  },
  {
    name: "Snap Layouts",
    clue: "Look for a window-shaped note near a mossy stump.",
    description: "Snap Layouts make it easier to arrange several apps side by side using ready-made window arrangements.",
    takeaway: "Snap Layouts arrange open apps into ready-made layouts.",
    tryIt: "Hover over a window's maximize button, or press Windows+Z.",
    question: "What does Snap Layouts help you do?",
    choices: [
      "Change your wallpaper automatically",
      "Arrange open windows into layouts",
      "Install apps without the Store",
      "Record your screen",
    ],
    answer: 1,
    symbol: "▦",
  },
  {
    name: "Widgets",
    clue: "A weather mark is tucked near a cluster of pale mushrooms.",
    description: "The Windows 11 Widgets board gathers glanceable information, such as weather and news, in a personalized panel. Windows 10 had a different News and interests experience.",
    takeaway: "Widgets bring glanceable, personalized information together in one board.",
    tryIt: "Open Widgets from the taskbar or press Windows+W.",
    question: "Where can you find the Windows 11 Widgets board?",
    choices: [
      "Inside the Recycle Bin",
      "In the BIOS setup screen",
      "On the Widgets board",
      "Only in File Explorer",
    ],
    answer: 2,
    symbol: "☼",
  },
  {
    name: "File Explorer tabs",
    clue: "A folded page rests beside the broken basalt wall.",
    description: "File Explorer tabs let you keep multiple folders in one window instead of opening a separate window for every folder.",
    takeaway: "Tabs let you browse several folders in one File Explorer window.",
    tryIt: "Open File Explorer and select the + button to add a tab.",
    question: "What do File Explorer tabs let you do?",
    choices: [
      "Browse multiple folders in one window",
      "Turn folders into live websites",
      "Replace the taskbar",
      "Run Android apps",
    ],
    answer: 0,
    symbol: "◫",
  },
  {
    name: "Focus sessions",
    clue: "A small clock face is hidden among the standing stones.",
    description: "Focus sessions in the Clock app give you a timed work session and can help reduce distractions.",
    takeaway: "The Clock app includes timed Focus sessions.",
    tryIt: "Search for Clock, then open Focus sessions.",
    question: "Which Windows 11 app includes Focus sessions?",
    choices: ["Paint", "Clock", "Camera", "Calculator"],
    answer: 1,
    symbol: "◷",
  },
  {
    name: "Voice Access",
    clue: "A quiet voice-shaped note rests near a fallen log.",
    description: "Voice Access lets you control your PC and dictate text with spoken commands. Language availability varies.",
    takeaway: "Voice Access can control a PC and dictate text with spoken commands.",
    tryIt: "Look under Settings > Accessibility > Speech.",
    question: "What is Voice Access designed to do?",
    choices: [
      "Control the PC and dictate using voice",
      "Turn every app into a game",
      "Translate files automatically",
      "Make your PC louder",
    ],
    answer: 0,
    symbol: "♫",
  },
  {
    name: "Dynamic Lighting",
    clue: "A soft-colored spark is tucked near an old stump.",
    description: "For compatible accessories, Dynamic Lighting lets you manage supported RGB lighting from Windows settings.",
    takeaway: "Dynamic Lighting manages RGB lighting on compatible accessories.",
    tryIt: "Check Settings > Personalization > Dynamic Lighting.",
    question: "What can Dynamic Lighting manage on compatible devices?",
    choices: [
      "The brightness of every monitor in the world",
      "RGB lighting on supported accessories",
      "Your internet provider",
      "The color of printed documents",
    ],
    answer: 1,
    symbol: "✧",
  },
  {
    name: "Windows Studio Effects",
    clue: "A little camera note is hidden among pale mushrooms.",
    description: "On supported hardware, Studio Effects can enhance video calls with effects such as background blur or automatic framing.",
    takeaway: "Studio Effects can improve video calls on supported PCs.",
    tryIt: "On supported PCs, look in Settings > Bluetooth & devices > Cameras.",
    question: "What might Studio Effects improve on supported PCs?",
    choices: [
      "Video-call camera effects",
      "The speed of every website",
      "Printed photo quality",
      "The number of USB ports",
    ],
    answer: 0,
    symbol: "◉",
  },
  {
    name: "Auto HDR",
    clue: "The final scroll waits on the summit, above the volcano's crater.",
    description: "On a supported HDR display, Auto HDR can add richer color and brightness to some older games made for SDR.",
    takeaway: "Auto HDR enhances some older games on supported HDR displays.",
    tryIt: "Check Settings > System > Display > HDR.",
    question: "What does Auto HDR do for some supported games?",
    choices: [
      "Adds HDR visuals when you have a supported HDR display",
      "Makes every game run without a graphics card",
      "Streams games without an internet connection",
      "Automatically installs paid games",
    ],
    answer: 0,
    symbol: "◈",
  },
].map((feature) => ({ ...feature, type: "perk" }));

const QUEST_STEPS = [...HISTORY_STEPS, ...FEATURES];
const MAP_WIDTH = 72;
const MAP_HEIGHT = 72;
const TILE_SIZE = 48;
const VOLCANO_CENTER = [36, 36];
const VOLCANO_SUMMIT = [...VOLCANO_CENTER];
const VOLCANO_RADIUS = 9;
const ORBIT_RADIUS = 12;
const ISLAND_RADIUS = 34;
const SCROLL_INTERACTION_RADIUS = 3;
const SCROLL_VISIBILITY_RADIUS = 4.8;
const MIN_ZOOM = 1;
const MAX_ZOOM = 1.75;
const ZOOM_STEP = 0.1;
const START = [29, 28];
const MORI_POSITION = [28, 27];
const PROP_TYPES = ["fallen-log", "stump", "mushrooms", "ruin", "standing-stone"];
const ORBIT_SCROLL_COUNT = QUEST_STEPS.length - 1;

function orbitPosition(index, radius = ORBIT_RADIUS) {
  const angle = -Math.PI / 2 + (index / ORBIT_SCROLL_COUNT) * Math.PI * 2;
  const variedRadius = radius + Math.sin(index * 2.1) * 0.65;
  return [
    Math.round(VOLCANO_CENTER[0] + Math.cos(angle) * variedRadius),
    Math.round(VOLCANO_CENTER[1] + Math.sin(angle) * variedRadius),
  ];
}

QUEST_STEPS.forEach((step, index) => {
  step.position = index === QUEST_STEPS.length - 1
    ? [...VOLCANO_SUMMIT]
    : orbitPosition(index);
});

const SCENE_PROPS = QUEST_STEPS.slice(0, -1).map((step, index) => ({
  position: orbitPosition(index, VOLCANO_RADIUS + 1.5),
  type: PROP_TYPES[index % PROP_TYPES.length],
}));
const IMPORTANT_POSITIONS = [
  START,
  MORI_POSITION,
  ...QUEST_STEPS.map((step) => step.position),
  ...SCENE_PROPS.map((prop) => prop.position),
];

const canvas = document.querySelector("#island-map");
const context = canvas.getContext("2d");
const appShell = document.querySelector(".app-shell");
const fullscreenButton = document.querySelector("#fullscreen-button");
const zoomOutButton = document.querySelector("#zoom-out");
const zoomInButton = document.querySelector("#zoom-in");
const zoomLabel = document.querySelector("#zoom-label");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalClose = document.querySelector("#modal-close");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalEyebrow = document.querySelector("#modal-eyebrow");
const modalArt = document.querySelector("#modal-art");
const tryCard = document.querySelector("#try-card");
const tryText = document.querySelector("#try-text");
const quizArea = document.querySelector("#quiz-area");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const answerFeedback = document.querySelector("#answer-feedback");
const modalAction = document.querySelector("#modal-action");
const toast = document.querySelector("#toast");
const landmarks = document.querySelector("#landmark-list");
const mapContent = buildMap();
const player = {
  x: START[0],
  y: START[1],
  pixelX: START[0],
  pixelY: START[1],
  facing: "down",
};
const completedSteps = new Set();
const heldKeys = new Set();
let questIndex = 0;
let modalLocked = false;
let modalStage = "";
let modalStepIndex = -1;
let guideChats = 0;
let zoomLevel = 1.3;
let lastMoveAt = 0;
let lastFrameAt = 0;
let lastVolcanoToastAt = -Infinity;
let toastTimeout = 0;
let canvasWidth = 0;
let canvasHeight = 0;
let canvasPixelRatio = 1;
let groundPattern = null;
const groundTexture = new Image();

function keyFor([x, y]) {
  return `${x},${y}`;
}

function distanceBetween(left, right) {
  return Math.hypot(left[0] - right[0], left[1] - right[1]);
}

function terrainNoise(x, y, salt = 0) {
  const sample = Math.sin(x * 127.1 + y * 311.7 + salt * 74.7) * 43758.5453;
  return sample - Math.floor(sample);
}

function isNearImportantPosition(x, y, radius = 2) {
  return IMPORTANT_POSITIONS.some(([importantX, importantY]) =>
    Math.abs(x - importantX) <= radius && Math.abs(y - importantY) <= radius,
  );
}

function buildMap() {
  const [centerX, centerY] = VOLCANO_CENTER;
  const tiles = Array.from({ length: MAP_HEIGHT }, (_, y) =>
    Array.from({ length: MAP_WIDTH }, (_, x) => {
      const islandDistance = Math.hypot(x - centerX, y - centerY);
      const volcanoDistance = Math.hypot(x - centerX, (y - centerY) / 0.88);
      if (islandDistance > ISLAND_RADIUS) return "water";
      if (islandDistance > ISLAND_RADIUS - 3) return "sand";
      if (volcanoDistance <= VOLCANO_RADIUS + 0.6) return "volcano";
      return "grass";
    }),
  );
  const trees = [];
  const rocks = [];

  for (let y = 2; y < MAP_HEIGHT - 2; y += 1) {
    for (let x = 2; x < MAP_WIDTH - 2; x += 1) {
      if (tiles[y][x] !== "grass" || isNearImportantPosition(x, y)) continue;

      const density = terrainNoise(x, y, 4);
      const distanceFromCenter = Math.hypot(x - centerX, y - centerY);
      const coastalForest = distanceFromCenter > ISLAND_RADIUS - 12;
      const volcanoForest = distanceFromCenter > VOLCANO_RADIUS + 1.4
        && distanceFromCenter < ORBIT_RADIUS + 2.5;
      if ((coastalForest && density > 0.68) || (volcanoForest && density > 0.84)) {
        tiles[y][x] = "tree";
        trees.push([x, y]);
      } else if (density > 0.985 && distanceFromCenter > VOLCANO_RADIUS + 2) {
        tiles[y][x] = "rock";
        rocks.push([x, y]);
      }
    }
  }

  const brush = [];
  for (let y = 3; y < MAP_HEIGHT - 3; y += 1) {
    for (let x = 2; x < MAP_WIDTH - 2; x += 1) {
      if (tiles[y][x] !== "grass" || isNearImportantPosition(x, y, 1)) continue;
      if (terrainNoise(x, y, 19) > 0.9) brush.push([x, y]);
    }
  }

  return { tiles, trees, rocks, brush };
}

const TREE_POSITIONS = mapContent.trees;
const ROCK_POSITIONS = mapContent.rocks;
const BRUSH_POSITIONS = mapContent.brush;
const MORI_DIALOGUE = [
  "The scrolls circle the volcano. Let the compass point you toward the next one.",
  "I saw a scroll glimmer near the crater. I was too busy fluttering to read it.",
  "Each scroll tells one small part of a very long Windows story.",
  "The summit is steep. Find every scroll around the volcano before you climb.",
];

function traceIsland(inset = 0) {
  context.beginPath();
  const centerX = (VOLCANO_CENTER[0] + 0.5) * TILE_SIZE;
  const centerY = (VOLCANO_CENTER[1] + 0.5) * TILE_SIZE;
  const radius = (ISLAND_RADIUS - inset) * TILE_SIZE;
  const segments = 96;

  for (let segment = 0; segment <= segments; segment += 1) {
    const angle = (segment / segments) * Math.PI * 2;
    const waviness = 1
      + Math.sin(angle * 5 + 0.4) * 0.012
      + Math.sin(angle * 9 + 1.7) * 0.007
      + Math.sin(angle * 15 + 0.6) * 0.003;
    const x = centerX + Math.cos(angle) * radius * waviness;
    const y = centerY + Math.sin(angle) * radius * waviness;
    if (segment === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.closePath();
}

function drawIsland() {
  context.save();
  traceIsland(0);
  context.fillStyle = "#c8b487";
  context.fill();

  traceIsland(1.05);
  context.save();
  context.clip();
  if (groundPattern) {
    context.fillStyle = groundPattern;
    context.fillRect(0, 0, MAP_WIDTH * TILE_SIZE, MAP_HEIGHT * TILE_SIZE);
    context.fillStyle = "rgb(111 129 88 / 24%)";
    context.fillRect(0, 0, MAP_WIDTH * TILE_SIZE, MAP_HEIGHT * TILE_SIZE);
  } else {
    const meadow = context.createLinearGradient(0, 0, MAP_WIDTH * TILE_SIZE, MAP_HEIGHT * TILE_SIZE);
    meadow.addColorStop(0, "#7d8966");
    meadow.addColorStop(0.35, "#81906c");
    meadow.addColorStop(0.72, "#758866");
    meadow.addColorStop(1, "#82906c");
    context.fillStyle = meadow;
    context.fillRect(0, 0, MAP_WIDTH * TILE_SIZE, MAP_HEIGHT * TILE_SIZE);
  }
  context.restore();

  traceIsland(1.05);
  context.strokeStyle = "rgb(211 201 159 / 27%)";
  context.lineWidth = 1.4 * TILE_SIZE;
  context.stroke();

  traceIsland(0.9);
  context.strokeStyle = "rgb(81 104 70 / 23%)";
  context.lineWidth = 1.2 * TILE_SIZE;
  context.stroke();
  context.restore();
}

function traceVolcanoLayer(centerX, centerY, radius, seed) {
  const segments = 80;
  context.beginPath();
  for (let segment = 0; segment <= segments; segment += 1) {
    const angle = (segment / segments) * Math.PI * 2;
    const variation = 1
      + Math.sin(angle * 4 + seed) * 0.035
      + Math.sin(angle * 9 + seed * 1.7) * 0.018
      + Math.sin(angle * 15 + seed * 2.1) * 0.008;
    const x = centerX + Math.cos(angle) * radius * variation;
    const y = centerY + Math.sin(angle) * radius * variation * 0.88;
    if (segment === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
  context.closePath();
}

function drawVolcano(time) {
  const centerX = (VOLCANO_CENTER[0] + 0.5) * TILE_SIZE;
  const centerY = (VOLCANO_CENTER[1] + 0.5) * TILE_SIZE;
  const baseRadius = (VOLCANO_RADIUS + 0.7) * TILE_SIZE;
  const shadow = context.createRadialGradient(
    centerX + 25,
    centerY + 45,
    baseRadius * 0.45,
    centerX + 25,
    centerY + 45,
    baseRadius * 1.24,
  );
  shadow.addColorStop(0, "rgb(43 49 39 / 38%)");
  shadow.addColorStop(1, "rgb(43 49 39 / 0%)");
  context.fillStyle = shadow;
  context.beginPath();
  context.ellipse(centerX + 25, centerY + 45, baseRadius * 1.24, baseRadius, 0, 0, Math.PI * 2);
  context.fill();

  traceVolcanoLayer(centerX, centerY, baseRadius, 0.8);
  const lowerSlope = context.createLinearGradient(centerX - baseRadius, centerY - baseRadius, centerX + baseRadius, centerY + baseRadius);
  lowerSlope.addColorStop(0, "#82765f");
  lowerSlope.addColorStop(0.43, "#625a4c");
  lowerSlope.addColorStop(1, "#4e4b43");
  context.fillStyle = lowerSlope;
  context.fill();
  context.strokeStyle = "rgb(54 54 46 / 66%)";
  context.lineWidth = 2;
  context.stroke();

  traceVolcanoLayer(centerX - 7, centerY - 5, baseRadius * 0.78, 1.9);
  const middleSlope = context.createLinearGradient(centerX - baseRadius * 0.8, centerY - baseRadius * 0.7, centerX + baseRadius * 0.8, centerY + baseRadius * 0.65);
  middleSlope.addColorStop(0, "#9a805e");
  middleSlope.addColorStop(0.48, "#80694f");
  middleSlope.addColorStop(1, "#665846");
  context.fillStyle = middleSlope;
  context.fill();
  context.strokeStyle = "rgb(183 157 113 / 29%)";
  context.lineWidth = 2;
  context.stroke();

  traceVolcanoLayer(centerX - 4, centerY - 10, baseRadius * 0.55, 3.2);
  context.fillStyle = "#77624b";
  context.fill();
  context.strokeStyle = "rgb(196 166 119 / 29%)";
  context.lineWidth = 1.6;
  context.stroke();

  traceVolcanoLayer(centerX - 2, centerY - 14, baseRadius * 0.31, 4.3);
  context.fillStyle = "#655545";
  context.fill();
  context.strokeStyle = "rgb(194 164 116 / 34%)";
  context.lineWidth = 1.4;
  context.stroke();

  context.strokeStyle = "rgb(61 54 45 / 51%)";
  context.lineWidth = 2.2;
  for (let ridge = 0; ridge < 7; ridge += 1) {
    const angle = (ridge / 7) * Math.PI * 2 + 0.25;
    const startRadius = baseRadius * (0.28 + terrainNoise(ridge, 0, 4) * 0.08);
    const endRadius = baseRadius * (0.73 + terrainNoise(ridge, 0, 8) * 0.08);
    context.beginPath();
    context.moveTo(
      centerX + Math.cos(angle) * startRadius,
      centerY - 12 + Math.sin(angle) * startRadius * 0.84,
    );
    context.quadraticCurveTo(
      centerX + Math.cos(angle + 0.12) * baseRadius * 0.56,
      centerY + Math.sin(angle + 0.12) * baseRadius * 0.52,
      centerX + Math.cos(angle) * endRadius,
      centerY + Math.sin(angle) * endRadius * 0.84,
    );
    context.stroke();
  }

  const craterPulse = Math.sin(time / 650) * 0.08;
  const crater = context.createRadialGradient(
    centerX - 18,
    centerY - 28,
    2,
    centerX,
    centerY - 12,
    baseRadius * 0.28,
  );
  crater.addColorStop(0, "#423e37");
  crater.addColorStop(0.7, "#4b4137");
  crater.addColorStop(1, `rgba(157, 91, 52, ${0.64 + craterPulse})`);
  context.fillStyle = crater;
  context.beginPath();
  context.ellipse(centerX, centerY - 12, baseRadius * 0.27, baseRadius * 0.2, -0.08, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "rgb(206 143 83 / 52%)";
  context.lineWidth = 1.8;
  context.stroke();
}

function drawWaterRipple(x, y, time) {
  const left = x * TILE_SIZE;
  const top = y * TILE_SIZE;
  const variation = terrainNoise(x, y, 33);
  const drift = (time * 0.006 + variation * 36) % TILE_SIZE;

  context.beginPath();
  context.moveTo(left + drift - 10, top + 14 + variation * 18);
  context.quadraticCurveTo(left + drift, top + 10 + variation * 18, left + drift + 10, top + 14 + variation * 18);
  context.strokeStyle = "rgb(224 230 211 / 27%)";
  context.lineWidth = 1.5;
  context.stroke();

  if (variation > 0.83) {
    context.beginPath();
    context.ellipse(left + 8 + variation * 23, top + 9 + variation * 18, 2.8, 1.2, 0, 0, Math.PI * 2);
    context.fillStyle = "rgb(235 225 190 / 35%)";
    context.fill();
  }
}

function drawTile(x, y, tile) {
  const left = x * TILE_SIZE;
  const top = y * TILE_SIZE;
  const variation = terrainNoise(x, y);

  if (tile === "water" || tile === "volcano") return;
  if (tile !== "sand") {
    for (let patch = 0; patch < 2; patch += 1) {
      const seed = terrainNoise(x, y, patch + 66);
      const patchX = left + 6 + seed * (TILE_SIZE - 12);
      const patchY = top + 6 + terrainNoise(x, y, patch + 74) * (TILE_SIZE - 12);
      context.beginPath();
      context.ellipse(
        patchX,
        patchY,
        7 + seed * 8,
        4 + seed * 5,
        seed * Math.PI,
        0,
        Math.PI * 2,
      );
      context.fillStyle = patch % 2
        ? "rgb(60 88 57 / 9%)"
        : "rgb(210 211 157 / 12%)";
      context.fill();
    }
  }

  for (let detail = 0; detail < 5; detail += 1) {
    const seed = terrainNoise(x, y, detail + 12);
    const detailX = left + 5 + seed * (TILE_SIZE - 10);
    const detailY = top + 5 + terrainNoise(x, y, detail + 28) * (TILE_SIZE - 10);
    context.beginPath();
    context.ellipse(detailX, detailY, 1.2 + seed * 2.3, 0.8 + seed, seed * 2, 0, Math.PI * 2);
    context.fillStyle = tile === "sand"
      ? (detail % 2 ? "rgb(112 95 60 / 19%)" : "rgb(255 246 216 / 31%)")
      : (detail % 2 ? "rgb(54 77 48 / 12%)" : "rgb(210 213 161 / 20%)");
    context.fill();
  }

  if (tile === "sand") return;
  if (variation > 0.36) {
    const tuftX = left + 8 + terrainNoise(x, y, 44) * (TILE_SIZE - 16);
    const tuftY = top + 12 + terrainNoise(x, y, 45) * (TILE_SIZE - 20);
    context.beginPath();
    context.moveTo(tuftX - 3, tuftY + 4);
    context.quadraticCurveTo(tuftX - 1, tuftY - 1, tuftX, tuftY - 4);
    context.moveTo(tuftX, tuftY + 4);
    context.quadraticCurveTo(tuftX + 1, tuftY - 2, tuftX + 3, tuftY - 5);
    context.moveTo(tuftX + 2, tuftY + 4);
    context.quadraticCurveTo(tuftX + 5, tuftY, tuftX + 6, tuftY - 2);
    context.strokeStyle = "rgb(49 78 49 / 39%)";
    context.lineWidth = 1.15;
    context.stroke();
  }

  if (variation > 0.87) {
    const flowerX = left + 8 + terrainNoise(x, y, 51) * (TILE_SIZE - 16);
    const flowerY = top + 8 + terrainNoise(x, y, 52) * (TILE_SIZE - 16);
    context.fillStyle = "#e6d9ac";
    for (let petal = 0; petal < 5; petal += 1) {
      const angle = petal * (Math.PI * 2 / 5);
      context.beginPath();
      context.ellipse(
        flowerX + Math.cos(angle) * 2.2,
        flowerY + Math.sin(angle) * 2.2,
        1.7,
        1.1,
        angle,
        0,
        Math.PI * 2,
      );
      context.fill();
    }
    context.fillStyle = "#bb9c5e";
    context.beginPath();
    context.arc(flowerX, flowerY, 1.1, 0, Math.PI * 2);
    context.fill();
  }
}

function drawTree(x, y, time) {
  const centerX = (x + 0.5) * TILE_SIZE;
  const centerY = (y + 0.53) * TILE_SIZE;
  const sway = Math.sin(time / 1800 + x * 0.7) * 1.4;
  const variation = terrainNoise(x, y, 61);

  context.fillStyle = "rgb(42 56 39 / 22%)";
  context.beginPath();
  context.ellipse(centerX + 3, centerY + 13, 26, 9, 0.12, 0, Math.PI * 2);
  context.fill();

  const trunk = context.createLinearGradient(centerX - 5, centerY - 2, centerX + 8, centerY + 25);
  trunk.addColorStop(0, "#987b53");
  trunk.addColorStop(0.56, "#765f43");
  trunk.addColorStop(1, "#5e503c");
  context.beginPath();
  context.moveTo(centerX - 4, centerY + 18);
  context.bezierCurveTo(centerX - 2, centerY + 8, centerX + 3 + sway, centerY + 3, centerX + sway, centerY - 9);
  context.lineTo(centerX + 8 + sway, centerY - 8);
  context.bezierCurveTo(centerX + 12, centerY + 4, centerX + 7, centerY + 12, centerX + 9, centerY + 20);
  context.closePath();
  context.fillStyle = trunk;
  context.fill();

  const leaves = [
    [-16, -12, 20, 15, "#506e4d"],
    [2, -17, 22, 16, "#637d56"],
    [18, -8, 19, 15, "#526f4d"],
    [-7, 1, 20, 15, "#71865d"],
    [12, 4, 20, 14, "#5b7851"],
    [-21, -1, 16, 13, "#617b55"],
  ];
  for (let index = 0; index < leaves.length; index += 1) {
    const [offsetX, offsetY, radiusX, radiusY, color] = leaves[index];
    const leafX = centerX + offsetX + sway * (index < 3 ? 0.6 : 0.25);
    const leafY = centerY + offsetY;
    const canopy = context.createRadialGradient(leafX - 5, leafY - 5, 2, leafX, leafY, radiusX);
    canopy.addColorStop(0, index === 1 ? "#87936b" : color);
    canopy.addColorStop(1, color);
    context.beginPath();
    context.ellipse(leafX, leafY, radiusX, radiusY, variation * 0.25, 0, Math.PI * 2);
    context.fillStyle = canopy;
    context.fill();
    context.strokeStyle = "rgb(43 67 46 / 22%)";
    context.lineWidth = 1;
    context.stroke();
  }

  context.strokeStyle = "rgb(188 192 137 / 40%)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(centerX - 9, centerY - 8);
  context.quadraticCurveTo(centerX - 4, centerY - 14, centerX + 1, centerY - 11);
  context.moveTo(centerX + 3, centerY - 18);
  context.quadraticCurveTo(centerX + 8, centerY - 21, centerX + 12, centerY - 15);
  context.stroke();
}

function drawBoulder(x, y) {
  const centerX = (x + 0.5) * TILE_SIZE;
  const centerY = (y + 0.56) * TILE_SIZE;
  context.fillStyle = "rgb(44 54 42 / 22%)";
  context.beginPath();
  context.ellipse(centerX + 2, centerY + 9, 20, 6, 0.1, 0, Math.PI * 2);
  context.fill();

  const stone = context.createLinearGradient(centerX - 16, centerY - 15, centerX + 18, centerY + 12);
  stone.addColorStop(0, "#b7b29c");
  stone.addColorStop(0.48, "#92927f");
  stone.addColorStop(1, "#707466");
  context.beginPath();
  context.moveTo(centerX - 18, centerY + 5);
  context.lineTo(centerX - 14, centerY - 9);
  context.lineTo(centerX - 4, centerY - 17);
  context.lineTo(centerX + 8, centerY - 14);
  context.lineTo(centerX + 17, centerY - 5);
  context.lineTo(centerX + 18, centerY + 5);
  context.quadraticCurveTo(centerX + 9, centerY + 13, centerX - 10, centerY + 11);
  context.closePath();
  context.fillStyle = stone;
  context.fill();
  context.strokeStyle = "rgb(68 72 61 / 57%)";
  context.lineWidth = 1.5;
  context.stroke();

  context.beginPath();
  context.moveTo(centerX - 13, centerY - 8);
  context.lineTo(centerX - 4, centerY - 15);
  context.lineTo(centerX + 1, centerY - 8);
  context.lineTo(centerX - 8, centerY - 3);
  context.closePath();
  context.fillStyle = "rgb(229 224 198 / 40%)";
  context.fill();
  context.strokeStyle = "rgb(137 146 105 / 54%)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(centerX + 3, centerY - 13);
  context.quadraticCurveTo(centerX + 8, centerY - 17, centerX + 13, centerY - 11);
  context.stroke();
}

function drawFern(x, y, time) {
  const centerX = (x + 0.5) * TILE_SIZE;
  const centerY = (y + 0.65) * TILE_SIZE;
  const sway = Math.sin(time / 900 + x * 2 + y) * 1.6;
  context.fillStyle = "rgb(48 64 42 / 18%)";
  context.beginPath();
  context.ellipse(centerX, centerY + 3, 16, 5, 0, 0, Math.PI * 2);
  context.fill();

  for (let frond = 0; frond < 5; frond += 1) {
    const side = frond - 2;
    const endX = centerX + side * 7 + sway;
    const endY = centerY - 16 - (2 - Math.abs(side)) * 2;
    context.beginPath();
    context.moveTo(centerX, centerY + 2);
    context.quadraticCurveTo(centerX + side * 4, centerY - 8, endX, endY);
    context.strokeStyle = frond % 2 ? "#52784d" : "#6f8b5a";
    context.lineWidth = 2;
    context.stroke();
    for (let leaf = 1; leaf <= 3; leaf += 1) {
      const progress = leaf / 4;
      const leafX = centerX + (endX - centerX) * progress;
      const leafY = centerY + 2 + (endY - centerY - 2) * progress;
      context.beginPath();
      context.ellipse(leafX - 4, leafY, 5, 2, -0.5, 0, Math.PI * 2);
      context.ellipse(leafX + 4, leafY - 1, 5, 2, 0.5, 0, Math.PI * 2);
      context.fillStyle = frond % 2 ? "#587b50" : "#718b5b";
      context.fill();
    }
  }
}

function drawProp(prop) {
  const [x, y] = prop.position;
  const left = (x + 0.5) * TILE_SIZE;
  const top = (y + 0.5) * TILE_SIZE;

  if (prop.type === "stump") {
    context.fillStyle = "rgb(46 57 42 / 23%)";
    context.beginPath();
    context.ellipse(left, top + 13, 18, 6, 0, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#806647";
    context.beginPath();
    context.moveTo(left - 13, top + 10);
    context.lineTo(left - 10, top - 4);
    context.quadraticCurveTo(left, top - 10, left + 11, top - 3);
    context.lineTo(left + 13, top + 10);
    context.closePath();
    context.fill();
    context.fillStyle = "#ba9b69";
    context.beginPath();
    context.ellipse(left, top - 4, 12, 5.2, 0.05, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "#816b47";
    context.lineWidth = 1;
    context.beginPath();
    context.ellipse(left, top - 4, 6.5, 2.8, 0.05, 0, Math.PI * 2);
    context.stroke();
  } else if (prop.type === "mushrooms") {
    for (let mushroom = 0; mushroom < 3; mushroom += 1) {
      const offsetX = (mushroom - 1) * 11;
      const height = mushroom === 1 ? 14 : 10;
      context.fillStyle = "#e2d9bd";
      context.fillRect(left + offsetX - 2, top - height + 4, 4, height);
      context.fillStyle = mushroom === 1 ? "#a56856" : "#c38b65";
      context.beginPath();
      context.ellipse(left + offsetX, top - height + 4, 7, 4.3, 0, Math.PI, Math.PI * 2);
      context.lineTo(left + offsetX + 6, top - height + 4);
      context.quadraticCurveTo(left + offsetX, top - height + 1, left + offsetX - 6, top - height + 4);
      context.fill();
      context.fillStyle = "rgb(246 230 194 / 80%)";
      context.beginPath();
      context.arc(left + offsetX - 2, top - height + 1, 1.3, 0, Math.PI * 2);
      context.fill();
    }
  } else if (prop.type === "ruin") {
    context.fillStyle = "rgb(45 57 42 / 19%)";
    context.beginPath();
    context.ellipse(left, top + 14, 23, 6, 0, 0, Math.PI * 2);
    context.fill();
    const stone = context.createLinearGradient(left - 19, top - 12, left + 20, top + 10);
    stone.addColorStop(0, "#b7b39d");
    stone.addColorStop(1, "#858879");
    context.fillStyle = stone;
    context.beginPath();
    context.roundRect(left - 19, top - 8, 8, 23, 2);
    context.roundRect(left + 11, top - 8, 8, 23, 2);
    context.roundRect(left - 22, top - 14, 44, 8, 2);
    context.fill();
    context.strokeStyle = "rgb(79 85 72 / 65%)";
    context.lineWidth = 1.1;
    context.beginPath();
    context.moveTo(left - 19, top - 7);
    context.lineTo(left - 11, top - 7);
    context.moveTo(left + 11, top - 7);
    context.lineTo(left + 19, top - 7);
    context.stroke();
    context.fillStyle = "#617b54";
    context.beginPath();
    context.ellipse(left - 17, top - 15, 5, 2, -0.3, 0, Math.PI * 2);
    context.ellipse(left + 15, top - 14, 6, 2, 0.4, 0, Math.PI * 2);
    context.fill();
  } else if (prop.type === "fallen-log") {
    context.save();
    context.translate(left, top);
    context.rotate(-0.15);
    const log = context.createLinearGradient(0, -8, 0, 9);
    log.addColorStop(0, "#9a7951");
    log.addColorStop(0.52, "#795d40");
    log.addColorStop(1, "#5d4d39");
    context.fillStyle = log;
    context.beginPath();
    context.roundRect(-22, -7, 44, 15, 7);
    context.fill();
    context.fillStyle = "#c0a475";
    context.beginPath();
    context.ellipse(-20, 0, 5, 7, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "#705738";
    context.lineWidth = 1;
    context.beginPath();
    context.ellipse(-20, 0, 2.4, 4, 0, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  } else {
    drawBoulder(x, y);
  }
}

function drawMoth(centerX, centerY, time, scale = 1) {
  const flutter = Math.sin(time / 95) * 0.24;
  context.save();
  context.translate(centerX, centerY);
  context.scale(scale, scale);
  const glow = context.createRadialGradient(0, 0, 1, 0, 0, 19);
  glow.addColorStop(0, "rgb(240 221 160 / 34%)");
  glow.addColorStop(1, "rgb(240 221 160 / 0%)");
  context.fillStyle = glow;
  context.beginPath();
  context.arc(0, 0, 19, 0, Math.PI * 2);
  context.fill();

  context.save();
  context.rotate(flutter);
  context.fillStyle = "#f3e8c9";
  context.beginPath();
  context.ellipse(-6, -2, 6, 3.3, -0.4, 0, Math.PI * 2);
  context.ellipse(6, -2, 6, 3.3, 0.4, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgb(194 170 120 / 53%)";
  context.beginPath();
  context.ellipse(-5, -2, 3, 1.5, -0.4, 0, Math.PI * 2);
  context.ellipse(5, -2, 3, 1.5, 0.4, 0, Math.PI * 2);
  context.fill();
  context.restore();

  context.strokeStyle = "#846c48";
  context.lineWidth = 1.6;
  context.beginPath();
  context.moveTo(0, -4);
  context.lineTo(0, 4);
  context.moveTo(-1, -3);
  context.quadraticCurveTo(-4, -8, -5, -6);
  context.moveTo(1, -3);
  context.quadraticCurveTo(4, -8, 5, -6);
  context.stroke();
  context.restore();
}

function drawLandmark(step, index, time) {
  const [x, y] = step.position;
  const centerX = (x + 0.5) * TILE_SIZE;
  const centerY = (y + 0.5) * TILE_SIZE;
  const bob = Math.sin(time / 780 + index) * 0.7;
  const scrollY = centerY - 1 + bob;
  const glimmer = 0.08 + (Math.sin(time / 390 + index) + 1) * 0.035;
  const halo = context.createRadialGradient(centerX, scrollY, 1, centerX, scrollY, 16);
  halo.addColorStop(0, `rgba(237, 220, 174, ${glimmer})`);
  halo.addColorStop(1, "rgb(237 220 174 / 0%)");
  context.fillStyle = halo;
  context.beginPath();
  context.arc(centerX, scrollY, 16, 0, Math.PI * 2);
  context.fill();

  context.save();
  context.translate(centerX, scrollY);
  context.rotate(Math.sin(index * 2.3) * 0.05);
  context.fillStyle = "rgb(46 51 39 / 30%)";
  context.beginPath();
  context.ellipse(0, 9, 14, 4, -0.08, 0, Math.PI * 2);
  context.fill();

  const paper = context.createLinearGradient(-13, -7, 13, 7);
  paper.addColorStop(0, "#e4d4ad");
  paper.addColorStop(0.48, "#f1e5c7");
  paper.addColorStop(1, "#c8b487");
  context.fillStyle = paper;
  context.beginPath();
  context.moveTo(-11, -6);
  context.lineTo(8, -7);
  context.lineTo(11, -4);
  context.lineTo(11, 5);
  context.lineTo(-8, 6);
  context.lineTo(-11, 3);
  context.closePath();
  context.fill();
  context.strokeStyle = "rgb(113 91 57 / 70%)";
  context.lineWidth = 1;
  context.stroke();

  context.fillStyle = "#9c8057";
  context.beginPath();
  context.ellipse(-10, -1.5, 2.2, 6, 0, 0, Math.PI * 2);
  context.ellipse(10, 0, 2.2, 5.3, 0, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#5f5b48";
  context.font = "bold 10px Georgia, serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(step.symbol || "✧", 0, -0.5);
  context.restore();
}

function drawGuide(time) {
  const [x, y] = MORI_POSITION;
  const flutter = Math.sin(time / 130) * 3;
  drawMoth((x + 0.5) * TILE_SIZE, (y + 0.3) * TILE_SIZE + flutter, time, 0.95);
}

function drawPlayer(time) {
  const centerX = (player.pixelX + 0.5) * TILE_SIZE;
  const centerY = (player.pixelY + 0.5) * TILE_SIZE;
  const moving = performance.now() - lastMoveAt < 175;
  const stride = moving ? Math.sin(time / 42) * 2.1 : 0;
  const bounce = moving ? Math.abs(Math.sin(time / 42)) * 1.5 : Math.sin(time / 470) * 0.5;

  const shadow = context.createRadialGradient(centerX, centerY + 13, 1, centerX, centerY + 13, 18);
  shadow.addColorStop(0, "rgb(37 45 34 / 43%)");
  shadow.addColorStop(1, "rgb(37 45 34 / 0%)");
  context.fillStyle = shadow;
  context.beginPath();
  context.ellipse(centerX, centerY + 13, 17, 6, 0, 0, Math.PI * 2);
  context.fill();

  context.strokeStyle = "#5b4634";
  context.lineWidth = 4.2;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(centerX - 4, centerY + 7 + bounce);
  context.lineTo(centerX - 5 + stride, centerY + 16);
  context.moveTo(centerX + 4, centerY + 7 + bounce);
  context.lineTo(centerX + 5 - stride, centerY + 16);
  context.stroke();
  context.strokeStyle = "#382f29";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(centerX - 7 + stride, centerY + 16);
  context.lineTo(centerX - 2 + stride, centerY + 16);
  context.moveTo(centerX + 3 - stride, centerY + 16);
  context.lineTo(centerX + 8 - stride, centerY + 16);
  context.stroke();

  const pack = context.createLinearGradient(centerX - 12, centerY - 5, centerX - 4, centerY + 9);
  pack.addColorStop(0, "#b38653");
  pack.addColorStop(1, "#745337");
  context.fillStyle = pack;
  context.beginPath();
  context.roundRect(centerX - 12, centerY - 3 + bounce, 8, 13, 3);
  context.fill();
  context.strokeStyle = "rgb(244 211 155 / 55%)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(centerX - 9, centerY + 1 + bounce);
  context.lineTo(centerX - 6, centerY + 1 + bounce);
  context.stroke();

  const coat = context.createLinearGradient(centerX - 8, centerY - 3, centerX + 8, centerY + 11);
  coat.addColorStop(0, "#718363");
  coat.addColorStop(0.55, "#596d52");
  coat.addColorStop(1, "#465942");
  context.fillStyle = coat;
  context.beginPath();
  context.moveTo(centerX - 7, centerY - 5 + bounce);
  context.quadraticCurveTo(centerX, centerY - 9 + bounce, centerX + 7, centerY - 4 + bounce);
  context.lineTo(centerX + 9, centerY + 8 + bounce);
  context.quadraticCurveTo(centerX, centerY + 14 + bounce, centerX - 9, centerY + 8 + bounce);
  context.closePath();
  context.fill();
  context.strokeStyle = "rgb(220 213 172 / 48%)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(centerX, centerY - 1 + bounce);
  context.lineTo(centerX, centerY + 8 + bounce);
  context.stroke();

  const faceY = centerY - 10 + bounce;
  context.fillStyle = "#d9aa81";
  context.beginPath();
  context.ellipse(centerX, faceY, 6.2, 7.1, 0, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#5c4637";
  context.beginPath();
  context.arc(centerX, faceY - 3, 6.2, Math.PI, Math.PI * 2);
  context.quadraticCurveTo(centerX + 7, faceY - 3, centerX + 5.6, faceY - 1);
  context.quadraticCurveTo(centerX, faceY - 4, centerX - 5.6, faceY - 1);
  context.closePath();
  context.fill();

  context.fillStyle = "#c8b27f";
  context.beginPath();
  context.ellipse(centerX, faceY - 5, 13, 3.3, 0, 0, Math.PI * 2);
  context.fill();
  const hat = context.createLinearGradient(centerX - 8, faceY - 17, centerX + 8, faceY - 7);
  hat.addColorStop(0, "#758064");
  hat.addColorStop(1, "#4e604a");
  context.fillStyle = hat;
  context.beginPath();
  context.moveTo(centerX - 8, faceY - 7);
  context.quadraticCurveTo(centerX - 5, faceY - 18, centerX, faceY - 19);
  context.quadraticCurveTo(centerX + 7, faceY - 17, centerX + 8, faceY - 7);
  context.closePath();
  context.fill();
  context.strokeStyle = "rgb(234 221 184 / 57%)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(centerX - 10, faceY - 5);
  context.quadraticCurveTo(centerX, faceY - 2, centerX + 10, faceY - 5);
  context.stroke();

  context.fillStyle = "#4b3b32";
  context.beginPath();
  context.arc(centerX + (player.facing === "left" ? -2 : 2), faceY, 0.9, 0, Math.PI * 2);
  context.fill();
}

function drawVignette(width, height, pixelRatio) {
  context.save();
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  const vignette = context.createRadialGradient(
    width / 2,
    height / 2,
    Math.min(width, height) * 0.28,
    width / 2,
    height / 2,
    Math.max(width, height) * 0.72,
  );
  vignette.addColorStop(0, "rgb(35 48 36 / 0%)");
  vignette.addColorStop(1, "rgb(29 39 31 / 23%)");
  context.fillStyle = vignette;
  context.fillRect(0, 0, width, height);
  context.restore();
}

function drawPaintedLeaf(x, y, length, width, angle, color) {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  const leaf = context.createLinearGradient(0, -width, 0, width);
  leaf.addColorStop(0, "#718d72");
  leaf.addColorStop(0.52, color);
  leaf.addColorStop(1, "#3f665e");
  context.beginPath();
  context.moveTo(-length / 2, 0);
  context.quadraticCurveTo(-length / 4, -width, length / 2, 0);
  context.quadraticCurveTo(-length / 4, width, -length / 2, 0);
  context.fillStyle = leaf;
  context.fill();
  context.strokeStyle = "rgb(36 69 60 / 57%)";
  context.lineWidth = 1;
  context.stroke();
  context.strokeStyle = "rgb(213 221 177 / 50%)";
  context.lineWidth = 0.8;
  context.beginPath();
  context.moveTo(-length / 2 + 2, 0);
  context.quadraticCurveTo(0, -1.5, length / 2 - 2, 0);
  context.stroke();
  context.restore();
}

function drawEdgeFoliage(width, height, pixelRatio) {
  context.save();
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.globalAlpha = 0.82;

  const sprays = [
    { x: 0, y: height + 5, dx: 1, dy: -0.7, count: 8 },
    { x: width, y: height + 5, dx: -1, dy: -0.68, count: 8 },
    { x: -3, y: 1, dx: 1, dy: 0.58, count: 6 },
    { x: width + 3, y: 0, dx: -0.9, dy: 0.7, count: 6 },
  ];
  const colors = ["#4c746b", "#547d6b", "#60816a", "#416b65"];

  for (const spray of sprays) {
    const endX = spray.x + spray.dx * 77;
    const endY = spray.y + spray.dy * 61;
    context.strokeStyle = "#355b54";
    context.lineWidth = 4;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(spray.x, spray.y);
    context.quadraticCurveTo(spray.x + spray.dx * 35, spray.y + spray.dy * 20, endX, endY);
    context.stroke();

    for (let leaf = 0; leaf < spray.count; leaf += 1) {
      const progress = (leaf + 1) / (spray.count + 1);
      const centerX = spray.x + (endX - spray.x) * progress;
      const centerY = spray.y + (endY - spray.y) * progress;
      const side = leaf % 2 === 0 ? -1 : 1;
      const branchAngle = Math.atan2(spray.dy, spray.dx);
      const leafAngle = branchAngle + side * 0.78;
      const size = 27 + (leaf % 3) * 5;
      const offset = side * (13 + (leaf % 2) * 4);
      drawPaintedLeaf(
        centerX - Math.sin(branchAngle) * offset,
        centerY + Math.cos(branchAngle) * offset,
        size,
        size * 0.35,
        leafAngle,
        colors[leaf % colors.length],
      );
    }
  }
  context.restore();
}

function resizeCanvas() {
  const bounds = canvas.getBoundingClientRect();
  if (bounds.width <= 0 || bounds.height <= 0) return;

  const pixelLimit = 12_000_000;
  const pixelRatio = Math.min(
    window.devicePixelRatio || 1,
    2.5,
    Math.sqrt(pixelLimit / (bounds.width * bounds.height)),
  );
  const bitmapWidth = Math.max(1, Math.round(bounds.width * pixelRatio));
  const bitmapHeight = Math.max(1, Math.round(bounds.height * pixelRatio));
  if (canvas.width !== bitmapWidth || canvas.height !== bitmapHeight) {
    canvas.width = bitmapWidth;
    canvas.height = bitmapHeight;
  }
  canvasWidth = bounds.width;
  canvasHeight = bounds.height;
  canvasPixelRatio = pixelRatio;
  context.imageSmoothingEnabled = true;
}

function drawMap(time) {
  if (canvasWidth === 0 || canvasHeight === 0) resizeCanvas();
  if (canvasWidth === 0 || canvasHeight === 0) return;

  const width = canvasWidth;
  const height = canvasHeight;
  const pixelRatio = canvasPixelRatio;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);

  const sea = context.createLinearGradient(0, 0, width, height);
  sea.addColorStop(0, "#648584");
  sea.addColorStop(0.48, "#567a7b");
  sea.addColorStop(1, "#496e70");
  context.fillStyle = sea;
  context.fillRect(0, 0, width, height);

  const tileSize = Math.min(width / 17, height / 8.2) * zoomLevel;
  const worldScale = tileSize / TILE_SIZE;
  const offsetX = width / 2 - (player.pixelX + 0.5) * tileSize;
  const offsetY = height / 2 - (player.pixelY + 0.5) * tileSize;
  context.setTransform(
    pixelRatio * worldScale,
    0,
    0,
    pixelRatio * worldScale,
    pixelRatio * offsetX,
    pixelRatio * offsetY,
  );

  const leftTile = Math.max(0, Math.floor(-offsetX / tileSize) - 2);
  const rightTile = Math.min(MAP_WIDTH - 1, Math.ceil((width - offsetX) / tileSize) + 2);
  const topTile = Math.max(0, Math.floor(-offsetY / tileSize) - 2);
  const bottomTile = Math.min(MAP_HEIGHT - 1, Math.ceil((height - offsetY) / tileSize) + 2);

  for (let y = topTile; y <= bottomTile; y += 1) {
    for (let x = leftTile; x <= rightTile; x += 1) {
      if (mapContent.tiles[y][x] === "water") drawWaterRipple(x, y, time);
    }
  }

  drawIsland();
  for (let y = topTile; y <= bottomTile; y += 1) {
    for (let x = leftTile; x <= rightTile; x += 1) {
      drawTile(x, y, mapContent.tiles[y][x]);
    }
  }

  drawVolcano(time);
  for (const [x, y] of TREE_POSITIONS) {
    if (x >= leftTile - 1 && x <= rightTile + 1 && y >= topTile - 1 && y <= bottomTile + 1) {
      drawTree(x, y, time);
    }
  }
  for (const [x, y] of ROCK_POSITIONS) {
    if (x >= leftTile - 1 && x <= rightTile + 1 && y >= topTile - 1 && y <= bottomTile + 1) {
      drawBoulder(x, y);
    }
  }
  for (const [x, y] of BRUSH_POSITIONS) {
    if (x >= leftTile - 1 && x <= rightTile + 1 && y >= topTile - 1 && y <= bottomTile + 1) {
      drawFern(x, y, time);
    }
  }
  for (const prop of SCENE_PROPS) {
    const [x, y] = prop.position;
    if (x >= leftTile - 1 && x <= rightTile + 1 && y >= topTile - 1 && y <= bottomTile + 1) {
      drawProp(prop);
    }
  }

  const activeStep = QUEST_STEPS[questIndex];
  if (activeStep) {
    const [x, y] = activeStep.position;
    const distance = Math.hypot(player.pixelX - x, player.pixelY - y);
    if (
      distance <= SCROLL_VISIBILITY_RADIUS
      && x >= leftTile - 2
      && x <= rightTile + 2
      && y >= topTile - 2
      && y <= bottomTile + 2
    ) {
      drawLandmark(activeStep, questIndex, time);
    }
  }
  if (
    MORI_POSITION[0] >= leftTile - 2
    && MORI_POSITION[0] <= rightTile + 2
    && MORI_POSITION[1] >= topTile - 2
    && MORI_POSITION[1] <= bottomTile + 2
  ) {
    drawGuide(time);
  }

  drawPlayer(time);
  drawEdgeFoliage(width, height, pixelRatio);
  drawVignette(width, height, pixelRatio);
}

function renderJournalArchive() {
  landmarks.replaceChildren();
  for (let index = 0; index < questIndex; index += 1) {
    const step = QUEST_STEPS[index];
    const item = document.createElement("li");
    item.className = "discovered";

    const number = document.createElement("span");
    number.className = "landmark-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("span");
    title.className = "landmark-title";
    title.textContent = step.name;

    const type = document.createElement("span");
    type.className = "landmark-status";
    type.textContent = step.type === "history" ? "HISTORY" : "PERK";
    item.append(number, title, type);
    landmarks.append(item);
  }
}

function compassBearing(from, to) {
  const deltaX = to[0] - from[0];
  const deltaY = to[1] - from[1];
  const angle = (Math.atan2(deltaY, deltaX) + Math.PI * 2) % (Math.PI * 2);
  const directions = [
    "EAST",
    "SOUTH-EAST",
    "SOUTH",
    "SOUTH-WEST",
    "WEST",
    "NORTH-WEST",
    "NORTH",
    "NORTH-EAST",
  ];
  return directions[Math.round(angle / (Math.PI / 4)) % directions.length];
}

function islandRegion(position) {
  const distanceFromVolcano = Math.hypot(
    position[0] - VOLCANO_CENTER[0],
    position[1] - VOLCANO_CENTER[1],
  );
  if (distanceFromVolcano <= VOLCANO_RADIUS + 1) return "The volcano rim";
  return `${compassBearing(VOLCANO_CENTER, position).toLowerCase()} slope`;
}

function updateJournal() {
  const historyFound = QUEST_STEPS.slice(0, questIndex).filter((step) => step.type === "history").length;
  const perksFound = QUEST_STEPS.slice(0, questIndex).filter((step) => step.type === "perk").length;
  document.querySelector("#clue-count").textContent = `${questIndex} / ${QUEST_STEPS.length}`;
  document.querySelector("#clue-progress").style.width = `${(questIndex / QUEST_STEPS.length) * 100}%`;
  document.querySelector("#perk-count").textContent = `${perksFound} / ${FEATURES.length}`;
  document.querySelector("#history-count").textContent = `${historyFound} / ${HISTORY_STEPS.length}`;
  document.querySelector("#archive-count").textContent = `${questIndex} FOUND`;

  const nextStep = QUEST_STEPS[questIndex];
  const chapterTag = document.querySelector("#chapter-tag");
  const currentClue = document.querySelector("#current-clue");
  const direction = document.querySelector("#clue-direction");
  if (nextStep) {
    chapterTag.textContent = nextStep.type === "history"
      ? `ORIGINS · ${historyFound + 1} OF ${HISTORY_STEPS.length}`
      : `WINDOWS 11 · ${perksFound + 1} OF ${FEATURES.length}`;
    currentClue.textContent = nextStep.clue;
    const distance = Math.hypot(nextStep.position[0] - player.x, nextStep.position[1] - player.y);
    direction.textContent = distance <= SCROLL_INTERACTION_RADIUS
      ? "WITHIN REACH"
      : compassBearing([player.x, player.y], nextStep.position);
    document.querySelector("#location-label").textContent = distance <= SCROLL_INTERACTION_RADIUS
      ? "A scroll is within reach"
      : islandRegion([player.x, player.y]);
  } else {
    chapterTag.textContent = "JOURNEY COMPLETE";
    currentClue.textContent = "All five history notes and all nine Windows 11 discoveries are safely in your journal.";
    direction.textContent = "SUMMIT REACHED";
    document.querySelector("#location-label").textContent = "Volcano summit";
  }

  renderJournalArchive();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 2500);
}

function openModal({ title, description, art = "✧", eyebrow = "SCROLL FOUND", locked = false }) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalArt.textContent = art;
  modalEyebrow.textContent = eyebrow;
  answerFeedback.textContent = "";
  answerFeedback.classList.remove("success");
  answerList.replaceChildren();
  quizArea.hidden = true;
  tryCard.hidden = true;
  modalAction.hidden = true;
  modalAction.textContent = "Continue exploring";
  modalClose.hidden = locked;
  modalLocked = locked;
  modalBackdrop.hidden = false;
}

function closeModal() {
  if (modalLocked) return;
  modalBackdrop.hidden = true;
  modalStepIndex = -1;
  modalStage = "";
}

function showQuestion(question, choices, answer, onCorrect) {
  quizArea.hidden = false;
  questionText.textContent = question;
  answerList.replaceChildren();
  answerFeedback.textContent = "";
  answerFeedback.classList.remove("success");

  choices.forEach((choice, choiceIndex) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    const number = document.createElement("span");
    number.className = "answer-number";
    number.textContent = String(choiceIndex + 1);
    const label = document.createElement("span");
    label.textContent = choice;
    button.append(number, label);
    button.addEventListener("click", () => {
      for (const option of answerList.querySelectorAll(".answer-button")) {
        option.classList.remove("incorrect", "correct");
      }
      if (choiceIndex !== answer) {
        button.classList.add("incorrect");
        answerFeedback.textContent = "Not quite. Read the scroll above once more, then give it another try.";
        return;
      }

      button.classList.add("correct");
      for (const option of answerList.querySelectorAll(".answer-button")) option.disabled = true;
      answerFeedback.textContent = "";
      answerFeedback.classList.add("success");
      onCorrect();
    });
    answerList.append(button);
  });
}

function showIntro() {
  modalStage = "intro";
  openModal({
    title: "Welcome to Embercrown Isle",
    description: "Fourteen scrolls circle a great volcano. The compass gives only a broad bearing, so search the island for the one active scroll. Read it and answer its check-in before the next scroll appears. After the first thirteen, climb the volcano for the final scroll. Use WASD or the arrows to explore, and press E when a scroll is nearby.",
    art: "✧",
    eyebrow: "BEFORE YOU SET OUT",
    locked: true,
  });
  showQuestion(
    "When does the next scroll appear?",
    [
      "After I find and learn the current scroll",
      "As soon as I start moving",
      "All scrolls appear at once",
      "When I press Escape",
    ],
    0,
    () => {
      modalStage = "intro-complete";
      answerFeedback.textContent = "That's it. One scroll at a time; use the compass to search.";
      answerFeedback.classList.add("success");
      modalAction.textContent = "Start the hunt";
      modalAction.hidden = false;
    },
  );
}

function showQuestStep(step, index) {
  modalStepIndex = index;
  modalStage = "lesson";
  openModal({
    title: step.name,
    description: step.description,
    art: step.symbol,
    eyebrow: step.type === "history"
      ? `WINDOWS HISTORY · SCROLL ${index + 1} OF ${QUEST_STEPS.length}`
      : `WINDOWS 11 FIELD GUIDE · SCROLL ${index + 1} OF ${QUEST_STEPS.length}`,
    locked: true,
  });
  tryText.textContent = step.takeaway;
  tryCard.hidden = false;
  modalAction.textContent = "I've read the scroll";
  modalAction.hidden = false;
}

function showReview(step, index) {
  modalStage = "review";
  openModal({
    title: step.name,
    description: step.description,
    art: step.symbol,
    eyebrow: step.type === "history" ? "SCROLL JOURNAL · WINDOWS HISTORY" : "SCROLL JOURNAL · WINDOWS 11 PERK",
  });
  tryText.textContent = step.takeaway;
  tryCard.hidden = false;
  modalAction.textContent = "Close scroll";
  modalAction.hidden = false;
  modalStepIndex = index;
}

function showGuide() {
  const activeStep = QUEST_STEPS[questIndex];
  const line = activeStep
    ? `${MORI_DIALOGUE[guideChats % MORI_DIALOGUE.length]} The compass points ${compassBearing([player.x, player.y], activeStep.position).toLowerCase()} for the next scroll.`
    : "Every scroll has a home in the journal. You made it to the summit!";
  guideChats += 1;
  modalStage = "guide";
  openModal({
    title: "Mori the moth",
    description: line,
    art: "✧",
    eyebrow: "A FRIENDLY COMPASS CHECK",
  });
  modalAction.textContent = "Back to the hunt";
  modalAction.hidden = false;
}

function completeStep(step, index) {
  if (index !== questIndex || completedSteps.has(index)) return;
  completedSteps.add(index);
  questIndex += 1;
  updateJournal();
  modalStage = "step-complete";
  answerFeedback.textContent = step.type === "history"
    ? "Added to your Windows history timeline."
    : `${step.name} added to your Windows 11 scroll journal.`;
  answerFeedback.classList.add("success");
  modalAction.textContent = questIndex === QUEST_STEPS.length ? "Finish at the summit" : "Reveal the next scroll";
  modalAction.hidden = false;

  if (questIndex === QUEST_STEPS.length) {
    showToast("All fourteen scrolls read. You made it to the volcano's summit!");
  }
}

function advanceModal() {
  if (modalStage === "lesson") {
    const step = QUEST_STEPS[modalStepIndex];
    if (!step) return;
    modalStage = "quiz";
    modalAction.hidden = true;
    showQuestion(step.question, step.choices, step.answer, () => completeStep(step, modalStepIndex));
    const firstAnswer = answerList.querySelector("button");
    if (firstAnswer) firstAnswer.focus();
    return;
  }

  if (modalStage === "intro-complete" || modalStage === "step-complete") {
    modalLocked = false;
    modalBackdrop.hidden = true;
    modalStage = "";
    modalStepIndex = -1;
    heldKeys.clear();
    return;
  }

  modalLocked = false;
  closeModal();
}

function interact() {
  if (!modalBackdrop.hidden) return;

  const position = [player.x, player.y];
  const activeStep = QUEST_STEPS[questIndex];
  if (activeStep && distanceBetween(position, activeStep.position) <= SCROLL_INTERACTION_RADIUS) {
    showQuestStep(activeStep, questIndex);
    return;
  }

  const previousStepIndex = QUEST_STEPS.slice(0, questIndex)
    .findIndex((step) => distanceBetween(position, step.position) <= SCROLL_INTERACTION_RADIUS);
  if (previousStepIndex !== -1) {
    showReview(QUEST_STEPS[previousStepIndex], previousStepIndex);
    return;
  }
  if (distanceBetween(position, MORI_POSITION) <= 1.8) {
    showGuide();
    return;
  }

  const direction = activeStep
    ? compassBearing(position, activeStep.position).toLowerCase()
    : "the summit";
  showToast(`No scroll close by. The compass points ${direction}.`);
}

function movePlayer(dx, dy) {
  const nextX = player.x + dx;
  const nextY = player.y + dy;
  if (nextX < 0 || nextY < 0 || nextX >= MAP_WIDTH || nextY >= MAP_HEIGHT) return;
  const tile = mapContent.tiles[nextY][nextX];
  if (["water", "tree", "rock"].includes(tile)) return;
  if (tile === "volcano" && questIndex < QUEST_STEPS.length - 1) {
    if (performance.now() - lastVolcanoToastAt > 900) {
      showToast("The upper slope is too steep. Find every scroll around the volcano before climbing.");
      lastVolcanoToastAt = performance.now();
    }
    return;
  }

  player.x = nextX;
  player.y = nextY;
  if (dx < 0) player.facing = "left";
  else if (dx > 0) player.facing = "right";
  else if (dy < 0) player.facing = "up";
  else player.facing = "down";
  updateJournal();
}

function directionFor(key) {
  const directions = {
    ArrowUp: [0, -1],
    w: [0, -1],
    W: [0, -1],
    ArrowDown: [0, 1],
    s: [0, 1],
    S: [0, 1],
    ArrowLeft: [-1, 0],
    a: [-1, 0],
    A: [-1, 0],
    ArrowRight: [1, 0],
    d: [1, 0],
    D: [1, 0],
  };
  return directions[key];
}

function updateZoomControls() {
  zoomLabel.textContent = `${Math.round(zoomLevel * 100)}%`;
  zoomOutButton.disabled = zoomLevel <= MIN_ZOOM;
  zoomInButton.disabled = zoomLevel >= MAX_ZOOM;
}

function setZoom(nextZoom) {
  zoomLevel = Math.round(Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, nextZoom)) * 100) / 100;
  updateZoomControls();
}

function updateFullscreenButton() {
  const isFullscreen = document.fullscreenElement === appShell;
  const label = isFullscreen ? "Exit fullscreen" : "Maximize game";
  fullscreenButton.setAttribute("aria-label", label);
  fullscreenButton.title = label;
  fullscreenButton.classList.toggle("is-active", isFullscreen);
}

async function toggleFullscreen() {
  if (!document.fullscreenEnabled || !appShell.requestFullscreen) {
    showToast("Fullscreen is unavailable in this browser. Maximize the browser window instead.");
    return;
  }

  try {
    if (document.fullscreenElement === appShell) {
      await document.exitFullscreen();
    } else {
      await appShell.requestFullscreen();
    }
  } catch (error) {
    console.error("Could not change fullscreen mode.", error);
    showToast("The browser blocked fullscreen. You can still maximize its window.");
  }
}

function animate(time) {
  if (time - lastFrameAt > 1000 / 60) {
    if (modalBackdrop.hidden && heldKeys.size && time - lastMoveAt > 125) {
      const keys = [...heldKeys];
      const direction = directionFor(keys[keys.length - 1]);
      if (direction) movePlayer(...direction);
      lastMoveAt = time;
    }

    player.pixelX += (player.x - player.pixelX) * 0.32;
    player.pixelY += (player.y - player.pixelY) * 0.32;
    if (Math.abs(player.x - player.pixelX) < 0.01) player.pixelX = player.x;
    if (Math.abs(player.y - player.pixelY) < 0.01) player.pixelY = player.y;
    drawMap(time);
    lastFrameAt = time;
  }
  window.requestAnimationFrame(animate);
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!modalBackdrop.hidden) {
    if (key === "Escape") {
      event.preventDefault();
      if (!modalLocked) closeModal();
    } else if (key === "Enter" && !modalAction.hidden) {
      event.preventDefault();
      advanceModal();
    }
    return;
  }

  if (key.toLowerCase() === "f") {
    event.preventDefault();
    toggleFullscreen();
  } else if (key === "+" || key === "=") {
    event.preventDefault();
    setZoom(zoomLevel + ZOOM_STEP);
  } else if (key === "-") {
    event.preventDefault();
    setZoom(zoomLevel - ZOOM_STEP);
  } else if (directionFor(key)) {
    event.preventDefault();
    if (!heldKeys.has(key)) {
      heldKeys.add(key);
      movePlayer(...directionFor(key));
      lastMoveAt = performance.now();
    }
  } else if (key.toLowerCase() === "e") {
    event.preventDefault();
    interact();
  }
});

document.addEventListener("keyup", (event) => heldKeys.delete(event.key));
window.addEventListener("blur", () => heldKeys.clear());
window.addEventListener("resize", resizeCanvas);
document.addEventListener("fullscreenchange", () => {
  updateFullscreenButton();
  resizeCanvas();
});
if ("ResizeObserver" in window) {
  const canvasObserver = new ResizeObserver(resizeCanvas);
  canvasObserver.observe(canvas);
}
document.querySelector("#interact-button").addEventListener("click", interact);
modalClose.addEventListener("click", closeModal);
modalAction.addEventListener("click", advanceModal);
fullscreenButton.addEventListener("click", toggleFullscreen);
zoomOutButton.addEventListener("click", () => setZoom(zoomLevel - ZOOM_STEP));
zoomInButton.addEventListener("click", () => setZoom(zoomLevel + ZOOM_STEP));
document.querySelector("#help-button").addEventListener("click", () => {
  modalStage = "help";
  openModal({
    title: "How to hunt the scrolls",
    description: "Use WASD or the arrow keys to circle the volcano. The journal compass gives a broad direction to the one active scroll; it only becomes visible nearby, and E can read it from a few steps away. Read the scroll and answer its check-in before the next appears. The final scroll waits on the summit. Use + and - to zoom, or F to maximize the game.",
    art: "⌖",
    eyebrow: "FIELD GUIDE",
  });
  modalAction.textContent = "Back to the hunt";
  modalAction.hidden = false;
});

groundTexture.addEventListener("load", () => {
  groundPattern = context.createPattern(groundTexture, "repeat");
});
groundTexture.addEventListener("error", () => {
  console.error("Could not load the Whisperwood ground texture.", groundTexture.src);
});
groundTexture.src = "assets/whisperwood-ground.png";

for (const button of document.querySelectorAll("[data-move]")) {
  const key = button.dataset.move;
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.setPointerCapture(event.pointerId);
    if (!heldKeys.has(key)) {
      heldKeys.add(key);
      movePlayer(...directionFor(key));
      lastMoveAt = performance.now();
    }
  });
  button.addEventListener("pointerup", () => heldKeys.delete(key));
  button.addEventListener("pointercancel", () => heldKeys.delete(key));
  button.addEventListener("lostpointercapture", () => heldKeys.delete(key));
}

updateJournal();
updateZoomControls();
updateFullscreenButton();
resizeCanvas();
showIntro();
window.requestAnimationFrame(animate);

const HISTORY_STEPS = [
  {
    type: "history",
    name: "The very first window",
    position: [4, 17],
    clue: "Look for an old glass screen where the shore path meets a fallen log.",
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
    position: [12, 10],
    clue: "A little square keepsake is hidden beside the old stump below the path.",
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
    position: [20, 22],
    clue: "Look near the three pale mushrooms just above the path.",
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
    position: [28, 10],
    clue: "A new-start note is tucked beside a broken stone arch above the trail.",
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
    position: [36, 22],
    clue: "A pale-blue glint is waiting beside the weathered standing stone.",
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
    position: [44, 10],
    clue: "Look for a tiny four-pane window beside the old log above the path.",
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
    position: [52, 22],
    clue: "A little window-shaped note is tucked beside the old stump below the path.",
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
    position: [60, 10],
    clue: "Search near the three pale mushrooms above the path for a weather mark.",
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
    position: [68, 22],
    clue: "A folded page is waiting beside the broken stone wall below the path.",
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
    position: [76, 10],
    clue: "A small clock face is hidden beside the standing stone above the path.",
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
    position: [84, 22],
    clue: "A quiet voice-shaped note rests beside the fallen log below the path.",
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
    position: [92, 10],
    clue: "A soft-colored spark waits beside the old stump above the path.",
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
    position: [100, 22],
    clue: "A little camera note waits beside the three pale mushrooms below the trail.",
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
    position: [108, 10],
    clue: "The final note glimmers beside a weathered stone arch near the far shore.",
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
const MAP_WIDTH = 112;
const MAP_HEIGHT = 32;
const TILE_SIZE = 48;
const ZONE_WIDTH = 8;
const GATE_Y = 16;
const MIN_ZOOM = 1;
const MAX_ZOOM = 1.75;
const ZOOM_STEP = 0.1;
const START = [3, 16];
const MORI_POSITION = [2, 15];
const GLADE_NAMES = [
  "The fern shore", "The old stump", "Bluebell hollow", "The green rise",
  "The stone arch", "Birchlight glade", "The fern bend", "The weathered wall",
  "Mushroom meadow", "The old footbridge", "The fallen log", "Mosslight rise",
  "The stone steps", "The far lookout",
];
const PROP_TYPES = ["fallen-log", "stump", "mushrooms", "ruin", "standing-stone"];
const SCENE_PROPS = QUEST_STEPS.map((step, zone) => ({
  position: [
    zone * ZONE_WIDTH + (zone % 2 ? 2 : 6),
    step.position[1] + (zone % 2 ? 2 : -2),
  ],
  type: PROP_TYPES[zone % PROP_TYPES.length],
}));
const IMPORTANT_POSITIONS = [START, MORI_POSITION, ...QUEST_STEPS.map((step) => step.position)];

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
let lastGateToastAt = -Infinity;
let toastTimeout = 0;
let canvasWidth = 0;
let canvasHeight = 0;
let canvasPixelRatio = 1;
let groundPattern = null;
const groundTexture = new Image();

function keyFor([x, y]) {
  return `${x},${y}`;
}

function positionIs(left, right) {
  return left[0] === right[0] && left[1] === right[1];
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
  const tiles = Array.from({ length: MAP_HEIGHT }, (_, y) =>
    Array.from({ length: MAP_WIDTH }, (_, x) => {
      if (x < 1 || x >= MAP_WIDTH - 1 || y < 1 || y >= MAP_HEIGHT - 1) return "water";
      if (y <= 2 || y >= MAP_HEIGHT - 3) return "sand";
      return "grass";
    }),
  );
  const trees = [];
  const rocks = [];

  for (let y = 4; y < MAP_HEIGHT - 4; y += 1) {
    for (let x = 2; x < MAP_WIDTH - 2; x += 1) {
      if (tiles[y][x] !== "grass" || isNearImportantPosition(x, y)) continue;
      if (x % ZONE_WIDTH === 0) continue;

      const density = terrainNoise(x, y, 4);
      const forestEdge = y <= 7 || y >= 24;
      const zoneEdge = x % ZONE_WIDTH <= 1 || x % ZONE_WIDTH >= 7;
      const forestLane = zoneEdge && ((y >= 9 && y <= 14) || (y >= 18 && y <= 23));
      if ((forestEdge && density > 0.64) || (forestLane && density > 0.79)) {
        tiles[y][x] = "tree";
        trees.push([x, y]);
      } else if ((y === 8 || y === 23) && density > 0.96) {
        tiles[y][x] = "rock";
        rocks.push([x, y]);
      } else if (!forestEdge && density > 0.992 && Math.abs(y - GATE_Y) > 3) {
        tiles[y][x] = "rock";
        rocks.push([x, y]);
      }
    }
  }

  const brush = [];
  for (let y = 8; y <= 23; y += 1) {
    for (let x = 2; x < MAP_WIDTH - 2; x += 1) {
      if (tiles[y][x] !== "grass" || isNearImportantPosition(x, y, 1)) continue;
      if (terrainNoise(x, y, 19) > 0.81) brush.push([x, y]);
    }
  }

  return { tiles, trees, rocks, brush };
}

const TREE_POSITIONS = mapContent.trees;
const ROCK_POSITIONS = mapContent.rocks;
const BRUSH_POSITIONS = mapContent.brush;
const MORI_DIALOGUE = [
  "A field note is like a tiny window into the past. I like the ones with pictures.",
  "The gate only opens after the current note is read and solved. No shortcuts through the brambles!",
  "I saw a moth carrying a clue, but I think Mori was just showing off.",
  "Fun fact: the Start menu is older than this very mossy stump.",
];

function traceIsland(inset = 0) {
  const left = (0.25 + inset) * TILE_SIZE;
  const right = (MAP_WIDTH - 0.25 - inset) * TILE_SIZE;
  const top = (1.15 + inset) * TILE_SIZE;
  const bottom = (MAP_HEIGHT - 1.15 - inset) * TILE_SIZE;
  const corner = 4.5 * TILE_SIZE;

  context.beginPath();
  context.moveTo(left + corner, top);
  context.bezierCurveTo(left + 15 * TILE_SIZE, top - 0.45 * TILE_SIZE, left + 22 * TILE_SIZE, top + 0.42 * TILE_SIZE, left + 34 * TILE_SIZE, top);
  context.bezierCurveTo(left + 47 * TILE_SIZE, top + 0.28 * TILE_SIZE, left + 54 * TILE_SIZE, top - 0.3 * TILE_SIZE, left + 67 * TILE_SIZE, top);
  context.bezierCurveTo(left + 82 * TILE_SIZE, top - 0.25 * TILE_SIZE, right - 16 * TILE_SIZE, top + 0.42 * TILE_SIZE, right - corner, top);
  context.quadraticCurveTo(right, top, right, top + corner);
  context.lineTo(right, bottom - corner);
  context.quadraticCurveTo(right, bottom, right - corner, bottom);
  context.bezierCurveTo(right - 18 * TILE_SIZE, bottom + 0.38 * TILE_SIZE, left + 79 * TILE_SIZE, bottom - 0.38 * TILE_SIZE, left + 65 * TILE_SIZE, bottom);
  context.bezierCurveTo(left + 49 * TILE_SIZE, bottom + 0.25 * TILE_SIZE, left + 43 * TILE_SIZE, bottom - 0.3 * TILE_SIZE, left + 29 * TILE_SIZE, bottom);
  context.bezierCurveTo(left + 17 * TILE_SIZE, bottom + 0.38 * TILE_SIZE, left + 11 * TILE_SIZE, bottom - 0.3 * TILE_SIZE, left + corner, bottom);
  context.quadraticCurveTo(left, bottom, left, bottom - corner);
  context.lineTo(left, top + corner);
  context.quadraticCurveTo(left, top, left + corner, top);
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

  if (tile === "water") return;
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

function drawTrail(zone) {
  const step = QUEST_STEPS[zone];
  if (!step) return;
  const startX = zone * ZONE_WIDTH;
  const endX = startX + ZONE_WIDTH;
  const [noteX, noteY] = step.position;

  context.beginPath();
  context.moveTo(startX * TILE_SIZE, GATE_Y * TILE_SIZE);
  context.bezierCurveTo(
    (startX + 2) * TILE_SIZE,
    GATE_Y * TILE_SIZE,
    (noteX - 2) * TILE_SIZE,
    noteY * TILE_SIZE,
    noteX * TILE_SIZE,
    noteY * TILE_SIZE,
  );
  context.bezierCurveTo(
    (noteX + 2) * TILE_SIZE,
    noteY * TILE_SIZE,
    (endX - 2) * TILE_SIZE,
    GATE_Y * TILE_SIZE,
    endX * TILE_SIZE,
    GATE_Y * TILE_SIZE,
  );

  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = "rgb(64 72 51 / 25%)";
  context.lineWidth = 0.58 * TILE_SIZE;
  context.stroke();
  context.strokeStyle = "#a18e6b";
  context.lineWidth = 0.4 * TILE_SIZE;
  context.stroke();
  context.strokeStyle = "#c6b38a";
  context.lineWidth = 0.25 * TILE_SIZE;
  context.stroke();
  context.strokeStyle = "rgb(246 231 192 / 20%)";
  context.lineWidth = 1.4;
  context.stroke();
}

function drawGateBush(x, y, variation) {
  const centerX = x * TILE_SIZE;
  const centerY = y * TILE_SIZE;
  const shades = ["#4c694a", "#58754d", "#6a8055"];
  context.fillStyle = "rgb(40 56 39 / 18%)";
  context.beginPath();
  context.ellipse(centerX, centerY + 11, 24, 8, 0, 0, Math.PI * 2);
  context.fill();
  for (let leaf = 0; leaf < 4; leaf += 1) {
    const offsetX = (leaf - 1.5) * 11;
    const offsetY = Math.sin(leaf * 2 + variation) * 5;
    context.beginPath();
    context.ellipse(centerX + offsetX, centerY + offsetY, 13, 11, 0.2 * leaf, 0, Math.PI * 2);
    context.fillStyle = shades[(leaf + Math.floor(variation * 3)) % shades.length];
    context.fill();
  }
}

function drawGate(boundary, time) {
  const gateX = boundary * ZONE_WIDTH;
  const isOpen = boundary <= questIndex;
  for (let y = 3; y <= MAP_HEIGHT - 3; y += 2) {
    if (Math.abs(y - GATE_Y) <= 2.3) continue;
    drawGateBush(gateX, y + Math.sin(time / 1500 + y) * 0.04, terrainNoise(boundary, y, 5));
  }

  const centerX = gateX * TILE_SIZE;
  const centerY = GATE_Y * TILE_SIZE;
  context.fillStyle = "rgb(42 53 38 / 26%)";
  context.beginPath();
  context.ellipse(centerX, centerY + 16, 24, 8, 0, 0, Math.PI * 2);
  context.fill();

  if (isOpen) {
    context.strokeStyle = "#816c4c";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(centerX - 8, centerY + 16);
    context.lineTo(centerX - 14, centerY - 22);
    context.moveTo(centerX - 8, centerY - 2);
    context.lineTo(centerX + 13, centerY - 6);
    context.moveTo(centerX - 10, centerY + 7);
    context.lineTo(centerX + 8, centerY + 5);
    context.stroke();
    context.fillStyle = "#9ca36f";
    context.beginPath();
    context.ellipse(centerX + 16, centerY - 17, 4, 2.1, -0.7, 0, Math.PI * 2);
    context.fill();
    return;
  }

  context.strokeStyle = "#74583b";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(centerX - 7, centerY - 27);
  context.lineTo(centerX - 7, centerY + 27);
  context.moveTo(centerX + 7, centerY - 27);
  context.lineTo(centerX + 7, centerY + 27);
  context.moveTo(centerX - 10, centerY - 16);
  context.lineTo(centerX + 10, centerY - 16);
  context.moveTo(centerX - 10, centerY + 1);
  context.lineTo(centerX + 10, centerY + 1);
  context.moveTo(centerX - 10, centerY + 18);
  context.lineTo(centerX + 10, centerY + 18);
  context.stroke();
  context.strokeStyle = "rgb(201 167 105 / 48%)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(centerX - 5, centerY - 24);
  context.lineTo(centerX - 5, centerY + 23);
  context.moveTo(centerX + 9, centerY - 14);
  context.lineTo(centerX + 9, centerY - 3);
  context.stroke();

  const sealY = centerY - 7 + Math.sin(time / 700 + boundary) * 1.2;
  context.fillStyle = "#d3bd83";
  context.beginPath();
  context.arc(centerX, sealY, 5, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#66553d";
  context.font = "bold 7px Georgia, serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("?", centerX, sealY + 0.5);
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

function drawLandmark(step, index, time, discovered = false) {
  const [x, y] = step.position;
  const centerX = (x + 0.5) * TILE_SIZE;
  const centerY = (y + 0.5) * TILE_SIZE;
  const bob = discovered ? 0 : Math.sin(time / 620 + index) * 2.1;
  const noteY = centerY - 1 + bob;

  if (!discovered) {
    const halo = context.createRadialGradient(centerX, noteY, 1, centerX, noteY, 37);
    halo.addColorStop(0, "rgb(236 214 160 / 30%)");
    halo.addColorStop(0.48, "rgb(198 202 142 / 14%)");
    halo.addColorStop(1, "rgb(198 202 142 / 0%)");
    context.fillStyle = halo;
    context.beginPath();
    context.arc(centerX, noteY, 37, 0, Math.PI * 2);
    context.fill();
  }

  context.fillStyle = "rgb(51 60 43 / 28%)";
  context.beginPath();
  context.ellipse(centerX, centerY + 12, 15, 5, -0.08, 0, Math.PI * 2);
  context.fill();

  context.beginPath();
  context.moveTo(centerX - 13, noteY - 9);
  context.lineTo(centerX - 2, noteY - 12);
  context.lineTo(centerX + 12, noteY - 8);
  context.lineTo(centerX + 11, noteY + 8);
  context.lineTo(centerX + 4, noteY + 10);
  context.lineTo(centerX - 13, noteY + 7);
  context.closePath();
  const paper = context.createLinearGradient(centerX - 10, noteY - 12, centerX + 10, noteY + 9);
  paper.addColorStop(0, discovered ? "#d4c49c" : "#f1e4c4");
  paper.addColorStop(1, discovered ? "#bcae85" : "#d9c89d");
  context.fillStyle = paper;
  context.fill();
  context.strokeStyle = "rgb(114 91 56 / 68%)";
  context.lineWidth = 1.2;
  context.stroke();

  context.fillStyle = "#6b644b";
  context.font = "bold 17px Georgia, serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(step.symbol || "✧", centerX, noteY - 1);

  if (!discovered) {
    context.strokeStyle = "rgb(246 235 203 / 82%)";
    context.lineWidth = 1.4;
    context.beginPath();
    context.moveTo(centerX - 7, noteY + 3);
    context.lineTo(centerX + 7, noteY + 3);
    context.stroke();
    drawMoth(centerX + 17, noteY - 15, time, 0.55);
  }
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

  for (let zone = 0; zone <= Math.min(questIndex, QUEST_STEPS.length - 1); zone += 1) {
    drawTrail(zone);
  }
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

  const firstVisibleGate = Math.max(1, Math.floor(leftTile / ZONE_WIDTH));
  const lastVisibleGate = Math.min(
    QUEST_STEPS.length - 1,
    Math.ceil(rightTile / ZONE_WIDTH),
  );
  for (let boundary = firstVisibleGate; boundary <= lastVisibleGate; boundary += 1) {
    drawGate(boundary, time);
  }

  for (let index = 0; index <= questIndex && index < QUEST_STEPS.length; index += 1) {
    const step = QUEST_STEPS[index];
    const [x, y] = step.position;
    if (x >= leftTile - 2 && x <= rightTile + 2 && y >= topTile - 2 && y <= bottomTile + 2) {
      drawLandmark(step, index, time, index < questIndex);
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
  if (nextStep) {
    chapterTag.textContent = nextStep.type === "history"
      ? `ORIGINS · ${historyFound + 1} OF ${HISTORY_STEPS.length}`
      : `WINDOWS 11 · ${perksFound + 1} OF ${FEATURES.length}`;
    currentClue.textContent = nextStep.clue;
  } else {
    chapterTag.textContent = "JOURNEY COMPLETE";
    currentClue.textContent = "All five history notes and all nine Windows 11 discoveries are safely in your journal.";
  }

  renderJournalArchive();
  const activePosition = nextStep ? nextStep.position : null;
  if (activePosition && positionIs([player.x, player.y], activePosition)) {
    document.querySelector("#location-label").textContent = "A field note is waiting";
  } else {
    const zone = Math.max(0, Math.min(GLADE_NAMES.length - 1, Math.floor(player.x / ZONE_WIDTH)));
    document.querySelector("#location-label").textContent = GLADE_NAMES[zone];
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 2500);
}

function openModal({ title, description, art = "✧", eyebrow = "FIELD NOTE", locked = false }) {
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
        answerFeedback.textContent = "Not quite. Read the field note above once more, then give it another try.";
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
    title: "Welcome to Whisperwood",
    description: "A trail of field notes winds through these woods. Each one tells a piece of Windows history or reveals a Windows 11 feature. Read each note and answer its check-in to open the next gate; future clues stay hidden until then. Move with WASD or the arrows, and press E to examine.",
    art: "✧",
    eyebrow: "BEFORE YOU SET OUT",
    locked: true,
  });
  showQuestion(
    "What opens the next gate?",
    [
      "Find a note, read it, and answer its check-in",
      "Walk through the brambles",
      "Guess where the last clue is",
      "Press Escape to skip ahead",
    ],
    0,
    () => {
      modalStage = "intro-complete";
      answerFeedback.textContent = "That's it. One note at a time, and the trail will open.";
      answerFeedback.classList.add("success");
      modalAction.textContent = "Begin the hunt";
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
      ? `WINDOWS HISTORY · NOTE ${index + 1} OF ${QUEST_STEPS.length}`
      : `WINDOWS 11 FIELD GUIDE · NOTE ${index + 1} OF ${QUEST_STEPS.length}`,
    locked: true,
  });
  tryText.textContent = step.takeaway;
  tryCard.hidden = false;
  modalAction.textContent = "I've read the note";
  modalAction.hidden = false;
}

function showReview(step, index) {
  modalStage = "review";
  openModal({
    title: step.name,
    description: step.description,
    art: step.symbol,
    eyebrow: step.type === "history" ? "JOURNAL · WINDOWS HISTORY" : "JOURNAL · WINDOWS 11 PERK",
  });
  tryText.textContent = step.takeaway;
  tryCard.hidden = false;
  modalAction.textContent = "Close field note";
  modalAction.hidden = false;
  modalStepIndex = index;
}

function showGuide() {
  const line = MORI_DIALOGUE[guideChats % MORI_DIALOGUE.length];
  guideChats += 1;
  modalStage = "guide";
  openModal({
    title: "Mori the moth",
    description: line,
    art: "✧",
    eyebrow: "A FRIENDLY REMINDER",
  });
  modalAction.textContent = "Back to the trail";
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
    : `${step.name} added to your Windows 11 field guide.`;
  answerFeedback.classList.add("success");
  modalAction.textContent = questIndex === QUEST_STEPS.length ? "Finish the story trail" : "Open the next trail";
  modalAction.hidden = false;

  if (questIndex === QUEST_STEPS.length) {
    showToast("Every field note recovered. Whisperwood is yours to explore!");
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
  const stepIndex = QUEST_STEPS.findIndex((step) => positionIs(position, step.position));
  if (stepIndex === questIndex) {
    showQuestStep(QUEST_STEPS[stepIndex], stepIndex);
    return;
  }
  if (stepIndex !== -1 && stepIndex < questIndex) {
    showReview(QUEST_STEPS[stepIndex], stepIndex);
    return;
  }
  if (positionIs(position, MORI_POSITION)) {
    showGuide();
    return;
  }
  showToast("Follow the current journal clue. The next note won't appear until this one is learned.");
}

function movePlayer(dx, dy) {
  const nextX = player.x + dx;
  const nextY = player.y + dy;
  if (nextX < 0 || nextY < 0 || nextX >= MAP_WIDTH || nextY >= MAP_HEIGHT) return;
  if (["water", "tree", "rock"].includes(mapContent.tiles[nextY][nextX])) return;

  const currentZone = Math.floor(player.x / ZONE_WIDTH);
  const nextZone = Math.floor(nextX / ZONE_WIDTH);
  if (nextZone > questIndex) {
    if (performance.now() - lastGateToastAt > 900) {
      showToast("The gate is sealed. Recover and learn the current field note first.");
      lastGateToastAt = performance.now();
    }
    return;
  }
  if (nextZone !== currentZone && Math.abs(nextY - GATE_Y) > 2) {
    if (performance.now() - lastGateToastAt > 900) {
      showToast("The old gate opens at the mossy trail crossing.");
      lastGateToastAt = performance.now();
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
    title: "How to follow the trail",
    description: "Use WASD or the arrow keys to explore and press E when you reach the current field note. Read the note, then answer its question to unlock the next gate. Future clues stay hidden until you learn the one you're on. Use + and - to zoom, or F to maximize the game.",
    art: "⌖",
    eyebrow: "FIELD GUIDE",
  });
  modalAction.textContent = "Back to the trail";
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

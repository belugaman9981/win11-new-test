const FEATURES = [
  {
    name: "A fresh Start",
    position: [21, 13],
    description: "Windows 11 gives Start and the taskbar a redesigned, centered look, with a simpler pinned-apps and recommendations layout.",
    tryIt: "Open Start or visit Settings > Personalization > Taskbar.",
    question: "Which change is part of the Windows 11 redesign?",
    choices: [
      "A centered taskbar and redesigned Start menu",
      "The return of desktop gadgets from Windows Vista",
      "A requirement to use Live Tiles",
      "Removing the desktop",
    ],
    answer: 0,
  },
  {
    name: "Snap Layouts",
    position: [11, 10],
    description: "Snap Layouts make it easier to arrange several apps side by side using ready-made window arrangements.",
    tryIt: "Hover over a window's maximize button, or press Windows+Z.",
    question: "What does Snap Layouts help you do?",
    choices: [
      "Change your wallpaper automatically",
      "Arrange open windows into layouts",
      "Install apps without the Store",
      "Record your screen",
    ],
    answer: 1,
  },
  {
    name: "Widgets",
    position: [6, 6],
    description: "The Widgets board brings glanceable information, such as weather and news, together in one personalized panel.",
    tryIt: "Open Widgets from the taskbar or press Windows+W.",
    question: "Where can you find the Windows 11 Widgets board?",
    choices: [
      "Inside the Recycle Bin",
      "In the BIOS setup screen",
      "On the Widgets board",
      "Only in File Explorer",
    ],
    answer: 2,
  },
  {
    name: "File Explorer tabs",
    position: [15, 4],
    description: "File Explorer tabs let you keep multiple folders in one window instead of opening a separate window for every folder.",
    tryIt: "Open File Explorer and select the + button to add a tab.",
    question: "What do File Explorer tabs let you do?",
    choices: [
      "Browse multiple folders in one window",
      "Turn folders into live websites",
      "Replace the taskbar",
      "Run Android apps",
    ],
    answer: 0,
  },
  {
    name: "Focus sessions",
    position: [23, 4],
    description: "Focus sessions in the Clock app give you a timed work session and can help reduce distractions.",
    tryIt: "Search for Clock, then open Focus sessions.",
    question: "Which Windows 11 app includes Focus sessions?",
    choices: ["Paint", "Clock", "Camera", "Calculator"],
    answer: 1,
  },
  {
    name: "Voice Access",
    position: [32, 6],
    description: "Voice Access lets you control your PC and dictate text with spoken commands. Language availability varies.",
    tryIt: "Look under Settings > Accessibility > Speech.",
    question: "What is Voice Access designed to do?",
    choices: [
      "Control the PC and dictate using voice",
      "Turn every app into a game",
      "Translate files automatically",
      "Make your PC louder",
    ],
    answer: 0,
  },
  {
    name: "Dynamic Lighting",
    position: [36, 10],
    description: "For compatible accessories, Dynamic Lighting lets you manage RGB lighting from Windows settings.",
    tryIt: "Check Settings > Personalization > Dynamic Lighting.",
    question: "What can Dynamic Lighting manage on compatible devices?",
    choices: [
      "The brightness of every monitor in the world",
      "RGB lighting on supported accessories",
      "Your internet provider",
      "The color of printed documents",
    ],
    answer: 1,
  },
  {
    name: "Windows Studio Effects",
    position: [29, 12],
    description: "On supported hardware, Studio Effects can enhance video calls with effects such as background blur or automatic framing.",
    tryIt: "On supported PCs, look in Settings > Bluetooth & devices > Cameras.",
    question: "What might Studio Effects improve on supported PCs?",
    choices: [
      "Video-call camera effects",
      "The speed of every website",
      "Printed photo quality",
      "The number of USB ports",
    ],
    answer: 0,
  },
  {
    name: "Auto HDR",
    position: [18, 8],
    description: "On a supported HDR display, Auto HDR can add HDR color and brightness to some older games that were made for SDR.",
    tryIt: "Check Settings > System > Display > HDR.",
    question: "What does Auto HDR do for some supported games?",
    choices: [
      "Adds HDR visuals when you have a supported HDR display",
      "Makes every game run without a graphics card",
      "Streams games without an internet connection",
      "Automatically installs paid games",
    ],
    answer: 0,
  },
];

const MAP_WIDTH = 43;
const MAP_HEIGHT = 17;
const TILE_SIZE = 32;
const MIN_ZOOM = 1;
const MAX_ZOOM = 1.75;
const ZOOM_STEP = 0.15;
const START = [20, 13];
const SHELL_POSITIONS = [[3, 6], [8, 14], [16, 6], [26, 3], [38, 10]];
const TREE_POSITIONS = [
  [4, 4], [8, 3], [10, 5], [12, 7], [4, 9], [7, 11],
  [15, 12], [17, 3], [19, 5], [25, 6], [27, 8], [31, 4],
  [35, 7], [39, 8], [33, 13], [25, 14], [12, 14], [5, 13],
];
const ROCK_POSITIONS = [[9, 8], [13, 5], [26, 10], [34, 12], [30, 3]];
const CRAB_POSITION = [22, 8];
const CHEST_POSITION = [21, 8];
const CRAB_DIALOGUE = [
  "Welcome to the island! I accept shells and compliments.",
  "I tried Snap Layouts. Now my sandcastles have nine windows.",
  "A shell a day keeps the seagulls... actually, no it doesn't.",
  "You look very shell-f confident, explorer!",
];

const canvas = document.querySelector("#island-map");
const context = canvas.getContext("2d");
const appShell = document.querySelector(".app-shell");
const fullscreenButton = document.querySelector("#fullscreen-button");
const zoomOutButton = document.querySelector("#zoom-out");
const zoomInButton = document.querySelector("#zoom-in");
const zoomLabel = document.querySelector("#zoom-label");
const modalBackdrop = document.querySelector("#modal-backdrop");
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
const map = buildMap();
const player = { x: START[0], y: START[1], pixelX: START[0], pixelY: START[1] };
const unlocked = new Set();
const collectedShells = new Set();
const heldKeys = new Set();
const landmarks = document.querySelector("#landmark-list");
let openedFeature = null;
let crabChats = 0;
let chestOpened = false;
let zoomLevel = 1.3;
let lastMoveAt = 0;
let lastFrameAt = 0;
let toastTimeout = 0;
let canvasWidth = 0;
let canvasHeight = 0;
let canvasPixelRatio = 1;

function keyFor([x, y]) {
  return `${x},${y}`;
}

function positionIs(left, right) {
  return left[0] === right[0] && left[1] === right[1];
}

function buildMap() {
  const tiles = Array.from({ length: MAP_HEIGHT }, (_, y) =>
    Array.from({ length: MAP_WIDTH }, (_, x) => {
      const islandDistance = ((x - 21) / 20) ** 2 + ((y - 8) / 8) ** 2;
      if (islandDistance > 1) return "water";
      return islandDistance > 0.83 ? "sand" : "grass";
    }),
  );
  const hub = [21, 8];
  const routes = [[START, hub], ...FEATURES.map((feature) => [hub, feature.position])];

  for (const [start, end] of routes) {
    let [x, y] = start;
    while (x !== end[0]) {
      tiles[y][x] = "path";
      x += x < end[0] ? 1 : -1;
    }
    while (y !== end[1]) {
      tiles[y][x] = "path";
      y += y < end[1] ? 1 : -1;
    }
    tiles[y][x] = "path";
  }

  for (const [x, y] of TREE_POSITIONS) tiles[y][x] = "tree";
  for (const [x, y] of ROCK_POSITIONS) tiles[y][x] = "rock";
  for (const feature of FEATURES) {
    const [x, y] = feature.position;
    tiles[y][x] = "path";
  }
  for (const [x, y] of SHELL_POSITIONS) tiles[y][x] = "path";
  tiles[CRAB_POSITION[1]][CRAB_POSITION[0]] = "path";
  tiles[CHEST_POSITION[1]][CHEST_POSITION[0]] = "path";
  return tiles;
}

function terrainNoise(x, y, salt = 0) {
  const sample = Math.sin(x * 127.1 + y * 311.7 + salt * 74.7) * 43758.5453;
  return sample - Math.floor(sample);
}

function drawTile(x, y, tile, time) {
  const left = x * TILE_SIZE;
  const top = y * TILE_SIZE;
  const variation = terrainNoise(x, y);
  const palettes = {
    grass: ["#788a60", "#74865c"],
    sand: ["#d6c38c", "#d1bd85"],
    path: ["#b8a36f", "#b29c68"],
    water: ["#4e8084", "#497b7f"],
    tree: ["#788a60", "#74865c"],
    rock: ["#788a60", "#74865c"],
  };
  const [topColor, bottomColor] = palettes[tile] || palettes.grass;
  const tileGradient = context.createLinearGradient(left, top, left + TILE_SIZE, top + TILE_SIZE);
  tileGradient.addColorStop(0, topColor);
  tileGradient.addColorStop(1, bottomColor);
  context.fillStyle = tileGradient;
  context.fillRect(left, top, TILE_SIZE, TILE_SIZE);

  if (tile === "water") {
    const phase = (time * 0.008 + x * 9 + y * 13) % 38;
    const waveY = top + 7 + terrainNoise(x, y, 2) * 19;
    context.beginPath();
    context.moveTo(left + phase - 8, waveY);
    context.quadraticCurveTo(left + phase, waveY - 3, left + phase + 8, waveY);
    context.strokeStyle = "rgb(201 221 195 / 38%)";
    context.lineWidth = 1.1;
    context.stroke();
    if (variation > 0.72) {
      context.beginPath();
      context.ellipse(left + 6 + variation * 15, top + 8 + variation * 12, 1.4, 1, 0, 0, Math.PI * 2);
      context.fillStyle = "rgb(241 226 184 / 50%)";
      context.fill();
    }
    return;
  }

  if (tile === "grass" || tile === "tree" || tile === "rock") {
    for (let detail = 0; detail < 6; detail += 1) {
      const seed = terrainNoise(x, y, detail + 4);
      const fleckX = left + 4 + seed * 23;
      const fleckY = top + 4 + terrainNoise(x, y, detail + 9) * 22;
      context.beginPath();
      context.ellipse(fleckX, fleckY, 1.2 + seed, 0.7, seed, 0, Math.PI * 2);
      context.fillStyle = detail === 0
        ? "rgb(43 75 49 / 18%)"
        : "rgb(201 207 154 / 22%)";
      context.fill();
    }

    if (tile === "grass" && variation > 0.44) {
      const tuftX = left + 5 + terrainNoise(x, y, 14) * 22;
      const tuftY = top + 8 + terrainNoise(x, y, 15) * 17;
      context.beginPath();
      context.moveTo(tuftX - 2, tuftY + 2);
      context.quadraticCurveTo(tuftX - 1, tuftY - 1, tuftX, tuftY - 3);
      context.moveTo(tuftX, tuftY + 2);
      context.quadraticCurveTo(tuftX + 1, tuftY - 2, tuftX + 2, tuftY - 4);
      context.moveTo(tuftX + 1, tuftY + 2);
      context.quadraticCurveTo(tuftX + 3, tuftY, tuftX + 4, tuftY - 2);
      context.strokeStyle = "rgb(57 91 56 / 52%)";
      context.lineWidth = 0.9;
      context.stroke();
    }

    if (tile === "grass" && variation > 0.88) {
      const flowerX = left + 5 + terrainNoise(x, y, 12) * 22;
      const flowerY = top + 5 + terrainNoise(x, y, 13) * 21;
      context.beginPath();
      context.arc(flowerX, flowerY, 1.4, 0, Math.PI * 2);
      context.fillStyle = variation > 0.93 ? "#e8d69c" : "#dbc5aa";
      context.fill();
    }
  } else if (tile === "sand") {
    for (let detail = 0; detail < 4; detail += 1) {
      const grainX = left + 3 + terrainNoise(x, y, detail + 20) * 26;
      const grainY = top + 3 + terrainNoise(x, y, detail + 30) * 26;
      context.fillStyle = detail % 2 ? "rgb(121 99 58 / 20%)" : "rgb(255 241 204 / 43%)";
      context.fillRect(grainX, grainY, 1.1, 1.1);
    }
  } else if (tile === "path") {
    const pebbleX = left + 5 + terrainNoise(x, y, 40) * 21;
    const pebbleY = top + 5 + terrainNoise(x, y, 41) * 20;
    context.beginPath();
    context.ellipse(pebbleX, pebbleY, 2.2, 1.1, 0.3, 0, Math.PI * 2);
    context.fillStyle = "rgb(100 80 49 / 21%)";
    context.fill();
  }
}

function drawPalmTree(x, y, time) {
  const left = x * TILE_SIZE;
  const top = y * TILE_SIZE;
  const sway = Math.sin(time / 1700 + x * 0.8) * 1.3;

  const shadow = context.createRadialGradient(left + 16, top + 25, 2, left + 16, top + 25, 15);
  shadow.addColorStop(0, "rgb(40 56 39 / 38%)");
  shadow.addColorStop(1, "rgb(40 56 39 / 0%)");
  context.fillStyle = shadow;
  context.beginPath();
  context.ellipse(left + 16, top + 25, 15, 5, 0, 0, Math.PI * 2);
  context.fill();

  const trunk = context.createLinearGradient(left + 12, top + 13, left + 22, top + 29);
  trunk.addColorStop(0, "#a77a4e");
  trunk.addColorStop(0.52, "#86613f");
  trunk.addColorStop(1, "#6f5138");
  context.beginPath();
  context.moveTo(left + 12, top + 29);
  context.bezierCurveTo(left + 17, top + 22, left + 18, top + 16, left + 14 + sway, top + 9);
  context.lineTo(left + 19 + sway, top + 8);
  context.bezierCurveTo(left + 24, top + 16, left + 23, top + 24, left + 20, top + 30);
  context.closePath();
  context.fillStyle = trunk;
  context.fill();
  context.strokeStyle = "rgb(231 187 119 / 37%)";
  context.lineWidth = 1;
  for (let ring = 0; ring < 3; ring += 1) {
    const ringY = top + 17 + ring * 4;
    context.beginPath();
    context.moveTo(left + 14, ringY);
    context.lineTo(left + 21, ringY + 1);
    context.stroke();
  }

  const crownX = left + 16 + sway;
  const crownY = top + 10;
  const fronds = [
    [-14, -5, -12, -14, "#446b48"],
    [-12, 2, -17, -7, "#557b4d"],
    [-5, -8, -5, -18, "#638854"],
    [6, -8, 13, -17, "#52784b"],
    [13, 1, 19, -8, "#456b45"],
    [11, 6, 18, 3, "#668951"],
  ];
  for (const [endX, controlY, leafX, leafY, color] of fronds) {
    context.beginPath();
    context.moveTo(crownX, crownY);
    context.quadraticCurveTo(crownX + endX / 2, crownY + controlY, crownX + leafX, crownY + leafY);
    context.quadraticCurveTo(crownX + endX / 2, crownY + controlY + 4, crownX + 2, crownY + 3);
    context.closePath();
    context.fillStyle = color;
    context.fill();
    context.strokeStyle = "rgb(196 205 135 / 38%)";
    context.lineWidth = 0.7;
    context.stroke();
  }

  context.fillStyle = "#9c7445";
  context.beginPath();
  context.arc(crownX - 2, crownY + 1, 2, 0, Math.PI * 2);
  context.arc(crownX + 2, crownY + 2, 1.8, 0, Math.PI * 2);
  context.fill();
}

function drawBoulder(x, y) {
  const left = x * TILE_SIZE;
  const top = y * TILE_SIZE;
  context.fillStyle = "rgb(47 64 43 / 28%)";
  context.beginPath();
  context.ellipse(left + 17, top + 26, 13, 4, 0, 0, Math.PI * 2);
  context.fill();

  const stone = context.createLinearGradient(left + 7, top + 10, left + 25, top + 27);
  stone.addColorStop(0, "#c2b9a1");
  stone.addColorStop(0.45, "#9d9a85");
  stone.addColorStop(1, "#777969");
  context.beginPath();
  context.moveTo(left + 6, top + 22);
  context.lineTo(left + 9, top + 14);
  context.lineTo(left + 16, top + 10);
  context.lineTo(left + 22, top + 13);
  context.lineTo(left + 27, top + 21);
  context.lineTo(left + 23, top + 26);
  context.lineTo(left + 11, top + 27);
  context.closePath();
  context.fillStyle = stone;
  context.fill();
  context.strokeStyle = "rgb(66 72 61 / 46%)";
  context.lineWidth = 1;
  context.stroke();

  context.beginPath();
  context.moveTo(left + 10, top + 15);
  context.lineTo(left + 16, top + 11);
  context.lineTo(left + 18, top + 17);
  context.lineTo(left + 12, top + 20);
  context.closePath();
  context.fillStyle = "rgb(231 224 196 / 43%)";
  context.fill();
}

function drawShell(x, y, time) {
  const centerX = x * TILE_SIZE + TILE_SIZE / 2;
  const centerY = y * TILE_SIZE + TILE_SIZE / 2;
  const bob = Math.sin(time / 520 + x) * 1.4;
  context.fillStyle = "rgb(62 68 51 / 25%)";
  context.beginPath();
  context.ellipse(centerX, centerY + 7, 7, 2.5, 0, 0, Math.PI * 2);
  context.fill();

  const shell = context.createLinearGradient(centerX - 6, centerY - 3, centerX + 5, centerY + 5);
  shell.addColorStop(0, "#fff0c7");
  shell.addColorStop(0.55, "#e8cd91");
  shell.addColorStop(1, "#bd9660");
  context.beginPath();
  context.moveTo(centerX - 6, centerY + 3 + bob);
  context.quadraticCurveTo(centerX - 5, centerY - 5 + bob, centerX, centerY - 4 + bob);
  context.quadraticCurveTo(centerX + 7, centerY - 3 + bob, centerX + 6, centerY + 3 + bob);
  context.quadraticCurveTo(centerX, centerY + 7 + bob, centerX - 6, centerY + 3 + bob);
  context.fillStyle = shell;
  context.fill();
  context.strokeStyle = "rgb(132 101 61 / 65%)";
  context.lineWidth = 0.8;
  context.stroke();
  for (let groove = -2; groove <= 2; groove += 2) {
    context.beginPath();
    context.moveTo(centerX, centerY - 3 + bob);
    context.quadraticCurveTo(centerX + groove * 1.6, centerY + 1 + bob, centerX + groove * 2, centerY + 4 + bob);
    context.strokeStyle = "rgb(255 247 218 / 76%)";
    context.stroke();
  }
  if (Math.sin(time / 420 + x * 2) > 0.75) {
    context.fillStyle = "rgb(255 247 218 / 86%)";
    context.beginPath();
    context.arc(centerX + 9, centerY - 7 + bob, 1.5, 0, Math.PI * 2);
    context.fill();
  }
}

function drawLandmark(feature, index, time) {
  const [x, y] = feature.position;
  const centerX = x * TILE_SIZE + TILE_SIZE / 2;
  const centerY = y * TILE_SIZE + TILE_SIZE / 2;
  const isUnlocked = unlocked.has(index);
  const bob = Math.sin(time / 650 + index) * 1.2;
  const halo = context.createRadialGradient(centerX, centerY - 3 + bob, 1, centerX, centerY - 3 + bob, 17);
  halo.addColorStop(0, isUnlocked ? "rgb(175 203 145 / 34%)" : "rgb(235 203 136 / 31%)");
  halo.addColorStop(1, "rgb(235 203 136 / 0%)");
  context.fillStyle = halo;
  context.beginPath();
  context.arc(centerX, centerY - 3 + bob, 17, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "rgb(57 63 45 / 29%)";
  context.beginPath();
  context.ellipse(centerX, centerY + 8, 10, 3.2, 0, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#80623f";
  context.fillRect(centerX - 1.3, centerY - 5 + bob, 2.6, 13);

  const sign = context.createLinearGradient(centerX - 7, centerY - 12 + bob, centerX + 7, centerY + bob);
  if (isUnlocked) {
    sign.addColorStop(0, "#cad4a0");
    sign.addColorStop(1, "#94ad79");
  } else {
    sign.addColorStop(0, "#f1d89d");
    sign.addColorStop(1, "#c6a567");
  }
  context.beginPath();
  context.moveTo(centerX - 7, centerY - 12 + bob);
  context.lineTo(centerX + 7, centerY - 12 + bob);
  context.lineTo(centerX + 8, centerY - 1 + bob);
  context.lineTo(centerX, centerY + 2 + bob);
  context.lineTo(centerX - 8, centerY - 1 + bob);
  context.closePath();
  context.fillStyle = sign;
  context.fill();
  context.strokeStyle = isUnlocked ? "#627b51" : "#80643c";
  context.lineWidth = 1;
  context.stroke();

  context.fillStyle = isUnlocked ? "#455d3b" : "#55462e";
  context.font = "bold 9px 'Segoe UI', sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(isUnlocked ? "✓" : String(index + 1), centerX, centerY - 6 + bob);
}

function drawCrab(time) {
  const [x, y] = CRAB_POSITION;
  const centerX = x * TILE_SIZE + TILE_SIZE / 2;
  const centerY = y * TILE_SIZE + TILE_SIZE / 2 + Math.sin(time / 550) * 0.8;

  context.fillStyle = "rgb(67 61 46 / 25%)";
  context.beginPath();
  context.ellipse(centerX, centerY + 7, 11, 3, 0, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#aa573f";
  context.lineWidth = 2;
  for (let leg = -1; leg <= 1; leg += 1) {
    context.beginPath();
    context.moveTo(centerX - 5, centerY + 3);
    context.lineTo(centerX - 10, centerY + 4 + leg * 3);
    context.moveTo(centerX + 5, centerY + 3);
    context.lineTo(centerX + 10, centerY + 4 + leg * 3);
    context.stroke();
  }

  const shell = context.createRadialGradient(centerX - 3, centerY - 5, 1, centerX, centerY, 12);
  shell.addColorStop(0, "#eea17a");
  shell.addColorStop(1, "#bd654c");
  context.fillStyle = shell;
  context.beginPath();
  context.ellipse(centerX, centerY + 1, 9, 7, 0, 0, Math.PI * 2);
  context.fill();

  context.strokeStyle = "#bd654c";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(centerX - 6, centerY - 3);
  context.lineTo(centerX - 9, centerY - 8);
  context.moveTo(centerX + 6, centerY - 3);
  context.lineTo(centerX + 9, centerY - 8);
  context.stroke();
  for (const clawSide of [-1, 1]) {
    context.fillStyle = "#d77c5c";
    context.beginPath();
    context.arc(centerX + clawSide * 10, centerY - 9, 3.2, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#f7e5c4";
    context.beginPath();
    context.arc(centerX + clawSide * 2.2, centerY - 1, 1.5, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#3e4638";
    context.beginPath();
    context.arc(centerX + clawSide * 2.2, centerY - 1, 0.65, 0, Math.PI * 2);
    context.fill();
  }
}

function drawChest(time) {
  const [x, y] = CHEST_POSITION;
  const left = x * TILE_SIZE + 7;
  const top = y * TILE_SIZE + 10;
  const bob = Math.sin(time / 650) * 0.5;

  context.fillStyle = "rgb(61 54 38 / 26%)";
  context.beginPath();
  context.ellipse(left + 9, top + 19, 12, 3, 0, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#735238";
  context.fillRect(left, top + 6 + bob, 18, 11);
  context.fillStyle = "#9b7045";
  context.fillRect(left + 2, top + 8 + bob, 14, 7);
  context.fillStyle = chestOpened ? "#d4b768" : "#c99b52";
  context.beginPath();
  context.moveTo(left - 1, top + 7 + bob);
  context.lineTo(left + 1, top + 2 + bob);
  context.lineTo(left + 17, top + 2 + bob);
  context.lineTo(left + 19, top + 7 + bob);
  context.closePath();
  context.fill();
  context.fillStyle = "#ddc786";
  context.fillRect(left + 8, top + 7 + bob, 3, 8);
  context.fillStyle = "#765a39";
  context.beginPath();
  context.arc(left + 9.5, top + 10 + bob, 1, 0, Math.PI * 2);
  context.fill();
  if (!chestOpened) {
    context.fillStyle = "rgb(247 223 161 / 48%)";
    context.fillRect(left + 3, top + 4, 3, 1);
  }
}

function drawPlayer(time) {
  const centerX = (player.pixelX + 0.5) * TILE_SIZE;
  const centerY = (player.pixelY + 0.5) * TILE_SIZE;
  const bounce = Math.sin(time / 120) * 0.7;
  const headY = centerY - 4 + bounce;

  const shadow = context.createRadialGradient(centerX, centerY + 9, 1, centerX, centerY + 9, 11);
  shadow.addColorStop(0, "rgb(42 47 35 / 39%)");
  shadow.addColorStop(1, "rgb(42 47 35 / 0%)");
  context.fillStyle = shadow;
  context.beginPath();
  context.ellipse(centerX, centerY + 9, 11, 4, 0, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#67503a";
  context.fillRect(centerX - 6, centerY + 5 + bounce, 5, 6);
  context.fillRect(centerX + 1, centerY + 5 + bounce, 5, 6);
  context.fillStyle = "#493d32";
  context.fillRect(centerX - 7, centerY + 10 + bounce, 6, 2);
  context.fillRect(centerX + 1, centerY + 10 + bounce, 6, 2);

  const pack = context.createLinearGradient(centerX - 9, centerY, centerX - 3, centerY + 8);
  pack.addColorStop(0, "#9a7046");
  pack.addColorStop(1, "#694f39");
  context.fillStyle = pack;
  context.beginPath();
  context.roundRect(centerX - 9, centerY - 1 + bounce, 6, 9, 2);
  context.fill();

  const coat = context.createLinearGradient(centerX - 6, centerY - 1, centerX + 6, centerY + 8);
  coat.addColorStop(0, "#78845a");
  coat.addColorStop(1, "#4e6448");
  context.fillStyle = coat;
  context.beginPath();
  context.roundRect(centerX - 6, centerY - 1 + bounce, 12, 9, 3);
  context.fill();
  context.strokeStyle = "rgb(228 215 174 / 58%)";
  context.lineWidth = 0.8;
  context.beginPath();
  context.moveTo(centerX, centerY + 1 + bounce);
  context.lineTo(centerX, centerY + 7 + bounce);
  context.stroke();

  context.fillStyle = "#d6a77c";
  context.beginPath();
  context.ellipse(centerX, headY, 5.2, 6, 0, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#554639";
  context.beginPath();
  context.arc(centerX, headY - 3, 5.4, Math.PI, Math.PI * 2);
  context.lineTo(centerX + 6, headY - 1);
  context.quadraticCurveTo(centerX, headY - 4, centerX - 6, headY - 1);
  context.closePath();
  context.fill();
  context.fillStyle = "#d9bd7a";
  context.beginPath();
  context.ellipse(centerX, headY - 4, 7, 2.1, 0, Math.PI, Math.PI * 2);
  context.fill();
  context.fillRect(centerX - 6, headY - 4, 12, 1.5);

  context.fillStyle = "#3d3d31";
  context.beginPath();
  context.arc(centerX + 2, headY, 0.8, 0, Math.PI * 2);
  context.fill();
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
  sea.addColorStop(0, "#5b8b8b");
  sea.addColorStop(0.55, "#477b80");
  sea.addColorStop(1, "#3d6c74");
  context.fillStyle = sea;
  context.fillRect(0, 0, width, height);

  const tileSize = Math.min(width / 18, height / 8.5) * zoomLevel;
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

  const leftTile = Math.max(0, Math.floor(-offsetX / tileSize) - 1);
  const rightTile = Math.min(MAP_WIDTH - 1, Math.ceil((width - offsetX) / tileSize) + 1);
  const topTile = Math.max(0, Math.floor(-offsetY / tileSize) - 1);
  const bottomTile = Math.min(MAP_HEIGHT - 1, Math.ceil((height - offsetY) / tileSize) + 1);
  for (let y = topTile; y <= bottomTile; y += 1) {
    for (let x = leftTile; x <= rightTile; x += 1) {
      drawTile(x, y, map[y][x], time);
    }
  }

  for (const [x, y] of TREE_POSITIONS) {
    if (x >= leftTile && x <= rightTile && y >= topTile && y <= bottomTile) {
      drawPalmTree(x, y, time);
    }
  }
  for (const [x, y] of ROCK_POSITIONS) {
    if (x >= leftTile && x <= rightTile && y >= topTile && y <= bottomTile) {
      drawBoulder(x, y);
    }
  }
  for (let index = 0; index < FEATURES.length; index += 1) {
    const [x, y] = FEATURES[index].position;
    if (x >= leftTile && x <= rightTile && y >= topTile && y <= bottomTile) {
      drawLandmark(FEATURES[index], index, time);
    }
  }
  for (const position of SHELL_POSITIONS) {
    if (
      !collectedShells.has(keyFor(position))
      && position[0] >= leftTile
      && position[0] <= rightTile
      && position[1] >= topTile
      && position[1] <= bottomTile
    ) {
      drawShell(...position, time);
    }
  }
  drawChest(time);
  drawCrab(time);
  drawPlayer(time);
}

function buildLandmarkList() {
  landmarks.replaceChildren();
  FEATURES.forEach((feature, index) => {
    const item = document.createElement("li");
    item.dataset.feature = String(index);
    item.innerHTML = `<span class="landmark-number">${index + 1}</span><span>${feature.name}</span>`;
    landmarks.append(item);
  });
  updateJournal();
}

function updateJournal() {
  document.querySelector("#perk-count").textContent = `${unlocked.size} / ${FEATURES.length}`;
  document.querySelector("#perk-progress").style.width = `${(unlocked.size / FEATURES.length) * 100}%`;
  document.querySelector("#shell-count").textContent = `${collectedShells.size} / ${SHELL_POSITIONS.length}`;

  for (const item of landmarks.children) {
    const index = Number(item.dataset.feature);
    item.classList.toggle("discovered", unlocked.has(index));
    item.classList.toggle("nearby", positionIs([player.x, player.y], FEATURES[index].position));
    let status = item.querySelector(".landmark-status");
    if (unlocked.has(index)) {
      if (!status) {
        status = document.createElement("span");
        status.className = "landmark-status";
        status.textContent = "✓";
        item.append(status);
      }
    } else if (status) {
      status.remove();
    }
  }

  const location = document.querySelector("#location-label");
  if (positionIs([player.x, player.y], CRAB_POSITION)) {
    location.textContent = "Byte's beach";
  } else if (positionIs([player.x, player.y], CHEST_POSITION)) {
    location.textContent = "The treasure nook";
  } else {
    const nearbyFeature = FEATURES.find((feature) => positionIs([player.x, player.y], feature.position));
    location.textContent = nearbyFeature ? nearbyFeature.name : "The sunny island";
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 2100);
}

function openModal({ title, description, art = "✦", eyebrow = "ISLAND DISCOVERY" }) {
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
  modalBackdrop.hidden = false;
  document.querySelector("#modal-close").focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  openedFeature = null;
}

function showFeature(feature, index) {
  openedFeature = index;
  openModal({
    title: feature.name,
    description: feature.description,
    art: unlocked.has(index) ? "✓" : "✦",
    eyebrow: unlocked.has(index) ? "PERK UNLOCKED" : `PERK ${index + 1} · ISLAND DISCOVERY`,
  });
  tryText.textContent = feature.tryIt;
  tryCard.hidden = false;

  if (unlocked.has(index)) {
    answerFeedback.textContent = "Already added to your explorer's journal. Nice find!";
    answerFeedback.classList.add("success");
    modalAction.hidden = false;
    return;
  }

  quizArea.hidden = false;
  questionText.textContent = feature.question;
  feature.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span class="answer-number">${choiceIndex + 1}</span><span></span>`;
    button.lastElementChild.textContent = choice;
    button.addEventListener("click", () => answerFeature(feature, index, choiceIndex));
    answerList.append(button);
  });
}

function answerFeature(feature, index, choiceIndex) {
  if (choiceIndex !== feature.answer) {
    answerFeedback.textContent = `Not quite! The answer is: ${feature.choices[feature.answer]}. Give it another try!`;
    return;
  }

  unlocked.add(index);
  updateJournal();
  modalEyebrow.textContent = "PERK UNLOCKED";
  modalArt.textContent = "✓";
  answerFeedback.textContent = "Correct! Added to your explorer's journal.";
  answerFeedback.classList.add("success");
  for (const button of answerList.querySelectorAll("button")) button.disabled = true;
  modalAction.hidden = false;

  if (unlocked.size === FEATURES.length) {
    answerFeedback.textContent = "Every Windows 11 perk discovered! You're an island legend.";
    showToast("All nine Windows 11 perks discovered!");
  }
}

function interact() {
  const position = [player.x, player.y];
  const featureIndex = FEATURES.findIndex((feature) => positionIs(position, feature.position));
  if (featureIndex !== -1) {
    showFeature(FEATURES[featureIndex], featureIndex);
    return;
  }
  if (positionIs(position, CRAB_POSITION)) {
    const line = CRAB_DIALOGUE[crabChats % CRAB_DIALOGUE.length];
    crabChats += 1;
    openModal({
      title: "Byte the crab",
      description: line,
      art: "🦀",
      eyebrow: "BEACH BUDDY",
    });
    modalAction.hidden = false;
    return;
  }
  if (positionIs(position, CHEST_POSITION)) {
    if (chestOpened) {
      openModal({
        title: "A very shiny trophy",
        description: "The chest is empty now, but Byte says you can keep the lid. Island Champion looks good on you!",
        art: "🏆",
        eyebrow: "TREASURE FOUND",
      });
    } else if (collectedShells.size < SHELL_POSITIONS.length) {
      const remaining = SHELL_POSITIONS.length - collectedShells.size;
      openModal({
        title: "Shell-locked treasure",
        description: `The chest needs all five shiny shells to pop open. You still need ${remaining} ${remaining === 1 ? "shell" : "shells"}. Go explore the beaches!`,
        art: "🧰",
        eyebrow: "MYSTERIOUS CHEST",
      });
    } else {
      chestOpened = true;
      openModal({
        title: "Golden Mouse Trophy!",
        description: "The chest pops open! You found the legendary Golden Mouse Trophy. You are now the Island Champion!",
        art: "🏆",
        eyebrow: "TREASURE FOUND",
      });
      showToast("Island Champion badge earned!");
    }
    modalAction.hidden = false;
    return;
  }
  showToast("Nothing here yet. Wander over to a glowing perk marker!");
}

function movePlayer(dx, dy) {
  const nextX = player.x + dx;
  const nextY = player.y + dy;
  if (nextX < 0 || nextY < 0 || nextX >= MAP_WIDTH || nextY >= MAP_HEIGHT) return;
  if (["water", "tree", "rock"].includes(map[nextY][nextX])) return;

  player.x = nextX;
  player.y = nextY;
  const shellKey = keyFor([nextX, nextY]);
  if (SHELL_POSITIONS.some((position) => keyFor(position) === shellKey) && !collectedShells.has(shellKey)) {
    collectedShells.add(shellKey);
    updateJournal();
    showToast(`Shiny shell collected! ${collectedShells.size} / ${SHELL_POSITIONS.length}`);
  } else {
    updateJournal();
  }
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
      const direction = directionFor([...heldKeys].at(-1));
      if (direction) movePlayer(...direction);
      lastMoveAt = time;
    }

    player.pixelX += (player.x - player.pixelX) * 0.35;
    player.pixelY += (player.y - player.pixelY) * 0.35;
    if (Math.abs(player.x - player.pixelX) < 0.01) player.pixelX = player.x;
    if (Math.abs(player.y - player.pixelY) < 0.01) player.pixelY = player.y;
    drawMap(time);
    lastFrameAt = time;
  }
  window.requestAnimationFrame(animate);
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Escape" && !modalBackdrop.hidden) {
    closeModal();
    return;
  }
  if (!modalBackdrop.hidden) {
    if (key === "Enter" && !modalAction.hidden) modalAction.click();
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
document.querySelector("#modal-close").addEventListener("click", closeModal);
document.querySelector("#modal-action").addEventListener("click", closeModal);
fullscreenButton.addEventListener("click", toggleFullscreen);
zoomOutButton.addEventListener("click", () => setZoom(zoomLevel - ZOOM_STEP));
zoomInButton.addEventListener("click", () => setZoom(zoomLevel + ZOOM_STEP));
document.querySelector("#help-button").addEventListener("click", () => {
  openModal({
    title: "How to explore",
    description: "Use WASD or the arrow keys to walk; the camera follows you across the island. Walk over shells to collect them, then press E on a perk marker, Byte the crab, or the treasure chest. Use + and − to zoom, or F to maximize the game.",
    art: "🧭",
    eyebrow: "QUICK FIELD GUIDE",
  });
  modalAction.hidden = false;
});

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

buildLandmarkList();
updateZoomControls();
updateFullscreenButton();
resizeCanvas();
window.requestAnimationFrame(animate);

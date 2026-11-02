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
let lastMoveAt = 0;
let lastFrameAt = 0;
let toastTimeout = 0;

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

function drawTile(x, y, tile, time) {
  const left = x * TILE_SIZE;
  const top = y * TILE_SIZE;
  const noise = Math.abs(Math.sin(x * 127.1 + y * 311.7));

  const colors = {
    grass: noise > 0.5 ? "#549965" : "#4d905e",
    sand: noise > 0.5 ? "#d3b777" : "#c9ad6c",
    path: noise > 0.5 ? "#c9ae71" : "#bea267",
    water: noise > 0.5 ? "#287e9b" : "#267690",
    tree: noise > 0.5 ? "#4c8f5d" : "#468457",
    rock: "#4d8c5c",
  };
  context.fillStyle = colors[tile] || colors.grass;
  context.fillRect(left, top, TILE_SIZE, TILE_SIZE);

  if (tile === "water") {
    const waveX = left + 6 + ((x * 11 + time * 0.012) % 20);
    context.fillStyle = "rgb(157 232 221 / 38%)";
    context.fillRect(waveX, top + 8 + (y % 3) * 6, 7, 2);
    if ((x + y) % 4 === 0) {
      context.fillStyle = "rgb(157 232 221 / 18%)";
      context.fillRect(left + 8, top + 23, 11, 2);
    }
  } else if (tile === "grass" && (x + y) % 3 === 0) {
    context.fillStyle = "rgb(177 222 133 / 37%)";
    context.fillRect(left + 7 + (x % 3) * 5, top + 8 + (y % 2) * 8, 2, 3);
  } else if (tile === "sand" && (x + y) % 4 === 0) {
    context.fillStyle = "rgb(255 240 180 / 30%)";
    context.fillRect(left + 8 + (x % 3) * 4, top + 8 + (y % 2) * 7, 3, 2);
  } else if (tile === "path") {
    context.fillStyle = "rgb(255 235 167 / 26%)";
    context.fillRect(left + 5 + (x % 4) * 5, top + 7 + (y % 3) * 6, 4, 2);
  } else if (tile === "tree") {
    context.fillStyle = "#73503b";
    context.fillRect(left + 13, top + 16, 7, 13);
    context.fillStyle = "#2f684d";
    context.fillRect(left + 6, top + 10, 21, 11);
    context.fillStyle = "#398052";
    context.fillRect(left + 9, top + 5, 15, 11);
    context.fillStyle = "#5ba56a";
    context.fillRect(left + 12, top + 7, 6, 4);
    context.fillStyle = "rgb(255 225 144 / 70%)";
    context.fillRect(left + 9, top + 21, 4, 2);
  } else if (tile === "rock") {
    context.fillStyle = "#757c78";
    context.fillRect(left + 7, top + 14, 18, 12);
    context.fillRect(left + 11, top + 10, 11, 5);
    context.fillStyle = "#a9b0a1";
    context.fillRect(left + 12, top + 12, 6, 2);
    context.fillStyle = "rgb(24 60 49 / 30%)";
    context.fillRect(left + 8, top + 25, 17, 3);
  }
}

function drawShell(x, y, time) {
  const centerX = x * TILE_SIZE + TILE_SIZE / 2;
  const centerY = y * TILE_SIZE + TILE_SIZE / 2;
  const bob = Math.sin(time / 300 + x) * 2;
  context.fillStyle = "rgb(31 47 49 / 26%)";
  context.fillRect(centerX - 7, centerY + 6, 15, 3);
  context.fillStyle = "#ffe5a0";
  context.beginPath();
  context.ellipse(centerX, centerY + bob, 6, 5, 0, Math.PI, 0);
  context.fill();
  context.fillStyle = "#fff3c9";
  context.fillRect(centerX - 1, centerY - 3 + bob, 2, 7);
  context.fillStyle = "#f4c879";
  context.fillRect(centerX - 4, centerY + bob, 2, 4);
  context.fillRect(centerX + 3, centerY + bob, 2, 4);
  if (Math.sin(time / 250 + x * 2) > 0.72) {
    context.fillStyle = "#fff8d8";
    context.fillRect(centerX + 9, centerY - 8 + bob, 3, 3);
  }
}

function drawLandmark(feature, index, time) {
  const [x, y] = feature.position;
  const centerX = x * TILE_SIZE + TILE_SIZE / 2;
  const centerY = y * TILE_SIZE + TILE_SIZE / 2;
  const isUnlocked = unlocked.has(index);
  const bob = Math.sin(time / 360 + index) * 2;
  context.fillStyle = isUnlocked ? "rgb(120 243 194 / 19%)" : "rgb(167 151 255 / 25%)";
  context.beginPath();
  context.ellipse(centerX, centerY + 7, 13 + Math.sin(time / 400) * 1.5, 5, 0, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = isUnlocked ? "#8cf0c9" : "#b7aaff";
  context.fillRect(centerX - 6, centerY - 9 + bob, 12, 15);
  context.fillStyle = isUnlocked ? "#4dbe99" : "#7768d0";
  context.fillRect(centerX - 9, centerY + 4 + bob, 18, 5);
  context.fillStyle = "#fff5d5";
  context.font = "bold 11px 'Segoe UI', sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(isUnlocked ? "✓" : String(index + 1), centerX, centerY - 2 + bob);
}

function drawCrab(time) {
  const [x, y] = CRAB_POSITION;
  const cx = x * TILE_SIZE + TILE_SIZE / 2;
  const cy = y * TILE_SIZE + TILE_SIZE / 2 + Math.sin(time / 450) * 1.5;
  context.fillStyle = "rgb(41 55 56 / 25%)";
  context.fillRect(cx - 11, cy + 6, 22, 4);
  context.fillStyle = "#e98065";
  context.fillRect(cx - 9, cy - 3, 18, 11);
  context.fillRect(cx - 13, cy - 8, 5, 6);
  context.fillRect(cx + 8, cy - 8, 5, 6);
  context.fillStyle = "#ffd1a4";
  context.fillRect(cx - 5, cy - 5, 4, 4);
  context.fillRect(cx + 2, cy - 5, 4, 4);
  context.fillStyle = "#263346";
  context.fillRect(cx - 4, cy - 4, 2, 2);
  context.fillRect(cx + 3, cy - 4, 2, 2);
  context.fillStyle = "#f2a47d";
  context.fillRect(cx - 12, cy + 5, 5, 3);
  context.fillRect(cx + 7, cy + 5, 5, 3);
}

function drawChest(time) {
  const [x, y] = CHEST_POSITION;
  const left = x * TILE_SIZE + 7;
  const top = y * TILE_SIZE + 10;
  context.fillStyle = "#754b39";
  context.fillRect(left, top + 5, 18, 12);
  context.fillStyle = chestOpened ? "#bd9754" : "#bd8050";
  context.fillRect(left - 1, top + 2, 20, 7);
  context.fillStyle = "#f3d37e";
  context.fillRect(left + 8, top + 7, 4, 7);
  context.fillStyle = "rgb(255 223 134 / 45%)";
  context.fillRect(left + 4, top - 4 + Math.sin(time / 320) * 2, 2, 2);
}

function drawPlayer(time) {
  const centerX = (player.pixelX + 0.5) * TILE_SIZE;
  const centerY = (player.pixelY + 0.5) * TILE_SIZE;
  const bounce = Math.sin(time / 95) * 1.1;
  context.fillStyle = "rgb(28 43 50 / 26%)";
  context.fillRect(centerX - 9, centerY + 10, 18, 4);
  context.fillStyle = "#263b52";
  context.fillRect(centerX - 7, centerY + 2 + bounce, 14, 9);
  context.fillStyle = "#f3bd91";
  context.fillRect(centerX - 6, centerY - 8 + bounce, 12, 11);
  context.fillStyle = "#633f46";
  context.fillRect(centerX - 7, centerY - 10 + bounce, 14, 5);
  context.fillRect(centerX - 7, centerY - 6 + bounce, 3, 4);
  context.fillStyle = "#fff1c8";
  context.fillRect(centerX + 1, centerY - 4 + bounce, 2, 2);
  context.fillStyle = "#88e8c1";
  context.fillRect(centerX - 8, centerY + 4 + bounce, 16, 3);
  context.fillStyle = "#efc975";
  context.fillRect(centerX - 6, centerY + 10, 5, 3);
  context.fillRect(centerX + 2, centerY + 10, 5, 3);
}

function drawMap(time) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < MAP_HEIGHT; y += 1) {
    for (let x = 0; x < MAP_WIDTH; x += 1) {
      drawTile(x, y, map[y][x], time);
    }
  }

  for (let i = 0; i < FEATURES.length; i += 1) drawLandmark(FEATURES[i], i, time);
  for (const position of SHELL_POSITIONS) {
    if (!collectedShells.has(keyFor(position))) drawShell(...position, time);
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

function animate(time) {
  if (time - lastFrameAt > 1000 / 30) {
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
  if (directionFor(key)) {
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
document.querySelector("#interact-button").addEventListener("click", interact);
document.querySelector("#modal-close").addEventListener("click", closeModal);
document.querySelector("#modal-action").addEventListener("click", closeModal);
document.querySelector("#help-button").addEventListener("click", () => {
  openModal({
    title: "How to explore",
    description: "Wander the island, walk over shells to collect them, and stand on a glowing perk marker before interacting. Byte and the treasure chest are waiting near the island's center.",
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
window.requestAnimationFrame(animate);

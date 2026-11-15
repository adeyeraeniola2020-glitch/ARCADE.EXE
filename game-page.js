const games = [
  { id: "space-runner", name: "Space Runner", category: "Adventure", icon: "🚀", description: "Race through space, avoid obstacles and collect rewards." },
  { id: "street-racer", name: "Street Racer", category: "Racing", icon: "🏎️", description: "Race against time on exciting city roads." },
  { id: "brain-master", name: "Brain Master", category: "Puzzle", icon: "🧠", description: "Challenge your brain with clever puzzles." },
  { id: "football-stars", name: "Football Stars", category: "Sports", icon: "⚽", description: "Show your football skills and score goals." },
  { id: "zombie-escape", name: "Zombie Escape", category: "Action", icon: "🧟", description: "Find your way through a zombie-filled world." },
  { id: "candy-match", name: "Candy Match", category: "Puzzle", icon: "🍬", description: "Match colourful candies to earn points." },
  { id: "pixel-fighter", name: "Pixel Fighter", category: "Action", icon: "🥊", description: "Enter the arena and test your fighting skills." },
  { id: "kingdom-builder", name: "Kingdom Builder", category: "Strategy", icon: "🏰", description: "Build and manage your own kingdom." },
  { id: "flight-simulator", name: "Flight Simulator", category: "Simulation", icon: "✈️", description: "Experience the excitement of flying." },
  { id: "mystery-mansion", name: "Mystery Mansion", category: "Adventure", icon: "🏚️", description: "Explore a mysterious mansion and solve puzzles." },
  { id: "treasure-quest", name: "Treasure Quest", category: "Adventure", icon: "💎", description: "Explore new places in search of hidden treasure." },
  { id: "speed-drift", name: "Speed Drift", category: "Racing", icon: "🏁", description: "Drift around corners and master the track." },
  { id: "ninja-shadow", name: "Ninja Shadow", category: "Action", icon: "🥷", description: "Test your ninja skills in a challenging adventure." },
  { id: "bubble-pop", name: "Bubble Pop", category: "Casual", icon: "🫧", description: "Pop colourful bubbles and beat your score." },
  { id: "chess-arena", name: "Chess Arena", category: "Strategy", icon: "♟️", description: "Put your strategy skills to the test." },
  { id: "basketball-pro", name: "Basketball Pro", category: "Sports", icon: "🏀", description: "Take your best shots on the basketball court." },
  { id: "alien-invasion", name: "Alien Invasion", category: "Action", icon: "👾", description: "Defend your world from an alien invasion." },
  { id: "city-builder", name: "City Builder", category: "Simulation", icon: "🏙️", description: "Design and build your dream city." },
  { id: "haunted-house", name: "Haunted House", category: "Horror", icon: "👻", description: "Explore a spooky house and uncover its secrets." },
  { id: "memory-match", name: "Memory Match", category: "Puzzle", icon: "🃏", description: "Find matching pairs and test your memory." },
  { id: "word-master", name: "Word Master", category: "Educational", icon: "🔤", description: "Solve word challenges and expand your vocabulary." },
  { id: "math-challenge", name: "Math Challenge", category: "Educational", icon: "➗", description: "Solve maths questions against the clock." },
  { id: "treasure-hunt", name: "Treasure Hunt", category: "Adventure", icon: "🗺️", description: "Follow clues and discover hidden treasures." },
  { id: "car-parking", name: "Car Parking", category: "Simulation", icon: "🅿️", description: "Improve your driving skills with parking challenges." },
  { id: "table-tennis", name: "Table Tennis", category: "Sports", icon: "🏓", description: "Play a fast-paced table tennis match." },
  { id: "fruit-slicer", name: "Fruit Slicer", category: "Arcade", icon: "🍉", description: "Slice fruit and aim for a high score." },
  { id: "multiplayer-race", name: "Multiplayer Race", category: "Multiplayer", icon: "🏆", description: "Compete in an exciting racing challenge." },
  { id: "quiz-battle", name: "Quiz Battle", category: "Educational", icon: "❓", description: "Answer questions and test your knowledge." },
  { id: "maze-runner", name: "Maze Runner", category: "Puzzle", icon: "🌀", description: "Find your way through tricky mazes." },
  { id: "super-jumper", name: "Super Jumper", category: "Arcade", icon: "🦘", description: "Jump over obstacles and see how far you can go." }
];

const params = new URLSearchParams(window.location.search);
const gameId = params.get("game");

const game = games.find(item => item.id === gameId);

const title = document.getElementById("game-title");
const description = document.getElementById("game-description");
const category = document.getElementById("game-category");
const screenTitle = document.getElementById("game-screen-title");
const screenDescription = document.getElementById("game-screen-description");
const startButton = document.getElementById("start-button");

if (game) {
  document.title = `${game.name} | ArcadeX.exe`;

  title.textContent = `${game.icon} ${game.name}`;
  description.textContent = game.description;
  category.textContent = game.category;
  screenTitle.textContent = `${game.icon} ${game.name}`;
  screenDescription.textContent = game.description;

  startButton.textContent = "START GAME";

  startButton.addEventListener("click", () => {
  if (game.id === "space-runner") {
    startSpaceRunner();
  } else {
    screenDescription.textContent =
      "This game is coming soon. Stay tuned!";
    startButton.textContent = "COMING SOON";
    startButton.disabled = true;
  }
});
  const relatedGames = games
    .filter(item => item.category === game.category && item.id !== game.id)
    .slice(0, 4);

  const relatedContainer = document.getElementById("related-games");

  relatedGames.forEach(item => {
    const card = document.createElement("a");
    card.className = "game-card";
    card.href = `game.html?game=${item.id}`;

    card.innerHTML = `
      <div class="game-art">${item.icon}</div>
      <div class="game-info">
        <h3>${item.name}</h3>
        <p>${item.category}</p>
      </div>
    `;

    relatedContainer.appendChild(card);
  });

} else {
  title.textContent = "Game Not Found";
  description.textContent = "This game does not exist. Return to the homepage to explore other games.";
  category.textContent = "Unavailable";
  screenTitle.textContent = "Game Not Found";
  screenDescription.textContent = "Please choose a game from the homepage.";
  startButton.style.display = "none";
}

const fullscreenButton = document.getElementById("fullscreen-button");
const gameScreen = document.getElementById("game-screen");

fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    gameScreen.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
});
function startSpaceRunner() {
  const gameContent = document.getElementById("game-content");

  gameContent.innerHTML = `
    <div class="space-game">
      <div class="space-score">
        ⭐ Score: <span id="space-score">0</span>
      </div>

      <canvas id="space-canvas" width="700" height="450"></canvas>

      <p class="space-help">
        Move your spaceship left and right. Avoid asteroids and collect stars.
        On a phone, drag your finger across the game.
      </p>

      <button id="restart-space">RESTART GAME</button>
    </div>
  `;

  const canvas = document.getElementById("space-canvas");
  const ctx = canvas.getContext("2d");
  const scoreDisplay = document.getElementById("space-score");

  let player = { x: 325, y: 380, width: 50, height: 45 };
  let objects = [];
  let score = 0;
  let running = true;
  let frame = 0;

  function drawPlayer() {
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.fillText("🚀", player.x + 25, player.y + 38);
  }

  function createObject() {
    const isStar = Math.random() > 0.65;

    objects.push({
      x: Math.random() * 660,
      y: -30,
      type: isStar ? "⭐" : "☄️",
      speed: isStar ? 3 : 4,
      size: 30
    });
  }

  function drawObjects() {
    objects.forEach(object => {
      ctx.font = "28px Arial";
      ctx.fillText(object.type, object.x, object.y);
    });
  }

  function moveObjects() {
    objects.forEach(object => {
      object.y += object.speed;
    });

    objects = objects.filter(object => object.y < 480);
  }

  function checkCollisions() {
    objects.forEach((object, index) => {
      const touching =
        object.x < player.x + player.width &&
        object.x + object.size > player.x &&
        object.y < player.y + player.height &&
        object.y + object.size > player.y;

      if (touching) {
        if (object.type === "⭐") {
          score += 10;
          scoreDisplay.textContent = score;
          objects.splice(index, 1);
        } else {
          endGame();
        }
      }
    });
  }

  function drawBackground() {
    ctx.fillStyle = "#080b25";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 35; i++) {
      const x = (i * 97) % canvas.width;
      const y = (i * 61 + frame * 2) % canvas.height;

      ctx.fillStyle = "white";
      ctx.fillRect(x, y, 2, 2);
    }
  }

  function gameLoop() {
    if (!running) return;

    frame++;

    drawBackground();

    if (frame % 45 === 0) {
      createObject();
    }

    moveObjects();
    drawObjects();
    drawPlayer();
    checkCollisions();

    requestAnimationFrame(gameLoop);
  }

  function endGame() {
    running = false;

    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "38px Arial";
    ctx.fillText("GAME OVER", 350, 200);

    ctx.font = "22px Arial";
    ctx.fillText("Final Score: " + score, 350, 245);
  }

  function movePlayer(position) {
    player.x = Math.max(
      0,
      Math.min(canvas.width - player.width, position - player.width / 2)
    );
  }

  canvas.addEventListener("pointermove", event => {
    if (!running) return;

    const rect = canvas.getBoundingClientRect();
    const position =
      (event.clientX - rect.left) * (canvas.width / rect.width);

    movePlayer(position);
  });

  document.addEventListener("keydown", event => {
    if (!running) return;

    if (event.key === "ArrowLeft") {
      player.x = Math.max(0, player.x - 25);
    }

    if (event.key === "ArrowRight") {
      player.x = Math.min(canvas.width - player.width, player.x + 25);
    }
  });

  document.getElementById("restart-space").addEventListener("click", () => {
    startSpaceRunner();
  });

  gameLoop();
}

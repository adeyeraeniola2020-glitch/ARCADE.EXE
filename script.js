// =====================================
// ARCADEX.EXE - GAMING PLATFORM
// =====================================


// GAME CATEGORIES

const categories = [
    { name: "Action", icon: "⚔️", color: "#ff4757" },
    { name: "Adventure", icon: "🗺️", color: "#8e44ad" },
    { name: "Racing", icon: "🏎️", color: "#ff7f50" },
    { name: "Puzzle", icon: "🧩", color: "#00cec9" },
    { name: "Sports", icon: "⚽", color: "#2ecc71" },
    { name: "Arcade", icon: "🕹️", color: "#f1c40f" },
    { name: "Strategy", icon: "♟️", color: "#3498db" },
    { name: "Simulation", icon: "✈️", color: "#1abc9c" },
    { name: "Horror", icon: "👻", color: "#8e44ad" },
    { name: "Casual", icon: "🎯", color: "#fd79a8" },
    { name: "Multiplayer", icon: "👥", color: "#6c5ce7" },
    { name: "Educational", icon: "📚", color: "#e17055" }
];


// GAME DATABASE

const games = [

    {
        id: "space-runner",
        name: "Space Runner",
        category: "Adventure",
        icon: "🚀",
        description: "Explore the galaxy and dodge obstacles.",
        color: "#4834d4",
        popular: true,
        newGame: true
    },

    {
        id: "street-racer",
        name: "Street Racer",
        category: "Racing",
        icon: "🏎️",
        description: "Race through exciting city tracks.",
        color: "#eb4d4b",
        popular: true,
        newGame: false
    },

    {
        id: "brain-master",
        name: "Brain Master",
        category: "Puzzle",
        icon: "🧠",
        description: "Challenge your brain with puzzles.",
        color: "#00b894",
        popular: true,
        newGame: true
    },

    {
        id: "football-stars",
        name: "Football Stars",
        category: "Sports",
        icon: "⚽",
        description: "Show your football skills.",
        color: "#218c4a",
        popular: true,
        newGame: false
    },

    {
        id: "zombie-escape",
        name: "Zombie Escape",
        category: "Action",
        icon: "🧟",
        description: "Enjoy an exciting zombie adventure.",
        color: "#636e72",
        popular: true,
        newGame: true
    },

    {
        id: "candy-match",
        name: "Candy Match",
        category: "Casual",
        icon: "🍬",
        description: "Match colourful candies.",
        color: "#e84393",
        popular: false,
        newGame: true
    },

    {
        id: "pixel-fighter",
        name: "Pixel Fighter",
        category: "Arcade",
        icon: "🥊",
        description: "Enter the pixel fighting arena.",
        color: "#6c5ce7",
        popular: true,
        newGame: false
    },

    {
        id: "kingdom-builder",
        name: "Kingdom Builder",
        category: "Strategy",
        icon: "🏰",
        description: "Build and manage your kingdom.",
        color: "#b8860b",
        popular: false,
        newGame: true
    },

    {
        id: "flight-simulator",
        name: "Flight Simulator",
        category: "Simulation",
        icon: "✈️",
        description: "Experience the world of flying.",
        color: "#0984e3",
        popular: false,
        newGame: false
    },

    {
        id: "mystery-mansion",
        name: "Mystery Mansion",
        category: "Horror",
        icon: "🏚️",
        description: "Explore a mysterious mansion.",
        color: "#341f5c",
        popular: false,
        newGame: true
    },

    {
        id: "treasure-quest",
        name: "Treasure Quest",
        category: "Adventure",
        icon: "💎",
        description: "Discover hidden treasures.",
        color: "#e1a000",
        popular: false,
        newGame: false
    },

    {
        id: "speed-drift",
        name: "Speed Drift",
        category: "Racing",
        icon: "🏁",
        description: "Master the art of drifting.",
        color: "#0984e3",
        popular: true,
        newGame: true
    },

    {
        id: "ninja-shadow",
        name: "Ninja Shadow",
        category: "Action",
        icon: "🥷",
        description: "Enter the world of ninja challenges.",
        color: "#2d3436",
        popular: true,
        newGame: false
    },

    {
        id: "bubble-pop",
        name: "Bubble Pop",
        category: "Casual",
        icon: "🫧",
        description: "Pop colourful bubbles.",
        color: "#00cec9",
        popular: false,
        newGame: true
    },

    {
        id: "chess-arena",
        name: "Chess Arena",
        category: "Strategy",
        icon: "♟️",
        description: "Test your strategic thinking.",
        color: "#34495e",
        popular: true,
        newGame: false
    },

    {
        id: "basketball-pro",
        name: "Basketball Pro",
        category: "Sports",
        icon: "🏀",
        description: "Shoot hoops and score points.",
        color: "#e67e22",
        popular: true,
        newGame: true
    },

    {
        id: "alien-invasion",
        name: "Alien Invasion",
        category: "Arcade",
        icon: "👾",
        description: "Defend your galaxy from aliens.",
        color: "#6c5ce7",
        popular: true,
        newGame: false
    },

    {
        id: "city-builder",
        name: "City Builder",
        category: "Simulation",
        icon: "🏙️",
        description: "Create and manage your dream city.",
        color: "#2980b9",
        popular: false,
        newGame: true
    },

    {
        id: "haunted-house",
        name: "Haunted House",
        category: "Horror",
        icon: "🏚️",
        description: "Discover the secrets of a haunted house.",
        color: "#4b3869",
        popular: false,
        newGame: false
    },

    {
        id: "memory-match",
        name: "Memory Match",
        category: "Puzzle",
        icon: "🃏",
        description: "Match cards and test your memory.",
        color: "#e84393",
        popular: false,
        newGame: true
    },

    {
        id: "word-master",
        name: "Word Master",
        category: "Educational",
        icon: "🔤",
        description: "Explore words and vocabulary.",
        color: "#e17055",
        popular: false,
        newGame: false
    },

    {
        id: "math-challenge",
        name: "Math Challenge",
        category: "Educational",
        icon: "➗",
        description: "Solve exciting mathematics challenges.",
        color: "#0984e3",
        popular: false,
        newGame: true
    },

    {
        id: "treasure-hunt",
        name: "Treasure Hunt",
        category: "Adventure",
        icon: "🗝️",
        description: "Search for hidden treasures.",
        color: "#f39c12",
        popular: false,
        newGame: false
    },

    {
        id: "car-parking",
        name: "Car Parking",
        category: "Simulation",
        icon: "🚘",
        description: "Test your parking skills.",
        color: "#34495e",
        popular: true,
        newGame: true
    },

    {
        id: "table-tennis",
        name: "Table Tennis",
        category: "Sports",
        icon: "🏓",
        description: "Play an exciting table tennis match.",
        color: "#16a085",
        popular: false,
        newGame: false
    },

    {
        id: "fruit-slicer",
        name: "Fruit Slicer",
        category: "Arcade",
        icon: "🍉",
        description: "Slice your way through colourful fruit.",
        color: "#e74c3c",
        popular: true,
        newGame: true
    },

    {
        id: "multiplayer-race",
        name: "Multiplayer Race",
        category: "Multiplayer",
        icon: "🏆",
        description: "Compete with other players.",
        color: "#6c5ce7",
        popular: true,
        newGame: false
    },

    {
        id: "quiz-battle",
        name: "Quiz Battle",
        category: "Multiplayer",
        icon: "❓",
        description: "Challenge friends with trivia.",
        color: "#0984e3",
        popular: false,
        newGame: true
    },

    {
        id: "maze-runner",
        name: "Maze Runner",
        category: "Puzzle",
        icon: "🌀",
        description: "Find your way through challenging mazes.",
        color: "#00b894",
        popular: false,
        newGame: false
    },

    {
        id: "super-jumper",
        name: "Super Jumper",
        category: "Arcade",
        icon: "🦘",
        description: "Jump across platforms and collect rewards.",
        color: "#fd9644",
        popular: true,
        newGame: true
    }

];


// =====================================
// DISPLAY CATEGORIES
// =====================================

const categoryGrid =
    document.getElementById("category-grid");

categories.forEach(category => {

    categoryGrid.innerHTML += `
        <button class="category-card"
            data-category="${category.name}"
            style="--category-color:${category.color}">

            <div class="category-icon">
                ${category.icon}
            </div>

            <h3>${category.name}</h3>

        </button>
    `;

});


// =====================================
// CREATE GAME CARDS
// =====================================

function createGameCard(game) {

    return `
        <article class="game-card">

            <div class="game-art"
                style="background:linear-gradient(
                    135deg,
                    ${game.color},
                    #171329
                )">

                ${game.icon}

            </div>

            <div class="game-info">

                <h3>${game.name}</h3>

                <p>${game.description}</p>

                <a href="game.html?game=${game.id}">
                    PLAY NOW →
                </a>

            </div>

        </article>
    `;

}


// =====================================
// DISPLAY GAME COLLECTIONS
// =====================================

const popularContainer =
    document.getElementById("popular-games");

const newContainer =
    document.getElementById("new-games-grid");

const allContainer =
    document.getElementById("all-games-grid");


function displayGames(list = games) {

    popularContainer.innerHTML =
        games
            .filter(game => game.popular)
            .map(createGameCard)
            .join("");

    newContainer.innerHTML =
        games
            .filter(game => game.newGame)
            .map(createGameCard)
            .join("");

    displayAllGames(list);

}


// =====================================
// DISPLAY ALL GAMES
// =====================================

function displayAllGames(list) {

    if (list.length === 0) {

        allContainer.innerHTML = `
            <p class="empty-message">
                No games found. Try another search!
            </p>
        `;

        return;

    }

    allContainer.innerHTML =
        list.map(createGameCard).join("");

}


// INITIAL DISPLAY

displayGames();


// =====================================
// CATEGORY FILTERING
// =====================================

categoryGrid.addEventListener("click", function(event) {

    const button = event.target.closest(".category-card");

    if (!button) return;

    const selectedCategory =
        button.dataset.category;

    const filteredGames = games.filter(
        game => game.category === selectedCategory
    );

    document.getElementById("game-search").value = "";

    displayAllGames(filteredGames);

    document.getElementById("all-games").scrollIntoView({
        behavior: "smooth"
    });

});


// =====================================
// SEARCH GAMES
// =====================================

const searchInput =
    document.getElementById("game-search");

searchInput.addEventListener("input", function() {

    const searchTerm = this.value.toLowerCase().trim();

    const filteredGames = games.filter(game => {

        return (
            game.name.toLowerCase().includes(searchTerm) ||
            game.category.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm)
        );

    });

    displayAllGames(filteredGames);

});

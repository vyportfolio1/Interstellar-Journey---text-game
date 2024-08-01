const gameContainer = document.getElementById('game-container');
const gameImage = document.getElementById('game-image');
const gameText = document.getElementById('game-text');
const choices = document.getElementById('choices');
const toggleMusicButton = document.getElementById('toggle-music');
const portfolioLink = document.getElementById('portfolio-link');

const winSound = document.getElementById('win-sound');
const gameoverSound = document.getElementById('gameover-sound');
const gameMusic = document.getElementById('game-music');

let isMusicPlaying = false;
gameMusic.pause();

toggleMusicButton.addEventListener('click', () => {
    if (isMusicPlaying) {
        gameMusic.pause();
        toggleMusicButton.innerText = 'Music: OFF';
    } else {
        gameMusic.play();
        toggleMusicButton.innerText = 'Music: ON';
    }
    isMusicPlaying = !isMusicPlaying;
});

const scenes = {
    start: {
        text: "Welcome to Interstellar Journey.",
        image: "startimage.png",
        choices: [
            { text: "Start Game", next: "scene1" }
        ],
        showMusicToggle: true,
        showPortfolioLink: true
    },
    scene1: {
        text: "You are Narty McFly, a space explorer. Your ship crashes on Astra-7. The planet appears similar to Earth but is silent and dense with forest. You wake up in the wreckage.",
        image: "crashsite.png",
        choices: [
            { text: "Continue", next: "scene2" },
            { text: "Stay in the ship", next: "stayInShip" }
        ]
    },
    stayInShip: {
        text: "You decide to stay in the ship. An electrical problem causes a short circuit, and you are electrocuted. Game over.",
        image: "electricalproblem.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    scene2: {
        text: "You wake up after crashing. What do you do?",
        image: "crashsite.png",
        choices: [
            { text: "Wait for help", next: "waitForHelp" },
            { text: "Explore", next: "explore" }
        ]
    },
    waitForHelp: {
        text: "You decide to wait for help. You attempt to communicate with Earth, but there is no response. You begin to feel a sense of dread.",
        image: "waiting.png",
        choices: [
            { text: "Keep waiting", next: "dieFromVirus" },
            { text: "Explore forest", next: "explore" },
            { text: "Write songs", next: "writeSongs" }
        ]
    },
    writeSongs: {
        text: "You try to write some songs to pass the time, but you have no talent. Eventually, you run out of food and die of starvation. Game over.",
        image: "writingsongs.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    dieFromVirus: {
        text: "Days pass, and no help comes. The air feels thick, and you start to feel weak. You collapse, realizing too late a virus has taken its toll. Game over.",
        image: "virus.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    explore: {
        text: "You choose to explore. Two paths ahead: right and left. Which do you take?",
        image: "path.png",
        choices: [
            { text: "Right Path", next: "rightPath" },
            { text: "Left Path", next: "leftPath" }
        ]
    },
    rightPath: {
        text: "You take the right path and find a lake. The water looks refreshing, but it is toxic. You collapse by the lakeside. Game over.",
        image: "lake.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    leftPath: {
        text: "You take the left path and find a lush forest. You see a cabin and a junk yard in the distance. The forest looks scary.",
        image: "forest.png",
        choices: [
            { text: "Go back to the ship", next: "goBackToShip" },
            { text: "Explore the forest", next: "exploreForest" }
        ]
    },
    goBackToShip: {
        text: "You go back to the ship for tools. You fall into a hidden pit and can't climb out. You shout for help, but no answer. Game over.",
        image: "pit.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    exploreForest: {
        text: "You explore the forest further and encounter a monstrous alien with deep brown eyes.",
        image: "alien.png",
        choices: [
            { text: "Fight the alien", next: "fightAlien" },
            { text: "Go back to the ship", next: "goBackToShipAlien" },
            { text: "Make a trap", next: "makeTrap" }
        ]
    },
    fightAlien: {
        text: "You bravely fight the alien, but it overpowers you. Game over.",
        image: "fight.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    goBackToShipAlien: {
        text: "You go back to the ship, but the alien attacks you from behind. Game over.",
        image: "attacked.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    makeTrap: {
        text: "You cleverly make a trap and catch the alien. The alien speaks and offers to help you fix your ship.",
        image: "trap.png",
        choices: [
            { text: "Trust the alien", next: "trustAlien" },
            { text: "Kill the alien", next: "killAlien" }
        ]
    },
    killAlien: {
        text: "You decide to kill the alien, but it defends itself and you are fatally wounded. Game over.",
        image: "kill.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    trustAlien: {
        text: "You trust the alien and he fix your ship.",
        image: "trust.png",
        choices: [
            { text: "Explore alone", next: "exploreForestAlone" },
            { text: "Stay with alien", next: "stayWithChewbacca" }
        ]
    },
    exploreForestAlone: {
        text: "You explore the forest alone and encounter more dangers. You fall into another pit. Game over.",
        image: "forestdanger.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    stayWithChewbacca: {
        text: "You stay with the alien and who fix your ship. You decide to stay and explore the planet together. Thanks for playing.",
        image: "leaving.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    thanks: {
        text: "<span id='thanks-text'>Thanks for playing! The end.</span>",
        image: "thanks.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    }
};

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function renderScene(sceneId) {
    const scene = scenes[sceneId];
    gameText.innerHTML = scene.text.includes("Game over") ? `<span class="game-over">${scene.text}</span>` : scene.text;
    gameImage.style.backgroundImage = `url(${scene.image})`;
    choices.innerHTML = '';
    if (scene.showMusicToggle) {
        toggleMusicButton.style.display = 'block';
    } else {
        toggleMusicButton.style.display = 'none';
    }
    if (scene.showPortfolioLink) {
        portfolioLink.style.display = 'block';
    } else {
        portfolioLink.style.display = 'none';
    }
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.className = 'choice';
        button.onclick = () => {
            if (choice.next === 'start') {
                playSound(winSound);
            } else if (scene.text.includes("Game over")) {
                playSound(gameoverSound);
            }
            renderScene(choice.next);
        };
        choices.appendChild(button);
    });
}

document.addEventListener('keydown', (event) => {
    const activeElement = document.activeElement;
    const focusableElements = Array.from(document.querySelectorAll('.choice'));
    const currentIndex = focusableElements.indexOf(activeElement);

    if (event.key === 'ArrowDown') {
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        focusableElements[nextIndex].focus();
    } else if (event.key === 'ArrowUp') {
        const prevIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
        focusableElements[prevIndex].focus();
    } else if (event.key === 'Enter' && activeElement.classList.contains('choice')) {
        activeElement.click();
    }
});

renderScene('start');

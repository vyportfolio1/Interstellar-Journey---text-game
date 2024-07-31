const gameContainer = document.getElementById('game-container');
const gameImage = document.getElementById('game-image');
const gameText = document.getElementById('game-text');
const choices = document.getElementById('choices');
const toggleMusicButton = document.getElementById('toggle-music');

const winSound = document.getElementById('win-sound');
const gameoverSound = document.getElementById('gameover-sound');
const gameMusic = document.getElementById('game-music');

let isMusicPlaying = true;
gameMusic.play();

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
        text: "Welcome to Interstellar Journey\n© 2024 Copyright by vyportfolio.com",
        image: "startimage.png",
        choices: [
            { text: "Start Game", next: "scene1" }
        ],
        showMusicToggle: true
    },
    scene1: {
        text: "You are Narty McFly, a space explorer on a mission to discover new worlds. Your ship crashes on an unknown planet named Astra-7. The planet appears similar to Earth, but there's an eerie silence and a dense forest surrounding your crash site. You wake up in the wreckage of your ship, disoriented but determined to survive.",
        image: "crashsite.png",
        choices: [
            { text: "Continue", next: "scene2" },
            { text: "Stay in the ship", next: "stayInShip" }
        ]
    },
    stayInShip: {
        text: "You decide to stay in the ship. Unfortunately, an electrical problem causes a short circuit, and you are electrocuted. Game over.",
        image: "electricalproblem.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    scene2: {
        text: "You wake up after crashing your ship on an unknown planet. What do you do?",
        image: "crashsite.png",
        choices: [
            { text: "Wait for help", next: "waitForHelp" },
            { text: "Explore", next: "explore" }
        ]
    },
    waitForHelp: {
        text: "You decide to wait for help. You attempt to communicate with Earth, but there is no response. The silence is deafening, and you begin to feel a sense of dread.",
        image: "waiting.png",
        choices: [
            { text: "Keep waiting", next: "dieFromVirus" },
            { text: "Explore forest", next: "explore" },
            { text: "Try to write some songs", next: "writeSongs" }
        ]
    },
    writeSongs: {
        text: "You try to write some songs to pass the time, but you have no talent. Eventually, you run out of food and die of starvation. Game over.",
        image: "writing-songs.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    dieFromVirus: {
        text: "Days pass, and you realize that no help is coming. The air feels thick, and you start to feel weak. You collapse and realize too late that a virus in the air has taken its toll. Game over.",
        image: "virus.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    explore: {
        text: "You choose to explore your surroundings. You notice two paths ahead of you. One leads to the right and the other to the left. Which path do you take?",
        image: "path.png",
        choices: [
            { text: "Right Path", next: "rightPath" },
            { text: "Left Path", next: "leftPath" }
        ]
    },
    rightPath: {
        text: "You take the path to the right and find a beautiful lake surrounded by trees. The water looks refreshing, and you decide to take a drink. Unfortunately, the water is toxic, and you feel your strength draining away. You collapse by the lakeside. Game over.",
        image: "lake.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    leftPath: {
        text: "You take the path to the left and discover a lush, green forest. The air here feels fresher, and the forest is filled with vibrant flora. As you explore deeper, you see a cabin and a junk yard in the distance. The forest looks kind of scary.",
        image: "forest.png",
        choices: [
            { text: "Go back to the ship", next: "goBackToShip" },
            { text: "Explore the forest", next: "exploreForest" }
        ]
    },
    goBackToShip: {
        text: "You decide to go back to the ship to retrieve some tools. However, as you make your way back, you fall into a hidden pit and are unable to climb out. You shout for help, but there is no answer. The pit is really deep. Game over.",
        image: "pit.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    exploreForest: {
        text: "You choose to explore the forest further. Suddenly, you encounter a monstrous alien. It is hairy and tall, but has beautiful, deep brown eyes.",
        image: "alien.png",
        choices: [
            { text: "Fight the alien", next: "fightAlien" },
            { text: "Go back to the ship", next: "goBackToShipAlien" },
            { text: "Make a trap", next: "makeTrap" }
        ]
    },
    fightAlien: {
        text: "You bravely decide to fight the alien. You shoot your laser gun, but it has no effect. The alien overpowers you and delivers a fatal blow. Game over.",
        image: "fight.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    goBackToShipAlien: {
        text: "You decide to go back to the ship, but as you turn around, the alien attacks you from behind. You fall to the ground, unable to defend yourself. Game over.",
        image: "attacked.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    makeTrap: {
        text: "You cleverly decide to make a trap and wait for the alien. After some time, the alien steps into your trap and is caught. To your surprise, the alien starts speaking. 'There is my cabin. I mean you no harm. My name is Chewbacca, and I can help you fix your ship.' He explains that he is friendly and offers to help you repair your ship.",
        image: "trap.png",
        choices: [
            { text: "Trust the alien", next: "trustAlien" },
            { text: "Kill the alien", next: "killAlien" }
        ]
    },
    killAlien: {
        text: "You decide to kill the alien despite its peaceful intentions. As you move to attack, the alien defends itself and you are fatally wounded. 'Dude, I tried to help, but now I have to murder you,' the alien shouts. Game over.",
        image: "kill.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    trustAlien: {
        text: "You decide to trust the alien. Chewbacca shows you around the cabin, which looks like it came straight out of a Lord of the Rings movie. Together, you search the junk yard and find the necessary parts to fix your ship. Chewbacca helps you repair your ship.",
        image: "trust.png",
        choices: [
            { text: "Explore the forest alone", next: "exploreForestAlone" },
            { text: "Stay with Chewbacca", next: "stayWithChewbacca" }
        ]
    },
    exploreForestAlone: {
        text: "You decide to explore the forest alone, against Chewbacca's advice. As you venture deeper into the unknown, you encounter more dangers. You fall into another pit. You shout and scream for help, even try to sing, but nobody comes. Game over.",
        image: "forestdanger.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    stayWithChewbacca: {
        text: "You stay with Chewbacca, who helps you find the final missing parts. Together, you manage to repair your ship. You thank Chewbacca for his help and prepare to leave Astra-7. But Chewbacca is a good and friendly alien, so you decide to stay with him and explore the planet.\nThanks for playing my game.",
        image: "leaving.png",
        choices: [
            { text: "Start Again", next: "start" }
        ]
    },
    thanks: {
        text: "Thanks for playing! May no one know what next adventure will be waiting for these two explorers. The end.",
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

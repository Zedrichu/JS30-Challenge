const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.random() * (max - min) + min;
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (hole === lastHole) {
        // Prevent same mole from appearing twice in a row
        return randHole(holes);
    }

    lastHole = hole;
    return hole;
}


function peek() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);

    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peek();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peek();
    setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return; // Fake script clicking
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
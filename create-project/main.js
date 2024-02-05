import './style.css';

const DOMSelectors = {
    form: document.getElementById("form"),
    inputEl: document.querySelectorAll(".input"),
    inputs: Array.from(document.querySelectorAll(".input")),
    scrambledWordDisplay: document.getElementById("scrambledWord"),
    results: document.getElementById("results"),
};

const words = ['cause', 'bread', 'clean', 'clear', 'clock'];

let ogWord;
let scrambledWord;
let wrongAttempts;

function newGame(wordArray) {
    ogWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    scrambledWord = ogWord.split('').sort(() => Math.random() - 0.5).join('');
    DOMSelectors.scrambledWordDisplay.textContent = `Scrambled Word: ${scrambledWord}`;
    wrongAttempts = 0;
    counter();
}

function Guessing() {
    const guess = DOMSelectors.inputs.map(el => el.value).join('');
    if (guess.toLowerCase() === ogWord.toLowerCase()) {
        DOMSelectors.results.textContent = `Congrats! You guessed the word correctly!`;
    } else {
        DOMSelectors.results.textContent = `Wrong! Please try again!`;
        wrongAttempts = wrongAttempts + 1;
        counter();
    }
    DOMSelectors.inputEl.forEach(el => el.value = "");
}

function counter() {
    document.getElementById("wrongAttempts").textContent = `Wrong Attempts: ${wrongAttempts}`;
}

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    Guessing();
});

newGame(words);












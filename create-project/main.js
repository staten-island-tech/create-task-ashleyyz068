import './style.css'
const DOMSelectors = {
    form: document.getElementById("form"),
    inputs: Array.from(document.querySelectorAll(".input")), 
    scrambledWordDisplay: document.getElementById("scrambledWord"),
    results: document.getElementById("results")
}

const words = ['cause',  'bread', 'clean', 'clear', 'clock' ]; 

let ogWord
let scrambledWord
let wrongAttempts

function newGame (){
    ogWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = ogWord.split('').sort(() => Math.random() - 0.5).join(''); 
    DOMSelectors.scrambledWordDisplay.textContent = `Scrambled Word: ${scrambledWord}`;
    wrongAttempts = 0;
    counter(); 
}

function Guessing (){
    const guess =  DOMSelectors.inputs.map(el => el.value).join('');
    if (guess.toLowerCase() === ogWord.toLowerCase()) {
        DOMSelectors.results.textContent = `Congrats! You guessed the word!`;
    }else{
        DOMSelectors.results.textContent = `Wrong! Please guess again!`;
        wrongAttempts = wrongAttempts +1; 
        counter(); 
    }
    DOMSelectors.form.reset(); // <-- 
}
function counter() {
    document.getElementById("wrongAttempts").textContent = `Wrong Attempts: ${wrongAttempts}`;
}

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    Guessing(); 
});

newGame(); 












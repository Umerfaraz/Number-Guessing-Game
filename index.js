var random = parseInt(Math.random() * 100 + 1);
var submit = document.querySelector('#subt');
var userInput = document.querySelector('#guessField');
var guessSlot = document.querySelector('.guesses');
var remaining = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrhigh');
var startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
var p = document.createElement('p');
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        var guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid Number.")
    }else if(guess < 1){
        alert("Please enter a Number more than 1.")
    }else if(guess > 100){
        alert("Please enter a Number less than 100.")
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${random}`);
            endGame();
        }else{
            displayGuess(guess);
            displayMessage(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess === random){
        displayMessage('You guessed it right');
        endGame();
    }else if(guess < random){
        displayMessage('Number is Tooo Low.');
    }else if(guess > random){
        displayMessage('Number is Tooo High');
    }
}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(Message){
    lowOrHi.innerHTML =  `<h2>${Message}</h2>`;
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('Button');
    p.innerHTML = `<h2 id="NewBtn">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGamebtn = document.querySelector('#NewBtn');
    newGamebtn.addEventListener('click',function(e){
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    lowOrHi.innerHTML = '';
    })
}
/*
number guess
submit number
subtract the attempt count from the number of attempts
compare the guess with submit guess
lastResult
previous guesses stored in array
*/
// select all the elements---------------------->
let randomNumber = parseInt(Math.random() * 100 + 1); //remove the decimal places
let submit = document.querySelector('#subt');
let userInputValue = document.querySelector('#guessField');
let guesses = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let p = document.createElement('p');
let guessArray = [];
let numGuess = 1;
let playGame = true; //events end or game played
let startOver = document.querySelector('.resultParas');
//validate function
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInputValue.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //validate all the guesses that the number is between range 1or 100 or number entered is not a number
  if (isNaN(guess)) {
    alert('Please Enter a valid number');
  } else if (guess < 1) {
    alert('Please Enter a valid number more than 1');
  } else if (guess > 100) {
    alert('Please Enter a valid number less than 100');
  } else {
    guessArray.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //message value to print message value equals to random number
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}
function displayGuess(guess) {
  //array display or guess count
  userInputValue.value = '';
  guesses.innerHTML += ` ${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  //message display
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInputValue.value = '';
  userInputValue.setAttribute('disabled', '');
  p.classList.add('button'); // adding a button to the classList
  p.innerHTML = `<h2 id="newGame">Start new game<h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  let newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    guesses.innerHTML = '';
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    userInputValue.removeAttribute('disabled');
    startOver.removeChild(p);
    guessArray = [];
    playGame = true;
  });
}

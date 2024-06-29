let randomNumber = parseInt(Math.random() * 100 + 1);
//console.log(random);

const submitButton = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

//const form = document.querySelector('form');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numGuesses = 1;

let playGame = true;

//document.addEventListener()

if (playGame) {
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please Enter a Number greater than 1');
  } else if (guess > 100) {
    alert('Please Enter a Number number than 100');
  } else {
    prevGuess.push(guess);
    if (numGuesses == 11) {
      displyGuess(guess);
      diplayMsg(`Game Over. Random Number was : ${randomNumber}`);
      endGame();
    } else {
      displyGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    diplayMsg('You Guessed it Right');
    endGame();
  } else if (guess < randomNumber) {
    diplayMsg('Number is too low');
  } else if (guess > randomNumber) {
    diplayMsg('Number is too High');
  }

  //
}

function displyGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} | `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function diplayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"'>Start New game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');

  newGameBtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];

    numGuesses = 1;

    guessSlot.innerHTML = '';

    remaining.innerHTML = `${11 - numGuesses}`;

    userInput.removeAttribute('disabled');

    startOver.removeChild(p);

    playGame = true;
  });
}

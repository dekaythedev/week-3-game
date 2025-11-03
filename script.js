// 🧠 Starter Word Guess Game — Keyboard Input Ready

// Word bank
var words = ["javascript", "array", "loop", "variable"];

// Randomly select one word from the list
var chosenWord = words[Math.floor(Math.random() * words.length)];

let regex = /[a-zA-Z]/g;
let maskedWord = chosenWord.replace(regex, '_ ')

// Track guessed letters and remaining attempts
var guessedLetters = [];
var attempts = 1;
var guessedLetters
// Log the chosen word for debugging
console.log("Chosen word:", chosenWord, chosenWord.length);
console.log("Masked word:", maskedWord, maskedWord.split(' ').length -1)

// 🎮 Function students will build next

  // TODO:
  // 1️⃣ Build a masked string using underscores for letters not yet guessed.

let wordLength = chosenWord.length
console.log(attempts, 'Attempts left')

function startGame(letter) {
  console.log(`You pressed: ${letter}`);

  if (guessedLetters.includes(letter)) {
    console.log(`You already guessed: ${letter}`);
    return;
  }

  // record guesses
  guessedLetters.push(letter);
  console.log(`Guessed so far: ${guessedLetters.join(',')}`);

  if (chosenWord.includes(letter)) {
  } else {
    attempts = attempts -1
      console.log(attempts)
    console.log(`Letter ${letter} is not found in our word.`);
  }
  checkStatus();
}

  // 2️⃣ Track guessed letters and remaining attempts.


  // 3️⃣ Detect win or loss and display a message.
function checkStatus() {
  const winCondition = chosenWord.split('').every(letter => guessedLetters.includes(letter))

  if (attempts === 0) {
    alert('No more lives, rip!')
      console.log(attempts)
  } else if (winCondition) {
    alert('Winner winner chicken dinner')
  }
}

  // 4️⃣ (Bonus) Show guessed letters and progress dynamically in the console or DOM.

// ⌨️ Listen for keyboard input when the page loads
window.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();

  // Only process alphabetic letters (ignore Shift, Enter, etc.)
  if (key.match(/^[a-z]$/)) {
    startGame(key);
  } else {
    console.log("Please press a valid letter (A–Z).");
  }
});
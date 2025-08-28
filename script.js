"use strict";

const rulesBtn = document.querySelector(".rules-btn");
const overlay = document.querySelector(".overlay");
const rulesPage = document.querySelector(".rules-page");
const closeRulesBtn = document.querySelector(".rules-page > div > img ");
const resetBtn = document.querySelector(".reset-btn");

const defaultMode = document.querySelector(".default");
const inGameMode = document.querySelector(".in-game");

const scissorsBtn = document.querySelector(".scissors-button");
const paperBtn = document.querySelector(".paper-button");
const rockBtn = document.querySelector(".rock-button");
const lizardBtn = document.querySelector(".lizard-button");
const spockBtn = document.querySelector(".spock-button");

const playerContainer = document.querySelector(".player-container");
const houseContainer = document.querySelector(".house-container");

const houseMove = document.querySelector(".house-move");
const playerChoiceDisplay = document.querySelector(".player-move > img");
const houseChoiceDisplay = document.querySelector(".house-move > img");

let playerScore = document.querySelector(".num");

const result = document.querySelector(".result");
const resultText = document.querySelector(".result > p");
const playAgainBtn = document.querySelector(".result > button");

let rules = 0;
let score = 0;

playerScore.textContent = score;
let played;
let choices = ["scissors", "paper", "rock", "lizard", "spock"];
let houseChoice = choices[Math.floor(Math.random() * choices.length)];

const playAgain = function () {
  result.classList.add("hidden");
  defaultMode.classList.remove("hidden");
  inGameMode.classList.add("hidden");

  playerChoiceDisplay.src = "";
  houseChoiceDisplay.src = "";

  playerContainer.classList.remove(
    "played-scissors",
    "played-paper",
    "played-rock",
    "played-lizard",
    "played-spock",
    "winner"
  );
  houseContainer.classList.remove(
    "played-scissors",
    "played-paper",
    "played-rock",
    "played-lizard",
    "played-spock",
    "winner"
  );

  houseMove.classList.add("house-init");
  houseContainer.classList.add("house-container-init");
  houseChoiceDisplay.classList.add("hidden");
};

const reset = function () {
  playAgain();
  score = 0;
  playerScore.textContent = score;
  console.log("Game reset. Score is " + score);
};

const gameStart = function () {
  defaultMode.classList.add("hidden");
  inGameMode.classList.remove("hidden");
  playerChoiceFunction();
  setTimeout(houseChoiceFunction, 800);
  setTimeout(determineWinner, 1300);
};

const openRules = function () {
  rules = 1;
  overlay.classList.remove("hidden");
  rulesPage.classList.remove("hidden");
};

const closeRules = function () {
  rules = 0;
  overlay.classList.add("hidden");
  rulesPage.classList.add("hidden");
};

const playerChoiceFunction = function () {
  switch (played) {
    case "scissors":
      console.log("Scissors");
      playerChoiceDisplay.src = "./images/icon-scissors.svg";
      playerContainer.classList.add("played-scissors");
      break;
    case "paper":
      console.log("Paper");
      playerChoiceDisplay.src = "./images/icon-paper.svg";
      playerContainer.classList.add("played-paper");
      break;
    case "rock":
      console.log("Rock");
      playerChoiceDisplay.src = "./images/icon-rock.svg";
      playerContainer.classList.add("played-rock");
      break;
    case "lizard":
      console.log("Lizard");
      playerChoiceDisplay.src = "./images/icon-lizard.svg";
      playerContainer.classList.add("played-lizard");
      break;
    case "spock":
      console.log("Spock");
      playerChoiceDisplay.src = "./images/icon-spock.svg";
      playerContainer.classList.add("played-spock");
      break;
    default:
      console.log("Unknown choice");
  }
};

const houseChoiceFunction = function () {
  houseMove.classList.remove("house-init");
  houseContainer.classList.remove("house-container-init");
  houseChoiceDisplay.classList.remove("hidden");

  switch (houseChoice) {
    case "scissors":
      console.log("House chose Scissors");
      houseChoiceDisplay.src = "./images/icon-scissors.svg";
      houseContainer.classList.add("played-scissors");
      break;
    case "paper":
      console.log("House chose Paper");
      houseChoiceDisplay.src = "./images/icon-paper.svg";
      houseContainer.classList.add("played-paper");
      break;
    case "rock":
      console.log("House chose Rock");
      houseChoiceDisplay.src = "./images/icon-rock.svg";
      houseContainer.classList.add("played-rock");
      break;
    case "lizard":
      console.log("House chose Lizard");
      houseChoiceDisplay.src = "./images/icon-lizard.svg";
      houseContainer.classList.add("played-lizard");
      break;
    case "spock":
      console.log("House chose Spock");
      houseChoiceDisplay.src = "./images/icon-spock.svg";
      houseContainer.classList.add("played-spock");
      break;
    default:
      console.log("Unknown choice");
  }
};

const determineWinner = function () {
  result.classList.remove("hidden");

  if (played === houseChoice) {
    resultText.textContent = "DRAW!";
  } else if (
    (played === "scissors" && houseChoice === "paper") ||
    (played === "scissors" && houseChoice === "lizard") ||
    (played === "paper" && houseChoice === "rock") ||
    (played === "paper" && houseChoice === "spock") ||
    (played === "rock" && houseChoice === "scissors") ||
    (played === "rock" && houseChoice === "lizard") ||
    (played === "lizard" && houseChoice === "spock") ||
    (played === "lizard" && houseChoice === "paper") ||
    (played === "spock" && houseChoice === "scissors") ||
    (played === "spock" && houseChoice === "rock")
  ) {
    resultText.textContent = "YOU WIN";
    playerContainer.classList.add("winner");
    score++;
  } else {
    resultText.textContent = "YOU LOSE";
    houseContainer.classList.add("winner");
    if (score > 0) {
      score--;
    }
  }

  playerScore.textContent = score;
  console.log("Current score:", score);
};

scissorsBtn.addEventListener("click", () => {
  played = "scissors";
  gameStart();
});

paperBtn.addEventListener("click", () => {
  played = "paper";
  gameStart();
});

rockBtn.addEventListener("click", () => {
  played = "rock";
  gameStart();
});

lizardBtn.addEventListener("click", () => {
  played = "lizard";
  gameStart();
});

spockBtn.addEventListener("click", () => {
  played = "spock";
  gameStart();
});

// Show the rules modal
rulesBtn.addEventListener("click", openRules);

// Close the rules modal
closeRulesBtn.addEventListener("click", closeRules);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape" && rules === 1) {
    closeRules();
  }
});

document.addEventListener("click", (e) => {
  if (rules === 1 && !rulesPage.contains(e.target) && !rulesBtn.contains(e.target)) {
    closeRules();
    console.log("doc clicked outside");
  }
});

//Play again
playAgainBtn.addEventListener("click", playAgain);

// Reset the game state
resetBtn.addEventListener("click", reset);

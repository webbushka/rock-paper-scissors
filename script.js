const playerScore = document.querySelector('.player-score');
const robotScore = document.querySelector('.robot-score');
const btns = document.querySelectorAll('.btn');
const output = document.querySelector('.output');
const gameBoard = document.querySelector('.game');

let playerTotalWins = 0;
let computerTotalWins = 0;

const getComputerChoice = () => {
  const randNum = Math.ceil(Math.random() * 3);

  // This does the same thing as the switch statement below
  // just with an if/else statement
  // if (randNum === 1) {
  //   return "rock";
  // } else if (randNum === 2) {
  //   return "paper";
  // } else {
  //   return "scissors";
  // }

  switch (randNum) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
    default:
      return 'scissors';
  }
};

const getPlayerChoice = () => {
  let playerChoice = prompt("Enter 'rock', 'paper', or 'scissors' to play.");
  // If player hits cancel
  if (playerChoice === null) {
    return;
  }
  while (playerChoice === '') {
    playerChoice = prompt("Enter 'rock', 'paper', or 'scissors' to play.");
    // If player hits cancel
    if (playerChoice === null) {
      return;
    }
  }

  return playerChoice;
};

const updateOutput = (msg) => {
  output.innerText = msg;
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  const playerWins =
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper');
  const computerWins =
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors');

  if (playerWins) {
    updateOutput(
      `You win this round! ${playerSelection} beats ${computerSelection}.`
    );
    return 'Player wins';
  } else if (computerWins) {
    updateOutput(
      `You lose this round! ${computerSelection} beats ${playerSelection}.`
    );
    return 'Computer wins';
  } else {
    updateOutput(
      `${playerSelection} and ${computerSelection}. It's a tie this round!`
    );
    return "It's a tie";
  }
};

const game = (evt) => {
  let computerChoice = getComputerChoice();
  let playerChoice = evt.target.dataset.type;

  let outcome = playRound(playerChoice, computerChoice);
  if (outcome === 'Player wins') {
    playerTotalWins++;
    playerScore.innerText = playerTotalWins;
  } else if (outcome === 'Computer wins') {
    computerTotalWins++;
    robotScore.innerText = computerTotalWins;
  }

  if (playerTotalWins === 5) {
    gameBoard.innerText = 'You win the game! Refresh to play again!';
  } else if (computerTotalWins === 5) {
    gameBoard.innerText = 'You lose the game! Refresh to play again!';
  }
};

btns.forEach((btn) => {
  btn.addEventListener('click', game);
});

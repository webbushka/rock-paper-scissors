// We need to player rock paper scissors five times
// At the end we need to report a winner
// rock, paper, scissors
// handle winning, losing, and tieing

// IOCE
// I - input(s) – What is going into the function? i.e. What are the arguments? What types are they?
// O - output - What's coming out of the function? i.e. What is the function returning? What is the type?
// C - constraints – limitations, i.e. memory, scalability, etc. IGNORE FOR NOW
// E – Edge cases - unexpected inputs, error handling, etc.

// I - none
// O - return one of three strings – "Rock", "Paper", or "Scissors"
// C – skip
// E – none

const getComputerChoice = () => {
  const randNum = Math.ceil(Math.random() * 3);

  //   if (randNum === 1) {
  //     return "Rock";
  //   } else if (randNum === 2) {
  //     return "Scissors";
  //   } else {
  //     return "Paper";
  //   }

  switch (randNum) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
    default:
      return "scissors";
  }
};

// I - playerSelection and computerSelection, strings
// O - a string declaring win, lose, or tie
// C - skip
// E - case of playerSelection, player inputing nothing/something unexpected
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  const playerWins =
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock");
  const computerWins =
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock");

  if (playerWins) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return "Player wins";
  } else if (computerWins) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return "Computer wins";
  } else {
    console.log(`${playerSelection} and ${computerSelection}. It's a tie!`);
    return "Tie";
  }
};

let computerChoice = getComputerChoice();

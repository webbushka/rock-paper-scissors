// play five games of rock, paper, scissors
// report the outcome at the end (winning, losing, tieing)
// two players – the computer and a human

// return rock, paper, or scissors randomly
// I - none
// O – a string ("Rock", "Paper", or "Scissors")
// C – skip
// E – none
const getComputerChoice = () => {
  const randNum = Math.ceil(Math.random() * 3);

  // This does the same thing as the switch statement below
  // just with an if/else statement
  // if (randNum === 1) {
  //   return "Rock";
  // } else if (randNum === 2) {
  //   return "Paper";
  // } else {
  //   return "Scissors";
  // }

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

// I – playerSelection and computerSelection, string
// O – a string declaring the outcome, i.e. "You win! Rock beats Paper"
// C – skip
// E – the case of the player's selection. They could input Rock, rock, RoCk, ROCK, etc.
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  const playerWins =
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper");
  const computerWins =
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors");

  // falsy values are values that evaluate to false when coersed into a boolean type
  // "", 0, undefined, null, false, NaN
  if (playerWins) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (computerWins) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `${playerSelection} and ${computerSelection}. It's a tie!`;
  }
};

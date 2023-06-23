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
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return "Player wins";
  } else if (computerWins) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return "Computer wins";
  } else {
    console.log(`${playerSelection} and ${computerSelection}. It's a tie!`);
    return "It's a tie";
  }
};

// game plays 5 single rounds and reports if the player won, lost, or tied overall
// I – none
// O – a string reporting the overall outcome
// C – skip
// E – what if the player cancels the prompt
const game = () => {
  let playerTotalWins = 0;
  let computerTotalWins = 0;
  let ties = 0;

  // Round one
  let computerChoice = getComputerChoice();
  let playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
  if (playerChoice === null) {
    return;
  }
  while (playerChoice === "") {
    playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
    if (playerChoice === null) {
      return;
    }
  }

  let outcome = playRound(playerChoice, computerChoice);
  if (outcome === "Player wins") {
    playerTotalWins++;
  } else if (outcome === "Computer wins") {
    computerTotalWins++;
  } else {
    ties++;
  }

  // Round two
  computerChoice = getComputerChoice();
  playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
  if (playerChoice === null) {
    return;
  }
  while (playerChoice === "") {
    playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
    if (playerChoice === null) {
      return;
    }
  }

  outcome = playRound(playerChoice, computerChoice);
  if (outcome === "Player wins") {
    playerTotalWins++;
  } else if (outcome === "Computer wins") {
    computerTotalWins++;
  } else {
    ties++;
  }

  // Round three
  computerChoice = getComputerChoice();
  playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
  if (playerChoice === null) {
    return;
  }
  while (playerChoice === "") {
    playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
    if (playerChoice === null) {
      return;
    }
  }

  outcome = playRound(playerChoice, computerChoice);
  if (outcome === "Player wins") {
    playerTotalWins++;
  } else if (outcome === "Computer wins") {
    computerTotalWins++;
  } else {
    ties++;
  }

  // Round four
  computerChoice = getComputerChoice();
  playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
  if (playerChoice === null) {
    return;
  }
  while (playerChoice === "") {
    playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
    if (playerChoice === null) {
      return;
    }
  }

  outcome = playRound(playerChoice, computerChoice);
  if (outcome === "Player wins") {
    playerTotalWins++;
  } else if (outcome === "Computer wins") {
    computerTotalWins++;
  } else {
    ties++;
  }

  // Round five
  computerChoice = getComputerChoice();
  playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
  if (playerChoice === null) {
    return;
  }
  while (playerChoice === "") {
    playerChoice = prompt("Enter 'rock', 'paper', 'scissors' to play.");
    if (playerChoice === null) {
      return;
    }
  }

  outcome = playRound(playerChoice, computerChoice);
  if (outcome === "Player wins") {
    playerTotalWins++;
  } else if (outcome === "Computer wins") {
    computerTotalWins++;
  } else {
    ties++;
  }

  if (playerTotalWins > computerTotalWins) {
    console.log("You win!");
  } else if (computerTotalWins > playerTotalWins) {
    console.log("You lose!");
  } else {
    console.log("It's a tie!");
  }
};

game();

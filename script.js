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
      return "Rock";
    case 2:
      return "Paper";
    case 3:
    default:
      return "Scissors";
  }
};

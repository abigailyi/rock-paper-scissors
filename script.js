// Randomize computer's input from an array
function computerPlay() {
  const hands = ["Rock", "Paper", "Scissors"];
  let computerSelection = hands[Math.floor(Math.random() * hands.length)];
  return computerSelection;
}

// Receive input from player and edit the input format to standardize choices
function playerPlay() {
  let askPlayer = window.prompt("Choose Rock, Paper, or Scissors");
  let pChoice = askPlayer.toLowerCase();
  let playerSelection = pChoice.charAt(0).toUpperCase() + pChoice.slice(1);
  return playerSelection;
}

// Win/Loss/Tie Counters
let playerWin = 0;
let playerLoss = 0;
let playerTie = 0;

// Compare the player's input to the computer's input to determine the winner
function playRound(playerSelection, computerSelection) {
  // Checking for a tie
  if (playerSelection === computerSelection) {
    alert(`It is a tie! ${playerSelection} ties with ${computerSelection}.`);
    ++playerTie;
    console.log(`Player Tie: ${playerTie}`);
  }

  // Checking for Rock as selection
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      alert(`You win! ${playerSelection} beats ${computerSelection}.`);
      ++playerWin;
      console.log(`Player Win: ${playerWin}`);
    } else if (computerSelection === "Paper") {
      alert(`You lose! ${playerSelection} loses to ${computerSelection}.`);
      ++playerLoss;
      console.log(`Player Loss: ${playerLoss}`);
    }
  }

  // Checking for Paper as selection
  if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      alert(`You lose! ${playerSelection} loses to ${computerSelection}.`);
      ++playerLoss;
      console.log(`Player Loss: ${playerLoss}`);
    } else if (computerSelection === "Rock") {
      alert(`You win! ${playerSelection} beats ${computerSelection}.`);
      ++playerWin;
      console.log(`Player Win: ${playerWin}`);
    }
  }

  // Checking for Scissors as selection
  if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      alert(`You win! ${playerSelection} beats ${computerSelection}`);
      ++playerWin;
      console.log(`Player Win: ${playerWin}`);
    } else if (computerSelection === "Rock") {
      alert(`You lose! ${playerSelection} loses to ${computerSelection}`);
      ++playerLoss;
      console.log(`Player Loss: ${playerLoss}`);
    }
  }
}

// Use for loop to play 5 rounds (1 game) and alerts player of status
function game() {
  for (i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    playRound(playerSelection, computerSelection);
  }

  if (playerWin > playerLoss) {
    alert(`You won the game!`);
    console.log(`Player won`);
  } else if (playerLoss > playerWin) {
    alert(`You lose the game!`);
    console.log(`Player lost`);
  } else {
    alert(`The game is tied!`);
    console.log(`Player tied`);
  }
}

game();

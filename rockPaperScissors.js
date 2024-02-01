const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let number = choice.length;
    let random = choice[Math.floor(Math.random() *3)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
     if (playerSelection == computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection == "rock") {
        switch (computerSelection) {
            case "scissors" :
                return "You Win! Rock beats Scissors";
            break;
            case "paper" :
                return "You Lose! Paper beats Rock";
            break;
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock" :
                return "You Win! Paper beats Rock";
            break;
            case "scissors" :
                return "You Lose! Scissors beats Paper";
            break;
        }
    } else if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "rock" :
                return "You Lose! Rock beats Scissors";
            break;
            case "paper" :
                return "You Win! Scisors beats Paper";
            break;
        }
    }
  }
  
  let playerInput = prompt("rock, paper, or scissors ?");
  const playerSelection = playerInput.toLowerCase();
  console.log(playerSelection)
  const computerSelection = getComputerChoice();
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection));
  playRound()

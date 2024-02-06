const choice = ["rock", "paper", "scissors"];
let playerScore = compScore = 0;

const container = document.querySelector('#container');
const results = document.querySelector(".results");
results.textContent = "";
const description = document.createElement("div");
description.textContent = "Choose a button to see if you win";
const score = document.createElement("div");


const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";


container.appendChild(buttonRock);
container.appendChild(buttonPaper);
container.appendChild(buttonScissors);
container.appendChild(results);
container.appendChild(description);
container.appendChild(score);

buttonRock.addEventListener("click", function (playerSelection){
    playerSelection = "rock"
    checkChoice(playerSelection)
});

buttonPaper.addEventListener("click", function (playerSelection){
    playerSelection = "paper"
    checkChoice(playerSelection)
});

buttonScissors.addEventListener("click", function (playerSelection){
    playerSelection = "scissors"
    checkChoice(playerSelection)
});


function getComputerChoice() {
    let random = choice[Math.floor(Math.random() *3)];
    return random;
}

function updateScore() {
    return score.textContent = `Player - ${playerScore} , ${compScore} - Computer`;
}

function playRound(playerSelection, computerSelection) {
    if (playerScore <5 && compScore <5) {
        // your code here!
        if (playerSelection === computerSelection) {
            updateScore()
            return "It's a Tie!";
        } else if ((computerSelection === "rock" && playerSelection === "paper") 
                || (computerSelection === "paper" && playerSelection === "scissors") 
                || (computerSelection === "scissors" && playerSelection === "rock")) {
            playerScore += 1;
            checkForWinner()
            updateScore()
            return `You win! ${playerSelection} beats ${computerSelection}`
        } else {
            compScore += 1;
            checkForWinner()
            updateScore()
            return `You lost :( ${computerSelection} beats ${playerSelection}`
        }
    } else if (playerScore === 5 || compScore === 5) {
        playerScore = 0;
        compScore = 0;
        updateScore()
        description.textContent = "Choose a button to see if you win";
    }
} 

function playGame(playerSelection, computerSelection) {
    description.textContent = "";
    return results.textContent = (playRound(playerSelection, computerSelection))
}
  
function checkChoice(playerSelection) {
    const computerSelection = getComputerChoice();
    if (choice.includes(playerSelection) === true ) {
    playGame(playerSelection, computerSelection);
   } else {
        alert("Please make a valid choice");
   }
}

function checkForWinner() {
    if (playerScore === 5) {
        return description.textContent = `You beat the computer!!! Press any button to start again`
    } else if (compScore === 5) {
        return description.textContent = `You lost the game! Press any button to try again!`
    }
}
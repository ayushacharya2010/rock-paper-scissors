// Declare button variables
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resultDisplay = document.getElementById("result");

// Create function getComputerChoice
function getComputerChoice() {
    // Generate random number between 0 and 1
    let number = Math.random();
    let computerMove;
    // If number is less than 0.33, make the computer choice "Rock"
    if (number < 0.33) {
    computerMove = "rock";
    }
    // If number is more than 0.66, make the computer choice "Scissors"
    else if (number > 0.66) {
    computerMove = "scissors";
    }
    // If number is between 0.33 and 0.66, make the computer choice "Paper"
    else {
    computerMove = "paper";
    }
    // Save computer's chosen randomized move
    return computerMove;
}

// Store the result of the function
let computerMove = getComputerChoice();


// Record user's score
let humanScore = 0;
// Record computer's score
let computerScore = 0;

// Logic to play a single round
function playRound(humanMove) {
    // Input user's and computer's moves
    let computerMove = getComputerChoice();
    let result = "";
    // Logic for finding winner
    if (computerMove === "rock") {
        if (humanMove === "rock") {
            // Tie
            result = "It's a tie!";
        }  else if (humanMove === "paper") {
            // Human wins
            result = "You win!";
        }  else {
            // Computer wins
            result = "The computer wins!";
        }
    } else if (computerMove === "paper") {
        if (humanMove === "paper") {
            result = "It's a tie!";
        }  else if (humanMove === "scissors") {
            // Human wins
            result = "You win!";
        }  else {
            // Computer wins
            result = "The computer wins!";
        }
    } else {
        if (humanMove === "scissors") {
            result = "It's a tie!";
        }  else if (humanMove === "rock") {
            // Human wins
            result = "You win!";
        } else {
            // Computer wins
            result = "The computer wins!";
        }
    }

    // Adds 1 to human & computer scores if tie
    if (result === "It's a tie!") {
        humanScore = ++humanScore;
        computerScore = ++computerScore;
    } 
    // Adds 1 to human score if human wins
    else if (result === "You win!") {
        humanScore = ++humanScore;
    }
    // Adds 1 to computer score if computer wins
    else {
        computerScore = ++computerScore;
    }

    // Full 2 sentences containing computer move, the result, and scores for both the human and computer
    let finalresult = `The computer chose ${computerMove}, while you chose ${humanMove}!
     ${result} Your score is ${humanScore}, the computer's score is ${computerScore}.`;
    // Displays sentences
    resultDisplay.textContent = finalresult;
    // Saves sentences
    return finalresult;
}

// Declare button event listeners & store result in getHumanChoice
rockButton.addEventListener("click", () => {
    playRound("rock");
})
paperButton.addEventListener("click", () => {
    playRound("paper");
})
scissorsButton.addEventListener("click", () => {
    playRound("scissors");
})
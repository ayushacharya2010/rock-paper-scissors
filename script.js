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
    return computerMove
}

// Store the result of the function
let computerMove = getComputerChoice();

// Create function getHumanChoice
function getHumanChoice() {
    // Ask user for their move and store it in a variable
    let humanMove = prompt("The computer challenges you to a game of rock paper scissors! What move do you choose? ")
    humanMove = humanMove.toLowerCase();
    return humanMove;
}

// Record user's score
let humanScore = 0;
// Record computer's score
let computerScore = 0;

// Logic to play a single round
function playRound() {
    // Input user's and computer's moves
    let humanMove = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = "";
    // Logic for finding winner
    if (computerChoice === "rock") {
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
    } else if (computerChoice === "paper") {
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
    let finalresult = `The computer chose ${computerChoice}! ${result}`
    return finalresult;
}

console.log(playRound());

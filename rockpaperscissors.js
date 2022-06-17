console.log("Let's play");

const choices = ["rock", "paper", "scissors"];
const winners = [];
let pScore = 0;
let cScore = 0;
i = 1;

function computerPlay() {
    const random = Math.floor(Math.random() * choices.length);
    compHandRand = choices[random]
    return compHandRand;
}

function game() {
    //play the game  

    playRound();
    console.log("round " + i);
    console.log("player score: " + pScore);
    console.log("computer score: " + cScore);
}

function playRound() {
    const computerSelect = computerPlay();
    const playerSelect = userPlay();

    console.log("player: " + playerSelect);
    console.log("computer: " + computerSelect);
    checkWinner(playerSelect, computerSelect)
}

function checkWinner(playerSelect, computerSelect) {
    if (computerSelect === playerSelect) {
        console.log("Dammit a tie")
    }
    else if (
        (playerSelect == "rock" && computerSelect == "scissors") ||
        (playerSelect == "scissors" && computerSelect == "paper") ||
        (playerSelect == "paper" && computerSelect == "rock")
    ) {
        console.log("Player won!")
        return pScore++;
    }
    else {
        console.log("Computer won :(")
        return cScore++;
    }
}


function userPlay() {

    };
  

game();


/*const container = document.querySelector('#container');
const results = document.createElement('div');
results.classList.add('results');
results.textContent = "result"


container.appendChild(results);*/
console.log("Let's play")

let playScore = 0;
let compScore = 0;
let computerSelection;
let playerSelection;

function computerPlay() {
    const compHand = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * compHand.length);
    compHandRand = compHand[random]
    return compHandRand;
}
function playround(compSelect, playSelect) {

    if (compSelect === playSelect) {
        console.log("Dammit a tie")
    }
    else if (playSelect == "rock") {
        if (compSelect == "paper") {
            console.log("computer won!")
            compScore++
        } else {
            console.log("player won!")
            playScore++
        }
    }
    else if (playSelect == "paper") {
        if (compSelect == "scissors") {
            console.log("computer won!")
            compScore++
        } else {
            console.log("player won!")
            playScore++
        }
    }
    else if (playSelect == "scissors") {
        if (compSelect == "rock") {
            console.log("computer won!")
            compScore++
        } else {
            console.log("player won!")
            playScore++
        }
    }
}

function userInput() {
    let k = 0
    while (k != 1) {
        playerSelection = prompt("Type paper rock or scissors: ");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            k = 1
        } else { alert("Please choose one of the options") }
    }
    return playerSelection;
}




function game() {
    for (i = 0; i < 5; i++) {
        console.log("round: "+(i+1))
        playerSelection = userInput()
        computerSelection = computerPlay();
        console.log("computer choose: " + computerSelection)
        console.log("player choose: " + playerSelection)
        playround(computerSelection, playerSelection)
    }
    console.log("player scored: "+playScore)
    console.log("computer scored: "+compScore)
}

game()
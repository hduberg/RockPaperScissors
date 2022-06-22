let playScore = 0;
let compScore = 0;
let computerSelection = computerPlay();
let playerSelection;
const choiceButtons = document.querySelectorAll('[data-selection]');
const playerResult = document.querySelector('.player-score');
const computerResult = document.querySelector('.computer-score');
const playerChoice = document.querySelector('.player-choice');
const compChoice = document.querySelector('.comp-choice');
const roundResult = document.querySelector('.round-result');

function computerPlay() {
    const compHand = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * compHand.length);
    compHandRand = compHand[random]
    return compHandRand;
}

function playround(compSelect, playSelect) {

    playerChoice.textContent = changeToPic(playSelect);
    compChoice.textContent = changeToPic(compSelect);


    if (compSelect === playSelect) {
        roundResult.textContent = "Dammit a tie...";
    }
    else if (
        (playSelect == "rock" && compSelect == "scissors") ||
        (playSelect == "paper" && compSelect == "rock") ||
        (playSelect == "scissors" && compSelect == "paper")
    ) {
        roundResult.textContent = "Player won!";
        playScore++;
    }
    else {
        roundResult.textContent = "Computer won!";
        compScore++;
    }

    resetWin();

}

function changeToPic(text) {
    switch (text) {
        case "rock":
            return text = "✊";
        case "paper":
            return text = "✋";
        case "scissors":
            return text = "✌";
    }

}

function resetWin(){
    if(playScore === 5 && compScore <5){
        roundResult.textContent = "Player won this time!";
        playScore = 0;
        compScore = 0;
    }else if(compScore === 5 && playScore <5){
        roundResult.textContent = "Computer won this time!";
        playScore = 0;
        compScore = 0;
    }
}

choiceButtons.forEach(choiceButtons => {
    choiceButtons.addEventListener('click', e => {

        const selectionValue = choiceButtons.dataset.selection;
        playerSelection = selectionValue;
        computerSelection = computerPlay();
        playround(computerSelection, playerSelection);

        playerResult.textContent = playScore;
        computerResult.textContent = compScore;


    })
})

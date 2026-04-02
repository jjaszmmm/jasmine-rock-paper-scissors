let playerScore = 0;
let computerScore = 0;

function play(playerChoice){

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("playerChoice").innerText =
        "Player chose: " + playerChoice;

    document.getElementById("computerChoice").innerText =
        "Computer chose: " + computerChoice;

}
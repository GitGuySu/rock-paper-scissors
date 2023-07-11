function getComputerChoice () {
    var myArray = ["Rock","Paper","Scissor"];
    let choiceNumber = Math.floor(Math.random() * myArray.length);
    return myArray[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        alert ("It is a tie !!");
    }
    else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            alert ( "You lose! Paper covers Rock.");
        }
        else {
            alert ( "Congratulations!! You win with rock beating scissors");
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissor") {
            alert ( "You Lose!!! Scissor cuts paper." );
        }
        else {
            alert ( "Congratulations!! you Win with paper covering the rock ");
        }
    }
    else if (playerSelection == "Scissor") {
        if (computerSelection == "Rock") {
            alert ( "You LOSE!!!! The rock smashes your scissor!");
        }  
        else {
            alert ( "Congratulations!! You win with scissors cutting paper");
        }
    }
}

function game() {
    let player
    for(let i=0;i<5;i++) {
        let playerChoice = prompt("Enter your choice");
        let computerChoice = getComputerChoice();
        console.log(`Round ${i+1} : User choice is ${playerChoice} and computer choice is ${computerChoice}`)
        playRound(playerChoice,computerChoice);
    }
}
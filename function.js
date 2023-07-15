function getComputerChoice () {
    var myArray = ["Rock","Paper","Scissor"];
    let choiceNumber = Math.floor(Math.random() * myArray.length);
    return myArray[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return ("It is a tie !!");
    }
    else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return ( "You lose! Paper covers Rock.");
        }
        else {
            return ( "Congratulations!! You win with rock beating scissors");
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissor") {
            return ( "You Lose!!! Scissor cuts paper." );
        }
        else {
            return ( "Congratulations!! you Win with paper covering the rock ");
        }
    }
    else if (playerSelection == "Scissor") {
        if (computerSelection == "Rock") {
            return ( "You LOSE!!!! The rock smashes your scissor!");
        }  
        else {
            return ( "Congratulations!! You win with scissors cutting paper");
        }
    }
}

// function game() {
//     for(let i=0;i<5;i++) {
//         let playerChoice = prompt("Enter your choice");
//         let computerChoice = getComputerChoice();
//         console.log(`Round ${i+1} : User choice is ${playerChoice} and computer choice is ${computerChoice}`)
//         playRound(playerChoice,computerChoice);
//     }
// }

let container = document.querySelector('#container');

let resultDiv = document.createElement('div');
resultDiv.style.cssText = 'font-size:x-large;height=50px';
container.appendChild(resultDiv);

let rock = document.querySelector('#rock');
rock.addEventListener('click', (e) => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'Rock';
    e.target.style.background = 'blue';
    resultDiv.textContent = `Computer selected ${computerChoice}.${playRound(playerChoice,computerChoice)}`;   
})

let paper = document.querySelector('#paper');
paper.addEventListener('click', (e) => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'Paper';
    e.target.style.background = 'blue';
    resultDiv.textContent = `Computer selected ${computerChoice}.${playRound(playerChoice,computerChoice)}`;    
})

let scissor = document.querySelector('#scissor');
scissor.addEventListener('click', (e) => {
    let computerChoice = getComputerChoice();
    let playerChoice = 'Scissor';
    e.target.style.background = 'blue';
    resultDiv.textContent = `Computer selected ${computerChoice}.${playRound(playerChoice,computerChoice)}`;   
})


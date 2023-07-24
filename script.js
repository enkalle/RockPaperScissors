console.log("Sten sax påse");
console.log("-------------------------");

let playerSelection = "no value";
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

// playerSelection = prompt("Rock, paper or scissor?");

function getComputerChoice() {
    
  let rand = Math.floor(Math.random() * 3);
    
   if (rand == 0){
    return("rock");
   }

   else if (rand == 1) {
    return ("paper");
   }

   else{
    return("scissor");
   }

}

function getPlayerChoise(){
    playerSelection = prompt("Rock, paper or Scissor?")
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissor"){
        console.log("you wrote " + playerSelection + " I dont know what you mean, try again!")
        getPlayerChoise(); //ger undefined om fel text matas in först
        return playerSelection;
    }
    else{
        console.log(playerSelection);
        return playerSelection;
    }
}



function playRound(playerSelection,computerSelection) {

    if (playerSelection == computerSelection) {
        return("Draw");
    }

     else if (playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "scissor" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock"){
        playerScore = ++playerScore;
        return("Player wins with " + playerSelection + " over " + computerSelection );
     }

     else {
        computerScore = ++computerScore;
        return("Computer wins with " + computerSelection + " over " + playerSelection );

     }

}

function game(){

    for(let i = 0; i < 5; i++) { 
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoise();
    //playerSelection = prompt("Rock, paper or scissor?");
    console.log("Round " + (i+1) + ": " + playRound(playerSelection,computerSelection));
    }

    console.log("-------------------------");

    if(playerScore == computerScore){
        console.log("Det blev oavgjort i matchen");
    }
    else if(playerScore > computerScore){
        console.log("You won with " + playerScore + " - " + computerScore);
    }
    else{
        console.log("Computer won with " + computerScore + " - " + playerScore)
    }

    console.log("-------------------------");

    return;
}

game();



// console.log(playRound(playerSelection,computerSelection));
// console.log("Player: " + playerScore);
// console.log("Computer: " + computerScore)




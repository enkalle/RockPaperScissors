console.log("Sten sax påse");
console.log("-------------------------");

let playerSelection = "no input";
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    
  let rand = Math.floor(Math.random() * 3);
    
   if (rand == 0){
    return("Rock");
   }

   else if (rand == 1) {
    return ("Paper");
   }

   else{
    return("Scissor");
   }

}

function playRound(a,b) { // Kan skippa a och b, istället direkt skriva playerSelection och computerSelection

  a = a.toLowerCase();
  b = b.toLowerCase();

    if (a == b) {
        return("Draw");
    }

     else if (a == "rock" && b == "scissor" || a == "scissor" && b == "paper" || a == "paper" && b == "rock"){
        playerScore = ++playerScore;
        return("Player wins with " + a + " over " + b );
     }

     else {
        computerScore = ++computerScore;
        return("Computer wins with " + b + " over " + a );

     }

}

function game(){

    for(let i = 0; i < 5; i++) { 
    computerSelection = getComputerChoice();
    playerSelection = promt("Rock, paper or scissor?");
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
console.log("Player: " + playerScore);
console.log("Computer: " + computerScore)




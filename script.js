let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let retry = document.createElement('div'); //To display retry after 5 tries
let statement = document.querySelector('.statement'); //result statement
let btn = document.querySelectorAll('.button'); //choices button

//Detect computer selection randomly
const choice = ['rock', 'paper', 'scissor'];
function computerPlay() {
    return choice[~~(Math.random() * choice.length)];
}
//Detect player selection on click
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        playerSelection = img.alt.toLowerCase();
        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
        declareWinner();
        }
    });
});
//Function to play and decide winner
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        statement.textContent ='Draw';
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'scissor'){
            statement.textContent ='You win';
            playerScore++;
            keepPlayerScore();
        }
        else{
            statement.textContent ='You lose';
            computerScore++;
            keepCpuScore();
        }
    }
    else if(playerSelection =='scissor'){
        if(computerSelection =='paper'){
            statement.textContent ='You win';
            playerScore++;
            keepPlayerScore();
        }
        else{
            statement.textContent ='You lose';
            computerScore++;
            keepCpuScore();
        }
    }
    else if(playerSelection =='paper'){
        if(computerSelection =='rock'){
            statement.textContent ='You win';
            playerScore++;
            keepPlayerScore();
        }
        else{
            statement.textContent ='You lose';
            computerScore++;
            keepCpuScore();
        }
    } 
}
//After completion of 5 rounds
function declareWinner() {
    //Disable button  
    btn.forEach((btn) => {
      btn.style.pointerEvents = "none";
    }); 
    if (playerScore > computerScore) {
    statement.textContent = "You are the winner:)";
    } 
    else {
    statement.textContent = "You are a loser:(";
    }
    //Add retry div
    retry.classList.add('retry');
    //Add retry button
    let retrybtn = document.createElement('button');
    retrybtn.classList.add('retrybtn');
    retrybtn.textContent = 'Play Again?';
    retry.appendChild(retrybtn);
    document.body.appendChild(retry);
    retry.addEventListener('click', resetGame);
}
//Function to change player score dynamically 
function keepPlayerScore() {
  let playerScoreBox = document.querySelector("#you");
  playerScoreBox.textContent = playerScore;
}
//Function to change computer score dynamically 
function keepCpuScore() {
  let computerScoreBox = document.querySelector("#computer");
  computerScoreBox.textContent = computerScore;
}
//Reset the game
function resetGame(){
  //history.go(0);
  location.href = location.href;
}


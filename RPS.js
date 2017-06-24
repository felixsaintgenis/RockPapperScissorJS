const possibilities = ['rock','paper','scissor'];
const playButton = document.getElementById('playButton');
let computerChoice;
let computerPoint=0;
let humanPoint=0;
let signSelector = document.getElementById('signOption');
let signChoice;
let Score = document.getElementById('Score')

playButton.addEventListener('click', function () {
 computerChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
signChoice = signSelector[signSelector.selectedIndex].value;

 if (signChoice==computerChoice) {
   sentenceResult.innerHTML="It's a draw"
    Score.innerHTML="Human : " + humanPoint + "Computer " + computerPoint
 }
 else if (signChoice== 'rock' && computerChoice == 'scissor' || signChoice== 'paper' && computerChoice == 'rock' || signChoice== 'scissor' && computerChoice == 'paper' ) {
   sentenceResult.innerHTML="The computer choose " + computerChoice + ", you won";
   humanPoint++;
   Score.innerHTML="Human : " + humanPoint + "Computer " + computerPoint
 }
else {
  sentenceResult.innerHTML="You lose, the computer choose " + computerChoice
  computerPoint++;
   Score.innerHTML="Human : " + humanPoint + "  Computer : " + computerPoint

};



});

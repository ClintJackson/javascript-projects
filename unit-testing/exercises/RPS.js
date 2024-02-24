function whoWon(player1,player2){
  const availableOptions = ["rock", "paper", "scissors"];
  let player1Ready = true;
  let player2Ready = true;
  if (availableOptions.includes(player1.toLowerCase()) === false) {
    player1Ready = false;
  }

  if (availableOptions.includes(player2.toLowerCase()) === false) {
    player2Ready = false;
  }

  while (player1Ready === true && player2Ready === false) {
    return "player 1 wins by default";
  }
  while (player1Ready === false && player2Ready === true) {
    return "player 2 wins by default";
  }

   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }
 
   return 'Player 1 wins!';
 }

 module.exports = whoWon;
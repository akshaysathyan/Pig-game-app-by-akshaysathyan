/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
const player1 = document.querySelector('.player-0-panel')
const player2 = document.querySelector('.player-1-panel')
const buttonRoll = document.querySelector(".btn-roll");
const buttonHold = document.querySelector('.btn-hold');
const buttonnew = document.querySelector('.btn-new');
const dice = document. querySelector('.dice');
const score1 = document.querySelector('#score-0');
const score2 = document.querySelector('#score-1');
const currnt1 = document.querySelector("#current-0");
const currnt2 = document.querySelector("#current-1");
const name1 = document.querySelector("#name-0");
const name2 = document.querySelector("#name-1");
let nowplayer1 = true;

buttonHold.addEventListener("click" , holdScore);
buttonRoll.addEventListener("click", rolldice);
buttonnew.addEventListener("click", resetGame);
 
function rolldice(){
    let  dicevalue = Math.floor(Math.random() * 6) + 1; 
    dice.style.display = " block";
   
    switch (dicevalue) {
        case 1:
            dice.src = "dice-1.png";
            break;
            case 2:
            dice.src = "dice-2.png";
            break;
            case 3:
            dice.src = "dice-3.png";
            break;
            case 4:
            dice.src = "dice-4.png";
            break;
            case 5:
            dice.src = "dice-5.png";
            break;
            case 6:
            dice.src = "dice-6.png";
            break;

    }

    if(dicevalue===1)
    nowplayer1 ? dicetime(player1Clear): dicetime(player1Clear); 
    else
    nowplayer1 ? player1Adder(dicevalue) : player2Adder(dicevalue);
 }
 function dicetime(fun){
     buttonsDisabler();
     setTimeout(()=>{
         fun();
         buttonEnabler();
     },1500);
 }
function holdScore() {
    if(nowplayer1){
        score1.textContent= +currnt1.textContent + +score1.textContent;
        +score1.textContent >= 100 ? disabler() : player1Clear();

    }
    else{
        score2.textContent= +currnt2.textContent + +score2.textContent;
        +score2.textContent >= 100 ? disabler() : player2Clear();
    }
}

function buttonsDisabler(){
buttonHold.disabled = buttonRoll.disabled = true;

}

function buttonEnabler(){
    buttonHold.disabled=buttonRoll.disabled= false;

}
function disabler(){
    buttonsDisabler();

    dice.style.display= " none" ;
    currnt1.textContent= currnt2.textContent = 0;
if (nowplayer1) {
    player1.classList.remove("active")
    name1.classList.add("winner");
    name1.textContent= " winner P1"
} else{
    player2.classList.remove("active")
    name2.classList.add("winner");
    name2.textContent= "winner P2"
}
}

function resetGame(){
    buttonEnabler();
    name1.classList.remove("winner");
    name2.classList.remove("winner");
 name1.textContent= "Player 1"
 name2.textContent= "player 2 "
 player1.classList.add("active");
 nowplayer1= true;
 score1.textContent= score2.textContent = currnt1.textContent= currnt2.textContent=0 ;

}
function player1Clear() {
    currnt1.textContent=0;
    nowplayer1=false;
    dice.style.display="none";
    player1.classList.remove("active");
    player2.classList.add("active");

    
}
function player2Clear() {
    currnt2.textContent=0;
    nowplayer1= !nowplayer1;
    dice.style.display="none";
    player2.classList.remove("active");
    player1.classList.add("active");

    
}

function player1Adder(dicevalue) {
    currnt1.textContent= +currnt1.textContent +dicevalue ;

}
function player2Adder(dicevalue){
    currnt2.textContent= +currnt2.textContent + dicevalue ;
}

















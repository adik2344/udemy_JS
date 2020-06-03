/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, 
it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, dice, activePlayer;
var x;

scores = [0,0];
activePlayer = 0;
roundScores = 0;
x = 0;

initGame();
function initGame(){

    document.querySelector("#current-1").innerHTML = "0";
    document.querySelector("#current-0").innerHTML = "0";
    document.querySelector("#score-1").innerHTML = "0";
    document.querySelector("#score-0").innerHTML = "0";
    document.querySelector(".dice").style.display= 'none';
}


function Myfunction(){
    dice = Math.floor(Math.random() * 6) + 1;
    roundScores += dice;
} 

function clearRound (selectPlayer){
    roundScores = 0; 
    // document.querySelector(".dice").style.display= 'none';
    var element = document.querySelector(".player-" + activePlayer + "-panel");
    element.classList.remove("active");
    document.querySelector("#current-" + selectPlayer ).innerHTML = roundScores;
    if (selectPlayer == 0){ activePlayer = 1; } else { activePlayer = 0; }
    var element = document.querySelector(".player-" + activePlayer + "-panel");
    element.classList.add("active");
    }
//Button New game ---------------------------------------------------------------------------------
    document.querySelector('.btn-new').addEventListener("click", function (){ initGame ()});
//Button Hold       -------------------------------------------------------------------------------
document.querySelector('.btn-hold').addEventListener("click", function (){ 
    scores[activePlayer] += roundScores;
    document.querySelector('#score-' + activePlayer).innerHTML = scores[activePlayer];
    if (scores[activePlayer] > 20){
        var element = document.querySelector(".player-" + activePlayer + "-panel");
        element.classList.add("winner"); 
        // document.querySelector(".player-" + activePlayer + "-panel").innerHTML= '<p>' +  "WINNER" + '</p>';
    }

});
//Button Roll dice---------------------------------------------------------------------------------
document.querySelector('.btn-roll').addEventListener("click", function(){
    document.querySelector(".dice").style.display= "block";
    if ((dice == 1) && (activePlayer == 0)){ 
        clearRound (0);
    } else if((dice == 1) && (activePlayer == 1)) { 
        clearRound(1); 
    }
    
    Myfunction();
    document.querySelector("#current-" + activePlayer).innerHTML = '<p>' + roundScores + '</p>';
    document.querySelector('.dice').src = "dice-" + dice + ".png";
});
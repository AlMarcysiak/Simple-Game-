/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var score, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
        if(gamePlaying){
       // generate random number for the dice
       var dice = Math.floor(Math.random() *6)+1;
       
       // display the result 
       var diceDOM = document.querySelector('.dice');
   
       diceDOM.style.display='block';
       
       diceDOM.src = 'dice-'+dice+'.png';
   
       // update the score 
       if(dice !== 1 ){
           roundScore +=dice;
           var score = document.querySelector('#current-'+ activePlayer);
           score.textContent=roundScore;
           prive = dice; 
       }else{
           nextPlayer();

       }
   }
});
        document.querySelector('.btn-hold').addEventListener('click', function(){
            if(gamePlaying){
                // add current score to global one 
                score[activePlayer]+= roundScore;
        
                //upadate
                document.querySelector('#score-'+ activePlayer).textContent = score[activePlayer];
                
                // check if player won the game 
                if( score[activePlayer]>=10 ){
                    document.getElementById('name-' +activePlayer).textContent="Winner !"
                    document.querySelector('.dice').style.display="none";
                    document.querySelector('.player-'+activePlayer+'-panel').classList.add("Winner");
                    document.querySelector('.player-'+activePlayer+'-panel').classList.remove("active");
                    gamePlaying=false;
                }else 
                nextPlayer();
            }
        });

        function nextPlayer(){
            //next player 
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        //showing whos turn is it 
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        }

        document.querySelector('.btn-new').addEventListener('click', init);

        function init(){
            score =[0,0];
            roundScore =0;
            activePlayer =0;
            document.querySelector('.dice').style.display='none';
            gamePlaying = true; 

            document.getElementById('score-0').textContent='0';
            document.getElementById('score-1').textContent='0';
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
            document.getElementById('name-0').textContent = 'Player 1';
            document.getElementById('name-1').textContent = 'Player 2';
            document.querySelector('.player-0-panel').classList.remove("Winner");
            document.querySelector('.player-1-panel').classList.remove("Winner");
            document.querySelector('.player-0-panel').classList.remove("active");
            document.querySelector('.player-1-panel').classList.remove("active");
            document.querySelector('.player-0-panel').classList.add("active");
            
        }
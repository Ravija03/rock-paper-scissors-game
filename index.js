const score = JSON.parse(localStorage.getItem('score')) || {wins: 0,
       loses: 0,
       ties: 0}

       let result = '';

       updateScoreElement();
       
    ;
      /* (short cut is up there)  if (!score) {
      score ={
      wins: 0,
       loses: 0,
       ties: 0}} */
      




      function PlayGame(playerMove){ 
        const computerMove = pickcomputermove();

       
      
        

        if (playerMove === 'scissors')
        {if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }}
        
        
          else if (playerMove === 'paper') {
            

         

          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
            }
              else if (playerMove === 'rock') {
                
              if (computerMove === 'rock') {
                result = 'Tie.';
              } else if (computerMove === 'paper') {
                result = 'You lose.';
              } else if (computerMove === 'scissors') {
                result = 'You win.';

                

              }
              
                      }
              
              if (result === 'You win.'){
                score.wins += 1
              }  
              else if (result === 'You lose.') {
                score.loses += 1
              }
              else if   (result === 'Tie.') {
                score.ties += 1
              }  

              localStorage.setItem('score', JSON.stringify(score))

              updateScoreElement();
              updateResult();
              
                document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}.png" class="move-icon">  <img src="${computerMove}.png" class="move-icon"> computer `;
              
            }
                    

          

      

        
      

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, loses: ${score.loses}, Ties: ${score.ties}`;
      }

      function updateResult() {
        document.querySelector('.js-result').innerHTML = result;
      }



      function pickcomputermove () {
        const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
      return computerMove

      }
      
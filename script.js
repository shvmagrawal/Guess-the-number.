// const outputMessage = document.querySelector(".message");
const guesses = document.querySelector(".entered-number");
const input = document.querySelector("input");

const randomNumber = Math.floor(Math.random()*99) + 1;
let guessed;
let attemptNum = 0;
const totalAttempts = 5;
// const conditionsArray = [
//     guessed > 1, 
//     guessed < 99,
//     attemptNum < totalAttempts,
// ]


    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter" && attemptNum <= totalAttempts) {
          guessed = input.value;
          check()
          attemptNum++;
        }    
        else if ( attemptNum > totalAttempts) {
         guesses.innerHTML =  `You loose, restart the game to play again.The right answer was ${randomNumber}`;
         guesses.style.color = "blue";
         input.disabled = true;
        }
})  

        
      function check() {
        if (guessed == randomNumber) {
            guesses.innerHTML =  " Winner winner chicken dinner";
            guesses.style.color = "green";
            input.disabled = true;
        }
        else if (guessed < 1) {
            alert("Please enter a number between 1 and 99")
            attemptNum--
        }
        else if (guessed > 99) {
            alert("Please enter a number between 1 and 99")
            attemptNum--
        }
        else if ( guessed < randomNumber) {
            guesses.innerHTML = guessed + " is too low";
            guesses.style.color = "red";
        }
        else if ( guessed > randomNumber) {
            guesses.innerHTML = guessed + " is too high";
            guesses.style.color = "red";
        }
      }


    // Restart button to restart the game i.e. to refresh the page.
    const restart = document.querySelector("button");
    restart.onclick = () => {
        window.location.reload();
      }



// I have to make a loop for the game to execute it until the right answer is achived or 10 gusses are done.
// I guess adding function onclick would be better. Make a submit button which takes the input and leave the field empty and then compare itself with the random generated number and throw message accordingly. And embed it in a loop of 10 or lower than that in the case the wright answer is foundend out, then disable the input field and through the restart button the page can be refreshed again.
// I think i need to learn debugging in order to understand the working of my code in better way.



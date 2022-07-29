let outputMessage = document.querySelector(".message");
let guesses = document.querySelector(".entered-number");
let input = document.querySelector("input");

let randomNumber = Math.floor(Math.random()*99) + 1;
let guessed;

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      guessed = input.value
    //   console.log(guessed)
    if (guessed == randomNumber) {
        guesses.innerHTML = guessed + " is right guess.";
        // alert("Right guess")
    }
    else if (guessed < randomNumber) {
        // alert("too low") 
        guesses.innerHTML = guessed + " is too low";
    }
    else if (guessed > randomNumber) {
        // alert("too high")
        guesses.innerHTML = guessed + " is too high";
    }
    }
})



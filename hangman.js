var mysArray = [];
var n;
var word; // Define word outside event listeners
var mystery;

var btn = document.getElementById("sub");
btn.addEventListener("click", function () {
  word = document.getElementById("wordinput").value; // Assign the value entered by the user to 'word'
  if (word === "") {
    alert("Type a word");
    document.getElementById("wordinput").value = "";
  } else {
    document.getElementById("wordinput").value = "";

    var inputContainer = document.getElementById("cont");
    inputContainer.style.display = "block";

    n = word.length;
    let x = "_ ";
    var mystery = x.repeat(n);
    mysArray = mystery.split('');
    document.getElementById("game").textContent = mystery;
  }
});

var wrdinpt=document.getElementById("wordinput");
wrdinpt.addEventListener("keydown",function(event){
  if(event.key==="Enter"){
    btn.click();
  }
});

var guesses = 10;

// Add event listener for the "keydown" event on the input
var guessInput = document.getElementById("guess");
guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      btn2.click(); // Trigger the click event of the button
    }
  });

var btn2 = document.getElementById("subltr");
btn2.addEventListener("click", function () {
  var messageElement = document.getElementById("message");
  var gameOngoing = true; // Flag to control game status

  function guessLetter() {
    if (!gameOngoing) {
      return; // Stop further iterations if game is completed or lost
    }

    if (guesses > 0 && mysArray.includes("_")) {
      var letter = document.getElementById("guess").value;
      document.getElementById("guess").value = "";
      var cpt = 0;
      n = word.length;

      for (var i = 0; i < n; i++) {
        if (letter === word[i]) {
          cpt++;
          mysArray[2 * i] = letter;
          mystery = mysArray.join('');
        }
      }

      document.getElementById("game").textContent = mystery;

      if (!mysArray.includes("_")) {
        messageElement.textContent = "You completed the word, congrats you won!!";
        setTimeout(function () {
            location.reload(); // Refresh the page after a short delay
          }, 1500);
        gameOngoing = false; // Set the flag to indicate game is completed
      } else if (cpt === 0) {
        guesses--;
        if (guesses === 0) {
          messageElement.textContent = `You ran out of guesses, You Lost! The word was ${word}`;
          setTimeout(function () {
            location.reload(); // Refresh the page after a short delay
          }, 1500);
          gameOngoing = false; // Set the flag to indicate game is lost
        } else {
          messageElement.textContent = `This letter is not in the word, you have ${guesses} guesses left`;
        }
      } else {
        messageElement.textContent = "This letter is in the word";
      }
    }
  }

  // Call the guessLetter function initially
  guessLetter();
});



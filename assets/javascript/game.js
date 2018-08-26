var computerChoices = ["a", "b", "c","d","e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y","z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var alphabet = 0;
    var guesses = 9;
    var guessesLeft = 9;
    var guessedLetters = [];
    var computerGuess ;
    

    var options = ["a", "b", "c","d","e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y","z"];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      
   

      // Determines which key was pressed.
      // var userGuess = event.key.toLowerCase ();

      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      var reset = function() {
        totalGuesses = 9;
        guessesLeft = 9;
        guessedLetters = [];
      }

      // Randomly chooses a choice from the options array. This is the Computer's guess.
     
       
      // Reworked our code from last step to use "else if" instead of lots of if statements.

        // guessedLetters.push (userGuess); 
        // console.log(guessedLetters)

        

      if (guessesLeft === 9) {

        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess)
       
      }
     
      if (options.indexOf(userGuess) > -1) {
        
         // Check if there's a match
        if (userGuess === computerGuess)  {
          wins++;
          alert("Woohoo!You are psychic!");
          reset();
          

        } 
        
        if (userGuess !== computerGuess && guessedLetters.indexOf(userGuess) < 0) {
          guessesLeft--;
          guessedLetters.push(userGuess);
         
        }

        if (guessesLeft === 0) {
          guessesLeft = 9;
          losses ++;
          alert("Sorry, you are not psychic! Please try again");
          guessedLetters = [];
          reset();
          
        }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =

          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Guesses so far: " + guessedLetters + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

      }
    };
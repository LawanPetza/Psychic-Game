var computerChoices = ["a", "b", "c","d","e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y","z"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var alphabet = 0;
    var guessLeft = 9;
    var guesses = [];

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
     
       
      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    //   if ((userGuess === "l") || (userGuess === "p") || (userGuess === "s")) {
        guesses.push (userGuess); 
        console.log(guesses)

        if (userGuess === computerGuess)  {
          wins++;
          guessLeft--;
        } else if (userGuess !== computerGuess)  {
          losses++;
          guessLeft--;
        }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>guesses left:" + guessLeft + "</p>" +
          "<p>Your Guesses so far:" + guesses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
    //   }
    };

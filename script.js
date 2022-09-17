let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/**
Create a generateTarget() function. This function should return a random integer between 0 and 9.

The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.  
 */
const generateTarget = () => {
  return Math.floor(Math.random() * 10); // générer un nombre aléatoire avec Math.random
};

/*
Create a compareGuesses() function. This function:

- Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
- Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
- Return true if the human player wins, and false if the computer player wins.

The purpose of this function is to be called each round to determine which guess is closest to the target number.
*/

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess); // Math.abs() retourne la valeur absolue d'un nombre
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
};

/*




*/

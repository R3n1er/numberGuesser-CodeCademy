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

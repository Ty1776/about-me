'use strict';

// console.log('Hello World');

let visitorName = prompt('Hello! What is your name?');
// console.log(visitorName);
alert(`Welcome to my site ${visitorName}! Please answer "Yes" or "No" to the following questions.`);

let questionOne = prompt('Do I like si-fi?').toUpperCase();
if (questionOne === 'YES' || questionOne === 'Y') {
  // console.log(questionOne + ' Correct');
  alert('Correct');
} else if (questionOne === 'NO' || questionOne === 'N') {
  // console.log(questionOne + ' incorrect');
  alert('Incorrect');
}

let questionTwo = prompt('Do I like to adventure?').toUpperCase();
if (questionTwo === 'YES' || questionTwo === 'Y') {
  // console.log(questionTwo + ' Correct');
  alert('Correct');
} else if (questionTwo === 'NO' || questionTwo === 'N') {
  // console.log(questionTwo + ' incorrect');
  alert('Incorrect');
}

let questionThree = prompt('Was I in the Air Force?').toUpperCase();
if (questionThree === 'YES' || questionThree === 'Y') {
  // console.log(questionThree + ' Correct');
  alert('Correct');
} else if (questionThree === 'NO' || questionThree === 'N') {
  // console.log(questionThree + ' incorrect');
  alert('Incorrect');
}

let questionFour = prompt('Do I have any pets?').toUpperCase();
if (questionFour === 'NO' || questionFour === 'N') {
  // console.log(questionFour + ' Correct');
  alert('Correct');
} else if (questionFour === 'YES' || questionFour === 'Y') {
  // console.log(questionFour + ' incorrect');
  alert('Incorrect');
}

let questionFive = prompt('Do I like food?').toUpperCase();
if (questionFive === 'YES' || questionFive === 'Y') {
  // console.log(questionFive + ' Correct');
  alert('Correct');
} else if (questionFive === 'NO' || questionFive === 'N') {
  // console.log(questionFive + ' incorrect');
  alert('Incorrect');
}

let favNum = '14';
let guesses = 4;
while (guesses > 0) {
  let questionSix = prompt('What is my favorite number between 1-20?');
  if (questionSix === favNum) {
    alert('Good guess!');
    break;
  }
  else if (questionSix > favNum) {
    alert(`Too high, try again. ${guesses} guesses remaining.`);
  }
  else if (questionSix < favNum) {
    alert(`Too low, try again. ${guesses} guesses remaining.`);
  }
  guesses--;
}

// let heatSource = ['Electric', 'Gas', 'Hydronic', 'Geothermal'];
// let guessesTwo = 6;
// let answer = false;
// whlie(guessesTwo > 0) {
//   let questionSeven = prompt('What are the most common home heat sources?')
//   for (let i = 0; i < heatSource.length; i++) {
//     if (heatSource[i] === questionSeven) {
//       alert(`Correct! ${heatSource[i]} is a common heat source!`);
//       answer = true;
//     }
//     else (alert(`${questionSeven} is not a common heat source. ${guessesTwo} guesses remaining.`));
//   }
//   if (answer) {
//     break;
//   }
//   guessesTwo--;
// }

alert(`Thanks for playing, ${visitorName}. It's nice of you to stop by!`);

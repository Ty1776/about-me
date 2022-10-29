'use strict';

let score = 0;

function sifi() {
  let validAnswer = false;
  while (!validAnswer) {
    let questionOne = prompt('Do I like si-fi?').toUpperCase();
    if (questionOne === 'YES' || questionOne === 'Y') {
      alert('Correct');
      validAnswer = true;
      score++;
    } else if (questionOne === 'NO' || questionOne === 'N') {
      alert('Incorrect');
      validAnswer = true;
    }
  }
}

function adventure() {
  let validAnswer = false;
  while (!validAnswer) {
    let questionTwo = prompt('Do I like to adventure?').toUpperCase();
    if (questionTwo === 'YES' || questionTwo === 'Y') {
      alert('Correct');
      validAnswer = true;
      score++;
    } else if (questionTwo === 'NO' || questionTwo === 'N') {
      alert('Incorrect');
      validAnswer = true;
    }
  }
}

function military() {
  let validAnswer = false;
  while (!validAnswer) {
    let questionThree = prompt('Was I in the Air Force?').toUpperCase();
    if (questionThree === 'YES' || questionThree === 'Y') {
      alert('Correct');
      validAnswer = true;
      score++;
    } else if (questionThree === 'NO' || questionThree === 'N') {
      alert('Incorrect');
      validAnswer = true;
    }
  }
}

function pets() {
  let validAnswer = false;
  while (!validAnswer) {
    let questionFour = prompt('Do I have any pets?').toUpperCase();
    if (questionFour === 'NO' || questionFour === 'N') {
      alert('Correct');
      validAnswer = true;
      score++;
    } else if (questionFour === 'YES' || questionFour === 'Y') {
      alert('Incorrect');
      validAnswer = true;
    }
  }
}

function food() {
  let validAnswer = false;
  while (!validAnswer) {
    let questionFive = prompt('Do I like food?').toUpperCase();
    if (questionFive === 'YES' || questionFive === 'Y') {
      alert('Correct');
      validAnswer = true;
      score++;
    } else if (questionFive === 'NO' || questionFive === 'N') {
      alert('Incorrect');
      validAnswer = true;
    }
  }
}

function game() {
  let favNum = 14;
  let guesses = 4;
  while (guesses > 0) {
    let questionSix = +prompt('What is my favorite number between 1-20?');
    if (questionSix === favNum) {
      alert('Youre correct! Good guess!');
      score++;
      break;
    } else if (questionSix > favNum) {
      alert(`Too high, try again. ${guesses - 1} guesses remaining.`);
    } else if (questionSix < favNum) {
      alert(`Too low, try again. ${guesses - 1} guesses remaining.`);
    }
    guesses--;
  }
  if (guesses === 0) {
    alert(`The correct answer was ${favNum}.`);
  }
}

function heat() {
  let heatSource = ['electric', 'gas', 'hydronic', 'geothermal'];
  let guesses = 6;
  let isCorrect = false;
  while (guesses > 0) {
    let questionSeven = prompt('What are the most common home heat sources?').toLowerCase();
    for (let i = 0; i < heatSource.length; i++) {
      if (heatSource[i] === questionSeven) {
        isCorrect = true;
      }
    }
    if (isCorrect) {
      alert(`Correct! ${questionSeven} is a common heat source!`);
      score++;
      break;
    } else {
      alert(`${questionSeven} is not a common heat source. ${guesses - 1} guesses remaining.`);
    }
    guesses--;
  }
  alert(`The possible answers were: ${heatSource[0]}, ${heatSource[1]}, ${heatSource[2]}, ${heatSource[3]}.`);
}


let visitorName = prompt('Hello! What is your name?');
alert(`Welcome to my site ${visitorName}! Please answer "Yes" or "No" to the following questions.`);

sifi();
adventure();
military();
pets();
food();
game();
heat();

alert(`Your final score is ${score} out of 7.`);

alert(`Thanks for playing, ${visitorName}. It's nice of you to stop by!`);

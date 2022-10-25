'use strict';

// console.log('Hello World');

let visitorName = prompt('Hello! What is your name?');
// console.log(visitorName);

alert(`Welcome to my site ${visitorName}! Please answer "Yes" or "No" to the following questions.`);

let questionOne = prompt ('Do I like si-fi?').toUpperCase();
if(questionOne === 'YES' || questionOne === 'Y'){
  // console.log(questionOne + ' Correct');
  alert('Correct');
} else if (questionOne === 'NO' || questionOne === 'N') {
  // console.log(questionOne + ' incorrect');
  alert('Incorrect');
}

let questionTwo = prompt ('Do I like to adventure?').toUpperCase();
if(questionTwo === 'YES' || questionTwo === 'Y'){
  // console.log(questionTwo + ' Correct');
  alert('Correct');
} else if (questionTwo === 'NO' || questionTwo === 'N'){
  // console.log(questionTwo + ' incorrect');
  alert('Incorrect');
}

let questionThree = prompt ('Was I in the Air Force?').toUpperCase();
if(questionThree === 'YES' || questionThree === 'Y'){
  // console.log(questionThree + ' Correct');
  alert('Correct');
} else if (questionThree === 'NO' || questionThree === 'N'){
  // console.log(questionThree + ' incorrect');
  alert('Incorrect');
}

let questionFour = prompt ('Do I have any pets?').toUpperCase();
if(questionFour === 'NO' || questionFour === 'N'){
  // console.log(questionFour + ' Correct');
  alert('Correct');
} else if (questionFour === 'YES' || questionFour === 'Y'){
  // console.log(questionFour + ' incorrect');
  alert('Incorrect');
}

let questionFive = prompt ('Do I like food?').toUpperCase();
if(questionFive === 'YES' || questionFive === 'Y'){
  // console.log(questionFive + ' Correct');
  alert('Correct');
} else if (questionFive === 'NO' || questionFive === 'N') {
  // console.log(questionFive + ' incorrect');
  alert('Incorrect');
}

alert(`Thanks for playing, ${visitorName}. It's nice of you to stop by!`);

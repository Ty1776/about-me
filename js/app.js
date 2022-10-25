'use strict';

console.log('Hello World');

let visitorName = prompt('What is your name?');

alert(`Welcome to my site ${visitorName}! Please answer yes or no to the following questions.`);

let questionOne = prompt ('Do I have pets?').toUpperCase();
if(questionOne === 'YES' || questionOne === 'Y') {
  alert('Correct');
} else if (questionOne === 'No' || questionOne === 'N') {
  alert('response goes here');
}

alert(`Thanks for playing, ${visitorName}. Thanks for coming to my site.`);

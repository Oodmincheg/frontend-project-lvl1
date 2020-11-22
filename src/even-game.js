import readlineSync from 'readline-sync';

const ANSWER = {
  YES: 'yes',
  NO: 'no',
};

const RESULT = {
  CORRECT: 'Correct!',
  INCORRECT: 'Incorrect!',
};

const MIN = 1;
const MAX = 100;

const NUM_OF_VICTORY = 3;

function isEven(num) {
  return num % 2 === 0;
}

function getRandomInt(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

export default function evenGame() {
  const name = readlineSync.question('Sorry? May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`Answer "${ANSWER.YES}" if the number is even, otherwise answer "${ANSWER.NO}".`);
  let rightAnswersInRow = 0;

  while (rightAnswersInRow < NUM_OF_VICTORY) {
    const randomNumber = getRandomInt(MIN, MAX);
    const answer = readlineSync.question(`Question: ${randomNumber} `);
    if (
      (answer === ANSWER.YES && isEven(randomNumber))
   || (answer === ANSWER.NO && !isEven(randomNumber))
    ) {
      console.log(RESULT.CORRECT);
      rightAnswersInRow += 1;
    } else {
      console.log(RESULT.INCORRECT);
      rightAnswersInRow = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

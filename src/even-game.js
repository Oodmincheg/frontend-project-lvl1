import readlineSync from 'readline-sync';

const ANSWER = {
  YES: 'yes',
  NO: 'no',
};

const RESULT_MESSAGES = {
  CORRECT: 'Correct!',
  INCORRECT: (
    answer,
    correctAnswer,
    name,
  ) => `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!
  `,
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
  console.log(
    `Answer "${ANSWER.YES}" if the number is even, otherwise answer "${ANSWER.NO}".`,
  );
  let rightAnswersInRow = 0;

  while (rightAnswersInRow < NUM_OF_VICTORY) {
    const randomNumber = getRandomInt(MIN, MAX);
    const answer = readlineSync.question(`Question: ${randomNumber} `);
    if (
      (answer === ANSWER.YES && isEven(randomNumber))
      || (answer === ANSWER.NO && !isEven(randomNumber))
    ) {
      console.log(RESULT_MESSAGES.CORRECT);
      rightAnswersInRow += 1;
    } else {
      const correctAnswer = answer === ANSWER.YES ? ANSWER.NO : ANSWER.YES;
      console.log(RESULT_MESSAGES.INCORRECT(answer, correctAnswer, name));
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

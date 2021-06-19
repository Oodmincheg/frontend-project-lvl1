import readlineSync from 'readline-sync';
import { NUM_OF_VICTORY, MIN, MAX } from '../constants.js';
import { getRandomInt } from '../utils.js';

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

function isEven(num) {
  return num % 2 === 0;
}

export default function evenGame() {
  const name = readlineSync.question('Sorry? May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(
    `Answer "${ANSWER.YES}" if the number is even, otherwise answer "${ANSWER.NO}".`, // game
  );
  let rightAnswersInRow = 0;

  while (rightAnswersInRow < NUM_OF_VICTORY) {
    const randomNumber = getRandomInt(MIN, MAX); // game
    const answer = readlineSync.question(`Question: ${randomNumber} `); // game
    if (
      (answer === ANSWER.YES && isEven(randomNumber)) // game
      || (answer === ANSWER.NO && !isEven(randomNumber)) // game
    ) {
      console.log(RESULT_MESSAGES.CORRECT);
      rightAnswersInRow += 1;
    } else {
      const correctAnswer = answer === ANSWER.YES ? ANSWER.NO : ANSWER.YES; // game
      console.log(RESULT_MESSAGES.INCORRECT(answer, correctAnswer, name));
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

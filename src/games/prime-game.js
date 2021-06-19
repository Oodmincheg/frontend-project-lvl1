import { getRandomInt } from '../utils.js';

const ANSWERS = {
  yes: 'yes',
  no: 'no',
};

const gamePhrase = `Answer "${ANSWERS.yes}" if given number is prime. Otherwise answer "${ANSWERS.no}". \n`;

function createQuestion(number) {
  return `Question: ${number} \nYour answer: `;
}
// not sure about returning string from function with namings starts from 'is'
function isPrime(number) {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return ANSWERS.no;
    }
  }
  return ANSWERS.yes;
}

function roundQuestion() {
  const number = getRandomInt(1, 1000);

  const question = createQuestion(number);
  const correctAnswer = isPrime(number);
  return { question, correctAnswer };
}

export default { gamePhrase, roundQuestion };

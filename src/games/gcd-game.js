import { getRandomInt } from '../utils.js';

const gamePhrase = 'Find the greatest common divisor of given numbers. \n';

function createQuestion(firstNumber, secondNumber) {
  return `Question: ${firstNumber} ${secondNumber} \nYour answer: `;
}

function calculateGTC(firstNumber, secondNumber) {
  const [dividingNumber, divider] = firstNumber > secondNumber
    ? [firstNumber, secondNumber]
    : [secondNumber, firstNumber];
  const reminder = dividingNumber % divider;
  if (reminder === 0) return divider;
  return calculateGTC(divider, reminder);
}

function roundQuestion() {
  const firstNumber = getRandomInt(1, 1000);
  const secondNumber = getRandomInt(1, 1000);

  const question = createQuestion(firstNumber, secondNumber);
  const correctAnswer = calculateGTC(
    firstNumber,
    secondNumber,
  );
  return { question, correctAnswer };
}

export default { gamePhrase, roundQuestion };

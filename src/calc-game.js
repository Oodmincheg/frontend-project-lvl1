import { getRandomInt } from './utils.js';

const gamePhrase = 'What is the result of the expression? \n';

const operations = {
  1: '+',
  2: '-',
  3: '*',
};
function createQuestion(firstNumber, secondNumber, operationString) {
  return `Question: ${firstNumber} ${operationString} ${secondNumber} \nYour answer: `;
}

function calculateCorrectAnswer(firstNumber, secondNumber, operationString) {
  switch (operationString) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      console.log('Error');
      return null;
  }
}
function roundQuestion() {
  const firstNumber = getRandomInt(1, 10);
  const secondNumber = getRandomInt(1, 10);
  const operationNumber = getRandomInt(1, 3);
  const question = createQuestion(firstNumber, secondNumber, operations[operationNumber]);
  const correctAnswer = calculateCorrectAnswer(
    firstNumber,
    secondNumber,
    operations[operationNumber],
  );
  return { question, correctAnswer };
}

export default { gamePhrase, roundQuestion };

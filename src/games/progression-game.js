import { getRandomInt } from '../utils.js';

const gamePhrase = 'What number is missing in the progression? \n';

function createQuestion(progressionArray, hiddenNumberIndex) {
  const progressionArrayWithHiddenNumber = [...progressionArray];
  progressionArrayWithHiddenNumber[hiddenNumberIndex] = '..';

  return `Question: ${progressionArrayWithHiddenNumber.join(' ')} \nYour answer: `;
}

function createProgressionArray() {
  // TODO: move all min max to consts in the whole project?
  const startNumber = getRandomInt(1, 20);
  const commonDiff = getRandomInt(1, 10);
  const progressionArray = [startNumber];
  // move length of the progression to const ?
  for (let i = 1; i <= 10; i += 1) {
    progressionArray.push(progressionArray[i - 1] + commonDiff);
  }
  return progressionArray;
}

function roundQuestion() {
  const progressionArray = createProgressionArray();
  const hiddenNumberIndex = getRandomInt(0, 9);

  const question = createQuestion(progressionArray, hiddenNumberIndex);
  const correctAnswer = progressionArray[hiddenNumberIndex];
  return { question, correctAnswer };
}

export default { gamePhrase, roundQuestion };

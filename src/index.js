import { askNameSayHelloAndSave, tellAboutGame, askRoundQuestionAndSaveAnswer } from './cli.js';
import { NUM_OF_VICTORY } from './constants.js';

const RESULT_MESSAGES = {
  CORRECT: 'Correct!',
  INCORRECT: (
    answer,
    correctAnswer,
    name,
  ) => `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!
  `,
};

export default function playGame(game) {
  const { gamePhrase, roundQuestion } = game;
  const name = askNameSayHelloAndSave();
  tellAboutGame(gamePhrase);
  let rightAnswersInRow = 0;

  while (rightAnswersInRow < NUM_OF_VICTORY) {
    const { correctAnswer, question } = roundQuestion();
    const answer = askRoundQuestionAndSaveAnswer(question);
    if (String(answer) === String(correctAnswer)) {
      console.log(RESULT_MESSAGES.CORRECT); // cli or not?
      rightAnswersInRow += 1;
    } else {
      console.log(RESULT_MESSAGES.INCORRECT(answer, correctAnswer, name));
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

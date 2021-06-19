import readlineSync from 'readline-sync';

export function askNameSayHelloAndSave() {
  const name = readlineSync.question('Sorry? May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function tellAboutGame(gamePhrase) {
  console.log(gamePhrase);
}

export function askRoundQuestionAndSaveAnswer(roundQuestion) {
  return readlineSync.question(roundQuestion);
}

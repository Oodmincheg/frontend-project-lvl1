import readlineSync from 'readline-sync';

function askNameSayHelloAndSave() {
  const name = readlineSync.question('Sorry? May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export default askNameSayHelloAndSave;

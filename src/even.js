import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};
const evenGame = (name = 'Anon') => {
  let mistakeFlag = false;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const isAnswerCorrect = (guess, num2guess) => {
    if (['yes', 'no'].indexOf(guess) === -1) return false;
    if (guess === 'yes' && num2guess % 2 === 0) return true;
    if (guess === 'no' && num2guess % 2 !== 0) return true;
    return false;
  };

  for (let i = 0; i < 3; i += 1) {
    const num2guess = Math.floor(Math.random() * 50);
    console.log(`Question: ${num2guess}`);
    const guess = readlineSync.question('Your answer: ');
    if (!isAnswerCorrect(guess.toLowerCase(), num2guess)) {
      mistakeFlag = true;
      break;
    }
  }
  if (mistakeFlag) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export { greeting, evenGame };

import readlineSync from 'readline-sync';

const ROUNDS = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const doAsking = (isCorrect, getQuestion, params) => {
  let mistakeFlag = false;
  console.log(params.startQuestion);
  for (let i = 0; i < ROUNDS; i += 1) {
    const question = getQuestion();
    console.log(question.text);
    const answer = readlineSync.question('Your answer: ');
    if (isCorrect(question, answer)) {
      console.log('Correct!');
    } else {
      mistakeFlag = true;
      break;
    }
  }
  if (mistakeFlag) {
    const errorMessage = params.errorMessage || `Let's try again, ${params.name}!`;
    console.log(errorMessage);
  } else {
    console.log(`Congratulations, ${params.name}!`);
  }
};

export { greeting, doAsking };

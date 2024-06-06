import { doAsking, greeting } from '../index.js';

const getQuestion = () => {
  const isPrime = (num2test) => {
    let result = true;
    for (let i = Math.floor(num2test / 2); i > 1; i -= 1) {
      if (num2test % i === 0) {
        result = false;
        break;
      }
    }
    return result;
  };

  const num2guess = Math.floor(Math.random() * 100) + 1;
  const question = `Question: ${num2guess}`;
  return { text: question, value: num2guess, isPrime: isPrime(num2guess) };
};

const isCorrect = (question, answerRaw) => {
  const answer = answerRaw.toLowerCase();
  if (['yes', 'no'].indexOf(answer) === -1) return false;
  if (answer === 'yes' && question.isPrime === true) return true;
  if (answer === 'no' && question.isPrime === false) return true;
  return false;
};

const primeGame = () => {
  const props = {
    startQuestion: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    name: greeting(),
  };

  
  doAsking(isCorrect, getQuestion, props);
};

export default primeGame;

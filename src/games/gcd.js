import { doAsking, greeting } from '../index.js';

const gcdGame = () => {
  const props = {
    startQuestion: 'Find the greatest common divisor of given numbers.',
    name: greeting(),
  };

  const getQuestion = () => {
    const getGCD = (num1, num2) => {
      let result = 1;
      const lesser = num1 > num2 ? num2 : num1;
      for (let i = 0; i <= lesser; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) result = i;
      }
      return result;
    };
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);
    const num2guess = getGCD(num1, num2);
    const question = `Question: ${num1} ${num2}`;
    return { text: question, value: num2guess };
  };

  const isCorrect = (question, answer) => {
    if (Number(answer) === question.value) {
      return true;
    }
    props.errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${question.value}'.\nLet's try again, ${props.name}!`;
    return false;
  };

  doAsking(isCorrect, getQuestion, props);
};

export default gcdGame;

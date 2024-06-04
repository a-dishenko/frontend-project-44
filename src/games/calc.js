import { doAsking, greeting } from '../index.js';

const isCorrect = (question, answer) => {
  if (Number(answer) === question.value) {
    return true;
  }
  return false;
};

const getQuestion = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const operand1 = Math.floor(Math.random() * 11);
  const operand2 = Math.floor(Math.random() * 11);
  const expression = `${operand1} ${operation} ${operand2}`;
  const question = `Question: ${expression}`;

  let num2guess = null;

  switch (operation) {
    case '+':
      num2guess = operand1 + operand2;
      break;
    case '-':
      num2guess = operand1 - operand2;
      break;
    case '*':
      num2guess = operand1 * operand2;
      break;
    default:
      console.log('Unknown operation');
  }
  return { text: question, value: num2guess };
};

const props = {
  startQuestion: 'What is the result of the expression?',
  name: greeting(),
};

const calcGame = () => {
  doAsking(isCorrect, getQuestion, props);
};

export default calcGame;

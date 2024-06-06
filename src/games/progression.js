import { doAsking, greeting } from '../index.js';

const progLength = 10;
const progStepRange = 5;
const progStartRange = 51;

const getProg = (progStart, progStep, prLength) => {
  const result = [];

  for (let i = 0; i < prLength; i += 1) {
    result.push(String(progStart + (progStep * i)));
  }
  return result;
};

const props = {
  startQuestion: 'What number is missing in the progression?',
  name: greeting(),
};

const getQuestion = () => {
  const progStep = Math.floor(Math.random() * progStepRange) + 1;
  const progStart = Math.floor(Math.random() * progStartRange);

  const progression = getProg(progStart, progStep, progLength);
  const hiddenIndex = Math.floor(Math.random() * progLength);

  const num2guess = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = `Question: ${progression.join(' ')}`;
  return { text: question, value: num2guess };
};

const isCorrect = (question, answer) => {
  if (answer === question.value) {
    return true;
  }
  props.errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${question.value}'.\nLet's try again, ${props.name}!`;
  return false;
};

const progressionGame = () => {
  doAsking(isCorrect, getQuestion, props);
};

export default progressionGame;

import { doAsking, greeting } from '../index.js';

const progressionGame = () => {
  const props = {
    startQuestion: 'What number is missing in the progression?',
    name: greeting(),
  };

  const getQuestion = () => {
    const getProg = (progStart, progStep, progLength) => {
      const result = [];

      for (let i = 0; i < progLength; i += 1) {
        result.push(String(progStart + (progStep * i)));
      }
      return result;
    };

    const progStep = Math.floor(Math.random() * 5) + 1;
    const progStart = Math.floor(Math.random() * 51);
    const progLength = 10; // Math.floor(Math.random() * 10) + 5;
    const progression = getProg(progStart, progStep, progLength);
    const hiddenIndex = Math.floor(Math.random() * progLength);

    const num2guess = progression[hiddenIndex];
    progression[hiddenIndex] = '...';

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

  doAsking(isCorrect, getQuestion, props);
};

export default progressionGame;

import { doAsking } from './index.js';

const evenGame = (name = 'Anon') => {
  const props = {
    startQuestion: 'Answer "yes" if the number is even, otherwise answer "no".',
    name,
  };

  const getQuestion = () => {
    const num2guess = Math.floor(Math.random() * 50);
    const question = `Question: ${num2guess}`;
    return { text: question, value: num2guess };
  };

  const isCorrect = (question, answerRaw) => {
    const answer = answerRaw.toLowerCase();
    if (['yes', 'no'].indexOf(answer) === -1) return false;
    if (answer === 'yes' && question.value % 2 === 0) return true;
    if (answer === 'no' && question.value % 2 !== 0) return true;
    return false;
  };

  doAsking(isCorrect, getQuestion, props);
};

export default evenGame;

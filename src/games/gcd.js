import _ from 'lodash';

const makeGameCard = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 20;

  const makeTask = () => 'Find the greatest common divisor of given numbers.';

  const rndNum = () => _.random(MIN_NUMBER, MAX_NUMBER);
  const makeNum = () => rndNum();

  const gcd = (num1, num2) => {
    if (num2 > num1) return gcd(num2, num1);
    if (!num2) return num1;
    return gcd(num2, num1 % num2);
  };

  const makeQuestion = () => ({
    num1: makeNum(),
    num2: makeNum(),
  });

  const task = makeTask();
  let question = makeQuestion();

  const getTask = () => task;
  const getQuestion = () => {
    const { num1, num2 } = question;
    return `${num1} ${num2}`;
  };
  const getCorrectAnswer = () => {
    const { num1, num2 } = question;
    return gcd(num1, num2);
  };

  const isCorrectAnswer = (answer) => answer === getCorrectAnswer().toString();

  const refreshQuestion = () => {
    question = makeQuestion();
  };

  return ({
    getTask,
    getQuestion,
    getCorrectAnswer,
    isCorrectAnswer,
    refreshQuestion,
  });
};

export default makeGameCard;

import _ from 'lodash';

const makeGameCard = () => {
  const MIN_NUMBER = 0;
  const MAX_NUMBER = 20;

  const makeTask = () => 'What is the result of the expression?';

  const rndNum = () => _.random(MIN_NUMBER, MAX_NUMBER);
  const makeNum = () => rndNum();

  const mapCalc = new Map([
    [1, { symbol: '+', calc: (num1, num2) => num1 + num2 }],
    [2, { symbol: '-', calc: (num1, num2) => num1 - num2 }],
    [3, { symbol: '*', calc: (num1, num2) => num1 * num2 }],
  ]);

  const rndNumOperation = () => _.random(1, mapCalc.size);
  const makeOperation = () => mapCalc.get(rndNumOperation());

  const makeQuestion = () => ({
    num1: makeNum(),
    num2: makeNum(),
    operation: makeOperation(),
  });

  const task = makeTask();
  let question = makeQuestion();

  const getTask = () => task;
  const getQuestion = () => {
    const { num1, num2, operation } = question;
    return `${num1} ${operation.symbol} ${num2}`;
  };
  const getCorrectAnswer = () => {
    const { num1, num2, operation } = question;
    return operation.calc(num1, num2);
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

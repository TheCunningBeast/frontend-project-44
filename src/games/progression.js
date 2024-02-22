import _ from 'lodash';

const makeGameCard = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 20;

  const MIN_LENGTH = 5;
  const MAX_LENGTH = 10;

  const MIN_RATE = 2;
  const MAX_RATE = 10;

  const makeTask = () => 'What number is missing in the progression?';

  const rnd = (min, max) => _.random(min, max);
  const rndNum = () => rnd(MIN_NUMBER, MAX_NUMBER);
  const rndlength = () => rnd(MIN_LENGTH, MAX_LENGTH);
  const rndRate = () => rnd(MIN_RATE, MAX_RATE);

  const makeNum = () => rndNum();
  const makelengthProgression = () => rndlength();
  const makeRateProgression = () => rndRate();

  const makeQuestion = () => {
    const num = makeNum();
    const length = makelengthProgression();
    const rate = makeRateProgression();

    const makeNumHidEl = () => rnd(0, length - 1);

    const numHidEl = makeNumHidEl();

    return {
      num,
      length,
      rate,
      numHidEl,
    };
  };

  const task = makeTask();
  let question = makeQuestion();

  const getTask = () => task;
  const getQuestion = () => {
    const {
      num,
      length,
      rate,
      numHidEl,
    } = question;

    return [...new Array(length)].map((_val, index) => {
      if (index === numHidEl) {
        return '..';
      }
      return num + (rate * index);
    }).join(' ');
  };

  const getCorrectAnswer = () => {
    const { num, rate, numHidEl } = question;
    return num + (rate * numHidEl);
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

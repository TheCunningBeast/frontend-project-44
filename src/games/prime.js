import _ from 'lodash';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const makeTask = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const rnd = (min, max) => _.random(min, max);
const makeNum = () => rnd(MIN_NUMBER, MAX_NUMBER);
const makeQuestion = () => makeNum();

const makeGameCard = () => {
  const task = makeTask();
  let question = makeQuestion();

  const getTask = () => task;
  const getQuestion = () => question;
  const getCorrectAnswer = () => {
    const isPrime = () => {
      for (let i = 2; i < question; i += 1) {
        if (question % i === 0) return false;
      }
      return question !== 1;
    };

    if (isPrime()) {
      return 'yes';
    }
    return 'no';
  };

  const isCorrectAnswer = (answer) => answer === getCorrectAnswer();

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

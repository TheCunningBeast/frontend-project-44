import _ from 'lodash';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const makeTask = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const makeQuestion = () => _.random(MIN_NUMBER, MAX_NUMBER);

const makeGameCard = () => {
  const task = makeTask();
  let question = makeQuestion();

  const getTask = () => task;
  const getQuestion = () => question;
  const getCorrectAnswer = () => {
    const isEven = () => question % 2 === 0;

    if (isEven()) {
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

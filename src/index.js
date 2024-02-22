import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;

const showMessage = (data) => console.log(data);
const getAnswer = (question = '') => readlineSync.question(question);

export default (makeGameCard) => {
  const {
    getTask,
    getQuestion,
    getCorrectAnswer,
    isCorrectAnswer,
    refreshQuestion,
  } = makeGameCard();

  showMessage('Welcome to the Brain Games!');
  const name = getAnswer('May I have your name?: ');
  showMessage(`Hello, ${name}`);
  showMessage(getTask());
  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    showMessage(`Question: ${getQuestion()}`);
    const answer = getAnswer('Your answer: ');
    if (!isCorrectAnswer(answer)) {
      showMessage(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer()}'.`);
      showMessage(`Let's try again, ${name}!`);
      return;
    }
    showMessage('Correct!');
    refreshQuestion();
  }
  showMessage(`Congratulations, ${name}!`);
};

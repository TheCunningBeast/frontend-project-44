import readlineSync from 'readline-sync';
import _ from 'lodash';

// game parameters
const maxNamber = 100;
const maxRounds = 3;

const checkEven = (number) => {
  if (number % 2 === 0) {
    return 1;
  }
  return 0;
};

const normalizeAnwer = (rawData) => {
  if (rawData === 'yes') {
    return 1;
  }
  if (rawData === 'no') {
    return 0;
  }
  return -1;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < maxRounds; i += 1) {
    const number = _.random(0, maxNamber);
    const rawAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const normalizedAnswer = normalizeAnwer(rawAnswer);
    if (normalizedAnswer !== checkEven(number)) {
      console.log(`Let's try again, " + ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

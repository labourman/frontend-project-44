import { runGame } from '../gamesEngine.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateQuestion = () => Math.floor(Math.random() * 100) + 1;

const getCorrectAnswer = (num) => isEven(num);

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

runGame(gameDescription, generateQuestion, getCorrectAnswer);

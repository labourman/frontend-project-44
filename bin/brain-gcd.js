#!/usr/bin/env node

import { runGame } from '../src/gamesEngine.js';

const findGCD = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateQuestion = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  return `${number1} ${number2}`;
};

const getCorrectAnswer = (question) => {
  const [num1, num2] = question.split(' ').map(Number);
  return String(findGCD(num1, num2));
};

// Описание игры
const gameDescription = 'Find the greatest common divisor of given numbers.';

// Запуск игры
runGame(gameDescription, generateQuestion, getCorrectAnswer);

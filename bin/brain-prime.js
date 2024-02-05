#!/usr/bin/env node

import { runGame } from '../src/gamesEngine.js';

// Функция для определения, является ли число простым
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Функция для генерации вопроса
const generateQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
  const question = number.toString();
  return question;
};

// Получение правильного ответа
const getCorrectAnswer = (question) => {
  const number = parseInt(question, 10);
  return isPrime(number) ? 'yes' : 'no';
};

// Описание игры
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

// Запуск игры
runGame(gameDescription, generateQuestion, getCorrectAnswer);

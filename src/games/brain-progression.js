import { runGame } from '../gamesEngine.js';

// Функция для генерации случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации прогрессии с заданным шагом
const generateProgressionWithStep = (length, step) => {
  const progression = [];
  let currentValue = Math.floor(Math.random() * 10) + 1; // Генерация случайного начального значения
  for (let i = 0; i < length; i++) {
    progression.push(currentValue);
    currentValue += step;
  }
  return progression;
};

// Формирование вопроса для игры
const generateQuestion = () => {
  const progressionLength = 10;
  const step = getRandomNumber(1, 5); // Генерация случайного шага от 1 до 5
  const progression = generateProgressionWithStep(progressionLength, step);

  // Убираем первый и последний элементы из возможных кандидатов на замену на ".."
  const hiddenIndex = getRandomNumber(1, progression.length - 2);

  progression[hiddenIndex] = '..'; // Замена одного числа на ".."
  const question = progression.join(' ');
  return question;
};

// Получение правильного ответа
const getCorrectAnswer = (question) => {
  const progression = question.split(' ');
  const hiddenIndex = progression.findIndex(item => item === '..');

  // Проверка на наличие ".." в начале или конце прогрессии
  if (hiddenIndex === 0 || hiddenIndex === progression.length - 1) {
    return 'NaN';
  }

  // Находим числа до и после ".."
  const beforeHidden = Number(progression[hiddenIndex - 1]);
  const afterHidden = Number(progression[hiddenIndex + 1]);

  // Возвращаем отсутствующее число
  return String((beforeHidden + afterHidden) / 2);
};

// Описание игры
const gameDescription = 'What number is missing in the progression?';

// Запуск игры
runGame(gameDescription, generateQuestion, getCorrectAnswer);

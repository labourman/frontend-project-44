// Функция для генерации случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgressionWithStep = (length, step) => {
  const progression = [];
  let currentValue = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < length; i += 1) {
    progression.push(currentValue);
    currentValue += step;
  }
  return progression;
};

export const generateQuestion = () => {
  const progressionLength = 10;
  const step = getRandomNumber(1, 5);
  const progression = generateProgressionWithStep(progressionLength, step);

  const hiddenIndex = getRandomNumber(1, progression.length - 2);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return question;
};

export const getCorrectAnswer = (question) => {
  const progression = question.split(' ');
  const hiddenIndex = progression.findIndex((item) => item === '..');

  if (hiddenIndex === 0 || hiddenIndex === progression.length - 1) {
    return 'NaN';
  }

  const beforeHidden = Number(progression[hiddenIndex - 1]);
  const afterHidden = Number(progression[hiddenIndex + 1]);

  return String((beforeHidden + afterHidden) / 2);
};

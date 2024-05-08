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

export const generateQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = number.toString();
  return question;
};

export const getCorrectAnswer = (question) => {
  const number = parseInt(question, 10);
  return isPrime(number) ? 'yes' : 'no';
};

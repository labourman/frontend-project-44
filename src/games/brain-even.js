
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const generateQuestion = () => Math.floor(Math.random() * 100) + 1;

export const getCorrectAnswer = (num) => isEven(num);

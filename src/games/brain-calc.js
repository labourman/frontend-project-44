export const generateQuestion = () => {
  const number1 = Math.floor(Math.random() * 20) + 1;
  const number2 = Math.floor(Math.random() * 20) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return `${number1} ${operator} ${number2}`;
};

export const getCorrectAnswer = (question) => {
  const [num1, operator, num2] = question.split(' ');
  switch (operator) {
    case '+':
      return String(Number(num1) + Number(num2));
    case '-':
      return String(Number(num1) - Number(num2));
    case '*':
      return String(Number(num1) * Number(num2));
    default:
      return null;
  }
};

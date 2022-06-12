const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', function (event) {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});
let prevNumber = '';
let currentNumber = '0';
let calculationOperator = '';

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', function (event) {
    inputOperator(event.target.value);
    // updateScreen(currentNumber);
  });
});

const inputOperator = (operator) => {
 if(calculationOperator === '') {
     prevNumber = currentNumber;
 }
    calculationOperator = operator;
    currentNumber = '0';
};

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', function () {
  calculate();
  updateScreen(currentNumber);
});
const calculate = () => {
  let result = '';
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = '';
};
const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
};

const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', function () {
  clearAll();
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber+=dot;
};
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', function () {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

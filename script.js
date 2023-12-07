function add(numberOne,numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne,numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne,numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne,numberTwo) {
    if (numberTwo ==0) {
        alert('Nice try but do not do this!')
    } else {
        return numberOne / numberTwo;
    }
}

function operation(numberOne,operator,numberTwo) {
    if (operator ==='+') {
        return add(numberOne,numberTwo);
    } else if (operator === '-')  {
        return subtract(numberOne,numberTwo);
    } else if (operator === '*')  {
        return multiply(numberOne,numberTwo);
    } else if (operator === '/')  {
        return divide(numberOne,numberTwo);
    }
}

let displayValue = '';
let operatingValue = '';

let operatingQuery = false;

const calculatorDisplay = document.querySelector('.calculatorDisplay');
const calculatorNumbers = document.querySelectorAll('.number');
const calculatorOperators = document.querySelectorAll('.operator');
const calculatorClear = document.querySelector('.clear');

calculatorNumbers.forEach(number => number.addEventListener('click', () => {
    calculatorDisplay.textContent += number.textContent;
    displayValue += number.textContent;
}))

calculatorOperators.forEach(value => value.addEventListener('click', () => {
    if (value.textContent === '=') {
        let splitString = displayValue.split(operatingValue);
        displayValue = operation(Number(splitString[0]),operatingValue,Number(splitString[1]));
        calculatorDisplay.textContent = displayValue;
        operatingQuery = false;
    } else if (operatingQuery == true) {
        let splitString = displayValue.split(operatingValue);
        displayValue = operation(Number(splitString[0]),operatingValue,Number(splitString[1]));
        calculatorDisplay.textContent = displayValue+value.textContent;
        operatingValue = value.textContent;
        displayValue += value.textContent;
    } else {
        calculatorDisplay.textContent += value.textContent;
        displayValue += value.textContent;
        operatingValue = value.textContent;
        operatingQuery = true;
    }
}))

calculatorClear.addEventListener('click', () => {
    calculatorDisplay.textContent = '';
    displayValue = '';
})







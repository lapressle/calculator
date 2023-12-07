function add(numberOne,numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne,numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne,numberTwo) {
    if (String(numberOne * numberTwo).length>8) {
        return Number(String(numberOne * numberTwo).slice(0, 8))
    } else {
        return numberOne * numberTwo;
    }
}

function divide(numberOne,numberTwo) {
    if (numberTwo ==0) {
        alert('Nice try but do not do this!')
    } else {
        if (String(numberOne / numberTwo).length>8) {
            return Number(String(numberOne/numberTwo).slice(0, 8))
        } else {
            return numberOne / numberTwo;
        }
    }
}

function percent(number) {
    return number/100;
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
const calculatorInvert = document.querySelector('.negative');
const calculatorDecimal = document.querySelector('.decimal');
const calculatorPercent = document.querySelector('.percent');

calculatorNumbers.forEach(number => number.addEventListener('click', () => {
    calculatorDisplay.textContent += number.textContent;
    displayValue += number.textContent;
}))

calculatorOperators.forEach(value => value.addEventListener('click', () => {
    if (value.textContent === '=') {
        if (displayValue.includes('+') || displayValue.includes('-') || displayValue.includes('*') || displayValue.includes('/')) {
            let splitString = displayValue.split(operatingValue);
            displayValue = operation(Number(splitString[0]),operatingValue,Number(splitString[1]));
            calculatorDisplay.textContent = displayValue;
            operatingQuery = false;
        } else {
            return;
        }
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
    operatingQuery = false;
})

calculatorInvert.addEventListener('click', () => {
    if (operatingQuery==true) {
        let splitString = displayValue.split(operatingValue);
        calculatorDisplay.textContent = splitString[0]+operatingValue+String(-(Number(splitString[1])));
        displayValue = splitString[0]+operatingValue+String(-(Number(splitString[1])));
    } else {
        calculatorDisplay.textContent = String(-(Number(displayValue)));
        displayValue  = String(-(Number(displayValue)));
    }
})

calculatorDecimal.addEventListener('click', () => {
    if (operatingQuery==true) {
        let splitString = displayValue.split(operatingValue);
        if (splitString[1].includes('.')) {
            return;
        } else {
            calculatorDisplay.textContent = splitString[0]+operatingValue+splitString[1]+'.';
            displayValue = splitString[0]+operatingValue+splitString[1]+'.';
        }
    } else {
        if (displayValue.includes('.')) {
            return;
        } else {
            calculatorDisplay.textContent += '.';
            displayValue += '.';
        }
    }
})

calculatorPercent.addEventListener('click', () => {
    if (operatingQuery==true) {
        let splitString = displayValue.split(operatingValue);
        let percentage = percent(Number(splitString[1]))
        calculatorDisplay.textContent = splitString[0]+operatingValue+String(percentage);
        displayValue = splitString[0]+operatingValue+String(percentage);
    } else {
        let percentage = percent(Number(displayValue));
        calculatorDisplay.textContent = String(percentage);
        displayValue = String(percentage);
    }
})









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
    return numberOne / numberTwo;
}

function operation(numberOne,operator,numberTwo) {
    if (operator ==='+') {
        return add(numberOne,numberTwo);
    } else if (operatator === '-')  {
        return subtract(numberOne,numberTwo);
    } else if (operatator === '*')  {
        return multiply(numberOne,numberTwo);
    } else if (operatator === '/')  {
        return divide(numberOne,numberTwo);
    }
}
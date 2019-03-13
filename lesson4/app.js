function getOperandA() {
    let operandA = prompt('Введите первое число');
    if (validate(operandA)) {
        alert('Неверно введено число');
        operandA = getOperandA()
    }
    return +operandA;

}

function getAction() {
    let action = prompt('Введите математическое действие "+, - , / ,* "');
    if (validateMathSign(action)) {
        alert('Неверно введен знак');
        action = getAction();
    }
    return action;

}


function getOperandB() {
    let operandB = prompt('Введите второе число');
    if (validate(operandB)) {
        alert('Неверно введено число');
        operandB = getOperandB()
    }
    return +operandB;

}


function validate(value) {
    return (isNaN(value)
        || value === ''
        || value === null);
}

function validateMathSign(value) {
    return !(value === '+'
        || value === '-'
        || value === '*'
        || value === '/')
}


function calculate(getOperandA, getAction, getOperandB) {
    let result;
    switch (getAction) {
        case '+': result = getOperandA + getOperandB; break;
        case '-': result = getOperandA - getOperandB; break;
        case '*': result = getOperandA * getOperandB; break; 
        case '/': result = getOperandA / getOperandB; break;
        default: alert('error');

    }
    return result;

}

alert(calculate(getOperandA(),getAction(),getOperandB()));



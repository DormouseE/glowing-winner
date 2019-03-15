function getOperand(text) {
    let operand = prompt(text, '');
    if (!isValidateNumber(operand)) {
        alert('Неверно введено число');
        return getOperand(text);
    }
    return +operand;
}

function getAction(text) {
    let action = prompt(text, '');
    if (isValidateMathSign(action)) {
        alert('Неверно введен знак');
        action = getAction(text);
    }
    return action;

}

function isValidateNumber(value) {
    return !(isNaN(value)
        || value === ''
        || value === null);
}

function isValidateMathSign(value) {
    return !(value === '+'
        || value === '-'
        || value === '*'
        || value === '/')
}


function calculate(operandA, action, operandB) {
    let result;
    switch (action) {
        case '+': result = operandA + operandB; break;
        case '-': result = operandA - operandB; break;
        case '*': result = operandA * operandB; break;
        case '/': result = operandA / operandB; break;
        default: alert('error');

    }
    return result;

}

const operandA = getOperand('Введите пeрвое число', '');
const action = getAction('Введите математический знак "+, - , / ,* "', '');
const operandB = getOperand('Введите второе число', '');

const result = calculate(operandA, action, operandB)

alert('Результат: ' + result);



function getOperand(text) {
    let operand = prompt(text, '');
    if (!isValidateNumber(operand)) {
        alert('Введите число');
        return getOperand(text);
    }
    return +operand;
}

function getAction() {
    let action = prompt('Введите математическое действие "+, - , / ,* "');
    if (isValidateMathSign(action)) {
        alert('Неверно введен знак');
        action = getAction();
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
const operandB = getOperand('Введите второе число', '');
const action = getAction('Введите математический знак( + - * / )', '');
const result = calculate(operandA, action, operandB)

alert('Результат: ' + result);



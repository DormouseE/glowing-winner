function getOperand() {
    if (getOperand) {
        var getOperandA = prompt('Введите первое число');
        // if (!validateOperand(getOperandA)) {
        //     alert('Неверно введено число');
        //     return getOperandA()
        // }
        var getAction = prompt('Введите математическое действие "+, - , / ,* "')
        if (!validateMatch(getAction)) {
            alert('Неправильно введен знак');
            return getAction()
        }
        var getOperandB = prompt('Введите второе число');
        // if (!validateOperand(getOperandB)) {
        //     alert('Неверно введено число');
        //     return getOperandB()

        // }
        switch (getAction) {
            case '+': alert(getOperandA + getOperandB); break;
            case '-': alert(getOperandA - getOperandB); break;
            case '*': alert(getOperandA * getOperandB); break;
            case '/': alert(getOperandA / getOperandB); break;
            default: alert('Неправильно');

        }

        

        
    }
    else {
        alert('обнови страницу. =)')
    }
}

// function validateOperand(value){
//     return !(value === '' 
//     || value === null 
//     || isNuN(value));
//     }

function validateMatch(value) {
    return (value === '+'
        || value === '-'
        || value === '*'
        || value === '/')
}

const operandA = getOperand('первый'); 
const operandB = getOperand('второй'); 
const action = getAction(); 
const result = calculate(operandA, operandB, action)

alert('Результат: ' + result);






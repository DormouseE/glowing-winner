//Задание 1

function getOperand() {
    var operand = prompt('Введите число');
    if (isValidateNumber(operand)) {
        alert('Неверно введено число');
        operand = getOperand()
    }
    return operand;
}

function isValidateNumber(value) {
    return (isNaN(value)
        || value === ''
        || value === null);
}

function sumOfEvenNumbers() {
    var str = getOperand()
    var sum = 0;
    for (var i = 0, len = str.length; i < len; i++) {
        if (str[i] % 2 == 0)
            sum++;
    }
    return sum;
}

alert('Сумма четных чисел ' + sumOfEvenNumbers());


//задание 2

let numberOne;
let numberTwo;
let maxRandomNumber;

function randomNumber(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

numberOne = randomNumber(1000,2000)
numberTwo = randomNumber(1000,2000)
console.log(numberOne,numberTwo)

maxRandomNumber = Math.max(numberOne, numberTwo);

alert(maxRandom);
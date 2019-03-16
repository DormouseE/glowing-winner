function getNumber() {
    let number = prompt('Введите число');
    if (isValidateNumber(number)) {
        alert('Неверно введено число');
        number = getNumber()
    }
    return number;
}

function isValidateNumber(value) {
    return (isNaN(value)
        || value === ''
        || value === null);
}

function sumOfEvenNumbers() {
    let str = getNumber()
    let sum = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] % 2 == 0)
            sum++;
    }
    return sum;
}

alert('Сумма четных чисел - ' + sumOfEvenNumbers());


//задание 2

let maxRandomNumber;

function randomNumber(min, max) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    random = Math.round(random);
    return random;
}

let numberOne = randomNumber(1000, 2000),
    numberTwo = randomNumber(1000, 2000);
console.log(numberOne, numberTwo);

maxRandomNumber = Math.max(numberOne, numberTwo);

alert('Максимальное рандомное число ' + maxRandomNumber);
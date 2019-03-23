const headLine = document.getElementsByTagName('h1');
headLine[0].textContent = "Hello, " + getName('Назовите свое имя.');

function getName(text) {
    let name = prompt(text, '')
    if (validateName(name)) {
        alert('Возможно вы ошиблись, повторите еще раз.');
        return getName(text);
    } return name;
};


function validateName(value) {
    return (value === '' 
    || value === null 
    || !isNaN(value));
}


const numberUser = getNumber('Введите число от 0 до 100', '');

function getNumber(value) {
    let number = prompt(value, '')
    if (isValidNumber(number)) {
        alert('Возможно вы ошиблись, повторите еще раз.');
        return getName(value);
    }return number;
}

for (let i = 1; i <= numberUser; i++) {
    let newElementLi = document.createElement('li');
    newElementLi.innerHTML = i;
    document.body.appendChild(newElementLi)
}

function isValidNumber(value) {
    return (isNaN(value)
        || value === ''
        || value === null
        || value > 100
        || value < 1);
}


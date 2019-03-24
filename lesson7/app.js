const headLine = document.getElementsByTagName('h1');
headLine[0].textContent = "Hello, " + getName('Назовите свое имя.');

function getName(text) {
    let name = prompt(text, '');
    if (validationName(name)) {
        alert('Возможно вы ошиблись, повторите еще раз.');
        return getName(text);
    } return name;
}


function validationName(value) {
    return (value === ''
        || value === null
        || !isNaN(value));
}


function getNumber(value) {
    let number = prompt('Введите число от 0 до 100', '');
    if (validationNumber(number)) {
        alert('Возможно вы ошиблись, повторите еще раз.');
        return getNumber(value);
    }return number;
}

function validationNumber(value) {
    return (isNaN(value)
        || value === ''
        || value === null
        || value < 1
        || value > 100);
}

function create(value) {
    let newElementUl = document.createElement('ul');
    for (let i = 1; i <= value; i++) {
        let newElementLi = document.createElement('li');
        newElementLi.innerHTML = i;
        newElementUl.appendChild(newElementLi);
    }
    return newElementUl;
}

const createList = create(getNumber());
document.body.appendChild(createList);
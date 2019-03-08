let viktorin = confirm('Ответишь на пару вопросов?');
if (viktorin === true) {
    let score = 0;

    let first = prompt('Сколько будет 2+2?',"");
    switch (first) {
        case '4':
            score += 10;
            alert('В точку! Ты набрал ' + score + ' баллов.');
            console.log('10');
            break;
        case '':
            first = prompt('Попробуй еще раз. Сколько будет 2+2?',"");
            switch (first) {
                case '4':
                    score += 10;
                    alert('В точку! Ты набрал ' + score + ' баллов.');
                    console.log('10');
                    break;
                default:
                    alert('Ты ответил неверно. Ты набрал ' + score + ' баллов.');
                    console.log('0');
            }
            break;
        case null:
            first = prompt('Возможно ты случайно закрыл окно! Попробуйте еще раз. Сколько будет 2+2?',"");
            switch (first) {
                case '4':
                    score += 10;
                    alert('В точку! Ты набрал ' + score + ' баллов.');
                    console.log('10');
                    break;
                default:
                    alert('Ты ответил неверно. Ты набрал ' + score + ' баллов.');
                    console.log('0');
            }
            break;
        default:
            switch (isNaN(first)) {
                case true:
                    first = prompt('Возможно ты случайно ввел текст! Попробуйте еще раз. Сколько будет 2+2?',"");
                    switch (first) {
                        case '4':
                            score += 10;
                            alert('В точку! Ты набрал ' + score + ' баллов.');
                            console.log('10');
                            break;
                        default:
                            alert('Ты ответил неверно. Ты набрал ' + score + ' баллов.');
                            console.log('0');
                    }
                    break;
                default:
                    alert('Ты ответил неверно. Ты набрал ' + score + ' баллов.');
                    console.log('0');
            }
    }

    let second = confirm('Солнце встает на востоке?');
    switch (second) {
        case true:
            score += 10;
            alert('Верно! Ты набрал ' + score + ' баллов.');
            console.log('10');
            break;
        case false:
            alert('Ты ответил неверно. Ты набрал ' + score + ' баллов.');
            console.log('0');
    }


    let third = prompt('Сколько будет 5 << 2',"");
    switch (third) {
        case '20':
            score += 10;
            alert('Верно! Ты набрал ' + score + ' баллов.');
            console.log('10');
            break;
        case '':
            third = prompt('Попробуй еще раз! Сколько будет 5 << 2',"");
            switch (third) {
                case '20':
                    score += 10;
                    alert('В точку! Ты набрал ' + score + ' баллов.');
                    console.log('10');
                    break;
                default:
                    alert('Ты ответил неверно. Ты набрал ' + score + ' баллов.');
                    console.log('0');
            }
            break;
        case null:
            third = prompt('Возможно ты случайно закрыл окно! Попробуйте еще раз. Сколько будет 5 << 2',"");
            switch (third) {
                case '20':
                    score += 10;
                    alert('В точку! Ты набрал ' + score + ' баллов.');
                    console.log('10');
                    break;
                default:
                    alert('Ты ответил неверно. Ты набрал ' + score + ' баллов.');
                    console.log('0');
            }
            break;
        default:
            switch (isNaN(third)) {
                case true:
                    third = prompt('Возможно ты случайно ввел текст! Попробуйте еще раз. Сколько будет 5 << 2',"");
                    switch (third) {
                        case '20':
                            score += 10;
                            alert('В точку! Ты набрал ' + score + ' баллов.');
                            console.log('10');
                            break;
                        default:
                            alert('Ты ответил неверно. Ты набрал ' + score + ' баллов.');
                            console.log('0');
                    }
                    break;
                default:
                    alert('Ты ответил неверно. Ты набрал ' + score + ' баллов.');
                    console.log('0');
            }
    }

    alert('Ваш счет: ' + score);
}

else {
    alert('До свидания, дорогой пользователь. Но, если ты все-таки передумал - обнови страницу. =)');
}
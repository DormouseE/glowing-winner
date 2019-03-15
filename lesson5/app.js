function dad() {
    let xc = prompt('vedite chislo')
    if (!isValidateNumber(xc)) {
        alert('Неверно введено число');
    }
}



function isValidateNumber(abz) {
    return !(isNaN(abz)
        || value === ''
        || value === null);
}

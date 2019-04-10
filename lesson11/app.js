const students = [
    new Student('Student 1', [10, 9, 8, 0, 10]), // имя, оценки
    new Student('Student 12', [10, 0, 8, 0, 3, 4])
];


function Student() {
    this.name = name;
    this.marks = marks;
    this.averageMark = averageMark;
    this.worksDone = worksDone
    this.addMark = addMark
}

function averageMark() {
    const sumMarks = this.marks.reduce((a, b) => a + b);
    return (sumMarks / this.marks.length).toFixed(2);

}

function worksDone() {
    return this.marks.reduce(function (a, b) {
        if (b) { a++ };
        return a;
    }, 0);
}


function addMark() {
    return this.marks.push(value);

}


// function averageMarkGroupe(){

// }
// averageMark() - возвращает среднюю оценку
// woksDone() - врзвращает количество сданных работ (у которых оценка больше 0)
// addMark(8) - добавляет еще одну оценку студенту
// Также написать функции

// averageMark() - которая возвращает среднюю оценку по группе
// coьpletePercent() - процент сданных работ по группе

console.log(students[0].averageMark());
console.log(students[0].woksDone());
console.log(students[0].addMark());
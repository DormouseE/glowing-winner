<<<<<<< HEAD
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
=======
'use strict'

const students = [
    new Student('Student 1', [10, 9, 8, 0, 10]),
    new Student('Student 12', [10, 0, 8, 0, 3, 4])
];

function Student(name, mark) {
    this.name = name;
    this.mark = mark;
    this.averageMark = averageMark;
    this.worksDone = worksDone;
    this.addMark = addMark;
}

function averageMark() {
    return this.mark.reduce((previousValue, currentItem) =>
        previousValue + currentItem, 0) / this.mark.length;
};

function worksDone() {
    return this.mark.filter((value) => value > 0).length;
};


function addMark(value) {
    return this.mark.push(value);
}

function averageMarkGroupe() {
    return students.reduce((previusValue, currentItem) =>
        previusValue + currentItem.averageMark(), 0) / students.length;
}

function completePercent() {
    const sumAllMarks = students.reduce((previousValue, currentItem) => previousValue + currentItem.worksDone(), 0);
    const countsWorks = students.reduce((previousValue, currentItem) => previousValue + currentItem.mark.length, 0);

        return sumAllMarks / countsWorks * 100 + ' %'
}


console.log(students[0].averageMark())
console.log(students[0].addMark(4))
console.log(students[0].worksDone())
console.log(averageMarkGroupe())
console.log(completePercent())
>>>>>>> b4891b3fbac4234e59d0a996dceeec68febf2a3f

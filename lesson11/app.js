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

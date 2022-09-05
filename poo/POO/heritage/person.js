"use strict";
class Student {
    constructor(name, school) {
        this.name = name;
        this.school = school;
    }
    get info() {
        return `${this.name} estuda no ${this.school}`;
    }
}
class Professor {
    constructor(name, school, subject) {
        this.name = name;
        this.school = school;
        this.subject = subject;
    }
    get info() {
        return `${this.name} leciona  ${this.subject} no colegio ${this.school}`;
    }
}
function printInfo(person) {
    console.log(person.info);
}
const student = new Student('joao', 'batista ');
const professor = new Professor('joao', 'historia', 'bastita');

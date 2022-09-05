"use strict";
// ./Teacher.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Teacher extends Person_1.default {
    constructor(name, birthDate, _salary, subject) {
        super(name, birthDate);
        this._salary = _salary;
        this._registration = String();
        this._subject = subject;
        this.salary = _salary;
        this._admissionDate = new Date();
        this.registration = this.generateRegistration();
    }
    get subject() {
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    get registration() {
        return this._registration;
    }
    set registration(value) {
        if (value.length < 16)
            throw new Error('O registro deve possuir no mínimo 16 caracteres.');
        this._registration = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 0)
            throw new Error('O salário não pode ser negativo.');
        this._salary = value;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    set admissionDate(value) {
        if (value.getTime() > new Date().getTime())
            throw new Error('A data de admissão não pode ser uma data no futuro.');
        this._admissionDate = value;
    }
    generateRegistration() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `PRF${randomStr}`;
    }
}
exports.default = Teacher;

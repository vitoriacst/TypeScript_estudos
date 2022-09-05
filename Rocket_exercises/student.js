"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
class student extends person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = String();
        this._examsGrades = [];
        this._worksGrades = [];
        // this.enrollment = this.generateEnrollment();
    }
    get enrollment() {
        return this._enrollment;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set enrollment(value) {
        if (value.length < 16)
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        this._enrollment = value;
    }
    set examsGrades(value) {
        if (value.length > 3)
            throw new Error(' A pessoa estudante deve possuir no máximo 4 notas de provas');
        this._examsGrades = value;
    }
    set workGrades(value) {
        if (value.length > 1)
            throw new Error(' pessoa estudante deve possuir no máximo 2 notas de trabalhos');
        this._worksGrades = value;
    }
}
exports.default = student;

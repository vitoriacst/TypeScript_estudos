"use strict";
class students {
    constructor(name, enrollment, exams, examNotes) {
        this._examNotes = [];
        this._exams = [];
        this._name = name;
        this._enrollment = enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    get enrollment() {
        return this._enrollment;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('Insira um nome valido');
        }
    }
    get exams() {
        return this._exams;
    }
    set exams(values) {
        this._exams = values;
    }
    get examNotes() {
        return this._examNotes;
    }
    set examNotes(values) {
        if (values.length > 4) {
            throw new Error('A pessoa deve ter 4 notas');
        }
    }
    somaNotas() {
        return [...this.examNotes, ...this._examNotes].reduce((previousNote, note) => {
            const nextNote = note + previousNote;
            return nextNote;
        }, 0);
    }
    media() {
        const sum = this.somaNotas();
        const divisor = (sum / 4);
    }
}

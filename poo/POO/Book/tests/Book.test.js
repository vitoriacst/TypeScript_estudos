"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Book_1 = __importDefault(require("../Book"));
describe('testes do Book', () => {
    describe('Ao isntanciar um novo book ', () => {
        (0, chai_1.expect)(Book_1.default).to.be.an.instanceOf(Book_1.default);
    });
});

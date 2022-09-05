"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, salePrice, cost) {
        this._id = id;
        this._title = title;
        this._salePrice = salePrice;
        this._cost = cost;
    }
    // getters serve para ler
    get id() {
        return this._id;
    }
    // set serve para acessar
    set id(value) {
        this._id = value;
    }
    set salePrice(value) {
        if (value < this._cost)
            throw new Error('valor de venda n pode ser menor do que o custo ');
        this._salePrice = value;
    }
}
const book = new Book(1, 'Senhor dos aneis', 90, 1);
exports.default = Book;

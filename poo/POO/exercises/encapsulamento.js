"use strict";
class Person {
    constructor(name, height, weight, age) {
        this.name = name;
        this._weight = weight;
        this._age = age;
        this.height = height;
    }
    // esta sintaxe permite acessar o valor retornado via person.getWeight()
    getWeight() {
        return this._weight;
    }
    // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
    get age() {
        return this._age;
    }
    // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
    // mesmo que esteja ocorrendo uma validação internamente
    set age(newValue) {
        if (newValue >= 0 && newValue < 200) {
            this._age = newValue;
        }
    }
    birthday() {
        this._age += 1;
    }
}
const p3 = new Person('Maria', 171, 58);
const p4 = new Person('João', 175, 66);

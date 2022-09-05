"use strict";
/*
Dicionário en-pt:
- fish: peixe
*/
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Bird extends Animal {
    move() { console.log(`${this.name} está voando.`); }
}
class Mammal extends Animal {
    move() { console.log(`${this.name} está andando.`); }
}
class Fish extends Animal {
    move() { console.log(`${this.name} está nadando.`); }
}
const a = new Fish('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');
const myMove = (animal) => {
    animal.move();
};
myMove(a);
myMove(b);
myMove(m);
/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/

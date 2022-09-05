"use strict";
class UserData {
    constructor(name, surName) {
        this.name = name;
        this.surName = surName;
    }
    // leem as propriedades
    get fullName() {
        return this.name + "" + this.surName;
    }
}
const person = new UserData('vivi', 'holanda');
// setters modificam
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
    }
}
const myCoords = new Coords();
myCoords.fillX = 16;
myCoords.filly = 12;
// override de metodos
// utilizado para substituir um metodo de uma classe que herdamos algo
// basta criar o metodo ocm o mesmo nome da classe filha
class Base {
    someMethod() {
        console.log('teste');
    }
}
class novaBase extends Base {
    someMethod() {
        console.log('testando outra coisa');
    }
}

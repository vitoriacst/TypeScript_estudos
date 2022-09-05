"use strict";
// criando classes
class User {
}
const vitoria = new User();
// com o constructor
class NewUser {
    // o constructor baliza os atributos da classe , fazendo com que a tenham regras na criacao de uma nova instancia
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const vivi = new NewUser('vivi', 19);
// podemos iniciar assim por conta do constructor
// campo readOnly
class CarTest {
    // -|> adicionando o readOnly no atributo wheels
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
// -|> Heranca e super
// para gerar a heranca usamos a palavra reservada extends
// todos as propriedades passadas de pai pra filhos sao passadas pelo super
class Machine {
    constructor(name) {
        this.name = name;
        // this gera a ref
    }
}
const trator = new Machine('trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
// methods
// implementacao de funcoes dentros das classes
// propriedades sao como variaveis e metodos como funcoes
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("hey stranger");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
// acessando o method
// -|> uso do this
class TruckTwo {
    constructor(model, hp) {
        this.hp = hp;
        this.model = model;
    }
    showDetails() {
        console.log(`caminhao do modelo ${this.model} que tem ${this.hp} cavalos de potencia`);
    }
}
// visibilidade das classes
// public -> visibilidade default para qualquer um
// protect -> tem a sua visibilidade liberada apenas para as suas herdeiras, para acessar precisamos de um metodo
// private -> apenas a classe que declarou pode usar o metodo
class D {
    constructor() {
        this.x = 10;
    }
}
class E extends D {
}
const DIntance = new D();
console.log(DIntance.x);
const EIntance = new E();
console.log(EIntance.x);
// protect
class F {
    constructor() {
        this.x = 10;
    }
}
class G extends F {
    ShowX() {
        console.log("teste" + this.x);
    }
}
const FIntance = new F();
console.log(DIntance.x);
const GIntance = new G();
console.log(GIntance.ShowX());
// private
class PrivateClass {
    constructor() {
        this.name = "private";
    }
    showName() {
        this.name;
    }
    privateMethod() {
        console.log('teste');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
console.log(pObj.showPrivateMethod());
// static
class StaticMembers {
    static staticMethod() {
        console.log("metodo estatico");
    }
}
StaticMembers.prop = "testando static";
console.log(StaticMembers.prop);
console.log(StaticMembers.staticMethod());
// generic class
// os tipos podem ser definidos na hora da instancia
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
// tipamos como strings
const newItem = new Item("caixa", 2);
// Parameters properties
// -> recurso para definir  a privacidade , nom e tipo das propriedades do constructor , resumindo a sintaxe
class ParameterProprierties {
    constructor(name, _qty) {
        this.name = name;
        this._qty = _qty;
        this.name = name,
            this._qty = _qty;
    }
}
// class expressions
// criando uma classe anonima = encapsulando uma classe em uma variavel
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const person = new myClass("vivi");
console.log(person);
// abstract class
// serve como molde para as outras classes
// todos os seus metodos devem ser implementadas nas suas herdeiras
class abstractClass {
}
class abstractChild extends abstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}

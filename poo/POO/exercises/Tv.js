"use strict";
// Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
// Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
class Tv {
    constructor(b, r, c) {
        console.log(`Tv ${b}`);
        this.brand = b;
        this.resolution = r;
        this.connection = c;
    }
    turnOn() {
        console.log(`${this.brand} is on`);
    }
}
const t1 = new Tv('LG', 23, 'hd');
t1.turnOn();

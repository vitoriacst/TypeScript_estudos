"use strict";
class vehicle {
    constructor(brand, automaker) {
        this.brand = brand;
        this.automaker = automaker;
    }
    speed() {
        return `o ${this.brand} acelera!`;
    }
}
class Car extends vehicle {
    constructor(brand, automaker) {
        super(brand, automaker);
    }
    speed() {
        return super.speed() + `acelera o ${this.brand}!`;
    }
}
const teste = new Car("POLO", "vw");
teste.speed();

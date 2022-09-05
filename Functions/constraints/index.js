"use strict";
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
// especificando o tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// default
// ele ja tem um valor definido
function sum(n, m = 10) {
    return n + m;
}
console.log(sum(10));
console.log(sum(10, 15));
// unknown
// so aceita se validar o tipo
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
    }
}
doSomething('1');
// never
// e um tipo semelhante ao void e e atribuido  a func que n retornam nada
// errors
function showError(msg) {
    throw new Error(msg);
}
// rest operator
// tipando o rest (...)
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
// destructuring com params
function showProducts({ name, price }) {
    return `o nome do produto e ${name} e ele custa ${price}`;
}

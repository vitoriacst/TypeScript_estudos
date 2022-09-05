"use strict";
// utilizamos o generic quando uma func pode aceitar mais de um tipo
function showData(arg) {
    return `o dado sera: ${arg}`;
}
console.log(showData(6));
console.log(showData('TESTE'));
// constraint in generic
function showProductName(obj) {
    return `o nome do produto e ${obj.name}`;
}
const car = { name: 'teste' };
console.log(showProductName(car));
// definindo tipos genericos para os atributos da interface
// type Parameters
function getSomeKey(obj, key) {
    return `A chave ${key} esta presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
// aqui ele vai gerar o error
console.log(getSomeKey(server, 'teste'));
// o C ja faz a conexao com o name do character
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'vivi',
    age: 19,
    hasDriveLicense: false
};
console.log(showCharName(myChar, 'name'));
// typeOf type Operator
// podemos criar um novo tipo e esse tipo sera baseado no tipo de algum dado
const userName = 'vivi';
const userName2 = 'vi';
// aqui estou pegando uma chave especifica do objeto Truck
const newTruck = {
    km: 100000,
    kg: 5000,
    description: 'aguenta pouca carga'
};
function showKm(km) {
    console.log(`o veiculo tem a km de = ${km} `);
}
showKm(newTruck.km);

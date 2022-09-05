"use strict";
console.log('teste');
// tipo especifico para definir se e um objeto
// mas ele aceita tudo, sendo um problema usa-lo
let obj = {};
let object = {
    name: 'vivi',
    idade: 19,
    habilidades: {
        culinárias: true
    }
};
// sendo assim uma forma mais segura
// type union -> podemo usar dois tipos para um valor
let anoNascimento;
anoNascimento = 2003;
// array
const names = ['teste'];
names.push('Vivi');
names.push(10);
// tupla
const pessoa = ['vivi', 20, 10];
// tem que ser na ordem e n pode ter nada a mais nem a menos

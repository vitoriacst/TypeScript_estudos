"use strict";
// void
function withoutReturn() {
    console.log('essa função não possui retorno');
}
// classificando como o tipo void
// passando uma callback como argumento
function greeting(name) {
    return `Hello ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'vivi');
// função que recebe a outra como parâmetro , sendo ambas tipadas
// generic functions

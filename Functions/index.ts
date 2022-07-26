// void

function withoutReturn():void{
  console.log('essa função não possui retorno');

}
// classificando como o tipo void

// passando uma callback como argumento

function greeting(name:string){
  return `Hello ${name}`
}

function preGreeting(f:(name:string) => string,userName:string){
  console.log("preparando a função");
  const greet = f(userName)
  console.log(greet);
}

preGreeting(greeting,'vivi')

// função que recebe a outra como parâmetro , sendo ambas tipadas

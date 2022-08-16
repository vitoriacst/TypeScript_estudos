// criando classes

class User {
  name!:string
  age!: number
}

const vitoria = new User()


// com o constructor

class NewUser {
  name
  age
  // o constructor baliza os atributos da classe , fazendo com que a tenham regras na criacao de uma nova instancia

  constructor(name: string ,age : number){
    this.name = name;
    this.age = age;
  }
}

const vivi = new NewUser('vivi' , 19)
// podemos iniciar assim por conta do constructor

// campo readOnly

class CarTest {
  name
  readonly wheels = 4
  // -|> adicionando o readOnly no atributo wheels
  constructor(name: string){
    this.name = name
  }
}

// -|> Heranca e super
// para gerar a heranca usamos a palavra reservada extends
// todos as propriedades passadas de pai pra filhos sao passadas pelo super

class Machine {
  name
  constructor(name:string){
    this.name = name
  }
}

const trator = new Machine('trator')

class KillerMachine extends Machine {
  guns
  constructor(name:string,guns: string){
    super(name)
    this.guns = guns
  }
}

// methods
// implementacao de funcoes dentros das classes
// propriedades sao como variaveis e metodos como funcoes

class Dwarf {
  name
  constructor(name: string){
    this.name = name;
  }
  greeting(){
    console.log("hey stranger");
  }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name);

jimmy.greeting()
// acessando o method


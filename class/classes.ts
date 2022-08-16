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

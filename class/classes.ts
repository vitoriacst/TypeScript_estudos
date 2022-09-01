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
    // this gera a ref
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


// -|> uso do this
class TruckTwo {
  model
  hp
  constructor(model:string , hp: number)
  {
    this.hp = hp
    this.model = model
  }
  showDetails(){
    console.log(`caminhao do modelo ${this.model} que tem ${this.hp} cavalos de potencia`);

  }
}

// visibilidade das classes
// public -> visibilidade default para qualquer um
// protect -> tem a sua visibilidade liberada apenas para as suas herdeiras, para acessar precisamos de um metodo
// private -> apenas a classe que declarou pode usar o metodo


class D {
  x = 10
}

class E extends D {

}

const DIntance = new D ()
console.log(DIntance.x);

const EIntance = new E ()
console.log(EIntance.x);



// protect

class F {
  protected x = 10
}

class G extends F{
  ShowX(){
    console.log("teste"+this.x);

  }

}

const FIntance = new F ()
console.log(DIntance.x);

const GIntance = new G ()
console.log(GIntance.ShowX());


// private

class PrivateClass {
  private name = "private"
  showName(){
    this.name
  }
  private privateMethod(){
    console.log('teste');

  }
  showPrivateMethod(){
    this.privateMethod()
  }
}

const pObj = new PrivateClass()

console.log(pObj.showName());
console.log(pObj.showPrivateMethod());


// static


 class StaticMembers {
  static prop = "testando static"
  static staticMethod(){
    console.log("metodo estatico");
  }
 }


console.log(StaticMembers.prop);
console.log(StaticMembers.staticMethod());


// generic class
// os tipos podem ser definidos na hora da instancia

class Item<T, U>{
  first
  second

  constructor(first: T, second: U){
    this.first = first
    this.second = second
  }
}
// tipamos como strings
const newItem = new Item("caixa" , 2)


// Parameters properties
// -> recurso para definir  a privacidade , nom e tipo das propriedades do constructor , resumindo a sintaxe

class ParameterProprierties{
  constructor(public name: string ,private _qty: number){
    this.name = name,
    this._qty = _qty
}
}

// class expressions
// criando uma classe anonima = encapsulando uma classe em uma variavel

const myClass = class <T>{
  name
  constructor(name:T){
    this.name = name
  }
}

const person = new myClass("vivi")

console.log(person);


// abstract class
// serve como molde para as outras classes
// todos os seus metodos devem ser implementadas nas suas herdeiras

abstract class abstractClass{
  abstract showName(): void
}

class abstractChild extends abstractClass {
  name: string
  constructor(name:string){
    super()
    this.name = name
  }
  showName() {
      console.log(this.name);

  }
}

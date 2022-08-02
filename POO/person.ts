// classe -> define as características
class Person{
  name: string;
  height: number;
  weight: number;

constructor(n: string, h: number, w: number) {
  // passando a atributos por meio do constructor
  console.log(`Creating person ${n}`);
  this.name = n;
  this.height = h;
  this.weight = w;
}
// this se refere aos objetos

// metodo
  sleep(){
    console.log(`${this.name}:zzzzz`);
  }
}

const p1 = new Person('maria',171,58)
// criando um novo objeto (passando o nome da classe)
const p2 = new Person('vivi', 150 , 54)

p1.sleep()
p2.sleep()


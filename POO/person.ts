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

// metodo
sleep(){
  console.log(`${this.name}:zzzzz`);
}
}

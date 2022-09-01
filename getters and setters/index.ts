class UserData {
  name
  surName
  constructor(name: string , surName: string){
    this.name = name
    this.surName = surName
  }

  // leem as propriedades
  get fullName(){
    return this.name + "" + this.surName
  }
}


const person = new UserData('vivi', 'holanda')

  // setters modificam
  class Coords {
    x!:number
    y!:number
    set fillX(x:number){
      if(x === 0) {
        return
      }
      this.x= x
    }

    set filly(y:number){
      if(y === 0) {
        return
      }
      this.y= y
    }
  }
 const myCoords = new Coords()
  myCoords.fillX = 16;
  myCoords.filly = 12

  // override de metodos

// utilizado para substituir um metodo de uma classe que herdamos algo
// basta criar o metodo ocm o mesmo nome da classe filha


class Base {
  someMethod(){
    console.log('teste');

  }
}

class novaBase extends Base {
   someMethod(): void {
       console.log('testando outra coisa');

   }
   // esse substitui o de cima 
}

// - 1 exemplo

function myDecorator(){
  console.log("iniciando o decorator");
  return function(target: any , propertKey: string , descriptor: PropertyDescriptor){
    console.log("executando decorator");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  }
}

class Myteste{
  @myDecorator()
  testing() {
    console.log('terminando a exec');
  }
}

const myObj = new Myteste();
myObj.testing()


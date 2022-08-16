// utilizamos o generic quando uma func pode aceitar mais de um tipo
 function showData<T>(arg: T) : string{
  return `o dado sera: ${arg}`
 }

 console.log(showData(6));
 console.log(showData('TESTE'));


 // constraint in generic

 function showProductName<T extends {name: string}>(obj: T){
  return `o nome do produto e ${obj.name}`
 }

 const car = {name: 'teste'}

 console.log(showProductName(car));


 // interfaces in generic

 interface MyObject <T , U>{
  name: string,
  wheels: T,
  engine: U,
 }

 type Carro = MyObject<number , number>

 // definindo tipos genericos para os atributos da interface
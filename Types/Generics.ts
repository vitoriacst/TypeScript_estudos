
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

 // type Parameters

 function getSomeKey<T, K extends keyof T>(obj: T , key: K){
  return `A chave ${key} esta presente no objeto e tem o valor de ${obj[key]}`
 }

 const server = {
  hd: '2TB',
  ram: '32GB'
 }

 console.log(getSomeKey(server, 'ram'));
 // aqui ele vai gerar o error
 console.log(getSomeKey(server, 'teste'));


 // keyof type Operator
// podemos criar um novo tipo, sendo baseado nas chaves do objeto

type character = {name: string , age: number , hasDriveLicense: Boolean}

type C = keyof character

// o C ja faz a conexao com o name do character
function showCharName(obj: character , name: C): string{
  return `${obj[name]}`
}
const myChar: character = {
  name: 'vivi',
  age: 19,
  hasDriveLicense: false
}

console.log(showCharName(myChar,'name'));

// typeOf type Operator
// podemos criar um novo tipo e esse tipo sera baseado no tipo de algum dado

const userName: string = 'vivi'

const userName2: typeof userName = 'vi'

// criamos uma relacao com o tipo de uma var anterior

// indexed access types
// podemos criar um tipo baseado em uma chave de objeto -|> podendo reaproveitar o tipo da chave em outros locais

type Truck = {km: number, kg: number , description:string}

type km = Truck['km']
// aqui estou pegando uma chave especifica do objeto Truck

const newTruck : Truck = {
  km: 100000,
  kg: 5000,
  description: 'aguenta pouca carga'
}

function showKm(km:km){
  console.log(`o veiculo tem a km de = ${km} `);

}

showKm(newTruck.km)

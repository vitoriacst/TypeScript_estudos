// tipo de objeto para func com interface

interface Product {
   name: string
   price: number
   isAvaliable: true
}

// na interface user o nameTeste e opcional
interface User {
  nameTeste?: string
  price: number
  isAvaliable: true
}


function showProduct(Product: Product){
// passamos a interface como parâmetro
}


// extending types , trabalhando com o herança

interface Human {
  name: string,
  age: number,
}

interface SuperHuman extends Human{
  superPowers: string[]
}

// intersection types -> podemos realizar a concatenacao de tipos

interface CharacterHuman {
  name: string,
}

interface Gun {
  type: string,
  caliber: number,
}

type HumanWithGun  = CharacterHuman & Gun

// ReadOnlyArray
// deixa os items como readOnly

let myArray:ReadonlyArray<string> = ["maca" , "laranja" , "Banana"];

// myArray[3] = "mamao"



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
// passamos a interface como parametro
}

console.log('teste');

// tipo especifico para definir se e um objeto
// mas ele aceita tudo, sendo um problema usa-lo
let obj:Object = {}

let object:{
  name:string,
  idade:number,
  habilidades:{
    culinárias:true,
  }
} = {
  name:'vivi',
  idade:19,
  habilidades:{
    culinárias:true
  }
};

// sendo assim uma forma mais segura

// type union -> podemo usar dois tipos para um valor

let anoNascimento : number | string

anoNascimento = 2003


// array

const names: (string|number)[] = ['teste']
names.push('Vivi')
names.push(10)

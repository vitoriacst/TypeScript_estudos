function firstElement<T>(arr: T[]): T{
  return arr[0]
}
// podendo  receber as mesmas coisas -> sendo generic


function mergeObjects<U, T>(obj1:U,obj2:T){
  return {
    ...obj1,
    ...obj2
  }
}
// dando para eles um tipo generic

const newObject =  mergeObjects({name:"vivi"},{age:19})


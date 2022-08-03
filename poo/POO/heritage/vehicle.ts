class vehicle{
  constructor(public brand: string , private automaker: string){}
    public speed(): string{
      return `o ${this.brand} acelera!`
  }

}

class Car extends vehicle{
  constructor(brand:string, automaker:string){
    super(brand, automaker)
  }
  public speed():string{
    return super.speed() + `acelera o ${this.brand}!`
  }
}

const teste = new Car("POLO","vw");
teste.speed()

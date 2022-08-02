class Book{
  id: number;
  title: string;
  salePrice: number;
  cost: number;

  constructor(id:number, title: string,salePrice: number , cost: number){
    this.id = id;
    this.title = title;
    this.salePrice = salePrice;
    this.cost = cost;
  }
}

export default Book

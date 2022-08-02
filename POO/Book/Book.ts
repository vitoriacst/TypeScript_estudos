class Book{
  private _id: number;
  private _title: string;
  private _salePrice: number;
  private _cost: number;

  constructor(id:number, title: string,salePrice: number , cost: number){
    this._id = id;
    this._title = title;
    this._salePrice = salePrice;
    this._cost = cost;
  }
  // getters
  get id(): number {
    return this._id;
  }
}

const book = new Book(1,'Senhor dos aneis' , 90, 1)

export default Book

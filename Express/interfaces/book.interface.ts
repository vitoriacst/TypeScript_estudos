interface Book {
  id?: number;
  title: string;
  price: number;
  author: string;
  isbn: string;
}
export default Book;


// heranca de interfaces
// uma classe que herda uma interface

interface showTitle {
  itemTitle(): string
}


// herdamos  essa interface na classe blog post , que devera seguir as regras da interface
class blogPost implements showTitle {
  title
  constructor(title: string){
    this.title  = title
  }
  itemTitle(): string {
    return `o titulo do post : ${this.title}`
  }
}

const myPost = new blogPost('hello world')

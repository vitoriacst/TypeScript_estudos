import { expect } from "chai"
import Book from '../Book'


describe('testes do Book',()=>{
  describe('Ao isntanciar um novo book ',()=>{
    expect(Book).to.be.an.instanceOf(Book)
  })
})

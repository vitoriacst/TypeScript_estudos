import chai, { expect } from 'chai';
import chaiHttp from 'chai-http'

const userMock: User = {
  id:1,
  name: 'teste',
  createdAt: new Date()
  updatedAt: new Date()
  email: 'teste@gmail.com'
}

// I will implement an interface for userMock

describe('Users', ()=>{
  describe('List', ()=>{
    beforeEach(()=>{  sinon.stup(User, 'findAll').resolves([userMock as User])
    })

    afterEach(()=>{
      sinon.restore()
    })

    it('Should return status 200', async()=> {

     const response = await chai.request(app)
      .get('/users')
      expect(response.status).to.equal(200)
    })

    it('should return users',async()=>{
      const response = await chai.request(app)
      .get('/users')
      expect(response.body).to.members.depp.equal([])
    })
  })
})

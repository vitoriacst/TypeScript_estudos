import chai, { expect } from 'chai';
import chaiHttp from 'chai-http'

describe('Users', ()=>{
  describe('List', ()=>{

    it('Should return status 200', async()=> {
      sinon.stup(User, 'findAll').resolves([])
     const response = await chai.request(app)
      .get('/users')
      expect(response.status).to.equal(200)
      sinon.restore()
    })

    it('should return users',async()=>{
      const response = await chai.request(app)
      .get('/users')
      expect(response.body).to.members.depp.equal([])
    })
  })
})

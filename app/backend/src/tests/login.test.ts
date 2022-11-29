// lecture24.4
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';
import Users from '../database/models/UserModel';
import * as bcrypt from 'bcryptjs';

const { app } = new App();

chai.use(chaiHttp);

describe('routes/login', () => {
  beforeEach(sinon.restore);

  describe('Post /login', () => {

    it('Retorna 500 quando o banco retorna um erro', async () => {
    sinon.stub(Users, 'findOne' ).rejects('bankError');
    const response = await chai.request(app)
    .post('/login')
    .send({
      email: 'fake@admin.com',
      password: "secret_admin"
});

    chai.expect(response.status).to.be.equal(500);
    });

    it('Retorna 400 quando a requisição é mal formatada', async () => {
      // sinon.stub(Users, 'findOne' ).resolves(null);
    const response = await chai.request(app)
    .post('/login')
    .send({
      password: "secret_admin"
});

    chai.expect(response.status).to.be.equal(400);
    });

    it('Retorna 401 quando usuário não é encontrado', async () => {
      sinon.stub(Users, 'findOne').resolves(null);
      const response = await chai.request(app)
      .post('/login/')
      .send({
        email: "Edmin@admin.com",
        password: "secret_admin"
      });

      chai.expect(response.body).to.be.deep.equal({
        "message": "Incorrect email or password"
      });
      chai.expect(response.status).to.be.equal(401);
    });

     it('Retorna 401 quando falha a autenticação', async () => {
      const hashPassword= bcrypt.hashSync('codedPassword', 10);
      const object: any = {
          dataValues: {
            id: 1,
            userName: 'fakeName',
            role: 'fakeAdmin',
            email: 'fake@admin.com',
            password: hashPassword
          },
      }
      sinon.stub(Users, 'findOne' ).resolves(object);
      const response = await chai.request(app)
      .post('/login')
      .send({
        email: "fake@admin.com",
        password: "invalidPassword"
      });

      chai.expect(response.body).to.be.deep.equal({
        "message": "Incorrect email or password"
      });
      chai.expect(response.status).to.be.equal(401);

    });

    it ('Retorna 200 quando o usuário é registrado com sucesso', async () => {
    const hashPassword= bcrypt.hashSync('password1234', 10);
    const object: any = {
      dataValues: {
        id: 1,
        userName: 'fakeName',
        role: 'fakeAdmin',
        email: 'fake@admin.com',
        password: hashPassword
      },
  }
    sinon.stub(Users, 'findOne' ).resolves(object);
    const response = await chai.request(app)
    .post('/login')
    .send({
      email: 'fake@admin.com',
      password: 'password1234'
});
    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body).to.contain.keys('token');
    });
  });
  
});
// lecture24.4
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';

import * as bcript from 'bcryptjs';

chai.use(chaiHttp);

const { app } = new App();

describe('routes/teamsRoute', () => {
  beforeEach(sinon.restore);

  describe('Get /login/validate', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VyTmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjUyNDYzMDJ9.NcPTgNqxkyP3c2WBMvsMq5WxCuE16-NfTjxknyeXxW0';
    it('Retorna 401 caso a autenticação não seja enviada no header', async () => {
      const response = await chai.request(app)
      .get('/login/validate');

      chai.expect(response.status).to.be.equal(401);
    });

    it ('Retorna 401 caso a autenticação esteja mal formatada', async () => {
      const response = await chai.request (app)
      .get('/login/validate')
      .set('authorization', 'hadouken' );

      chai.expect(response.status).to.be.equal(401);
    });

    it ('Retorna 401 caso a autenticação seja inválida', async () => {
      const response = await chai.request(app)
      .get('/login/validate')
      .set('authorization', `Bearer ${'invalid_token'}`);

      chai.expect(response.status).to.be.equal(401);
    });

    it ('Retorna 200 com a chave "role"', async () => {
      const response = await chai.request(app)
    .get('/login/validate')
    .set('authorization', `${token}`);

    chai.expect(response.status).to.be.equal(200);
    chai.expect(response.body).to.contain.keys('role');
    });
  });
});

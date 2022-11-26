// lecture24.4
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

// import Example from '../database/models/ExampleModel';
// import models from '../database/models';
import { Response } from 'superagent';
import Teams from '../database/models/TeamModel';
import * as bcrypt from 'bcryptjs';
import { send } from 'process';

const { app } = new App();
chai.use(chaiHttp);

describe('routes/teams', () => {
  beforeEach(sinon.restore);
  describe('Get /teams', () => {

    it('Retorna 500 quando o banco retorna um erro',async () => {
      sinon.stub(Teams, 'findAll').rejects('bankError');
      const response = await chai.request(app)
      .get('/teams');
      chai.expect(response.status).to.be.equal(500);
    });

    it('Retorna 404 quando o banco retorna uma lista vazia', async () => {
      sinon.stub(Teams, 'findAll' ).resolves([]);
      const response = await chai.request(app)
      .get('/teams')

      chai.expect(response.status).to.be.equal(404);
    });

    
    it('Retorna 200 quando o banco retorna uma lista de objetos',async () => {
      sinon.stub(Teams, 'findAll').resolves([{}] as any);
      const response = await chai.request(app)
      .get('/teams')

      chai.expect(response.body).to.be.deep.equal([{}]);
      chai.expect(response.status).to.be.equal(200);
    });
  });
});

function done() {
  throw new Error('Function not implemented.');
}

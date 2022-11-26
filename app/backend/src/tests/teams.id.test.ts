import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';

import Teams from '../database/models/TeamModel';

const { app } = new App();

chai.use(chaiHttp);

describe('routes /teams/', () => {
  beforeEach(sinon.restore);

  describe('Get /teams/:id', () => {

    it('Retorna 500 quando o banco retorna um erro', async () => {
      sinon.stub(Teams, 'findOne').rejects('bankError');
      const response = await chai.request(app)
    .get('/teams/:id');

    chai.expect(response.status).to.be.equal(500);
    });

    it('Retorna 404 quando o banco retorna "null"', async () => {
      sinon.stub(Teams, 'findOne').resolves(null);
      const response = await chai.request(app)
      .get('/teams/:id');

      chai.expect(response.body).to.be.deep.equal({ message: 'Not found error' });
      chai.expect(response.status).to.be.equal(404);
    });
    
    it('Retorna 200 quando o banco retorna um objeto', async () => {
      sinon.stub(Teams, 'findOne').resolves({} as any);
      const response = await chai.request(app)
    .get('/teams/:id');

    chai.expect(response.body).to.be.deep.equal({});
    chai.expect(response.status).to.be.equal(200);
    });
  });
});
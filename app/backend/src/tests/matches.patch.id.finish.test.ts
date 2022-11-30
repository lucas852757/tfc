import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';
import Match from '../database/models/MatchModel';


const { app } = new App();

chai.use(chaiHttp);

describe('routes /matches/:id/finish', () => {
  beforeEach(sinon.restore);

  describe('Patch /matches/:id/finish', () => {
    it('Retorna 500 quando o banco retorna um erro', async() => {
      sinon.stub(Match, 'update').rejects('bankError');

      const response = await chai.request(app).patch('/matches/1/finish');
      chai.expect(response.status).to.be.equal(500);
    });
    
    it('Retorna 404 quando o id da partida não existe', async () => {
      sinon.stub(Match, 'update').resolves([0]);
      const response = await chai.request(app).patch('/matches/1/finish');

      chai.expect(response.status).to.be.equal(404);
    });

    it('Retorna 200 quando o banco retorna um objeto',async () => {
      sinon.stub(Match, 'update').resolves([1] as any);

      const response = await chai.request(app).patch('/matches/1/finish');
     
      chai.expect(response.status).to.be.equal(200);
    });
  });
});
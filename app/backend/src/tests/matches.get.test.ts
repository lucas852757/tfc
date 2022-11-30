import * as sinon from 'sinon';
import * as chai from 'chai';
//@ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';
import Match from '../database/models/MatchModel';
import Matches from '../services/MatchService';

const { app } = new App();
app.use(chaiHttp);

describe('routes /matches', () => {
  beforeEach(sinon.restore);

  describe('Get matches/', () => {
    it('Retorna 500 quando o banco retorna um erro', async() => {
      sinon.stub(Match, 'findAll').rejects('bankError');
      const response = await chai.request(app).get('/matches');

      chai.expect(response.status).to.be.equal(500);
    });

    it('Retorna 404 quando o banco retorna uma lista vazia', async () => {
      sinon.stub(Match, 'findAll').resolves([]);
      const response = await chai.request(app).get('/matches');

      chai.expect(response.status).to.be.equal(404);
    });

    it('Retorna 200 quando o banco retorna uma lista de objetos', async () => {
      sinon.stub(Match, 'findAll').resolves([{} as any] );
      sinon.stub(new Matches().response = [], 'map').resolves([{inProgress: true}]);
      const response = await chai.request(app).get('/matches');
      chai.expect(response.body).to.contains.keys(['0']);
      chai.expect(response.status).to.be.equal(200);
    });
  });
});
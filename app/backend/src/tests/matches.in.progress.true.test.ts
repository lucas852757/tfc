import * as chai from "chai";
import * as sinon from 'sinon';
//@ts-ignore
import chaiHttp = require('chai-http');
import App from "../app";
import Match from "../database/models/MatchModel";

chai.use(chaiHttp);

const { app }  = new App();
describe('routes /matches', async () => {
  beforeEach(sinon.restore);
  describe('hes?inProgress=true/matc', () => {
    it('Retorna 500 quando o banco retorna um erro', async () => {
      sinon.stub(Match, 'findAll').rejects('bankError');
  
      const response = await chai.request(app)
      .get('/matches?inProgress=true');

      chai.expect(response.status).to.be.equal(500);
    });

    it('Retorna 404 quando o banco retona a lista vazia', async () => {
      sinon.stub(Match, 'findAll').resolves([]);
      const response = await chai.request(app)
      .get('/matches?inProgress=true');

      chai.expect(response.status).to.be.equal(404);
    });

    it('Retorna 200 quando o  banco retorna uma lista de objetos', async () => {
      sinon.stub(Match, 'findAll').resolves([{inProgress: true} as any]);

      const response = await chai.request(app)
      .get('/matches?inProgress=true');

      chai.expect(response.body).to.contains.keys(['0']);
      chai.expect(response.status).to.be.equal(200);
    });
  });
})

import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Match from '../database/models/MatchModel';

const { app } = new App();

chai.use(chaiHttp);

describe('routes /matches/:id', () => {
  beforeEach(sinon.restore);

  describe('Patch /matches/:id', () => {
    it('Retorna 500 quando o banco retorna um erro', async () => {
      sinon.stub(Match, 'update').rejects('bankError');

      const response = await chai.request(app)
      .patch('/matches/14')
      .send({
        homeTeamGoals: 3,
        awayTeamGoals: 1
      });

      chai.expect(response.status).to.be.equal(500);
    });

    /* it('Retorna 404 quando o id não existe no banco', async () => {
      sinon.stub(Match, 'update').resolves([0] as any);
      const response = await chai.request(app)
      .patch('matches/200')
      .send({
        homeTeamGoals: 3,
        awayTeamGoals: 1
      });

      chai.expect(response.status).to.be.equal(404);
    }); */
    it('Retorna 200 quando o banco retorna um array com o número de linhas atualizadas', async () => {
      sinon.stub(Match, 'update').resolves([1] as any);

      const response = await chai.request(app)
      .patch('/matches/14')
      .send({
        homeTeamGoals: 3,
        awayTeamGoals: 1
      }); 

      chai.expect(response.status).to.be.equal(200);
    });
  });
});
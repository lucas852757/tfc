import * as sinon from 'sinon';
import * as chai from 'chai'
//@ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';
import Team from '../database/models/TeamModel';

const { app} = new App();
chai.use(chaiHttp);

describe('route /leaderboard/home', () => {
  beforeEach(sinon.restore);

  describe('Get /leaderboard/home', () => {
    it('Retorna 500 quando o banco retorna um erro', async () => {
      sinon.stub(Team, 'findAll').rejects('bankError');
      const response = await chai.request(app).get('/leaderboard/home');

      chai.expect(response.status).to.be.equal(500);
    });
    it('Retorna 200 quando o banco retorna um resposta', async () => {
      sinon.stub(Team, 'findAll').resolves([{
        "id": 16,
        "teamName": "São Paulo",
        "teamHome": [
          {
            "id": 1,
            "homeTeam": 16,
            "homeTeamGoals": 1,
            "awayTeam": 8,
            "awayTeamGoals": 1,
            "inProgress": false
          },
          {
            "id": 28,
            "homeTeam": 16,
            "homeTeamGoals": 3,
            "awayTeam": 7,
            "awayTeamGoals": 0,
            "inProgress": false
          }
        ]
      }] as any);
      
      const response = await chai.request(app).get('/leaderboard/home');
      chai.expect(response.status).to.be.equal(200);
    });
  });
});
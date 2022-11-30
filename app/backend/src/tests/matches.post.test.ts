import * as sinon from 'sinon';
import * as chai from 'chai';

//@ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';

const { app } = new App();

chai.use(chaiHttp);

// Foram adicionados tokens nos testes,devido ao req27 que passou a exigir validação de token na rota /matches 
describe('routes /matches', () => {
  beforeEach(sinon.restore);

  describe('Post matches/', () => {

    it('Retorna 500 quando o banco retorna um erro', async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VyTmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjUyNDYzMDJ9.NcPTgNqxkyP3c2WBMvsMq5WxCuE16-NfTjxknyeXxW0';

      sinon.stub(Team, 'findAll').rejects('bankError');
      // sinon.stub(Match, 'create').rejects('BankError');
      const response = await chai.request(app)
      .post('/matches')
      .send({homeTeam: 16,
        awayTeam: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2,
        }).set('authorization', `${token}`);;

      chai.expect(response.status).to.be.equal(500);
    });

    it('Retorna 422 quando se tenta criar uma partida com o mesmo time', async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VyTmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjUyNDYzMDJ9.NcPTgNqxkyP3c2WBMvsMq5WxCuE16-NfTjxknyeXxW0';

      sinon.stub(new Error, 'message').resolves('It is not possible to create a match with two equal teams');
      
      const response = await chai.request(app)
      .post('/matches')
      .send({homeTeam: 16,
        awayTeam: 16,
        homeTeamGoals: 2,
        awayTeamGoals: 2,
        }).set('authorization', `${token}`);
      
        chai.expect(response.text).to.be.equal('{"message":"It is not possible to create a match with two equal teams"}');
        chai.expect(response.status).to.be.equal(422);
    });

    it ('Retorna 404 quando se tenta criar uma partida com um id inexistente', async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VyTmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjUyNDYzMDJ9.NcPTgNqxkyP3c2WBMvsMq5WxCuE16-NfTjxknyeXxW0';

      sinon.stub(Team, 'findAll').resolves([]);

      const response = await chai.request(app).post('/matches').send({homeTeam: 17,
        awayTeam: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2,})
        .set('authorization', `${token}`);

        chai.expect(response.text).to.be.equal('{"message":"There is no team with such id!"}');
        chai.expect(response.status).to.be.equal(404);
    })
    it('Retorna 201 quando os dados são cadastrados com sucesso', async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VyTmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2NjUyNDYzMDJ9.NcPTgNqxkyP3c2WBMvsMq5WxCuE16-NfTjxknyeXxW0';
      
      sinon.stub(Team, 'findAll').resolves([{id:16, teamName:'São Paulo'}, {id:2, teamName: 'Bahia'}] as any);
      sinon.stub(Match, 'create').resolves({
        id:1,
        homeTeam: 16,
        awayTeam: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2,
        inProgress: 1,
      } as any)
      const response = await chai.request(app)
      .post('/matches')
      .send({homeTeam: 16,
        awayTeam: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2,})
        .set('authorization', `${token}`);

      chai.expect(response.status).to.be.equal(201);
    });
  });
})
import Match from '../database/models/MatchModel';

class MatchPostService {
  public _response!: Match;

  public matchPost = async (
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
    const obj = {
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true,
    };
    this._response = await Match.create(obj);
    return this._response;
  };
}

export default MatchPostService;

import teamsNotEqual from '../solid/teamsNotEqual';
import Match from '../database/models/MatchModel';
import checkouId from '../solid/checkoutId';
import Team from '../database/models/TeamModel';

class MatchPostService {
  public _response!: Match;
  private _homeTeamAndAwayTeam!: Team[];

  public matchPost = async (
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
    const obj = {
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true,
    };

    teamsNotEqual(homeTeam, awayTeam);
    // Attention here
    this._homeTeamAndAwayTeam = await checkouId(homeTeam, awayTeam);

    if (this._homeTeamAndAwayTeam.length < 2) {
      const error = new Error('There is no team with such id!');
      error.name = 'notFoundError';
      throw error;
    }
    // If the teams are not equal, it's allright

    this._response = await Match.create(obj);
    return this._response;
  };
}

export default MatchPostService;

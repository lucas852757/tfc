import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';

class MatchService {
  private _response: Match[] = [];

  public match = async () => {
    this._response = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return this._response;
  };
}

export default MatchService;

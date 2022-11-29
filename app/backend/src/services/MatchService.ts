import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';
import filter from '../solid/choiceTrueOrFalse';

class MatchService {
  private _response: Match[] = [];

  public match = async (arg: string) => {
    this._response = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    if (!this._response.length) {
      const error = new Error('Not found error');
      error.name = 'notFoundError';
      throw error;
    }

    if (arg === 'true') {
      return filter(arg, this._response);
    }
    if (arg === 'false') {
      return filter(arg, this._response);
    }

    return this._response;
  };
}

export default MatchService;

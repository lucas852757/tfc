import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';
import filter from '../solid/choiceTrueOrFalse';

class MatchService {
  public response: Match[] = [];

  public match = async (arg: string) => {
    this.response = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    if (!this.response.length) {
      const error = new Error('Not found error');
      error.name = 'notFoundError';
      throw error;
    }

    if (arg === 'true') {
      return filter(arg, this.response);
    }
    if (arg === 'false') {
      return filter(arg, this.response);
    }

    return this.response;
  };
}

export default MatchService;

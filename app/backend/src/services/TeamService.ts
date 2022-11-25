import Team from '../database/models/TeamModel';

class TeamService {
  private _response: Team[] = [];

  public team = async () => {
    this._response = await Team.findAll();

    if (!this._response.length) {
      const error = new Error('Not found error');
      error.name = 'notFoundError';
      throw error;
    }
    return this._response;
  };
}

export default TeamService;

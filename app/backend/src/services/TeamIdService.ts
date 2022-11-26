import Team from '../database/models/TeamModel';

class TeamIdService {
  private _response: Team | null | undefined;

  public teamId = async (arg: number) => {
    this._response = await Team.findOne({ where: { id: arg } });

    if (this._response === null) {
      const error = new Error('Not found error');
      error.name = 'notFoundError';
      throw error;
    }

    return this._response;
  };
}

export default TeamIdService;

import Match from '../database/models/MatchModel';

class MatchesPatchIdFinishService {
  private _response!: unknown[];

  public matchesIdFinish = async (arg: number) => {
    this._response = await Match.update({ inProgress: false }, { where: { id: arg } });
    // Test
    if (!this._response[0]) {
      const error = new Error('Not found error');
      error.name = 'notFoundError';
      throw error;
    }

    return { message: 'Finish' };
  };
}

export default MatchesPatchIdFinishService;

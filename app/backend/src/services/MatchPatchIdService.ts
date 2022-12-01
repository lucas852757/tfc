/* source: https://sebhastian.com/sequelize-update-example/ */
import Match from '../database/models/MatchModel';

class MatchPatchIdService {
  private _response!: unknown[];

  public matchPatchId = async (arg1: number, object: object) => {
    this._response = await Match.update(
      object,
      { where: { id: arg1 } },
    );

   /*  if (!this._response[0]) {
      const error = new Error('Not found error');
      error.name = 'notFoundError';
      throw error;
    } */
    return this._response;
  };
}

export default MatchPatchIdService;

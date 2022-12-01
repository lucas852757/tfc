import { Request, Response, NextFunction } from 'express';

import MatchesPatchIdFinish from '../services/MatchesPatchIdFinishService';

class MatchesPatchIdFinishController {
  constructor(private matchesPatchIdFinish = new MatchesPatchIdFinish()) {}

  public matchesPatchId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this.matchesPatchIdFinish.matchesIdFinish(parseInt(id, 10));
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default MatchesPatchIdFinishController;

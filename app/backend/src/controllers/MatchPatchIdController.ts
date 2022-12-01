import { Request, Response, NextFunction } from 'express';
import MatchPatchIdService from '../services/MatchPatchIdService';

class MatchPatchIdController {
  constructor(private matchPatchIdController = new MatchPatchIdService()) {}

  public matchPatchId = async (req:Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const response = await this.matchPatchIdController.matchPatchId(
        parseInt(id, 10),
        body,
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default MatchPatchIdController;

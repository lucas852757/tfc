import { Request, Response, NextFunction } from 'express';
import MatchService from '../services/MatchService';

class MatchController {
  constructor(private matchService = new MatchService()) {}

  public match = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const { inProgress } = req.query;
      const response = await this.matchService.match(inProgress as string);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default MatchController;

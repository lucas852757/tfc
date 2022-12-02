import { Request, Response, NextFunction } from 'express';
import LeaderBoardHomeService from '../services/LeaderBoardHomeService';

class LeaderBoardHomeController {
  constructor(private leaderBoardHomeService = new LeaderBoardHomeService()) {}
  public leaderBoardHome = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.leaderBoardHomeService.leaderBoardHome();
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default LeaderBoardHomeController;

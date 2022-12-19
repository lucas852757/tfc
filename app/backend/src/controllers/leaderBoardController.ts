import { Response, Request, NextFunction } from 'express';
import LeaderBoardService from '../services/leaderBoardService';

class LeaderBoardController {
  constructor(private leaderBoardService = new LeaderBoardService()) {}
  public leaderBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.leaderBoardService.leaderBoardHome();
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default LeaderBoardController;

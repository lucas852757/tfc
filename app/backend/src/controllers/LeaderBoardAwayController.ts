import { Request, Response, NextFunction } from 'express';
import LeaderBoardAwayService from "../services/LeaderBoardAwayService";
 
class LeaderBoardAwayController {
  constructor(private leaderBoardAwayService = new LeaderBoardAwayService()) {}

  public leaderBoardAway = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.leaderBoardAwayService.leaderBoard();
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default LeaderBoardAwayController; 
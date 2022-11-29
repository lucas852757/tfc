import { Request, Response, NextFunction } from 'express';
import MatchPostService from '../services/MatchPostService';

class MatchPostController {
  constructor(private matchPostService = new MatchPostService()) {}

  public matchPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
      const response = await this.matchPostService
        .matchPost(homeTeam, awayTeam, homeTeamGoals, awayTeamGoals);
      return res.status(201).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default MatchPostController;

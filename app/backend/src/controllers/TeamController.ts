import { Request, Response, NextFunction } from 'express';
import TeamService from '../services/TeamService';

class TeamController {
  constructor(private teamService = new TeamService()) {}
  public team = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.teamService.team();
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default TeamController;

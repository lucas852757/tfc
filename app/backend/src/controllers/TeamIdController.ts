import { Request, Response, NextFunction } from 'express';
import TeamIdService from '../services/TeamIdService';

class TeamIdController {
  constructor(private teamIdService = new TeamIdService()) {}
  public teamId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this.teamIdService.teamId(parseInt(id, 10));
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default TeamIdController;

import { Request, Response, NextFunction } from 'express';
import MatchService from "../services/MatchService";
class MatchController {
  constructor( private matchService = new MatchService()){}

  public match = async (req:Request, res:Response, next:NextFunction) => {
    const response = await this.matchService.match();
    return res.status(200).json(response);

    
  }
}

export default MatchController;
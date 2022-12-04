import { Router } from 'express';
import LeaderBoardHomeController from '../controllers/LeaderBoardHomeController';

const leaderBoardHomeController = new LeaderBoardHomeController();
const route = Router();

route.get('/home', leaderBoardHomeController.leaderBoardHome);

export default route;

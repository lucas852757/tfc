import { Router } from 'express';
import LeaderBoardHomeController from '../controllers/LeaderBoardHomeController';
import LeaderBoardAwayController from '../controllers/LeaderBoardAwayController';

const leaderBoardHomeController = new LeaderBoardHomeController();
const leaderBoardAwayController = new LeaderBoardAwayController();
const route = Router();

route.get('/home', leaderBoardHomeController.leaderBoardHome);
route.get('/away', leaderBoardAwayController.leaderBoardAway);

export default route;

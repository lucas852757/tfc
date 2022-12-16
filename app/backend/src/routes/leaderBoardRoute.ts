import { Router } from 'express';
import LeaderBoardHomeController from '../controllers/LeaderBoardHomeController';
import LeaderBoardAwayController from '../controllers/LeaderBoardAwayController';
import LeaderBoardController from '../controllers/leaderBoardController';

const leaderBoardHomeController = new LeaderBoardHomeController();
const leaderBoardAwayController = new LeaderBoardAwayController();
const leaderBoardController = new LeaderBoardController();
const route = Router();

route.get('/home', leaderBoardHomeController.leaderBoardHome);
route.get('/away', leaderBoardAwayController.leaderBoardAway);
route.get('/', leaderBoardController.leaderBoard);

export default route;

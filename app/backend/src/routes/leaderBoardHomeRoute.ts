import { Router } from 'express';
import LeaderBoardHomeController from '../controllers/LeaderBoardHomeController';

const leaderBoardHomeController = new LeaderBoardHomeController();
const route = Router();

route.get('/', leaderBoardHomeController.leaderBoardHome);

export default route;

import { Router } from 'express';
import TeamController from '../controllers/TeamController';
import TeamIdController from '../controllers/TeamIdController';

const teamController = new TeamController();
const teamIdController = new TeamIdController();
const route = Router();

route.get('/:id', teamIdController.teamId);
route.get('/', teamController.team);

export default route;

import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamController = new TeamController();
const route = Router();

route.get('/', teamController.team);

export default route;

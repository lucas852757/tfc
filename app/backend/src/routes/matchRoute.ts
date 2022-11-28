import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchController = new MatchController();
const route = Router();

route.get('/', matchController.match);

export default route;

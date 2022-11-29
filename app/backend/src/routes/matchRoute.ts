import { Router } from 'express';
import MatchController from '../controllers/MatchController';
import MatchPostController from '../controllers/MatchPostController';

const matchController = new MatchController();
const matchPostController = new MatchPostController();
const route = Router();

route.post('/', matchPostController.matchPost);
route.get('/', matchController.match);

export default route;

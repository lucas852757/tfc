import { Router } from 'express';
import MatchController from '../controllers/MatchController';
import MatchPostController from '../controllers/MatchPostController';
import MatchesPatchIdController from '../controllers/MatchesPatchIdFinishController';
import validateToken from '../middlewares/validateToken';

const matchController = new MatchController();
const matchPostController = new MatchPostController();
const matchPatchIdController = new MatchesPatchIdController();
const route = Router();

route.post('/', validateToken, matchPostController.matchPost);
route.get('/', matchController.match);
route.patch('/:id/finish', matchPatchIdController.matchesPatchId);

export default route;

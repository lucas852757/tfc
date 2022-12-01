import { Router } from 'express';
import MatchController from '../controllers/MatchController';
import MatchPostController from '../controllers/MatchPostController';
import MatchesPatchIdFinishController from '../controllers/MatchesPatchIdFinishController';
import MatchPatchIdController from '../controllers/MatchPatchIdController';
import validateToken from '../middlewares/validateToken';

const matchController = new MatchController();
const matchPostController = new MatchPostController();
const matchPatchIdFinishController = new MatchesPatchIdFinishController();
const matchPatchId = new MatchPatchIdController();
const route = Router();

route.post('/', validateToken, matchPostController.matchPost);
route.get('/', matchController.match);
route.patch('/:id/finish', matchPatchIdFinishController.matchesPatchId);
route.patch('/:id', matchPatchId.matchPatchId);
export default route;

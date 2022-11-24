import { Router } from 'express';
import validateEmailAndUser from '../middlewares/validateEmailAndUser';

import LoginController from '../controllers/LoginController';
import validate from '../middlewares/validate';

const loginController = new LoginController();
const route = Router();

route.get('/validate', validate);
route.post('/', validateEmailAndUser, loginController.login);

export default route;

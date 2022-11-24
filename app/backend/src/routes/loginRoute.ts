import { Router } from 'express';
import validateEmailAndUser from '../middlewares/validateEmailAndUserts';

import LoginController from '../controllers/LoginController';

const loginController = new LoginController();
const route = Router();

route.post('/', validateEmailAndUser, loginController.login);

export default route;

import { Router } from 'express';
import validate from '../middlewares/validate';

import LoginController from '../controllers/LoginController';

const loginController = new LoginController();
const route = Router();

route.post('/', validate, loginController.login);

export default route;

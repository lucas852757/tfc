import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginController = new LoginController();
const route = Router();

route.post('/', loginController.login);

export default route;

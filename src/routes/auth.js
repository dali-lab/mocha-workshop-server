import { Router } from 'express';
import * as AuthController from '../controllers/auth_controller';
import { requireSignin } from '../authentication/init';

const authRouter = Router();

authRouter.post('/signin', requireSignin, AuthController.signin);
authRouter.post('/signup', AuthController.signup);

export default authRouter;

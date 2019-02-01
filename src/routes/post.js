import { Router } from 'express';
import * as UserController from '../controllers/user_controller';
import { requireSignin } from '../authentication/init';

const postRouter = Router();

// Write routes here

export default postRouter;

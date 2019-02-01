import { Router } from 'express';
import UserController from '../controllers/user_controller';

const userRouter = Router();

userRouter.post('/update', (req, res, next) => {
    UserController.updateUser(req.user.id, req.body).then((user) => {
        res.status(200).send(user);
    });
});

export default userRouter;

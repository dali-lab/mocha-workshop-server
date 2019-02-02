import { Router } from 'express';
import UserController from '../controllers/user_controller';

const userRouter = Router();

userRouter.post('/update', (req, res, next) => {
    UserController.updateUser(req.user.id, req.body).then((user) => {
        const json = user.toJSON();
        delete json.password;
        res.status(200).send(json);
    }).catch((err) => {
        next(err);
    });
});

export default userRouter;

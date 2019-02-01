import { Router } from 'express';
import * as PostController from '../controllers/post_controller';

const postRouter = Router();

authRouter.get('/getPosts', PostController.getAllPosts);
authRouter.get('/getPost/:id', PostController.getPost);

authRouter.post('/updatePost', PostController.updatePost);
authRouter.post('/addPost', PostController.createPost);

authRouter.post('/upvote/:id', PostController.upvote);
authRouter.post('/downvote/:id', PostController.downvote);

export default postRouter;

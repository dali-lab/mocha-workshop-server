import { Router } from 'express';
import * as PostController from '../controllers/post_controller';

const postRouter = Router();

postRouter.get('/getPosts', PostController.getAllPosts);
postRouter.get('/getPost/:id', PostController.getPost);

postRouter.post('/updatePost', PostController.updatePost);
postRouter.post('/addPost', PostController.createPost);

postRouter.post('/upvote/:id', PostController.upvote);
postRouter.post('/downvote/:id', PostController.downvote);

export default postRouter;

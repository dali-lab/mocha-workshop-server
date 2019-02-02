import { Router } from 'express';
import PostController from '../controllers/post_controller';

const postRouter = Router();

postRouter.get('/getPosts', (req, res) => {
  PostController.getAllPosts().then((posts) => {
    res.status(200).send(posts);
  })
});

postRouter.get('/getPost/:id', (req, res) => {
  console.log(req);
  PostController.getPost(req.params.id).then((post) => {
    res.status(200).send(post);
  });
});

postRouter.post('/updatePost/:id', (req, res) => {
  PostController.updatePost(req.params.id, Object.assign(req.body, { author: req.user._id }))
  .then((response) => {
    res.status(200).send('Post updated');
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});

postRouter.post('/addPost', (req, res) => {
  PostController.createPost(Object.assign(req.body, { author: req.user._id }))
  .then((response) => {
    res.status(200).send('Post created');
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});

postRouter.post('/upvote/:id', (req, res) => {
  PostController.upvote(req.params.id)
  .then((response) => {
    res.status(200).send('Upvoted post');
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});

postRouter.post('/downvote/:id', (req, res) => {
  PostController.downvote(req.params.id)
  .then((response) => {
    res.status(200).send('Downvoted post');
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});

export default postRouter;

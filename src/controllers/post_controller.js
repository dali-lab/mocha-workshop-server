import Post from '../models/post';


const PostController = {};

export const createPost = (data) => {
  let newPost = new Post({ title: data.title, body: data.body, author: data.author });
  newPost.save((err, post) => {
    if (err) console.log("Error with positing");
    return post.id;
  })
}

export const updatePost = (data) => {
  Post.findById(data.id).then((res) => {
    res.title = data.title;
    res.body = data.body;
    res.author = data.author;
  })
}

export const getPost = (id) => {
  Post.findById(id).then((res) => {
    return res;
  })
}

export const getAllPosts = () => {
  Post.find().then((res) => {
    return res;
  })
}

export const upvote = (id) => {
  Post.findById(id).then((res) => {
    let upvotes = res.upvotes;
    res.upvotes = upvotes + 1;
    res.save();
  })
}

export const downvote = (id) => {
  Post.findById(id).then((res) => {
    let upvotes = res.upvotes;
    res.upvotes = upvotes - 1;
    res.save();
  })
}

export default PostController;

import Post from '../models/post';

const createPost = (data) => {
    const newPost = new Post({ title: data.title, body: data.body, author: data.author });
    return newPost.save();
};

const updatePost = (id, data) => {
    return new Promise((resolve, reject) => {
        Post.findById(id).then((res) => {
            res.title = data.title;
            res.body = data.body;
            res.author = data.author;
            resolve(res.save());
        });
    });
};

const getPost = (id) => {
    return Post.findById(id);
};

const getAllPosts = () => {
    return Post.find();
};

const upvote = (id) => {
    return new Promise((resolve, reject) => {
        Post.findById(id).then((res) => {
            const upvotes = res.upvotes;
            res.upvotes = upvotes + 1;
            resolve(res.save());
        });
    });
};

const downvote = (id) => {
    return new Promise((resolve, reject) => {
        Post.findById(id).then((res) => {
            const upvotes = res.upvotes;
            res.upvotes = upvotes - 1;
            resolve(res.save());
        });
    });
};

const PostController = {
    createPost,
    updatePost,
    getPost,
    getAllPosts,
    upvote,
    downvote,
};

export default PostController;

import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    picture: { type: String },
    upvotes: { type: Number, default: 0 },
});

// create model class
const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;

import mongoose, { Schema } from 'mongoose';
import UserModel from './user';

const PostSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: UserModel, required: true },
    picture: { type: String },
    upvotes: { type: Number, default: 0 }
});

// create model class
const PostModel = mongoose.model('Plan', PlanSchema);

export default PostModel;

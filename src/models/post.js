import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    // make posts schema
});

// create model class
const PostModel = mongoose.model('Plan', PlanSchema);

export default PostModel;

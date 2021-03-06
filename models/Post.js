const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: String,
    area: String,
    description: String,
    city: String,
    country: String,
    like: Number,
    dislike: Number,
    visitDate: String,
    comments: [{
        name: String,
        text: String,
    }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post
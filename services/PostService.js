const Post = require('../models/Post.js');

module.exports = {
    fetchPosts: async () => {
        const posts = await Post.find();
        for (i = 0; i < posts.length; i++) {
            posts[i].__v = undefined;
        }
        return posts;
    },
    addPost: async (data, id) => {
        const post = new Post(data);
        post.owner = id;
        return await post.save();
    },
    updatePost: async (data, id) => {
        const post = await Post.findOne({ _id: id });
        post.overwrite(data);
        await post.save();
    }
}
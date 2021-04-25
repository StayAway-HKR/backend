const Post = require('../models/Post.js');

module.exports = {
    fetchPosts: async () => {
        const posts = await Post.find();
        for (i = 0; i < posts.length; i++) {
            posts[i].__v = undefined;
        }
        return posts;
    }

}
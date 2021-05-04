const express = require('express');
const router = express.Router();
const postService = require('../services/PostService.js');

router.get('/api/fetchposts', sendPosts, async (req, res) => { });
router.post('/api/addpost', addPost, async (req, res) => { });

async function sendPosts(req, res) {
    try {
        const posts = await postService.fetchPosts();
        res.status(200).send(posts);
    } catch (err) {
        res.status(400);
    }
}

//JWT to be added later
async function addPost(req, res) {
    try {
        if (req.body.postData == null) {
            return res.status(400).send("The post information in the body is miising");
        }
        const post = req.body.postData;
        const ownerId = req.body.postData.id;
        post.id = undefined;
        await postService.addPost(post, ownerId);
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send("Make sure that your request is correct");
    }
}



module.exports = router;
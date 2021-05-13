const express = require('express');
const router = express.Router();
const postService = require('../services/PostService.js');

router.get('/api/fetchposts', sendPosts, async (req, res) => { });
router.post('/api/addpost', addPost, async (req, res) => { });
router.post('/api/updatepost', updatePost, async (req, res) => { });

async function sendPosts(req, res) {
    try {
        const posts = await postService.fetchPosts();
        res.status(200).send(posts);
    } catch (err) {
        res.status(400);
    }
}

async function addPost(req, res) {
    try {
        if (req.body.postData == null) {
            return res.status(400).send("The post information in the body is missing");
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

async function updatePost(req, res) {
    const data = req.body.data;
    try {
        if (data == null || data == undefined) {
            return res.status(400).send("The post information in the body is missing");
        }
        const id = data.id;
        await postService.updatePost(data, id);
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send("Make sure that your request is correct");
    }
}

module.exports = router;
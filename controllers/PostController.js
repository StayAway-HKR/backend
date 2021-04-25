const express = require('express');
const router = express.Router();
const postService = require('../services/PostService.js');


router.get('/api/fetchposts', sendPosts, async (req, res) => { });

async function sendPosts(req, res) {
    try {
        const posts = await postService.fetchPosts();
        res.status(200).send(posts);
    } catch (err) {
        res.status(400);
    }
}



module.exports = router;
const express = require('express');
const router = express.Router();
const userService = require("../services/UserService.js");
const bcrypt = require("bcrypt");

router.post('/api/login', authUser, async (req, res) => { });
router.post('/api/register', signUp, async (req, res) => { });

async function authUser(req, res) {
    const user = await userService.fetchUserObject({ email: req.body.payload.email });
    if (user == null) {
        res.status(401).send("Invalid email and password");
    }
    try {
        const result = await bcrypt.compare(req.body.payload.password, user.password);
        if (result) {
            res.status(200).send({ userName: user.userName, id: user._id });
        } else {
            res.status(401).send("Invalid email and password");
        }
    } catch {
        res.status(401).send("Invalid email and password");
    }
}

async function signUp(req, res) {
    if (req.body.password == null ||
         req.body.email == null ||
         req.body.userName == null) {
        return res.status(400).send("Some information are missing");
    }
    const email = await userService.fetchUserObject({ email: req.body.email });
    if (email != null) {
        return res.status(400).send("The email " + req.body.email + " is unavailable");
    }
    try {
        const password = await bcrypt.hash(req.body.password, 10);
        const user = {
            email: req.body.email,
            password: password,
            userName: req.body.userName
        }
        await userService.saveNewUser(user);
        res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send("Make sure that your request is correct");
    }
}

module.exports = router;
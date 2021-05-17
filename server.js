require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const SERVER_PORT = 3000;
const UserController = require('./controllers/UserController.js');
const PostController = require('./controllers/PostController.js');

const dbURL = "mongodb+srv://" + "hkr" + ":" + "hkr1234" +
    "@cluster0.j049z.mongodb.net/stay-away?retryWrites=true&w=majority";

mongoose.connect(dbURL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .catch((err) => console.log(err));


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(UserController);
app.use(PostController);

app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log("Server listening on port: " + SERVER_PORT);
})

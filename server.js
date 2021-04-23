require("dotenv").config();
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const app = express();


const dbURL = "mongodb+srv://" + process.env.db_username + ":" + process.env.db_password +
    "@cluster0.j049z.mongodb.net/stay-away?retryWrites=true&w=majority";

mongoose.connect(dbURL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .catch((err) => console.log(err));



app.use(cors());
app.listen(process.env.serverPort);
"use strict";

const express = require("express");
const app = express();
const questions = require("./routes/questions.routes.js");
const scores = require("./routes/scores.routes.js");

app.use(express.static("./public"))
app.use(express.json());
app.use("/", questions);
app.use("/", scores);

app.listen(8080, () => {
    console.log("server is Running!");
})
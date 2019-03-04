"use strict";

// Contains an endpoint to GET the list of questions from
// the database and sends them to the front-end.

const express = require("express");
const questions = express.Router();

const pool = require("./connection");

function selectAll(req, res){
    pool.query("select * from questionlist order by random() limit 5").then(function(result){
        res.send(result.rows);
    })
}

questions.get("/questions", function(req, res){
    selectAll(req, res);
})








module.exports = questions;


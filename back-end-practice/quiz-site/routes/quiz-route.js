const express = require('express');
const Quiz = require('../models/quizes');
const authenticateUser = require('../middleware/auth-mw');
const router = express.Router();

const res = Quiz.generateQuestion();
const question = res[0];
const answer = res[1];

let recievedQuestion = false;

router.get('/new', authenticateUser, (req, res, next) => {
    recievedQuestion = true;
    res.json(question);
});

router.post('/answer', authenticateUser, (req, res, next) => {
    if (recievedQuestion === false) res.send('please generate new question !');
    else {
        const givenAnswer = req.body.answer;
        if (givenAnswer === answer) res.send('you correct !');
        else res.json('wrong answer !');
        console.log(givenAnswer);
    }
});

module.exports = router;

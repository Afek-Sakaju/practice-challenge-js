const express = require('express');
const router = express.Router();
const passport = require('passport');
const checkAuthenticated = require('../middleware/auth-middleware');
const UserModel = require('../models/user-model');
let users = require('../app'); //im not sure how
//it will affect the procces of the app, because it first
//initialized in app.js

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/recipt',
        failureRedirect: '/login',
        // session: false
    })
);

router.post('/register/:userName', (req, res, next) => {
    users.push(new UserModel(req.params.userName));
});

router.post('/logout', checkAuthenticated, (req, res, next) => {
    res.send('bye-bye');
});

module.exports = router;

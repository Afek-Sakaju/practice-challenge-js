const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
const checkAuthenticated = require('../middleware/auth-middleware');
const UserModel = require('../models/user-model');
const users = require('../data/users-data');

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/recipt',
        failureRedirect: '/login',
        // session: false
    })
);

router.use((req, res, next) => {
    console.log(`user visit from url:${req.originalUrl}`);
    next();
});

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public/login.html'));
});

router.post('/register/:userName', (req, res, next) => {
    users.push(new UserModel(req.params.userName));
});

router.post('/logout', checkAuthenticated, (req, res, next) => {
    res.send('bye-bye');
});

router.get('/health', (req, res, next) => {
    res.send('Alive');
});

router.get('/', (req, res) => {
    res.send('This URL does not return data !');
}); //not sure if its relevant

module.exports = router;

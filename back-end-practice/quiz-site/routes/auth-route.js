const passport = require('passport');
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
});

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: 'https://www.google.com',
    })
);

module.exports = router;

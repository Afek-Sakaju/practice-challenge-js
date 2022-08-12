const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/recipe',
        failureRedirect: '/e404.html',
    })
);

module.exports = router;

const express = require('express');
const logAPI = require('../middleware/logAPI');
const { passport } = require('passport');
const { isAuthenticatedUser } = require('../middleware/auth.middleware');
const { registerUserCtrl,logoutUserCtrl } = require('../controllers/auth.controller');

router.use(logAPI);

router.post('/login', passport.authenticate('local',{
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    // session: false
}));

router.post('/register', registerUserCtrl);

router.post('/logout/:userId', isAuthenticatedUser,logoutUserCtrl);

module.exports = router;
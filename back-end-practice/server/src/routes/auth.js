const express = require('express');
const logAPI = require('../middleware/logAPI');
const { passport } = require('passport');
const { isAuthenticatedUser } = require('../middleware/auth.middleware');
const { registerUserCtrl,logoutUserCtrl } = require('../controllers/auth.controller');

router.use(logAPI);

router.post('/login', (req, res, next) => {
    res.send('OK');
});

router.post('/register', registerUserCtrl);

router.post('/logout/:userId', isAuthenticatedUser,logoutUserCtrl);

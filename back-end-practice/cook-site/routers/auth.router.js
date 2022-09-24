const express = require('express');
const passport = require('passport');
const {
    registerUserCtrl,
    updateUserDataCtrl,
} = require('../controllers/users.controller');
const { isAuthenticatedMW } = require('../middleware/auth-middleware');

const router = express.Router();

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/auth/success',
        failureRedirect: '/e404.html',
    })
);

router.get('/success', isAuthenticatedMW, (req, res, next) => {
    res.redirect('home.jpg');
});

router.post('/register', registerUserCtrl);

router.put('/update', updateUserDataCtrl);

module.exports = router;

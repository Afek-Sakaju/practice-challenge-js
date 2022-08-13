const express = require('express');
const {
    loginRedirectCtrl,
    successLoginCtrl,
} = require('../controllers/auth.controller');
const { isAuthenticatedMW } = require('../middleware/auth-middleware');

const router = express.Router();

router.post('/login', loginRedirectCtrl);

router.get('/success', isAuthenticatedMW, successLoginCtrl);

module.exports = router;

const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Welcome to my quiz');
});

router.get('/health', (req, res, next) => {
    res.send('Server is ok');
});

router.get('/login', (req, res, next) => {
    res.sendFile(
        path.join(__dirname, '../../', '/mini-lite-client/login.html')
    );
});

router.get('/dashboard', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../', '/static/index.html'));
});

module.exports = router;

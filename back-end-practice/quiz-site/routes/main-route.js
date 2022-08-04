const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Welcome to my quiz');
});

router.get('/health', (req, res, next) => {
    res.send('Server is ok');
});

module.exports = router;

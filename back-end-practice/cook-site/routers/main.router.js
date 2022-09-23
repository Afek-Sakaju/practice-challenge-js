const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(`user visit from url:${req.originalUrl}`);
    next();
});

router.get('/health', (req, res, next) => {
    res.send('server is alive');
});

module.exports = router;

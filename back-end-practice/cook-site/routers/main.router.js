const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(`user visit from url:${req.originalUrl}`);
    next();
});

router.get('/health', (req, res, next) => {
    res.redirect('https://youtu.be/t2NgsJrrAyM?t=101');
});

module.exports = router;

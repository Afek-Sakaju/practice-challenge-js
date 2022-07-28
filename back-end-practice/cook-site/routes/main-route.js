const express = require('express');
const router = express.Router();
const diary = require('./diary-recipes');
const meaty = require('./meaty-recipes');

router.use((req, res, next) => {
    console.log(`user visit from url:${req.originalUrl}`)
    next();
});

router.use('/meaty',meaty);

router.use('/diary',diary);

router.get('/health', (req, res, next) => {
    res.send('Alive');
});

router.get('/',(req, res) => {
        res.send('This URL does not return data !');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const recipesListRoute = require('./recipes-list-route');

router.use((req, res, next) => {
    console.log(`user visit from url:${req.originalUrl}`)
    next();
});

router.use('/recipe',recipesListRoute);

router.get('/health', (req, res, next) => {
    res.send('Alive');
});

/* router.get('/',(req, res) => {
        res.send('This URL does not return data !');
}); *///not sure if its relevant

module.exports = router;
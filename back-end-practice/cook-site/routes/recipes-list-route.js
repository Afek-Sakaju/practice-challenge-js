const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe-model');
require('../databases/recipes-database');

router.get('/mac-and-cheese',(req, res, next) => {
    res.send(Recipe.getRecipeByName(macAndCheese));
});

router.get('/pasta-bolonez',(req, res, next) => {
    res.send(Recipe.getRecipeByName(pastaBolonez));
});

module.exports = router;
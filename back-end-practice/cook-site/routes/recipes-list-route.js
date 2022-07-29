const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe-model');

const pastaBolonez = new Recipe(
    'pasta-bolonez',
    ['pasta', 'meat', 'tomato sauce', 'salt', 'chilli'],
    '02:00',
    'hard'
);

const macAndCheese = new Recipe(
    'mac-and-cheest',
    ['pasta', 'cheese', 'mushrooms', 'salt', 'pepper'],
    '01:15',
    'medium'
);

const pizza = new Recipe(
    'pizza',
    ['white bread', 'chedder cheese', 'tomato sauce', 'salt'],
    '00:45',
    'easy'
);

router.route('/mac-and-cheese').get((req, res, next) => {
    res.json(Recipe.getRecipeByName(macAndCheese));
});

router.route('/pasta-bolonez').get((req, res, next) => {
    res.json(Recipe.getRecipeByName(pastaBolonez));
});

router.route('/pizza').get((req, res, next) => {
    res.json(Recipe.getRecipeByName(pizza));
});

module.exports = router;

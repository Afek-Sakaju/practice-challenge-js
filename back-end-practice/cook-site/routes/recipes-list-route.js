const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe-model');
let givenRecipe;

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

router.route('/new/:recipeName').put((req, res, next) => {
    const strRecipe = req.body;
    /* todo : 
        1) create new recipt from recieved str
        with filtering, example: "ingridients:1,2,3"...
        given recipe.ingridients = [1,2,3]
        2) put it in exsiting variable "givenRecipe" */
    console.log('hello' + req.params.recipeName);
    givenRecipe = new Recipe(req.params.recipeName);
    next();
});

router.route('/:any').get((req, res, next) => {
    if (givenRecipe && req.params.any === givenRecipe.recipeName) {
        res.json(givenRecipe.toString());
    } else res.sendStatus('404');
});

module.exports = router;

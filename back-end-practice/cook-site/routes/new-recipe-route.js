const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe-model');
let givenRecipe;

router.route('/:recipeName').put((req, res, next) => {
    const strRecipe = req.body;
    res.json('hey' + strRecipe);
    //const newRecipe = new Recipe(req.params.recipeName,req.body);
});

module.exports = router;

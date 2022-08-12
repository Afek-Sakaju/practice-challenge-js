const express = require('express');
const {
    getRecipeByNameCtrl,
    sendAllRecipesCtrl,
    filteredRecipeListCtrl,
} = require('../controllers/recipes.controller');
const { isAuthenticatedMW } = require('../middleware/auth-middleware');

const router = express.Router();

router.get('/:recipeName', getRecipeByNameCtrl);

router.get('/all', isAuthenticatedMW, sendAllRecipesCtrl);

router.get('/', filteredRecipeListCtrl); //(by query string)

router.route('/new/:recipeName').put((req, res, next) => {
    const strRecipe = req.body;
    /* todo : 
        1) create new recipt from recieved str
        with filtering, example: "ingridients:1,2,3"...
        given recipe.ingridients = [1,2,3]
        2) put it in exsiting variable "givenRecipe" */
    console.log('hello' + req.params.recipeName);
    createdRecipes.push(new Recipe(req.params.recipeName));
    next();
});

//change me
router.route('/:any').get((req, res, next) => {
    const check = existanceCheck(req.params.any, createdRecipes);
    if (check !== false) {
        res.json(createdRecipes[check].toString());
    } else res.sendStatus('404');
});

module.exports = router;

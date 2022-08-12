const express = require('express');
const {
    getRecipeByNameCtrl,
    sendAllRecipesCtrl,
    filteredRecipeListCtrl,
    createRecipeCtrl,
} = require('../controllers/recipes.controller');
const { isAuthenticatedMW } = require('../middleware/auth-middleware');

const router = express.Router();

router.get('/:recipeName', getRecipeByNameCtrl);

router.get('/all', isAuthenticatedMW, sendAllRecipesCtrl);

router.get('/', filteredRecipeListCtrl); //(by query string)

router.post('/new-recipe', createRecipeCtrl);

module.exports = router;

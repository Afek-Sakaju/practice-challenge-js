const express = require('express');
const {
    getRecipeByNameCtrl,
    deleteRecipeCtrl,
    sendAllRecipesCtrl,
    filteredRecipeListCtrl,
    createRecipeCtrl,
} = require('../controllers/recipes.controller');
const { isAuthenticatedMW } = require('../middleware/auth-middleware');

const router = express.Router();

router.get('/all', isAuthenticatedMW, sendAllRecipesCtrl);

router.get('/', filteredRecipeListCtrl); //(by query string)

router.post('/new-recipe', isAuthenticatedMW, createRecipeCtrl);

router
    .route('/:recipeName')
    .get(getRecipeByNameCtrl)
    .delete(isAuthenticatedMW, deleteRecipeCtrl);

module.exports = router;

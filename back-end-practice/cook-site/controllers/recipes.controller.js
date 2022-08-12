const fs = require('fs');
const path = require('path');
const recipesList = require('../mocks/RECIPES.mock.json');
const recipesPath = path.join(__dirname, '..', 'mocks', 'RECIPES.mock.json');

module.exports.getRecipeByNameCtrl = (req, res, next) => {
    const recipeName = req.params.recipeName;
    const recipe = recipesList.find((r) => r.name === recipeName);

    res.json(recipe);
};

module.exports.sendAllRecipesCtrl = (req, res, next) => {
    res.json(recipesList);
};

module.exports.filteredRecipeListCtrl = (req, res, next) => {
    //localhost:3000/recipe?name=spaghetti&difficulityLevel=easy
    //{name: 'spaghetti', difficulityLevel: 'easy'}

    const { name, ingredients, cookingTime, difficulityLevel } = req.query;

    const filteredlist = recipesList.filter((recipe) => {
        if (name !== undefined && recipe.name !== name) return false;
        if (ingredients !== undefined && recipe.ingredients !== ingredients) {
            return false;
        }
        if (cookingTime !== undefined && recipe.cookingTime !== cookingTime) {
            return false;
        }
        if (
            difficulityLevel !== undefined &&
            recipe.difficulityLevel !== difficulityLevel
        ) {
            return false;
        }
        return true;
    });

    res.json(filteredlist);
};

module.exports.createRecipeCtrl = async function (req, res, next) {
    const newRecipe = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        cookingTime: req.body.cookingTime ?? 'unknown',
        difficulityLevel: req.body.difficulityLevel ?? 'unknown',
    };

    if (newRecipe.name === undefined || newRecipe.ingredients === undefined) {
        return res.status(406).send(`missing recipe's name\\ingredients`);
    }

    recipesList.push(newRecipe);

    fs.writeFileSync(recipesPath, JSON.stringify(recipesList), {
        encoding: 'utf8',
    });

    res.sendStatues(201);
};

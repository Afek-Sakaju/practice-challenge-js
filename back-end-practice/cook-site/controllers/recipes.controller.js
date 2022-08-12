const recipesList = require('../mocks/RECIPES.mock.json');

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

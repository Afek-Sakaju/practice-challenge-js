const {
    createRecipe,
    findRecipeByName,
    deleteRecipe,
    findAllRecipe,
} = require('../services/recipes.services');

module.exports.getRecipeByNameCtrl = (req, res, next) => {
    const recipe = findRecipeByName(req.params.recipeName);

    res.status(200).json(recipe);
    console.log('recipe found by name');
};

module.exports.createRecipeCtrl = (req, res, next) => {
    const recipe = {
        name: req.body.name,
        cookingTime: req.body.cookingTime,
        ingredients: req.body.ingredients,
        cookingTime: req.body.cookingTime,
        difficulityLevel: req.body.difficulityLevel,
    };

    const result = createRecipe(recipe);
    res.sendStatus(result ? 200 : 400);
};

module.exports.deleteRecipeByNameCtrl = (req, res, next) => {
    const status = deleteRecipe(req.params.recipeName) ? 200 : 400;

    res.sendStatus(status);
};

module.exports.deleteRecipeCtrlOld = (req, res, next) => {
    const recipeName = req.params.recipeName;
    const recipeIndex = recipesList.findIndex((r) => r.name === recipeName);

    if (typeof recipeIndex !== 'number') {
        return res.status(400).send('recipe has not found');
    }

    recipesList.splice(recipeIndex, 1);

    fs.writeFileSync(recipesPath, JSON.stringify(recipesList), {
        encoding: 'utf8',
    });

    res.sendStatus(200);
    //RecipeModel.collection.deleteOne({ name: 'green-salad' });
};

module.exports.sendAllRecipesCtrl = (req, res, next) => {
    res.json(findAllRecipe());
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

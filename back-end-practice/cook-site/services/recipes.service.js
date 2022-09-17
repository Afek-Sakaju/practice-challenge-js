const { RecipeModel } = require('../models/recipe.model');

module.exports.findRecipeByName = async (recipeName) => {
    const recipe = await RecipeModel.findOne({
        name: recipeName,
    }).exec();

    return recipe;
};

module.exports.createRecipe = async (recipe) => {
    return new RecipeModel(recipe).save();
};

module.exports.deleteRecipe = async function (recipeName) {
    const { deletedCount } = await RecipeModel.deleteOne({
        name: recipeName,
    });

    return deletedCount === 1;
    // supposed to return "true"
};

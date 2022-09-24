const { RecipeModel } = require('../models/recipe.model');

module.exports.findRecipeByName = async (recipeName) => {
    const recipe = await RecipeModel.findOne({
        name: recipeName,
    }).exec();

    return recipe;
};

module.exports.findAllRecipe = async () => {
    return RecipeModel.find({});
};

module.exports.createRecipe = async (recipe) => {
    // fix this when you create existing recipe error
    const result = await new RecipeModel(recipe).save();

    return result;
};

module.exports.deleteRecipe = async function (recipeName) {
    const { deletedCount } = await RecipeModel.deleteOne({
        name: recipeName,
    });

    return deletedCount === 1;
    // supposed to return "true"
};

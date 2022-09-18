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
    await new RecipeModel(recipe)
        .save()
        .then(() => {
            console.log('recipe created in DB');
            return 201;
        })
        .catch((err) => {
            console.log(`recipe creation failed, error: ${err}`);
            return 400;
        });
};

module.exports.deleteRecipe = async function (recipeName) {
    const { deletedCount } = await RecipeModel.deleteOne({
        name: recipeName,
    });

    return deletedCount === 1;
    // supposed to return "true"
};

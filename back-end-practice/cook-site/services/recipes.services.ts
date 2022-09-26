import { RecipeModel } from '../models/recipe.model';
import { IRecipe } from '../interfaces/recipe.interface';

export const findRecipeByName = async (recipeName: string) => {
    const recipe = await RecipeModel.findOne({
        name: recipeName,
    }).exec();

    return recipe;
};

export const findAllRecipe = async () => {
    return await RecipeModel.find({});
};

export const createRecipe = async (recipe: IRecipe) => {
    // fix this when you create existing recipe error
    const result = await new RecipeModel(recipe).save().catch((err: Error) => {
        console.log(err);
    });

    return result;
};

export const deleteRecipe = async function (recipeName: string) {
    const { deletedCount } = await RecipeModel.deleteOne({
        name: recipeName,
    });

    return deletedCount === 1;
    // supposed to return "true"
};

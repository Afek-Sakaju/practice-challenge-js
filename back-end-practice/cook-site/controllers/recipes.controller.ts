import { Request, Response, NextFunction } from 'express';

import { IRecipe } from '../interfaces/recipe.interface';
import {
    createRecipe,
    findRecipeByName,
    deleteRecipe,
    findAllRecipe,
} from '../services/recipes.services';

export const getRecipeByNameCtrl = async (
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    const recipe = await findRecipeByName(req.params.recipeName);

    res.status(200).json(recipe);
};

export const createRecipeCtrl = async (
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    const recipe: IRecipe = {
        name: req.body.name,
        creator: req.body.creator,
        ingredients: req.body.ingredients,
        cookingTime: req.body.cookingTime,
        difficulityLevel: req.body.difficulityLevel,
    };

    const result = await createRecipe(recipe);

    res.sendStatus(result ? 200 : 400);
};

export const deleteRecipeByNameCtrl = async (
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    const status = (await deleteRecipe(req.params.recipeName)) ? 200 : 400;

    res.sendStatus(status);
};

export const sendAllRecipesCtrl = async (
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    const allRecipes = await findAllRecipe();

    res.json(allRecipes);
};

export const filteredRecipeListCtrlOld = async (
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    //to do :aggregate
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

const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const recipesList = require('../mocks/RECIPES.mock.json');
const recipesPath = path.join(__dirname, '..', 'mocks', 'RECIPES.mock.json');
const { RecipeModel } = require('../models/recipe.model');

const connectToDB = async function () {
    console.log('connecting to DB...');

    await mongoose.connect('mongodb://127.0.0.1:27017/cook-site');

    const logMessage = mongoose.connection.readyState
        ? 'connection success'
        : 'connection failed';

    console.log(logMessage);
};

module.exports.getRecipeByNameCtrl = (req, res, next) => {
    connectToDB().then(async () => {
        const recipeName = req.params.recipeName;

        const recipe = await RecipeModel.findOne({
            name: recipeName,
        }).exec();
        res.status(200).json(recipe);
        console.log('recipe found by name');
    });
};

module.exports.getRecipeByNameCtrlOld = (req, res, next) => {
    const recipeName = req.params.recipeName;

    const recipe = recipesList.find((r) => r.name === recipeName);

    if (!recipe) return res.status(400).send('recipe has not found');

    res.json(recipe);
};

module.exports.createRecipeCtrl = (req, res, next) => {
    connectToDB()
        .then(async () => {
            return new RecipeModel({
                name: req.body.name,
                ingredients: req.body.ingredients,
                cookingTime: req.body.cookingTime,
                difficulityLevel: req.body.difficulityLevel,
            }).save();
        })
        .then(() => {
            console.log('recipe created in DB');
            res.sendStatus(201);
        });
};

module.exports.deleteRecipeCtrl = (req, res, next) => {
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

module.exports.createRecipeCtrlOld = async function (req, res, next) {
    const newRecipe = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        cookingTime: req.body.cookingTime ?? 'unknown',
        difficulityLevel: req.body.difficulityLevel ?? 'unknown',
    };

    if (newRecipe.name === undefined || newRecipe.ingredients === undefined) {
        return res.status(406).send(`missing recipe's name\\ingredients`);
    }

    if (recipesList.some((r) => r.name === newRecipe.name)) {
        return res
            .status(400)
            .send(`the recipe: ${newRecipe.name} already exist`);
    }

    recipesList.push(newRecipe);

    fs.writeFileSync(recipesPath, JSON.stringify(recipesList), {
        encoding: 'utf8',
    });

    res.sendStatus(201);
};

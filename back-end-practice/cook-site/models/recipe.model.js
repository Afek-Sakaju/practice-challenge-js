const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'please provide name to the recipe'],
            unique: true,
        },
        creator: {
            type: String,
            default: 'anonymous',
        },
        ingredients: {
            type: String,
            required: [true, 'missing ingredients to the recipe'],
        },
        cookingTime: {
            type: String,
            required: [true, 'you forgot to mention the cooking time!'],
        },
        difficulityLevel: { type: String, default: 'unknown' },
    },
    { timestamps: true }
);

module.exports.RecipeModel = mongoose.model('recipe', recipeSchema);

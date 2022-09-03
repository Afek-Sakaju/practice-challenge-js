const mongoose = require('mongoose');
const Schema = mongoose.Schema;

async function connectDB() {
    console.log('connecting to DB');
    await mongoose.connect('mongodb://127.0.0.1:27017/cook-site');

    if (mongoose.connection.readyState) console.log('connected');
    else console.log('connection failed');
}

connectDB()
    .then(() => {
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

        //module.exports.
        const RecipeModel = mongoose.model('recipe', recipeSchema);

        return new RecipeModel({
            name: 'mac-and-cheese',
            ingredients: 'pasta,cheese,mushrooms,salt,pepper',
            cookingTime: '01:15',
            difficulityLevel: 'medium',
        }).save();
    })
    .then(() => {
        console.log('done');
    });

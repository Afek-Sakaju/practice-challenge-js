class Recipe {
    constructor(recipeName, ingredients, cookingTime, difficulityLevel) {
        this._recipeName = recipeName || '';
        this._ingredients = ingredients || [];
        this._cookingTime = cookingTime || '00:00';
        this._difficulityLevel = difficulityLevel || '';
    }

    get recipeName() {
        return this._recipeName;
    }

    get ingredients() {
        return this._ingredients;
    }

    get cookingTime() {
        return this._cookingTime;
    }

    get difficulityLevel() {
        return this._difficulityLevel;
    }

    set recipeName(name) {
        this._recipeName = name;
    }

    set ingredients(ind) {
        this._ingredients = ind;
    }

    set cookingTime(time) {
        this._cookingTime = time;
    }

    set difficulityLevel(diff) {
        this._difficulityLevel = diff;
    }

    toString() {
        return {
            recipeName: this._recipeName,
            ingredients: this._ingredients,
            cookingTime: this._cookingTime,
            difficulityLevel: this._difficulityLevel,
        };
    }

    static getRecipeByName(name) {
        return {
            recipeName: name.recipeName,
            ingredients: name.ingredients,
            cookingTime: name.cookingTime,
            difficulityLevel: name.difficulityLevel,
        };
    }
}

module.exports = Recipe;

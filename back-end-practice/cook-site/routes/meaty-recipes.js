const express = require('express');
const router = express.Router();
const obj = {
    recipeName : '',
    ingredients : [],
    cookingTime : 0,
    difficulityLevel : '',

};

router.get('/pasta-bolonez',(req, res, next) => {
    obj.ingredients.push();
    res.send('This URL does not return data !');
});

module.exports = router;
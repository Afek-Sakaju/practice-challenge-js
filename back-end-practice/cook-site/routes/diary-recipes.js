const express = require('express');
const router = express.Router();
const obj = {
    recipeName : '',
    ingredients : [],
    cookingTime : 0,
    difficulityLevel : '',

};

router.get('/mac-and-cheese',(req, res, next) => {
    obj.ingredients = []
    res.send('This URL does not return data !');
});

module.exports = router;
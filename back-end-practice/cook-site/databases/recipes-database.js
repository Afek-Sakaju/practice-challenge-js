const Recipe = require('../models/recipe-model');

const pastaBolonez = new Recipe(
    'pasta-bolonez', 
    ['pasta','meat','tomato sauce','salt','chilli'], 
    '02:00', 
    'medium'
);

const macAndCheese = new Recipe(
    'mac-and-cheest', 
    ['pasta','cheese','mushrooms','salt','pepper'], 
);

const list = [];
list.push(macAndCheese);
list.push(pastaBolonez);
// Q3: "How do you check if a string contains only digits?"

module.exports.onlyDigits = function (str) {
    return typeof str === 'string'
        ? !isNaN(+str) && typeof +str === 'number'
        : false;
};

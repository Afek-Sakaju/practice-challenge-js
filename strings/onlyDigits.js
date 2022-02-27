// How do you check if a string contains only digits?

module.exports.isOnlyDigit = function(str){
    return typeof str === 'string'
        ? !isNaN(+(str)) && typeof +(str) === 'number'
        : false;
}
// How do you check if a string contains only digits?

module.exports.isOnlyDigit = function(str){
    if (!isNaN(+(str)) && typeof +(str) === 'number') return true;
    else return false;
}
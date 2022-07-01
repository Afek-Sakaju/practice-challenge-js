/* Q10: "How do you reverse words in a 
given sentence without using any library method?" */

module.exports.reverseWords = function (str) {
    let reversed = '';

    for (let i = str.length - 1, j = str.length; i >= 0; i--) {
        if (str[i] === ' ') {
            if (!reversed) reversed += str.substring(i + 1, j);
            else reversed += str.substring(i, j);
            j = i;
        } else if (i === 0 && reversed) {
            reversed += ' ' + str.substring(i, j);
        }
    }

    return reversed ? reversed : str;
};

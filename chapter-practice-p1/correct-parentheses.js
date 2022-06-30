// Q6: "How do to check correct parentheses sentence?"

module.exports.correctParentheses = function (str) {
    let counter = 0;

    for (const char of str) {
        if (char === '(') counter++;
        else if (char === ')') counter--;

        if (counter < 0) return false;
    }

    return counter === 0;
};

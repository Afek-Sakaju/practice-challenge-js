module.exports.correctParentheses = function (str, parentheses = ['(', ')']) { // O(N)
    let openParentheses = 0;
    const [openParenthesis, closeParenthesis] = parentheses;
    // let i = 0;

    for(const p of str){ // O(N)
        if(p === openParenthesis) openParentheses++;
        else if(p === closeParenthesis) openParentheses--;
        else { /* unknown char, example of: space char */ }
        // console.log(`${str.substr(0, ++i)}|${str.substr(i)}`, i, 'openParentheses', openParentheses);
        if(openParentheses < 0) return false;
    }

    return !openParentheses;
}
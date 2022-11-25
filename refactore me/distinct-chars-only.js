/* Q: Write a function that accepts string and return the string
without repetitive chars (only distinct) */

function distinctString(str) {
    const obj = {};
    let res = '';

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        if (!obj.hasOwnProperty(char)) {
            obj[char] = true;
            res += char;
        }
    }

    return res;
}

const result = distinctString('AABBBCCCDDDNNNNNNN')
console.log(result);

//todo write tests
function splitString(str, splitChar) {
    const res = [];
    let tempString = '';

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        switch (true) {
            case splitChar === '':
                res.push(char);
                break;
            case char === splitChar:
            case i === str.length - 1:
                res.push(tempString);
                tempString = '';
                break;
            default:
                tempString += char;
                break;
        }
    }

    return res;
}

const str = '01,ab,34,cd';
const response = splitString(str, ',');
console.log(response);

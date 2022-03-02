const findDuplicateItems = module.exports.findDuplicateItems = function (arr) { // O(N)
    let dup = [];
    const obj = {};

    // init object like: { 1: [0, 2], 2: [1, 3], 3: [2, 4]}
    for(let i = 0; i < arr.length; i++){
        const n = arr[i];
        if(!obj.hasOwnProperty(n)) obj[n] = [];
        obj[n].push(i);
    }

    // return object values as dup like: [[0, 2], [1, 3], [2, 4]] => [0, 1, 2]
    for(const indexes of Object.values(obj)){
        indexes.pop();
        dup = [...dup, ...indexes];
    }

    return dup;
}

module.exports.removeDuplicates = function (arr) { // arr = [1,1,2,2]
    const filteredArray = [...arr]; // filteredArray = [1,1,2,2] !== arr
    const dupIndexes = findDuplicateItems(arr); //     [0  ,2, ]

    for(let i = dupIndexes.length - 1; i >= 0; i--){
        const dupIndex = dupIndexes[i];
        filteredArray.splice(dupIndex, 1);
    }

    return filteredArray;
}

module.exports.removeDuplicatesInPlace = function (arr) {
    const dupIndexes = findDuplicateItems(arr); //     [0  ,2, ]

    for(let i = dupIndexes.length - 1; i >= 0; i--){
        const dupIndex = dupIndexes[i];
        arr.splice(dupIndex, 1);
    }

    return arr;
}
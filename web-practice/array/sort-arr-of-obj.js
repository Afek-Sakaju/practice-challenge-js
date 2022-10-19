/* Q: write a function that accepts array of songs (objects), 
field (string), and orderType (number), the function need to 
return the array sorted by the field in the given orderType */

function sortObjectList(list, field, orderType) {
    if (list.length === 0 || field === undefined || field === null) return list;
    if (orderType !== 1 && orderType !== -1) throw Error('order type invalid');

    let fieldType = typeof list[0][field];

    switch (true) {
        case fieldType === 'string':
            list.sort((a, b) => {
                const string1 = a[field].toString();
                const string2 = b[field].toString();
                return orderType === 1
                    ? string1.localCompare(string2)
                    : string2.localCompare(string1);
            });
            break;
        //fix me

        case fieldType === 'number' || fieldType instanceof Date:
            list.sort((a, b) => {
                return orderType === 1
                    ? a[field] - b[field]
                    : b[field] - a[field];
            });
            break;

        default:
            throw Error('field must be string/number/date');
    }

    return list;
}

const objList = [
    { age: 5, name: 'arie', bday: new Date(2000, 9, 21) },
    { age: 10, name: 'liron', bday: new Date(1990, 3, 26) },
    { age: 22, name: 'arik', bday: new Date(1980, 11, 18) },
];

const result = sortObjectList(objList, 'name', 1);

console.log(JSON.stringify(result));

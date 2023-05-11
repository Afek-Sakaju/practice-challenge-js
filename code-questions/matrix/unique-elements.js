/* Write a function that accepts matrix and returns its unique elements,
element count as unique as long as he exists only once in the whole matrix */

module.exports.getUniqueElements = function (matrix) {
    const uniques = [];
    const elementsOccurrence = {};

    matrix?.forEach((row) => {
        row?.forEach((element) => {
            elementsOccurrence[element] ||= 0;
            elementsOccurrence[element]++;
        });
    });

    Object.entries(elementsOccurrence)?.forEach(([element, occurrence]) => {
        if (occurrence === 1) {
            element = isNaN(element) ? element : +element;
            uniques.push(element);
        }
    });

    return uniques;
};

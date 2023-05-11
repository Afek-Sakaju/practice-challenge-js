/* Write a function that accepts tree root and a value, 
and returns true if this value exists on one as the tree node's value,
otherwise return false .

Bonus: Write the same function with O(logN) time complexity
using binary tree search */

const treeSearch = (module.exports.treeSearch = function (node, value) {
    if (!node) return;

    if (node.value === value) return node;

    return treeSearch(node.left, value) || treeSearch(node.right, value);
});

const sortedBinaryTreeSearch = (module.exports.sortedBinaryTreeSearch =
    function (node, value) {
        if (!node) return;

        if (node.value === value) return node;

        return node.value > value
            ? sortedBinaryTreeSearch(node.left, value)
            : sortedBinaryTreeSearch(node.right, value);
    });

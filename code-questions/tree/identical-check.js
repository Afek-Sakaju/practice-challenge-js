/* Write an efficient algorithm to check if two binary trees are identical or not. 
Two binary trees are identical if they have identical structure,
and their contents are also the same. */

const identicalTreeCheck = (module.exports.identicalTreeCheck = function (
    node1,
    node2
) {
    if (!node1 && !node2) return true;

    // Meaning if one exist and the other not
    const isEitherExist = (node1 !== null) ^ (node2 !== null);
    if (isEitherExist || node1.data !== node2.data) return false;

    return (
        identicalTreeCheck(node1.left, node2.left) &&
        identicalTreeCheck(node1.right, node2.right)
    );
});

/* Write an efficient algorithm to check 
if two binary trees are identical or not. 
Two binary trees are identical 
if they have identical structure 
and their contents are also the same. */

const identicalTreeCheck = (module.exports.identicalTreeCheck = function (
    node1,
    node2
) {
    if (!node1 && !node2) return true;

    return (!node1 && node2) || (node1 && !node2) || node1.data !== node2.data
        ? false
        : identicalTreeCheck(node1.left, node2.left) &&
              identicalTreeCheck(node1.right, node2.right);
});

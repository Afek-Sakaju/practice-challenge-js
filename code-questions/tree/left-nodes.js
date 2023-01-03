/* Write a function that accepts a root of a tree
and return string of all his left son's values
(including the root & including the left son's of right son's)  

Example: 

input: root of the tree below
               4
              /  \
             /    \
            /      \
           5        2
                   / \
                  /   \
                 3     1
                / \     
               6   7     

output: '4536' */

const printLeftView = (module.exports.printLeftView = function (
    node,
    isLeftSon = true,
    result = ''
) {
    if (!node) return result;

    if (isLeftSon) result += node.data;

    const resLeft = printLeftView(node.left, true, result);
    const resRight = printLeftView(node.right, false, resLeft);

    return resRight;
});

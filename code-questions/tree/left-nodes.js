/* Write a function that accepts a root of a tree
and return string of all his left son's values
(including the root & including the left son's of right son's)  

Example: 
    Input: root of the tree below
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
    Output: 
        '4536' 
    Explanation:
        All the left sons of the tree are: 4, 5, 3 ,6
        (including the root) */

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

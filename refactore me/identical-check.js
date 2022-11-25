/* Write an efficient algorithm to check 
if two binary trees are identical or not. 
Two binary trees are identical 
if they have identical structure 
and their contents are also the same. */

module.exports.identicalTreeCheck = function (firstHead, SecondHead) {
    function sameStructureRec(node1, node2) {
        if (node1.left && node2.left) {
            if (sameStructureRec(node1.left, node2.left) === false)
                return false;
        } else if ((node1.left && !node2.left) || (!node1.left && node2.left)) {
            return false;
        }
        if (node1.right && node2.right) {
            if (sameStructureRec(node1.right, node2.right) === false)
                return false;
        } else if (
            (node1.right && !node2.right) ||
            (!node1.right && node2.right)
        ) {
            return false;
        }
        return true;
    }
    function sameData(node1, node2) {
        if (node1) {
            if (node1.data !== node2.data) return false;
            if (node1.left && sameData(node1.left, node2.left) === false) {
                return false;
            } else if (
                node1.right &&
                sameData(node1.right, node2.right) === false
            ) {
                return false;
            }
        }

        return true;
    }
    if ((firstHead && !SecondHead) || (!firstHead && SecondHead)) {
        return false;
    }

    return sameStructureRec(firstHead, SecondHead)
        ? sameData(firstHead, SecondHead)
        : false;
};

//todo: refactore function

/* Write an efficient algorithm to check 
if two binary trees are identical or not. 
Two binary trees are identical 
if they have identical structure 
and their contents are also the same. */

module.exports.identicalTreeCheck = function (head1, head2) {
    function sameStructureRec(node1, node2) {
        if (!node1 && !node2) return;
        else if ((!node1 && node2) || (node1 && !node2)) return false;

        return (
            (sameStructureRec(node1.left, node2.left) &&
                sameStructureRec(node1.right, node2.right)) !== false
        );
    }

    function sameData(node1, node2) {
        if (!node1 || !node2) return true;

        if (node1.data !== node2.data) return false;

        return (
            sameData(node1.left, node2.left) &&
            sameData(node1.right, node2.right)
        );
    }

    return sameStructureRec(head1, head2) && sameData(head1, head2);
};

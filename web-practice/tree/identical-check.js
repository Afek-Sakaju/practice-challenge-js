/* Write an efficient algorithm to check if two binary trees 
are identical or not. 
Two binary trees are identical 
if they have identical structure 
and their contents are also the same. */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function identicalTreeCheck(firstHead, SecondHead) {
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
}

const node1 = new Node(1);
node1.left = new Node(2);
node1.right = new Node(3);
node1.left.left = new Node(4);
node1.left.right = new Node(5);
node1.right.left = new Node(6);
node1.right.right = new Node(7);

const node2 = new Node(1);
node2.left = new Node(2);
node2.right = new Node(3);
node2.left.left = new Node(4);
node2.left.right = new Node(5);
node2.right.left = new Node(6);
node2.right.right = new Node(7);

console.log(identicalTreeCheck(node1, node2));

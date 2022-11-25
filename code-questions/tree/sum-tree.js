/* Given a Binary Tree. Return true if, for every node X 
in the tree other than the leaves, its value is equal to the sum 
of its left subtree's value and its right subtree's value. 
Else return false.
An empty tree is also a Sum Tree as the sum of an empty tree
can be considered to be 0. A leaf node is also considered a Sum Tree. 
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(Height of the Tree) */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    get Children() {
        const obj = {};
        obj[0] = this.left;
        obj[1] = this.right;
        return obj;
    }
}

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
node1.left = node2;
node1.right = node3;

const node4 = new Node(10);
const node5 = new Node(10);
node2.left = node4;
node2.right = node5;

const list = node1.Children;
console.log(`${list[0].data} and ${list[1].data}`);

//older funcs
/*
function childrenNodes(node) {
    if (!node.left && !node.right) return;
    else if (node.left && node.right) {
        node.childs['left'] = node.left;
        node.childs['right'] = node.right;
        childrenNodes(node.left);
        childrenNodes(node.left);
    } else if (node.left) {
        node.childs['left'] = node.left;
        childrenNodes(node.left);
    } else if (node.right) {
        node.childs['right'] = node.right;
        childrenNodes(node.left);
    }
}

function isSumTree(root) {
    console.log(
        `left sum: ${SumTreeRec(root.left)},right sum: ${SumTreeRec(
            root.right
        )} root data :${root.data}`
    );

    return root.data === SumTreeRec(root.left) + SumTreeRec(root.right);

    function SumTreeRec(node, sum = 0) {
        if (!node) return sum;

        return (sum +=
            node.data + SumTreeRec(node.left) + SumTreeRec(node.right));
    }
}
*/

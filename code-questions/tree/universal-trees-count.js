class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function treeCheck(root) {
    let sum = 0;
    function isUniversal(node) {
        let current = node;
        let currentData = node.data;
        let currentSonLeft;
        let currentSonRigth;
        if (node.left !== null) {
            currentSonLeft = node.left.data;
        }
        if (node.right !== null) {
            currentSonRigth = node.right.data;
        }

        if (node.left || node.right) {
            if (node.left) {
                sum = isUniversal(node.left) === node.data ? sum + 1 : sum;
            }
            if (node.right) {
                sum = isUniversal(node.right) === node.data ? sum + 1 : sum;
            }
        } else return node.data;
    }

    return isUniversal(root);
}

const node1 = new Node(1);
const node2 = new Node(2);
node1.left = node2;
const node3 = new Node(1);
node1.right = node3;
const node4 = new Node(2);
node3.left = node4;
const node5 = new Node(1);
node3.right = node5;
const node6 = new Node(2);
node4.right = node6;
const node7 = new Node(2);
node4.left = node7;

treeCheck(node1);

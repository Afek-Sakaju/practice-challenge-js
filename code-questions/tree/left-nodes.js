class Node {
    constructor(data, left = null, right = null, color = 'grey') {
        this.data = data;
        this.left = left;
        this.right = right;
        this.color = color;
    }
}

function printLeftView(node, isLeftSon = true, result = '') {
    if (!node) return result;

    if (isLeftSon) result += node.data;

    const resLeft = printLeftView(node.left, true, result);
    const resRight = printLeftView(node.right, false, resLeft);

    return resRight;
}

const root1 = new Node(
    4,
    new Node(5),
    new Node(2, new Node(3, new Node(6), new Node(7)), new Node(1))
);

const result = printLeftView(root1);

console.log('expected "4536", result is:', result);

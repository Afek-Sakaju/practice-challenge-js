class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/*
                   1
                  /  \
                 /    \
                /      \
               2        3
              / \      / \
             /   \    /   \
            4     5  6     7
                          /
                         8
 */

const root = new Node(
    1,
    new Node(2, new Node(4), new Node(5)),
    new Node(3, new Node(6), new Node(7, new Node(8)))
);

function search(node, value) {
    if (!node) return;

    if (node.value === value) return node;

    return search(node.left, value) || search(node.right, value);
}

/*
             6
            /  \
           /    \
          /      \
         4        9
        / \      / \
       /   \    /   \
      2     5  7     11
                    /
                   10
 */

const sortedRoot = new Node(
    6,
    new Node(4, new Node(2), new Node(5)),
    new Node(9, new Node(7), new Node(11, new Node(10)))
);

function sortedSearch(node, value) {
    if (!node) return;

    if (node.value === value) return node;

    return node.value > value
        ? sortedSearch(node.left, value)
        : sortedSearch(node.right, value);
}

const res2 = sortedSearch(sortedRoot, 10);
console.log(res2);

/*
             6
            /  \
           /    \
          /      \
         4        9
        / \      / \
       /   \    /   \
      2     5  7     11
                    /
                   10
 */

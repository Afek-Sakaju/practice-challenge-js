const { sortedBinaryTreeSearch, treeSearch } = require('../tree-search');

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

describe('tree recoursive searches testing', () => {
    describe('treeSearch tests', () => {
        test('search to value that exists in the tree returns true', () => {
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
                             8      */

            const root = new Node(
                1,
                new Node(2, new Node(4), new Node(5)),
                new Node(3, new Node(6), new Node(7, new Node(8)))
            );

            expect(treeSearch(root, 5)).toBeTruthy();
        });

        test("search to value that doesn't exists in the tree returns false", () => {
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
                             8      */

            const root = new Node(
                1,
                new Node(2, new Node(4), new Node(5)),
                new Node(3, new Node(6), new Node(7, new Node(8)))
            );

            expect(treeSearch(root, 11)).toBeFalsy();
        });
    });

    describe('sortedBinaryTreeSearch tests', () => {
        test('binary search to value that exists in the tree returns true', () => {
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
                              10    */

            const sortedRoot = new Node(
                6,
                new Node(4, new Node(2), new Node(5)),
                new Node(9, new Node(7), new Node(11, new Node(10)))
            );

            expect(sortedBinaryTreeSearch(sortedRoot, 10)).toBeTruthy();
        });

        test("binary search to value that doesn't exists in the tree returns false", () => {
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
                              10    */

            const sortedRoot = new Node(
                6,
                new Node(4, new Node(2), new Node(5)),
                new Node(9, new Node(7), new Node(11, new Node(10)))
            );

            expect(sortedBinaryTreeSearch(sortedRoot, 50)).toBeFalsy();
        });
    });
});

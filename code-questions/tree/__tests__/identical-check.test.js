const { identicalTreeCheck } = require('../identical-check');

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

describe('identicalTreeCheck tests', () => {
    test('two identical values and structure trees returns true', () => {
        const node1 = new Node(
            1,
            new Node(2, new Node(4), new Node(5)),
            new Node(3, new Node(6), new Node(7))
        );

        /*          Tree 1:
             1
            /  \
           /    \
          /      \
         2        3
        / \      / \
       /   \    /   \
      4     5  6     7  */

        const node2 = new Node(
            1,
            new Node(2, new Node(4), new Node(5)),
            new Node(3, new Node(6), new Node(7))
        );

        /*          Tree 2:
             1
            /  \
           /    \
          /      \
         2        3
        / \      / \
       /   \    /   \
      4     5  6     7  */

        expect(identicalTreeCheck(node1, node2)).toBeTruthy();
    });

    test('two identical structure trees but different values returns false', () => {
        const node1 = new Node(
            1,
            new Node(2, new Node(4), new Node(5)),
            new Node(3, new Node(6), new Node(7))
        );

        /*          Tree 1:
             1
            /  \
           /    \
          /      \
         2        3
        / \      / \
       /   \    /   \
      4     5  6     7  */

        const node2 = new Node(
            9,
            new Node(5, new Node(0), new Node(1)),
            new Node(5, new Node(2), new Node(2))
        );

        /*          Tree 2:
             9
            /  \
           /    \
          /      \
         5        5
        / \      / \
       /   \    /   \
      0     1  2     2  */

        expect(identicalTreeCheck(node1, node2)).toBeFalsy();
    });

    test('two trees with different structures and simillar values in some nodes returns false', () => {
        const node1 = new Node(
            1,
            new Node(2, new Node(4), new Node(5)),
            new Node(3, new Node(6), new Node(7))
        );

        /*          Tree 1:
             1
            /  \
           /    \
          /      \
         2        3
        / \      / \
       /   \    /   \
      4     5  6     7  */

        const node2 = new Node(
            1,
            new Node(2, new Node(4), new Node(5)),
            new Node(3, new Node(6))
        );

        /*          Tree 2:
             1
            /  \
           /    \
          /      \
         2        3
        / \      / 
       /   \    /   
      4     5  6        */

        expect(identicalTreeCheck(node1, node2)).toBeFalsy();
    });

    test('two trees with different structures and different values returns false', () => {
        const node1 = new Node(
            1,
            new Node(2, new Node(4), new Node(5)),
            new Node(3, new Node(6), new Node(7))
        );

        /*          Tree 1:
             1
            /  \
           /    \
          /      \
         2        3
        / \      / \
       /   \    /   \
      4     5  6     7  */

        const node2 = new Node(
            9,
            new Node(5, new Node(0), new Node(1)),
            new Node(5, new Node(2))
        );

        /*          Tree 2:
             9
            /  \
           /    \
          /      \
         5        5
        / \      / 
       /   \    /   
      0     1  2        */

        expect(identicalTreeCheck(node1, node2)).toBeFalsy();
    });
});

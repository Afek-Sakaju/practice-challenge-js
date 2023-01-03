const { printLeftView } = require('../left-nodes');

class Node {
    constructor(data, left = null, right = null, color = 'grey') {
        this.data = data;
        this.left = left;
        this.right = right;
        this.color = color;
    }
}

describe('left-nodes tests', () => {
    /* i gave any root speciefic name so any test will run on its own.
    also because test.each is not something i would like to use since i want 
    to have in each test the doc that visualizing his tree */
    test('printLeftView to root1 returns the string "12468"', () => {
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

        const root1 = new Node(
            1,
            new Node(2, new Node(4), new Node(5)),
            new Node(3, new Node(6), new Node(7, new Node(8)))
        );

        expect(printLeftView(root1)).toBe('12468');
    });

    test('printLeftView to root2 returns the string "4536"', () => {
        /*
                   4
                  /  \
                 /    \
                /      \
               5        2
                       / \
                      /   \
                     3     1
                    / \     
                   6   7     */

        const root2 = new Node(
            4,
            new Node(5),
            new Node(2, new Node(3, new Node(6), new Node(7)), new Node(1))
        );

        expect(printLeftView(root2)).toBe('4536');
    });

    test('printLeftView to root3 returns the string "408"', () => {
        /*
                   4
                  /  \
                 /    \
                /      \
               0        2
                       / \
                      /   \
                     8     3  */

        const root3 = new Node(
            4,
            new Node(0),
            new Node(2, new Node(8), new Node(3))
        );

        expect(printLeftView(root3)).toBe('408');
    });
});

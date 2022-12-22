const { reverseList } = require('../reverse-linked-list');

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function listToString(node, str = '') {
    if (!node) return str;
    str += node.value;
    return listToString(node.next, str);
}

describe('reverse linked list tests', () => {
    test('function accept list "5-4-3-2-1-0-(-1)", then return result "(-1)-0-1-2-3-4-5"', () => {
        const list = new Node(
            5,
            new Node(
                4,
                new Node(3, new Node(2, new Node(1, new Node(0, new Node(-1)))))
            )
        );

        const reversed = reverseList(list);
        const result = listToString(reversed);

        expect(result).toBe('-1012345');
    });

    test('function accept list "1-2-3-4", then return result "4-3-2-1"', () => {
        const list = new Node(1, new Node(2, new Node(3, new Node(4))));
        const reversed = reverseList(list);
        const result = listToString(reversed);

        expect(result).toBe('4321');
    });

    test('function accept list "a-b-c", then return result "c-b-a"', () => {
        const list = new Node('a', new Node('b', new Node('c')));
        const reversed = reverseList(list);
        const result = listToString(reversed);

        expect(result).toBe('cba');
    });

    test('function accept list "1-2", then return result "2-1"', () => {
        const list = new Node(1, new Node(2));
        const reversed = reverseList(list);
        const result = listToString(reversed);

        expect(result).toBe('21');
    });

    test('function accept list "a", then return result "a"', () => {
        const list = new Node('a');
        const reversed = reverseList(list);
        const result = listToString(reversed);

        expect(result).toBe('a');
    });
});

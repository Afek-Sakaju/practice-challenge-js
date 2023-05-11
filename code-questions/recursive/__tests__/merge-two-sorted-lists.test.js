const { sortedMerge } = require('../merge-two-sorted-lists');

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

describe('merge-two-sorted-lists tests', () => {
    test('function accept list1:"-21-3-5-6",and list2:"-22-4-8-9" then return result "1-2-3-4-5-6-8-9"', () => {
        const head1 = new Node(-21, new Node(3, new Node(5, new Node(6))));
        const head2 = new Node(-22, new Node(4, new Node(8, new Node(9))));

        const merged = sortedMerge(head1, head2);
        const result = listToString(merged);

        expect(result).toBe('-22-21345689');
    });

    test('function accept list1:"1-3-5-6",and list2:"2-4-8-9" then return result "1-2-3-4-5-6-8-9"', () => {
        const head1 = new Node(1, new Node(3, new Node(5, new Node(6))));
        const head2 = new Node(2, new Node(4, new Node(8, new Node(9))));

        const merged = sortedMerge(head1, head2);
        const result = listToString(merged);

        expect(result).toBe('12345689');
    });

    test('function accept list1:"1-2-3-4",and list2:"5-10" then return result "1-2-3-4-5-10"', () => {
        const head1 = new Node(1, new Node(2, new Node(3, new Node(4))));
        const head2 = new Node(5, new Node(10));

        const merged = sortedMerge(head1, head2);
        const result = listToString(merged);

        expect(result).toBe('1234510');
    });

    test('function accept list1:"1",and list2:"2-9" then return result "1-2-9"', () => {
        const head1 = new Node(1);
        const head2 = new Node(2, new Node(9));

        const merged = sortedMerge(head1, head2);
        const result = listToString(merged);

        expect(result).toBe('129');
    });

    test('function accept list1:"1-2-6-99-200" only, then return result "1-2-6-99-200"', () => {
        const head1 = new Node(
            1,
            new Node(2, new Node(6, new Node(99, new Node(200))))
        );

        const merged = sortedMerge(head1);
        const result = listToString(merged);

        expect(result).toBe('12699200');
    });

    test('function accept list1:null, list2: "1-2-6-99-200", then return result "1-2-6-99-200"', () => {
        const head1 = null;
        const head2 = new Node(
            1,
            new Node(2, new Node(6, new Node(99, new Node(200))))
        );

        const merged = sortedMerge(head1, head2);
        const result = listToString(merged);

        expect(result).toBe('12699200');
    });
});

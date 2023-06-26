const { compare } = require('../compare-string-lists');

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

describe('compare string lists tests', () => {
    describe('compare tests', () => {
        test('function accept list1:"a-b-z", and list2:"a-b-c" then returns 1', () => {
            const list1 = new Node('a', new Node('b', new Node('z')));
            const list2 = new Node('a', new Node('b', new Node('c')));

            const result = compare(list1, list2);
            expect(result).toBe(1);
        });

        test('function accept list1:"a-b-c", and list2:"a-b-c" then returns 0', () => {
            const list1 = new Node('a', new Node('b', new Node('c')));
            const list2 = new Node('a', new Node('b', new Node('c')));

            const result = compare(list1, list2);
            expect(result).toBe(0);
        });

        test('function accept list1:"z-a-z", and list2:"z-a-a" then returns -1', () => {
            const list1 = new Node('z', new Node('a', new Node('a')));
            const list2 = new Node('z', new Node('a', new Node('z')));

            const result = compare(list1, list2);
            expect(result).toBe(-1);
        });

        test('function accept list1:"a", and list2:"b" then returns -1', () => {
            const list1 = new Node('a');
            const list2 = new Node('b');

            const result = compare(list1, list2);
            expect(result).toBe(-1);
        });

        test('function accept list1: null, and list2: null then returns 0', () => {
            const list1 = null;
            const list2 = null;

            const result = compare(list1, list2);
            expect(result).toBe(0);
        });

        test('function accept list1: null, and list2: "b" then returns -1', () => {
            const list1 = null;
            const list2 = new Node('b');

            const result = compare(list1, list2);
            expect(result).toBe(-1);
        });
    });

    describe('compareRec tests', () => {
        test('function accept list1:"a-b-z", and list2:"a-b-c" then returns 1', () => {
            const list1 = new Node('a', new Node('b', new Node('z')));
            const list2 = new Node('a', new Node('b', new Node('c')));

            const result = compare(list1, list2);
            expect(result).toBe(1);
        });

        test('function accept list1:"a-b-c", and list2:"a-b-c" then returns 0', () => {
            const list1 = new Node('a', new Node('b', new Node('c')));
            const list2 = new Node('a', new Node('b', new Node('c')));

            const result = compare(list1, list2);
            expect(result).toBe(0);
        });

        test('function accept list1:"z-a-z", and list2:"z-a-a" then returns -1', () => {
            const list1 = new Node('z', new Node('a', new Node('a')));
            const list2 = new Node('z', new Node('a', new Node('z')));

            const result = compare(list1, list2);
            expect(result).toBe(-1);
        });

        test('function accept list1:"a", and list2:"b" then returns -1', () => {
            const list1 = new Node('a');
            const list2 = new Node('b');

            const result = compare(list1, list2);
            expect(result).toBe(-1);
        });

        test('function accept list1: null, and list2: null then returns 0', () => {
            const list1 = null;
            const list2 = null;

            const result = compare(list1, list2);
            expect(result).toBe(0);
        });

        test('function accept list1: null, and list2: "b" then returns -1', () => {
            const list1 = null;
            const list2 = new Node('b');

            const result = compare(list1, list2);
            expect(result).toBe(-1);
        });
    });
});

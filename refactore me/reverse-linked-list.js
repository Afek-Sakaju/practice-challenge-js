class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

//todo write tests

let list1 = new Node(1, new Node(2, new Node(3, new Node(4))));

function listToString(node) {
    if (!node) return;
    console.log(node.value);
    listToString(node.next);
}

listToString(list1);
console.log('#'.repeat(10));

function reverseList(head) {
    let prev = head;
    let curr = head.next;
    let temp = null;

    while (head.next) {
        head = curr.next;
        curr.next = prev;
        prev.next = temp;
        temp = prev;
        prev = curr;
        curr = head;
    }

    head.next = prev;
    return head;
}

list1 = reverseList(list1);

listToString(list1);
console.log('#'.repeat(10));

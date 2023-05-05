module.exports.reverseList = function (head) {
    let first = head;
    let middle = head.next;
    let last = null;

    while (middle) {
        last = middle.next;
        middle.next = first;
        first = middle;
        middle = last;
    }

    head.next = middle; // must be null since its out of the loop
    head = first;
    return head;
};

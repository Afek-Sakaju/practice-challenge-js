/* Write a function reverseList() that accept head of a linked-list,
reverse the linked list and returns its new head (should be previous tail).

Example:
    Input: 
        list = 1->2->3->4->5->null
    Output: 
        list = 5->4->3->2->1->null */

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

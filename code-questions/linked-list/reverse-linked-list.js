/* Write a function reverseList() that accept head of a linked-list,
reverse the linked list and returns its new head (should be previous tail).

Example:
    Input: 
        list = 1->2->3->4->5->null
    Output: 
        list = 5->4->3->2->1->null */

module.exports.reverseList = function (head) {
    let prev = head;
    let current = head.next;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // The value of current will be null because the loop has been finished
    head.next = current;
    head = prev;
    return head;
};

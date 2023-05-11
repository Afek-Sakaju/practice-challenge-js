/* Given two sorted linked lists consisting of N and M nodes respectively. 
The task is to merge both of the list (in-place) 
and return head of the merged list. 

Example 1:
    Input:
        N = 4
        M = 3 
        valueN[] = {5,10,15,40}
        valueM[] = {2,3,20}
    Output: 
        2 3 5 10 15 20 40
    Explanation: 
        After merging the two linked lists, 
        we have merged list as 2, 3, 5, 10, 15, 20, 40.

Example 2:
    Input:
        N = 2 
        M = 2
        valueN[] = {1,1}
        valueM[] = {2,4}
    Output: 
        1 1 2 4
    Explanation: 
        After merging the given two linked list, 
        we have 1, 1, 2, 4 as output.

Your Task:
    The task is to complete the function sortedMerge() 
    which takes references to the heads of two linked lists 
    as the arguments and returns the head of merged linked list.

Expected Time Complexity : O(n+m)
Expected Auxilliary Space : O(1) */

module.exports.sortedMerge = function (head1, head2) {
    let prev1 = null;
    let prev2 = null;

    if (!head1) return head2;
    if (!head2) return head1;

    rec(head1, head2);
    return head1.value < head2.value ? head1 : head2;

    function rec(node1, node2) {
        switch (true) {
            case node1.next === null:
                node1.next = node2 || node1.next;
                return;
            case node1.value <= node2.value:
                prev1 = node1;
                rec(node1.next, node2);
                break;
            default:
                if (!prev1) {
                    prev1 = node1;
                    node1 = node1.next;
                    prev2 = node2;
                    node2 = node2.next;
                    prev2.next = prev1;
                } else {
                    prev2 = node2;
                    node2 = node2.next;
                    prev1.next = prev2;
                    prev2.next = node1;
                }
                rec(node1, node2);
        }
    }
};

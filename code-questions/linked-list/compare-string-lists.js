/* Given two strings, represented as linked lists (every character is a node in a linked list). 
Write a function compare() that works similar to strcmp(),
it should returns 0 if both strings are the same,
1 if the first linked list is lexicographically greater,
and -1 if the second string is lexicographically greater.

Example 1:
    Input:
        list1 = a->b->z
        list2 = a->b->c
    Output:       
        1
    Explanation: 
        "abz" is lexicographically greater than "abc".

Example 2:
    Input: 
        list1 = z->a->a
        list2 = z->a->z
    Output: 
        -1
    Explanation: 
        "zaz" is greater than "zaa".

Example 3:
    Input:
        list1 = a->b->c
        list2 = a->b->c
    Output: 
        0
    Explanation: 
        Both the strings are "geeks".

Time Complexity: O(N + M)
Auxiliary Space: O(N + M) */

module.exports.compare = function (head1, head2) {
    while (head1 && head2) {
        const char1 = head1.value;
        const char2 = head2.value;

        const equalityResult = char1.localeCompare(char2);
        if (equalityResult !== 0) return equalityResult;

        head1 = head1.next;
        head2 = head2.next;
    }

    return (head1?.value ?? '').localeCompare(head2?.value ?? '');
};

const compareRec = (module.exports.compareRec = function (head1, head2) {
    if (head1 && !head2) return 1;
    else if (head2 && !head1) return -1;
    else if (!head2 && !head1) return 0;

    return (
        head1.value?.localeCompare(head2.value) ||
        compareRec(head1.next, head2.next)
    );
});

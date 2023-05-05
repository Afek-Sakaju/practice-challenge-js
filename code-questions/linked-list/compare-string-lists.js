/* Given two strings, represented as linked lists 
(every character is a node in a linked list). 
Write a function compare() that works similar to strcmp(),
it should returns 0 if both strings are the same,
1 if the first linked list is lexicographically greater,
and -1 if the second string is lexicographically greater.

Examples:
Input: 
  list1 = a->b->z
  list2 = a->b->c
Output: 1
Explanation: "abz" is lexicographically greater than "abc".

Input: 
  list1 = z->a->a
  list2 = z->a->z
Output: -1
Explanation: "zaz" is greater than "zaa".

Input:
  list1 = a->b->c
  list2 = a->b->c
Output: 0
Explanation: Both the strings are "geeks".


Time Complexity: O(N + M) where N and M are the lengths of the linked lists.
Auxiliary Space: O(N + M) */

module.exports.compare = function (list1, list2) {
    if (!list1 || !list2) return;
    let pointer1 = list1;
    let pointer2 = list2;

    while (pointer1 && pointer2) {
        const char1 = pointer1.value;
        const char2 = pointer2.value;

        const equalityResult = char1.localeCompare(char2);
        if (equalityResult) return equalityResult;

        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer1 || pointer2 || 0;
};

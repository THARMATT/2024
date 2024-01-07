# 21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1 - The head of the first sorted linked list.
 * @param {ListNode} list2 - The head of the second sorted linked list.
 * @return {ListNode} - The head of the merged sorted linked list.
 */
var mergeTwoLists = function(list1, list2) {
    // Check if either of the lists is empty. If one is empty, return the other.
    if (!list1 || !list2) {
        return list1 || list2;
    }

    // Compare the values of the current nodes in the two lists.
    if (list1.val < list2.val) {
        // If the value in list1 is smaller, create a new node with that value
        // and recursively merge the rest of list1 with list2.
        return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
    } else {
        // If the value in list2 is smaller or equal, create a new node with that value
        // and recursively merge the rest of list2 with list1.
        return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
    }
};
```
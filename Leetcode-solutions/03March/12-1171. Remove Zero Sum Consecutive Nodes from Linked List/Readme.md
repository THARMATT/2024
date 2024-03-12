# 1171. Remove Zero Sum Consecutive Nodes from Linked List

Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.
```js
var removeZeroSumSublists = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prefix_sum = 0;
    const prefix_sums = { 0: dummy };
    let current = head;

    while (current) {
        prefix_sum += current.val;
        if (prefix_sum in prefix_sums) {
            let to_delete = prefix_sums[prefix_sum].next;
            let temp_sum = prefix_sum + to_delete.val;
            while (to_delete !== current) {
                delete prefix_sums[temp_sum];
                to_delete = to_delete.next;
                temp_sum += to_delete.val;
            }
            prefix_sums[prefix_sum].next = current.next;
        } else {
            prefix_sums[prefix_sum] = current;
        }
        current = current.next;
    }

    return dummy.next;
};
```
- Initial Approach-Collasped in Basics
My approach is simple 
use a hashmap to track the indeces
sort element 
check if there is any negative integer
find the sum of negative and positive integer if sum =0
then remove those elements and return the remained elements


```javascript 
function check(head) {
    let map = {}
    head.sort((a, b) => a - b)

    for (let i = 0; i < head; i++) {
        if (head.includes(head[i] < 0)) {
            let sum;
            sum = head[i] + head[i + 1]

        }
        else {
            return head
        }
    }
}




```

# 876. Middle of the Linked List

Given the head of a singly `linked list`, return the middle `node` of the `linked list`.

If there are two middle nodes, return the second middle `node`.

```js
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
```

Initial Approach is collapsed because I used a way to find the just middle node . However, my approach seems to be treating the linked list as an array. Linked lists and arrays are different data structures, and the methods used to find the middle element are also different.

```js
function checkMiddle(head){
let n=head.length
let head2=[]
for(let i=0;i<n;i++){
if(head[i]>n/2){
head2.push(head[i])}
}
```

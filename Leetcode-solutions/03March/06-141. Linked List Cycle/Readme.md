# 141. Linked List Cycle

Given head, the `head` of a `linked list`, determine if the linked list has a `cycle` in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, `pos` is used to denote the `index` of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return `true` if there is a `cycle` in the `linked list`. Otherwise, return `false`.

```js
function hasCycle(head) {
  let visited = new Set();
  let current = head;

  while (current) {
    if (visited.has(current)) {
      return true;
    }
    visited.add(current);
    current = current.next;
  }

  return false;
}
```

- Initial Approach -totally collasped
My initial approach is that we use a hash table to store the index and and with pos varible determine the the position of the pointer
if the index repeat return true

```js
function checkcycle(head) {
  let head = {};
  let pos = 0;
  for (let i = 0; i < head.length; i++) {
    pos += 1;
    if (pos) {
      return true;
    }
  }
  return false;
}
```
- Approach

1. **Initialization**:
   - We start by creating an empty set called `visited`. This set will keep track of all the nodes we have visited so far.
   - We set the `current` variable to point to the `head` of the linked list. This will be our starting point for traversing the list.

2. **Traversal with Detection**:
   - We enter a while loop that continues until we reach the end of the linked list (`current` becomes `null`).
   - Within each iteration of the loop:
     - We check if the `visited` set already contains the current node (`current`). If it does, it means we have already visited this node before, indicating a cycle. In this case, we immediately return `true`.
     - If the current node is not in the `visited` set, we add it to the set using `visited.add(current)`.
     - We then move the `current` pointer to the next node in the list by assigning `current.next` to `current`.

3. **Returning the Result**:
   - If the loop completes without encountering any repeated nodes, it means there is no cycle in the linked list. In this case, we return `false`.

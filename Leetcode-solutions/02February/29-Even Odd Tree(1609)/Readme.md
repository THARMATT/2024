# 1609. Even Odd Tree

A binary tree is named Even-Odd if it meets the following conditions:

- The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
- For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
- For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
- Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.

 

```js


var isEvenOddTree = function(root) {
    if (!root) {
        return true;
    }

    let queue = [root];
    let level = 0;

    while (queue.length > 0) {
        let size = queue.length;
        let prevVal = (level % 2 === 0) ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            // Check if the values follow the conditions
            if ((level % 2 === 0 && (node.val % 2 === 0 || node.val <= prevVal)) ||
                (level % 2 === 1 && (node.val % 2 === 1 || node.val >= prevVal))) {
                return false;
            }

            prevVal = node.val;

            // Add children to the queue
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        level++;
    }

    return true;
};
```
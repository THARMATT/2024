# 513. Find Bottom Left Tree Value
Given the `root` of a binary tree, return the leftmost value in the last row of the tree.

```js

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function findBottomLeftValue(root) {
    if (!root) return null; // If the tree is empty, return null

    let leftmostValue = null;
    const queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const size = queue.length;
        leftmostValue = queue[0].val; // Update leftmostValue with the first node's value in the current level

        for (let i = 0; i < size; i++) {
            const node = queue.shift(); // Dequeue the node from the front of the queue

            // Enqueue the left and right child nodes if they exist
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return leftmostValue; // Return the leftmost value found in the last row
}


```
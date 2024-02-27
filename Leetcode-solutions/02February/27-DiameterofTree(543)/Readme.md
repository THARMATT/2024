
# 543. Diameter of Binary Tree
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

```js
function diameterOfBinaryTree(root) {
    let maxDiameter = 0;

    function depth(node) {
        if (!node) return 0;
        
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);

    return maxDiameter;
}
```
## Explanation
1. **Function Declaration**: 
   - The function `diameterOfBinaryTree` takes a single argument `root`, which represents the root node of the binary tree.

2. **Variable Initialization**: 
   - `maxDiameter` is initialized to 0. This variable will keep track of the maximum diameter found in the binary tree.

3. **Depth Calculation Function (depth)**: 
   - Inside the `diameterOfBinaryTree` function, there's a nested function named `depth`. This function calculates the depth of each node recursively.

4. **Base Case**: 
   - If `node` is `null` (indicating an empty subtree), the function returns 0, as there's no depth.

5. **Recursive Calls**:
   - The function calculates the depth of the left subtree (`leftDepth`) and the right subtree (`rightDepth`) by recursively calling itself with the left and right children of the current node, respectively.

6. **Diameter Calculation**: 
   - The diameter of the tree rooted at the current node is calculated as the sum of the depths of its left and right subtrees. If this diameter is greater than the current `maxDiameter`, it updates `maxDiameter`.

7. **Returning Depth**:
   - The function returns the depth of the subtree rooted at the current node. This depth is the maximum depth between the left and right subtrees plus one.

8. **Depth Calculation Invocation**:
   - The `depth` function is invoked with the `root` node, initiating the depth calculation process for the entire binary tree.

9. **Returning Maximum Diameter**:
   - Finally, the function returns the maximum diameter found in the binary tree.

Here's a visual representation of how the function works:

```s
diameterOfBinaryTree(root)
|
|___ depth(root)
     |
     |___ depth(node.left)
     |    |
     |    |___ depth(leftChild1)
     |    |
     |    |___ depth(leftChild2)
     |    |
     |    |    ... (recursively calculating depth of left subtree)
     |
     |___ depth(node.right)
     |    |
     |    |___ depth(rightChild1)
     |    |
     |    |___ depth(rightChild2)
     |    |
     |    |    ... (recursively calculating depth of right subtree)
     |
     |___ Calculate diameter of current node and update maxDiameter
     |
     |___ Return depth of current node (maximum depth of left/right subtree + 1)
``` 

This process repeats recursively for each node in the binary tree until all nodes have been visited, and the maximum diameter is determined.
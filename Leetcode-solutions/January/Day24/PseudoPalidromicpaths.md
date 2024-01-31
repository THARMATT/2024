# 1457. Pseudo-Palindromic Paths in a Binary Tree
Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be `pseudo-palindromic` if at least one permutation of  node values in the path is a palindrome.

Return the number of `pseudo-palindromic` paths going from the root node to leaf nodes.

## Pre-Requisite

1. **Binary Tree:**
   - Understand the basic structure of a binary tree, where each node has at most two children (left and right).

2. **Depth-First Search (DFS):**
   - Know the DFS traversal technique for trees, where you explore as far as possible along each branch before backtracking.

3. **Pseudo-Palindrome:**
   - A pseudo-palindrome is a sequence of characters that, when the characters are reordered, reads the same forwards or backward. In this context, we are dealing with pseudo-palindromic paths in a binary tree.



**Problem Statement:**
Given a binary tree, you need to count the number of pseudo-palindromic paths. A path is considered pseudo-palindromic if it could be rearranged to form a palindrome.

**Approach:**
- Utilize Depth-First Search (DFS) to traverse the binary tree and explore all possible paths.
- At each node, maintain a frequency array to track the occurrences of each digit along the path.
- Check if the current path is pseudo-palindromic by ensuring that at most one digit occurs an odd number of times.

**Intuition:**
- The idea is to explore all paths in the tree and maintain a frequency array to check pseudo-palindromic conditions.
- When reaching the leaf nodes, check if the current path satisfies the pseudo-palindromic property.
- Recursion allows exploration of all possible paths.

**Time Complexity:**
- The time complexity is O(N), where N is the number of nodes in the binary tree.
- We visit each node once during the DFS traversal.

**Space Complexity:**
- The space complexity is O(H), where H is the height of the binary tree.
- The recursion stack space is the primary contributor to the space complexity.

## Code
```javascript
// Definition of a TreeNode class
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

// Main function to count pseudo-palindromic paths in a binary tree
function pseudoPalindromicPaths(root) {

    // Variable to store the count of pseudo-palindromic paths
    let count = 0;

    // Function to check if a frequency array represents a pseudo-palindrome
    function isPseudoPalindrome(freq) {
        let oddCount = 0;
        for (let f of freq) {
            if (f % 2 !== 0) {
                oddCount++;
            }
        }
        return oddCount <= 1;
    }

    // Depth-first search function to traverse the tree
    function dfs(node, freq) {
        // Base case: if the current node is null, return
        if (!node) {
            return;
        }

        // Increment the frequency of the current node's value
        freq[node.val - 1]++;

        // If the current node is a leaf node (no left or right child)
        if (!node.left && !node.right) {
            // Check if the frequency array represents a pseudo-palindrome
            if (isPseudoPalindrome(freq)) {
                // If true, increment the count
                count++;
            }
        } else {
            // Recursive calls for the left and right children with a copy of the current frequency array
            dfs(node.left, [...freq]);
            dfs(node.right, [...freq]);
        }
    }

    // Initial call to the DFS function with the root of the tree and an array of zeros representing the frequency of each digit
    dfs(root, new Array(9).fill(0));

    // Return the final count of pseudo-palindromic paths
    return count;
}
```
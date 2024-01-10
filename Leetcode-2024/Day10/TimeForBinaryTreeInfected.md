# 2385. Amount of Time for Binary Tree to Be Infected

**Problem Statement: Binary Tree Infection**

You are given the root of a binary tree with unique values and an integer `start`. At minute 0, an infection starts from the node with the value `start`.

Each minute, a node becomes infected if and only if:

1. The node is currently uninfected.
2. The node is adjacent to an infected node.

Write a function `infection_time(root: TreeNode, start: int) -> int` that takes the root of the binary tree and the starting value as parameters and returns the number of minutes needed for the entire tree to be infected.

**Input:**
- `root`: The root of the binary tree. The tree is guaranteed to be non-empty and have unique node values.
- `start`: The value of the node where the infection starts.

**Output:**
- An integer representing the number of minutes needed for the entire tree to be infected.




## Approach
Is problem mein humein ek binary tree diya gaya hai aur ek starting node ka value. Humein yeh calculate karna hai ki starting node se kisi bhi leaf node tak pahunchne ke liye kitna maximum time lagta hai.

**Approach:**

1. **Recursive Traversal:** Hum ek recursive approach use karenge tree ko traverse karne ke liye. Har node par jakar us node ka value check karenge.

2. **Base Case:** Agar current node null hai, toh 0 return karenge kyun ki null node tak pahunchne mein koi time nahi lagta.

3. **Starting Node Check:** Agar current node ka value starting value ke equal hai, toh us node se aage ke traversal ko band karenge aur us node se maximum time nikalenge.

4. **Valid Subtrees Check:** Agar left aur right subtrees dono valid hain, toh hum unka maximum lenge aur 1 add karenge.

5. **Invalid Subtrees Check:** Agar kisi ek subtree mein problem hai, toh hum unka difference calculate karenge aur overall maximum time update karenge.

6. **Return Values:** Har recursive call apne value ko return karegi, jo us subtree se niche ki taraf se aayi hai. Isse hum tree ko bottom-up traverse karenge.

7. **Final Result:** Starting node se jo maximum time calculate hua hai, woh final result hoga.

Is approach mein hum ek recursive tree traversal ka use kar rahe hain aur har node par jakar us node se niche ke information ko calculate kar rahe hain.





## Code
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root - The root of the binary tree.
 * @param {number} start - The value of the node from which we start counting the amount of time.
 * @return {number} - The maximum amount of time required to reach any leaf node from the starting node.
 */
const amountOfTime = (root, start) => {
    // Initialize a variable to store the maximum amount of time
    let amount = 0;

    // Helper function to traverse the binary tree and calculate the amount of time
    const traverse = (root, start) => {
        // Base case: If the current node is null, return 0
        if (!root) {
            return 0;
        }

        // Recursive calls to traverse left and right subtrees
        let left = traverse(root.left, start);
        let right = traverse(root.right, start);

        // Check if the current node's value is equal to the starting value
        if (root.val === start) {
            // Update the amount with the maximum of left and right
            amount = Math.max(left, right);
            // Return -1 to indicate that the starting node is found
            return -1;
        } else if (left >= 0 && right >= 0) {
            // If both left and right subtrees are valid, return the maximum plus 1
            return Math.max(left, right) + 1;
        } else {
            // If either left or right subtree is not valid, update the amount
            amount = Math.max(amount, Math.abs(left - right));
            // Return the minimum minus 1 to propagate the information upward
            return Math.min(left, right) - 1;
        }
    }

    // Start the traversal from the root
    traverse(root, start);

    // Return the calculated amount of time
    return amount;
}

```
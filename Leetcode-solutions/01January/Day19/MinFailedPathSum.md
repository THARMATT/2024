# 931. Minimum Falling Path Sum
Certainly! Here's the problem statement:

**Problem: Minimum Falling Path Sum**

Given an `n x n` matrix of integers, find the minimum sum of any falling path through the matrix. A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position `(row, col)` will be `(row + 1, col - 1)`, `(row + 1, col)`, or `(row + 1, col + 1)`.

Write a function:

```javascript
/**
 * @param {number[][]} matrix - An n x n matrix of integers.
 * @return {number} - The minimum sum of any falling path through the matrix.
 */
function minFallingPathSum(matrix) {
    // Your implementation here
}
```

**Examples:**

Example 1:
```javascript
const matrix1 = [
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9]
];

console.log(minFallingPathSum(matrix1)); // Output: 13
```

Example 2:
```javascript
const matrix2 = [
    [2, 1, 3, 4],
    [6, 5, 4, 2],
    [7, 8, 9, 1],
    [3, 2, 6, 8]
];

console.log(minFallingPathSum(matrix2)); // Output: 12
```

**Note:**
- The matrix will have dimensions `n x n` where `1 <= n <= 100`.
- Each element `matrix[i][j]` will be an integer in the range `[-100, 100]`.
- The minimum falling path sum should be returned as a single integer.

## Code
```javascript
function minFallingPathSum(matrix) {
    const n = matrix.length;

    // Base case: initialize the last row of the DP array
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let j = 0; j < n; j++) {
        dp[n - 1][j] = matrix[n - 1][j];
    }

    // Fill in the DP array from the second-to-last row to the first row
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            const left = dp[i + 1][Math.max(0, j - 1)];      // Diagonally left
            const down = dp[i + 1][j];                        // Directly below
            const right = dp[i + 1][Math.min(n - 1, j + 1)];  // Diagonally right

            dp[i][j] = matrix[i][j] + Math.min(left, down, right);
            // ^^^^^ This line updates the DP array with the minimum falling path sum.
        }
    }

    // Find the minimum sum in the first row of the DP array
    const minSum = Math.min(...dp[0]);
    //                            ^^^^^ This line extracts the minimum value from the DP array.

    return minSum;
}

// Example usage:
const matrix = [
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9]
];

const result = minFallingPathSum(matrix);
console.log(result);  // 13 :Output should be the minimum falling path sum

```
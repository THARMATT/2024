# 1074 Number of Submatrices That Sum to Target

Given a matrix of integers and a target sum, your task is to find the number of non-empty submatrices whose elements sum to the target value. A submatrix is defined by its top-left and bottom-right coordinates (x1, y1) and (x2, y2), where x1 ≤ x ≤ x2 and y1 ≤ y ≤ y2. Two submatrices are considered different if they have at least one differing coordinate.

To clarify, you need to count the number of distinct submatrices whose elements add up to the given target sum.

```javascript
var numSubmatrixSumTarget = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Precompute the cumulative sum for each row
    for (let row = 0; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            matrix[row][col] += matrix[row][col - 1];
        }
    }

    let count = 0;

    // Iterate through all possible pairs of columns
    for (let c1 = 0; c1 < cols; c1++) {
        for (let c2 = c1; c2 < cols; c2++) {
            const map = new Map();
            map.set(0, 1);
            let sum = 0;

            // Iterate through all rows and calculate the sum
            for (let row = 0; row < rows; row++) {
                sum += matrix[row][c2] - (c1 > 0 ? matrix[row][c1 - 1] : 0);

                // Check if there is a subarray with sum equal to target
                count += map.get(sum - target) || 0;

                // Update the frequency of the current sum
                map.set(sum, (map.get(sum) || 0) + 1);
            }
        }
    }

    return count;
};
```
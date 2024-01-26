
# 576. Out of Boundary Paths
You have an `m x n` grid, and there is a ball initially located at the position `[startRow, startColumn]`. The goal is to move the ball within the grid, making at most `maxMove` moves, and count the number of paths that lead the ball out of the grid boundaries. Each move allows the ball to be moved to one of the four adjacent cells in the grid, and it can potentially cross the grid boundary.

Given the integers `m`, `n`, `maxMove`, `startRow`, and `startColumn`, your task is to calculate and return the count of valid paths that move the ball out of the grid boundary. Due to the possibility of a large result, return the count modulo `10^9 + 7`.


```javascript
function findPaths(m, n, maxMove, startRow, startColumn) {
    // Define a constant MOD for modulo operations
    const MOD = 1e9 + 7; // 1000000007

    // Initialize a 3D array dp to store computed values for dynamic programming
    const dp = new Array(maxMove + 1).fill(0).map(() =>
        new Array(m).fill(0).map(() => new Array(n).fill(-1))
    );

    // Define a recursive function dfs to perform depth-first search
    const dfs = (moves, row, col) => {
        // Check if the current position is outside the grid
        if (row < 0 || row >= m || col < 0 || col >= n) {
            return 1; // If outside, count it as a valid path
        }

        // Check if there are no more moves left
        if (moves === 0) {
            return 0; // If no more moves, it's not a valid path
        }

        // Check if the result for the current state is already computed
        if (dp[moves][row][col] !== -1) {
            return dp[moves][row][col]; // Return the precomputed result
        }

        // Define possible directions (up, down, left, right)
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        let paths = 0;

        // Explore each direction recursively and accumulate valid paths
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            paths = (paths + dfs(moves - 1, newRow, newCol)) % MOD;
        }

        // Save the computed result in the dp array
        dp[moves][row][col] = paths;

        return paths; // Return the total valid paths for the current state
    };

    // Start the depth-first search from the initial position
    return dfs(maxMove, startRow, startColumn);
}
```

Explanation of the approach and prerequisites:

- **Approach**: The given function uses a dynamic programming approach to count the number of paths a particle can take within a grid. The grid has dimensions `m` x `n`, and the particle starts at `(startRow, startColumn)`. The particle can move in any of the four cardinal directions (up, down, left, right) for a maximum of `maxMove` moves.

- **Prerequisites**: Understanding of dynamic programming, recursion, and depth-first search (DFS) is essential. The code uses memoization (caching computed results) to avoid redundant calculations and improve efficiency.

- **Dynamic Programming (DP) **: The core idea of dynamic programming is to break down a complex problem into simpler overlapping subproblems and solve each subproblem only once, storing the results for future use. In this code, the `dp` array is used to memoize the results of subproblems. The state `(moves, row, col)` represents the current state of the particle, and `dp[moves][row][col]` stores the number of valid paths from that state.

- **Example**: Consider a 3x3 grid (`m=3`, `n=3`) with the starting position `(0, 0)`, and a maximum of 2 moves (`maxMove=2`). The function will calculate the number of paths the particle can take within these constraints.

    ```javascript
    findPaths(3, 3, 2, 0, 0);
    ```

    The function will return the total number of valid paths. The DFS explores all possible paths, and dynamic programming ensures that previously computed results are reused, reducing redundant calculations.

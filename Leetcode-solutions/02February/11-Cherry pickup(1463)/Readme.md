/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    // Memoization table to store already computed results
    const dp = new Array(n).fill(null).map(() => new Array(m).fill(null).map(() => new Array(m).fill(-1)));

    // Initial call to the DFS function
    return dfs(grid, n, m, 0, 0, m - 1, dp);
};

// Depth-first search function with memoization
function dfs(grid, n, m, r, col1, col2, dp) {
    // Base case: out of bounds
    if (r === n) return 0;

    // If result already computed, return it from memoization table
    if (dp[r][col1][col2] !== -1) return dp[r][col1][col2];

    let maxCherries = 0;
    // Iterate through all possible choices for the two robots
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newCol1 = col1 + i;
            const newCol2 = col2 + j;

            // Recurse to next row with updated column positions for both robots
            if (newCol1 >= 0 && newCol1 < m && newCol2 >= 0 && newCol2 < m) {
                maxCherries = Math.max(maxCherries, dfs(grid, n, m, r + 1, newCol1, newCol2, dp));
            }
        }
    }

    // Cherries collected in the current cell
    const currCherry = (col1 === col2) ? grid[r][col1] : grid[r][col1] + grid[r][col2];

    // Memoize the result
    dp[r][col1][col2] = currCherry + maxCherries;
    return dp[r][col1][col2];
}
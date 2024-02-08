# 279. Perfect Squares

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

## Approach:
1. Initialize a dynamic programming array `dp` of length `n + 1`, where `dp[i]` represents the minimum number of perfect square numbers that sum up to `i`.
2. Set `dp[0] = 0`, as it requires zero perfect squares to sum up to zero.
3. Iterate from `1` to `n`, and for each `i`, initialize `dp[i]` to `i` because the worst-case scenario is to use `i` perfect squares of value `1`.
4. For each `i`, iterate through all perfect squares less than or equal to `i` and update `dp[i]` using the formula `dp[i] = Math.min(dp[i], dp[i - j * j] + 1)`, where `j` represents the perfect square being considered.
5. After completing the iteration, `dp[n]` will hold the minimum number of perfect square numbers that sum up to `n`. Return `dp[n]`.

Sure! Here's the dynamic programming approach to solve the problem along with comments and explanations:

```javascript
function perfectSquare(n) {
    // Create an array dp to store the minimum number of perfect squares that sum up to i
    let dp = new Array(n + 1);
    
    // Initialize dp[0] to 0 since no perfect squares are needed to sum up to 0
    dp[0] = 0;
    
    // Iterate from 1 to n
    for (let i = 1; i <= n; i++) {
        // Initialize dp[i] with maximum possible value
        dp[i] = i;
        
        // Iterate through all possible perfect squares less than or equal to i
        for (let j = 1; j * j <= i; j++) {
            // Update dp[i] with the minimum of current value and (dp[i - j * j] + 1)
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    
    // Return the result stored at index n
    return dp[n];
}


```

### Explanation:
1. We use dynamic programming to solve this problem efficiently.
2. We create an array `dp` where `dp[i]` represents the least number of perfect square numbers that sum up to `i`.
3. We initialize `dp[0]` to `0` since no perfect squares are needed to sum up to `0`.
4. We iterate from `1` to `n`, and for each `i`, we initialize `dp[i]` with the maximum possible value.
5. Within the loop, we iterate through all possible perfect squares less than or equal to `i`.
6. For each perfect square `j`, we update `dp[i]` with the minimum of the current value and `dp[i - j * j] + 1`, which represents the sum of perfect squares required to reach `i`.
7. Finally, we return `dp[n]`, which holds the least number of perfect square numbers that sum up to `n`.

### Complexity: The time complexity of this solution is O(n*sqrt(n)) and the space complexity is O(n), where n is the input number.
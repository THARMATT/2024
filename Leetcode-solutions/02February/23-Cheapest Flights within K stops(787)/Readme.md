# 787. Cheapest Flights Within K Stops

There are `n` cities connected by some number of flights. You are given an array flights where `flights[i] = [fromi, toi, pricei] `indicates that there is a flight from city `fromi` to city toi with cost `pricei.`

You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most `k` stops. If there is no such route, `return -1.`
```js
function findCheapestPrice(n, flights, src, dst, k) {
    const INF = 1e9; // Initialize a large value for unreachable cities
    
    // Initialize a 2D array to store minimum costs
    const dp = Array(n).fill().map(() => Array(k + 2).fill(INF));
    
    // Base case: cost to reach source city with 0 stops is 0
    dp[src][0] = 0;
    
    // Iterate up to k + 1 stops
    for (let j = 1; j <= k + 1; j++) {
        for (const [from, to, price] of flights) {
            // Update minimum cost to reach 'to' city with j stops
            dp[to][j] = Math.min(dp[to][j], dp[from][j - 1] + price);
        }
    }
    
    // Final result is the minimum cost to reach destination with at most k stops
    const result = dp[dst].reduce((acc, val) => Math.min(acc, val), INF);
    return result === INF ? -1 : result;
}

// Example usage:
const n = 3;
const flights = [[0,1,100],[1,2,100],[0,2,500]];
const src = 0;
const dst = 2;
const k = 1;

console.log(findCheapestPrice(n, flights, src, dst, k)); // Output: 200
```
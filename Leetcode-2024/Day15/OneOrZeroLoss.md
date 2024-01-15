# 2225. Find Players With Zero or One Losses

You are given an integer array `matches` where `matches[i] = [winner_i, loser_i]` indicates that the player `winner_i` defeated player `loser_i` in a match.

Write a function `find_players(matches)` that returns a list `answer` of size 2 where:

- `answer[0]` is a list of all players that have not lost any matches.
- `answer[1]` is a list of all players that have lost exactly one match.

The values in the two lists should be returned in increasing order.

**Constraints:**
- You should only consider the players that have played at least one match.
- The testcases will be generated such that no two matches will have the same outcome.

**Examples:**
```python
matches = [[1, 2], [3, 1], [4, 2], [2, 5]]
find_players(matches)  # Output: [[3, 4], [5]]
```

**Explanation:**
- Player 1 defeated player 2, so player 2 has lost a match.
- Player 3 defeated player 1, so player 1 has lost a match.
- Player 4 defeated player 2, so player 2 has lost a match.
- Player 2 defeated player 5, so player 5 has lost a match.

Therefore, the players who have not lost any matches are 3 and 4 (in increasing order), and the player who has lost exactly one match is 5.

Feel free to implement the `find_players` function to solve this problem.

## Code

```javascript
/**
 * @param {number[][]} matches - Array of match results where each element is an array [winner, loser]
 * @return {number[][]} - Array containing two subarrays, the first with zero losses and the second with one loss
 */
var findWinners = function(matches) {
    // Initialize an array to keep track of losses for each player, considering 100000 players
    let losses = new Array(100001).fill(0);

    // Process each match result
    for (const [winner, loser] of matches) {
        // If the winner has no recorded losses, set it to -1 indicating one potential loss
        if (losses[winner] === 0) {
            losses[winner] = -1;
        } 

        // If the loser already has a recorded loss, increment it
        if (losses[loser] === -1) {
            losses[loser] = 1;
        } else {
            losses[loser]++;
        }
    }

    // Initialize arrays to store players with zero losses and one loss
    let zeroLoss = [];
    let oneLoss = [];

    // Iterate through the players and categorize them based on their recorded losses
    for (let i = 1; i <= 100000; ++i) {
        if (losses[i] === -1) {
            zeroLoss.push(i); // Player with zero losses
        } else if (losses[i] === 1) {
            oneLoss.push(i); // Player with one loss
        }
    }

    // Return an array containing two subarrays, representing players with zero losses and one loss
    return [zeroLoss, oneLoss];
};
```
# 1642. Furthest Building You Can Reach

```javascript
var furthestBuilding = function (heights, bricks, ladders) {
    // Length of the heights array
    let len = heights.length - 1;

    // Initialize a min priority queue
    let pq = new MinPriorityQueue({ priority: x => x });

    // Iterate through the heights array
    for (let i = 0; i < len; i++) {
        // Calculate the difference in heights between consecutive buildings
        let heightDifference = heights[i + 1] - heights[i];

        // If there is a height difference (positive)
        if (heightDifference > 0) {
            // If there are ladders remaining, use a ladder for the current difference
            if (ladders > 0) {
                pq.enqueue(heightDifference); // Enqueue the height difference
                ladders--; // Decrement the number of ladders remaining
            } 
            // If there are no ladders left or the current difference is greater than the smallest difference in the queue
            else if (pq.front() && heightDifference > pq.front().element) {
                pq.enqueue(heightDifference); // Enqueue the height difference
                bricks -= pq.dequeue().element; // Use bricks to cover the smallest difference in the queue
            } 
            // If there are no ladders left and the current difference is not greater than the smallest difference in the queue
            else {
                bricks -= heightDifference; // Use bricks to cover the current difference
            }

            // If bricks are not sufficient, return the current index
            if (bricks < 0) return i;
        }
    }

    // If all buildings can be reached, return the last index
    return len;
};

```
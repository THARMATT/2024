# 452. Minimum Number of Arrows to Burst Balloons
```js

function findMinArrowShots(points) {
    if (points.length === 0) return 0;

    // Sort balloons by their end coordinates
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let prevEnd = points[0][1];

    // Iterate through each balloon
    for (let i = 1; i < points.length; i++) {
        // If the current balloon starts after the previous one ends, it needs a new arrow
        if (points[i][0] > prevEnd) {
            arrows++;
            prevEnd = points[i][1]; // Update the previous end coordinate
        }
    }

    return arrows;
}

// Example usage:
const balloons = [[10,16], [2,8], [1,6], [7,12]];
console.log(findMinArrowShots(balloons)); // Output: 2
```
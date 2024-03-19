# 621. Task Scheduler
```js
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

function leastInterval(tasks, n) {
    // Step 1: Calculate the frequency of each task
    const taskFreq = new Array(26).fill(0);
    for (let task of tasks) {
        const index = task.charCodeAt(0) - 'A'.charCodeAt(0);
        taskFreq[index]++;
    }

    // Step 2: Sort the tasks based on frequency
    taskFreq.sort((a, b) => b - a);

    // Step 3: Calculate the idle intervals required
    let maxFreq = taskFreq[0] - 1;
    let idleSlots = maxFreq * n;

    // Step 4: Schedule the tasks
    for (let i = 1; i < taskFreq.length; i++) {
        idleSlots -= Math.min(taskFreq[i], maxFreq);
    }

    // Step 5: Return the minimum number of intervals
    return Math.max(idleSlots + tasks.length, tasks.length);
}


```
# 169. Majority Element

Given an array nums of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.
**Approach 1: Hashmap-based Solution**

**Intuition:**
1. Initialize a hashmap to count occurrences of each element in the array.
2. Iterate through the array, updating counts in the hashmap.
3. Check if any element appears more than ⌊n / 2⌋ times in the hashmap.
4. Return the majority element if found, or null if not.


```javascript
function majorityElement(nums) {
    let hashmap = {};
    let n = nums.length;

    // Step 1: Count occurrences of each element
    for (let i = 0; i < n; i++) {
        if (hashmap[nums[i]] === undefined) {
            hashmap[nums[i]] = 1;  // Initialize count if not present
        } else {
            hashmap[nums[i]]++;    // Increment count if already present
        }
    }

    // Step 2: Find the majority element
    for (let key in hashmap) {
        if (hashmap[key] > n / 2) {
            return parseInt(key);  // Convert key back to integer
        }
    }

    // If no majority element found
    return null;
}

// Example usage:
let nums = [2, 2, 1, 1, 1, 2, 2];
console.log("Majority Element:", majorityElement(nums));


```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)  
**Pros:** Straightforward implementation, easy to understand  
**Cons:** Requires extra space for the hashmap, making it less memory-efficient for large arrays  

**Approach 2: Boyer-Moore Voting Algorithm**

**Intuition:**
1. Find a candidate for the majority element using a voting-like process.
2. Verify the candidate by counting its occurrences in the array.
3. If the candidate appears more than ⌊n / 2⌋ times, it's the majority element.

```javascript
function majorityElement(nums) {
    let elem;  // Declaring variables to store the candidate element and its count
    let count = 0;  // Initialize count to 0

    const n = nums.length;  // Calculate the length of the array

    for (let i = 0; i < n; i++) {
        if (count === 0) {  // If count is 0, update elem and reset count
            elem = nums[i];
            count = 1;
        } else if (elem === nums[i]) {  // If current element is equal to elem, increment count
            count++;
        } else {  // If current element is different from elem, decrement count
            count--;
        }
    }

    // At this point, elem is a potential majority element, but you need to verify if it appears more than n/2 times

    count = 0;  // Reset count to 0

    for (let i = 0; i < n; i++) {
        if (nums[i] === elem) {  // Count occurrences of elem
            count++;
        }
    }

    if (count > n / 2) {  // If elem appears more than n/2 times, it's the majority element
        return elem;
    } else {
        return null;  // Otherwise, there is no majority element
    }
}


```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)  
**Pros:** Efficient in both time and space, no need for extra space  
**Cons:** Requires two passes through the array, may be slightly less intuitive for beginners



**Comparison:**
- Both approaches have a time complexity of O(n), making them efficient for large arrays.
- The hashmap-based solution has a space complexity of O(n) due to the hashmap, while the Boyer-Moore algorithm has a space complexity of O(1), making it more memory-efficient.
- The hashmap-based solution is easier to implement and understand, but it requires additional space.
- The Boyer-Moore algorithm is more efficient in terms of space and equally efficient in terms of time, making it preferable for larger datasets where memory usage is a concern.

**Conclusion:**
- If memory usage is not a concern and simplicity is preferred, the hashmap-based solution is a good choice.
- If memory efficiency is crucial, especially for large datasets, the Boyer-Moore algorithm is the optimal choice.

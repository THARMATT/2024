
# 49. Group Anagrams

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An `Anagram` is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


```javascript
function groupAnagrams(strs) {
    // Create a map to store groups of anagrams
    const anagrams = new Map();

    // Iterate through each string in the input array
    for (const str of strs) {
        // Sort the characters of the string to form a key
        const sortedStr = str.split('').sort().join('');

        // If the sorted key exists in the map, append the original string to its value array
        if (anagrams.has(sortedStr)) {
            anagrams.get(sortedStr).push(str);
        } else {
            // Otherwise, create a new entry in the map with the sorted key and an array containing the original string
            anagrams.set(sortedStr, [str]);
        }
    }

    // Return an array containing the arrays of grouped anagrams
    return Array.from(anagrams.values());
}

// Example usage:
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
```
#### My Initial Approach:
- Create an empty array for each string in the input array.
- Merge the strings that are anagrams by comparing each string with every other string in the array.
- Return the array with subarrays representing groups of anagrams.
#### **Approach**:
1. We initialize a `Map` called `anagrams` to store groups of anagrams. Each key in this map represents a sorted version of a string, and each value is an array containing the original strings that have the same sorted version (anagrams).
  
2. We iterate through each string in the input array. For each string, we:
   - Sort its characters to form a sorted key.
   - If the sorted key already exists in the map, we push the original string to the corresponding array value.
   - If the sorted key doesn't exist, we create a new entry in the map with the sorted key and an array containing the original string.

3. Finally, we return an array containing the arrays of grouped anagrams obtained from the values of the `anagrams` map.
In short:

**Optimized Approach**:
- Time Complexity: O(n * m * log m) - where n is the number of strings in the input array and m is the average length of the strings.
- Space Complexity: O(n * m) - due to the space required for the map and the arrays stored as values.

**Initial Approach**:
- Time Complexity: O(n^2 * m) - where n is the number of strings in the input array and m is the average length of the strings.
- Space Complexity: O(n * m) - due to the space required for the arrays.


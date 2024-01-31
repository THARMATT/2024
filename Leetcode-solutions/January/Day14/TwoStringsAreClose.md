

# 1657. Determine if Two Strings Are Close

Two strings are considered close if you can attain one from the other using the following operations:

**Operation 1:** Swap any two existing characters.

For example, `abcde -> aecdb`

**Operation 2:** Transform every occurrence of one existing character into another existing character, and do the same with the other character.

For example, `aacabb -> bbcbaa` (all 'a's turn into 'b's, and all 'b's turn into 'a's)

You can use the operations on either string as many times as necessary.

Given two strings, `word1` and `word2`, implement a function `areStringsClose(word1: str, word2: str) -> bool` that returns `true` if `word1` and `word2` are close, and `false` otherwise.

**Function Signature:**
```python
def areStringsClose(word1: str, word2: str) -> bool:
    # Your implementation here
```

**Input:**
- Two strings, `word1` and `word2` (1 <= len(word1), len(word2) <= 10^5).

**Output:**
- Return `true` if `word1` and `word2` are close, and `false` otherwise.

**Note:**
- The characters in the strings are case-sensitive.
- You can perform the operations on either string.
- You can use the operations as many times as needed to make the two strings close.

# Code

```javascript


// Define the function closeStrings, which takes two strings as input
var closeStrings = function(word1, word2) {
    // Initialize two arrays to store the frequency of each letter in the alphabet
    const frequency1 = new Array(26).fill(0);
    const frequency2 = new Array(26).fill(0);

    // Iterate over each letter in the first word and update its frequency in frequency1 array
    for (let letter of word1)
        frequency1[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    // Iterate over each letter in the second word and update its frequency in frequency2 array
    for (let letter of word2)
        frequency2[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    // Check if there are any letters that exist in one word but not in the other
    for (let index = 0; index < 26; index++) {
        if (frequency1[index] == 0 && frequency2[index] != 0)
            return false;
        if (frequency1[index] != 0 && frequency2[index] == 0)
            return false;
    }

    // Sort the frequency arrays to compare if the frequency distributions are the same
    frequency1.sort((a, b) => a - b);
    frequency2.sort((a, b) => a - b);

    // Check if the sorted frequency arrays are equal using JSON.stringify
    return JSON.stringify(frequency1) === JSON.stringify(frequency2);
};
```
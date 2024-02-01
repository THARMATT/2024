# 1704. Determine if String Halves Are Alike


You are given a string `s` of even length. Split this string into two halves of equal lengths, and let `a` be the first half and `b` be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that `s` contains uppercase and lowercase letters.

Write a function `areHalvesAlike(s)` that takes the input string `s` and returns `true` if `a` and `b` are alike; otherwise, return `false`.

**Function Signature:**

```javascript
/**
 * Check if two halves of a string have the same number of vowels.
 * @param {string} s - The input string of even length.
 * @returns {boolean} - True if the two halves have the same number of vowels, false otherwise.
 */
function areHalvesAlike(s) {
    // Implementation goes here
}
```

**Example:**

```javascript
console.log(areHalvesAlike("book"));  // Expected output: true
console.log(areHalvesAlike("text"));  // Expected output: false
```

**Note:**

- The input string `s` will always have an even length.
- The characters in the string can be both uppercase and lowercase.
- The vowels are 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'.
## Code
```javascript
/**
 * Function to count vowels in a string
 * @param {string} str - The input string
 * @returns {number} - The count of vowels in the string
 */
function countVowels(str) {
    // Create a set of vowels for efficient lookup
    const vowels = new Set("aeiouAEIOU");

    // Initialize the count of vowels to zero
    let count = 0;

    // Iterate through each character in the input string
    for (const char of str) {
        // Check if the character is a vowel by checking if it's present in the vowels set
        if (vowels.has(char)) {
            // Increment the count if the character is a vowel
            count++;
        }
    }

    // Return the final count of vowels in the string
    return count;
}

/**
 * Function to check if two halves of a string have the same number of vowels
 * @param {string} s - The input string
 * @returns {boolean} - True if the two halves have the same number of vowels, false otherwise
 */
function halvesAreAlike(s) {
    // Get the length of the input string
    const n = s.length;

    // Calculate the midpoint of the string
    const mid = n / 2;

    // Split the string into two halves using substring method
    const a = s.substring(0, mid); // First half
    const b = s.substring(mid);    // Second half

    // Count the number of vowels in each half using the countVowels function
    const countA = countVowels(a);
    const countB = countVowels(b);

    // Check if the counts of vowels in the two halves are equal
    return countA === countB;
}

// Example Test Case
// Call the halvesAreAlike function with the input string "book"
const result = halvesAreAlike("book");

// Output the result to the console
console.log(result);  // Expected output: true

```
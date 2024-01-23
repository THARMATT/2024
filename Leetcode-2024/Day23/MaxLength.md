
# 1239. Maximum Length of a Concatenated String with Unique Characters
You are given an array of strings `arr`. A string s is formed by the concatenation of a subsequence of `arr` that has unique characters.

Return the maximum possible length of `s`.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

```javascript 

// Function to find the maximum length of a unique character string
function maxLengthDP(arr) {
  // Initialize an array to store the lengths of unique character strings
  const dp = [0];

  // Iterate through each string in the input array
  for (let i = 0; i < arr.length; i++) {
    // Get the current string
    const current = arr[i];

    // Get the bitmask representation of the current string
    const bitmask = getBitmask(current);

    // If the bitmask is 0, the current string has duplicate characters, so skip it
    if (bitmask === 0) continue;

    // Iterate through the existing unique character strings in reverse order
    for (let j = dp.length - 1; j >= 0; j--) {
      // If the current bitmask and the bitmask of an existing string have no common set bits
      if ((dp[j] & bitmask) === 0) {
        // Add the combination of the current bitmask and the bitmask of the existing string to the array
        dp.push(dp[j] | bitmask);
      }
    }
  }

  // Return the maximum length among all unique character string combinations
  return Math.max(...dp.map(countBits));
}

// Function to get the bitmask representation of a string
function getBitmask(str) {
  let bitmask = 0;

  // Iterate through each character in the string
  for (const char of str) {
    // Convert the character to its ASCII code and calculate the position in the bitmask
    const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);

    // If the corresponding bit is already set, the string has duplicate characters
    if ((bitmask & (1 << charCode)) > 0) {
      return 0; // Not unique
    }

    // Set the bit at the calculated position
    bitmask |= 1 << charCode;
  }

  // Return the final bitmask
  return bitmask;
}

// Function to count the number of set bits (1s) in a bitmask
function countBits(bitmask) {
  let count = 0;

  // Iterate until all bits are processed
  while (bitmask > 0) {
    // Increment count if the rightmost bit is set
    count += bitmask & 1;

    // Right shift the bitmask to process the next bit
    bitmask >>= 1;
  }

  // Return the total count of set bits
  return count;
}

// Example usage:
const arr = ["un", "iq", "ue"];
const maxLengthDPResult = maxLengthDP(arr);
console.log(maxLengthDPResult);
```
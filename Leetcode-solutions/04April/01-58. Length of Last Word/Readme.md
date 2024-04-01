# 58. Length of Last Word
```javascript
function lengthOfLastWord(s) {
    // Trim any leading or trailing whitespace
    s = s.trim();
    
    // Split the string into words by spaces
    const words = s.split(' ');
    
    // Check if there are any words in the string
    if (words.length === 0) {
        return 0;
    }
    
    // Return the length of the last word
    return words[words.length - 1].length;
}

// Example usage:
const s = "Hello World";
console.log(lengthOfLastWord(s)); // Output: 5
```

# 13. Roman to Integer

Given a roman numeral, convert it to an integer.

## Code
``` javascript
/**
 * Convert a Roman numeral to an integer:

 * @param {string} s - Roman numeral string.
 * @return {number} - Integer value.
 */
var romanToInt = function(s) {
    // Create a dictionary to map Roman numerals to their corresponding values
    let romanDict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Initialize a variable to store the total integer value
    let Sum = 0;

    // Iterate through the Roman numeral from left to right
    for (let i = 0; i < s.length - 1; i++) {
        // If the current numeral is less than the next one, subtract its value
        if (romanDict[s[i]] < romanDict[s[i + 1]]) {
            Sum = Sum - romanDict[s[i]];
        } else {
            // Otherwise, add its value to the total
            Sum = Sum + romanDict[s[i]];
        }
    }

    // Add the value of the last numeral to the total
    Sum = Sum + romanDict[s[s.length - 1]];

    // Return the total as the result
    return Sum;
};

```
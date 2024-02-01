# **Minimum Steps to Make Two Strings Anagrams**

You are given two strings of the same length, `s` and `t`. In a single step, you can choose any character in string `t` and replace it with another character. Your goal is to determine the minimum number of steps required to make string `t` an anagram of string `s`.

An anagram of a string is a rearrangement of its characters that creates another string with the same characters, either in the same or different order.

Write a function or algorithm to calculate the minimum number of steps needed to transform `t` into an anagram of `s`.

**Function Signature:**
```python
def min_steps_to_anagram(s: str, t: str) -> int:
    # Your code here
```

**Input:**
- Two strings, `s` and `t`, where 1 <= len(s), len(t) <= 5 * 10^4.

**Output:**
- An integer representing the minimum number of steps to make `t` an anagram of `s`.

**Example:**
```python
assert min_steps_to_anagram("abc", "bca") == 0
assert min_steps_to_anagram("listen", "silent") == 0
assert min_steps_to_anagram("abc", "xyz") == 3
assert min_steps_to_anagram("anagram", "mangaar") == 0
```



## **Approach:**

1. **Map Banao:**
   - Har character ki frequency ko store karne ke liye ek Map banao, jisme `s` ke har character ki counting hogi.

2. **Frequency Counting:**
   - `s` mein har character ki frequency ko calculate karo aur Map mein store karo.

3. **Steps Counter Initialize Karo:**
   - `steps` naamak ek counter ko 0 se initialize karo. Yeh batayega ki humein kitne kadam lagenge.

4. **Character Matching:**
   - Ab, `t` mein har character ko check karo.
   - Agar woh character Map mein nahi hai ya fir uski frequency 0 hai, toh `steps` ko badhao. Yeh indicate karega ki ek aur kadam chahiye.
   - Agar character Map mein hai aur uski frequency 0 nahi hai, toh uski frequency ko Map mein se ghatao, jisse yeh bataye ki ek match mil gaya.

5. **Ant Mein Steps Return Karo:**
   - Yehi karo jab tak `t` ke saare characters check ho jaate hain.
   - Ant mein `steps` ko return karo, jo humein minimum kadam bataega.

**Concepts to Know:**

1. **String Manipulation:**
   - Strings ke saath kaam karne ka tajurba hona chahiye, jaise ki characters ko iterate karna, unki frequency count karna.

2. **HashMap:**
   - HashMap ka concept hona chahiye, jisme key-value pairs hote hain. Yahan, hum character frequency count ke liye ek HashMap ka istemal kar rahe hain.

3. **Frequency Counting:**
   - Ek character ki frequency count kaise karte hain, yeh samajhna important hai. Yahan, har character ki frequency ko store karne ke liye ek Map ka istemal ho raha hai.

4. **Conditional Statements:**
   - If-else statements ka istemal karke conditions check karna bhi aana chahiye. Jaise ki, kya ek character Map mein hai ya nahi, uski frequency kya hai, in cheezon ko check karna.

5. **Iteration (Looping):**
   - Loop ka istemal karke strings ke characters par iterate karna aana chahiye. Yahan, `for...of` loop ka istemal hua hai.

## Code
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    // Check if the lengths of the two strings are not equal
    if (s.length !== t.length) {
        return -1; // If not, return -1 as strings must be of the same length for anagrams
    }

    // Create a HashMap to store the frequency of each character in string s
    const charFrequency = new Map();

    // Count character frequencies in string s
    for (const char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Initialize the steps counter to 0
    let steps = 0;

    // Compare character frequencies in string t
    for (const char of t) {
        // If character not in s or frequency is already 0, increment steps
        if (!charFrequency.has(char) || charFrequency.get(char) === 0) {
            steps++;
        } else {
            // Decrement the frequency in the map
            charFrequency.set(char, charFrequency.get(char) - 1);
        }
    }

    // Return the total steps needed to make t an anagram of s
    return steps;
};

```
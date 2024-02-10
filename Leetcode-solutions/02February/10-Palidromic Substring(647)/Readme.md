# 647. Palindromic Substrings

Given a string `s`, return the number of `palindromic substrings` in it.

A `string` is a `palindrome` when it reads the same backward as forward.

A `substring` is a `contiguous sequence `of characters within the string.

### Story Analogy: The Count of Palindromic Substrings

**Characters in a Kingdom**:
Imagine you have a kingdom represented by a string `s`. Each character in this kingdom represents a person.

**Finding Palindromes**:
Now, let's say we're on a quest to find palindromic relationships within this kingdom. A palindromic relationship is like a magical bond between characters where their positions mirror each other.

**Exploring the Kingdom**:
We embark on our quest by traversing through this kingdom, character by character.

**Counting Palindromic Individuals**:
As we journey through the kingdom, we keep a tally of every individual character. Why? Because every character, by themselves, is considered a single-character palindrome.

**Discovering Duos**:
We then start noticing pairs of characters standing next to each other who are identical. These pairs represent two-character palindromes.

**Recording Duos**:
For each pair of identical characters we find, we add them to our tally of palindromic individuals and note down that their bond forms a two-character palindrome.

**Unraveling Longer Bonds**:
Next, we start unraveling longer bonds. We look for groups of characters where the first and last characters match, indicating a potential palindrome. But we need to be sure these characters have a palindromic relationship inside them too.

**Confirming Longer Bonds**:
For each potential group of characters with matching first and last characters, we check if the characters in between form a palindromic bond. If they do, we add this group to our tally of palindromic individuals and note down that their bond forms a palindrome.

**Returning Our Findings**:
After thoroughly exploring the kingdom and counting every palindromic individual and bond, we return with our findings, which is the total count of palindromic substrings in the kingdom.

### Code Explanation:

1. **Initialization**:
   - We initialize variables to keep track of our journey through the kingdom (`n`, `count`) and create a 2D array `dp` to record our findings about palindromic relationships.

2. **Base Cases**:
   - We handle the simplest cases first: single-character and two-character palindromes. Each character by itself is a palindrome, and we also check adjacent characters for being identical.

3. **Exploring the Kingdom**:
   - We systematically explore the kingdom, looking for longer palindromic bonds. We start with smaller groups of characters and gradually expand our search.

4. **Counting Palindromes**:
   - For each palindromic bond we find, we increment our count to keep track of how many palindromes we've discovered.

5. **Returning Our Findings**:
   - Finally, we return the total count of palindromic substrings we've found in the kingdom.

# Code

### 1. Initialization:

```javascript
const s = "abcb";
const n = s.length;
let count = 0;
const dp = Array(n).fill(null).map(() => Array(n).fill(false));
```

In this step, we initialize our variables:
- `s`: Represents our kingdom, which is the input string.
- `n`: Represents the length of our kingdom.
- `count`: Initialized to 0, this variable will store the count of palindromic substrings.
- `dp`: A 2D array used for dynamic programming, initialized to `false`. We'll use this array to mark whether substrings are palindromes or not.

### 2. Base Cases:

```javascript
// Base case 1: Single-character palindromes
for (let i = 0; i < n; i++) {
    dp[i][i] = true; // A single character is always a palindrome
    count++;
}

// Base case 2: Two-character palindromes
for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i+1]) {
        dp[i][i+1] = true; // If two adjacent characters are the same, it forms a palindrome
        count++;
    }
}
```

Here, we handle the simplest cases:
- Each individual character is considered a palindrome, so we mark them as `true` in our `dp` array and increment the count.
- We also check for adjacent characters being the same and mark them as palindromes.

For our example string "abcb":
- Base case 1: `a`, `b`, `c`, `b` are all single-character palindromes.
- Base case 2: `bcb` forms a two-character palindrome.

### 3. Exploring the Kingdom:

```javascript
// Explore longer substrings
for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        if (s[i] === s[j] && dp[i+1][j-1]) {
            dp[i][j] = true; // Mark the substring as palindrome
            count++;
        }
    }
}
```

Now, we systematically explore the kingdom to find longer palindromic substrings.
- We start with substrings of length 3 and gradually increase the length.
- For each substring, we check if the first and last characters match (`s[i] === s[j]`) and if the substring between them is already marked as a palindrome (`dp[i+1][j-1]`).
- If both conditions are met, we mark the current substring as a palindrome and increment the count.

For our example string "abcb":
- We find the palindromic substring "bcb" and mark it as a palindrome.

### 4. Counting Palindromes:

```javascript
return count;
```

After exploring the kingdom and marking all palindromic substrings, we return the total count of palindromic substrings.

### Summary:

By following these steps, the code efficiently identifies and counts all palindromic substrings within the given string. It uses dynamic programming techniques to break down the problem into smaller subproblems and efficiently computes the solution.
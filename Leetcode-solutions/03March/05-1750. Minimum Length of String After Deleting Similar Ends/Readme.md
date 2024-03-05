# 1750. Minimum Length of String After Deleting Similar Ends

Given a string `s` consisting only of characters `'a'`, `'b'`, and `'c'`. You are asked to apply the following algorithm on the string any number of times:

- Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
- Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
- The prefix and the suffix should not intersect at any index.
- The characters from the prefix and suffix must be the same.
- Delete both the prefix and the suffix.
- Return the minimum length of s after performing the above operation any number of times (possibly zero times).

```js
var minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    let char = s[left];
    while (left <= right && s[left] === char) {
      left++;
    }
    while (right >= left && s[right] === char) {
      right--;
    }
  }

  return right - left + 1;
};
```

- Initial Intution
  I understood that this is two pointer problem
  now get confused how to solve it?
  I had an approach to return the minimum length
  iterate from the last and and first if the elements are same remove them
  otherwise return the length of remaning elements
  but now is the problem how to solve it...

```js
function minimumlength(s) {
  let n = s.length;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (left !== right) {
      return s.length;
    } else {
      left--;
      right--;
      return s.length;
    }
  }
}
```

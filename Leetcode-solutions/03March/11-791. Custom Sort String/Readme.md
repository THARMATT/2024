# 791. Custom Sort String

You are given two strings `order` and `s`. All the characters of order are `unique` and were sorted in some custom order previously.

Permute the characters of `s` so that they match the order that order was sorted. More specifically, if a character `x` occurs before a character `y` in order, then `x` should occur before `y` in the permuted string.

Return any permutation of `s` that satisfies this property.

```js
function customSortString(order, s) {
  // Step 1: Create a dictionary to store the order of characters in 'order'
  const orderMap = {};
  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i;
  }

  // Step 2: Count the frequency of each character in 's'
  const frequency = {};
  for (let char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Step 3: Iterate through 'order' and append characters to the result string
  let result = "";
  for (let char of order) {
    if (frequency[char]) {
      result += char.repeat(frequency[char]);
      delete frequency[char];
    }
  }

  // Step 4: Append any remaining characters from 'frequency' to the result string
  for (let char in frequency) {
    result += char.repeat(frequency[char]);
  }

  return result;
}
```

- Initial Approach
  My approach is simple firtly take the empty hashtable
  and then check if there is any common strings b/w string s and order if yes
  then try to push character that oocur in order string acc to the order of order and then return upcoming hashmap....


```js
function(order,s){
let map={}
let char;
for ( char of s){
if (s[char]!==order[char]){
return s}}
while(s[char]===order[char]){
map.push(order[char])}

 return map
 }
```

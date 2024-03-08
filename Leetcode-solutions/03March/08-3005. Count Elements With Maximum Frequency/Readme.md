# 3005. Count Elements With Maximum Frequency

You are given an array `nums` consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the `maximum frequency`.

The frequency of an element is the number of occurrences of that element in the `array`.

```js
var maxFrequencyElements = function (nums) {
  const freqCounter = new Map();
  for (const num of nums) {
    freqCounter.set(num, (freqCounter.get(num) || 0) + 1);
  }

  const maxFrequency = Math.max(...freqCounter.values());

  const maxFreqElements = [...freqCounter.keys()].filter(
    (num) => freqCounter.get(num) === maxFrequency
  );

  const totalFrequency = maxFrequency * maxFreqElements.length;

  return totalFrequency;
};
```

- Initial Approach
  I think problem should be like that
  firstly we have to make a hashmap which determines the occuerence of each no
  then find the number with maximum occerence and lastly we will return that no of element having most frequency.

```js
function maxFrequencyElements(arr) {
  let map = {};
  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count < map[num]) {
      return count++;
    }
  }
  return count;
}
```

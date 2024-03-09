# 2540. Minimum Common Value

Given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, return the `minimum integer common` to both arrays. If there is no common integer amongst nums1 and nums2, `return -1`.

Note that an integer is said to be common to `nums1` and `nums2` if both arrays have at least one occurrence of that integer.

```js
function getCommon(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      return nums1[i];
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return -1;
}
```

- Initial Approach
  Problem looks simple.
  Problem is saying that we have to find the lowest common integer bw two arrays.
  Firstly sort both the arrays,
  and find is there is any common element bw both if not return -1

if there is some elements are common return the lowest one, now come to implemnatation part

```js
function commonelement(num1, num2) {
  num1.sort((a, b) => a - b);
  num2.sort((a, b) => a - b);
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (num1[i] === num2[j]) {
        return Math.min(num1[i], num2[j]);
      }
    }
  }
  return -1;
}
```

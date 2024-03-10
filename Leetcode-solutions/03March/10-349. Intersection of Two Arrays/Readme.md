# 349. Intersection of Two Arrays
Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be `unique` and you may return the result in any order.

```js
function intersection(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let result = new Set(); // Using Set to ensure uniqueness
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.add(nums1[i]); // Adding to Set
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return Array.from(result); // Converting Set back to Array
}
```

- Initial Approach
Here we have to find the common element bw two arrays.
Approach looks simple
firstly we check if there is any element any present common bw them if not then return []
if yes then return the common element
```js
function Intersection(nums1,nums2){
nums1.sort((a,b)=>a-b)
nums2.sort((a,b)=>a-b));
let i=0;
let j=0;
while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        } else if (nums1[i] < nums2[j]) {
            i++;
  return nums1[i];
        } else if {
            j++;
  return nums1[i];
        }
    }
    
    return []
}
```

- Another Approach 
```js
function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = new Set();
    
    for (const num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }
    
    return Array.from(result);
}
```

- Using `let result = new Set();` creates a Set data structure, while `let result = [];` creates a regular array. The main difference between them lies in how they handle `duplicate elements`:

- Set: A Set is a collection of unique elements where each element can only occur once. If you try to add a duplicate element to a Set, it will simply ignore it. This property makes Sets suitable for ensuring uniqueness in a collection of elements.

- Array: An array can contain duplicate elements. If you push a duplicate element into an array, it will be added as a separate element, resulting in duplicates unless you manually check and remove them.
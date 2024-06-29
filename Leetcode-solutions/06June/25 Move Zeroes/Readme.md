# Move Zeros

```jsx
//simply check kra ki nums[i] zero toh nhi agr nhi toh usko num[index] pr shift kr do
// doosra looop index se shuru hota aur bche hue elements ko zero me convert kr deta.
function moveZeroes(nums){
    let index=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[index]=nums[i]
            index++
        }
    }
 for(let i=index;i<nums.length;i++){
    nums[i]=0
 }

}
```

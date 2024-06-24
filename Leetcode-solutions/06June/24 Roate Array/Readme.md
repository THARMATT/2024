# Rotate Array
```js
function rotate(nums,k){
    let n=nums.length;
        k = k % n; 
    let arr1=nums.slice(n-k);
    let arr2=nums.slice(0,n-k);
    let result=arr1.concat(arr2);

    for(let i=0;i<n;i++){
        nums[i]=result[i]
    }
}
```
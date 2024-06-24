# Sorted and Rotated
```js
function check(arr){
    let n=arr.length;
    let count=0;
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            count++;
        }
    }
    if(arr[0]<arr[n-1]){
        count++
    }
    return count<2?true:false
}
```
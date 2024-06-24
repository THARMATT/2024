# Second largest Element

```js

class Solution{
        print2largest(arr,n){
         let large=-Infinity;
         let secondlarge=-Infinity
         for(let i=0;i<n;i++){
             if(arr[i]>large){
                 secondlarge=large;
                 large=arr[i]
             }
             else if(arr[i]>secondlarge && arr[i]!==large){
                 secondlarge=arr[i]
             }
         }
         return secondlarge===-Infinity?-1:secondlarge
        }
    }
    
   
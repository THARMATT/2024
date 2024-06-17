
# Recursive Bubble Sort

```js
class Solution
{
   //Function to sort the array using bubble sort algorithm.
   
  bubbleSort(arr, n) {
      if(n==1){
          return
      }
        for (let i = 0; i < n - 1; i++) {
             if(arr[i]>arr[i+1]){
                 this.swap(arr, i, i + 1);
             }
        }
        this.bubbleSort(arr,n-1)
    }

    // Helper function to swap two elements in the array
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
}
```
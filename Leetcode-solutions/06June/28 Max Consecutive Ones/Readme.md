- Max Consecutive Ones
    
    ```jsx
    
    /*
     knows answer somewhere but fail to write algo
     kush nhi kiya, bss do variable liye ek count check krne ko, 
     doosra count,
     agr element 1 hai toh count ko bda do otherwise,
     count ko 0 set kr do.
     
     */
    var findMaxConsecutiveOnes = function (arr) {
    
        let maxcount = 0;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 1) {
                count++
            }
            else {
                if (count > maxcount) {
                    maxcount = count;
                }
    
                count = 0;
            }
        }
        if (count > maxcount) {
            maxcount = count
        }
        return maxcount
    };
    
    /* Algo
    Initialize two variables: maxCount to keep track of the maximum number of consecutive 1's, and count to count the current streak of 1's.
    Iterate through each element of the array.
    If the current element is 1, increment count.
    If the current element is 0, update maxCount if count is greater, then reset count to 0.
    After the loop, perform a final check to update maxCount in case the array ends with a streak of 1's.
    Return maxCount.
    ```
# Missing Number

- Missing Number
    
    ```jsx
    //Phele array ko sort kiya aur looop lgake  check kiya konsa number missing
    // Pr uss approach se ache se test cases handle nhi hue
    
    // Last me sum nikala, total nikal aur total-sum, aa gya result.
    var missingNumber = function(nums) {
        let n=nums.length;
        let sum=0;
        let total=(n*(n+1))/2;
        for(let i=0;i<n;i++){
            sum+=nums[i]
        }
        return total-sum
    };
    ```
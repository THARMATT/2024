var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // Handle cases where k is greater than n

    // Get the last k elements and the first n-k elements
    const arr1 = nums.slice(n - k);
    const arr2 = nums.slice(0, n - k);
    
    // Concatenate the two parts
    const result = arr1.concat(arr2);
    console.log(arr1);
    console.log(arr2);
   for (let i = 0; i < n; i++) {
        nums[i] = result[i];
    }
};

rotate([1,2,3,4,5,6,7,8,9],4)
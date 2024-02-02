# 1291. Sequential Digits

An integer has `sequential digits` if and only if each digit in the number is one more than the previous digit.

Return a `sorted` list of all the integers in the range `[low, high]` inclusive that have sequential digits.

```javascript
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
   let result=[] ;
   // Iterate over possible starting digits from 1 to 9
   for(let startDigit=1; startDigit<=9; startDigit++){
       let num=startDigit;
       let nextDigit=startDigit+1;
       
       // Generate sequential digits by appending next digits
       while(nextDigit<=9 && num<=high){
           num=num*10+nextDigit;
       
           // Check if the generated number is within the specified range [low, high]
           if(num<=high && num>=low){
               result.push(num)
           }
           nextDigit++;
       }
   }
   // Sort the result array in ascending order
   return result.sort((a,b)=>a-b);
};
```

**Approach:**
1. The function starts by initializing an empty array `result` to store valid sequential digits.
2. It uses a nested loop structure. The outer loop iterates over possible starting digits from 1 to 9.
3. The inner loop generates sequential digits by appending the next digit to the current number until either the next digit exceeds 9 or the generated number exceeds the `high` limit.
4. Valid sequential digits within the specified range `[low, high]` are added to the `result` array.
5. The function returns the sorted `result` array in ascending order.

**Complexities:**
- **Time Complexity:** The time complexity is O(1) because the loops have a constant number of iterations (1 to 9), and the overall time complexity is dominated by the sorting operation, which is O(n log n), where n is the number of valid sequential digits generated.
- **Space Complexity:** The space complexity is O(1) since the additional space used is independent of the input size, and it doesn't grow with the size of the input. The main space used is for the `result` array, which is relatively small and doesn't scale with the input range.
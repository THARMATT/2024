- Single Number
    
    ```jsx
    /*
    Is approach me humne count ek object le liya aur nums pr loop chlake
    number ki occurence check kri
    next loop chllake bo nikal liya jiski occurence one ho
     */
    var singleNumber = function(nums) {
        let count={}
        for( let num of nums){
            if(count[num]===undefined){
                count[num]=1
            }
            else{
                count[num]++
            }
        }
        for (let num in count){
            if(count[num]===1){
                return Number(num)
            }
        }
    };
    
    // XOR k sath
    function singleNumber(nums){
        let single=0;
        for(let num of nums){
            single=num^single;
        }
        return single
    }
    
    //XOR :XOR (Exclusive OR) is a bitwise operation that results in true (1) only when the number of true inputs is odd.
    ```
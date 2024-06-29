- Find Union
    
    ```jsx
    //same as remove duplicate just join arr then sort, then 
    // take an empty arry
    // push element to empty arr and instead of increacing index change the current val.
    class Solution 
    {
        //Function to return a list containing the union of the two arrays. 
        findUnion(arr1, arr2, n, m)
        {
           let carr=arr1.concat(arr2).sort((a,b)=>a-b);
           let uniquearr=[]
           let prev=null;
           for(let i=0;i<carr.length;i++)
           {
               if(carr[i]!==prev)
               {
                   uniquearr.push(carr[i]);
                   prev=carr[i]
                  
               }
           }
           return uniquearr;
           
         
       }
    }
    ```
- Linear Search
    
    ```jsx
    // just loop lgaya aur find kr liya
    class Solution {
        
        searchInSorted(arr, N, k)
        {
            //your code here
            for(let i=0;i<arr.length;i++){
                if(arr[i]==k){
                    return 1
                }
                
            }
            return -1
        }
       
    }
    ```
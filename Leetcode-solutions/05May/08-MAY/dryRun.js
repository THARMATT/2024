// function zeroToN(n){
//    let result=[]
//    for(i=0;i<=n;i++){
//     result.push(i)
//    }
//    console.log(result)
//    return result
// }
// zeroToN(9)


// function recursiveWay(n){
//     let i=0
//     let result=[]
// if(i>n){
//     return
// }
// else{
//     i++
//     result.push(i)
// }

// console.log(result)
// return result
// }
// recursiveWay(7);


function generateArray(n,result=[]){
if(n<=0){
    return result
}
generateArray(n-1,result);
result.push(n)
// console.log(result);
return result
}
console.log(generateArray(-9))



// function generateArray(n, result = []) {
//     if (n === 0) {
//         return result;
//     }
   
//     generateArray(n - 1, result);
//     result.push(n);
//     return result;
// }

// // Example usage:
// const n = 5;
// const newArray = generateArray(n);
// console.log(newArray); // Output: [1, 2, 3, 4, 5]

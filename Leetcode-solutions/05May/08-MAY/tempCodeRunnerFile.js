function generateArray(n,result=[]){
if(n===0){
    return
}
generateArray(n-1,result);
result.push(n)
console.log(result);
return result
}
generateArray(4)
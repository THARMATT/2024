
//with loop
function printGfg(n){
for(let i=0;i<n;i++){
    console.log("GfG")
}
}
// printGfg(4)

function printGFG(n){
    if(n===0){
        return
    }
    console.log("GFG");
    printGFG(n-1);
   
}
// printGFG(1)

// for 1-n with loops
function printoneton(n){
   for(let i=1;i<=n;i++){
    console.log(i)
   }
}
// printoneton(5)

// for 1-n without loops
function printOneToN(n){
    if(n<=0){
        return
    }
 
    printOneToN(n-1)
    console.log(n)
}
printOneToN(8)
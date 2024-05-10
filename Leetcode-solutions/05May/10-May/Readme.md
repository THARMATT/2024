# Basics of recursion
## Print n times using recursion
```js
function printGFG(n){
    if(n===0){
        return
    }
    console.log("GFG");
    printGFG(n-1);
   
}
```
## Print 1 to N using recursion
```js
function printOneToN(n){
    if(n<=0){
        return
    }
 
    printOneToN(n-1)
    console.log(n)
}
```
## Print N to 1 using recursion
```js
function printOneToN(n){
    if(n<=0){
        return
    }
  console.log(n)
    printOneToN(n-1)
   
}
```
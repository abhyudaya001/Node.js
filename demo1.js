//normal function
function sum(a,b){
    return a+b;
}
console.log(sum(1,20))
//anonymous function
var sum=function(a,b){
    return a+b;
}
console.log(sum(100,200))
//callback function
function complexEx(){
   console.log(sum(200,300))
}
complexEx(sum)
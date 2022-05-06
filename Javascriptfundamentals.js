/* here i import objects from JsFundamentalother.js file */
const a=require('./JsFundamentalother');
console.log(a)
console.log(a.z())
/*Filter function */
var arr=[2,4,'5',8,0];
let res=arr.filter((item)=>{
    return item>2;
})
console.log(res);


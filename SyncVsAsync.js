
/* Asynchronous functions are generally preferred over synchronous functions as they do not block the execution of the program whereas synchronous functions block the execution of the program until it has finished processing. */
//Synchronous way
const fs=require('fs');
var s=fs.readFileSync('./sample.txt','utf-8');
console.log(s);
//Asynchronous way
fs.readFile('./sample.txt','utf-8',(err,data)=>{
    console.log(data);
});
console.log('Reading file...');
const fs= require('fs');
var s=fs.readFileSync('./sample.txt','utf-8');
console.log(s);
var s1='Helloo i want to add something'+s;
fs.writeFileSync('./sample.txt',s1);
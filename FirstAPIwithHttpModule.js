var http=require('http');  //http module is used for sending and receiving request from server
// http.createServer(function(req,res){
// res.writeHead(200,{'Content-Type':'application\json'})
// res.write('{"name":"anil"}');
// res.end();
// }).listen(3900)
//or we can also write
var data=[
    {name:"abhyudaya",age:"21",email:"abhyudayakandwal001@gmail.com"},
    {name:"abhyudaya",age:"21",email:"abhyudayakandwal001@gmail.com"},
    {name:"abhyudaya",age:"21",email:"abhyudayakandwal001@gmail.com"},
    {name:"abhyudaya",age:"21",email:"abhyudayakandwal001@gmail.com"},
    {name:"abhyudaya",age:"21",email:"abhyudayakandwal001@gmail.com"},
    {name:"abhyudaya",age:"21",email:"abhyudayakandwal001@gmail.com"},
    {name:"abhyudaya",age:"21",email:"abhyudayakandwal001@gmail.com"}
]
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900);

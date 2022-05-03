//server on node js access through localhost:5000
var http=require('http');
http.createServer(function(req,res){   //anonymous function
res.write("Hello from node js server");
res.end();
}).listen(5000)


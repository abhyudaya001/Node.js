var http=require('http');
var page=`
<h1>Hello world</h1>
<br>
<br>
<input type='text' />
<br>
<br>
<input type='text' />
<br>
<br>
<input type='text' />`
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/html"});
    res.write(page);
    res.end();
}).listen(4000);
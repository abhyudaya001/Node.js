/* nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. */
var http=require('http');
http.createServer(function(req,res){
    res.write("Hello nodemoon how are you brooo!!!, hahahahahaswowowowoowow");
    res.end();
}).listen(4000);
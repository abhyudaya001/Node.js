//NPM stand for Node Package Manager
/*NPM is a package manager for Node.js packages, or modules if you like.

www.npmjs.com hosts thousands of free packages to download and use.

The NPM program is installed on your computer when you install Node.js*/

/*Now i use the uppercase npm package which i found on npmjs.com and then wrote its respective code on my terminal */

/* For uninstalling the package we just have to write : npm uninstall upper-case */
var http=require('http');
var uc=require('upper-case')
http.createServer(function(req,res){
    res.write(uc.upperCase("node web page"));
    res.end();
}).listen(1400);
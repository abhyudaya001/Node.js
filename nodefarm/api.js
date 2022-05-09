const http=require('http');
const fs=require('fs');
const url=require('url');
const replaceTemplate=require('./module/replacetemp')
const tempOverview=fs.readFileSync('./templates/overview.html','utf-8');
const tempCard=fs.readFileSync('./templates/template-card.html','utf-8');
const tempProduct=fs.readFileSync('./templates/product.html','utf-8');
const data=fs.readFileSync('./data/data.json','utf-8');
const dataObj=JSON.parse(data);
const server=http.createServer((req,res)=>{
   const{query,pathname}=url.parse(req.url,true);
   console.log(pathname);
   console.log(query);
   const pathName=req.url;
if(pathName==='/'||pathName==='/overview'){
   res.writeHead(200,{'Content-type':'text/html'});
   const cardsHtml=dataObj.map(el=>replaceTemplate(tempCard,el)).join('');
   const output=tempOverview.replace('{%PRODUCTCARDS%}',cardsHtml);
   res.end(output);
}
else if(pathname==='/product'){
   res.writeHead(200,{'Content-type':'text/html'});
   const product=dataObj[query.id];
   const output=replaceTemplate(tempProduct,product);
   res.end(output);
}

});
server.listen(5000,'127.0.0.1',()=>{
console.log('Listning to the server');
});

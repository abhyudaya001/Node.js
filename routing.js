const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/overview') {
        res.end('Hello from the server!');
    }
    else if (pathName === '/hello') {
        res.end('Hello');
    } else if (pathName === '/aryan') {
        res.end('Or bhai aryan');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end("<h1>Page not found</h1>");
    }
});
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
